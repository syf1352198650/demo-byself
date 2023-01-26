const arr=[
    {id:1,name:'ss'},
    {id:2,name:'dd'},
    {id:13,name:'ss'},
    {id:1,name:'ss'},
    {id:12,name:'ss'}
]
const obj={};
const list=arr.reduce((acc,pre)=>{
  obj[pre.id] ? "" :obj[pre.id]=true&&acc.push(pre);
  return acc;
},[])
console.log(list);