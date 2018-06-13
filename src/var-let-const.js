// var a = 1;  // var是全局声明
{
    let a = "yww"  // let是区块声明且在同一个作用域中已经使用var或者let声明的变量了，就不能再使用let声明了，否则报错  (有大括号{}就是区块)
}
let a = 'Youngwell'
console.log(a)


    /**
     * for循环案例中用var声明的变量i污染到循环体外部了
     */
for(var i = 0;i<5;i++){
    console.log('var循环体内' + i) // 0 , 1 ,2 ,3 ,4
}
console.log('循环体外' + i) // 5 用var在for循环中声明的i已经污染到循环外部了


    /**
     * for循环案例中用let声明的变量i不会污染到循环体外部
     */
for(let i = 0;i<3;i++){
    console.log('let循环体内' + i) // 0 ,1 ,2
}
console.log('循环体外' + i) // 5 用let在for循环中声明的i不会污染到循环外部，所以这里的i还是等于上例for循环中的i=>5，而不是3






const y = "Youngwell";  // 常量const声明之后就不能更改y了
// const y = "yww"   // 报错
