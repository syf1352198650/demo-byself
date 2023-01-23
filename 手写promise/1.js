class person{
    constructor(name){
        console.log(name);
        this.name=name
    }
}
function test(func){
    console.log(func().name);
}
test(()=>{
   return new person(2)
})