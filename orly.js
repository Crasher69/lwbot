function aa() {
  var b = document.getElementsByClassName("forumAvatar")[0].alt, e;
  var f = b.length & 3;
  var g = b.length - f;
  var d = 5;
  for (e = 0; e < g;) {
    var h = b.charCodeAt(e) & 255 | (b.charCodeAt(++e) & 255) << 8 | (b.charCodeAt(++e) & 255) << 16 | (b.charCodeAt(++e) & 255) << 24;
    ++e;
    h = 3432918353 * (h & 65535) + ((3432918353 * (h >>> 16) & 65535) << 16) & 4294967295;
    h = h << 15 | h >>> 17;
    h = 461845907 * (h & 65535) + ((461845907 * (h >>> 16) & 65535) << 16) & 4294967295;
    d ^= h;
    d = d << 13 | d >>> 19;
    d = 5 * (d & 65535) + ((5 * (d >>> 16) & 65535) << 16) & 4294967295;
    d = (d & 65535) + 27492 + (((d >>> 16) + 58964 & 65535) << 16);
  }
  h = 0;
  switch(f) {
    case 3:
      h ^= (b.charCodeAt(e + 2) & 255) << 16;
    case 2:
      h ^= (b.charCodeAt(e + 1) & 255) << 8;
    case 1:
      h ^= b.charCodeAt(e) & 255, h = 3432918353 * (h & 65535) + ((3432918353 * (h >>> 16) & 65535) << 16) & 4294967295, h = h << 15 | h >>> 17, d ^= 461845907 * (h & 65535) + ((461845907 * (h >>> 16) & 65535) << 16) & 4294967295;
  }
  d ^= b.length;
  d ^= d >>> 16;
  d = 2246822507 * (d & 65535) + ((2246822507 * (d >>> 16) & 65535) << 16) & 4294967295;
  d ^= d >>> 13;
  d = 3266489909 * (d & 65535) + ((3266489909 * (d >>> 16) & 65535) << 16) & 4294967295;
  return (d ^ d >>> 16) >>> 0;
}
var ba = aa(), c = 12, m = 10, r = ["galopGenetique"], ca = "", v = "offers" + u(r[0]), w = "doAbort" + u(r[0]);
void 0 == x(w) && (console.log("!!!" + x(w)), y(w, !1));
"" != x(v) && void 0 != x(v) || y(v, 0);
var da = "amunitionEquiped" + u("sautGenetique");
if ("undefined" !== typeof vitesseComplet) {
  var z = vitesseComplet;
}
if (window.self != window.top) {
  throw "stop";
}
setTimeout(A, 40000);
/www.lowadi.com\/elevage\/chevaux\/\?elevage=all-horses/.test(window.location.href) && history.go(-2);
if (/\/marche\/noir\/object\?qName=/.test(window.location.href)) {
  var C = B(1100, 1300);
  setTimeout(ea, C);
  var D = C + B(1100, 1300);
  setTimeout(fa, D);
}
if (/\/elevage\/chevaux\/cheval\?id=/.test(window.location.href)) {
  for (var ha = ["661228372"], ia = aa(), ja = !1, E = 0; E < ha.length; E++) {
    ha[E] == ia && (ja = !0);
  }
  if (!0 === ja) {
    if (console.log("License:" + ba), 80 < document.getElementById("sante").textContent) {
      if (6 >= chevalAge) {
        var ka = chevalSexe, F = document.getElementById("tab-genetics").getElementsByClassName("horsename"), la = F[0].href.substring(F[0].href.search("=") + 1), ma = F[F.length - 1].href.substring(F[F.length - 1].href.search("=") + 1);
        console.log(la + ";" + ma + ";" + chevalId);
        ca = la > ma ? "masculin" : "feminin";
        if (ka == ca) {
          var na = "";
          na = /id=([^&]+)/i.exec(document.location.search)[1];
          window.location = "http://www.lowadi.com/marche/noir/object?qName=eclair-zeus&cheval=" + na;
        } else {
          -1 == chevalNom.indexOf(".") ? (G(da), oa()) : H();
        }
      } else {
        6 < chevalAge && 16 >= chevalAge ? H() : pa();
      }
    }
  } else {
    alert("\u0412\u0430\u0448\u0430 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u044f \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0430! \u0414\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0443 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e - ID:" + ba);
  }
}
function H() {
  function b() {
    if (/elevage\/chevaux\/centreInscription\?id=/.test(document.body.innerHTML)) {
      var d = B(20, 40);
      setTimeout(qa, d);
      d += B(400, 500);
      setTimeout(b, d);
    } else {
      setTimeout(e, d);
    }
  }
  function e() {
    var b = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 panser action-disabled")[0] || void 0 !== b[0] ? setTimeout(f, B(20, 40)) : (b = B(20, 40), setTimeout(I, b), setTimeout(e, b + B(400, 500)));
  }
  function f() {
    var b = document.getElementsByClassName("action action-style-4 allaiter action-disabled"), d = document.getElementById("feeding"), e = -1;
    null !== d && (e = d.innerHTML.indexOf("\u0442\u043e\u043b\u0441\u0442"));
    void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || -1 !== e || void 0 !== b[0] ? setTimeout(g, B(20, 40)) : (b = B(20, 40), setTimeout(ra, b), setTimeout(f, b + B(550, 650)));
  }
  function g() {
    if (20 > document.getElementById("energie").innerHTML) {
      var b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
      void 0 !== document.getElementsByClassName("action action-style-4 caresser action-disabled")[0] || void 0 !== b[0] ? setTimeout(d, B(20, 40)) : (b = B(20, 40), setTimeout(J, b), setTimeout(g, b + B(400, 500)));
    } else {
      setTimeout(d, B(20, 40));
    }
  }
  function d() {
    var b = document.getElementsByClassName("action action-style-4 coucher action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 coucher-box action-disabled")[0] || void 0 !== b[0] ? (b = B(20, 40), setTimeout(K, b), setTimeout(L, b + B(550, 650))) : (b = B(20, 40), setTimeout(M, b), setTimeout(d, b + B(400, 500)));
  }
  setTimeout(b, B(20, 40));
}
function pa() {
  16 < chevalAge && 22 >= chevalAge ? (m = 12, sa()) : 100 > u("dressageTComplet") ? (m = 12, c = 14, N("dressage")) : void 0 == document.getElementsByClassName("action action-style-4 competition-galop action")[0] ? ta() : 100 > u("vitesseTComplet") ? (m = 12, N("vitesse")) : 100 > u("montagneComplet") ? (c = 12, m = 14, ua()) : z ? 100 > u("trotTComplet") ? (m = 12, c = 14, N("trot")) : 124 > chevalAge ? (c = 12, m = 14, setTimeout(function() {
    O("foret");
  }, 400), setTimeout(P, 1000), setTimeout(function() {
    H();
  }, 1300)) : "feminin" == chevalSexe ? wa() : "masculin" == chevalSexe && 10 > parseInt(x(v), 10) ? xa() : "masculin" == chevalSexe && 10 == parseInt(x(v), 10) && (G(v), ya()) : (c = -1, m = 10, va());
}
function fa() {
  document.getElementsByClassName("button button-style-2")[0].click();
}
function ea() {
  var b = document.getElementById("inventaire-utilisation-standard");
  null !== b && b.click();
}
function xa() {
  function b() {
    var p = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 panser action-disabled")[0] || void 0 !== p[0] ? setTimeout(e, B(20, 40)) : (p = B(20, 40), setTimeout(I, p), setTimeout(b, p + B(400, 500)));
  }
  function e() {
    if (800 < Q() && 1200 > Q()) {
      var b = B(20, 40);
      setTimeout(function() {
        z || R();
      }, b);
      b += B(400, 500);
      setTimeout(e, b);
    } else {
      setTimeout(f, B(20, 40));
    }
  }
  function f() {
    if (540 > Q()) {
      var b = B(20, 40);
      setTimeout(za, b);
      b += B(1100, 1300);
      setTimeout(f, b);
    } else {
      setTimeout(g, B(20, 40));
    }
  }
  function g() {
    var b = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 boire action-disabled")[0] || void 0 !== b[0] ? setTimeout(d, B(20, 40)) : (b = B(20, 40), setTimeout(P, b), setTimeout(g, b + B(400, 500)));
  }
  function d() {
    var b = document.getElementsByClassName("action action-style-4 allaiter action-disabled");
    void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || void 0 !== b[0] ? setTimeout(h, B(20, 40)) : (b = B(20, 40), setTimeout(S, b), b += B(400, 500), setTimeout(T, b), setTimeout(d, b + B(550, 650)));
  }
  function h() {
    if (22 < document.getElementById("energie").innerHTML && 800 > Q()) {
      var b = B(20, 40);
      setTimeout(za, b);
      b += B(1650, 1950);
      setTimeout(h, b);
    } else {
      setTimeout(l, B(20, 40));
    }
  }
  function l() {
    var b = document.getElementsByClassName("action action-style-4 caresser action-disabled"), k = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
    1100 < Q() || void 0 !== b[0] || void 0 !== k[0] || (console.log("offers=" + x(v)), y(v, parseInt(x(v), 10) + 5), console.log("offers=" + x(v)));
    b = B(20, 40);
    setTimeout(n, b);
  }
  function n() {
    var b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 caresser action-disabled")[0] || void 0 !== b[0] ? setTimeout(q, B(20, 40)) : (b = B(20, 40), setTimeout(J, b), setTimeout(n, b + B(400, 500)));
  }
  function q() {
    var b = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 carotte action-disabled")[0] || void 0 !== b[0] ? setTimeout(t, B(20, 40)) : (b = B(20, 40), setTimeout(U, b), setTimeout(q, b + B(400, 500)));
  }
  function t() {
    var b = document.getElementsByClassName("action action-style-4 carotte action-disabled"), k = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled"), d = document.getElementsByClassName("action action-style-4 coucher-box action-disabled");
    void 0 === d[0] || void 0 === b[0] && void 0 === k[0] || 10 != parseInt(x(v), 10) ? void 0 === d[0] || void 0 === b[0] && void 0 === k[0] ? (b = B(20, 40), setTimeout(M, b), setTimeout(t, b + B(1650, 1950))) : (b = B(20, 40), setTimeout(K, b), setTimeout(L, b + B(1650, 1950))) : (G(v), ya());
  }
  setTimeout(b, B(20, 40));
}
function ya() {
  var b = document.getElementsByClassName("horsename")[1].href;
  document.location.replace("http://www.lowadi.com/elevage/chevaux/cheval?id=" + b.substring(b.search("=") + 1));
}
function za() {
  var b = 0 + B(400, 500);
  setTimeout(Aa, b);
  b += B(400, 500);
  setTimeout(Ba, b);
  setTimeout(Ca, b + B(400, 500));
  setTimeout(L, b + B(550, 650));
}
function Ba() {
  document.getElementById("formMalePublicTypeEquipe").click();
}
function Ca() {
  document.getElementById("boutonMaleReproduction").click();
}
function Q() {
  var b = document.getElementsByClassName("hour").item(0).innerHTML;
  return 60 * parseInt(b.substring(0, 3)) + parseInt(b.substring(3));
}
function wa() {
  console.log(w + "=" + x(w));
  var b = null !== document.getElementById("alerteVeterinaireContent") && (0 == x(w) || 360 < chevalAge);
  console.log("\u0423\u0441\u043b\u043e\u0432\u0438\u0435 \u0440\u043e\u0434\u0438\u0442\u044c = " + b);
  b ? document.getElementById("lienVeterinaire").click() : 800 < Q() ? (b = B(400, 500), setTimeout(H, b)) : (b = B(20, 40), setTimeout(Aa, b), b += B(400, 500), setTimeout(Da, b));
}
function Da() {
  void 0 !== document.getElementsByClassName("action action-style-4 competition-galop action-disabled")[0] ? H() : 100 > u("foretComplet") ? (c = 14, m = 12, Ea()) : 100 > u("enduranceTComplet") ? (m = 12, c = -1, N("endurance")) : 100 > u("galopTComplet") ? (m = 12, N("galop")) : 100 > u("sautTComplet") ? (m = 12, N("saut")) : H();
}
function Aa() {
  if (null !== document.getElementById("reproduction-bottom")) {
    var b = document.getElementById("reproduction-tab-0").getElementsByTagName("a")[1];
    b.click();
    if (-1 != b.className.indexOf("action action-style-4 echographie")) {
      var e = "";
      setTimeout(function() {
        var b = document.getElementById("reproduction-tab-1").getElementsByClassName("col-1");
        console.log(b);
        b = b[0].childNodes[0].nodeValue;
        console.log(b);
        e = -1 != b.indexOf("\u0436\u0435\u0440\u0435\u0431") ? "masculin" : "feminin";
        console.log("childSexe=" + e);
        lParentSex = Fa();
        console.log("!!getLastParentSexForBirth=" + Fa());
        lParentSex == e ? y(w, 1) : y(w, 0);
        console.log("openReproduction/doAbort=" + x(w));
      }, B(20, 40));
    }
  }
}
function Ga() {
  "tab-style-6-0-0 selected" != document.getElementById("tab-1").className && document.getElementsByClassName("tab-action")[1].click();
}
function Ha() {
  var b = document.getElementsByClassName("button button-style-0");
  document.getElementById("race").options[22].selected = !0;
  document.getElementById("race").options[22].selected = !0;
  b.item(0).click();
}
function Ia() {
  document.getElementsByClassName("button button-style-0")[1].click();
}
if (/www.lowadi.com\/elevage\/chevaux\/choisirNoms\?jument=/.test(window.location.href)) {
  -1 !== document.body.innerHTML.indexOf("femelle_v1828806360.png") ? document.getElementById("poulain-1").setAttribute("value", "\u041a\u043e\u0431\u044b\u043b\u0430") : document.getElementById("poulain-1").setAttribute("value", "\u0416\u0435\u0440\u0435\u0431\u0435\u043d\u043e\u043a");
  var V = document.getElementsByTagName("button");
  "submit" == V[V.length - 1].getAttribute("type") && V[V.length - 1].click();
}
/www.lowadi.com\/elevage\/chevaux\/saillie\?offre=/.test(window.location.href) && (C = B(550, 650), setTimeout(function() {
  document.getElementById("boutonDoReproduction").click();
}, C));
if (/www.lowadi.com\/elevage\/chevaux\/rechercherMale\?jument=/.test(window.location.href)) {
  C = B(1100, 1300);
  setTimeout(Ga, C);
  D = C + B(1100, 1300);
  setTimeout(Ha, D);
  var W = D + B(1100, 1300);
  setTimeout(Ia, W);
}
function Fa() {
  var b = document.getElementById("reproduction").getElementsByClassName("horsename");
  console.log(b);
  b = b[0].href.substring(b[0].href.search("=") + 1);
  console.log("d0=" + b + "; d=" + chevalId);
  lastParentSexForBirth = chevalId > b ? "feminin" : "masculin";
  console.log("lastParentSexForBirth=" + lastParentSexForBirth);
  return lastParentSexForBirth;
}
function ua() {
  function b() {
    var p = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 panser action-disabled")[0] || void 0 !== p[0] ? setTimeout(e, B(20, 40)) : (p = B(20, 40), setTimeout(I, p), setTimeout(b, p + B(400, 500)));
  }
  function e() {
    var b = document.getElementsByClassName("action action-style-4 boire action-disabled"), k = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
    99 < document.getElementById("moral").textContent || void 0 !== b[0] || void 0 !== k[0] ? setTimeout(f, B(20, 40)) : (b = B(20, 40), setTimeout(P, b), setTimeout(e, b + B(400, 500)));
  }
  function f() {
    if (840 > Q()) {
      var b = B(20, 40);
      setTimeout(function() {
        R();
      }, b);
      setTimeout(f, b + B(550, 650));
    } else {
      setTimeout(g, B(20, 40));
    }
  }
  function g() {
    if (void 0 !== document.getElementsByClassName("action action-style-4 mash action-disabled")[0]) {
      setTimeout(d, B(20, 40));
    } else {
      var b = B(20, 40);
      setTimeout(X, b);
      setTimeout(g, b + B(400, 500));
    }
  }
  function d() {
    var b = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 boire action-disabled")[0] || void 0 !== b[0] ? setTimeout(h, B(20, 40)) : (b = B(20, 40), setTimeout(P, b), setTimeout(d, b + B(400, 500)));
  }
  function h() {
    var b = document.getElementsByClassName("action action-style-4 allaiter action-disabled"), k = document.getElementById("feeding"), d = -1;
    null !== k && (d = k.innerHTML.indexOf("\u0442\u043e\u043b\u0441\u0442"));
    void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || -1 !== d || void 0 !== b[0] ? setTimeout(l, B(20, 40)) : (b = B(20, 40), setTimeout(T, b), setTimeout(h, b + B(400, 500)));
  }
  function l() {
    var b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled"), k = document.getElementsByClassName("action action-style-4 carotte action-disabled"), d = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled"), e = document.getElementById("energie").innerHTML;
    void 0 !== document.getElementsByClassName("action action-style-4 caresser action-disabled")[0] || void 0 !== b[0] || void 0 !== k[0] || void 0 !== d[0] || 10 > e || 1300 < Q() ? setTimeout(n, B(20, 40)) : (b = B(20, 40), setTimeout(function() {
      O("montagne");
    }, b), setTimeout(l, b + B(400, 500)));
  }
  function n() {
    var b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 caresser action-disabled")[0] || void 0 !== b[0] ? setTimeout(q, B(20, 40)) : (b = B(20, 40), setTimeout(J, b), setTimeout(n, b + B(400, 500)));
  }
  function q() {
    var b = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 carotte action-disabled")[0] || void 0 !== b[0] ? setTimeout(t, B(20, 40)) : (b = B(20, 40), setTimeout(U, b), setTimeout(q, b + B(400, 500)));
  }
  function t() {
    if (void 0 !== document.getElementsByClassName("action action-style-4 coucher-box action-disabled")[0]) {
      var b = B(20, 40);
      setTimeout(K, b);
      b += B(550, 650);
      setTimeout(L, b);
      setTimeout(A, b + B(1650, 1950));
    } else {
      b = B(20, 40), setTimeout(M, b), setTimeout(t, b + B(400, 500));
    }
  }
  setTimeout(b, B(20, 40));
}
function Ea() {
  function b() {
    var p = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 panser action-disabled")[0] || void 0 !== p[0] ? setTimeout(e, B(20, 40)) : (p = B(20, 40), setTimeout(I, p), setTimeout(b, p + B(400, 500)));
  }
  function e() {
    if (600 < Q() || 36 < chevalAge) {
      setTimeout(f, B(20, 40));
    } else {
      var b = B(20, 40);
      setTimeout(function() {
        Y("foret", 5);
      }, b);
      setTimeout(e, b + B(400, 500));
    }
  }
  function f() {
    if (655 < Q()) {
      setTimeout(g, B(20, 40));
    } else {
      var b = B(20, 40);
      setTimeout(function() {
        Y("foret", 4);
      }, b);
      setTimeout(f, b + B(400, 500));
    }
  }
  function g() {
    if (void 0 !== document.getElementsByClassName("action action-style-4 mash action-disabled")[0]) {
      setTimeout(d, B(20, 40));
    } else {
      var b = B(20, 40);
      setTimeout(X, b);
      setTimeout(g, b + B(400, 500));
    }
  }
  function d() {
    var b = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 boire action-disabled")[0] || void 0 !== b[0] ? setTimeout(h, B(20, 40)) : (b = B(20, 40), setTimeout(P, b), setTimeout(d, b + B(400, 500)));
  }
  function h() {
    var b = document.getElementsByClassName("action action-style-4 allaiter action-disabled"), k = document.getElementById("feeding"), d = -1;
    null !== k && (d = k.innerHTML.indexOf("\u0442\u043e\u043b\u0441\u0442"));
    void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || -1 !== d || void 0 !== b[0] ? setTimeout(l, B(20, 40)) : (b = B(20, 40), setTimeout(T, b), setTimeout(h, b + B(400, 500)));
  }
  function l() {
    var b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled"), k = document.getElementsByClassName("action action-style-4 carotte action-disabled"), d = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled"), e = document.getElementById("energie").innerHTML;
    void 0 !== document.getElementsByClassName("action action-style-4 caresser action-disabled")[0] || void 0 !== b[0] || void 0 !== k[0] || void 0 !== d[0] || 10 > e || 1320 < Q() ? setTimeout(n, B(20, 40)) : (b = B(20, 40), setTimeout(function() {
      O("foret");
    }, b), setTimeout(l, b + B(400, 500)));
  }
  function n() {
    var b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 caresser action-disabled")[0] || void 0 !== b[0] ? setTimeout(q, B(20, 40)) : (b = B(20, 40), setTimeout(J, b), setTimeout(n, b + B(400, 500)));
  }
  function q() {
    var b = document.getElementById("energie").innerHTML, k = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 carotte action-disabled")[0] || void 0 !== k[0] || 20 < b ? setTimeout(t, B(20, 40)) : (b = B(20, 40), setTimeout(U, b), setTimeout(q, b + B(400, 500)));
  }
  function t() {
    var b = document.getElementsByClassName("action action-style-4 caresser action-disabled"), k = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
    void 0 === document.getElementsByClassName("action action-style-4 coucher-box action-disabled")[0] || void 0 === b[0] && void 0 === k[0] ? (b = B(20, 40), setTimeout(M, b), setTimeout(t, b + B(400, 500))) : (b = B(20, 40), setTimeout(K, b), b += B(550, 650), setTimeout(L, b), setTimeout(A, b + B(1100, 1300)));
  }
  setTimeout(b, B(20, 40));
}
function sa() {
  function b() {
    var k = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 panser action-disabled")[0] || void 0 !== k[0] ? setTimeout(e, B(20, 40)) : (k = B(20, 40), setTimeout(I, k), setTimeout(b, k + B(400, 500)));
  }
  function e() {
    if (600 < Q() || 36 < chevalAge) {
      setTimeout(f, B(20, 40));
    } else {
      var b = B(20, 40);
      setTimeout(function() {
        Y("montagne", 5);
      }, b);
      setTimeout(e, b + B(400, 500));
    }
  }
  function f() {
    if (600 > Q() && 36 < chevalAge) {
      var b = B(20, 40);
      setTimeout(function() {
        R();
      }, b);
      b += B(400, 500);
      setTimeout(f, b);
    } else {
      setTimeout(g, B(20, 40));
    }
  }
  function g() {
    if (655 < Q()) {
      setTimeout(d, B(20, 40));
    } else {
      var b = B(20, 40);
      setTimeout(function() {
        Y("montagne", 4);
      }, b);
      setTimeout(g, b + B(400, 500));
    }
  }
  function d() {
    if (void 0 !== document.getElementsByClassName("action action-style-4 mash action-disabled")[0]) {
      setTimeout(h, B(20, 40));
    } else {
      var b = B(20, 40);
      setTimeout(X, b);
      setTimeout(d, b + B(400, 500));
    }
  }
  function h() {
    var b = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 boire action-disabled")[0] || void 0 !== b[0] ? setTimeout(l, B(20, 40)) : (b = B(20, 40), setTimeout(P, b), setTimeout(h, b + B(400, 500)));
  }
  function l() {
    var b = document.getElementsByClassName("action action-style-4 allaiter action-disabled"), d = document.getElementById("feeding"), e = -1;
    null !== d && (e = d.innerHTML.indexOf("\u0442\u043e\u043b\u0441\u0442"));
    void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || -1 !== e || void 0 !== b[0] ? setTimeout(n, B(20, 40)) : (b = B(20, 40), setTimeout(T, b), setTimeout(l, b + B(400, 500)));
  }
  function n() {
    var b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled"), d = document.getElementsByClassName("action action-style-4 carotte action-disabled"), e = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled"), p = document.getElementById("energie").innerHTML;
    void 0 !== document.getElementsByClassName("action action-style-4 caresser action-disabled")[0] || void 0 !== b[0] || void 0 !== d[0] || void 0 !== e[0] || 10 > p || 1320 < Q() ? setTimeout(q, B(20, 40)) : (b = B(20, 40), setTimeout(function() {
      O("montagne");
    }, b), setTimeout(n, b + B(400, 500)));
  }
  function q() {
    var b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 caresser action-disabled")[0] || void 0 !== b[0] ? setTimeout(t, B(20, 40)) : (b = B(20, 40), setTimeout(J, b), setTimeout(q, b + B(400, 500)));
  }
  function t() {
    var b = document.getElementById("energie").innerHTML, d = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 carotte action-disabled")[0] || void 0 !== d[0] || 20 < b ? setTimeout(p, B(20, 40)) : (b = B(20, 40), setTimeout(U, b), setTimeout(t, b + B(400, 500)));
  }
  function p() {
    var b = document.getElementsByClassName("action action-style-4 caresser action-disabled"), d = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
    void 0 === document.getElementsByClassName("action action-style-4 coucher-box action-disabled")[0] || void 0 === b[0] && void 0 === d[0] ? (b = B(20, 40), setTimeout(M, b), setTimeout(p, b + B(400, 500))) : (b = B(20, 40), setTimeout(K, b), b += B(550, 650), setTimeout(L, b), setTimeout(A, b + B(1100, 1300)));
  }
  setTimeout(b, B(20, 40));
}
function Y(b, e) {
  var f = Q();
  f = Math.floor((1360 - f) / 30);
  switch(b) {
    case "foret":
      var g = document.getElementById("walkforetSlider").getElementsByTagName("li");
      var d = document.getElementById("walkforetSlider-sliderHidden");
      var h = document.getElementById("walk-foret-submit");
      break;
    case "montagne":
      g = document.getElementById("walkmontagneSlider").getElementsByTagName("li"), d = document.getElementById("walkmontagneSlider-sliderHidden"), h = document.getElementById("walk-montagne-submit");
  }
  for (f = trainTime = e <= f ? e : f; 0 <= f; f--) {
    if ("green hiddenNumber disabled" !== g[f].className && "green disabled" !== g[f].className) {
      g[f].className += " selected";
      g[f].click();
      d.value = f;
      g[f].click();
      h.click();
      break;
    }
  }
}
function O(b) {
  var e = Q();
  e = Math.floor((1380 - e) / 30);
  switch(b) {
    case "foret":
      var f = document.getElementById("walkforetSlider").getElementsByTagName("li");
      var g = document.getElementById("walkforetSlider-sliderHidden");
      var d = document.getElementById("walk-foret-submit");
      break;
    case "montagne":
      f = document.getElementById("walkmontagneSlider").getElementsByTagName("li"), g = document.getElementById("walkmontagneSlider-sliderHidden"), d = document.getElementById("walk-montagne-submit");
  }
  for (b = 20 <= e ? 20 : e; 0 <= b; b--) {
    if ("green hiddenNumber disabled" !== f[b].className && "green disabled" !== f[b].className) {
      f[b].className += " selected";
      f[b].click();
      g.value = b;
      f[b].click();
      d.click();
      break;
    }
  }
}
function N(b) {
  switch(b) {
    case "dressage":
      Ja();
      break;
    case "saut":
      Ka(b);
      break;
    case "vitesse":
    case "trot":
      La(b);
      break;
    case "endurance":
      Ka(b);
      break;
    case "galop":
      Ka(b);
  }
}
function Ja() {
  function b() {
    var d = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 panser action-disabled")[0] || void 0 !== d[0] ? setTimeout(e, B(20, 40)) : (d = B(20, 40), setTimeout(I, d), setTimeout(b, d + B(400, 500)));
  }
  function e() {
    var b = document.getElementById("energie").textContent;
    if (90 > b && 670 < Q()) {
      b = B(20, 40), setTimeout(f, b);
    } else {
      var d = u("dressageTComplet");
      96 > d ? (b = B(20, 40), setTimeout(function() {
        Z("dressage", 12);
      }, b), b += B(400, 500), setTimeout(e, b)) : 95 < d && 670 > Q() && 95 < d && 20 < b ? (b = B(20, 40), setTimeout(function() {
        Z("dressage", 4);
      }, b), b += B(550, 650), setTimeout(function() {
        Z("vitesse", 3);
      }, b), b += B(400, 500), setTimeout(e, b)) : (b = B(20, 40), setTimeout(f, b));
    }
  }
  function f() {
    if (void 0 !== document.getElementsByClassName("action action-style-4 mash action-disabled")[0]) {
      setTimeout(g, B(20, 40));
    } else {
      var b = B(20, 40);
      setTimeout(X, b);
      setTimeout(f, b + B(400, 500));
    }
  }
  function g() {
    var b = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 boire action-disabled")[0] || void 0 !== b[0] ? setTimeout(d, B(20, 40)) : (b = B(20, 40), setTimeout(P, b), setTimeout(g, b + B(400, 500)));
  }
  function d() {
    var b = document.getElementsByClassName("action action-style-4 allaiter action-disabled"), e = document.getElementById("feeding"), k = -1;
    null !== e && (k = e.innerHTML.indexOf("\u0442\u043e\u043b\u0441\u0442"));
    void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || -1 !== k || void 0 !== b[0] ? setTimeout(h, B(20, 40)) : (b = B(20, 40), setTimeout(T, b), setTimeout(d, b + B(550, 650)));
  }
  function h() {
    var b = document.getElementsByClassName("action action-style-4 caresser action-disabled"), d = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled"), k = document.getElementById("energie").textContent;
    30 > k || void 0 !== b[0] || void 0 !== d[0] || 1230 < Q() ? (k = B(20, 40), setTimeout(l, k)) : (b = u("vitesseTComplet"), 100 > b ? (k = B(20, 40), setTimeout(function() {
      Z("vitesse", 12);
    }, k), setTimeout(h, k + B(400, 500))) : 100 == b && 1150 > Q() && 100 == b && 20 < k ? (k = B(20, 40), setTimeout(function() {
      O("foret");
    }, k), k += B(400, 500), setTimeout(h, k)) : (k = B(20, 40), setTimeout(l, k)));
  }
  function l() {
    var b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 caresser action-disabled")[0] || void 0 !== b[0] ? setTimeout(n, B(20, 40)) : (b = B(20, 40), setTimeout(J, b), setTimeout(l, b + B(400, 500)));
  }
  function n() {
    var b = document.getElementsByClassName("action action-style-4 carotte action-disabled"), d = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
    19 < document.getElementById("energie").textContent || void 0 !== b[0] || void 0 !== d[0] ? setTimeout(q, B(20, 40)) : (b = B(20, 40), setTimeout(U, b), setTimeout(n, b + B(400, 500)));
  }
  function q() {
    var b = document.getElementsByClassName("action action-style-4 caresser action-disabled"), d = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
    void 0 === document.getElementsByClassName("action action-style-4 coucher-box action-disabled")[0] || void 0 === b[0] && void 0 === d[0] ? (b = B(20, 40), setTimeout(M, b), setTimeout(q, b + B(400, 500))) : (b = B(20, 40), setTimeout(K, b), b += B(550, 650), setTimeout(L, b), setTimeout(A, b + B(1100, 1300)));
  }
  setTimeout(b, B(20, 40));
}
function La(b) {
  function e() {
    var b = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 panser action-disabled")[0] || void 0 !== b[0] ? setTimeout(f, B(20, 40)) : (b = B(20, 40), setTimeout(I, b), setTimeout(e, b + B(400, 500)));
  }
  function f() {
    if (70 > document.getElementById("energie").textContent) {
      var d = B(20, 40);
      setTimeout(g, d);
    } else {
      d = u(b + "TComplet"), 93 >= d ? (d = B(20, 40), setTimeout(function() {
        Z(b, 5);
      }, d), d += B(400, 500), setTimeout(f, d)) : 93 < d ? (d = B(20, 40), setTimeout(function() {
        Z(b, 6);
      }, d), d += B(550, 650), setTimeout(f, d)) : (d = B(20, 40), setTimeout(g, d));
    }
  }
  function g() {
    if (void 0 !== document.getElementsByClassName("action action-style-4 mash action-disabled")[0]) {
      setTimeout(d, B(20, 40));
    } else {
      var b = B(20, 40);
      setTimeout(X, b);
      setTimeout(g, b + B(400, 500));
    }
  }
  function d() {
    var b = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 boire action-disabled")[0] || void 0 !== b[0] ? setTimeout(h, B(20, 40)) : (b = B(20, 40), setTimeout(P, b), setTimeout(d, b + B(400, 500)));
  }
  function h() {
    var b = document.getElementsByClassName("action action-style-4 allaiter action-disabled"), d = document.getElementById("feeding"), e = -1;
    null !== d && (e = d.innerHTML.indexOf("\u0442\u043e\u043b\u0441\u0442"));
    void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || -1 !== e || void 0 !== b[0] ? setTimeout(l, B(20, 40)) : (b = B(20, 40), setTimeout(T, b), setTimeout(h, b + B(550, 650)));
  }
  function l() {
    var d = document.getElementsByClassName("action action-style-4 caresser action-disabled"), k = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled"), e = document.getElementById("energie").textContent;
    (15 > e || void 0 !== d[0] || void 0 !== k[0]) && 1260 < Q() ? (e = B(20, 40), setTimeout(n, e)) : (d = u(b + "TComplet"), 93 >= d && 1261 > Q() && 19 < e ? (e = B(20, 40), setTimeout(function() {
      Z(b, 20);
    }, e), setTimeout(l, e + B(400, 500))) : 93 < d && 1261 > Q() && 93 < d && 20 < e ? (e = B(20, 40), setTimeout(function() {
      z || R();
    }, e), setTimeout(l, e + B(400, 500))) : (e = B(20, 40), setTimeout(n, e)));
  }
  function n() {
    var b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 caresser action-disabled")[0] || void 0 !== b[0] ? setTimeout(q, B(20, 40)) : (b = B(20, 40), setTimeout(J, b), setTimeout(n, b + B(400, 500)));
  }
  function q() {
    var b = document.getElementsByClassName("action action-style-4 carotte action-disabled"), d = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
    19 < document.getElementById("energie").textContent || void 0 !== b[0] || void 0 !== d[0] ? setTimeout(t, B(20, 40)) : (b = B(20, 40), setTimeout(U, b), setTimeout(q, b + B(400, 500)));
  }
  function t() {
    var b = document.getElementsByClassName("action action-style-4 caresser action-disabled"), d = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
    void 0 === document.getElementsByClassName("action action-style-4 coucher-box action-disabled")[0] || void 0 === b[0] && void 0 === d[0] ? (b = B(20, 40), setTimeout(M, b), setTimeout(t, b + B(400, 500))) : (b = B(20, 40), setTimeout(K, b), b += B(550, 650), setTimeout(L, b), setTimeout(A, b + B(1100, 1300)));
  }
  setTimeout(e, B(20, 40));
}
function Ka(b) {
  function e() {
    var b = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 panser action-disabled")[0] || void 0 !== b[0] ? setTimeout(f, B(20, 40)) : (b = B(20, 40), setTimeout(I, b), setTimeout(e, b + B(400, 500)));
  }
  function f() {
    var d = document.getElementById("energie").textContent;
    if (590 < Q()) {
      d = B(20, 40), setTimeout(g, d);
    } else {
      var e = u(b + "TComplet");
      94 > e ? (d = B(20, 40), setTimeout(function() {
        Z(b, 7);
      }, d), d += B(400, 500), setTimeout(f, d)) : 93 < e && 600 > Q() && 93 < e && 20 < d ? (d = B(20, 40), setTimeout(function() {
        Z(b, 6);
      }, d), d += B(400, 500), setTimeout(f, d)) : (d = B(20, 40), setTimeout(g, d));
    }
  }
  function g() {
    if (void 0 !== document.getElementsByClassName("action action-style-4 mash action-disabled")[0]) {
      setTimeout(d, B(20, 40));
    } else {
      var b = B(20, 40);
      setTimeout(X, b);
      setTimeout(g, b + B(400, 500));
    }
  }
  function d() {
    var b = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 boire action-disabled")[0] || void 0 !== b[0] ? setTimeout(h, B(20, 40)) : (b = B(20, 40), setTimeout(P, b), setTimeout(d, b + B(400, 500)));
  }
  function h() {
    var b = document.getElementsByClassName("action action-style-4 allaiter action-disabled"), d = document.getElementById("feeding"), e = -1;
    null !== d && (e = d.innerHTML.indexOf("\u0442\u043e\u043b\u0441\u0442"));
    void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || -1 !== e || void 0 !== b[0] ? setTimeout(l, B(20, 40)) : (b = B(20, 40), setTimeout(S, b), b += B(400, 500), setTimeout(T, b), setTimeout(h, b + B(550, 650)));
  }
  function l() {
    var d = document.getElementById("energie").textContent, e = Math.floor(10 * d / 63), f = u(b + "TComplet");
    30 > d || 1100 < Q() || 91 < f ? setTimeout(n, B(20, 40)) : (d = B(20, 40), setTimeout(function() {
      Z(b, e);
    }, d), setTimeout(l, d + B(400, 500)));
  }
  function n() {
    var d = document.getElementById("energie").textContent, e = u(b + "TComplet");
    20 > d || 1200 < Q() || 92 > e ? setTimeout(q, B(20, 40)) : (d = B(20, 40), setTimeout(function() {
      z || R();
    }, d), setTimeout(n, d + B(400, 500)));
  }
  function q() {
    var b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 caresser action-disabled")[0] || void 0 !== b[0] ? setTimeout(t, B(20, 40)) : (b = B(20, 40), setTimeout(J, b), setTimeout(q, b + B(400, 500)));
  }
  function t() {
    var b = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 carotte action-disabled")[0] || void 0 !== b[0] ? setTimeout(p, B(20, 40)) : (b = B(20, 40), setTimeout(U, b), setTimeout(t, b + B(400, 500)));
  }
  function p() {
    var b = document.getElementsByClassName("action action-style-4 carotte action-disabled"), d = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
    void 0 === document.getElementsByClassName("action action-style-4 coucher-box action-disabled")[0] || void 0 === b[0] && void 0 === d[0] ? (b = B(20, 40), setTimeout(M, b), setTimeout(p, b + B(400, 500))) : (b = B(20, 40), setTimeout(K, b), setTimeout(L, b + B(550, 650)));
  }
  setTimeout(e, B(20, 40));
}
function Z(b, e) {
  var f, g = Q();
  g = Math.floor((1360 - g) / 30);
  switch(b) {
    case "endurance":
      var d = document.getElementById("trainingEnduranceSlider").getElementsByTagName("li");
      var h = document.getElementById("trainingEnduranceSlider-sliderHidden");
      var l = document.getElementById("training-endurance-submit");
      break;
    case "vitesse":
      d = document.getElementById("trainingVitesseSlider").getElementsByTagName("li");
      h = document.getElementById("trainingVitesseSlider-sliderHidden");
      l = document.getElementById("training-vitesse-submit");
      break;
    case "dressage":
      d = document.getElementById("trainingDressageSlider").getElementsByTagName("li");
      h = document.getElementById("trainingDressageSlider-sliderHidden");
      l = document.getElementById("training-dressage-submit");
      break;
    case "galop":
      d = document.getElementById("trainingGalopSlider").getElementsByTagName("li");
      h = document.getElementById("trainingGalopSlider-sliderHidden");
      l = document.getElementById("training-galop-submit");
      break;
    case "trot":
      d = document.getElementById("trainingTrotSlider").getElementsByTagName("li");
      h = document.getElementById("trainingTrotSlider-sliderHidden");
      l = document.getElementById("training-trot-submit");
      break;
    case "saut":
      d = document.getElementById("trainingSautSlider").getElementsByTagName("li"), h = document.getElementById("trainingSautSlider-sliderHidden"), l = document.getElementById("training-saut-submit");
  }
  for (e <= g ? f = e : e > g && (f = g); 0 <= f; f--) {
    if ("green hiddenNumber disabled" !== d[f].className && "green disabled" !== d[f].className) {
      d[f].className += " selected";
      d[f].click();
      h.value = f;
      d[f].click();
      l.click();
      break;
    }
  }
}
function ta() {
  var b = C + B(400, 500);
  setTimeout(Ma, b);
  b += B(400, 500);
  setTimeout(Na, b);
  setTimeout(Oa, b + B(1200, 1500));
}
function Ma() {
  document.getElementById("specialisationClassique").getElementsByTagName("button")[0].click();
  setTimeout(function() {
    location.reload();
  }, 1500);
}
function Na() {
  var b = document.getElementById("competition-body-content").getElementsByTagName("a");
  console.log(b[0]);
  b[0].click();
}
function Oa() {
  var b = 0 + B(1600, 2E3);
  setTimeout(function() {
    document.getElementById("modele-tapis-classique-1x").click();
  }, b);
  b += B(400, 500);
  setTimeout(function() {
    document.getElementById("modele-selle-classique-1x").click();
  }, b);
  b += B(400, 500);
  setTimeout(function() {
    document.getElementById("modele-bride-classique-1x").click();
  }, b);
  var e = b + B(400, 500);
  setTimeout(function() {
    var b = document.getElementById("choisir-equipement-popup-content").getElementsByTagName("button");
    console.log(b[b.length - 1]);
    b[b.length - 1].click();
    void 0 == document.getElementsByClassName("action action-style-4 competition-galop action")[0] && setTimeout(function() {
      location.reload();
    }, e);
  }, e);
}
/www.lowadi.com\/elevage\/competition\/inscription\?cheval=/.test(window.location.href) && (W = B(800, 1E3), setTimeout(Pa, W), setTimeout(Pa, W + B(1600, 2E3)), setTimeout(Qa, W + B(2400, 3E3)));
function Pa() {
  document.getElementsByClassName("button button-style-0").item(0).click();
}
function Qa() {
  void 0 !== document.getElementsByClassName("fieldErrorText into")[0] && location.reload();
}
function R() {
  document.getElementsByClassName("action action-style-4 competition-trot").item(0).click();
}
function va() {
  function b() {
    var d = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 panser action-disabled")[0] || void 0 !== d[0] ? setTimeout(e, B(20, 40)) : (d = B(20, 40), setTimeout(I, d), setTimeout(b, d + B(400, 500)));
  }
  function e() {
    var b = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
    void 0 !== document.getElementsByClassName("action action-style-4 boire action-disabled")[0] || void 0 !== b[0] ? setTimeout(f, B(20, 40)) : (b = B(20, 40), setTimeout(P, b), setTimeout(e, b + B(400, 500)));
  }
  function f() {
    if (700 > Q()) {
      var b = B(20, 40);
      setTimeout(function() {
        z || R();
      }, b);
      setTimeout(f, b + B(550, 650));
    } else {
      setTimeout(g, B(20, 40));
    }
  }
  function g() {
    var b = document.getElementsByClassName("action action-style-4 allaiter action-disabled");
    void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || void 0 !== b[0] ? setTimeout(d, B(20, 40)) : (b = B(20, 40), setTimeout(S, b), b += B(400, 500), setTimeout(T, b), setTimeout(g, b + B(550, 650)));
  }
  function d() {
    if (1290 > Q()) {
      var b = B(20, 40);
      setTimeout(function() {
        R();
      }, b);
      setTimeout(d, b + B(550, 650));
    } else {
      setTimeout(h, B(20, 40));
    }
  }
  function h() {
    var b = document.getElementsByClassName("action action-style-4 caresser action-disabled"), d = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
    20 < document.getElementById("energie").textContent || void 0 !== b[0] || void 0 !== d[0] ? setTimeout(l, B(20, 40)) : (b = B(20, 40), setTimeout(J, b), setTimeout(h, b + B(400, 500)));
  }
  function l() {
    var b = document.getElementsByClassName("action action-style-4 carotte action-disabled"), d = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
    20 < document.getElementById("energie").textContent || void 0 !== b[0] || void 0 !== d[0] ? setTimeout(n, B(20, 40)) : (b = B(20, 40), setTimeout(U, b), setTimeout(l, b + B(400, 500)));
  }
  function n() {
    if (void 0 !== document.getElementsByClassName("action action-style-4 coucher-box action-disabled")[0]) {
      var b = B(20, 40);
      setTimeout(K, b);
      b += B(550, 650);
      setTimeout(L, b);
      setTimeout(A, b + B(1100, 1300));
    } else {
      b = B(20, 40), setTimeout(M, b), setTimeout(n, b + B(400, 500));
    }
  }
  setTimeout(b, B(20, 40));
}
function T() {
  var b = !1, e = document.getElementById("feeding").innerHTML;
  var f = -1 == c ? Ra() : c;
  var g = -1 == m ? Sa() : m;
  if (0 !== f + g) {
    -1 !== e.indexOf("\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u044b\u0439") && (f = 20 - Ta(), g = 15 - Ua());
    if (-1 !== e.indexOf("haySlider")) {
      var d = document.getElementById("haySlider").getElementsByTagName("li");
      b = f;
      d[b].className += " selected";
      d[b].click();
      d = document.getElementById("haySlider-sliderHidden");
      d.setAttribute("value", b);
      b = !0;
    }
    -1 !== e.indexOf("oatsSlider") && (d = document.getElementById("oatsSlider").getElementsByTagName("li"), b = g, d[b].className += " selected", d[b].click(), d = document.getElementById("oatsSlider-sliderHidden"), d.setAttribute("value", b), b = !0);
    !1 === b && (-1 !== e.indexOf('id="feedingHay"') && (document.getElementById("feedingHay").options[f].selected = !0), -1 !== e.indexOf('id="feedingOats"') && (document.getElementById("feedingOats").options[g].selected = !0));
    e = document.getElementById("feed-button");
    null !== e && e.click();
  }
}
function ra() {
  if (-1 !== document.body.innerHTML.indexOf("boutonAllaiter")) {
    document.getElementById("boutonAllaiter").click();
  } else {
    var b = !1, e = document.getElementById("feeding").innerHTML, f = Ra(), g = Sa();
    if (0 !== f + g && -1 === e.indexOf("\u0442\u043e\u043b\u0441\u0442")) {
      -1 !== e.indexOf("\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u044b\u0439") && (f = 20 - Ta(), g = 15 - Ua());
      if (-1 !== e.indexOf("haySlider")) {
        var d = document.getElementById("haySlider").getElementsByTagName("li");
        b = f;
        d[b].className += " selected";
        d[b].click();
        d = document.getElementById("haySlider-sliderHidden");
        d.setAttribute("value", b);
        b = !0;
      }
      -1 !== e.indexOf("oatsSlider") && (d = document.getElementById("oatsSlider").getElementsByTagName("li"), b = g, d[b].className += " selected", d[b].click(), d = document.getElementById("oatsSlider-sliderHidden"), d.setAttribute("value", b), b = !0);
      !1 === b && (-1 !== e.indexOf('id="feedingHay"') && (document.getElementById("feedingHay").options[f].selected = !0), -1 !== e.indexOf('id="feedingOats"') && (document.getElementById("feedingOats").options[g].selected = !0));
      e = document.getElementById("feed-button");
      null !== e && e.click();
    }
  }
}
function Ra() {
  var b = 1 * document.getElementsByClassName("section-fourrage section-fourrage-target")[0].childNodes[0].nodeValue - 1 * Ta();
  0 > b && (b = 0);
  20 < b && (b = 20);
  return b;
}
function Sa() {
  if (-1 !== document.getElementById("feeding").outerHTML.indexOf("oats") || -1 !== document.getElementById("feeding").outerHTML.indexOf("Oats")) {
    var b = 1 * document.getElementsByClassName("section-avoine section-avoine-target")[0].childNodes[0].nodeValue - 1 * Ua();
    0 > b && (b = 0);
    15 < b && (b = 15);
    return b;
  }
  return 0;
}
function Ta() {
  var b = document.getElementsByClassName("float-right section-fourrage section-fourrage-quantity")[0].outerHTML;
  return b.substring(b.indexOf("/ <strong class") - 3, b.lastIndexOf("/ <strong class"));
}
function Ua() {
  var b = document.getElementsByClassName("float-right section-avoine section-avoine-quantity")[0].outerHTML;
  return b.substring(b.indexOf("/ <strong class") - 3, b.lastIndexOf("/ <strong class"));
}
function A() {
  location.reload();
}
function I() {
  var b = document.getElementById("boutonPanser");
  null !== b && b.click();
}
function M() {
  var b = document.getElementById("boutonCoucher");
  null !== b && b.click();
}
function J() {
  var b = document.getElementById("boutonCaresser");
  null !== b && b.click();
}
function U() {
  var b = document.getElementById("boutonCarotte");
  null !== b && b.click();
}
function P() {
  var b = document.getElementById("boutonBoire");
  null !== b && b.click();
}
function X() {
  var b = document.getElementById("boutonMash");
  null !== b && b.click();
}
function K() {
  var b = document.getElementById("age").getElementsByTagName("button");
  null !== b[0] && b[0].click();
}
function oa() {
  var b = 0 + B(20, 40);
  setTimeout(function() {
    document.getElementById("widget--1").click();
  }, b);
  b += B(5, 10);
  setTimeout(function() {
    document.getElementsByClassName("options-menu")[0].getElementsByClassName("first")[0].getElementsByTagName("a")[2].click();
  }, b);
  b += B(20, 40);
  setTimeout(function() {
    var b = document.getElementById("horseNameName");
    u(r[0]);
    b.value = ("masculin" == chevalSexe ? "\u043c" : "\u0436") + " " + (enduranceGenetique + vitesseGenetique + dressageGenetique + galopGenetique + trotGenetique + sautGenetique).toFixed(2);
  }, b);
  b += B(5, 10);
  setTimeout(function() {
    document.getElementById("horseNameAffixe").getElementsByTagName("optgroup")[1].getElementsByTagName("option")[0].setAttribute("selected", "selected");
  }, b);
  setTimeout(function() {
    document.getElementById("profil-popup-content").getElementsByClassName("spacer-small-top button button-style-0")[0].click();
  }, b + B(20, 40));
}
function y(b, e) {
  document.cookie = b + "=" + e + ";expires: 800 ";
}
function x(b) {
  b = ("; " + document.cookie).split("; " + b + "=");
  if (2 === b.length) {
    return b.pop().split(";").shift();
  }
}
function G(b) {
  y(b, ";expires: -1");
}
function u(b) {
  var e = "";
  try {
    e = eval(b);
  } catch (f) {
  }
  return e;
}
function L() {
}
function B(b, e) {
  return Math.random() * (e - b) + b;
}
function S() {
  -1 == document.body.innerHTML.indexOf("boutonAllaiter") && document.getElementById("boutonNourrir").click();
}
function qa() {
  if (-1 !== document.body.innerHTML.indexOf("cheval-inscription")) {
    var b = document.getElementById("cheval-inscription").firstChild;
    null !== b && b.click();
  }
}
if (/www.lowadi.com\/elevage\/chevaux\/centreInscription\?id=/.test(window.location.href)) {
  var Va;
  Va = 0 + B(2000, 2500);
  setTimeout(Wa, Va);
  var Xa = Va + B(2000, 2800);
  setTimeout(Ya, Xa);
  setTimeout(Za, Xa + B(2200, 2800));
}
function Wa() {
  document.getElementById("abreuvoir").setAttribute("value", "1");
  document.getElementById("douche").setAttribute("value", "1");
  document.getElementById("montagne").setAttribute("value", "1");
  document.getElementsByClassName("module module-style-20 module-css").nextElementSibling[0].click();
}
function Ya() {
  document.getElementsByClassName("grid-cell spacer-small-top spacer-small-bottom")[1].getElementsByTagName("a")[0].click();
}
function Za() {
  var b = document.getElementsByClassName("odd highlight")[0].getElementsByTagName("button")[1];
  window.a = window.confirm;
  window.confirm = function() {
    return !0;
  };
  b.click();
  window.confirm = window.a;
}
;
