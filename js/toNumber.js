//==TO NUMBER==
//ЛЮБОЕ СТРОЧНОЕ ЗНАЧЕНИЕ К ЧИСЛУ

//1 способ (конструктор Number())
let value = "Алеся Жук";
let toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber )
console.log(`Тип данных ${value}, через конструктор Number()`, typeof toNumber )

// 2 способ (унарный +)
toNumber = + value
console.log(`${value}, через унарный +:`, toNumber)
console.log(`Тип данных ${value}, через унарный +:`, typeof toNumber)


//СТРОЧНОЕ ЧИСЛО К ЧИСЛУ
//1 способ (конструктор Number())
value = "1983";
toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber )
console.log(`Тип данных ${value}, через конструктор Number()`, typeof toNumber )

// 2 способ (унарный +)
toNumber = + value
console.log(`${value}, через унарный +:`, toNumber)
console.log(`Тип данных ${value}, через унарный +:`, typeof toNumber)


//ПУСТАЯ СТРОКА К ЧИСЛУ
//1 способ (конструктор Number())
value = "";
toNumber = Number(value);
console.log(`Пустая строка ${value}, через конструктор Number()`, toNumber )
console.log(`Тип данных пустой строки ${value}, через конструктор Number()`, typeof toNumber )

// 2 способ (унарный +)
toNumber = + value
console.log(`Пустая строка ${value}, через унарный +:`, toNumber)
console.log(`Тип данных пустой строки ${value}, через унарный +:`, typeof toNumber)


//СТРОКА СПРОБЕЛОМ К ЧИСЛУ
//1 способ (конструктор Number())
value = "   ";
toNumber = Number(value);
console.log(`Строка с пробелом ${value}, через конструктор Number()`, toNumber )
console.log(`Тип данных строки с пробелом ${value}, через конструктор Number()`, typeof toNumber )

// 2 способ (унарный +)
toNumber = + value
console.log(`Строка с пробелом ${value}, через унарный +:`, toNumber)
console.log(`Тип данных строки с пробелом ${value}, через унарный +:`, typeof toNumber)



//БЕСКОНЕЧНОСТЬ К ЧИСЛУ
//1 способ (конструктор Number())
value = Infinity;
toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber )
console.log(`Тип данных ${value}, через конструктор Number()`, typeof toNumber )

// 2 способ (унарный +)
toNumber = + value
console.log(`${value}, через унарный +:`, toNumber)
console.log(`Тип данных ${value}, через унарный +:`, typeof toNumber)

// undefined К ЧИСЛУ
//1 способ (конструктор Number())
value = undefined;
toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber )
console.log(`Тип данных ${value}, через конструктор Number()`, typeof toNumber )

// 2 способ (унарный +)
toNumber = + value
console.log(`${value}, через унарный +:`, toNumber)
console.log(`Тип данных ${value}, через унарный +:`, typeof toNumber)


//Булевое К ЧИСЛУ
//1 способ (конструктор Number())
value = true;
toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber )
console.log(`Тип данных ${value}, через конструктор Number()`, typeof toNumber )

// 2 способ (унарный +)
toNumber = + value
console.log(`${value}, через унарный +:`, toNumber)
console.log(`Тип данных ${value}, через унарный +:`, typeof toNumber)


//1 способ (конструктор Number())
value = false;
toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber )
console.log(`Тип данных ${value}, через конструктор Number()`, typeof toNumber )

// 2 способ (унарный +)
toNumber = + value
console.log(`${value}, через унарный +:`, toNumber)
console.log(`Тип данных ${value}, через унарный +:`, typeof toNumber)


//NULL К ЧИСЛУ
//1 способ (конструктор Number())
value = null;
toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber )
console.log(`Тип данных ${value}, через конструктор Number()`, typeof toNumber )

// 2 способ (унарный +)
toNumber = + value
console.log(`${value}, через унарный +:`, toNumber)
console.log(`Тип данных ${value}, через унарный +:`, typeof toNumber)

