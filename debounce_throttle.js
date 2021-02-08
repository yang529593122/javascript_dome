

// 防抖 简易版
function SimpleDebounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}
// let submit_btn=document.getElementById('submit_btn')
// submit_btn.addEventListener('click',SimpleDebounce(()=>{
//     console.log(111)
// },2000))

// 有时希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。
function immediatelyDebounce(func, wait, immediate) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        const callNow = !timeout;
        timeout = setTimeout(function () {
          timeout = null;
        }, wait)
        if (callNow) func.apply(context, args)
      } else {
        timeout = setTimeout(function () {
          func.apply(context, args)
        }, wait);
      }
    }
  }

// let submit_btn=document.getElementById('submit_btn')
// submit_btn.addEventListener('click',immediatelyDebounce((val)=>{
//     console.log(val)
// },2000,true))


// 节流    
// 使用时间戳
function timeStampThrottle(func, wait) {
    let context, args;
    let previous = 0;
    return function () {
      let now = +new Date();
      context = this;
      args = arguments;
      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    }
}
// 定时器版本
function timerThrottle(func, wait) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      if (!timeout) {
        timeout = setTimeout(function () {
          timeout = null;
          func.apply(context, args)
        }, wait)
      }
  
    }
  }
 
window.addEventListener('resize',timeStampThrottle(()=>{
    console.log(2)
},2000))