/*
 *
 * common javascript lib
 *
 * maintain by huanle0610<huanle0610@gmail.com>
 *
 */
charset='utf-8';
Function.prototype.method = function(name,func){
    this.prototype[name] = func;
    return this;
}

function isUdd(variable) {
	return typeof variable == 'undefined' ? true : false;
}

function in_array(needle, haystack) {
	if(typeof needle == 'string' || typeof needle == 'number') {
		for(var i in haystack) {
			if(haystack[i] == needle) {
					return true;
			}
		}
	}
	return false;
}
function array_search(needle, haystack) {
    if(typeof needle == 'string' || typeof needle == 'number') {
        for(var i in haystack) {
            if(haystack[i] == needle) {
                return i;
            }    
        }    
    }    
    return -1;
}


String.method('trim',function(){
        return this.replace(/(\s+)$|^\s+/g, '');
});
function trim(str) {
    return (str + '').replace(/(\s+)$|^\s+/g, '');
}

function LoadScript(url){
	document.write( '<scr' + 'ipt type="text/javascript" src="' + url + '"><\/scr' + 'ipt>' ) ;
}

/**
 * 分析一个url，得到paras指定的值
 * eg:
 * var url_me="http://g.cn?id=1&hl=zh_cn"
 * analyseUrl('hl',url_me);
 * @param {Object} paras
 * @param {Object} url  如果没有指定url的值，分析的是当前页面的url
 */
function analyseUrl(paras,url) {
	var	url =!url?document.location.href:url;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {};
    for (i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if (isUdd(returnValue)) {
        return '';
    } else {
        return returnValue;
    }
}

//字符串长度 1utf-8=3 1gbk/big-5=2 1ascii=1
function mb_strlen(str) {
	var len = 0;
	for(var i = 0; i < str.length; i++) {
		len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? (charset == 'utf-8' ? 3 : 2) : 1;
	}
	return len;
}

//simple字符串截取
function cutstr(str,maxlen,dot) {
	var len = 0;
	var ret = '';
	var dot = !dot ? '...' : '';
	for(var i = 0; i < str.length; i++) {
        len++;
		if(len > maxlen) {
			ret += dot;
			break;
		}
		ret += str.substr(i, 1);
	}
	return ret;
}

function getHost(url) {
	var host = "null";
	if(typeof url == "undefined"|| null == url) {
		url = window.location.href;
	}
	var regex = /.*\:\/{2}([^\/]*).*/;
	var match = url.match(regex);
	if(typeof match != "undefined" && null != match) {
		host = match[1];
	}
	return host;
}

function stripscript(s) {
	return s.replace(/<script.*?>.*?<\/script>/ig, '');
}


