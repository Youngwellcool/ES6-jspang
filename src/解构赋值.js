// 解构赋值：就是通过数组或者对象或者字符串的形式，给变量赋值

/**
 * 1、数组的解构赋值
 */

 // ES6之前的赋值
let a = 0;
let b = 1;
let c = 2;
console.log(a,b,c)

 /**
  * ES6的解构赋值
  * 注意：解构两边的格式必须要一致，比如 let [o,[p,m],q] = [10,11,12] 这样就会报错
  * 注意：数组解构有先后顺序关系，左右两边要一一对应
  */
 let [o,p,q] = [10,11,12]
 console.log(o,p,q)  // 10  11  12

 let [r = 10,y] = [undefined,30];  // 添加默认值 当r匹配到的值严格等于(===)undefined时，r就取默认值10
 console.log(r,y)  // 10 , 30


 /**
  * 数组解构赋值应用 -- 函数传参
  * @param {*} param0 
  */
 function f([x, y, z=200]) {
     console.log(x,y,z)  // 100  22  200
  }
f([100,22]);



 /**
  * 2、对象的解构赋值
  * 与数组的区别：没有先后顺序的关系，只与key值有关，左边的变量就是右边对象的key，左边变量找到右边对象有对应的key，就取该key的值，没有找到就是undefined
  * 数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
  */
let {bar,foo,fn='rew'} = {foo:'yww',bar:'Youngwell',fn:null} // 给fn默认值，当fn匹配到的值严格等于undefined时，fn使用默认值
console.log(foo,bar,fn)  // yww  Youngwell  null

    // 对象的解构赋值的 本质：
//let { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
    // 等价于
let { foo1: foo1, bar1: bar1 } = { foo1: "aaa", bar1: "bbb" }; // 真正被赋值的是等号左边后者foo1和bar1
//          对应1       对应2             对应1         对应2  即 foo1=aaa  bar1=bbb
/**
 * 对象解构赋值的 坑！！
 * 解构赋值的变量先用var/let/const声明了，再直接进行解构，就会报错
 * 解决方法：在解构赋值表达式外用小括号包起来
 */

/*
var ac;
{ac} = {ac:'uoo'};
*/
    // 改为：
var ac;
({ac} = {ac:'uoo'});
console.log(ac)  // uoo


/**
 * 对象解构赋值的应用 -- 提取json数据
 */
var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
  };
  
let { id, status, data } = jsonData;
console.log(id, status, data)  // 42 , "OK" , [867, 5309]








/**
 * 3、字符串的解构赋值
 */

 const [h,i,j,k,l] = 'Young';
 console.log(h,i,j,k,l)  // Y o u n g

