let arr = [0, 7, 14, 21, 28, 35, 35,];
let newarr =[];
for (let i=0;i<arr.length;i++){
 for(let j=1+i; j<arr.length;j++){
 if (arr[i]===arr[j]){
newarr.push(arr[i]);
}
 }
}
 if (newarr.length===0){
     console.log("true");
   }
 else {
  console.log("false");
}