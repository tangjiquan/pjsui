void 0 === window._ozUAs && (window._ozUAs = new Array);
var _99_A39_runcode = !0;
if (navigator.userAgent.indexOf("oadzApp") > -1) _99_A39_runcode = !1;
else for (var ua in _ozUAs) navigator.userAgent.indexOf(_ozUAs[ua]) > -1 && (_99_A39_runcode = !1);
_99_A39_runcode &&
function() {
    window._ozcompid = "2617";
    var t = void 0,
    i = {
        fi: 1,
        dY: "",
        ak: 8,
        fA: function(t) {
            return i.fb(i.an(i.str2binl(t), t.length * i.ak))
        },
        gm: function(t) {
            return i.db(i.an(i.str2binl(t), t.length * i.ak))
        },
        gg: function(t) {
            return i.fr(i.an(i.str2binl(t), t.length * i.ak))
        },
        gX: function(t, e) {
            return i.fb(i.dC(t, e))
        },
        er: function(t, e) {
            return i.db(i.dC(t, e))
        },
        gx: function(t, e) {
            return i.fr(i.dC(t, e))
        },
        an: function(t, e) {
            t[e >> 5] |= 128 << e % 32,
            t[14 + (e + 64 >>> 9 << 4)] = e;
            for (var s = 1732584193,
            a = -271733879,
            n = -1732584194,
            h = 271733878,
            r = 0; r < t.length; r += 16) {
                var o = s,
                c = a,
                f = n,
                d = h;
                s = i.aT(s, a, n, h, t[r + 0], 7, -680876936),
                h = i.aT(h, s, a, n, t[r + 1], 12, -389564586),
                n = i.aT(n, h, s, a, t[r + 2], 17, 606105819),
                a = i.aT(a, n, h, s, t[r + 3], 22, -1044525330),
                s = i.aT(s, a, n, h, t[r + 4], 7, -176418897),
                h = i.aT(h, s, a, n, t[r + 5], 12, 1200080426),
                n = i.aT(n, h, s, a, t[r + 6], 17, -1473231341),
                a = i.aT(a, n, h, s, t[r + 7], 22, -45705983),
                s = i.aT(s, a, n, h, t[r + 8], 7, 1770035416),
                h = i.aT(h, s, a, n, t[r + 9], 12, -1958414417),
                n = i.aT(n, h, s, a, t[r + 10], 17, -42063),
                a = i.aT(a, n, h, s, t[r + 11], 22, -1990404162),
                s = i.aT(s, a, n, h, t[r + 12], 7, 1804603682),
                h = i.aT(h, s, a, n, t[r + 13], 12, -40341101),
                n = i.aT(n, h, s, a, t[r + 14], 17, -1502002290),
                a = i.aT(a, n, h, s, t[r + 15], 22, 1236535329),
                s = i.bc(s, a, n, h, t[r + 1], 5, -165796510),
                h = i.bc(h, s, a, n, t[r + 6], 9, -1069501632),
                n = i.bc(n, h, s, a, t[r + 11], 14, 643717713),
                a = i.bc(a, n, h, s, t[r + 0], 20, -373897302),
                s = i.bc(s, a, n, h, t[r + 5], 5, -701558691),
                h = i.bc(h, s, a, n, t[r + 10], 9, 38016083),
                n = i.bc(n, h, s, a, t[r + 15], 14, -660478335),
                a = i.bc(a, n, h, s, t[r + 4], 20, -405537848),
                s = i.bc(s, a, n, h, t[r + 9], 5, 568446438),
                h = i.bc(h, s, a, n, t[r + 14], 9, -1019803690),
                n = i.bc(n, h, s, a, t[r + 3], 14, -187363961),
                a = i.bc(a, n, h, s, t[r + 8], 20, 1163531501),
                s = i.bc(s, a, n, h, t[r + 13], 5, -1444681467),
                h = i.bc(h, s, a, n, t[r + 2], 9, -51403784),
                n = i.bc(n, h, s, a, t[r + 7], 14, 1735328473),
                a = i.bc(a, n, h, s, t[r + 12], 20, -1926607734),
                s = i.ad(s, a, n, h, t[r + 5], 4, -378558),
                h = i.ad(h, s, a, n, t[r + 8], 11, -2022574463),
                n = i.ad(n, h, s, a, t[r + 11], 16, 1839030562),
                a = i.ad(a, n, h, s, t[r + 14], 23, -35309556),
                s = i.ad(s, a, n, h, t[r + 1], 4, -1530992060),
                h = i.ad(h, s, a, n, t[r + 4], 11, 1272893353),
                n = i.ad(n, h, s, a, t[r + 7], 16, -155497632),
                a = i.ad(a, n, h, s, t[r + 10], 23, -1094730640),
                s = i.ad(s, a, n, h, t[r + 13], 4, 681279174),
                h = i.ad(h, s, a, n, t[r + 0], 11, -358537222),
                n = i.ad(n, h, s, a, t[r + 3], 16, -722521979),
                a = i.ad(a, n, h, s, t[r + 6], 23, 76029189),
                s = i.ad(s, a, n, h, t[r + 9], 4, -640364487),
                h = i.ad(h, s, a, n, t[r + 12], 11, -421815835),
                n = i.ad(n, h, s, a, t[r + 15], 16, 530742520),
                a = i.ad(a, n, h, s, t[r + 2], 23, -995338651),
                s = i.ao(s, a, n, h, t[r + 0], 6, -198630844),
                h = i.ao(h, s, a, n, t[r + 7], 10, 1126891415),
                n = i.ao(n, h, s, a, t[r + 14], 15, -1416354905),
                a = i.ao(a, n, h, s, t[r + 5], 21, -57434055),
                s = i.ao(s, a, n, h, t[r + 12], 6, 1700485571),
                h = i.ao(h, s, a, n, t[r + 3], 10, -1894986606),
                n = i.ao(n, h, s, a, t[r + 10], 15, -1051523),
                a = i.ao(a, n, h, s, t[r + 1], 21, -2054922799),
                s = i.ao(s, a, n, h, t[r + 8], 6, 1873313359),
                h = i.ao(h, s, a, n, t[r + 15], 10, -30611744),
                n = i.ao(n, h, s, a, t[r + 6], 15, -1560198380),
                a = i.ao(a, n, h, s, t[r + 13], 21, 1309151649),
                s = i.ao(s, a, n, h, t[r + 4], 6, -145523070),
                h = i.ao(h, s, a, n, t[r + 11], 10, -1120210379),
                n = i.ao(n, h, s, a, t[r + 2], 15, 718787259),
                a = i.ao(a, n, h, s, t[r + 9], 21, -343485551),
                s = i.bv(s, o),
                a = i.bv(a, c),
                n = i.bv(n, f),
                h = i.bv(h, d)
            }
            return Array(s, a, n, h)
        },
        cc: function(t, e, s, a, n, h) {
            return i.bv(i.fE(i.bv(i.bv(e, t), i.bv(a, h)), n), s)
        },
        aT: function(t, e, s, a, n, h, r) {
            return i.cc(e & s | ~e & a, t, e, n, h, r)
        },
        bc: function(t, e, s, a, n, h, r) {
            return i.cc(e & a | s & ~a, t, e, n, h, r)
        },
        ad: function(t, e, s, a, n, h, r) {
            return i.cc(e ^ s ^ a, t, e, n, h, r)
        },
        ao: function(t, e, s, a, n, h, r) {
            return i.cc(s ^ (e | ~a), t, e, n, h, r)
        },
        dC: function(t, e) {
            var s = i.str2binl(key);
            s.length > 16 && (s = i.an(s, t.length * i.ak));
            for (var a = Array(16), n = Array(16), h = 0; h < 16; h++) a[h] = 909522486 ^ s[h],
            n[h] = 1549556828 ^ s[h];
            var r = i.an(a.concat(i.str2binl(e)), 512 + e.length * i.ak);
            return i.an(n.concat(r), 640)
        },
        bv: function(t, i) {
            var e = (65535 & t) + (65535 & i);
            return (t >> 16) + (i >> 16) + (e >> 16) << 16 | 65535 & e
        },
        fE: function(t, i) {
            return t << i | t >>> 32 - i
        },
        str2binl: function(t) {
            for (var e = Array(), s = (1 << i.ak) - 1, a = 0; a < t.length * i.ak; a += i.ak) e[a >> 5] |= (t.charCodeAt(a / i.ak) & s) << a % 32;
            return e
        },
        fr: function(t) {
            for (var e = "",
            s = (1 << i.ak) - 1, a = 0; a < 32 * t.length; a += i.ak) e += String.fromCharCode(t[a >> 5] >>> a % 32 & s);
            return e
        },
        fb: function(t) {
            for (var e = i.fi ? "0123456789ABCDEF": "0123456789abcdef", s = "", a = 0; a < 4 * t.length; a++) s += e.charAt(t[a >> 2] >> a % 4 * 8 + 4 & 15) + e.charAt(t[a >> 2] >> a % 4 * 8 & 15);
            return s
        },
        db: function(t) {
            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            s = "",
            a = 0; a < 4 * t.length; a += 3) for (var n = (t[a >> 2] >> a % 4 * 8 & 255) << 16 | (t[a + 1 >> 2] >> (a + 1) % 4 * 8 & 255) << 8 | t[a + 2 >> 2] >> (a + 2) % 4 * 8 & 255, h = 0; h < 4; h++) 8 * a + 6 * h > 32 * t.length ? s += i.dY: s += e.charAt(n >> 6 * (3 - h) & 63);
            return s
        }
    },
    t = {
        fk: function() {
            this.ds = "2617.oadz.com",
            this.ek = "fac2.oadz.com",
            this.cs = "s.oadz.com",
            this.df = "cnt;C1;2617;.huaruisales.com:.mindsem.com:wap.95549.cn;Dc7OwZ3iCL/YBX9ReuoW1LQyHTE=;",
            this.ef = "jcnt;C1;2617;.huaruisales.com:.mindsem.com:wap.95549.cn;qxPQacsw8h6Os+GC+WASn1ja9Vk=;",
            this.fF = "fcnt;C1;2617;.huaruisales.com:.mindsem.com:wap.95549.cn;mKP0Df3OdWjoQxlyphXtNgB5xyY=;",
            this.fo = "event;E1;2617;.huaruisales.com:.mindsem.com:wap.95549.cn;FOyRlwp4ONPLgThVgyTo/lUKMXo=;",
            this.hC = "12112",
            this.gn = "12112",
            this.ey = 50,
            this.T = window,
            this.dv = this.T.top,
            this.cA = this.T.screen,
            this.aL = this.T.document,
            this.fm = navigator,
            this.dS = this.T.history,
            this.fg = "Microsoft Internet Explorer" == this.fm.appName,
            this.aw = this.df.split(";")[2],
            this.dJ = void 0,
            this.cU = void 0,
            this.aE = void 0,
            this.aK = void 0,
            this.bP = void 0,
            this.ar = void 0,
            this.bA = void 0,
            this.aq = void 0,
            this.bm = void 0,
            this.aY = void 0,
            this.cz = void 0,
            this.ct = void 0,
            this.aR = 0,
            this.bq = 0,
            this.ci = 768,
            this.cw = 512,
            this.ej = 1536,
            this.cl = 1024,
            this.fJ = 2048,
            this.eP = 3,
            this.aG = void 0,
            this.eo = ["button", "img", "ul", "ol", "svg", "canvas", "video", "audio", "select"],
            this.fM = "INPUT",
            this.fq = "button",
            this.ft = "image",
            this.ec = "submit",
            this.cV = "body",
            this.co = "html",
            this.gU = "FLASH",
            this.aS = "OZ_0a_" + this.aw,
            this.cq = "OZ_1U_" + this.aw,
            this.de = "OZ_1Y_" + this.aw,
            this.eK = "OZ_1K_" + this.aw,
            this.du = "OZ_1S_" + this.aw,
            this.cW = "OZ_SI_" + this.aw,
            this.dj = "OZ_RU_" + this.aw
        },
        fG: function() {
            return this.aE || (0 == this.bn(0).indexOf("https") ? this.aE = "https://" + this.cs + "/" + this.fF: this.aE = "http://" + this.ek + "/" + this.fF),
            this.aE
        },
        dB: function() {
            return this.dJ || (0 == this.bn(0).indexOf("https") ? this.dJ = "https://" + this.cs + "/" + this.df: this.dJ = "http://" + this.ds + "/" + this.df),
            this.dJ
        },
        bK: function() {
            return this.cU || (0 == this.bn(0).indexOf("https") ? this.cU = "https://" + this.cs + "/" + this.ef: this.cU = "http://" + this.ds + "/" + this.ef),
            this.cU
        },
        fz: function() {
            return this.aK || (0 == this.bn(0).indexOf("https") ? this.aK = "https://" + this.cs + "/" + this.fo: this.aK = "http://" + this.ds + "/" + this.fo),
            this.aK
        },
        bH: function(t, i, e, s) {
            var a = "";
            a = e && e > 0 ? t + "=" + i + ";expires=" + e.toGMTString() + ";path=/;domain=" + s: t + "=" + i + ";path=/;domain=" + s,
            this.aL.cookie = a
        },
        as: function(t) {
            var i, e, s = this.aL.cookie,
            a = s.indexOf(t + "=");
            return - 1 != a ? (i = a + t.length + 1, e = s.indexOf(";", i), -1 == e && (e = s.length), s.substring(i, e)) : null
        },
        aX: function() {
            var t = void 0;
            if (!this.aY && (this.aY = this.aL.domain, this.aY.indexOf(".") > -1)) {
                var i = this.aY.split(".");
                this.aY = i[i.length - 2] + "." + i[i.length - 1],
                i.length > 2 && "www" != i[i.length - 3] && (t = i[i.length - 2], (t.length <= 2 || "com" == t || "edu" == t || "gov" == t || "net" == t || "org" == t || "mil" == t) && (this.aY = i[i.length - 3] + "." + t + "." + i[i.length - 1]))
            }
            return this.aY
        },
        bn: function(t) {
            var i = this.cw;
            void 0 !== t && 1 == t && (i = this.cl);
            var e = "";
            try {
                try {
                    e = this.dv.location.href
                } catch(t) {
                    e = this.T.location.href
                }
            } catch(t) {}
            return e || (e = "-"),
            e.length > i && (e = e.substring(0, i)),
            e = escape(e)
        },
        cX: function(t) {
            var i = this.cw;
            void 0 !== t && 1 == t && (i = this.cl);
            var e = "";
            try {
                e = this.T.location.href
            } catch(t) {}
            return e || (e = "-"),
            e.length > i && (e = e.substring(0, i)),
            e = escape(e)
        },
        aO: function(t) {
            var i = this.ej;
            if (void 0 !== t && 1 == t && (i = this.fJ), !this.bP) {
                try {
                    try {
                        this.bP = this.dv.document.referrer
                    } catch(t) {
                        this.bP = this.aL.referrer
                    }
                    this.bP || (this.bP = this.dv.opener.location.href)
                } catch(t) {}
                this.bP || (this.bP = "-"),
                this.bP.length > i && (this.bP = this.bP.substring(0, i)),
                this.bP = escape(this.bP)
            }
            return this.bP
        },
        cI: function(t, i) {
            try {
                if (t && i && t.getAttribute(i)) return t.getAttribute(i).toString()
            } catch(t) {}
            return null
        },
        af: function(t) {
            return t && t.name ? t.name.toString() : this.cI(t, "name") ? this.cI(t, "name") : t && t.id ? t.id.toString() : "-"
        },
        fD: function(t) {
            for (var i = 1,
            e = 0; t && i <= 50;) if (t = t.parentNode, i++, t && "DIV" == t.tagName) {
                var s = this.af(t);
                if (s && 0 == s.indexOf("__") && s.length > 2) {
                    e = 1;
                    break
                }
            }
            return 1 == e ? t: null
        },
        cL: function(t, i) {
            t.onclick ? this.fg ? t.attachEvent("onclick", i) : t.addEventListener("click", i, !1) : t.onclick = i
        },
        eO: function(t, i) {
            this.fg ? t.attachEvent("onhashchange", i) : t.addEventListener("hashchange", i, !0)
        },
        eZ: function() {
            var i = 0;
            if (void 0 !== t.T.frames && t.T.frames) for (i = 0; i < t.T.frames.length; i++) try {
                t.cL(t.T.frames[i].document, t.bV)
            } catch(t) {}
            t.T.__99_A39_pageonload && t.T.__99_A39_pageonload()
        },
        fw: function() {
            t.T.__99_A39_onHashChange && t.T.__99_A39_onHashChange(),
            t.dE(t.T._ozprm, 1),
            t.dh(t.T._ozurltail, 1),
            t.aR = 0,
            t.bq = 1,
            t.fc(t.bm, t.aq)
        },
        eS: function(t) {
            for (var i = 1; t && "A" != t.tagName && "AREA" != t.tagName && i <= 10;) t = t.parentNode,
            i++;
            return ! t || "A" != t.tagName && "AREA" != t.tagName ? null: t
        },
        fB: function(t) {
            var i = 1,
            e = void 0;
            this.af(t);
            for (t && t.tagName && (e = t.tagName.toLowerCase()); t && !t.onclick && !t.getAttribute("szMon", "true") && i <= 5 && e != this.cV && e != this.co;) {
                if (!t.parentNode || !t.parentNode.tagName) return null;
                t = t.parentNode,
                e = t.tagName.toLowerCase(),
                i++
            }
            return t && (t.onclick || t.getAttribute("szMon", "true")) && e != this.cV && e != this.co ? t: null
        },
        fa: function(t) {
            var i = 1,
            e = void 0,
            s = this.af(t);
            for (t && t.tagName && (e = t.tagName.toLowerCase()); t && i <= 5 && "-" == s && e != this.cV && e != this.co;) {
                if (!t.parentNode || !t.parentNode.tagName) return null;
                t = t.parentNode,
                s = this.af(t),
                e = t.tagName.toLowerCase(),
                i++
            }
            return t && "-" != s && e != this.cV && e != this.co ? t: null
        },
        eA: function(t) {
            for (var i = 1,
            e = void 0; t && i <= 5; i++) {
                if (!t || !t.tagName) return null;
                if (e = t.tagName.toLowerCase(), this.eo.indexOf(e) > -1) return t;
                if (!t.parentNode) return null;
                t = t.parentNode,
                i++
            }
            return null
        },
        et: function(t) {
            return !! /^\d*$/.test(t)
        },
        ez: function() {
            var t = Math.floor((new Date).getTime() / 1e3),
            i = 0,
            e = "-";
            try {
                var s = this.as(this.cW);
                if (s) {
                    e = s;
                    var a = e.indexOf("sTime="),
                    n = e.indexOf("&sIndex="),
                    h = "-";
                    a < 0 ? (i++, h = "sTime=" + t) : h = e.substring(0, n);
                    var r = 0;
                    n < 0 ? (i++, r = 999999) : (r = e.substring(e.indexOf("&sIndex=") + 8), this.et(r) ? r++:r = 999999),
                    e = h + "&sIndex=" + r,
                    this.bH(this.cW, e, 0, this.aX())
                } else e = "sTime=" + t + "&sIndex=1",
                this.bH(this.cW, e, 0, this.aX())
            } catch(t) {}
            return e + "&sret=" + i
        },
        bV: function(e) {
            if (t.aR < t.ey) {
                t.aG = t.ez();
                var s = null,
                a = "-",
                n = null,
                h = "-";
                if (e) e.target ? s = e.target: e.srcElement && (s = e.srcElement);
                else if (t.T.event) e = t.T.event,
                s = e.srcElement;
                else try {
                    var r = 0;
                    for (r = 0; r < t.T.frames.length; r++) t.T.frames[r].event && (e = t.T.frames[r].event, s = e.srcElement)
                } catch(t) {}
                if (e && s) {
                    var o = null,
                    c = null,
                    f = t.eS(s);
                    if (f) o = f,
                    (a = escape(o.href)) || (a = "-");
                    else if (s.tagName != t.fM || !(c = s.type) || c != t.fq && c != t.ft && c != t.ec) {
                        var d;
                        o = (d = t.fB(s)) ? d: (d = t.fa(s)) ? d: (d = t.eA(s)) ? d: null
                    } else o = s;
                    if (o) {
                        var u = {},
                        v = [],
                        d = o;
                        n = o.tagName,
                        h = escape(t.af(o));
                        try {
                            do {
                                for (var l = d.tagName,
                                b = 0,
                                g = d.previousSibling; g;) g.tagName == l && b++, g = g.previousSibling;
                                if (v.push(l + "[" + b + "]"), "BODY" == l) break;
                                d = d.parentNode
                            } while ( d )
                        } catch(t) {}
                        v.reverse(),
                        u.objkey = i.fA(v.join("--"));
                        var m = void 0;
                        if (n && "-" != n) {
                            var p = t.fD(o);
                            t.ct = t.cI(o, "ozrec");
                            var _ = 0,
                            z = 0;
                            if (void 0 !== e.pageX ? (_ = e.pageX, z = e.pageY) : void 0 !== e.x && (_ = e.x, z = e.y), p) {
                                m = n + "*" + h + "*" + _ + "*" + z + "*" + escape(t.af(p))
                            } else m = n + "*" + h + "*" + _ + "*" + z;
                            var w = Math.floor((new Date).getTime() / 1e3);
                            0 == h.toLowerCase().indexOf("__ad_") || 0 == h.toLowerCase().indexOf("__zntg_") ? t.bY(h, w, a) : p && (h = escape(t.af(p)), 0 != h.toLowerCase().indexOf("__ad_") && 0 != h.toLowerCase().indexOf("__zntg_") || t.bY(h, w, a))
                        }
                        if (n && "" != t.bK()) {
                            try {
                                0 == t.aR && 1 == t.bq ? (t.aR = 1, t.bq = t.aR + 1) : (1 == t.bq ? t.aR = 2 : t.aR = t.bq, t.bq = t.aR + 1)
                            } catch(i) {
                                t.aR = 99
                            }
                            t.dw(m, t.aR, a, u),
                            t.dz(100)
                        }
                    }
                }
            }
        },
        dz: function(t) {
            for (var i = (new Date).getTime(); (new Date).getTime() - i < t;);
        },
        dI: function(t) {
            var i = (new Date).getTime();
            return 1 == t && (i = Math.floor(i / 1e3)),
            "ozrand=" + i
        },
        dw: function(t, i, e, s) {
            "" != this.bK() && this.bn(1) && this.ar && this.bm && t && i > 0 && e && this.aB(this.bK() + "?" + i + "&" + this.bn(1) + "&" + this.ar + "&" + this.bm + "&" + t + "&" + e + "&" + this.dF(s) + "&" + this.dI(1))
        },
        gq: function(t, i, e, s) {
            "" != this.bK() && s && this.ar && t && i > 0 && e && this.aB(this.bK() + "?" + i + "&" + s + "&" + this.ar + "&-&" + t + "&" + e + "&" + this.dF() + "&" + this.dI(1))
        },
        hB: function(t, i, e, s, a) {
            "" != this.bK() && a && this.ar && t && i > 0 && e && this.aB(this.bK() + "?" + i + "&" + a + "&" + this.ar + "&-&" + t + "&" + e + "&" + this.dF() + "&" + s + "&" + this.dI(1))
        },
        dE: function(t, i) {
            var e;
            try {
                void 0 !== t && ("[object Object]" === Object.prototype.toString.call(t) && (t = this.dq(t)), t.length > this.ci && (t = t.substring(0, this.ci)), e = escape("&" == t[0] ? t: "&" + t))
            } catch(t) {}
            return void 0 === e && (e = "-"),
            i && (this.aq = e),
            e
        },
        dh: function(t, i) {
            var e;
            try {
                void 0 !== t && 0 == t.indexOf("#") && t.length > 1 && (e = escape(t))
            } catch(t) {}
            return void 0 === e && (e = "-"),
            i && (this.bm = e),
            e
        },
        eY: function(t) {
            try {
                return /^\d+$/.test(t)
            } catch(t) {}
            return ! 1
        },
        eL: function() {
            var t = void 0;
            try {
                if ((t = this.fm.userAgent) && t.toLowerCase().indexOf("alexa") > -1) return 1
            } catch(t) {}
            return 0
        },
        dA: function() {
            var t = 0,
            i = 0;
            return this.cA && (t = this.cA.width, i = this.cA.height, t && i && this.eY(t) && this.eY(i)) ? t + "*" + i: "0*0"
        },
        dq: function(t) {
            try {
                var i = "";
                for (var e in t) null != e && "" != e && (i += "&" + e + "=" + encodeURIComponent(t[e]))
            } catch(t) {}
            return i
        },
        dQ: function() {
            var t = "-";
            try {
                t = escape(this.aL.title.substring(0, 30))
            } catch(t) {}
            t || (t = "-");
            var i = 0,
            e = void 0;
            try {
                if (_ozuid) {
                    e = escape(_ozuid);
                    var s = new Date;
                    this.bH(this.dj, e, new Date(s.getTime() + 63072e6), this.aX())
                }
            } catch(t) {}
            e || (e = this.as(this.dj), void 0 !== e && "" != e && e ? i = 1 : e = "-");
            var a = this.ew();
            a || (a = "-");
            var n = 0;
            try {
                var h = (new Date).getTime();
                _oztime && h > _oztime && (n = h - _oztime)
            } catch(t) {}
            var r = void 0;
            try {
                _oznvs && (r = escape(_oznvs))
            } catch(t) {}
            r || (r = "-");
            var o = void 0;
            try {
                _ozwxid && (o = escape(_ozwxid))
            } catch(t) {}
            o || (o = "-"),
            this.aG || (this.aG = "-");
            var c = Math.floor((new Date).getTime() / 1e3),
            f = this.dk(c),
            d = "0"; - 1 != f.indexOf("&ltime=") && (d = f.substr(f.indexOf("&ltime=") + 7));
            var u = this.da(!0, c),
            v = this.cJ(),
            l = this.cQ();
            return "ozlvd=" + d + "&ozept=" + t + "&ozsru=" + e + "&ozrucs=" + i + "&ozscr=" + this.dA() + "&ozplt=" + n + "&ozalx=" + this.eL() + "&oznvs=" + r + "&ozwxid=" + o + "&ozsac=" + a + "&ozccu=" + escape(f) + "&ozccy=" + escape(u) + "&ozcck=" + escape(v) + "&ozccs=" + escape(l)
        },
        dF: function(t) {
            var i = 0,
            e = void 0,
            s = "-";
            try {
                _ozuid && (e = escape(_ozuid))
            } catch(t) {}
            e || (e = this.as(this.dj), void 0 !== e && "" != e && e ? i = 1 : e = "-"),
            this.ct || (this.ct = "-"),
            this.aq || (this.aq = "-"),
            this.aG || (this.aG = "-");
            var a = void 0;
            try {
                _oznvs && (a = escape(_oznvs))
            } catch(t) {}
            a || (a = "-");
            var n = void 0;
            try {
                _ozwxid && (n = escape(_ozwxid))
            } catch(t) {}
            n || (n = "-"),
            t && (s = t.objkey);
            var h = Math.floor((new Date).getTime() / 1e3),
            r = this.dk(h),
            o = this.da(!1, h),
            c = this.cJ(),
            f = this.cQ();
            return "ozsru=" + e + "&ozscr=" + this.dA() + "&ozrucs=" + i + "&ozprm=" + this.aq + "&oznvs=" + a + "&ozwxid=" + n + "&ozrec=" + escape(this.ct) + "&ozccu=" + escape(r) + "&ozccy=" + escape(o) + "&ozcck=" + escape(c) + "&ozccs=" + escape(f) + "&ozobjkey=" + escape(s) + "&oztopurl=" + escape(this.cz)
        },
        fK: function(t, i) {
            var e = void 0;
            e = this.bn(1),
            this.bA && "-" != this.bA ? this.ar = this.bA: this.ar = this.aO(1);
            var s = e,
            a = this.ar;
            s = this.bS(s, "ozs"),
            a = this.bS(a, "ozs"),
            this.aB(this.fG() + "?1&" + s + "&" + a + "&" + t + "&" + i + "&" + this.dQ()),
            this.bA = "-" == t ? e: e + t
        },
        fc: function(t, i) {
            var e = void 0;
            e = this.bn(1),
            this.bA && "-" != this.bA ? this.ar = this.bA: this.ar = this.aO(1);
            var s = e,
            a = this.ar;
            this.cz = e,
            this.aB(this.dB() + "?1&" + s + "&" + a + "&" + t + "&" + i + "&" + this.dQ()),
            this.bA = "-" == t ? e: e + t
        },
        bS: function(t, i) {
            for (var e, s = 0; s < this.eP && (e = new RegExp("%26" + i + "%3D(.+?)%26", "g"), t.match(e));) t = t.replace(e, "%26"),
            s++;
            return e = new RegExp("%26" + i + "%3D(.+?)$", "i"),
            t = t.replace(e, ""),
            e = new RegExp("%3F" + i + "%3D(.+?)%26"),
            t = t.replace(e, "%3F"),
            e = new RegExp("%3F" + i + "%3D(.+?)$"),
            t = t.replace(e, "")
        },
        eT: function(t) {
            var i = 1;
            try {
                t.eventPhase && 0 == t.eventPhase && (i = 0)
            } catch(t) {}
            i && (this.T.event ? this.bV() : this.bV(t))
        },
        eU: function(t, i, e, s) {
            var a = "",
            n = "-",
            h = "-";
            t && "" != t && this.aR < this.ey && (this.aR++, void 0 !== i && "" != i && (n = i), void 0 !== e && "" != e ? (e, a = n + "*" + t + "*1*1*" + e) : a = n + "*" + t + "*1*1", void 0 !== s && "" != s && (s.length > this.cw && (s = s.substring(0, this.cw)), h = s), this.dw(a, this.aR, h), this.dz(100))
        },
        fu: function(t, i) {
            var e = 0,
            s = this.dE(t, e),
            a = this.dh(i, e);
            this.fK(a, s)
        },
        ev: function() {
            var t = void 0;
            try {
                _ozuid && (t = escape(_ozuid))
            } catch(t) {}
            t || (t = "-");
            var i = Math.floor((new Date).getTime() / 1e3),
            e = this.dk(i),
            s = this.da(!1, i),
            a = this.cJ(),
            n = this.cQ();
            return "ozsru=" + t + "&ozscr=" + this.dA() + "&ozprm=" + this.aq + "&ozccu=" + escape(e) + "&ozccy=" + escape(s) + "&ozcck=" + escape(a) + "&ozccs=" + escape(n)
        },
        eR: function(t, i) {
            var e = void 0;
            e = this.bn(1);
            var s = e,
            a = this.aO(1);
            s = this.bS(s, "ozs"),
            a = this.bS(a, "ozs"),
            this.aB(this.fz() + "?" + s + "&" + a + "&" + t + "&" + i + "&" + this.ev())
        },
        fC: function(t, i) {
            var e = "-",
            s = "-";
            if (void 0 !== t && "" != t) {
                e = escape(t);
                try {
                    void 0 !== i && "" != i && ("[object Object]" === Object.prototype.toString.call(i) && (i = this.dq(i)), i.length > this.ci && (i = i.substring(0, this.ci)), s = escape("&" == i[0] ? i: "&" + i))
                } catch(t) {}
                this.eR(e, s),
                this.dz(100)
            }
        },
        bY: function(t, i, e) {
            t = escape(t);
            var s = this.bn(0),
            a = this.as(this.aS);
            if (a) {
                var n = 0,
                h = 0,
                r = 0;
                for (n = 0; n < a.length; n++)"&" == a.charAt(n) && 1 == ++h && (r = n + 1);
                h < 4 ? a = a + "&" + t + "*" + i + "*" + s + "*" + e: 4 == h && r > 0 && (a = a.substr(r) + "&" + t + "*" + i + "*" + s + "*" + e)
            } else a = t + "*" + i + "*" + s + "*" + e;
            this.bH(this.aS, a, 0, this.aX())
        },
        ew: function() {
            var t = void 0,
            i = Math.floor((new Date).getTime() / 1e3);
            try {
                for (var e = "",
                s = this.as(this.aS).split("&"), a = 0; a < s.length; a++) {
                    var n = s[a].split("*");
                    i - n[1] < 900 && n[2] == escape(this.aO(0)) && n[3] == this.bn(0) ? t = n[0] : e += ("" == e ? "": "&") + s[a]
                }
                this.bH(this.aS, e, 0, this.aX())
            } catch(t) {}
            return t
        },
        dk: function(t) {
            var i = "-";
            try {
                i = this.as(this.cq);
                var e = new Date,
                s = 0;
                if (i) {
                    if (i && -1 != i.indexOf("ctime=")) {
                        var a = i.substr(i.indexOf("ctime=") + 6),
                        n = a.indexOf("&"); - 1 != n && (a = a.substring(0, n)),
                        a.match(/^\d*$/) && (s = new Number(a))
                    }
                    i = i.substring(0, i.lastIndexOf("&ctime")) + "&ctime=" + t + "&ltime=" + s
                } else {
                    var h = Math.round(e.getTime() / 1e3),
                    r = h.toString(16),
                    o = r.length;
                    r = r.substring(o - 7, o);
                    for (var c = "",
                    f = 0; f < 3; f++) {
                        var d = Math.floor(255 * Math.random()),
                        u = d.toString(16);
                        c += (1 == u.length ? "0": "") + u
                    }
                    i = "vid=" + ("v" + r + c + ".0") + "&ctime=" + t + "&ltime=" + s
                }
                this.bH(this.cq, i, new Date(e.getTime() + 252288e6), this.aX())
            } catch(t) {}
            return i
        },
        da: function(t, i) {
            var e = "-";
            try {
                var s = this.as(this.de),
                a = this.as(this.cq);
                if (s && (e = s, e = e.substring(0, e.lastIndexOf("&ctime")) + a.substring(a.lastIndexOf("&ctime")) + "&compid=" + this.aw, this.bH(this.de, e, 0, this.aX())), t) {
                    var n = 0,
                    h = "-",
                    r = "-",
                    o = this.bn(0),
                    c = this.aO(0),
                    f = 1,
                    d = 0;
                    if ("-" != c) {
                        for (var u = this.dB().split(";")[3].split(":"), v = 0; v < u.length; v++) - 1 != c.indexOf(u[v]) && (f = 0);
                        1 == f && (n = 1)
                    }
                    var l = o.lastIndexOf("%3Fozu_sid%3D"); - 1 == l && (l = o.lastIndexOf("%26ozu_sid%3D"));
                    var b = o.lastIndexOf("%3Fozs%3D");
                    if ( - 1 == b && (b = o.lastIndexOf("%26ozs%3D")), -1 != l && l > b) {
                        n = 1;
                        var g = o.split(/%3Fozu_sid%3D|%26ozu_sid%3D/);
                        if (g.length > 1) {
                            var m = g[1],
                            p = m.indexOf("%26"); - 1 != p && (m = m.substr(0, p)),
                            h = m,
                            d = 1
                        }
                    }
                    if ( - 1 != b && b > l) {
                        n = 1;
                        for (var _ = o.split(/%3Fozs%3D|%26ozs%3D/), v = 1; v < _.length && v < 4; v++) {
                            var z = _[v],
                            p = z.indexOf("%26");
                            if ( - 1 != p) z = z.substr(0, p);
                            else {
                                var w = z.indexOf("%23"); - 1 != w && (z = z.substr(0, w))
                            }
                            if ( - 1 == z.indexOf("-")) {
                                r = z,
                                d = 2;
                                break
                            }
                            var T = z.split("-");
                            if (2 == T.length && T[1] == this.aw) {
                                r = T[0],
                                d = 2;
                                break
                            }
                        }
                    }
                    if (s || "-" != c || (n = 1), n && (e = "erefer=" + c + "&eurl=" + o + "&etime=" + i + a.substring(a.lastIndexOf("&ctime")) + "&compid=" + this.aw, this.bH(this.de, e, 0, this.aX()), "-" != h || "-" != r)) {
                        var A = ""; - 1 != e.indexOf("&etime=") && (A = "etime=" + i + "&ozu_sid=" + h + "&ozs=" + r + "&flag=" + d + "&compid=" + this.aw, this.bH(this.eK, A, new Date((new Date).getTime() + 2592e6), this.aX()), this.bH(this.du, A, 0, this.aX()))
                    }
                }
            } catch(t) {}
            return e
        },
        cJ: function() {
            var t = "-";
            try {
                var i = this.as(this.eK);
                i && (t = i)
            } catch(t) {}
            return t
        },
        cQ: function() {
            var t = "-";
            try {
                var i = this.as(this.du);
                i && (t = i)
            } catch(t) {}
            return t
        },
        aB: function(t) { (new Image).src = t
        },
        eb: function() {
            try {
                void 0 === this.bX ? (this.fk(), this.bX = 1, this.bq = 1, this.eC = 1) : (this.bX = 2, this.eC = 2),
                this.aG = this.ez(),
                1 == this.eC && (this.dE(this.T._ozprm, 1), this.dh(this.T._ozurltail, 1), this.T.onload && (this.T.__99_A39_pageonload = this.T.onload), this.T.onload = this.eZ, this.eO(this.T, this.fw), this.cL(this.aL, this.bV), this.fc(this.bm, this.aq))
            } catch(t) {}
            return this
        }
    };
    if ("undefined" == typeof _99_A39) try {
        _99_A39 = t.eb(),
        __ozclk = function() {
            try {
                var t = _99_A39.T.event || arguments.callee.caller.arguments[0];
                _99_A39.eT(t)
            } catch(t) {}
        },
        __ozEvent = function(t, i) {
            _99_A39.fC(t, i)
        },
        __ozfac2 = function(t, i) {
            _99_A39.fu(t, i)
        },
        __ozfaj2 = function(t, i, e, s) {
            _99_A39.eU(t, i, e, s)
        }
    } catch(t) {}
} ();