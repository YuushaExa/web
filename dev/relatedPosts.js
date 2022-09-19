function lapWszystko(name) {
    var PL$13 = name.responseXML.getElementsByTagName('entry');

    var PL$17 = 0;
    for (; PL$17 < PL$13.length; PL$17++) {
        var value = {};
        if (PL$13[PL$17].querySelector('link[rel="alternate"]')) {
            value.ards = PL$13[PL$17].querySelector('link[rel="alternate"]').getAttribute('href');
        } else {

            value.ards = "/";
        }
        if (RelatedPostsWidgetSettings.excerptLength > 0 && PL$13[PL$17].querySelector('summary')) {
            value.tersc = PL$13[PL$17].querySelector('summary').textContent.replace(/<(?:.|\n)*?>/gm, "").substring(0, RelatedPostsWidgetSettings.excerptLength) + '...';
        } else {

            value.tersc = "";
        }
        if (PL$13[PL$17].querySelector('title')) {
            value.nzwtl = PL$13[PL$17].querySelector('title').textContent;
        } else {
            value.nzwtl = 'untitled';
        }
        if (PL$13[PL$17].querySelector('published')) {
            value.pblkc = PL$13[PL$17].querySelector('published').textContent.substring(0, 10);
        } else {

            value.pblkc = "";
        }
        if (PL$13[PL$17].getElementsByTagName('media:thumbnail').length > 0) {
            value.obrzk = PL$13[PL$17].getElementsByTagName('media:thumbnail')[0].getAttribute('url');
	    value.obrzk = value.obrzk.replace("/s72-c/","/w414-h206-p-k-no-nu/");
        } else {

            value.obrzk = "https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png";
        }
        if (PL$13[PL$17].getElementsByTagName("thr:total").length > 0) {

            value.kemnt = Number(PL$13[PL$17].getElementsByTagName('thr:total')[0].textContent);
        } else {

            value.kemnt = 0;
        }
        if (PL$13[PL$17].querySelector('author') && PL$13[PL$17].querySelector('author').querySelector("name")) {
            value.altr = PL$13[PL$17].querySelector('author').querySelector('name').textContent;
        } else {
            value.altr = 'Anonymous';
        }

        value.ketgr = [];
        PL$13[PL$17].querySelectorAll('category[term]').forEach((canCreateDiscussions) => {
            value.ketgr.push(canCreateDiscussions.getAttribute('term'));
        });
        tablica.push(value);
    }
}

function obliczPodobienstwoe(objId, data) {
    let _sceneWidth = 0;
    for (let t = 0; t < data.ketgr.length; t++) {
        if (objId.ketgr.indexOf(data.ketgr[t]) >= 0) {
            _sceneWidth++;
        }
    }

    _sceneWidth = (100 - RelatedPostsWidgetSettings.titleImportance) * _sceneWidth / (objId.ketgr.length > 0 ? objId.ketgr.length : 1);
    let offset = 0;
    let sum = 0;
    let res = objId.nzwtl.toLowerCase().replace(/[`~!@#$%^&*()_|+-=?;:'",.<>\{\}\[\]\\\/]/gi, " ").split(" ").filter((PL$103) => {
        return PL$103.length > 1;
    });
    for (let i = 0; i < res.length; i++) {
        sum = sum + res[i].length;
        if (data.nzwtl.toLowerCase().indexOf(res[i]) >= 0) {
            offset = offset + res[i].length;
        }
    }

    offset = RelatedPostsWidgetSettings.titleImportance * offset / (sum > 0 ? sum : 1);
    return _sceneWidth + offset;
}

function zapytaniee(lines, line) {

    var reporter = new XMLHttpRequest;
    reporter.open('GET', '/feeds/posts/summary?start-index=' + lines + '&max-results=' + line);

    reporter.onload = function () {
        if (reporter.status === 200) {

            ilosc = Number(reporter.responseXML.getElementsByTagName('openSearch:totalResults')[0].textContent);
            lapWszystko(reporter);
        }
        if (lines + line - 1 < ilosc) {
            zapytaniee(lines + 150, line);
        } else {
            gotowosce(tablica);
        }
    };
    reporter.send();
}

function czyscLink(placement) {
    let colorString = placement.replace("https://", "").replace('http://', "").split("?")[0].split("#")[0];
    if (colorString.substring(0, 4) === 'www.') {
        colorString = colorString.replace('www.', "");
    }
    colorString = colorString.substring(colorString.indexOf("/"));
    return colorString;
}

function gotowosce(cols) {
    let state = cols.filter((canCreateDiscussions) => {
        return czyscLink(canCreateDiscussions.ards) === czyscLink(location.href);
    });
    let data;
    if (state.length > 0) {
        data = state[0];
    } else {
        var result = {};

        result.ketgr = [];
        result.nzwtl = document.title;
        data = result;
    }
    cols.forEach((args) => {
        return args.podob = obliczPodobienstwoe(data, args);
    });
    cols.sort((subtractee, subtractor) => {
        return subtractor.podob - subtractee.podob;
    });
    for (let x = 0; x < RelatedPostsWidgetSettings.numberOfPosts && x < cols.length; x++) {
        if (cols[x] !== data) {
            let element = document.createElement("a");
            element.href = cols[x].ards;
            element.title = cols[x].nzwtl;
            element.setAttribute('class', "PBPrelatedPost");
            let text = RelatedPostsWidgetSettings.htmlTemplate;
            let module = /<labelsLoop>(?:(?!<labelsLoop>|<\/labelsLoop>).)*?<\/labelsLoop>/g;
            for (; module.test(text);) {
                text = text.replace(module, function (colorString) {
                    let filter = colorString.replace("<labelsLoop>", "").replace('</labelsLoop>', "");
                    let output_text = "";
                    cols[x].ketgr.forEach((type) => {
                        return output_text = output_text + filter.replace(/\$label\$/g, type);
                    });
                    return output_text;
                });
            }
            for (let i in zmienne) {
                let value = cols[x][zmienne[i]];
                if (i == 'similarity') {
                    value = Math.round(value) + "%";
                } else {
                    if (i == 'labels') {
                        value = value.join(", ");
                    }
                }
                text = text.split("$" + i + "$").join(value);
            }
            element.innerHTML = text;
            blok.appendChild(element);
        } else {
            RelatedPostsWidgetSettings.numberOfPosts++;
        }
    }
    if (RelatedPostsWidgetSettings.display === "horizontal") {
        let max = 0;
        blok.querySelectorAll('a.PBPrelatedPost > .relatedPostBox').forEach((mag) => {
            if (mag.offsetHeight > max) {
                max = mag.offsetHeight;
            }
        });
        blok.querySelectorAll('a.PBPrelatedPost > .relatedPostBox').forEach((canCreateDiscussions) => {
            return canCreateDiscussions.style.height = max + "px";
        });
    }
}

function deletor(element) {
    if (element.classList.contains("widget")) {

        element.style.display = "none";
    } else {
        if (element.parentNode && element.parentNode !== document.body) {
            deletor(element.parentNode);
        }
    }
}
var miejsce = document.querySelector('script[src="https://yuushaexa.github.io/web/dev/relatedPosts.js"]');
if (/.*\/\d{4}\/\d{2}\/.*\.html/ ['test'](location.href)) {
    blok = document.createElement('div');
    blok.setAttribute('class', 'RelatedPostsWidget');
    miejsce.parentNode.insertBefore(blok, miejsce);
    if (typeof RelatedPostsWidgetSettings != 'object') {
        var br0vx_0x56ef8e = {};

        br0vx_0x56ef8e.excerptLength = 140;

        br0vx_0x56ef8e.numberOfPosts = 5;
        br0vx_0x56ef8e.display = 'vertical';
        br0vx_0x56ef8e.htmlTemplate = '<div style="padding:5px;border:1px solid black;background:lightblue;border-radius:5px;"><img style="width:50px;float:left;margin:0 5px 5px 0;" data-src="$imageURL$"><div>$title$ ($similarity$)</div><div>$excerpt$</div><div><span style="margin-right:5px;">$comments$</span><span style="margin-right:5px;">$author$</span><span>$date$</span></div><div>$labels$</div></div>';

        br0vx_0x56ef8e.titleImportance = 30;
        RelatedPostsWidgetSettings = br0vx_0x56ef8e;
    }
    if (RelatedPostsWidgetSettings.display != 'horizontal') {
        RelatedPostsWidgetSettings.display = 'vertical';
    }

    RelatedPostsWidgetSettings.excerptLength = Number(RelatedPostsWidgetSettings.excerptLength);
    if (typeof RelatedPostsWidgetSettings.excerptLength == 'undefined' || isNaN(RelatedPostsWidgetSettings.excerptLength) || RelatedPostsWidgetSettings.excerptLength < 0) {

        RelatedPostsWidgetSettings.excerptLength = 140;
    }

    RelatedPostsWidgetSettings.numberOfPosts = Number(RelatedPostsWidgetSettings.numberOfPosts);
    if (typeof RelatedPostsWidgetSettings.numberOfPosts == 'undefined' || isNaN(RelatedPostsWidgetSettings.numberOfPosts) || RelatedPostsWidgetSettings.numberOfPosts < 0) {

        RelatedPostsWidgetSettings.numberOfPosts = 5;
    }
    if (typeof RelatedPostsWidgetSettings.htmlTemplate != 'string') {
        RelatedPostsWidgetSettings.htmlTemplate = '<div style="padding:5px;border:1px solid black;background:lightblue;border-radius:5px;"><img style="width:50px;float:left;margin:0 5px 5px 0;" data-src="$imageURL$"><div>$title$ ($similarity$)</div><div>$excerpt$</div><div><span style="margin-right:5px;">$comments$</span><span style="margin-right:5px;">$author$</span><span>$date$</span></div><div>$labels$</div></div>';
    }

    RelatedPostsWidgetSettings.titleImportance = Number(RelatedPostsWidgetSettings.titleImportance);
    if (typeof RelatedPostsWidgetSettings.titleImportance == 'undefined' || isNaN(RelatedPostsWidgetSettings.titleImportance) || RelatedPostsWidgetSettings.titleImportance < 0 || RelatedPostsWidgetSettings.titleImportance > 100) {

        RelatedPostsWidgetSettings.titleImportance = 30;
    }

    tablica = [];
    var update_map = {};
    update_map.url = 'ards';

    update_map.title = "nzwtl";
    update_map.similarity = 'podob';
    update_map.imageURL = 'obrzk';
    update_map.excerpt = 'tersc';

    update_map.date = "pblkc";

    update_map.comments = "kemnt";
    update_map.author = 'altr';
    update_map.labels = 'ketgr';
    zmienne = update_map;
    zapytaniee(1, 150);
    var PDIV = document.createElement('style');
    PDIV.innerHTML = "\n\t\t.RelatedPostsWidget a.PBPrelatedPost {margin:5px;padding:0;display:" + (RelatedPostsWidgetSettings.display === 'horizontal' ? "inline-block;vertical-align:top;" : "block") + `;color:black;text-decoration:none;}\
		.RelatedPostsWidget a.PBPrelatedPost:hover {opacity:0.8;}\
		.RelatedPostsWidget a.PBPrelatedPost:active {transform:scale(0.98,0.98);}\
		.RelatedPostsWidget a.PBPrelatedPost:after {content:'';display:block;clear:both;}\
	`;
    document.head.appendChild(PDIV);
} else {
    deletor(miejsce);
};
