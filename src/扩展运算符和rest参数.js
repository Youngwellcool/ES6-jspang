    // 1、数组的扩展运算符

/**
 * 扩展运算符
 * 将一个数组转为用逗号分隔的参数序列。
 */

var arr1 = [432,656,'sdg',6456];
console.log(...arr1)  // 432 656 "sdg" 6456

/**
 * 应用：函数传参
 */
function fn(...arg){
    console.log(arg) //[2,3,4]
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
    console.log(arg[3])  // 没有的值为undefined 不会报错
}
fn(2,3,4)

/**
 * 应用：一个数组赋值给另一个
 */

    // 问题 ：arr2和arr3都引用的是同一个内存空间，所以arr2和arr3任何一个变化了另一个就跟着变
var arr2 = [543,657,8768,98];
var arr3 = arr2;
console.log(arr3);   // [543,657,8768,98]
arr3.push(1000);
console.log(arr2)   // [543,657,8768,98,1000]  给arr3push导致arr2也跟着一起变
console.log(arr3)   // [543,657,8768,98,1000]


    // 解决
var arr4 = [543,76,99,908];
var arr5 = [...arr4];  // 使用扩展运算符 赋值 tips：扩展运算符操作的是数组内的元素而不是数组本身
console.log(arr5);
arr5.push(1000);
console.log(arr4)   // [543,76,99,908];  arr4就不会跟着arr5改变
console.log(arr5)   // [543, 76, 99, 908, 1000]





//  2、函数的 rest 参数

    /**
     * rest 参数 （形式为...变量名），用于获取函数的多余参数，
     * 这样就不需要使用arguments对象了。
     * rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
     * @param {*} values 是一个真实的数组，可以使用数组API，储存函数传入的参数
     */
function add(...values){
    console.log(values);  //[3, 4, 5]
    var sum = 0;
    for(let val of values){
        sum += val;
    }
    console.log(sum)    // 12
}
add(3,4,5)

    /**
     * rest参数 直接调用数组API，给传入函数的参数排序
     * 如果是用arguments,需要将其转为数组再使用sort排序
     */
function sortNum(...nums){
    console.log(nums.sort(function(a,b){
        return a-b
    }))
}    
sortNum(54,768,23,89)

/**
 * 注意：rest参数必须是最后一个参数，其后不能再有参数了
 */
// 报错
// function f(a, ...b, c) {  
//     console.log(b.length)
//  }
//  f(1,43,654,75,9)
log(45353454300)