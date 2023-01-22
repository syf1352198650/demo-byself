Function.prototype.myapply=function(obj){
    let context=obj||window//默认为window;
    context.fn=this;
    let args=[...arguments].slice(1)[0];
    console.log('args',args);
    let result=context.fn(...args);
    return result;
}
var a={
    name:'syf',
    fn:function(a,b){
        console.log(this.name+':'+a+b);
    }
}
var b=a.fn
b.myapply(a,[1,2])