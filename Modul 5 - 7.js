let arr = [0, 7, 14, 21, 28, 35, 35, 'fdf', 'fd', 0, 25,5,11];
let j=0;
let k=0;
let n=0;
let d=0;
for (let i=0;i<arr.length;i++){
  if (arr[i]=== 0){
    n++;
  }
  else if (arr[i]% 2 ===0) {
   j++}
   else if (arr[i]% 1 ===0){
   k++
   }
   else {
    d++
   }
}
  console.log("Четных элементов:", j);
  console.log("Нечетных элементов:",k);
  console.log("Количество нулей:", n); 
  console.log("Других элементов:", d); 