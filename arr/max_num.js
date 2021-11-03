let arr = [2,5,7,9]
// 双指针
 function  max_num(arr){
    let j =0;
    let maxnum =0
    for (let i = 0;i<arr.length;i++){
      if(arr[j]<arr[i]){
          maxnum =  maxnum < arr[i]-arr[j] ?  arr[i]-arr[j] : maxnum
      }else{
          j = i
      }
    }
     return maxnum

 }
console.log(max_num(arr),22)