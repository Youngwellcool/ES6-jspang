/**
 * 1、定义函数时，参数可以传入默认值
 * 当参数全等于undefined时，才使用传入的默认值
 */
function add(a,b=10){
    return a+b
}
console.log(add(2,30)) // 32
console.log(add(2)) // 12
console.log(add.length) // 1 (函数增加了length属性，它的值为必传的参数个数[此例中只有a是必传的])


/**
 * 2、箭头函数
 */

var add2 = (a,b=10) => a+b;
console.log(add2(30,3)) // 33
console.log(add2(30)) // 40
console.log(add2.length) // 1


/**
 * 3、对象的函数解构
 * 定义函数时传入的参数对象中的变量必须与json对象中的key保持一致,否则为undefined
 * 传入的对象参数可以指定默认值
 */
let json = {
    name:'Youngwell',
    ping:'yww',
    a:'aaaa'
}
function fun({name,ping,b='web',c}){
    console.log(name) // Youngwell
    console.log(ping) // yww
    console.log(b)  // web
    console.log(c)  // undefined
}
fun(json)

    /**
     * 对象的 in 方法
     * 判断json中是否存在某个key
     */
console.log('ping' in json) // true
console.log('fdsfds' in json) // false
    /**
     * 数组的 in 方法
     * 判断数组中某个索引是否为空值
     */
var arr5 = [,,'Youngwell'];
console.log(arr5.length) // 3
console.log(1 in arr5) // false 空值
console.log(2 in arr5) // true 有值

/**
 * 4、数组的函数解构
 */
var arr3 = ['Youngwell2','yww2'];
function fun2(a,b,c){
    console.log(a)  // Youngwell2
    console.log(b)  // yww2
    console.log(c)  // undefined
}
console.log(...arr3)  // Youngwell2 yww2
fun2(...arr3)