// Function Declaration
function areaRectangle(width, height){
    return width * height
}
let S = areaRectangle (5, 10)
console.log("Площа прямокутника " + S)

// Function Expression
let areaRectangle = function (width, height){
    return width * height
}
console.log("Площа прямокутника " + areaRectangle (5, 10))

//Arrow Function
let areaRectangle = (width, height) => width * height
console.log("Площа прямокутника " + areaRectangle (5, 10))