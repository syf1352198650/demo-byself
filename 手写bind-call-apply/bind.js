Function.prototype.mybind=function(obj,arg){
    var arg=Array.prototype.slice.call(arguments,1);
    var context=this;
    var bound=function(newArg){
        if(newArg){
            arg=arg.concat(Array.prototype.slice.call(newArg));

        }
        return context.apply(obj,arg);
    }
    // var F=function(){}
    // //这里需要一个寄生组合继承
    // F.prototype=context.prototype;
    // bound.prototype=new F();
    return bound;
    }

let obj={
    a:2
}
let obj2={
    a:1,
    fn:function(){
        console.log(this.a);
    }
}

let fnn=obj2.fn.mybind(obj);
fnn()
// console.log(fn.mybind);