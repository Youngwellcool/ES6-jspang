/**
 * Map数据结构 (key => value)
 * 相比于对象和数组，更为高效灵活
 * Map数据结构的key和value可以是任意值
 * set(key,value)方法，新增元素
 * get(key)方法，获取指定key的value值
 * delete(key)方法，删除指定key的元素
 * has(key)方法，查找是否有指定key的元素
 * clear()方法，删除所有元素
 * size属性，查看map中元素个数
 */
let obj = {
    name:'Youngwell',
    age:28
}
let map = new Map();
console.log(map)  // Map(0) {}

map.set(obj,'map数据结构') // map的key是一个对象，value是字符串
console.log(map)  // Map(1) { {name: "Youngwell", age: 28} => 'map数据结构' }

map.set('Youngwell',obj); // map的key是字符串，value是对象
console.log(map) // Map(2) { 'Youngwell' => {name: "Youngwell", age: 28} }

console.log(map.get(obj)) // map数据结构
console.log(map.get('Youngwell')) // {name: "Youngwell", age: 28}

console.log(map.size) // 2

console.log(map.has(obj)) // true
console.log(map.has('Youngwell')) // true
console.log(map.has('rerfe')) // false

    // 遍历
for(let item of map){
    console.log(item) // [{name: "Youngwell", age: 28}, "map数据结构"]  ["Youngwell" , {name: "Youngwell", age: 28}]  
}
map.delete('Youngwell')
console.log(map)

map.clear()
console.log(map) // Map(0) {}