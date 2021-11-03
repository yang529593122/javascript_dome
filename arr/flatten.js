var arr =[1, 2, [3], [1, 2, 3, [4, [2, 3, 4]]]];

//第一种

// function flatten(arr) {
//     var result = [];
//     for (let i = 0 , len = arr.length; i < len; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flatten(arr[i]))
//         }
//         else {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// 第二种
// function flatten(arr) {
//     while (arr.some(item => Array.isArray(item))) {
//         arr = [].concat(...arr);
//     }
//     return arr;
// }


// 第三种
function flatten(arr) {
    return arr.reduce((res,next) =>{
        return res.concat(Array.isArray(next)? flatten(next) : next);
    },[]);
}


console.log(flatten(arr))
