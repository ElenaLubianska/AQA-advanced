const number = 5;
console.log("Таблиця множення з використанням for")
for(let i = 1; i <= 10; i++){
    console.log(number + " * " + i + " = " + number * i) 
}

console.log("Таблиця множення з використанням while")
let i = 1
while(i <= 10){
    console.log(number + " * " + i + " = " + number * i)
    i++
}