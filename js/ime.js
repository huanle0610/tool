(function(L, F, ja, Q) {
    var I = !+"\v1",
    sa = false,
    ba = function(wa) {
        if (!sa) {
            sa = true;
            if (Q === wa) if (I) L.detachEvent("onload", ba);
            else {
                F.removeEventListener("DOMContentLoaded", ba, false);
                L.removeEventListener("load", ba, false)
            }
            var S = L[ja];
            Q !== S && Function === S.toggle.constructor ? S.toggle() : (S = L[ja] = function() {
                var ia = F.body,
                ma = F.documentElement,
                Z = I && !("maxHeight" in ia.style),
                ta = 8 === F.documentMode,
                ca = !!F.getBoxObjectFor || "mozInnerScreenX" in L,
                W = !!L.opera && !!L.opera.toString().indexOf("Opera"),
                oa = /^function \(/.test([].sort),
                pa = !!L.devicePixelRatio,
                Ca = /a/.__proto__ == "//",
                xa = navigator.userAgent.toLowerCase(),
                ya = -1 !== xa.indexOf("macintosh") || -1 !== xa.indexOf("mac os x"),
                za = "CSS1Compat" === F.compatMode,
                $ = Z || !za && I,
                qa = I ? 1 : 0,
                Aa = "selection" in F && !W,
                Ba = ( + new Date).toString(),
                s = Ba.slice( - 3),
                ua = "window." + ja,
                ka = "$$ime" + s,
                K = {
                    i: "input",
                    t: "textarea",
                    d: "div",
                    r: "iframe",
                    h: "html",
                    b: "body"
                },
                aa = {
                    n: "on",
                    f: "off",
                    d: "ready"
                },
                na = function() {},
                D = function() {
                    var h = Object.prototype.toString;
                    return {
                        a: function() {
                            return "indexOf" in [] ?
                            function(a, b) {
                                return - 1 !== b.indexOf(a)
                            }: function(a, b) {
                                for (var e = 0,
                                o = b.length; e < o; e++) if (b[e] === a) return true;
                                return false
                            }
                        } (),
                        b: function(a) {
                            return parseInt(a, 10) || 0
                        },
                        c: function(a, b) {
                            return h.call(a) === "[object " + b + "]"
                        }
                    }
                } (),
                r = function() {
                    var h = {},
                    a = "$$guid" + s,
                    b = "$$huid" + s,
                    e = 0,
                    o = 0,
                    w = function(l) {
                        var j = true,
                        n = h[this[a]].hndl[l.type];
                        for (var i in n) n.hasOwnProperty(i) && false === n[i](l) && (j = false);
                        return j
                    },
                    q = function(l) {
                        return function() {
                            w.apply(h[l].elmt, arguments)
                        }
                    },
                    x = function() {
                        return I ?
                        function(l, j, n) {
                            l.attachEvent("on" + j, n)
                        }: function(l, j, n, i) {
                            l.addEventListener(j, n, i)
                        }
                    } (),
                    y = function() {
                        return I ?
                        function(l, j, n) {
                            l.detachEvent("on" + j, n)
                        }: function(l, j, n, i) {
                            l.removeEventListener(j, n, i)
                        }
                    } ();
                    return {
                        a: function(l, j, n, i) {
                            if (!l || !j || !n) return false;
                            var u = l[a] || (l[a] = ++e),
                            k = h[u];
                            k || (k = h[u] = {
                                elmt: l,
                                lsnr: q(u),
                                hndl: {},
                                cptr: i || false
                            });
                            i = h[u].hndl[j];
                            if (!i) {
                                i = h[u].hndl[j] = {};
                                x(l, j, k.lsnr, k.cptr)
                            }
                            n[b] || (n[b] = ++o);
                            i[n[b]] || (i[n[b]] = n)
                        },
                        b: function(l, j, n) {
                            if (!l || !l[a]) return false;
                            var i = l[a],
                            u = h[i];
                            if (!u) return false;
                            if (j) {
                                var k = u.hndl[j];
                                if (!k) return false;
                                if (n) n[b] && delete k[n[b]];
                                else {
                                    for (var t in k) delete k[t];
                                    t = null
                                }
                                for (t in k) break;
                                if (!t) {
                                    y(l, j, u.lsnr, u.cptr);
                                    delete u.hndl[j]
                                }
                                t = null;
                                for (t in u.hndl) break;
                                t || delete h[i]
                            } else for (t in u.hndl) u.hndl.hasOwnProperty(t) && arguments.callee.call(r, l, t);
                            l = j = n = null
                        },
                        c: function() {
                            for (var l in h) h.hasOwnProperty(l) && r.b(h[l].elmt)
                        },
                        d: function() {
                            return I ?
                            function(l) {
                                return l.srcElement || null
                            }: function(l) {
                                return l.target || null
                            }
                        } (),
                        e: function() {
                            return I ?
                            function(l) {
                                return [l.clientX + (ma.scrollLeft || ia.scrollLeft), l.clientY + (ma.scrollTop || ia.scrollTop)]
                            }: function(l) {
                                return [l.pageX, l.pageY]
                            }
                        } (),
                        f: function(l) {
                            return l.keyCode || 0
                        },
                        g: function() {
                            return ca ?
                            function(l) {
                                return l.charCode || 0
                            }: function(l) {
                                return l.keyCode || 0
                            }
                        } (),
                        i: function() {
                            return I ?
                            function(l) {
                                l.cancelBubble = true
                            }: function(l) {
                                l.stopPropagation()
                            }
                        } (),
                        h: function() {
                            return I ?
                            function(l) {
                                l.returnValue = false
                            }: function(l) {
                                l.preventDefault()
                            }
                        } ()
                    }
                } (),
                c = function() {
                    var h = za ? ma: ia;
                    return {
                        a: function(a, b) {
                            return (b || F).getElementById(a)
                        },
                        b: function(a) {
                            a = a || h;
                            return [a.clientWidth, a.clientHeight]
                        },
                        c: function(a) {
                            a = a || F;
                            return [Math.max(a.documentElement.scrollWidth, a.body.scrollWidth), Math.max(a.documentElement.scrollHeight, a.body.scrollHeight)]
                        },
                        d: function(a) {
                            a = a || F;
                            return [Math.max(a.documentElement.scrollLeft, a.body.scrollLeft), Math.max(a.documentElement.scrollTop, a.body.scrollTop)]
                        },
                        e: function() {
                            return "getBoundingClientRect" in ma ?
                            function(a) {
                                var b = a.getBoundingClientRect();
                                b = [D.b(b.left), D.b(b.top)];
                                if (I && !F.documentMode) {
                                    var e = [2, 2];
                                    a = c.p(a);
                                    var o = a.documentElement;
                                    if ("CSS1Compat" !== a.compatMode) {
                                        a = [c.m(o, "borderLeftWidth"), c.m(o, "borderTopWidth")];
                                        "medium" !== a[0] && (e[0] = D.b(a[0]));
                                        "medium" !== a[1] && (e[1] = D.b(a[1]))
                                    } else if (Z) e = [0, 0];
                                    b[0] -= e[0];
                                    b[1] -= e[1]
                                }
                                return b
                            }: function(a) {
                                for (var b = [a.offsetLeft, a.offsetTop], e = null, o = a; o = o.offsetParent;) {
                                    b[0] += o.offsetLeft;
                                    b[1] += o.offsetTop;
                                    e = [c.m(o, "borderLeftWidth"), c.m(o, "borderTopWidth")];
                                    "medium" !== e[0] && (b[0] += D.b(e[0]));
                                    "medium" !== e[1] && (b[1] += D.b(e[1]))
                                }
                                if ("fixed" !== c.m(a, "position")) for (o = a; o = o.parentNode;) {
                                    o.scrollLeft && (b[0] -= o.scrollLeft);
                                    o.scrollTop && (b[1] -= o.scrollTop);
                                    if ("fixed" === c.m(o, "position")) break
                                }
                                b[0] = D.b(b[0]);
                                b[1] = D.b(b[1]);
                                return b
                            }
                        } (),
                        f: function(a) {
                            for (var b = [0, 0], e = c.q(a), o = null; a;) {
                                o = c.e(a);
                                b[0] += o[0];
                                b[1] += o[1];
                                if (L.window === e.window) break;
                                a = e.frameElement;
                                e = c.q(a)
                            }
                            return b
                        },
                        g: function(a, b) {
                            b = b || F;
                            var e = b.getElementsByTagName("style"),
                            o = null;
                            if (0 !== e.length) for (var w = 0,
                            q = e.length; w < q; w++) {
                                var x = e[w],
                                y = x.getAttribute("rel");
                                if (y && -1 !== y.indexOf(ka)) {
                                    o = x;
                                    break
                                }
                            }
                            if (null === o) {
                                o = b.createElement("style"); (b.getElementsByTagName("head")[0] || b.documentElement.firstChild).appendChild(o);
                                o.type = "text/css";
                                o.setAttribute("rel", (o.getAttribute("rel") || "stylesheet") + " " + ka)
                            }
                            if (I) try {
                                o.styleSheet.cssText += a
                            } catch(l) {
                                b.createStyleSheet().cssText = a;
                                o.parentNode.removeChild(o)
                            } else {
                                e = b.createTextNode(a);
                                o.appendChild(e)
                            }
                        },
                        h: function(a, b) {
                            return ! a || !a.className || -1 === (" " + a.className + " ").indexOf(" " + b + " ") ? false: true
                        },
                        i: function(a, b) {
                            if (!a || c.h(a, b)) return false;
                            if (a.className) b = " " + b;
                            a.className += b
                        },
                        j: function(a, b) {
                            if (!a || !a.className) return false;
                            a.className = (" " + a.className + " ").replace(RegExp("\\s+" + b + "\\s+"), " ").replace(/^\s|\s$/g, "")
                        },
                        k: function(a, b) {
                            a.className = b
                        },
                        l: function(a) {
                            return 1 === a.nodeType ? a.tagName.toLowerCase() : ""
                        },
                        m: function() {
                            return "getComputedStyle" in L ?
                            function(a, b) {
                                if (!a || 9 === a.nodeType || !b) return null;
                                var e = a.style[b];
                                if (!e) {
                                    var o = c.q(a).getComputedStyle(a, null);
                                    if (o) e = o[b]
                                }
                                return e
                            }: function(a, b) {
                                if (!a || 9 === a.nodeType || !b) return null;
                                return a.style[b] || (a.currentStyle ? a.currentStyle[b] : null)
                            }
                        } (),
                        n: function(a, b, e) {
                            if (!a || 9 === a.nodeType || !b || !e) return null;
                            if (Q === a.style[b]) return false;
                            a.style[b] = e;
                            return true
                        },
                        o: function(a) {
                            return "window" in a && !("nodeType" in a)
                        },
                        p: function(a) {
                            if (a && 1 === a.nodeType) return a.ownerDocument;
                            return null
                        },
                        q: function(a) {
                            if (!a) return null;
                            switch (true) {
                            case c.o(a):
                                return a;
                            case 1 === a.nodeType: a = c.p(a);
                            case 9 === a.nodeType: return a.defaultView || a.parentWindow;
                            default:
                                return null
                            }
                        },
                        r: function() {
                            return I ?
                            function(a) {
                                for (var b = a.length,
                                e = Array(b); b--;) e[b] = a[b];
                                return e
                            }: function(a) {
                                return Array.prototype.slice.call(a)
                            }
                        } ()
                    }
                } (),
                p = function() {
                    var h = {
                        ready: false,
                        lnchr: 1,
                        cgiPrx: "//ime.qq.com/fcgi-bin/",
                        astPrx: "//" + (0 === F.URL.toLowerCase().indexOf("https:") ? "ime.qq.com": "pc1.gtimg.com") + "/webime/images/",
                        prvKey: "",
                        on: false,
                        eng: false,
                        caps: false,
                        trad: false,
                        dbc: false,
                        enSymb: false,
                        iptMode: 1,
                        fuzzy: false,
                        pyMode: 1,
                        spType: 2,
                        splHnt: true,
                        perPg: 5,
                        ftDeco: 0,
                        autoHid: false,
                        manlOn: false,
                        cursFlw: true
                    },
                    a = function(e, o) {
                        if (Q !== h[e]) h[e] = o
                    },
                    b = {
                        mo: function(e) {
                            0 !== D.b(e) && a("manlOn", true)
                        },
                        lt: function(e) {
                            e = D.b(e);
                            1 < e && a("lnchr", e)
                        },
                        ah: function(e) {
                            0 !== D.b(e) && a("autoHid", true)
                        },
                        tc: function(e) {
                            0 !== D.b(e) && da.a(aa.d,
                            function() {
                                P.d("face")
                            })
                        },
                        im: function(e) {
                            e = e.match(/([0-2])([1-3]?)([1-6]?)/);
                            if (null !== e) {
                                var o = +e[1];
                                if (0 === o) da.a(aa.d,
                                function() {
                                    P.d("lang")
                                });
                                else if (1 !== o) da.a(aa.d,
                                function() {
                                    U.e("wb")
                                });
                                else {
                                    var w = D.b(e[2]);
                                    if (! (1 >= w)) {
                                        da.a(aa.d,
                                        function() {
                                            X.g("pyMode", w)
                                        });
                                        var q = D.b(e[3]);
                                        0 === q || 2 === q || da.a(aa.d,
                                        function() {
                                            X.g("spType", q)
                                        })
                                    }
                                }
                            }
                        }
                    };
                    return {
                        a: function() {
                            for (var e = F.getElementsByTagName("script"), o = 0, w = e.length; o < w; o++) {
                                var q = e[o].getAttribute("ime-cfg");
                                if (q) {
                                    e = null;
                                    for (o = /(\w+)=(\w+)/g; null !== (e = o.exec(q));) {
                                        w = b[e[1]];
                                        Q !== w && w(e[2])
                                    }
                                    break
                                }
                            }
                        },
                        b: function(e) {
                            return h[e]
                        },
                        c: function(e, o) {
                            a(e, o);
                            ra.c();
                            B.p();
                            ga.l()
                        }
                    }
                } (),
                ea = function() {
                    var h = {},
                    a = 0,
                    b = 2000002;
                    pa && (b += 0.1);
                    var e = $ ? "absolute": "fixed",
                    o = function(k) {
                        return k.toString() + "px"
                    },
                    w = function(k) {
                        var t = F.createElement("p");
                        ia.appendChild(t);
                        for (var C = F.createDocumentFragment(), E = k.length - 1; 0 <= E; E--) {
                            var v = F.createElement(k[E]);
                            C.appendChild(v)
                        }
                        t.appendChild(C);
                        t.innerHTML = "";
                        t.removeNode(false)
                    },
                    q = function(k) {
                        var t = k.elmt,
                        C = [t.offsetWidth, t.offsetHeight],
                        E = k.pos,
                        v = [E[0] + C[0], E[1] + C[1]],
                        T = [0, 0];
                        if (x[0] > C[0] + y * 2 && 0 < (T[0] = v[0] - (($ ? j[0] : 0) + x[0]))) {
                            k.pos[0] = E[0] - T[0] - y;
                            c.n(t, "left", o(k.pos[0]))
                        }
                        if (x[1] > C[1] + y * 2 && 0 < (T[1] = v[1] - (($ ? j[1] : 0) + x[1]))) {
                            k.pos[1] = E[1] - T[1] - y;
                            c.n(t, "top", o(k.pos[1]))
                        }
                    },
                    x = c.b(),
                    y = 20,
                    l = setTimeout(na, 0);
                    r.a(L, "resize",
                    function() {
                        clearTimeout(l);
                        l = setTimeout(function() {
                            var k = c.b();
                            if (! (k[1] === x[1] && k[0] === x[0])) {
                                x = k;
                                for (var t in h) h.hasOwnProperty(t) && q(h[t])
                            }
                        },
                        96)
                    });
                    if ($) {
                        var j = c.d(),
                        n = setTimeout(na, 0);
                        r.a(L, "scroll",
                        function() {
                            clearTimeout(n);
                            n = setTimeout(function() {
                                var k = c.d();
                                for (var t in h) if (h.hasOwnProperty(t)) {
                                    var C = h[t],
                                    E = C.elmt,
                                    v = C.pos;
                                    C.pos = [v[0] + k[0] - j[0], v[1] + k[1] - j[1]];
                                    c.n(E, "left", o(C.pos[0]));
                                    c.n(E, "top", o(C.pos[1]))
                                }
                                j = k
                            },
                            96)
                        })
                    }
                    var i = null,
                    u = function() {
                        if (null === i) {
                            var k = "overlay" + s,
                            t = k + "{display:block;visibility:hidden;position:" + e + ";top:0;left:0;background:url(" + p.b("astPrx") + "clear.gif) no-repeat scroll 200px 200px transparent;z-index:" + ++b + ";}";
                            i = F.createElement(k);
                            ia.appendChild(i);
                            c.g(t)
                        }
                        return i
                    };
                    return {
                        a: function(k, t, C, E) {
                            c.g(t);
                            I && w(k);
                            k = F.createElement(k[0]);
                            var v = k.$$buid || (k.$$buid = ++a);
                            ia.appendChild(k);
                            k.innerHTML = C;
                            C = [x[0] - y - k.offsetWidth, x[1] - y - k.offsetHeight];
                            if ($) {
                                C[0] += j[0];
                                C[1] += j[1]
                            }
                            c.n(k, "position", e);
                            c.n(k, "left", o(C[0]));
                            c.n(k, "top", o(C[1]));
                            c.n(k, "zIndex", ++b);
                            if (true !== E) {
                                var T = function(H) {
                                    var N = h[v];
                                    H = r.e(H);
                                    H = [H[0] + N.offset[0], H[1] + N.offset[1]];
                                    var O = [y, y, x[0] - N.size[0] - y, x[1] - N.size[1] - y];
                                    if ($) {
                                        O[0] += j[0];
                                        O[1] += j[1];
                                        O[2] += j[0];
                                        O[3] += j[1]
                                    }
                                    if (H[0] < O[0]) H[0] = O[0];
                                    else if (H[0] > O[2]) H[0] = O[2];
                                    if (H[1] < O[1]) H[1] = O[1];
                                    else if (H[1] > O[3]) H[1] = O[3];
                                    c.n(N.elmt, "left", o(H[0]));
                                    c.n(N.elmt, "top", o(H[1]));
                                    N.pos = H;
                                    2 === v && p.b("cursFlw") && p.c("cursFlw", false)
                                },
                                J = function() {
                                    var H = h[v].elmt;
                                    c.n(u(), "visibility", "hidden");
                                    r.b(F, "mousemove", T);
                                    r.b(F, "mouseup", J);
                                    if (I) {
                                        r.b(H, "losecapture", J);
                                        H.releaseCapture()
                                    } else r.b(L, "blur", J)
                                };
                                r.a(k, "mousedown",
                                function(H) {
                                    if (r.d(H).getAttribute("unselectable") || qa !== H.button) ! I && r.h(H);
                                    else {
                                        var N = h[v],
                                        O = N.elmt,
                                        ha = r.e(H);
                                        N.offset = [N.pos[0] - ha[0], N.pos[1] - ha[1]];
                                        N.size = [O.offsetWidth, O.offsetHeight];
                                        c.n(O, "zIndex", ++b);
                                        N = u();
                                        c.n(N, "width", o(x[0]));
                                        c.n(N, "height", o(x[1]));
                                        if ($) {
                                            c.n(N, "left", o(j[0]));
                                            c.n(N, "top", o(j[1]))
                                        }
                                        c.n(N, "visibility", "visible");
                                        r.a(F, "mousemove", T);
                                        r.a(F, "mouseup", J);
                                        if (I) {
                                            r.a(O, "losecapture", J);
                                            O.setCapture()
                                        } else {
                                            r.a(L, "blur", J);
                                            r.h(H)
                                        }
                                    }
                                })
                            }
                            r.a(k, "contextmenu",
                            function(H) {
                                r.h(H)
                            });
                            h[v] = {
                                elmt: k,
                                pos: C
                            };
                            k = t = C = k = C = null;
                            return true
                        },
                        b: function(k, t, C) {
                            if (k) {
                                k = h[k];
                                if (t && D.c(t, "Array")) {
                                    c.n(k.elmt, "left", o(t[0]));
                                    c.n(k.elmt, "top", o(t[1]));
                                    k.pos[0] = t[0];
                                    k.pos[1] = t[1]
                                }
                                C = C || false; ! C && q(k)
                            }
                        }
                    }
                } (),
                P = function() {
                    var h = ["statusbar" + s, "wrapper" + s, "draghandler" + s, "imelogo" + s, "togglearea" + s, "toggle" + s],
                    a = {
                        lang: "zh_en" + s,
                        face: "simp_trad" + s,
                        angl: "semi_full" + s,
                        symb: "zhsb_ensb" + s,
                        prop: "setting" + s,
                        feed: "feedback" + s,
                        shut: "shutdown" + s,
                        list: "dropdown" + s
                    },
                    b = {
                        wbmd: "wubi_mode" + s,
                        stmd: "shut_mode" + s,
                        hvr1: "hovering" + s,
                        zh: "zh_on" + s,
                        en: "en_on" + s,
                        caps: "caps_on" + s,
                        simp: "simp_on" + s,
                        trad: "trad_on" + s,
                        semi: "semi_on" + s,
                        full: "full_on" + s,
                        zhsb: "zhsb_on" + s,
                        ensb: "ensb_on" + s,
                        lksb: "lock_on" + s
                    },
                    e = {
                        "100": b.wbmd,
                        "101": b.stmd,
                        "300": b.hvr1,
                        "600": b.zh,
                        "601": b.en,
                        "602": b.caps,
                        "610": b.simp,
                        "611": b.trad,
                        "620": b.semi,
                        "621": b.full,
                        "630": b.zhsb,
                        "631": b.ensb,
                        "632": b.lksb,
                        "60": a.lang,
                        "61": a.face,
                        "62": a.angl,
                        "63": a.symb,
                        "64": a.prop,
                        "65": a.feed,
                        "66": a.shut,
                        "67": a.list,
                        "1": h[0],
                        "2": h[1],
                        "3": h[2],
                        "4": h[3],
                        "5": h[4],
                        "6": h[5]
                    },
                    o = ["~1~, ~1~ ~3~, ~1~ ~4~, ~1~ ~6~{background:url(" + p.b("astPrx") + (Z ? "_": "") + "bg-py.png?t=20100820) no-repeat scroll 200px 200px transparent;}", "~1~.~100~, ~1~.~100~ ~3~, ~1~.~100~ ~4~, ~1~.~100~ ~6~{background-image:url(" + p.b("astPrx") + (Z ? "_": "") + "bg-wb.png?t=20100820);}", "~1~{display:block;position:fixed;_position:absolute;top:0;left:0;width:134px;_width:143px;height:50px;background-position:0 0;cursor:move;z-index:1000;text-align:left;user-select:none;-moz-user-select:none;-webkit-user-select:none;visibility:hidden;}~1~ ~2~{display:block;width:122px;height:38px;margin:6px;overflow:hidden;*zoom:1;}~1~ ~3~{display:block;float:left;width:45px;height:28px;background-position:50px -50px;padding:5px 4px;_width:auto;_height:auto;}~1~ ~3~.~300~{background-position:-4px -50px;}~1~ ~4~, ~1~ ~6~{display:inline-block;display:-moz-inline-stack;*display:inline;*zoom:1;color: transparent;line-height:0;overflow:hidden;font-size:0;vertical-align:top;width:18px;height:18px;cursor:pointer;}~1~ ~4~{width:28px;height:28px;background-position:-57px -55px;cursor:move;margin-right:2px;}~1~ ~6~#~67~{width:15px;height:28px;background-position:-86px -55px;}~1~ ~5~{display:block;float:left;width:66px;height:38px;line-height:18px;padding:0 1px 0 2px;_width:auto;_height:auto;}~1~ ~5~ ~6~{margin:1px 2px 0;}~1~ ~6~.~600~{background-position:0 -89px;}~1~ ~6~.~600~:hover{background-position:0 -125px;}~1~ ~6~.~601~{background-position:-54px -89px;}~1~ ~6~.~601~:hover{background-position:-54px -125px;}~1~ ~6~.~602~{background-position:-90px -89px;}~1~ ~6~.~610~{background-position:-18px -89px;}~1~ ~6~.~610~:hover{background-position:-18px -125px;}~1~ ~6~.~611~{background-position:-72px -89px;}~1~ ~6~.~611~:hover{background-position:-72px -125px;}~1~ ~6~#~64~{background-position:-36px -89px;}~1~ ~6~#~64~:hover{background-position:-36px -125px;}~1~ ~6~.~620~{background-position:0 -107px;}~1~ ~6~.~620~:hover{background-position:0 -143px;}~1~ ~6~.~621~{background-position:-54px -107px;}~1~ ~6~.~621~:hover{background-position:-54px -143px;}~1~ ~6~.~630~{background-position:-18px -107px;}~1~ ~6~.~630~:hover{background-position:-18px -143px;}~1~ ~6~.~631~{background-position:-72px -107px;}~1~ ~6~.~631~:hover{background-position:-72px -143px;}~1~ ~6~.~632~{background-position:-90px -107px;}~1~ ~6~#~65~{background-position:-36px -107px;}~1~ ~6~#~65~:hover{background-position:-36px -143px;}~1~ ~6~#~66~{position:absolute;top:1px;right:-8px;_right:0px;width:15px;height:22px;margin:0;background-position:-103px -50px;visibility:hidden;}~1~ ~6~#~66~:hover{background-position:-119px -50px;}~1~:hover ~6~#~66~,~1~.~101~ ~6~#~66~{visibility:visible;}"].join("").replace(/~(\w+)~/g,
                    function(y, l) {
                        return e[l]
                    }),
                    w = '<~2~><~3~><~4~>QQ\u4e91\u8f93\u5165\u6cd5</~4~><~6~ id="~67~" unselectable="on" title="\u5207\u6362\u8f93\u5165\u65b9\u5f0f(Ctrl+Alt+Space)">\u5207\u6362\u8f93\u5165\u65b9\u5f0f</~6~></~3~><~5~><~6~ id="~60~" class="~600~" unselectable="on" title="\u4e2d/\u82f1\u6587\u5207\u6362(Shift)">\u4e2d/\u82f1\u6587\u5207\u6362(Shift)</~6~><~6~ id="~61~" class="~610~" unselectable="on" title="\u7b80\u4f53/\u7e41\u4f53\u5207\u6362(Ctrl+Shift+F)">\u7b80\u4f53/\u7e41\u4f53\u5207\u6362(Ctrl+Shift+F)</~6~><~6~ id="~64~" unselectable="on" title="\u5c5e\u6027\u8bbe\u7f6e(Ctrl+Shift+M)">\u5c5e\u6027\u8bbe\u7f6e(Ctrl+Shift+M)</~6~><~6~ id="~62~" class="~620~" unselectable="on" title="\u5168\u89d2/\u534a\u89d2\u5207\u6362(Shift+Space)">\u5168\u89d2/\u534a\u89d2\u5207\u6362(Shift+Space)</~6~><~6~ id="~63~" class="~630~" unselectable="on" title="\u4e2d/\u82f1\u6587\u6807\u70b9\u5207\u6362(Ctrl+.)">\u4e2d/\u82f1\u6587\u6807\u70b9\u5207\u6362(Ctrl+.)</~6~><~6~ id="~65~" unselectable="on" title="\u7528\u6237\u53cd\u9988">\u7528\u6237\u53cd\u9988</~6~></~5~></~2~><~6~ id="~66~" unselectable="on" title="\u5173\u95ed\u8f93\u5165\u6cd5(Ctrl+Shift+Space)">\u5173\u95ed\u8f93\u5165\u6cd5</~6~>'.replace(/~(\w+)~/g,
                    function(y, l) {
                        return e[l]
                    }),
                    q = e = null,
                    x = {};
                    return {
                        a: function() {
                            if (true !== ea.a(h, o, w)) return false;
                            q = F.getElementsByTagName(h[0])[0];
                            if (!q) return false;
                            for (var y in a) {
                                var l = a[y];
                                x[l] = c.a(l)
                            }
                            r.a(q, "mouseup",
                            function(j) {
                                var n = r.d(j);
                                if (! (!n.getAttribute("unselectable") || qa !== j.button)) {
                                    j = n.id;
                                    if (! (Q === j || Q === x[j])) for (var i in a) if (j === a[i]) {
                                        P.d(i);
                                        break
                                    }
                                }
                            });
                            r.a(q, "mousedown",
                            function(j) {
                                j = r.d(j);
                                if (!j.getAttribute("unselectable") || a.prop !== j.id && a.list !== j.id) {
                                    X.c();
                                    U.c()
                                }
                            });
                            if ($) {
                                r.a(q, "mouseenter",
                                function(j) {
                                    c.i(r.d(j), b.stmd)
                                });
                                r.a(q, "mouseleave",
                                function(j) {
                                    c.j(r.d(j), b.stmd)
                                })
                            }
                            r.a(q, "mouseover",
                            function(j) {
                                j = r.d(j);
                                j.getAttribute("unselectable") && j.id === a.list && !U.f() && c.i(j.parentNode, b.hvr1)
                            });
                            r.a(q, "mouseout",
                            function(j) {
                                j = r.d(j);
                                j.getAttribute("unselectable") && j.id === a.list && !U.f() && c.j(j.parentNode, b.hvr1)
                            })
                        },
                        b: function() {
                            "visible" !== c.m(q, "visibility") && c.n(q, "visibility", "visible")
                        },
                        c: function() {
                            "hidden" !== c.m(q, "visibility") && c.n(q, "visibility", "hidden");
                            X.c();
                            U.c()
                        },
                        d: function(y) {
                            switch (y) {
                            case "lang":
                                if (p.b("caps")) return;
                                if (p.b("eng")) {
                                    c.k(x[a.lang], b.zh);
                                    p.c("eng", false);
                                    c.k(x[a.symb], b.zhsb);
                                    p.c("enSymb", false)
                                } else {
                                    c.k(x[a.lang], b.en);
                                    p.c("eng", true);
                                    c.k(x[a.symb], b.lksb);
                                    B.l()
                                }
                                B.m();
                                break;
                            case "face":
                                if (p.b("trad")) {
                                    c.k(x[a.face], b.simp);
                                    p.c("trad", false)
                                } else {
                                    c.k(x[a.face], b.trad);
                                    p.c("trad", true)
                                }
                                B.m();
                                break;
                            case "angl":
                                if (p.b("dbc")) {
                                    c.k(x[a.angl], b.semi);
                                    p.c("dbc", false)
                                } else {
                                    c.k(x[a.angl], b.full);
                                    p.c("dbc", true)
                                }
                                break;
                            case "symb":
                                if (p.b("caps") || p.b("eng")) return;
                                if (p.b("enSymb")) {
                                    c.k(x[a.symb], b.zhsb);
                                    p.c("enSymb", false)
                                } else {
                                    c.k(x[a.symb], b.ensb);
                                    p.c("enSymb", true)
                                }
                                break;
                            case "prop":
                                X.d();
                                break;
                            case "feed":
                                L.open("http://support.qq.com/portal/discuss_pdt/501_1.html", ja);
                                break;
                            case "list":
                                U.d();
                                break;
                            case "shut":
                                S.toggle();
                                break;
                            case "caps":
                                if (p.b("caps")) {
                                    c.k(x[a.lang], p.b("eng") ? b.en: b.zh);
                                    c.k(x[a.symb], p.b("eng") ? b.lksb: p.b("enSymb") ? b.ensb: b.zhsb);
                                    p.c("caps", false)
                                } else {
                                    c.k(x[a.lang], b.caps);
                                    c.k(x[a.symb], b.lksb);
                                    p.c("caps", true)
                                }
                                break
                            }
                        },
                        e: function() {
                            return q
                        },
                        f: function(y) {
                            1 === y ? c.j(q, b.wbmd) : c.i(q, b.wbmd)
                        },
                        g: function(y) {
                            y ? c.i(x[a.list].parentNode, b.hvr1) : c.j(x[a.list].parentNode, b.hvr1)
                        }
                    }
                } (),
                V = function() {
                    var h = ["inputbar" + s, "wrapper" + s, "spelling" + s, "prechosen" + s, "cursor" + s, "appname" + s, "navigator" + s, "arrow" + s, "candidate" + s, "word" + s, "setting" + s, "section" + s, "trigger" + s],
                    a = {
                        spell: "spell_area" + s,
                        candi: "candidate" + s,
                        prev: "prev_trigger" + s,
                        next: "next_trigger" + s
                    },
                    b = {
                        wbmd: "wubi_mode" + s,
                        vrtcl: "vertical" + s,
                        small: "small_font" + s,
                        large: "large_font" + s,
                        cllsp: "collapsed" + s,
                        fake: "disabled" + s,
                        sel: "selected" + s,
                        err: "err_msg" + s
                    },
                    e = {
                        "100": b.vrtcl,
                        "101": b.small,
                        "102": b.large,
                        "103": b.cllsp,
                        "104": b.wbmd,
                        "800": b.fake,
                        "900": b.sel,
                        a00: b.err,
                        "30": a.spell,
                        "90": a.candi,
                        "80": a.prev,
                        "81": a.next,
                        "1": h[0],
                        "2": h[1],
                        "3": h[2],
                        "4": h[3],
                        "5": h[4],
                        "6": h[5],
                        "7": h[6],
                        "8": h[7],
                        "9": h[8],
                        a: h[9],
                        b: h[10],
                        c: h[11],
                        d: h[12]
                    },
                    o = ["~1~{display:block;position:fixed;_position:absolute;top:0;left:0;border:3px solid #B0CDEA;background-color:#81A8D0;padding:1px;cursor:move;min-width:250px;z-index:1001;user-select:none;-moz-user-select:none;-webkit-user-select:none;visibility:hidden;}~1~.~104~{border-color:#C1C1C1;background-color:#989898;}~1~ ~2~{position:relative;display:block;padding:0 6px;border:1px solid #FFF;background-color:#F3F3F3;line-height:29px;font-family:tahoma,arial,SimSun,sans-serif;font-size:16px;color:#333;text-align:left;_float:left;}~1~.~104~ ~2~{color:#011D47;}~1~ ~3~{display:block;border-bottom:1px solid #B0BBCD;padding:0 153px 0 5px;white-space:nowrap;font-weight:700;}~1~.~104~ ~3~{border-color:#CCC;}~1~ ~4~{color:#226F00;font-weight:400;}~1~.~104~ ~4~{color:#010101;}~1~ ~5~{margin:0 -4px 0 1px;border-left:1px solid #326DB6;}~1~.~104~ ~5~{border-color:#01651D;}~1~ ~9~{display:block;border-top:1px solid #FFF;white-space:nowrap;*zoom:1;_float:left;}~1~ ~a~{cursor:pointer;margin:0 5px;}~1~ ~a~.~900~{color:#194E97;}~1~.~104~ ~a~.~900~{color:#BC231E;}~1~ ~a~.~a00~{color:red;}~1~ ~6~{position:absolute;display:block;right:47px;top:0;_top:1px;font-size:12px;color:#859DB3;}~1~.~104~ ~6~{color:#A4A4A4;}~1~ ~7~{position:absolute;display:block;right:5px;top:9px;_top:10px;line-height:9px;}", "~1~ ~8~{display:inline-block;display:-moz-inline-stack;*display:inline;*zoom:1;color: transparent;line-height:0;overflow:hidden;font-size:0;vertical-align:top;width:7px;height:11px;margin:0 2px;cursor:pointer;background:url(" + p.b("astPrx") + (Z ? "_": "") + "bg-py.png?t=20100820) no-repeat scroll 200px 200px transparent;}", "~1~.~104~ ~8~{background-image:url(" + p.b("astPrx") + (Z ? "_": "") + "bg-wb.png?t=20100820);}", "~1~ ~8~.~800~{cursor:default;}~1~ ~8~#~80~{background-position:-106px -132px;}~1~ ~8~#~80~:hover{background-position:-113px -132px;}~1~ ~8~#~80~.~800~{background-position:-127px -132px!important;}~1~ ~8~#~81~{background-position:-106px -143px;}~1~ ~8~#~81~:hover{background-position:-113px -143px;}~1~ ~8~#~81~.~800~{background-position:-127px -143px!important;}~1~.~100~{min-width:200px;}~1~.~100~ ~a~{display:block;}~1~.~101~ ~2~{font-size:14px;}~1~.~102~ ~2~{font-size:18px;}~1~.~103~ ~3~{border-bottom-width:0;}~1~.~103~ ~9~{display:none;}~1~.~103~ ~8~{visibility:hidden;}"].join("").replace(/~(\w+)~/g,
                    function(k, t) {
                        return e[t]
                    }),
                    w = '<~2~><~6~>QQ\u4e91\u8f93\u5165\u6cd5</~6~><~7~><~8~ id="~80~" rel="prev" unselectable="on" class="~800~" title="\u524d\u9875(PageUp)">\u524d\u9875</~8~><~8~ id="~81~" rel="next" unselectable="on" class="~800~" title="\u6b21\u9875(PageDown)">\u6b21\u9875</~8~></~7~><~3~ id="~30~"><~5~>&#160;</~5~></~3~><~9~ id="~90~"><~a~>&#160;</~a~></~9~></~2~>'.replace(/~(\w+)~/g,
                    function(k, t) {
                        return e[t]
                    });
                    e = null;
                    var q = "<" + h[3] + ">~0~</" + h[3] + ">",
                    x = "<" + h[4] + ">&#160;</" + h[4] + ">",
                    y = "<" + h[9] + ' unselectable="on" class="~0~" idx="~1~">~2~.~3~</' + h[9] + ">",
                    l = "<" + h[9] + ">&#160;</" + h[9] + ">",
                    j = "<" + h[9] + ' class="' + b.err + '">~0~</' + h[9] + ">",
                    n = function(k, t) {
                        var C = [],
                        E = k.length;
                        if (0 !== E) {
                            for (var v = 0; v < E; v++) C[v] = y.replace(/~(\w+)~/g,
                            function(T, J) {
                                switch (J) {
                                case "0":
                                    return t === v ? b.sel: "";
                                case "1":
                                    return v;
                                case "2":
                                    return v + 1;
                                case "3":
                                    return k[v]
                                }
                            });
                            v = null
                        } else C[0] = l;
                        k = E = null;
                        return C.join("")
                    },
                    i = null,
                    u = {};
                    return {
                        a: function() {
                            if (true !== ea.a(h, o, w)) return false;
                            i = F.getElementsByTagName(h[0])[0];
                            if (!i) return false;
                            for (var k in a) {
                                var t = a[k];
                                u[t] = c.a(t)
                            }
                            r.a(i, "mouseup",
                            function(C) {
                                var E = r.d(C);
                                if (! (!E.getAttribute("unselectable") || qa !== C.button)) {
                                    C = "";
                                    if (C = E.getAttribute("idx")) {
                                        E = D.b(C);
                                        B.j(E)
                                    } else if (C = E.getAttribute("rel")) B.c(C)
                                }
                            })
                        },
                        b: function() {
                            "visible" !== c.m(i, "visibility") && c.n(i, "visibility", "visible")
                        },
                        c: function() {
                            "hidden" !== c.m(i, "visibility") && c.n(i, "visibility", "hidden")
                        },
                        f: function(k) {
                            1 === k ? c.j(i, b.wbmd) : c.i(i, b.wbmd)
                        },
                        g: function(k, t, C) {
                            k = k || "";
                            t = t || [];
                            C = C || 0;
                            var E = u[a.spell];
                            t = t;
                            var v = [k, x],
                            T = t.length;
                            if (0 !== T) {
                                for (var J = [], H = 0; H < T; H++) J[H] = t[H].kanji;
                                v.unshift(q.replace("~0~", J.join("")))
                            }
                            t = v.join("");
                            E.innerHTML = t;
                            if (0 !== k.length && 0 !== C) ! c.h(i, b.cllsp) && c.i(i, b.cllsp);
                            else c.h(i, b.cllsp) && c.j(i, b.cllsp);
                            if ("visible" !== c.m(i, "visibility") && 0 !== k.length) {
                                p.b("cursFlw") && ea.b(i.$$buid, Y.d());
                                V.b()
                            } else if ("hidden" !== c.m(i, "visibility") && 0 === k.length) {
                                V.h();
                                V.c();
                                B.m()
                            }
                        },
                        h: function(k, t, C, E) {
                            k = k || [];
                            t = t || 0;
                            u[a.candi].innerHTML = n(k, t);
                            c.k(u[a.prev], C ? "": b.fake);
                            c.k(u[a.next], E ? "": b.fake);
                            ea.b(i.$$buid)
                        },
                        i: function(k, t) {
                            if (! (Q === k || Q === t)) {
                                var C = u[a.candi].childNodes[k];
                                if (C) {
                                    var E = "prev" === t ? C.previousSibling: C.nextSibling;
                                    if (E) {
                                        c.k(C, "");
                                        c.k(E, b.sel);
                                        return true
                                    }
                                }
                            }
                        },
                        j: function(k) {
                            k = k || "\u8bcd\u5e93\u670d\u52a1\u5668\u53d1\u751f\u672a\u77e5\u5f02\u5e38";
                            u[a.candi].innerHTML = j.replace("~0~", k)
                        },
                        k: function(k) {
                            D.c(k, "Array") && ea.b(i.$$buid, k)
                        },
                        l: function(k) {
                            "v" === k ? c.i(i, b.vrtcl) : c.j(i, b.vrtcl)
                        },
                        m: function(k) {
                            c.j(i, b.small);
                            c.j(i, b.large);
                            switch (k) {
                            case "s":
                                c.i(i, b.small);
                                break;
                            case "l":
                                c.i(i, b.large);
                                break
                            }
                        }
                    }
                } (),
                X = function() {
                    var h = ["settingpanel" + s, "wrapper" + s, "group" + s, "options" + s, "trigger" + s, "about" + s],
                    a = {
                        fuzzy: "fuzzy_spell" + s,
                        align: "candidates_aligment" + s,
                        perPg: "candidates_perpage" + s,
                        ftSize: "font_size" + s,
                        ftDeco: "font_decoration" + s,
                        pyMode: "pinyin_mode" + s,
                        spType: "shuangpin_type" + s,
                        splHnt: "spell_hint" + s
                    },
                    b = {
                        wbmd: "wubi_mode" + s,
                        pnyn: "py_only" + s,
                        wubi: "wb_only" + s,
                        alt: "alt_style" + s,
                        shut: "shut_trigger" + s
                    },
                    e = {
                        "100": b.wbmd,
                        "300": b.alt,
                        "301": b.pnyn,
                        "302": b.wubi,
                        "500": b.shut,
                        "000": "1",
                        "001": "0",
                        "010": "h",
                        "011": "v",
                        "020": "5",
                        "021": "9",
                        "030": "s",
                        "031": "m",
                        "032": "l",
                        "040": "0",
                        "041": "1",
                        "042": "2",
                        "050": "1",
                        "051": "2",
                        "052": "3",
                        "060": "1",
                        "061": "2",
                        "062": "3",
                        "063": "4",
                        "064": "5",
                        "065": "6",
                        "070": "1",
                        "071": "0",
                        "00": a.fuzzy,
                        "01": a.align,
                        "02": a.perPg,
                        "03": a.ftSize,
                        "04": a.ftDeco,
                        "05": a.pyMode,
                        "06": a.spType,
                        "07": a.splHnt,
                        "1": h[0],
                        "2": h[1],
                        "3": h[2],
                        "4": h[3],
                        "5": h[4],
                        "6": h[5]
                    },
                    o = ["~1~ ~5~.~500~, ~1~ ~4~{background:url(" + p.b("astPrx") + (Z ? "_": "") + "bg-py.png?t=20100820) no-repeat scroll 200px 200px transparent;}", "~1~.~100~ ~5~.~500~, ~1~.~100~ ~4~{background-image:url(" + p.b("astPrx") + (Z ? "_": "") + "bg-wb.png?t=20100820);}", "~1~{display:block;position:fixed;_position:absolute;top:0;left:0;border:2px solid #B0CDEA;background-color:#81A8D0;padding:1px;z-index:1002;visibility:hidden;font-family:tahoma,arial,SimSun,sans-serif;font-size:12px;line-height:16px;vertical-align:middle;user-select:none;-moz-user-select:none;-webkit-user-select:none;}~1~.~100~{border-color:#C1C1C1;background-color:#989898;}~1~ ~2~{display:block;background-color:#FFF;color:#2C5A81;text-align:center;white-space:nowrap;}~1~.~100~ ~2~{background-color:#FFF;color:#BC231E;}~1~ ~3~{display:block;padding:3px 0;}~1~ ~3~.~300~{background-color:#F7F7F7;}~1~ ~3~.~302~{display:none;}~1~.~100~ ~3~.~301~{display:none;}~1~.~100~ ~3~.~302~{display:block;}~1~ ~4~{display:block;padding:10px 3px 0;background-position:50% -163px;}~1~ label{color:#525659;font-weight:400;height:auto;padding:0;margin:0 2px;*margin:0 1px;_margin:0 2px;_zoom:1;}~1~ input{height:auto;width:auto;border:0;margin:0;padding:0;vertical-align:middle;margin-top:-2px;*margin:1px -4px 0;}~1~ select{height:auto;width:auto;margin:3px 0 0;padding:0;}~1~ ~5~.~500~{position:absolute;top:-2px;right:-11px;width:15px;height:22px;margin:0;background-position:-103px -50px;display:inline-block;display:-moz-inline-stack;*display:inline;*zoom:1;color: transparent;line-height:0;overflow:hidden;font-size:0;vertical-align:top;cursor:pointer;}~1~ ~6~{display:block;padding:5px 0;color:#629168;cursor:pointer;*vertical-align:baseline;}~1~.~100~ ~6~{color:#2C5A81;}~1~ ~6~:hover{text-decoration:underline;}"].join("").replace(/~(\w+)~/g,
                    function(n, i) {
                        return e[i]
                    }),
                    w = '<~5~ class="~500~" title="\u5173\u95ed\u5c5e\u6027\u8bbe\u7f6e(Ctrl+Shift+M)">\u5173\u95ed\u5c5e\u6027\u8bbe\u7f6e</~5~><~2~><~3~ class="~301~">\u62fc\u97f3\u6a21\u5f0f<~4~><label><input type="radio" name="~05~" value="~050~" checked="checked" /> \u5168\u62fc</label> <label><input type="radio" name="~05~" value="~051~" /> \u53cc\u62fc</label><label><input type="radio" name="~05~" value="~052~" /> \u6df7\u5408</label><br /><select name="~06~" disabled="disabled" unselectable="on"><optgroup label="\u8bf7\u9009\u62e9\u53cc\u62fc\u98ce\u683c"><option value="~060~">\u667a\u80fdABC</option><option value="~061~" selected="selected">\u5fae\u8f6f\u62fc\u97f32003</option><option value="~062~">\u62fc\u97f3\u52a0\u52a0</option><option value="~063~">\u7d2b\u5149\u62fc\u97f3</option><option value="~064~">\u5c0f\u9e64\u53cc\u62fc</option><option value="~065~">\u81ea\u7136\u7801</option></optgroup></select><br /></~4~></~3~><~3~ class="~301~ ~300~">\u6a21\u7cca\u97f3<~4~><label><input type="radio" name="~00~" value="~000~" /> \u5f00\u542f</label> <label><input type="radio" name="~00~" value="~001~" checked="checked" /> \u5173\u95ed</label></~4~></~3~><~3~ class="~302~ ~300~">\u7f16\u7801\u9010\u6e10\u63d0\u793a<~4~><label><input type="radio" name="~07~" value="~070~" checked="checked" /> \u5f00\u542f</label> <label><input type="radio" name="~07~" value="~071~" /> \u5173\u95ed</label></~4~></~3~><~3~>\u5019\u9009\u8bcd\u6392\u5e03<~4~><label><input type="radio" name="~01~" value="~010~" checked="checked" /> \u6a2a\u6392</label> <label><input type="radio" name="~01~" value="~011~" /> \u7ad6\u6392</label></~4~></~3~><~3~ class="~300~">\u6bcf\u9875\u5019\u9009\u8bcd\u6570<~4~><label><input type="radio" name="~02~" value="~020~" checked="checked" /> 5\u4e2a</label> <label><input type="radio" name="~02~" value="~021~" /> 9\u4e2a</label></~4~></~3~><~3~>\u5b57\u4f53\u5927\u5c0f<~4~><label><input type="radio" name="~03~" value="~030~" /> \u5c0f</label> <label><input type="radio" name="~03~" value="~031~" checked="checked" /> \u4e2d</label> <label><input type="radio" name="~03~" value="~032~" /> \u5927</label></~4~></~3~><~3~ class="~300~">\u6587\u672c\u4fee\u9970<~4~><label><input type="radio" name="~04~" value="~040~" checked="checked" /> \u65e0</label> <label><input type="radio" name="~04~" value="~041~" /> \u5149\u6655</label> <label><input type="radio" name="~04~" value="~042~" /> \u8fb9\u6846</label></~4~></~3~><~6~>\u5173\u4e8eQQ\u4e91\u8f93\u5165\u6cd5</~6~></~2~>'.replace(/~(\w+)~/g,
                    function(n, i) {
                        return e[i]
                    }),
                    q = function() {
                        var n = P.e(),
                        i = j.offsetHeight + 1,
                        u = [D.b(c.m(n, "left")) + n.offsetWidth - j.offsetWidth, D.b(c.m(n, "top"))];
                        if (u[1] - ($ ? c.d()[1] : 0) < i) u[1] += n.offsetHeight + 1;
                        else u[1] -= i;
                        c.n(j, "zIndex", c.m(n, "zIndex"));
                        ea.b(j.$$buid, u, true)
                    },
                    x = setTimeout(na, 0),
                    y = function() {
                        clearTimeout(x);
                        x = setTimeout(q, 96)
                    },
                    l = function() {
                        return "showModalDialog" in L && (I || ca) ?
                        function(n, i) {
                            var u = "";
                            if (ca) {
                                var k = c.b();
                                u += "dialogLeft:" + D.b((k[0] - i[0]) / 2) + "px;dialogTop:" + D.b((k[1] - i[1]) / 2) + "px;"
                            } else if (Z) i[1] += 35;
                            u += "dialogWidth:" + i[0] + "px;dialogHeight:" + i[1] + "px;status:no;help:no;";
                            return L.showModalDialog(n, "", u)
                        }: function(n, i) {
                            var u = c.b();
                            return L.open(n, ja, "left=" + D.b((u[0] - i[0]) / 2) + ",top=" + D.b((u[1] - i[1]) / 2) + ",width=" + i[0] + ",height=" + i[1] + ",menubar=no,toolbar=no,location=no,directories=no,status=no,resizable=no,scrollbars=no,dependent=yes,dialog=no,modal=yes", false)
                        }
                    } (),
                    j = null;
                    return {
                        a: function() {
                            if (true !== ea.a(h, o, w, true)) return false;
                            j = F.getElementsByTagName(h[0])[0];
                            if (!j) return false;
                            r.a(j, "click",
                            function(n) {
                                var i = r.d(n);
                                switch (c.l(i)) {
                                case h[4]:
                                    X.c();
                                    break;
                                case h[5]:
                                    l(p.b("astPrx") + "../about.html?ver=" + encodeURIComponent(S.version) + "&t=20100831", [329, 140]);
                                    break;
                                case "label":
                                    r.h(n);
                                    i = i.firstChild;
                                case K.i:
                                    setTimeout(function() {
                                        i.checked = true
                                    },
                                    0);
                                    n = i.name;
                                    for (var u in a) if (n === a[u]) {
                                        X.g(u, i.value, false);
                                        break
                                    }
                                    break
                                }
                            });
                            r.a(F.getElementsByName(a.spType)[0], "change",
                            function(n) {
                                n = r.d(n);
                                X.g("spType", n.value, false)
                            });
                            r.a(j, "mousedown",
                            function(n) {
                                if (! ((I || pa) && r.d(n).getAttribute("unselectable"))) if (I) {
                                    var i = function() {
                                        j.releaseCapture();
                                        r.b(j, "mouseup", i);
                                        r.b(j, "losecapture", i);
                                        i = null
                                    };
                                    r.a(j, "mouseup", i);
                                    r.a(j, "losecapture", i);
                                    j.setCapture()
                                } else r.h(n)
                            })
                        },
                        b: function() {
                            if ("visible" !== c.m(j, "visibility")) {
                                q();
                                c.n(j, "visibility", "visible");
                                r.a(L, "resize", y)
                            }
                        },
                        c: function() {
                            r.b(L, "resize", y);
                            "hidden" !== c.m(j, "visibility") && c.n(j, "visibility", "hidden")
                        },
                        d: function() {
                            "visible" === c.m(j, "visibility") ? X.c() : X.b()
                        },
                        f: function(n) {
                            1 === n ? c.j(j, b.wbmd) : c.i(j, b.wbmd)
                        },
                        g: function(n, i, u) {
                            if (n && i) {
                                u = u || false;
                                var k = true;
                                switch (n) {
                                case "pyMode":
                                    i = +i; (isNaN(i) || 1 > i || 3 < i) && (i = 1);
                                    p.c(n, i);
                                    F.getElementsByName(a.spType)[0].disabled = 1 === i;
                                    break;
                                case "spType":
                                    i = +i; (isNaN(i) || 1 > i || 6 < i) && (i = 1);
                                    p.c(n, i);
                                    break;
                                case "fuzzy":
                                    p.c(n, !!+i);
                                    k = false;
                                    break;
                                case "splHnt":
                                    p.c(n, !!+i);
                                    break;
                                case "align":
                                    V.l(i);
                                    k = false;
                                    break;
                                case "perPg":
                                    i = "9" === i ? 9 : 5;
                                    p.c(n, i);
                                    break;
                                case "ftSize":
                                    V.m(i);
                                    k = false;
                                    break;
                                case "ftDeco":
                                    i = +i; (isNaN(i) || 0 > i || 2 < i) && (i = 0);
                                    p.c(n, i);
                                    k = false;
                                    break
                                }
                                if (!u) {
                                    i = i.toString();
                                    u = F.getElementsByName(a[n]);
                                    if (n = "spType" === n) u = u[0].options;
                                    for (var t = 0,
                                    C = u.length; t < C; t++) {
                                        var E = u[t];
                                        if (i === E.value) {
                                            E[n ? "selected": "checked"] = true;
                                            break
                                        }
                                    }
                                }
                                k && B.m()
                            }
                        }
                    }
                } (),
                U = function() {
                    var h = ["imedropdown" + s, "imeoption" + s],
                    a = {
                        pnyn: "py_opt" + s,
                        wubi: "wb_opt" + s
                    },
                    b = {
                        wbmd: "wubi_mode" + s
                    },
                    e = {
                        "100": b.wbmd,
                        "20": a.pnyn,
                        "21": a.wubi,
                        "1": h[0],
                        "2": h[1]
                    },
                    o = ["~1~{display:block;position:fixed;_position:absolute;top:0;left:0;border:1px solid #81A8D0;background-color:#E8EEF1;z-index:1003;font-family:tahoma,arial,SimSun,sans-serif;font-size:12px;color:#437298;text-align:left;vertical-align:middle;text-align:left;user-select:none;-moz-user-select:none;-webkit-user-select:none;visibility:hidden;}~1~.~100~{border-color:#989898;background-color:#E8E8E8;color:#5D5D5D;}", "~1~ ~2~{display:block;background:url(" + p.b("astPrx") + (Z ? "_": "") + "bg-py.png?t=20100820) no-repeat scroll -115px -86px; transparent;line-height:23px;padding:0 3px 0 23px;cursor:pointer;white-space:nowrap;}", "~1~ ~2~:hover,~1~ ~2~.hover{background-color:#48719A;color:#FEFEFE;}~1~.~100~ ~2~:hover,~1~.~100~ ~2~.hover{background-color:#5D5D5D;color:#FFFFFF;}", "~1~ ~2~#~21~{background-image:url(" + p.b("astPrx") + (Z ? "_": "") + "bg-wb.png?t=20100820);}", "~1~ ~2~#~20~, ~1~.~100~ ~2~#~21~{display:none;}~1~.~100~ ~2~#~20~{display:block;}"].join("").replace(/~(\w+)~/g,
                    function(j, n) {
                        return e[n]
                    }),
                    w = '<~2~ id="~20~" unselectable="on" title="\u5207\u6362\u5230\u62fc\u97f3\u8f93\u5165\u6cd5" rel="py">\u62fc\u97f3</~2~><~2~ id="~21~" unselectable="on" title="\u5207\u6362\u5230\u4e94\u7b14\u8f93\u5165\u6cd5" rel="wb">\u4e94\u7b14</~2~>'.replace(/~(\w+)~/g,
                    function(j, n) {
                        return e[n]
                    }),
                    q = function() {
                        var j = P.e(),
                        n = [6, 42],
                        i = [D.b(c.m(j, "left")), D.b(c.m(j, "top"))];
                        i[0] += n[0];
                        i[1] += n[1];
                        c.n(l, "zIndex", c.m(j, "zIndex"));
                        ea.b(l.$$buid, i, true)
                    },
                    x = setTimeout(na, 0),
                    y = function() {
                        clearTimeout(x);
                        x = setTimeout(q, 96)
                    },
                    l = null;
                    return {
                        a: function() {
                            if (true !== ea.a(h, o, w, true)) return false;
                            l = F.getElementsByTagName(h[0])[0];
                            if (!l) return false;
                            r.a(l, "mouseup",
                            function(j) {
                                var n = r.d(j);
                                if (! (!n.getAttribute("unselectable") || qa !== j.button))(j = n.getAttribute("rel")) && U.e(j)
                            });
                            if ($) {
                                r.a(l, "mouseover",
                                function(j) {
                                    j = r.d(j);
                                    j.getAttribute("rel") && c.i(j, "hover")
                                });
                                r.a(l, "mouseout",
                                function(j) {
                                    j = r.d(j);
                                    j.getAttribute("rel") && c.j(j, "hover")
                                })
                            } ! I && r.a(l, "mousedown",
                            function(j) {
                                r.h(j)
                            })
                        },
                        b: function() {
                            if (!U.f()) {
                                q();
                                c.n(l, "visibility", "visible");
                                r.a(L, "resize", y);
                                P.g(true)
                            }
                        },
                        c: function() {
                            r.b(L, "resize", y);
                            U.f() && c.n(l, "visibility", "hidden");
                            P.g(false)
                        },
                        d: function() {
                            U.f() ? U.c() : U.b()
                        },
                        e: function(j) {
                            var n = 1;
                            switch (j) {
                            case "py":
                                n = 1;
                                break;
                            case "wb":
                                n = 2;
                                break;
                            default:
                                return
                            }
                            if (n !== p.b("iptMode")) {
                                p.c("iptMode", n);
                                B.m();
                                P.f(n);
                                V.f(n);
                                X.f(n);
                                1 === n ? c.j(l, b.wbmd) : c.i(l, b.wbmd);
                                X.c();
                                U.c()
                            }
                        },
                        f: function() {
                            return "visible" === c.m(l, "visibility")
                        }
                    }
                } (),
                ra = function() {
                    var h = null,
                    a = false,
                    b = "keyback" + s,
                    e = "callback" + s,
                    o = F.getElementsByTagName("head")[0] || ma,
                    w = function(j, n) {
                        a && l();
                        a = true;
                        if (n) {
                            clearTimeout(x);
                            x = setTimeout(y, 4992)
                        }
                        h = F.createElement("script");
                        h.type = "text/javascript";
                        h.async = true;
                        h.charset = "utf-8";
                        h.src = j;
                        I ? h.onreadystatechange = function() {
                            a && ("loaded" === this.readyState || "complete" === this.readyState) && l()
                        }: h.onload = h.onerror = l;
                        o.appendChild(h)
                    },
                    q = "",
                    x = setTimeout(na, 0),
                    y = function() {
                        V.j("\u8bcd\u5e93\u670d\u52a1\u5668\u8fde\u63a5\u8d85\u65f6");
                        ga.j(2);
                        l()
                    },
                    l = function() {
                        clearTimeout(x);
                        a = false;
                        I ? h.onreadystatechange = null: h.onload = h.onerror = null;
                        o.removeChild(h);
                        h = null
                    };
                    return {
                        a: function() {
                            S[b] = function(j) {
                                Q !== j && "suc" === j.ret && p.c("prvKey", j.key);
                                S[b] = null;
                                delete S[b];
                                ga.a()
                            };
                            w(p.b("cgiPrx") + "getkey?cb=" + ua + "." + b);
                            setTimeout(function() {
                                if (b in S) {
                                    delete S[b];
                                    ga.a()
                                }
                                b = null
                            },
                            4992);
                            S[e] = function(j) {
                                B.b(j)
                            }
                        },
                        b: function(j, n) {
                            w(q + (n ? "&p=" + n: "") + "&q=" + j, true)
                        },
                        c: function() {
                            var j = 1 === p.b("iptMode");
                            q = p.b("cgiPrx") + (j ? "getword": "gwb") + "?key=" + p.b("prvKey") + (p.b("trad") ? "&jf=1": "") + (9 === p.b("perPg") ? "&pg=9": "") + "&cb=" + ua + "." + e;
                            if (j) {
                                q += p.b("fuzzy") ? "&mh=1": "";
                                if (1 !== p.b("pyMode")) q += "&md=" + p.b("pyMode") + (2 !== p.b("spType") ? "&st=" + p.b("spType") : "")
                            } else q += p.b("splHnt") ? "": "&cs=0"
                        }
                    }
                } (),
                B = function() {
                    var h = false,
                    a = false,
                    b = false,
                    e = false,
                    o = false,
                    w = 1,
                    q = 0,
                    x = {},
                    y = [],
                    l = "",
                    j = "",
                    n = "",
                    i = 0,
                    u = 0,
                    k = 0,
                    t = 5,
                    C = false,
                    E = {
                        query: null,
                        filter: null
                    },
                    v = function() {
                        if (0 !== l.length) {
                            q = E.query.test(l) ? 0 : 2;
                            if (0 === q) a: if (! (0 === i || "" === l || 0 !== q)) {
                                if (1 === w) {
                                    var d = l.match(E.filter);
                                    if (null === d) break a;
                                    n = d[0]
                                } else n = l;
                                if (n !== j) if (Q === x[n]) ra.b(n);
                                else {
                                    j = n;
                                    B.c()
                                }
                            }
                        }
                        V.g(l, y, q)
                    },
                    T = {
                        prev4py: [ca || W ? 109 : 189, 219, 188, 33],
                        next4py: [ca ? 107 : W ? 61 : 187, 221, 190, 48, 34],
                        prev4wb: [ca || W ? 109 : 189, 33],
                        next4wb: [ca ? 107 : W ? 61 : 187, 34]
                    },
                    J = function() {
                        return W ?
                        function(d) {
                            return 78 === d || 42 <= d && 47 >= d
                        }: function(d) {
                            return 96 <= d && 111 >= d
                        }
                    } ();
                    if (W) {
                        var H = [47, 42, 45, 43];
                        if (oa) var N = [46, 35, 36]
                    }
                    var O = {
                        semiEn: "!@#$%^&*()-_+=[]{},.:;\"'\\|<>?/`~ ",
                        semiZh: "\uff01@#\uffe5%\u2026&*\uff08\uff09-\u2014+=\u3010\u3011\uff5b\uff5d\uff0c\u3002\uff1a\uff1b\u201c\u2018\u3001|\u300a\u300b\uff1f\u3001\u00b7\uff5e ",
                        fullEn: "\uff01\uff20#\uff04\uff05\uff3e\uff06\uff0a\uff08\uff09\uff0d\uff3f\uff0b\uff1d\uff3b\uff3d{}\uff0c\uff0e\uff1a\uff1b\uff02\uff07\uff3c\uff5c\uff1c\uff1e\uff1f\uff0f\uff40~\u3000",
                        fullZh: "\uff01\uff20\uff03\uffe5\uff05\u2026\uff06\u00d7\uff08\uff09\uff0d\u2014\uff0b\uff1d\u3010\u3011\uff5b\uff5d\uff0c\u3002\uff1a\uff1b\u201c\u2018\uff3c\uff5c\u300a\u300b\uff1f\u3001\u00b7\uff5e\u3000"
                    },
                    ha = O.semiEn,
                    fa = function(d) {
                        return d = d.replace(/[\dA-Za-z]/g,
                        function(f) {
                            return String.fromCharCode(f.charCodeAt(0) + 65248)
                        })
                    },
                    g = [false, false],
                    z = function(d, f, m) {
                        f = f || false;
                        m = m || false;
                        if (!f && !m) return d;
                        var A = m ? "full": "semi";
                        A += f ? "Zh": "En";
                        d = d.replace(/[\x00-\xFF]/,
                        function(G) {
                            return O[A].charAt(ha.indexOf(G)) || G
                        });
                        if (f) {
                            f = "\u201c\u2018\u2026\u2014".indexOf(d);
                            if (1 < f) d += d;
                            else if ( - 1 < f) {
                                if (g[f]) d = String.fromCharCode(d.charCodeAt(0) + 1);
                                g[f] = !g[f]
                            }
                        }
                        return d
                    };
                    return {
                        a: function(d) {
                            var f = d.type;
                            if (! (ya && d.ctrlKey)) {
                                var m = {
                                    a: d.altKey,
                                    c: ya ? d.metaKey: d.ctrlKey,
                                    s: d.shiftKey
                                };
                                if ( - 1 === q)"keydown" === f && !m.a && m.c && 32 === r.f(d) && S.toggle() && r.h(d);
                                else switch (f) {
                                case "keydown":
                                    a = h = true;
                                    f = r.f(d);
                                    b = 16 === f && !m.a && !m.c;
                                    switch (true) {
                                    case ! m.a && !m.c && !m.s && 20 === f: P.d("caps");
                                        0 === i && B.m();
                                        break;
                                    case ! m.a && !m.c && m.s && 32 === f: P.d("angl");
                                        break;
                                    case ! m.a && m.c && !m.s && 190 === f: P.d("symb");
                                        break;
                                    case ! m.a && m.c && m.s && 70 === f: P.d("face");
                                        break;
                                    case ! m.a && m.c && m.s && 77 === f: P.d("prop");
                                        break;
                                    case ! m.a && m.c && 32 === f: S.toggle();
                                        break;
                                    case m.a && m.c && 32 === f: 1 === p.b("iptMode") ? U.e("wb") : U.e("py");
                                        break;
                                    default:
                                        h = a = false
                                    }
                                    if (a) {
                                        r.h(d);
                                        return
                                    }
                                    if (m.a || m.c) {
                                        if (0 !== i) {
                                            W && (a = true);
                                            r.h(d)
                                        }
                                        return
                                    }
                                    if (Y.c()) {
                                        if (!m.s && 1 !== q && 0 !== i) {
                                            a = h = true;
                                            if (1 === w) switch (true) {
                                            case 8 === f: if (0 !== y.length) l = y.pop().spell + l;
                                                else {
                                                    l = l.slice(0, -1);
                                                    i--
                                                }
                                                v();
                                                break;
                                            case 32 === f: var A = null;
                                                if (0 === q && 2 !== (A = B.k()).err) ! A.err && B.j();
                                                else B.l();
                                                break;
                                            case 13 === f: B.l();
                                                break;
                                            case 0 === q && 49 <= f && 57 >= f: var G = f - 49;
                                                if (t <= G && 8 === G) B.c("prev");
                                                else {
                                                    A = B.k(G);
                                                    if (A.err) {
                                                        if (1 !== A.err) h = a = false
                                                    } else B.j(G)
                                                }
                                                break;
                                            case 0 === q && 38 === f: B.i("prev");
                                                break;
                                            case 0 === q && 40 === f: B.i("next");
                                                break;
                                            case 0 === q && D.a(f, T.prev4py) : B.c("prev");
                                                break;
                                            case 0 === q && D.a(f, T.next4py) : B.c("next");
                                                break;
                                            case 27 === f: B.m();
                                                break;
                                            default:
                                                h = a = false
                                            } else switch (true) {
                                            case 8 === f: l = l.slice(0, -1);
                                                i--;
                                                v();
                                                break;
                                            case 32 === f: if (0 === q) {
                                                    A = B.k();
                                                    if (0 === A.err) B.j();
                                                    else 1 !== A.err && B.m()
                                                } else B.l();
                                                break;
                                            case 13 === f: 0 === q ? B.m() : B.l();
                                                break;
                                            case 0 === q && 49 <= f && 57 >= f: G = f - 49;
                                                if (t <= G) h = a = false;
                                                else {
                                                    A = B.k(G);
                                                    if (A.err) {
                                                        if (1 !== A.err) h = a = false
                                                    } else B.j(G)
                                                }
                                                break;
                                            case 0 === q && 38 === f: B.i("prev");
                                                break;
                                            case 0 === q && 40 === f: B.i("next");
                                                break;
                                            case 0 === q && D.a(f, T.prev4wb) : B.c("prev");
                                                break;
                                            case 0 === q && D.a(f, T.next4wb) : B.c("next");
                                                break;
                                            case 27 === f: B.m();
                                                break;
                                            default:
                                                h = a = false
                                            }
                                        }
                                        if (a) {
                                            r.i(d);
                                            r.h(d)
                                        }
                                    } else Y.f(r.d(d));
                                    if (h) return;
                                    e = J(f);
                                    if (W) {
                                        o = D.a(f, H);
                                        oa && (h = D.a(f, N))
                                    }
                                    return;
                                case "keypress":
                                    if (m.a || m.c || h || W && 0 === d.which || !Y.c()) {
                                        if (W && a) {
                                            r.i(d);
                                            r.h(d)
                                        }
                                        return
                                    } else if (o) a = h = true;
                                    if (64 === i) {
                                        r.h(d);
                                        return
                                    }
                                    f = r.g(d);
                                    if (0 === f) return;
                                    G = String.fromCharCode(f);
                                    A = 0;
                                    switch (true) {
                                    case 97 <= f && 122 >= f: A = 3;
                                        break;
                                    case 48 <= f && 57 >= f: A = 1;
                                        break;
                                    case 65 <= f && 90 >= f: A = 2;
                                        break;
                                    case - 1 !== ha.indexOf(G) : A = 4;
                                        break;
                                    default:
                                        return
                                    }
                                    var R = p.b("dbc"),
                                    la = p.b("enSymb"),
                                    M = p.b("caps");
                                    if (0 === i && (3 === A && (m.s && !M || !m.s && M) || 2 === A && (!m.s && !M || m.s && M))) {
                                        P.d("caps");
                                        q = p.b("eng") || p.b("caps") ? 1 : 0
                                    }
                                    m = false;
                                    M = 0;
                                    switch (q) {
                                    case 1:
                                        if (R) G = 4 === A ? z(G, false, true) : fa(G);
                                        M = 1;
                                        break;
                                    case 2:
                                        if (2 === A || 3 === A || 0 === y.length) M = 2;
                                        break;
                                    default:
                                        if (1 === w) switch (A) {
                                        case 4:
                                            if (0 !== i) switch (true) {
                                            case 39 === f: if ("'" === l.charAt(l.length - 1)) break;
                                            case 42 === f || 59 === f && 1 !== p.b("pyMode") && D.a(p.b("spType"), [2, 4]) : M = 2;
                                                break;
                                            case 64 === f || e: if (0 === y.length) M = 2;
                                                break;
                                            default:
                                                A = B.k();
                                                if (!A.err && l.length === A.len) {
                                                    B.j();
                                                    M = 1
                                                }
                                            } else M = 1;
                                            if (!e && 1 === M && !(C && 46 === f)) G = z(G, !la, R);
                                            break;
                                        case 1:
                                            if (0 !== i) {
                                                if (0 === y.length) M = 2
                                            } else {
                                                if (R) G = fa(G);
                                                else m = true;
                                                M = 1
                                            }
                                            break;
                                        default:
                                            M = 2
                                        } else switch (A) {
                                        case 4:
                                            if (0 !== i) switch (true) {
                                            case 64 === f || e: M = 2;
                                                break;
                                            default:
                                                A = B.k();
                                                if (!A.err && l.length === A.len) {
                                                    B.j();
                                                    M = 1
                                                }
                                            } else M = 1;
                                            if (!e && 1 === M && !(C && 46 === f)) G = z(G, !la, R);
                                            break;
                                        case 1:
                                            if (0 !== i) M = 2;
                                            else {
                                                if (R) G = fa(G);
                                                else m = true;
                                                M = 1
                                            }
                                            break;
                                        case 2:
                                            M = 2;
                                            break;
                                        default:
                                            f = !(122 === f && (0 === i || 4 <= i));
                                            if (4 <= i) {
                                                A = B.k();
                                                if (A.err) if (1 !== A.err) B.m();
                                                else f = false;
                                                else B.j()
                                            }
                                            f && (M = 2)
                                        }
                                    }
                                    r.h(d);
                                    C = m;
                                    if (2 === M) {
                                        l += G;
                                        i++;
                                        v()
                                    } else 1 === M && Y.e(G);
                                    return;
                                case "keyup":
                                    b && P.d("lang");
                                    return
                                }
                            }
                        },
                        b: function(d) {
                            if (Q === d) {
                                V.j();
                                ga.j(1)
                            } else if ("suc" !== d.ret) {
                                V.j(d.ret);
                                ga.j(3)
                            } else {
                                var f = d.q,
                                m = x[f];
                                if (!m) {
                                    m = x[f] = {
                                        count: 0,
                                        page: 1,
                                        kanji: []
                                    };
                                    if (1 === w) m.len = [];
                                    else if ("rsc" in d) m.hint = []
                                }
                                m.count += D.b(d.rscnt);
                                m.page = "1" === d.is_end ? 0 : m.page + 1;
                                m.kanji = m.kanji.concat(d.rs);
                                if ("len" in m) m.len = m.len.concat(d.rsn);
                                else if ("hint" in m) {
                                    for (var A = d.rs,
                                    G = d.rsc,
                                    R = 0,
                                    la = A.length; R < la; R++) A[R] += G[R];
                                    m.hint = m.hint.concat(A)
                                }
                                if (f === n) {
                                    j = n;
                                    B.c("1" === d.p ? Q: "next")
                                }
                            }
                        },
                        c: function(d, f) {
                            var m = x[j];
                            if (Q !== m) {
                                if (Q !== d) if ("prev" === d) if (0 === k) return;
                                else {
                                    k = Math.max(k - t, 0);
                                    u = f ? t - 1 : 0
                                } else {
                                    var A = k + t;
                                    if (0 === m.page && m.count <= A) return;
                                    if (0 !== m.page && m.count < A + t) {
                                        ra.b(j, m.page);
                                        return
                                    } else {
                                        k = A;
                                        u = 0
                                    }
                                } else {
                                    u = k = 0;
                                    if (2 === w && 0 === q && 4 === i && 1 === m.count) return B.j()
                                }
                                A = Math.min(m.count, k + t);
                                var G = (2 === w && "hint" in m ? m.hint: m.kanji).slice(k, A);
                                if (0 < k) var R = true;
                                if (0 !== m.page || m.count > A) var la = true;
                                V.h(G, u, R, la)
                            }
                        },
                        i: function(d) {
                            if (Q !== d) if ("prev" === d) if (0 < u) V.i(u, "prev") && u--;
                            else B.c("prev", true);
                            else if ("next" === d) if (u < t - 1) V.i(u, "next") && u++;
                            else B.c("next", true)
                        },
                        j: function(d) {
                            d = d || u;
                            d = B.k(d);
                            if (!d.err) {
                                delete d.err;
                                y.push(d);
                                l = l.substring(d.len);
                                if (0 === l.length) {
                                    ga.b(y);
                                    B.l()
                                } else v()
                            }
                        },
                        k: function(d) {
                            var f = {
                                err: 0
                            };
                            if (n !== j) {
                                f.err = 1;
                                return f
                            }
                            d = d || u;
                            if (t <= d) {
                                f.err = 3;
                                return f
                            }
                            var m = x[j];
                            if (m) {
                                if (0 === m.count) {
                                    f.err = 2;
                                    return f
                                }
                            } else {
                                f.err = 3;
                                return f
                            }
                            d = k + d;
                            if (d >= m.count) {
                                f.err = 3;
                                return f
                            }
                            if (1 === w) {
                                var A = D.b(m.len[d]);
                                f.spell = l.substring(0, A);
                                f.len = A
                            } else {
                                f.spell = l;
                                f.len = l.length
                            }
                            f.kanji = m.kanji[d];
                            return f
                        },
                        l: function() {
                            if (0 !== i) {
                                var d;
                                d = [];
                                var f = y.length;
                                if (0 !== f) for (var m = 0; m < f; m++) d[m] = y[m].kanji;
                                d.push(l);
                                d = d.join("");
                                if (3 !== q && p.b("dbc")) d = fa(d);
                                f = p.b("ftDeco");
                                if (0 !== f) {
                                    m = 1 === f ? "\u0489": "\u0305\u0332";
                                    d = d.replace(/./g, "$&" + m);
                                    2 === f && (d = "[" + m + d + "]")
                                }
                                Y.e(d)
                            }
                        },
                        m: function() {
                            0 !== i && V.g();
                            w = p.b("iptMode");
                            x = {};
                            y = [];
                            j = l = "";
                            k = u = i = 0;
                            t = p.b("perPg");
                            switch (true) {
                            case ! p.b("on") : q = -1;
                                break;
                            case p.b("eng") || p.b("caps") : q = 1;
                                break;
                            default:
                                q = 0
                            }
                        },
                        o: function() {
                            return n
                        },
                        p: function() {
                            if (1 === p.b("iptMode")) if (1 !== p.b("pyMode")) {
                                E.query = /^[^A-Z;][a-zA-Z*';]*$/;
                                E.filter = /^[a-z][a-z*';]*/
                            } else {
                                E.query = /^[^iuvA-Z][a-zA-Z*']*$/;
                                E.filter = /^[a-z][a-z*']*/
                            } else E.query = /^[a-z]*$/
                        }
                    }
                } (),
                Y = function() {
                    var h = {
                        i: I ? "focusin": "focus",
                        o: I ? "focusout": "blur"
                    },
                    a = 0,
                    b = 0,
                    e = null,
                    o = 0,
                    w = "",
                    q = null,
                    x = [0, 0],
                    y = function(g) {
                        e && e.blur();
                        if (g = c.q(r.d(g))) {
                            r.b(g);
                            r.b(g.document)
                        }
                    },
                    l = function(g) {
                        j(r.d(g))
                    },
                    j = function(g) {
                        try {
                            var z = g.contentWindow,
                            d = z.document;
                            g = d.URL
                        } catch(f) {
                            return false
                        }
                        r.a(z, "unload", y);
                        n(d);
                        return g = true
                    },
                    n = function(g) {
                        if (! (!g || 9 !== g.nodeType && 1 !== g.nodeType)) {
                            var z = null;
                            if (K.r === c.l(g)) z = [g];
                            else {
                                if (9 === g.nodeType) {
                                    r.a(g, h.i, k, true);
                                    W && r.a(c.q(g), h.i, k, true);
                                    z = B.a;
                                    r.a(g, "keydown", z);
                                    r.a(g, "keyup", z);
                                    if (I) ta || c.g(K.r + "{behavior:expression(" + i(g) + ua + "." + u + "(this))}", g);
                                    else r.a(g, "DOMNodeInserted", u)
                                }
                                z = g.getElementsByTagName(K.r);
                                if (0 === z.length) return
                            }
                            g = 0;
                            for (var d = z.length; g < d; g++) {
                                var f = z[g];
                                if (! (ka in f)) {
                                    r.a(f, "load", l);
                                    j(f)
                                }
                            }
                        }
                    };
                    if (I) {
                        if (!ta) {
                            u = "register" + s;
                            var i = function(g) {
                                if (!g || 9 !== g.nodeType) return "";
                                var z = "";
                                for (g = c.q(g); g.frameElement && L.window !== g.window;) {
                                    z += "window.parent.";
                                    g = c.q(g.frameElement)
                                }
                                return z
                            }
                        }
                    } else var u = function(g) {
                        g = r.d(g);
                        1 === g.nodeType && Y.b(g)
                    };
                    var k = function(g) {
                        t(r.d(g))
                    },
                    t = function(g) {
                        var z = c.l(g);
                        switch (z) {
                        case K.i:
                            if ("text" !== g.type) return;
                        case K.t:
                            if (true === g.readOnly || "disabled" === c.m(g, "imeMode")) return;
                            break;
                        case K.d:
                            if ("true" !== (g.contentEditable || 0).toString().toLowerCase()) return;
                            break;
                        case K.r:
                            g = g.contentWindow;
                        case "":
                        case K.h:
                        case K.b:
                            var d = c.q(g);
                            g = d;
                            var f = g.frameElement;
                            if (!f) return;
                            var m = d.document;
                            if ("true" !== (m.body.contentEditable || 0).toString().toLowerCase() && "on" !== (m.designMode || 0).toString().toLowerCase()) return;
                            z = K.r;
                            break;
                        default:
                            return
                        }
                        w = z;
                        if (K.r !== w) f = g;
                        if ("disabled" !== (f.getAttribute("ime-mode") || "")) { ! (ka in f) && (f[ka] = ++a);
                            z = f[ka];
                            if (o !== z) {
                                B.m();
                                o = z;
                                e = I ? f: g;
                                q = I && K.r === w ? e.contentWindow.document.body: e;
                                g = B.a;
                                r.a(e, h.o, C);
                                r.a(q, "keydown", g);
                                r.a(q, "keypress", g);
                                r.a(q, "keyup", g);
                                if (K.r !== w) {
                                    d = c.q(q);
                                    m = d.document
                                }
                                r.b(m, "keydown", g);
                                r.b(m, "keyup", g);
                                g = null;
                                p.b("on") && p.b("autoHid") && P.b();
                                x = K.i === w ? c.e(e) : [0, 0];
                                if (d.frameElement) {
                                    d = c.f(d.frameElement);
                                    x[0] += d[0];
                                    x[1] += d[1];
                                    d = null
                                }
                                if (!I) if (K.i === w) x[1] += e.offsetHeight;
                                else {
                                    if (K.t === w) {
                                        v = m.createElement(E);
                                        m.body.appendChild(v);
                                        c.n(v, "display", "block");
                                        c.n(v, "visibility", "hidden");
                                        d = 0;
                                        g = H.length;
                                        for (var A; d < g; d++) {
                                            f = H[d]; (A = c.m(e, f)) && c.n(v, f, A)
                                        }
                                        d = [D.b(c.m(e, "paddingTop")), D.b(c.m(e, "paddingRight")), D.b(c.m(e, "paddingBottom")), D.b(c.m(e, "paddingLeft"))];
                                        g = [D.b(c.m(e, "borderTopWidth")), D.b(c.m(e, "borderRightWidth")), D.b(c.m(e, "borderBottomWidth")), D.b(c.m(e, "borderLeftWidth"))];
                                        A = [e.offsetWidth - d[1] - d[3] - g[1] - g[3], e.offsetHeight - d[0] - d[2] - g[0] - g[2]];
                                        var G = [c.m(e, "overflowX"), c.m(e, "overflowY")];
                                        g = c.e(e);
                                        f = g.slice(0);
                                        switch (true) {
                                        case ca:
                                            d[3] += 2;
                                            d[0] += 1;
                                            A[0] -= 2;
                                            A[1] -= 1;
                                            if ("hidden" === G[1]) {
                                                A[0] += 17;
                                                G[1] = "scroll"
                                            } else if (33 > A[1]) G[1] = "hidden";
                                            break;
                                        case Ca:
                                            d[3] += 3;
                                            A[0] -= 3;
                                            0 !== d[0] && (g[1] += d[0]) && (d[0] = 0);
                                            0 !== d[2] && (d[2] = 0);
                                        case pa:
                                            "auto" === c.m(e, "textAlign") && c.n(v, "textAlign", "left");
                                            break;
                                        case oa:
                                            "hidden" !== G[1] && (G[1] = "scroll");
                                            break
                                        } (oa || "visible" === G[0]) && (G[0] = "auto");
                                        "visible" === G[1] && (G[1] = "auto");
                                        c.n(v, "wordBreak", "break-all") && c.n(v, "wordWrap", "break-word");
                                        c.n(v, "overflowX", G[0]);
                                        c.n(v, "overflowY", G[1]);
                                        c.n(v, "paddingRight", d[1] + "px");
                                        c.n(v, "paddingBottom", d[2] + "px");
                                        c.n(v, "paddingLeft", d[3] + "px");
                                        c.n(v, "paddingTop", d[0] + "px");
                                        c.n(v, "width", A[0] + "px");
                                        c.n(v, "height", A[1] + "px");
                                        if ("fixed" === c.m(e, "position")) c.n(v, "position", "fixed");
                                        else {
                                            c.n(v, "position", "absolute");
                                            d = c.d(m);
                                            g[0] += d[0];
                                            g[1] += d[1];
                                            d = null
                                        }
                                        c.n(v, "left", g[0] + "px");
                                        c.n(v, "top", g[1] + "px");
                                        v.xPos = g[0];
                                        v.yPos = g[1];
                                        v.xOff = g[0] - f[0];
                                        v.yOff = g[1] - f[1];
                                        g = f = null;
                                        O = setInterval(function() {
                                            var R = c.e(e);
                                            if (v.xPos !== R[0]) {
                                                v.xPos = R[0];
                                                c.n(v, "left", R[0] + v.xOff + "px")
                                            }
                                            if (v.yPos !== R[1]) {
                                                v.yPos = R[1];
                                                c.n(v, "top", R[1] + v.yOff + "px")
                                            }
                                        },
                                        992)
                                    }
                                    J = m.createElement(T);
                                    J.appendChild(m.createTextNode("\u3000"))
                                }
                                if (b !== z) {
                                    b = z;
                                    p.c("cursFlw", true)
                                }
                                z = g = f = z = d = m = null
                            }
                        }
                    },
                    C = function() {
                        if (e && q) {
                            var g = B.a;
                            r.b(e, h.o, C);
                            r.b(q, "keydown", g);
                            r.b(q, "keypress", g);
                            r.b(q, "keyup", g);
                            g = c.q(q).document;
                            r.a(g, "keydown", B.a);
                            r.a(g, "keyup", B.a);
                            if (!I && K.i !== w) {
                                if (K.t === w) {
                                    v.innerHTML = "";
                                    console.log(v);
                                    v.parentNode.removeChild(v);
                                    v = null;
                                    clearInterval(O)
                                }
                                J.innerHTML = "";
                                J = null
                            }
                            p.b("autoHid") && P.c();
                            q = e = null;
                            w = "";
                            o = 0;
                            B.m()
                        }
                    };
                    if (!I) var E = "simulator" + s,
                    v = null,
                    T = "anchor" + s,
                    J = null,
                    H = ["fontFamily", "fontSize", "fontWeight", "fontVariant", "fontStretch", "fontStyle", "letterSpacing", "wordSpacing", "lineHeight", "textAlign", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle"],
                    N = function(g) {
                        return g.replace(/&/g, "&#38;").replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/\r\n|\r|\n/g, "<br/>").replace(/\s/g, "&#160;")
                    },
                    O = null,
                    ha = function(g, z, d) {
                        var f = c.p(g).createDocumentFragment(),
                        m = c.p(g).createElement(K.d),
                        A = g.value;
                        if (0 !== A.length) for (m.innerHTML = N(A.substring(0, g.selectionStart)); m.firstChild;) f.appendChild(m.firstChild);
                        f.appendChild(d);
                        if (0 !== A.length) for (m.innerHTML = N(A.substring(g.selectionEnd)); m.firstChild;) f.appendChild(m.firstChild);
                        z.innerHTML = "";
                        z.appendChild(f)
                    },
                    fa = function(g, z, d) {
                        if (c.o(g)) {
                            var f = g.document.documentElement,
                            m = f.clientHeight;
                            c.e(z);
                            pa && (f = g.document.body)
                        } else {
                            f = g;
                            m = D.b(c.m(f, "height"));
                            W && D.b(c.m(f, "borderTopWidth"))
                        }
                        g = 0;
                        d && (f.scrollTop = d.scrollTop);
                        if ((g = f.scrollTop + m - z.offsetHeight - z.offsetTop) && g < 0 || (g = f.scrollTop + z.offsetHeight - z.offsetTop) && g > 0) f.scrollTop -= g;
                        d && (d.scrollTop = f.scrollTop)
                    };
                    return {
                        a: function() {
                            n(F);
                            if (I) if (ta) {
                                var g = {},
                                z = {
                                    appendChild: true,
                                    insertBefore: true,
                                    replaceChild: true,
                                    innerHTML: false,
                                    outerHTML: false
                                },
                                d = null;
                                for (d in z) {
                                    z[d] ?
                                    function(f) {
                                        g[f] = Element.prototype[f];
                                        Element.prototype[f] = function() {
                                            var m = g[f].apply(this, arguments);
                                            Y.b(this);
                                            return m
                                        }
                                    } (d) : function(f) {
                                        g[f] = Object.getOwnPropertyDescriptor(Element.prototype, f);
                                        Object.defineProperty(Element.prototype, f, {
                                            c: function(m) {
                                                g[f].set.call(this, m);
                                                Y.b(this)
                                            }
                                        })
                                    } (d);
                                    d = null
                                }
                                z = null
                            } else S[u] = function(f) {
                                if ("none" !== c.m(f, "behavior")) {
                                    c.n(f, "behavior", "none");
                                    Y.b(f)
                                }
                            }
                        },
                        b: function(g) {
                            if (1 === (g || 0).nodeType) if (g.hasChildNodes() || K.r === c.l(g)) n(g)
                        },
                        c: function() {
                            return 0 !== o
                        },
                        d: function() {
                            return Aa ?
                            function() {
                                var g = $ ? c.d() : [0, 0],
                                z = c.p(q),
                                d = z.selection;
                                "Control" === d.type && z.execCommand("Delete", "", null);
                                z = d.createRange();
                                d = x[0] + g[0];
                                g = x[1] + g[1];
                                z.select();
                                g += z.boundingHeight;
                                if (K.i === w || K.t === w) {
                                    d += z.offsetLeft;
                                    g += z.offsetTop
                                } else {
                                    if (0 === z.boundingHeight) {
                                        z.moveStart("character", -1);
                                        d += z.boundingWidth;
                                        z.collapse(true)
                                    }
                                    d += z.boundingLeft;
                                    g += z.boundingTop
                                }
                                return [d, g]
                            }: function() {
                                if (K.i === w) return x;
                                if (K.t === w) {
                                    ha(e, v, J);
                                    fa(v, J, e)
                                } else {
                                    c.q(e).getSelection().getRangeAt(0).insertNode(J);
                                    fa(e, J)
                                }
                                var g = c.e(J);
                                g[1] += J.offsetHeight;
                                J.parentNode.removeChild(J);
                                return [x[0] + g[0], x[1] + g[1]]
                            }
                        } (),
                        e: function() {
                            return Aa ?
                            function(g) {
                                if (e && q) {
                                    var z = c.p(q).selection.createRange();
                                    z.text = g;
                                    z.select();
                                    B.m()
                                }
                            }: function(g) {
                                if (e && q) {
                                    if (K.i === w || K.t === w) {
                                        var z = e.selectionStart,
                                        d = e.selectionEnd,
                                        f = e.scrollTop,
                                        m = e.value;
                                        e.value = 0 !== m.length ? [m.substring(0, z), g, m.substring(d)].join("") : g;
                                        ca && 0 !== f && (e.scrollTop = f);
                                        z += g.length;
                                        e.setSelectionRange(z, z);
                                        if (K.t === w) {
                                            ha(e, v, J);
                                            fa(v, J, e);
                                            v.removeChild(J)
                                        }
                                    } else {
                                        z = c.q(e).getSelection();
                                        d = z.getRangeAt(0);
                                        z.removeAllRanges();
                                        d.deleteContents();
                                        " " === g && (g = g.replace(" ", "&#160;"));
                                        g = d.createContextualFragment(g);
                                        f = g.lastChild;
                                        d.insertNode(g);
                                        d.insertNode(J);
                                        fa(e, J);
                                        J.parentNode.removeChild(J);
                                        d.setEndAfter(f);
                                        d.collapse(false);
                                        z.addRange(d)
                                    }
                                    B.m()
                                }
                            }
                        } (),
                        f: function(g) {
                            t(g)
                        }
                    }
                } (),
                ga = function() {
                    var h = [],
                    a = new Image(1, 1),
                    b = false,
                    e = function() {
                        a.onload = a.onerror = null;
                        b = false;
                        I && CollectGarbage()
                    },
                    o = function(y) {
                        b && e();
                        a.src = y;
                        a.onload = a.onerror = e;
                        a.complete && e();
                        b = true
                    },
                    w = "",
                    q = "",
                    x = function() {
                        return w + "&num=" + h.length + "&xl=" + h.join("|")
                    };
                    return {
                        a: function() {
                            var y;
                            y = c.c();
                            y = p.b("cgiPrx") + "reportfirst?key=" + p.b("prvKey") + "&version=838&sp=" + p.b("lnchr") + "&sw=" + screen.width + "&sh=" + screen.height + "&dw=" + y[0] + "&dh=" + y[1] + "&t=" + Ba;
                            o(y);
                            w = p.b("cgiPrx") + "reportcnt?key=" + p.b("prvKey")
                        },
                        b: function(y) {
                            if (Q !== y) {
                                var l = y.length;
                                if (0 !== l) {
                                    for (var j = 0,
                                    n = 0,
                                    i = 0; i < l; i++) {
                                        var u = y[i],
                                        k = u.spell.length;
                                        u = u.kanji.length;
                                        h.push(k + "," + u + "," + q);
                                        j += k;
                                        n += u
                                    }
                                    1 < l && h.push(j + "," + n + "," + q);
                                    if (10 < h.length) {
                                        o(x());
                                        h = []
                                    }
                                }
                            }
                        },
                        j: function(y) {
                            y = p.b("cgiPrx") + "re?key=" + p.b("prvKey") + "&ec=" + y + "&py=" + B.o() + "&t=" + ( + new Date).toString().slice(0, -3) + "&v=838";
                            o(y)
                        },
                        k: function() {
                            if (0 !== h.length) {
                                o(x());
                                h = []
                            }
                        },
                        l: function() {
                            var y = 1 === p.b("iptMode");
                            q = ["0", p.b("iptMode") - 1, y ? p.b("pyMode") : "0", y && 1 !== p.b("pyMode") ? p.b("spType") : "0"].join(",")
                        }
                    }
                } (),
                da = function() {
                    var h = {},
                    a = "$$fuid" + s,
                    b = 0;
                    return {
                        a: function(e, o) {
                            var w = h[e];
                            w || (w = h[e] = {});
                            var q = o[a] || (o[a] = ++b);
                            w[q] || (w[q] = o)
                        },
                        b: function(e, o) {
                            var w = h[e];
                            if (!w) return false;
                            if (o) o[a] && delete w[o[a]];
                            else {
                                for (var q in w) delete w[q];
                                q = null
                            }
                            for (q in w) break;
                            q || delete h[e]
                        },
                        c: function(e) {
                            try {
                                var o = h[e];
                                if (!o) return false;
                                e = true;
                                for (var w in o) o.hasOwnProperty(w) && false === o[w]() && (e = false);
                                return e
                            } catch(q) {}
                        }
                    }
                } ();
                return {
                    version: "1.0 Beta2(838)",
                    get: function(h) {
                        switch (h) {
                        case "on":
                            return p.b(h)
                        }
                        return null
                    },
                    set: function(h) {
                        switch (h) {
                        case "on":
                        case "off":
                            S.toggle("on" === h);
                            break
                        }
                    },
                    event: function(h, a, b) {
                        if (! (!h || !a || !D.c(a, "Function"))) {
                            b = true === b;
                            for (var e in aa) if (h === aa[e]) { (b ? da.b: da.a)(h.toLowerCase(), a);
                                break
                            }
                        }
                    },
                    toggle: function(h) {
                        if (p.b("ready")) {
                            if (false === h || Q === h && p.b("on")) {
                                P.c();
                                p.c("on", false)
                            } else if (true === h || Q === h && !p.b("on")) { (!p.b("autoHid") || Y.c()) && P.b();
                                p.c("on", true)
                            }
                            da.c(p.b("on") ? aa.n: aa.f);
                            B.m()
                        } else try {
                            p.a();
                            P.a();
                            V.a();
                            X.a();
                            U.a();
                            Y.a();
                            ra.a();
                            p.c("ready", true);
                            r.a(L, "unload",
                            function() {
                                ga.k();
                                r.c();
                                S = L[ja] = null
                            }); ! p.b("manlOn") && arguments.callee.call(S, h);
                            da.c(aa.d)
                        } catch(a) {
                            alert("很抱歉，因故无法成功启动，请刷新页面后重试。")
                        }
                    }
                }
            } ()).toggle()
        }
    };
    try {
        if (I) F.documentElement.doScroll("left");
        else if ("readyState" in F ? "complete" !== F.readyState: !F.body) throw 1;
        ba(true)
    } catch(Da) {
        if (I) {
            var va = function() {
                if ("complete" === F.readyState) {
                    F.detachEvent("onreadystatechange", va);
                    va = null;
                    ba()
                }
            };
            F.attachEvent("onreadystatechange", va);
            L.attachEvent("onload", ba);
            self === self.top &&
            function() {
                if (!sa) {
                    try {
                        F.documentElement.doScroll("left")
                    } catch(wa) {
                        setTimeout(arguments.callee, 64);
                        return
                    }
                    ba()
                }
            } ()
        } else {
            F.addEventListener("DOMContentLoaded", ba, false);
            L.addEventListener("load", ba, false)
        }
    }
})(window, document, "QQWebIME");
