/**
 * 字符串操作
 */

    //  字符串模板(``)的使用--拼接字符串 字符串模板中可以加html元素
 let yww = '杨维维';
 let msg = `${yww}正在学习ES6杨维维<br>--<b>字符串模板</b>的使用`;
 document.write(msg)

    // 字符串模板(``)的使用--运算
 let a = 1;
 let b = 3;
 let result = `${a+b}`;
 document.write(result);


    // msg字符串中是否包含 yww
 console.log(msg.indexOf(yww) > -1)   // es5
 console.log(msg.includes(yww)) 

    // msg字符串中是否以 yww 开头
 console.log(msg.startsWith(yww))

    // msg字符串中是否以 yww 结尾
 console.log(msg.endsWith(yww))

    //复制 yww 10次
 console.log(yww.repeat(10))