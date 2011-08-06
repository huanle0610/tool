CurrentJsPath = (function() {
    var k = document.getElementsByTagName("script");
    return k[k.length - 1].getAttribute("src");
})();
patt = /(.*)\/(.*)\.js/;
path = patt.exec(CurrentJsPath);
curpath = path[1];

function dt_agent() {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    var agent = false; (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    if (Sys.ie) agent = "ie_" + Sys.ie;
    if (Sys.firefox) agent = "firefox_" + Sys.firefox;
    if (Sys.chrome) {
        agent = "chrome_" + Sys.chrome;
        return true;
    };
    if (Sys.opera) agent = "opera_" + Sys.opera;
    if (Sys.safari) agent = "safari" + Sys.safari;
    return agent;
}
var ischrome = (dt_agent() === true) ? true: false;
var ua = navigator.userAgent;
var $IE = (navigator.appName == "Microsoft Internet Explorer");
var $IE5 = $IE && (ua.indexOf("MSIE 5") != -1);
var $IE5_0 = $IE && (ua.indexOf("MSIE 5.0") != -1);
var $Gecko = ua.indexOf("Gecko") != -1;
var $Safari = ua.indexOf("Safari") != -1;
var $Opera = ua.indexOf("Opera") != -1;
var $Mac = ua.indexOf("Mac") != -1;
var $NS7 = ua.indexOf("Netscape/7") != -1;
var $NS71 = ua.indexOf("Netscape/7.1") != -1;
if ($Opera) {
    $IE = true;
    $Gecko = false;
    $Safari = false
}
if ($IE5) {
    $IE = true;
    $Gecko = false;
    $Safari = false
}
function $_t(b, a, e) {
    var c = b.getElementsByTagName(a);
    for (var d = 0; d < c.length; d++) {
        if (c[d].id == e) {
            return c[d]
        }
    }
    return null
}

function _(a) {
    var f = arguments;
    var g = 0;
    if (typeof(a) == "string") {
        a = document
    } else {
        g = 1
    }
    for (var d = g; d < f.length; d++) {
        var e = a.getElementsByTagName("*");
        var c = false;
        for (var b = 0; b < e.length; b++) {
            if (e[b].id == f[d]) {
                a = e[b];
                c = true;
                break
            }
        }
        if (!c) {
            return null
        }
    }
    return a
}

function $dele(o, fn, rv) {
    var r = function() {
        var s = arguments.callee;
        var args = [];
        for (var i = 0; i < s.length; i++) {
            args[i] = s[i]
        }
        var argStr = args.join(",");
        if (argStr.length > 0) {
            argStr = "," + argStr
        }
        var callStr = "s.thiz[s.fn](" + argStr + ")";
        var v = eval(callStr);
        if (s.rv != null) {
            return s.rv
        } else {
            return v
        }
    };
    r.thiz = o;
    r.fn = fn;
    r.rv = rv;
    return r
}

function $ge(a) {
    if (a != null) {
        return a
    }
    if ($IE) {
        return window.event
    } else {
        return a
    }
}

function $gte(b, a) {
    if (!b.getElementById) {
        b = b.ownerDocument
    }
    if ($IE) {
        return a != null ? a: b.parentWindow.event
    } else {
        return a;
        throw new Error("this method can only execute in IE")
    }
}

function $addEL(h, g, f, d) {
    if ($IE) {
        if (h["$__listener_" + g] == null) {
            var c = function(l) {
                var k = arguments.callee;
                var b = k.fList;
                l = $ge(l);
                for (var j = 0; j < b.length; j++) {
                    b[j](l)
                }
            };
            c.fList = [];
            h["$__listener_" + g] = c;
            h["on" + g] = h["$__listener_" + g]
        }
        var a = h["$__listener_" + g].fList;
        a[a.length] = f
    } else {
        h.addEventListener(g, f, d)
    }
}

function $cancelEvent(a) {
    if ($IE) {
        a.returnValue = false;
        a.cancelBubble = true
    } else {
        a.preventDefault()
    }
}

function $cpAttr(d, c) {
    for (var a in c) {
        var b = c[a];
        d[a] = b
    }
    return d
}

function $getValue(a, b) {
    return a == null ? b: a
}

var $gv = $getValue;
var $dom = {
    parseInt: function(a) {
        if (a == null || a == "" || typeof(a) == "undefined") {
            return 0
        }
        return parseInt(a)
    },
    getClientSize: function(h) {
        if ($IE) {
            var e = {
                x: h.clientLeft,
                y: h.clientTop
            };
            e.l = e.x;
            e.t = e.y;
            e.r = h.clientRight;
            e.b = h.clientBottom;
            e.w = h.clientWidth;
            e.h = h.clientHeight;
            return e
        } else {
            var d = h.style;
            if (d.borderLeftWidth.length == 0 || d.borderTopWidth.length == 0 || d.borderRightWidth.length == 0 || d.borderBottomWidth.length == 0) {
                var c = h.offsetWidth;
                d.borderLeftWidth = "0px";
                c -= h.offsetWidth;
                var f = h.offsetWidth;
                d.borderRightWidth = "0px";
                f -= h.offsetWidth;
                var g = h.offsetHeight;
                d.borderTopWidth = "0px";
                g -= h.offsetHeight;
                var a = h.offsetHeight;
                d.borderBottomWidth = "0px";
                a -= h.offsetHeight;
                d.borderLeftWidth = c + "px";
                d.borderTopWidth = g + "px";
                d.borderRightWidth = f + "px";
                d.borderBottomWidth = a + "px";
                var e = {
                    l: c,
                    r: f,
                    t: g,
                    b: a,
                    x: c,
                    y: g
                };
                return e
            } else {
                var e = {
                    x: this.parseInt(h.style.borderLeftWidth),
                    y: this.parseInt(h.style.borderTopWidth),
                    r: this.parseInt(h.style.borderRightWidth),
                    b: this.parseInt(h.style.borderBottomWidth)
                };
                e.l = e.x;
                e.t = e.y;
                return e
            }
        }
    },
    getSize: function(e, b) {
        var d = {
            x: e.offsetWidth != null ? e.offsetWidth: 0,
            y: e.offsetHeight != null ? e.offsetHeight: 0
        };
        if (b) {
            var a = this.getMargin(e);
            d.x += a.l + a.r;
            d.y += a.t + a.b
        }
        return d
    },
    setSize: function(e, b, h, f) {
        if ($IE) {
            if (f) {
                var a = this.getMargin(e);
                b -= a.l + a.r;
                h -= a.t + a.b
            }
            e.style.width = b;
            e.style.height = h
        } else {
            var g = this.getClientSize(e);
            var d = g.l + g.r;
            var c = g.t + g.b;
            e.style.width = b - d + "px";
            e.style.height = h - c + "px"
        }
    },
    getPosition: function(b, d) {
        var e;
        e = {
            x: b.offsetLeft,
            y: b.offsetTop
        };
        if (d) {
            var a = this.getMargin(b);
            e.x -= a.l;
            e.y -= a.t
        }
        return e
    },
    setPosition: function(b, a, d, c) {
        if (c) {}
        b.style.left = a + "px";
        b.style.top = d + "px"
    },
    setAlpha: function(c, b) {
        return;
        c.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + b * 100 + ");";
        c.style.opacity = b;
        c.style.MozOpacity = b
    }
};
var $motion = {
    smooth: function(b, c, a) {
        if (a > 1) {
            a = 1
        }
        return (c - b) * a + b
    }
};
function PopUp(e, a) {
    this.id = e;
    var d = this.config = a;
    d.width = $gv(d.width, 300);
    d.height = $gv(d.height, 200);
    d.bottom = $gv(d.bottom, 0);
    d.right = $gv(d.right, 20);
    d.display = $gv(d.display, true);
    d.contentUrl = $gv(d.contentUrl, "");
    d.motionFunc = $gv(d.motionFunc, $motion.smooth);
    d.position = {
        x: 0,
        y: 0
    };
    var b = d.time;
    b.slideIn = $gv(b.slideIn, 10);
    b.hold = $gv(b.hold, 10);
    b.slideOut = $gv(b.slideOut, 10);
    b.slideIn *= 1000;
    b.hold *= 1000;
    b.slideOut *= 1000;
    this.container = document.body;
    this.popup = null;
    this.content = null;
    this.switchButton = null;
    this.moveTargetPosition = 0;
    this.startMoveTime = null;
    this.startPosition = null;
    this.status = PopUp.STOP;
    this.intervalHandle = null;
    this.mm = "max";
    this.imgMin1 = curpath + "/images/blogrecommend_hz_004.gif";
    this.imgMin2 = curpath + "/images/yzq_001.gif";
    this.imgMax = curpath + "/images/blogrecommend_hz_003.gif";
}

PopUp.STOP = 0;
PopUp.MOVE_DOWN = 1;
PopUp.MOVE_UP = 2;
PopUp.SWITCH_TO_MIN = PopUp.MOVE_DOWN | 4;
PopUp.SWITCH_TO_MAX = PopUp.MOVE_UP | 8;
var __o = {
    create: function() {
        var h = document;
        var i = this.config;
        var g = this.popup = h.createElement("div");
        this.container.appendChild(g);
        g.id = this.id;
        g.style.cssText = ischrome ? "position:fixed;						z-index:65531 !important;						overflow:hidden;						border:0px solid #f00;						": "position:absolute;						z-index:65531 !important;						overflow:hidden;						border:0px solid #f00;						";
        $dom.setSize(g, i.width, i.height);
        var e = this.content = h.createElement("div");
        g.appendChild(e);
        e.id = this.id + "_content";
        e.style.cssText = "position:absolute;						z-index:1;						overflow:hidden;";
        $dom.setSize(e, i.width, i.height);
        $dom.setPosition(e, 0, 0);
        i.position.y = i.height;
        this.onresize();
        var d = "<a id='closeButton' href='#'></a><a id='switchButton' href='#'></a><div id='ifm_div' style='height:245px;'><iframe id='" + this.id + "_content_iframe' src=" + i.contentUrl + " frameborder=0 scrolling=no width='100%' height='100%' allowTransparency='true'></iframe></div>";
        e.innerHTML = d;
        var f = this.switchButton = $_t(e, "a", "switchButton");
        f.style.cssText = 'position:absolute;							z-index:2;														font-size:0px;							line-height:0px;														left:250px;							top:6px;							width:13px;							height:13px;														background-image:url(' + curpath + "/images/blogrecommend_hz_004.gif" + ');';
        $addEL(f, "click", $dele(this, "switchMode"), true);
        $addEL(f, "click", $cancelEvent, true);
        var b = $_t(e, "a", "closeButton");
        b.style.cssText = 'position:absolute;							z-index:2;														font-size:0px;							line-height:0px;														left:270px;							top:6px;							width:13px;							height:13px;														background-image:url(' + curpath + "/images/blogrecommend_hz_003.gif" + ');';
        $addEL(b, "mouseover",
        function(c) {
            $dom.setAlpha(this, 0.4)
        },
        true);
        $addEL(b, "mouseout",
        function(c) {
            $dom.setAlpha(this, 1)
        },
        true);
        $addEL(b, "click", $dele(this, "hide"), true);
        $addEL(b, "click", $cancelEvent, true);
        var a = $IE ? document.body: document.documentElement;
        $addEL(document.body, "resize", $dele(this, "onresize"), true);
        this.__hackTimer = window.setInterval("__popup.onresize()", 50);
        $addEL(a, "scroll", $dele(this, "onresize"), true);
        this.onresize()
    },
    show: function() {
        if (!this.config.display) {
            return
        }
        this.moveTargetPosition = 0;
        this.status = PopUp.MOVE_UP;
        this.startMove()
    },
    hide: function() {
        this.status = PopUp.MOVE_DOWN;
        this.stopMove();
        if (typeof(quitAdSrc) != "undefined" && quitAdSrc != null && quitAdSrc != "" && this.mm == "max") {
            $_t(this.content, "a", "closeButton").style.visibility = "hidden";
            $_t(this.content, "a", "switchButton").style.visibility = "hidden";
            $_t(this.content, "div", "ifm_div").style.visibility = "hidden";
            var b = $_t(this.content, "div", "closeswf_div");
            b.style.visibility = "visible";
            var a = this.popup;
            setTimeout(function() {
                a.innerHTML = ""
            },
            3500)
        } else {
            this.moveTargetPosition = this.config.height;
            this.status = PopUp.MOVE_DOWN;
            this.startMove()
        }
    },
    minimize: function() {
        this.mm = "min";
        this.moveTargetPosition = this.config.height - 28;
        this.status = PopUp.SWITCH_TO_MIN;
        this.startMove();
        var b = this.switchButton.style;
        var a = b.backgroundImage;
        if (a.indexOf(this.imgMin1) > -1) {
            a = a.replace(this.imgMin1, this.imgMin2);
            b.backgroundImage = a
        }
    },
    maximize: function() {
        if (!this.config.display) {
            return
        }
        this.mm = "max";
        this.moveTargetPosition = 0;
        this.status = PopUp.SWITCH_TO_MAX;
        this.startMove();
        var b = this.switchButton.style;
        var a = b.backgroundImage;
        if (a.indexOf(this.imgMin2) > -1) {
            a = a.replace(this.imgMin2, this.imgMin1);
            b.backgroundImage = a
        }
    },
    delayHide: function() {
        window.setTimeout("__popup.hide()", this.config.time.hold)
    },
    delayMin: function() {
        window.setTimeout("__popup.minimize()", this.config.time.hold)
    },
    switchMode: function() {
        if (this.mm == "min") {
            this.maximize()
        } else {
            this.minimize()
        }
    },
    startMove: function() {
        this.stopMove();
        this.intervalHandle = window.setInterval("__popup.move()", 100);
        this.startMoveTime = new Date().getTime();
        this.startPosition = this.config.position.y
    },
    stopMove: function() {},
    move: function() {
        var a = new Date().getTime();
        a = a - this.startMoveTime;
        var b = this.status & PopUp.MOVE_UP ? this.config.time.slideIn: this.config.time.slideOut;
        var c = this.config.motionFunc(this.startPosition, this.moveTargetPosition, a / b);
        this.config.position.y = c;
        this.onresize();
        if (a >= b) {
            this.onFinishMove()
        }
    },
    onFinishMove: function() {
        this.stopMove();
        if (this.status == PopUp.MOVE_UP && this.config.time.hold > 0) {
            this.delayMin()
        } else {
            if (this.__hackTimer != null) {
                window.clearInterval(this.__hackTimer)
            }
        }
        this.status = PopUp.STOP
    },
    onresize: function() {
        var g = this.config;
        var e = document.documentElement;
        var e = (document.compatMode.toLowerCase() == "css1compat") ? document.documentElement: document.body;
        var d = e.clientWidth + e.scrollLeft;
        var b = e.clientHeight + e.scrollTop;
        var a = d - g.right - g.width;
        var f = b - g.bottom - g.height + g.position.y;
        $dom.setPosition(this.popup, a, f);
        $dom.setSize(this.popup, g.width, g.height - g.position.y)
    }
};
$cpAttr(PopUp.prototype, __o);
function job() {
    var h = {
        width: 295,
        height: 245,
        bottom: 2,
        right: 1,
        display: true,
        contentUrl: "static/js/youke/index.htm",
        time: {
            slideIn: 1,
            hold: 60,
            slideOut: 1
        }
    };
    var n = ["7+7"];
    var c = "once";
    var l = {};
    var k = [];
    for (var g = 0; g < n.length; g++) {
        var b = n[g];
        var e = b.split("+");
        var p = parseInt(e[0]);
        for (var d = 0; d < e.length - 1; d++) {
            e[d] = e[d + 1]
        }
        l[p] = true;
        for (var f = 0; f < e.length; f++) {
            l[p + parseInt(e[f])] = true
        }
    }
    n = [];
    for (var g in l) {
        var q = parseInt(g);
        if (isNaN(q)) {
            continue
        }
        n[n.length] = q
    }
    n = n.sort();
    function a() {
        var i = new PopUp("xp", h);
        window.__popup = i;
        i.create();
        i.show()
    }
    a()
}

function doit() {
    if ($IE) {
        if (document.readyState == "loaded" || document.readyState == "complete") {
            job()
        } else {
            window.setTimeout(doit, 500);
            return
        }
    } else {
        job()
    }
}

doit();