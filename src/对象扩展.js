/**
 * 1、对象赋值新方式
 */
let name = 'Youngwell';
let skill = 'web';
let obj1 = {name,skill}  // 等价于 obj1 = {name:name,skill:skill}
console.log(obj1)  // {name: "Youngwell", skill: "web"}


/**
 * 2、对象的合并 Object.assign()方法
 */
let a = {name:'Youngwell',sex:'man'};
let b = {age:'28'};
let c = {skill:'web'};
let d = Object.assign(a,b,c);
console.log(d);  // {name: "Youngwell", sex: "man", age: "28", skill: "web"}


/**
 * 3、判断两个值是否相等 Object.is() [是全等于的加强版]
 * Object.is()判断是否相等与===全等于差不多
 * 区别是 +0不等于-0 ， NaN等于NaN
 */
console.log(+0===-0);  // true
console.log(Object.is(+0,-0))  // false

console.log(NaN===NaN);  // false
console.log(Object.is(NaN,NaN))  // true
