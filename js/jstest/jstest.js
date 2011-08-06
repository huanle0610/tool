
CurrentJsPath = (function() {
    var k = document.getElementsByTagName("script");
    return k[k.length - 1].getAttribute("src");
})();
var add=function(a,b){return a+b;};
var myobj={
	value:1,
	name:"li",
	getValue:function(){return this.value;},
};
myobj.doubles=function(){
//	this.value=add(this.value,this.value);
//	alert(this.value+this.name);
	var that=this;
	//函数调用模式时，this被绑定到全局对象，而不是外部函数。所以，
	//用函数调用模式时，使用对象的属性需要一定的技巧。常用that取得this
	var helper=function(){
		alert(that.value+that.name);
		that.value=add(that.value,that.value);
	};
	helper();

};
//异常处理
//－－－－－－－－－－－－－－－－－－－－－－－－－
var exc_add=function (a,b){
	if(typeof a!=='number' || typeof b!=='number'){
		throw{
			name:'TypeError', 
			message:'add needs numbers'
		};
	}
	return a+b;
};
//构造一个try_it函数，用不正确的方式调用之前的exc_add
var try_it = function(){
	try{
		exc_add("se");
	}catch(e){
		document.writeln(e.name+": " +e.message);
	}
};
//运行try_it();//测试;
//－－－－－－－－－－－－－－－－－－－－－－－－－



//How to trim a string
//－－－－－－－－－－－－－－－－－－－－－－－－－
//删除前后的空白字符
function trim(str){
	return (str+"").replace(/^\s+|\s+$/g,'');
}
//删除所有的空白字符
function trim_all(str){
	return (str+"").replace(/\s+/g,'');
}
//－－－－－－－－－－－－－－－－－－－－－－－－－
//那么如何给String类型，增加方法呢？
//－－－－－－－－－－－－－－－－－－－－－－－－－
//Function.prototype.method = function(name,func){
//	this.prototype[name] = func;
//	return this;
//}
//比较郁闷的是，下面这段代码在firefox上能正常运行，这神奇的ChromeV8上竟然
//一直运行，所以暂且注释掉了，
//if(!String.prototype.trim){
//	String.method('trim',function(){
//		return this.replace(/^\s+|\s+$/g,'');
//	});
//}
//此时
//var a_string="       Hi,Li Lei!  ";
//alert(a_string+"\n"+a_string.trim());
//但是，由于基本类型是公共的结构，所以在类库混用时要小心。一个保险的
//做法是只在确定没有该方法时才添加它。
//Function.prototype.method = function (name,func){
//	if(!this.prototype[name]){
//		this.prototype[name] = func;
//	}
//}
//－－－－－－－－－－－－－－－－－－－－－－－－－
//
//
//
//
//一个经典的递归js表现
var hanoi = function (disc,src,aux,dst){
	if(disc>0){
		hanoi(disc-1,src,dst,aux);
		document.writeln("Move disc " +
				disc + " from "+
				src + " to "+
				dst+"<br/>");
		hanoi(disc-1,aux,src,dst);
	}
};



//怎么理解闭包？
//Javascrpt支持代码块，但是没有代码块作用域。只有函数作用域。
//就是一个函数中的任何位置定义的变量在该函数中的任何地方都可见。
//
//这样的好处是内部函数可以访问它们的外部函数的参数和变量（除了this和arguments）。
//先看一个构造器的例子：
var myObj_0=function(value){
	this.value=value;
};
//a=new myObj_0(5);
//a.value   //5
//就这样，你可以得到也可以给a.value赋值
var myObj_1= function(){
	var value=0;

	return{
		increment:function(inc){
			value+=typeof inc==='number'?inc:1;
		},
		getValue:function(){
	 		return value;
	 	}
	}
}();
//typeof myObj_1  //object
//myObj_1.value   //undefined
//myObj_1.getValue()   //0
//myObj_1.increment(10);
//myObj_1.getValue()   //10
//你无法直接得到或者更改myObj_1.value,而只能通过方法。可是问题是myObj_1
//无法被复制呀
//
//
//
var ball = function (status){
	return{
		get_status:function(){
			return status;	   
		}
	};
};
function f1(){
　　　　var n=999;
　　　　nAdd=function(){n+=1;alert(n);}
　　　　function f2(){
　　　　　　alert(n);
　　　　}
　　　　function f3(){
　　　　}
　　　　return f3;
}
//把函数f2的传递给了全局变量result
　　var result=f1();
　　result(); // 999
　　nAdd();
　　result(); // 999
　　nAdd();
/*
//互联网上也谈闭包
function f1(){
　　　　var n=999;
　　　　nAdd=function(){n+=1}
　　　　function f2(){
　　　　　　alert(n);
　　　　}
	alert(typeof f2);
　　　　return f2;
}
//把函数f2的传递给了全局变量result
　　var result=f1();
　　result(); // 999
　　nAdd();
　　result(); // 1000
*/


//记忆
//函数可以用对象来记忆先前的操作结果，从而能避免无谓的运算
//这种优化被称为记忆。


//memorizer函数取得初始的memory数组和fundamental函数。它返回一个
//管理memory存储和在需要时，在调用fundamental的shell函数。
var memorizer = function (memory,fundamental){
	var shell = function(n){
		var result = memory[n];
		if(typeof result !== 'number'){
			result = fundamental(shell,n);
			memory[n]=result;
		}
		return result;
	};
	return shell;
};


//斐波那多数列的函数
var fibonacci = memorizer([0,1],function(shell,n){
		return shell(n-1)+shell(n-2);
		});
