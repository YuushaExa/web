var br0vx_0x13ed = ["title", "titleImportance", 'script[src="https://yuushaexa.github.io/web/dev/relatedPosts.js"]', "url", "undefined", "getElementsByTagName", "display", "send", "round", "Anonymous", "head", "untitled", "div", "open", "GET", "contains", "/feeds/posts/summary?start-index=", "numberOfPosts", "getAttribute", "nzwtl", "ketgr", "appendChild", "tersc", "similarity", "replace", "published", "horizontal", "push", "summary", "status", "filter", "parentNode", 
"body", "date", '<div style="padding:5px;border:1px solid black;background:lightblue;border-radius:5px;"><img style="width:50px;float:left;margin:0 5px 5px 0;" src="$imageURL$"><div>$title$ ($similarity$)</div><div>$excerpt$</div><div><span style="margin-right:5px;">$comments$</span><span style="margin-right:5px;">$author$</span><span>$date$</span></div><div>$labels$</div></div>', "entry", "openSearch:totalResults", "thr:total", "kemnt", "altr", ";color:black;text-decoration:none;}\n\t\t.RelatedPostsWidget a.PBPrelatedPost:hover {opacity:0.8;}\n\t\t.RelatedPostsWidget a.PBPrelatedPost:active {transform:scale(0.98,0.98);}\n\t\t.RelatedPostsWidget a.PBPrelatedPost:after {content:'';display:block;clear:both;}\n\t", 
"http://", "imageURL", "category[term]", "media:thumbnail", "class", "name", "htmlTemplate", "forEach", "toLowerCase", "</labelsLoop>", "obrzk", "&max-results=", "onload", "pblkc", "textContent", "author", "insertBefore", "excerpt", "length", "...", "querySelector", "excerptLength", "offsetHeight", "createElement", "substring", "height", "href", "style", "vertical", 'link[rel="alternate"]', "indexOf", "podob", "setAttribute", "object", "www.", "responseXML", "term", "a.PBPrelatedPost > .relatedPostBox", 
"ards", "test", "comments", "join", "labels", "split", "querySelectorAll", "string", "RelatedPostsWidget"];
(function(data, i) {
  var write = function(isLE) {
    for (; --isLE;) {
      data["push"](data["shift"]());
    }
  };
  write(++i);
})(br0vx_0x13ed, 285);
var br0vx_0xc534 = function(url, whensCollection) {
  /** @type {number} */
  url = url - 0;
  let _0xc53424 = br0vx_0x13ed[url];
  return _0xc53424;
};
/**
 * @param {!XMLHttpRequest} name
 * @return {undefined}
 */
function lapWszystko(name) {
  var PL$13 = name[br0vx_0xc534("0x37")][br0vx_0xc534("0x48")](br0vx_0xc534("0xe"));
  /** @type {number} */
  var PL$17 = 0;
  for (; PL$17 < PL$13["length"]; PL$17++) {
    var value = {};
    if (PL$13[PL$17][br0vx_0xc534("0x28")](br0vx_0xc534("0x31"))) {
      value["ards"] = PL$13[PL$17][br0vx_0xc534("0x28")](br0vx_0xc534("0x31"))[br0vx_0xc534("0x55")](br0vx_0xc534("0x2e"));
    } else {
      /** @type {string} */
      value[br0vx_0xc534("0x3a")] = "/";
    }
    if (RelatedPostsWidgetSettings[br0vx_0xc534("0x29")] > 0 && PL$13[PL$17][br0vx_0xc534("0x28")](br0vx_0xc534("0x7"))) {
      value[br0vx_0xc534("0x1")] = PL$13[PL$17][br0vx_0xc534("0x28")](br0vx_0xc534("0x7"))["textContent"][br0vx_0xc534("0x3")](/<(?:.|\n)*?>/gm, "")["substring"](0, RelatedPostsWidgetSettings[br0vx_0xc534("0x29")]) + br0vx_0xc534("0x27");
    } else {
      /** @type {string} */
      value[br0vx_0xc534("0x1")] = "";
    }
    if (PL$13[PL$17][br0vx_0xc534("0x28")](br0vx_0xc534("0x43"))) {
      value["nzwtl"] = PL$13[PL$17][br0vx_0xc534("0x28")](br0vx_0xc534("0x43"))[br0vx_0xc534("0x22")];
    } else {
      value[br0vx_0xc534("0x56")] = br0vx_0xc534("0x4e");
    }
    if (PL$13[PL$17][br0vx_0xc534("0x28")](br0vx_0xc534("0x4"))) {
      value[br0vx_0xc534("0x21")] = PL$13[PL$17][br0vx_0xc534("0x28")](br0vx_0xc534("0x4"))["textContent"][br0vx_0xc534("0x2c")](0, 10);
    } else {
      /** @type {string} */
      value[br0vx_0xc534("0x21")] = "";
    }
    if (PL$13[PL$17][br0vx_0xc534("0x48")](br0vx_0xc534("0x17"))[br0vx_0xc534("0x26")] > 0) {
      value[br0vx_0xc534("0x1e")] = PL$13[PL$17][br0vx_0xc534("0x48")](br0vx_0xc534("0x17"))[0][br0vx_0xc534("0x55")](br0vx_0xc534("0x46"));
    } else {
      /** @type {string} */
      value[br0vx_0xc534("0x1e")] = "https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png";
    }
    if (PL$13[PL$17]["getElementsByTagName"]("thr:total")["length"] > 0) {
      /** @type {number} */
      value["kemnt"] = Number(PL$13[PL$17][br0vx_0xc534("0x48")](br0vx_0xc534("0x10"))[0][br0vx_0xc534("0x22")]);
    } else {
      /** @type {number} */
      value[br0vx_0xc534("0x11")] = 0;
    }
    if (PL$13[PL$17][br0vx_0xc534("0x28")](br0vx_0xc534("0x23")) && PL$13[PL$17][br0vx_0xc534("0x28")](br0vx_0xc534("0x23"))[br0vx_0xc534("0x28")]("name")) {
      value[br0vx_0xc534("0x12")] = PL$13[PL$17][br0vx_0xc534("0x28")](br0vx_0xc534("0x23"))[br0vx_0xc534("0x28")](br0vx_0xc534("0x19"))[br0vx_0xc534("0x22")];
    } else {
      value[br0vx_0xc534("0x12")] = br0vx_0xc534("0x4c");
    }
    /** @type {!Array} */
    value[br0vx_0xc534("0x57")] = [];
    PL$13[PL$17][br0vx_0xc534("0x40")](br0vx_0xc534("0x16"))[br0vx_0xc534("0x1b")]((canCreateDiscussions) => {
      value["ketgr"][br0vx_0xc534("0x6")](canCreateDiscussions[br0vx_0xc534("0x55")](br0vx_0xc534("0x38")));
    });
    tablica["push"](value);
  }
}
/**
 * @param {?} objId
 * @param {!Object} data
 * @return {?}
 */
function obliczPodobienstwoe(objId, data) {
  let _sceneWidth = 0;
  for (let t = 0; t < data["ketgr"][br0vx_0xc534("0x26")]; t++) {
    if (objId[br0vx_0xc534("0x57")][br0vx_0xc534("0x32")](data[br0vx_0xc534("0x57")][t]) >= 0) {
      _sceneWidth++;
    }
  }
  /** @type {number} */
  _sceneWidth = (100 - RelatedPostsWidgetSettings["titleImportance"]) * _sceneWidth / (objId[br0vx_0xc534("0x57")][br0vx_0xc534("0x26")] > 0 ? objId[br0vx_0xc534("0x57")][br0vx_0xc534("0x26")] : 1);
  let offset = 0;
  let sum = 0;
  let res = objId[br0vx_0xc534("0x56")][br0vx_0xc534("0x1c")]()["replace"](/[`~!@#$%^&*()_|+-=?;:'",.<>\{\}\[\]\\\/]/gi, " ")[br0vx_0xc534("0x3f")](" ")[br0vx_0xc534("0x9")]((PL$103) => {
    return PL$103["length"] > 1;
  });
  for (let i = 0; i < res[br0vx_0xc534("0x26")]; i++) {
    sum = sum + res[i]["length"];
    if (data[br0vx_0xc534("0x56")][br0vx_0xc534("0x1c")]()[br0vx_0xc534("0x32")](res[i]) >= 0) {
      offset = offset + res[i]["length"];
    }
  }
  /** @type {number} */
  offset = RelatedPostsWidgetSettings["titleImportance"] * offset / (sum > 0 ? sum : 1);
  return _sceneWidth + offset;
}
/**
 * @param {number} lines
 * @param {number} line
 * @return {undefined}
 */
function zapytaniee(lines, line) {
  /** @type {!XMLHttpRequest} */
  var reporter = new XMLHttpRequest;
  reporter[br0vx_0xc534("0x50")](br0vx_0xc534("0x51"), br0vx_0xc534("0x53") + lines + br0vx_0xc534("0x1f") + line);
  /**
   * @return {undefined}
   */
  reporter[br0vx_0xc534("0x20")] = function() {
    if (reporter[br0vx_0xc534("0x8")] === 200) {
      /** @type {number} */
      ilosc = Number(reporter[br0vx_0xc534("0x37")][br0vx_0xc534("0x48")](br0vx_0xc534("0xf"))[0][br0vx_0xc534("0x22")]);
      lapWszystko(reporter);
    }
    if (lines + line - 1 < ilosc) {
      zapytaniee(lines + 150, line);
    } else {
      gotowosce(tablica);
    }
  };
  reporter[br0vx_0xc534("0x4a")]();
}
/**
 * @param {?} placement
 * @return {?}
 */
function czyscLink(placement) {
  let colorString = placement[br0vx_0xc534("0x3")]("https://", "")[br0vx_0xc534("0x3")](br0vx_0xc534("0x14"), "")[br0vx_0xc534("0x3f")]("?")[0]["split"]("#")[0];
  if (colorString["substring"](0, 4) === br0vx_0xc534("0x36")) {
    colorString = colorString["replace"](br0vx_0xc534("0x36"), "");
  }
  colorString = colorString[br0vx_0xc534("0x2c")](colorString[br0vx_0xc534("0x32")]("/"));
  return colorString;
}
/**
 * @param {!Object} cols
 * @return {undefined}
 */
function gotowosce(cols) {
  let state = cols[br0vx_0xc534("0x9")]((canCreateDiscussions) => {
    return czyscLink(canCreateDiscussions[br0vx_0xc534("0x3a")]) === czyscLink(location[br0vx_0xc534("0x2e")]);
  });
  let data;
  if (state[br0vx_0xc534("0x26")] > 0) {
    data = state[0];
  } else {
    var result = {};
    /** @type {!Array} */
    result[br0vx_0xc534("0x57")] = [];
    result[br0vx_0xc534("0x56")] = document["title"];
    data = result;
  }
  cols[br0vx_0xc534("0x1b")]((args) => {
    return args["podob"] = obliczPodobienstwoe(data, args);
  });
  cols["sort"]((subtractee, subtractor) => {
    return subtractor[br0vx_0xc534("0x33")] - subtractee[br0vx_0xc534("0x33")];
  });
  for (let x = 0; x < RelatedPostsWidgetSettings[br0vx_0xc534("0x54")] && x < cols[br0vx_0xc534("0x26")]; x++) {
    if (cols[x] !== data) {
      let element = document[br0vx_0xc534("0x2b")]("a");
      element["href"] = cols[x][br0vx_0xc534("0x3a")];
      element[br0vx_0xc534("0x43")] = cols[x][br0vx_0xc534("0x56")];
      element[br0vx_0xc534("0x34")](br0vx_0xc534("0x18"), "PBPrelatedPost");
      let text = RelatedPostsWidgetSettings[br0vx_0xc534("0x1a")];
      let module = /<labelsLoop>(?:(?!<labelsLoop>|<\/labelsLoop>).)*?<\/labelsLoop>/g;
      for (; module[br0vx_0xc534("0x3b")](text);) {
        text = text[br0vx_0xc534("0x3")](module, function(colorString) {
          let filter = colorString["replace"]("<labelsLoop>", "")[br0vx_0xc534("0x3")](br0vx_0xc534("0x1d"), "");
          let output_text = "";
          cols[x][br0vx_0xc534("0x57")]["forEach"]((type) => {
            return output_text = output_text + filter[br0vx_0xc534("0x3")](/\$label\$/g, type);
          });
          return output_text;
        });
      }
      for (let i in zmienne) {
        let value = cols[x][zmienne[i]];
        if (i == br0vx_0xc534("0x2")) {
          value = Math[br0vx_0xc534("0x4b")](value) + "%";
        } else {
          if (i == br0vx_0xc534("0x3e")) {
            value = value[br0vx_0xc534("0x3d")](", ");
          }
        }
        text = text[br0vx_0xc534("0x3f")]("$" + i + "$")["join"](value);
      }
      element["innerHTML"] = text;
      blok[br0vx_0xc534("0x0")](element);
    } else {
      RelatedPostsWidgetSettings[br0vx_0xc534("0x54")]++;
    }
  }
  if (RelatedPostsWidgetSettings[br0vx_0xc534("0x49")] === "horizontal") {
    let max = 0;
    blok[br0vx_0xc534("0x40")](br0vx_0xc534("0x39"))[br0vx_0xc534("0x1b")]((mag) => {
      if (mag[br0vx_0xc534("0x2a")] > max) {
        max = mag[br0vx_0xc534("0x2a")];
      }
    });
    blok[br0vx_0xc534("0x40")](br0vx_0xc534("0x39"))[br0vx_0xc534("0x1b")]((canCreateDiscussions) => {
      return canCreateDiscussions[br0vx_0xc534("0x2f")][br0vx_0xc534("0x2d")] = max + "px";
    });
  }
}
/**
 * @param {!Element} element
 * @return {undefined}
 */
function deletor(element) {
  if (element["classList"][br0vx_0xc534("0x52")]("widget")) {
    /** @type {string} */
    element[br0vx_0xc534("0x2f")][br0vx_0xc534("0x49")] = "none";
  } else {
    if (element[br0vx_0xc534("0xa")] && element[br0vx_0xc534("0xa")] !== document[br0vx_0xc534("0xb")]) {
      deletor(element[br0vx_0xc534("0xa")]);
    }
  }
}
var miejsce = document[br0vx_0xc534("0x28")](br0vx_0xc534("0x45"));
if (/.*\/\d{4}\/\d{2}\/.*\.html/[br0vx_0xc534("0x3b")](location[br0vx_0xc534("0x2e")])) {
  blok = document[br0vx_0xc534("0x2b")](br0vx_0xc534("0x4f"));
  blok[br0vx_0xc534("0x34")](br0vx_0xc534("0x18"), br0vx_0xc534("0x42"));
  miejsce[br0vx_0xc534("0xa")][br0vx_0xc534("0x24")](blok, miejsce);
  if (typeof RelatedPostsWidgetSettings != br0vx_0xc534("0x35")) {
    var br0vx_0x56ef8e = {};
    /** @type {number} */
    br0vx_0x56ef8e[br0vx_0xc534("0x29")] = 140;
    /** @type {number} */
    br0vx_0x56ef8e[br0vx_0xc534("0x54")] = 5;
    br0vx_0x56ef8e[br0vx_0xc534("0x49")] = br0vx_0xc534("0x30");
    br0vx_0x56ef8e[br0vx_0xc534("0x1a")] = br0vx_0xc534("0xd");
    /** @type {number} */
    br0vx_0x56ef8e[br0vx_0xc534("0x44")] = 30;
    RelatedPostsWidgetSettings = br0vx_0x56ef8e;
  }
  if (RelatedPostsWidgetSettings[br0vx_0xc534("0x49")] != br0vx_0xc534("0x5")) {
    RelatedPostsWidgetSettings[br0vx_0xc534("0x49")] = br0vx_0xc534("0x30");
  }
  /** @type {number} */
  RelatedPostsWidgetSettings[br0vx_0xc534("0x29")] = Number(RelatedPostsWidgetSettings[br0vx_0xc534("0x29")]);
  if (typeof RelatedPostsWidgetSettings[br0vx_0xc534("0x29")] == br0vx_0xc534("0x47") || isNaN(RelatedPostsWidgetSettings[br0vx_0xc534("0x29")]) || RelatedPostsWidgetSettings[br0vx_0xc534("0x29")] < 0) {
    /** @type {number} */
    RelatedPostsWidgetSettings[br0vx_0xc534("0x29")] = 140;
  }
  /** @type {number} */
  RelatedPostsWidgetSettings[br0vx_0xc534("0x54")] = Number(RelatedPostsWidgetSettings[br0vx_0xc534("0x54")]);
  if (typeof RelatedPostsWidgetSettings[br0vx_0xc534("0x54")] == br0vx_0xc534("0x47") || isNaN(RelatedPostsWidgetSettings["numberOfPosts"]) || RelatedPostsWidgetSettings[br0vx_0xc534("0x54")] < 0) {
    /** @type {number} */
    RelatedPostsWidgetSettings["numberOfPosts"] = 5;
  }
  if (typeof RelatedPostsWidgetSettings["htmlTemplate"] != br0vx_0xc534("0x41")) {
    RelatedPostsWidgetSettings[br0vx_0xc534("0x1a")] = br0vx_0xc534("0xd");
  }
  /** @type {number} */
  RelatedPostsWidgetSettings[br0vx_0xc534("0x44")] = Number(RelatedPostsWidgetSettings[br0vx_0xc534("0x44")]);
  if (typeof RelatedPostsWidgetSettings[br0vx_0xc534("0x44")] == br0vx_0xc534("0x47") || isNaN(RelatedPostsWidgetSettings[br0vx_0xc534("0x44")]) || RelatedPostsWidgetSettings[br0vx_0xc534("0x44")] < 0 || RelatedPostsWidgetSettings[br0vx_0xc534("0x44")] > 100) {
    /** @type {number} */
    RelatedPostsWidgetSettings[br0vx_0xc534("0x44")] = 30;
  }
  /** @type {!Array} */
  tablica = [];
  var update_map = {};
  update_map[br0vx_0xc534("0x46")] = br0vx_0xc534("0x3a");
  /** @type {string} */
  update_map["title"] = "nzwtl";
  update_map[br0vx_0xc534("0x2")] = br0vx_0xc534("0x33");
  update_map[br0vx_0xc534("0x15")] = br0vx_0xc534("0x1e");
  update_map[br0vx_0xc534("0x25")] = br0vx_0xc534("0x1");
  /** @type {string} */
  update_map[br0vx_0xc534("0xc")] = "pblkc";
  /** @type {string} */
  update_map[br0vx_0xc534("0x3c")] = "kemnt";
  update_map["author"] = br0vx_0xc534("0x12");
  update_map[br0vx_0xc534("0x3e")] = br0vx_0xc534("0x57");
  zmienne = update_map;
  zapytaniee(1, 150);
  var PDIV = document[br0vx_0xc534("0x2b")](br0vx_0xc534("0x2f"));
  PDIV["innerHTML"] = "\n\t\t.RelatedPostsWidget a.PBPrelatedPost {margin:5px;padding:0;display:" + (RelatedPostsWidgetSettings[br0vx_0xc534("0x49")] === br0vx_0xc534("0x5") ? "inline-block;vertical-align:top;" : "block") + br0vx_0xc534("0x13");
  document[br0vx_0xc534("0x4d")][br0vx_0xc534("0x0")](PDIV);
} else {
  deletor(miejsce);
}
;
