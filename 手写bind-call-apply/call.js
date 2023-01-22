Function.prototype.mycall=function(obj){
    let context=obj||window;//默认为window
    console.log(this,'this');
    obj.fn=this;
    let args=[...arguments].slice(1);
    let result=context.fn(...args);
    return result;
}
let a={
    name:'syf',
    fn:function(a,b){
        console.log(this.name+':'+a+b);
    }
}
let b=a.fn
b.mycall(a,1,2)