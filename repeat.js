console.log('重复')
// function repeat (func, times, wait) {
//     if (typeof func !== 'function') return;
//     if (times <= 0) return;
//     return function (value) {
//         let timesTmp = times
//         let interval = setInterval(function(){
//             func(value);
//             timesTmp--;
//             timesTmp === 0 && clearInterval(interval)
//         }, wait)
//     }
// }
function repeat (func, times, wait) {
    return function(...args){
        let i = 0;
        let _args = [...args]
    let handle = setInterval(() => {
        i += 1;
        if(i > times){
            clearInterval(handle);
            return;
        }
        func.apply(null, _args);
    },wait);
}
}
const repeatConsole = repeat((val)=>{
    console.log(val)
}, 4, 2000)
repeatConsole('helllwww')