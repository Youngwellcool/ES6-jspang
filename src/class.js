/**
 * Class 类
 * 注意：class中各个方法之间不能像object一样用逗号隔开
 * 要获取方法的值，需要在方法中return 值
 * 可以像object一样用 this. 获取class中的其他的方法和属性
 * 在constructor方法中存放class的参数
 */
class Coder {
    name(val){
        console.log(val);
        return val;
    }
    skill(val){
        console.log(this.name('Youngwell') + ': skill-' + val + this.a);
        return val
    }
    constructor(a,b){ //存放class的参数
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a + this.b;
    }
}

let yww = new Coder;
console.log(yww) // Coder {a: undefined, b: undefined}
let y = yww.name('Youngwell') // Youngwell
console.log(y)  // Youngwell
let s = yww.skill('web') // Youngwell: skill-web
console.log(s)  // web


let arg = new Coder(10,5); // 实例化类时传参数 Coder {a: 10, b: 5}
console.log(arg.add())  // 15


/**
 * class的继承
 * 类 Htmler 继承 类 Coder
 */
class Htmler extends Coder{

}
let html = new Htmler('aaa','bbb');  // Htmler {a: "aaa", b: "bbb"}
html.name('yww')  // yww  html也拥有了Coder类中的方法了
console.log(html.a) // aaa  html也拥有了Coder类中的属性了
console.log(html.b)  // bbb