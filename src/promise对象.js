/**
 * Promise对象(一旦新建它就会立即执行)
 * new Promise(function(resolve,reject){}).then(function1(){},function2(){})
 * Promise接收一个函数参数，该函数接收resolve函数和reject函数，成功时手动执行resolve函数，失败时手动执行reject函数，当resolve函数执行时，then函数的第一个函数function1执行，当reject函数执行时，then函数的第二个函数function2执行
 */

// 实现一个注册验证功能

let state = 1;

function hasEmpty(resolve,reject){
    if(state == 1){
        console.log('1、必填项都已经填好了');
        resolve('必填项--完成')
    }else{
        reject('必填项--错误')
    }
}

function phone(resolve,reject){
    if(state == 1){
        console.log('2、手机号码格式正确');
        resolve('手机号码格式--完成')
    }else{
        reject('手机号码格式--错误')
    }
}

function valid(resolve,reject){
    if(state == 1){
        console.log('3、验证码正确');
        resolve('验证码--完成')
    }else{
        reject('验证码--错误')
    }
}

function cunzai(resolve,reject){
    if(state == 1){
        console.log('4、用户名可以使用');
        resolve('用户名--完成')
    }else{
        reject('用户名--错误')
    }
}
new Promise(hasEmpty).then((val)=>{
    console.log(val);
    return new Promise(phone) // 必填项判定成功后执行手机号验证判定Promise
},function(error){
    console.log(error)
}).then((val)=>{
    console.log(val);
    return new Promise(valid);
}).then((val)=>{
    console.log(val);
    return new Promise(cunzai);
}).then((val)=>{
    console.log(val);
})



/**
 * 执行resolve表示成功了，会触发then函数
 * 执行reject表示失败了，会触发catch函数
 * @param {*} ms 
 */
function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(reject, ms, 'done33');
    });
  }
  timeout(1000).then((value) => {
    console.log(value); // done33
  }).catch((val)=>{console.log(val)});


  function fn(){
      var args = Array.prototype.slice.apply(arguments)
      console.log(...args) // fdsaf tretrettyt
  }
  setTimeout(fn,3000,'fdsaf','tretrettyt') // setTimeout的第二个参数后的所有参数都是传给fn函数的参数


  let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
    // reject()
  });
  
  promise.then(function() {
    console.log('resolved.');
  },function(){
      console.log('error')
  });
  
  console.log('Hi!');

  // 异步加载图片
  function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
      const image = new Image();
  
      image.onload = function() {
        resolve('image加载完毕');
      };
  
      image.onerror = function() {
        reject(new Error('Could not load image at ' + url));
      };
  
      image.src = url;
      image.style.width = '300px';
      document.getElementsByTagName('body')[0].appendChild(image)
    });
  }
  loadImageAsync('https://puui.qpic.cn/vupload/0/20180620_1529552134652.jpeg/0').then((val)=>{
      console.log(val) // image加载完毕
  })



    // p1是一个 Promise，3 秒之后变为rejected。p2的状态在 1 秒之后改变，resolve方法返回的是p1。由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）。又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。
  const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
  })
  
  const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
  })
  
  p2
  .then(result => console.log(result)) // 不执行
  .catch(error => console.log(error))  // 输出：Error: fail

    // 一旦新建它就会立即执行
  new Promise(function(resolve,reject){
      console.log('promise会立即执行')
  })