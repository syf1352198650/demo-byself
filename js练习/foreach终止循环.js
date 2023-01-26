const arr=[1,2,3,4,5,6,7,8,9];

try {
    arr.forEach((i)=>{
        console.log(i);
        if(i===3){
            throw('终止')
        }
    })
} catch (error) {
    console.log(error);
}