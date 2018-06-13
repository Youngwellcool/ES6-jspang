/**
 * 1、Set数据结构
 * 注意：set是数据结构，不是数据类型，也不是数组,只接受数组参数
 * 特点：该数据结构不允许出现重复的值，会自动把重复的值删除掉
 * size属性相当于数组的length属性
 * add()方法，新增元素
 * delete()方法，删除元素
 * has()方法，查找是否有某元素
 * clear()方法，删除所有元素
 */
let setArr = new Set(['Youngwell','yww','杨维维','Youngwell']);

console.log(setArr);  // Set(3) {"Youngwell", "yww", "杨维维"} 自动去重

console.log(setArr.size) // 3

setArr.add('web');
console.log(setArr); // Set(4) {"Youngwell", "yww", "杨维维", "web"}

setArr.delete('yww');
console.log(setArr); // Set(4) {"Youngwell", "杨维维", "web"}

    // 循环遍历
for(let item of setArr){
    console.log(item)  // "Youngwell", "杨维维", "web"
}
    // 如下例子，Set数据结构的key和value都是一样的
for(let item of setArr.keys()){
    console.log(item)  // "Youngwell", "杨维维", "web"
}
for(let item of setArr.values()){
    console.log(item)  // "Youngwell", "杨维维", "web"
}
for(let item of setArr.entries()){
    console.log(item)  // ["Youngwell", "Youngwell"]  ["杨维维", "杨维维"]  ["web", "web"]
}

setArr.forEach((val)=>{
    console.log(val) // "Youngwell", "杨维维", "web"
})

console.log(setArr.has('Youngwell')) // true
console.log(setArr.has('fadfsaf')) // false

    // Set转数组
console.log([...setArr]) // ["Youngwell", "杨维维", "web"]

setArr.clear()
console.log(setArr) // Set(0) {}




/**
 * 2、weakSet数据结构 只能传入对象参数且不能直接传入
 * WeakSet 不能遍历，是因为成员都是弱引用(即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中)，这是因为垃圾回收机制依赖引用计数，如果一个值的引用次数不为0，垃圾回收机制就不会释放这块内存。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。WeakSet里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。因此，WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。
由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。
 */

// let weakObj = new WeakSet({a:'Youngwell'}) // 报错 不能直接传对象参数
let weakObj = new WeakSet()
let obj = {name:'Youngwell'};
let obj2 = {name:'Youngwell'};
weakObj.add(obj)
weakObj.add(obj2)
console.log(weakObj) // 因为obj和obj2分别引用的是两个不同的内存空间，所以obj和obj2不存在重复，所以都能添加进weakObj中

weakObj.delete(obj2);
console.log(weakObj)

console.log(weakObj.has(obj2)) // false
console.log(weakObj.has(obj)) // true
obj = null;
console.log(weakObj)
console.log(weakObj)
console.log(weakObj)
console.log(weakObj)
console.log(weakObj)
console.log(weakObj)
console.log(obj)