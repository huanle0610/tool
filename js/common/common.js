/*
 *
 * common javascript lib
 *
 * maintain by huanle0610<huanle0610@gmail.com>
 *
 */
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


String.method('trim',function(){
        return this.replace(/(\s+)$|^\s+/g, '');
});
function trim(str) {
    return (str + '').replace(/(\s+)$|^\s+/g, '');
}
