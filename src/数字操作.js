
    /**
     * 1、
     * isFinite是否有限 
     * 只有字符串、undefined、NaN为false，其他的全为true
     *  全局函数
     */
var a = 10/3;
console.log(isFinite(a))
console.log(isFinite('fdsf'))
console.log(isFinite(undefined))
console.log(isFinite(NaN))


    /**
     * 2、
     * isNaN 是否是NaN
     * 全局函数
     */
console.log(isNaN(undefined)) // true
console.log(isNaN('ret'))  // true
console.log(isNaN(NaN)) // true

console.log(isNaN(null))  // false
console.log(isNaN(100))    // false



    /**
     * 3、
     * 是否是整数 
     * ES6 在Number对象中新增的
     * 不是全局函数
     */
var b = 10.45;
console.log(Number.isInteger(b)) //false
console.log(! Number.isInteger(b)) // 取反就是判断是否是浮点数true






    /**
     * 4、
     * 最大安全整数和最小安全整数
     * 代码中的整数不能超过最大也不能小于最小
     * 解释：超过这个范围，有的整数是无法精确表示的，只能round到与它相近的浮点数（说到底就是科学计数法）表示，这种情况下叫做不安全整数。
     */
let max_safe = Math.pow(2,53) - 1; // es5 最大安全整数不能超过 2的53次方减1
console.log(max_safe)

let min_safe = - (Math.pow(2,53) - 1); // es5 最小安全整数不能超过 负 2的53次方减1
console.log(min_safe)

    // es6 直接把最大和最小放入一个常量中
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

    /** 
     * 判断是否是安全整数 isSafeInteger
     * 如果不是，就需要将其转为 字符串 储存
     */
let beyong = Math.pow(2,53) + 10;
console.log(Number.isSafeInteger(beyong)) // false