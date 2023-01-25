function PromiseAll(promiseArray) {    //返回一个Promise对象
    return new Promise((resolve, reject) => {
    
       if (!Array.isArray(promiseArray)) {                        //传入的参数是否为数组
           return reject(new Error('传入的参数不是数组！'))
       }

       const res = []
       let counter = 0                         //设置一个计数器
       for (let i = 0; i < promiseArray.length; i++) {
           Promise.resolve(promiseArray[i]).then(value => {
               counter++                  //使用计数器返回 必须使用counter
               res[i] = value
               if (counter === promiseArray.length) {
                   resolve(res)
               }
           }).catch(e => reject(e))
       }
   })
}
const p=new Promise((resolve)=>{
    resolve(1)
})
const p2=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(2)
    },2000)
})
// const p3=new Promise((resolve,reject)=>{
//     reject(new Error('失败'))
// })
const arr=[p,p2]
PromiseAll(arr).then((res)=>{
    console.log(res);
})