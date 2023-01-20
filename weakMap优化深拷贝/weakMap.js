

function deepClone(obj,hash = new WeakMap()) {
    /* 1.对传入的参数值进行判断 */
  
    // 当传入的参数是null或者undefined时 利用null==undefined 直接返回
    if (obj == null) return obj;
  
    // 当传入的是日期格式的对象时 再将其拷贝一层
    if (obj instanceof Date) return new Date(obj);
  
    // 当传入的是正则表达式格式的对象时 再将其拷贝一层
    if (obj instanceof RegExp) return new RegExp(obj);
  
    // 当初入的是函数对象时 直接返回
    if (typeof obj !== "object") return obj;
  
    // 如果拷贝的对象是存在,直接从weakmap中返回即可
    if (hash.has(obj)) return hash.get(obj);
  
    // 数组以及对象的拷贝
    let cloneObj = new obj.constructor();
  
    hash.set(obj,cloneObj);
    for (const key in obj) {
      // for...in循环会遍历obj原型上的属性
      // 通过obj.hasOwnProperty只遍历obj对象上的属性
      if (obj.hasOwnProperty(key)) {
        // 递归拷贝每一项的值
        cloneObj[key] = deepClone(obj[key],hash);
      }
    }
    return cloneObj;
  }
  
    const obj = { age: { name: "小林" } };
    const n = deepClone(obj);
    n.age.name = "小n";
    console.log(obj);
    console.log(n);
  
  