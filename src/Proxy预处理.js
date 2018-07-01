/**
 * Proxy预处理
 * 在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
 * new Proxy(target,handler) ,new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。
 */
let obj2 = {
    add:function(val){
        return +val + 100
    },
    name:'Youngwell',
    age:28,
    skill:'web'
}
let pro = new Proxy(
    obj2,
    {
        // 获取对象的属性时的预处理方法(可以对取值时做任何操作了)
        get:function(target,key,props){
            console.log('get');
            //console.log(target); // 目标对象
            //console.log(key); // 获取属性时的属性key  name
            return target[key];  // 必须要return才能取到值
            // console.log(target.add('100'))
        },
        // 修改对象的属性时的预处理方法(可以对取值时做任何操作了)
        set:function(target,key,val,oldVal){
            console.log('set');
            if(key == 'name'){
               throw new Error('不能修改name属性')
            }
            target[key] = val // 这一步不可缺，不然set不成功
        },
        apply(target,ctx,args){
            console.log('apply');
            console.log(target)
            console.log(ctx)
            console.log(args)
        }
    })
console.log(obj2.name) // 注意：直接对目标对象操作，不会触发pro的预处理函数(该例不会触发get预处理方法)
console.log(pro.name)  // Youngwell 该例操作的是pro对象，可以触发预处理get函数
pro.age = 27
console.log(pro.age)
console.log(pro.skill)
pro.skill = '全栈';
console.log(pro.skill)


let target = function(val){
    return +val + 100 
}
let handler = {
    apply(target,ctx,args){
        console.log('apply');
        console.log(target); // 被预处理的函数本体
        console.log(ctx); 
        console.log(args); // 传入的参数组成的数组
        return Reflect.apply(...arguments)
    }
}
let proxy = new Proxy(target,handler)
proxy(10)
console.log(proxy)


// let proxy = new Proxy({},{
//     get:function(target,key){
//         console.log(target)
//         console.log(key);
//         return 10
//     }
// })

// console.log(proxy.name)
// console.log(proxy.age)
// console.log(proxy.yww)