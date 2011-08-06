
CurrentJsPath = (function() {
    var k = document.getElementsByTagName("script");
    return k[k.length - 1].getAttribute("src");
})();
alert(CurrentJsPath);
patt = /(.*)\/(.*)\.js/;
path = patt.exec(CurrentJsPath);
alert(path[1]);


function dt_agent() {
    var Sys = {}; 
    var ua = navigator.userAgent.toLowerCase();
    var s;
    var agent = false; 
(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    if (Sys.ie) agent = "ie_" + Sys.ie;
    if (Sys.firefox) agent = "firefox_" + Sys.firefox;
    if (Sys.chrome) {
        agent = "chrome_" + Sys.chrome;
    }; 
    if (Sys.opera) agent = "opera_" + Sys.opera;
    if (Sys.safari) agent = "safari" + Sys.safari;
    return agent;
}

