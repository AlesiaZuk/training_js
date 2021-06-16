console.log("variables")

// переменные, объявление и инициализация
// VAR
console.log("Имя:", firstName) //Имя: undefined
var firstName = "Алеся"
console.log("Имя:", firstName)

var firstNameA
firstNameA = "Виктория"
console.log("Имя старшей дочки:", firstNameA)
firstNameA = "Вероника"
console.log("Имя младшей дочки:", firstNameA)


//LET
// console.log("Фамилия:", lastName) //module-1.js:6 Uncaught ReferenceError: Cannot access 'lastName' before initialization
let lastName = "Жук"
console.log("Фамилия:", lastName)

let lastNameA
lastNameA = "Жук"
console.log("Фамилия Виктории:", lastNameA)
lastNameA = "Жук"
console.log("Фамилия Вероники:", lastNameA)


//CONST
// console.log("Возраст:", age) //module-1.js:11 Uncaught ReferenceError: Cannot access 'age' before initializationat
const age = 38
console.log("Возраст:", age)

// const ageA //Uncaught SyntaxError: Missing initializer in const declaration

