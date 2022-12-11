//装饰器-给方法添加日志
class Math{
    @log('系统日志')
    add(a,b){
        return a+b
    }
}
//日志装饰器
function log(type){
    return function(target,name,descriptor){
        console.log(target,name,descriptor);// target是对象 这里是math name是装饰方法名 decriptor是描述对象
        var _type=type ||'';
        var oldValue=descriptor.value;//value==add
        descriptor.value=function(...arg){
            console.log(`${_type} 调用${name} 参数：`,arg);
            return oldValue.apply(target,arg)
        }
        return descriptor
    }
}
var math=new Math()
math.add(1,2)