str = prompt("Введите строку");
function reverse(str){
    return str.split("").reverse().join("");
}
console.log(reverse(str));