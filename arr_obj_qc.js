/**
 * Time: 2021/9/14.
 * Author: Yang PengFei
 */

const person = [
    {
        id: 1,
        name: "赵一"
    },
    {
        id: 2,
        name: "陈二"
    },
    {
        id: 3,
        name: "张三"
    },
    {
        id: 4,
        name: "李四"
    },
    {
        id: 5,
        name: "王五"
    },
    {
        id: 6,
        name: "张三"
    },
    {
        id: 7,
        name: "王五"
    },
];

function arrQcObject(arr,itemName){
    let obj = {};
    arr = arr.reduce((current, next) => {
        obj[next[itemName]] ? '' : (obj[next[itemName]] = true && current.push(next));
        return current;
    }, []);
    return arr;
}

console.log(arrQcObject(person,'name'))
