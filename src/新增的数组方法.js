/**
 * 1、json数组对象(类数组对象) 转为 数组
 * Array.form()
 * 注意：使用此方法的对象，必须要有length属性，不然转为的数组就是空数组
 * 元素属性名必须是数值或者可以转换成数值的字符
 */
let json = {
    "0" : "yww",
    "1" : "Younwell",
    "2" : "杨维维",
    "length" : 3   // 必须的属性
}
let arr = Array.from(json);
console.log(arr);  // ["yww", "Younwell", "杨维维"]
console.log(Array.isArray(arr)); // true


/**
 * 反例1：没有length属性，就会转为空数组
 */
let json1 = {
    "0" : "yww",
    "1" : "Younwell",
    "2" : "杨维维",
}
let arr1 = Array.from(json1);
console.log(arr1);  // []
console.log(Array.isArray(arr1)); // true

/**
 * 反例2：属性名不是数字，转为元素为undefined的数组
 */
let json2 = {
    "name0" : "yww",
    "name1" : "Younwell",
    "name2" : "杨维维",
    "length" : 3   // 必须的属性
}
let arr2 = Array.from(json2);
console.log(arr2);  // [undefined, undefined, undefined]
console.log(Array.isArray(arr2)); // true






/**
 * 2、Array.of()方法用于将一组值转换为数组。Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组。
 */
let arr5 = Array.of(3,5,6,'tret',8,0);
console.log(arr5) // [3, 5, 6, "tret", 8, 0]

/**
 * Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。
 * 弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异
 */
    // Array()的不足
console.log(new Array()) // []
console.log(new Array(3)) // [ , , ]  length为3的空数组 很奇怪
console.log(new Array(3,6,'fasf')) // [3,6,'fasf']

    // Array.of()弥补
console.log(Array.of()) // []
console.log(Array.of(3)) // [3]  
console.log(Array.of(3,6,'fasf')) // [3,6,'fasf']


/**
 * 3、fill 数组替换填充 arr.fill(value, start, end)
 * value：填充值。
 * start：填充起始位置，可以省略。(忽略，则从第一个开始填充)
 * end：填充结束位置，可以省略，【实际结束位置是end-1】。(忽略，从起始值填充到最后)
 */
var arr6 = ['Youngwell','yww','杨维维'];
// arr6.fill('abc');console.log(arr6)  // ["abc", "abc", "abc"]
// arr6.fill('abc',1,2);console.log(arr6)  // ["Youngwell", "abc", "杨维维"]
arr6.fill('abc',1);console.log(arr6)  // ["Youngwell", "abc", "abc"]


/**
 * 4、数组的循环【实用】 for of
 * 案例中包含了数组的keys()方法和entries()方法
 */
var arr7 = ['Youngwell','yww','杨维维'];
    // 输出数组的value
for(let item of arr7){
    console.log(item) // 'Youngwell' , 'yww' , '杨维维'
}
    // 输出数组的索引index
for(let index of arr7.keys()){
    console.log(index) // 0  ,  1  ,  2
}

    /**
     * arr.keys()与Object.keys(obj)的区别
     */
// 区别开始
var obj = {
    name:'rwer',
    hc:'6456',
    math:90,
}
    // 输出对象的key
for(let key of Object.keys(obj)){
    console.log(key) // name  ,  hc  ,  math
}
// 区别结束

    // 输出数组的值和索引
for(let [index,val] of arr7.entries()){
    console.log(index + '---' + val) // 0---Youngwell , 1---yww , 2---杨维维
}

    // 不用for of 循环，可以手动调用遍历器对象(Iterator对象)的next方法，进行遍历。
var entries = arr7.entries();
console.log(entries.next().value) // [0, "Youngwell"]
console.log(entries.next().value) // [1, "yww"]
console.log(entries.next().value) // [2, "杨维维"]



