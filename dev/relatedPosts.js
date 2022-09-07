function lapWszystko(_0x1911a9) {
    var _0x571e18 = _0x1911a9.responseXML.getElementsByTagName('entry');
    for (var _0x410230 = 0x0; _0x410230 < _0x571e18['length']; _0x410230++) {
        var _0x296a77 = {};
        if (_0x571e18[_0x410230].querySelector('link[rel="alternate"]')) {
            _0x296a77['ards'] = _0x571e18[_0x410230].querySelector('link[rel="alternate"]').getAttribute('href');
        } else {
            _0x296a77.ards = '/';
        }
        if (RelatedPostsWidgetSettings.excerptLength > 0x0 && _0x571e18[_0x410230].querySelector('summary')) {
            _0x296a77.tersc = _0x571e18[_0x410230].querySelector('summary')['textContent'].replace(/<(?:.|\n)*?>/gm, '')['substring'](0x0, RelatedPostsWidgetSettings.excerptLength) + '...';
        } else {
            _0x296a77.tersc = '';
        }
        if (_0x571e18[_0x410230].querySelector('title')) {
            _0x296a77['nzwtl'] = _0x571e18[_0x410230].querySelector('title').textContent;
        } else {
            _0x296a77.nzwtl = 'untitled';
        }
        if (_0x571e18[_0x410230].querySelector('published')) {
            _0x296a77.pblkc = _0x571e18[_0x410230].querySelector('published')['textContent'].substring(0x0, 0xa);
        } else {
            _0x296a77.pblkc = '';
        }
        if (_0x571e18[_0x410230].getElementsByTagName('media:thumbnail').length > 0x0) {
            _0x296a77.obrzk = _0x571e18[_0x410230].getElementsByTagName('media:thumbnail')[0x0].getAttribute('url');
        } else {
            _0x296a77.obrzk = 'https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png';
        }
        if (_0x571e18[_0x410230]['getElementsByTagName']('thr:total')['length'] > 0x0) {
            _0x296a77['kemnt'] = Number(_0x571e18[_0x410230].getElementsByTagName('thr:total')[0x0].textContent);
        } else {
            _0x296a77.kemnt = 0x0;
        }
        if (_0x571e18[_0x410230].querySelector('author') && _0x571e18[_0x410230].querySelector('author').querySelector('name')) {
            _0x296a77.altr = _0x571e18[_0x410230].querySelector('author').querySelector('name').textContent;
        } else {
            _0x296a77.altr = 'Anonymous';
        }
        _0x296a77.ketgr = [];
        _0x571e18[_0x410230].querySelectorAll('category[term]').forEach(_0x46c1c1 => {
            _0x296a77['ketgr'].push(_0x46c1c1.getAttribute('term'));
        });
        tablica['push'](_0x296a77);
    }
}

function obliczPodobienstwoe(_0x3cd31e, _0xd7f8b3) {
    let _0x19ccb4 = 0x0;
    for (let _0x559faf = 0x0; _0x559faf < _0xd7f8b3['ketgr'].length; _0x559faf++) {
        if (_0x3cd31e.ketgr.indexOf(_0xd7f8b3.ketgr[_0x559faf]) >= 0x0) _0x19ccb4++;
    }
    _0x19ccb4 = (0x64 - RelatedPostsWidgetSettings['titleImportance']) * _0x19ccb4 / (_0x3cd31e.ketgr.length > 0x0 ? _0x3cd31e.ketgr.length : 0x1);
    let _0x3946fc = 0x0;
    let _0x37ab18 = 0x0;
    let _0x4bb0cf = _0x3cd31e.nzwtl.toLowerCase()['replace'](/[`~!@#$%^&*()_|+-=?;:'",.<>\{\}\[\]\\\/]/gi, ' ').split(' ').filter(_0x207461 => _0x207461['length'] > 0x1);
    for (let _0xbf80cf = 0x0; _0xbf80cf < _0x4bb0cf.length; _0xbf80cf++) {
        _0x37ab18 += _0x4bb0cf[_0xbf80cf]['length'];
        if (_0xd7f8b3.nzwtl.toLowerCase().indexOf(_0x4bb0cf[_0xbf80cf]) >= 0x0) _0x3946fc += _0x4bb0cf[_0xbf80cf]['length'];
    }
    _0x3946fc = RelatedPostsWidgetSettings['titleImportance'] * _0x3946fc / (_0x37ab18 > 0x0 ? _0x37ab18 : 0x1);
    return _0x19ccb4 + _0x3946fc;
}

function zapytaniee(_0x4e96e2, _0x5cfe49) {
    var _0x51e749 = new XMLHttpRequest();
    _0x51e749.open('GET', '/feeds/posts/summary?start-index=' + _0x4e96e2 + '&max-results=' + _0x5cfe49);
    _0x51e749.onload = function () {
        if (_0x51e749.status === 0xc8) {
            ilosc = Number(_0x51e749.responseXML.getElementsByTagName('openSearch:totalResults')[0x0].textContent);
            lapWszystko(_0x51e749);
        }
        if (_0x4e96e2 + _0x5cfe49 - 0x1 < ilosc) {
            zapytaniee(_0x4e96e2 + 0x96, _0x5cfe49);
        } else {
            gotowosce(tablica);
        }
    };
    _0x51e749.send();
}

function czyscLink(_0x2e7aad) {
    let _0x274de2 = _0x2e7aad.replace('https://', '').replace('http://', '').split('?')[0x0]['split']('#')[0x0];
    if (_0x274de2['substring'](0x0, 0x4) === 'www.') _0x274de2 = _0x274de2['replace']('www.', '');
    _0x274de2 = _0x274de2.substring(_0x274de2.indexOf('/'));
    return _0x274de2;
}

function gotowosce(_0x32f438) {
    let _0xf27311 = _0x32f438.filter(_0x135545 => czyscLink(_0x135545.ards) === czyscLink(location.href));
    let _0x35449d;
    if (_0xf27311.length > 0x0) {
        _0x35449d = _0xf27311[0x0];
    } else {
        const _0x26a304 = {};
        _0x26a304.ketgr = [];
        _0x26a304.nzwtl = document['title'];
        _0x35449d = _0x26a304;
    }
    _0x32f438.forEach(_0x4a1549 => _0x4a1549['podob'] = obliczPodobienstwoe(_0x35449d, _0x4a1549));
    _0x32f438['sort']((_0x445e27, _0x25965d) => _0x25965d.podob - _0x445e27.podob);
    for (let _0x1fa971 = 0x0; _0x1fa971 < RelatedPostsWidgetSettings.numberOfPosts && _0x1fa971 < _0x32f438.length; _0x1fa971++) {
        if (_0x32f438[_0x1fa971] !== _0x35449d) {
            let _0x204c30 = document.createElement('a');
            _0x204c30['href'] = _0x32f438[_0x1fa971].ards;
            _0x204c30.title = _0x32f438[_0x1fa971].nzwtl;
            _0x204c30.setAttribute('class', 'PBPrelatedPost');
            let _0x30c35b = RelatedPostsWidgetSettings.htmlTemplate;
            let _0x40fc39 = /\<labelsLoop\>(?:(?!\<labelsLoop\>|\<\/labelsLoop\>).)*?\<\/labelsLoop\>/g;
            while (_0x40fc39.test(_0x30c35b)) {
                _0x30c35b = _0x30c35b.replace(_0x40fc39, function (_0x305256) {
                    let _0x35a09e = _0x305256['replace']('<labelsLoop>', '').replace('</labelsLoop>', '');
                    let _0x2de1ae = '';
                    _0x32f438[_0x1fa971].ketgr['forEach'](_0x542cce => _0x2de1ae += _0x35a09e.replace(/\$label\$/g, _0x542cce));
                    return _0x2de1ae;
                });
            }
            for (let _0x79834d in zmienne) {
                let _0x59a9e8 = _0x32f438[_0x1fa971][zmienne[_0x79834d]];
                if (_0x79834d == 'similarity') {
                    _0x59a9e8 = Math.round(_0x59a9e8) + '%';
                } else if (_0x79834d == 'labels') {
                    _0x59a9e8 = _0x59a9e8.join(', ');
                }
                _0x30c35b = _0x30c35b.split('$' + _0x79834d + '$')['join'](_0x59a9e8);
            }
            _0x204c30['innerHTML'] = _0x30c35b;
            blok.appendChild(_0x204c30);
        } else {
            RelatedPostsWidgetSettings.numberOfPosts++;
        }
    }
    if (RelatedPostsWidgetSettings.display === 'horizontal') {
        let _0x29cc67 = 0x0;
        blok.querySelectorAll('a.PBPrelatedPost > .relatedPostBox').forEach(_0x4ffdc9 => {
            if (_0x4ffdc9.offsetHeight > _0x29cc67) _0x29cc67 = _0x4ffdc9.offsetHeight;
        });
        blok.querySelectorAll('a.PBPrelatedPost > .relatedPostBox').forEach(_0x4f6423 => _0x4f6423.style.height = _0x29cc67 + 'px');
    }
}

function deletor(_0x1c614) {
    if (_0x1c614['classList'].contains('widget')) {
        _0x1c614.style.display = 'none';
    } else if (_0x1c614.parentNode && _0x1c614.parentNode !== document.body) {
        deletor(_0x1c614.parentNode);
    }
}
const miejsce = document.querySelector('script[src="https://yuushaexa.github.io/web/dev/relatedPosts%20(1).js"]');
if (/.*\/\d{4}\/\d{2}\/.*\.html/ ['test'](location.href)) {
    blok = document.createElement('div');
    blok.setAttribute('class', 'RelatedPostsWidget');
    miejsce.parentNode.insertBefore(blok, miejsce);
    if (typeof RelatedPostsWidgetSettings != 'object') {
        const br0vx_0x56ef8e = {};
        br0vx_0x56ef8e.excerptLength = 0x8c;
        br0vx_0x56ef8e.numberOfPosts = 0x5;
        br0vx_0x56ef8e.display = 'vertical';
        br0vx_0x56ef8e.htmlTemplate = '<div style="padding:5px;border:1px solid black;background:lightblue;border-radius:5px;"><img style="width:50px;float:left;margin:0 5px 5px 0;" src="$imageURL$"><div>$title$ ($similarity$)</div><div>$excerpt$</div><div><span style="margin-right:5px;">$comments$</span><span style="margin-right:5px;">$author$</span><span>$date$</span></div><div>$labels$</div></div>';
        br0vx_0x56ef8e.titleImportance = 0x1e;
        RelatedPostsWidgetSettings = br0vx_0x56ef8e;
    }
    if (RelatedPostsWidgetSettings.display != 'horizontal') RelatedPostsWidgetSettings.display = 'vertical';
    RelatedPostsWidgetSettings.excerptLength = Number(RelatedPostsWidgetSettings.excerptLength);
    if (typeof RelatedPostsWidgetSettings.excerptLength == 'undefined' || isNaN(RelatedPostsWidgetSettings.excerptLength) || RelatedPostsWidgetSettings.excerptLength < 0x0) {
        RelatedPostsWidgetSettings.excerptLength = 0x8c;
    }
    RelatedPostsWidgetSettings.numberOfPosts = Number(RelatedPostsWidgetSettings.numberOfPosts);
    if (typeof RelatedPostsWidgetSettings.numberOfPosts == 'undefined' || isNaN(RelatedPostsWidgetSettings['numberOfPosts']) || RelatedPostsWidgetSettings.numberOfPosts < 0x0) {
        RelatedPostsWidgetSettings['numberOfPosts'] = 0x5;
    }
    if (typeof RelatedPostsWidgetSettings['htmlTemplate'] != 'string') {
        RelatedPostsWidgetSettings.htmlTemplate = '<div style="padding:5px;border:1px solid black;background:lightblue;border-radius:5px;"><img style="width:50px;float:left;margin:0 5px 5px 0;" src="$imageURL$"><div>$title$ ($similarity$)</div><div>$excerpt$</div><div><span style="margin-right:5px;">$comments$</span><span style="margin-right:5px;">$author$</span><span>$date$</span></div><div>$labels$</div></div>';
    }
    RelatedPostsWidgetSettings.titleImportance = Number(RelatedPostsWidgetSettings.titleImportance);
    if (typeof RelatedPostsWidgetSettings.titleImportance == 'undefined' || isNaN(RelatedPostsWidgetSettings.titleImportance) || RelatedPostsWidgetSettings.titleImportance < 0x0 || RelatedPostsWidgetSettings.titleImportance > 0x64) {
        RelatedPostsWidgetSettings.titleImportance = 0x1e;
    }
    tablica = [];
    const br0vx_0x4a6db0 = {};
    br0vx_0x4a6db0.url = 'ards';
    br0vx_0x4a6db0['title'] = 'nzwtl';
    br0vx_0x4a6db0.similarity = 'podob';
    br0vx_0x4a6db0.imageURL = 'obrzk';
    br0vx_0x4a6db0.excerpt = 'tersc';
    br0vx_0x4a6db0.date = 'pblkc';
    br0vx_0x4a6db0.comments = 'kemnt';
    br0vx_0x4a6db0['author'] = 'altr';
    br0vx_0x4a6db0.labels = 'ketgr';
    zmienne = br0vx_0x4a6db0;
    zapytaniee(0x1, 0x96);
    const stylizator = document.createElement('style');
    stylizator['innerHTML'] = '\x0a\x09\x09.RelatedPostsWidget a.PBPrelatedPost {margin:5px;padding:0;display:' + (RelatedPostsWidgetSettings.display === 'horizontal' ? 'inline-block;vertical-align:top;' : 'block') + `;color:black;text-decoration:none;}\
		.RelatedPostsWidget a.PBPrelatedPost:hover {opacity:0.8;}\
		.RelatedPostsWidget a.PBPrelatedPost:active {transform:scale(0.98,0.98);}\
		.RelatedPostsWidget a.PBPrelatedPost:after {content:'';display:block;clear:both;}\
	`;
    document.head.appendChild(stylizator);
} else {
    deletor(miejsce);
}
