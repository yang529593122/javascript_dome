// 面向切面变成 AOP
// 面向切面编程 不切入原用逻辑
function say (who,world) {
    console.log(who + '吃饭了' + world)
}
Function.prototype.before = function (beforeFn){
    return (...arg)=>{
        beforeFn(...arg)
        this(...arg)
    }
}
Function.prototype.after = function (afterFn){
    return (...arg)=>{
        this(...arg)
        afterFn(...arg)
    }
}
let newFn = say.before((...arg)=>{
    console.log(arg + '吃饭之前')
})
let newAfterFn = say.after((...arg)=>{
    console.log(arg + '吃饭之后')
})

newFn('hello','world')

newAfterFn('hello','world')