// 重数字去重
// 第一种方法   利用set属性
function unique (arr) {
    return Array.from(new Set(arr))
}
// 第二种 for 嵌套
function unique(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}
// 第三种
function unique(arr) {
    let array =[];
    for(let i = 0; i < arr.length; i++) {
        if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
            array.push(arr[i]);
        }
    }
    return array
}
// 第四种 利用对象的属性 key
function unique(arr) {
    var obj = {};
    return arr.filter(function(item, index, arr){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
// 第五种
function unique(arr){
    return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
}


console.log(unique([1,2,3,2]))
