// Старт скрипта
// console.log('Старт')

// Шаг 1. Во-первых, находим нужный элемент в HTML при помощи метода querySelector()
const btn1 = document.querySelector('.btn1')

// Шаг 2. Во-вторых, вешаем обработчик событий на найденный элемент при помощи метода addEventListener()

// Шаг 1 находим
btn1.addEventListener('click', function () {
  // Шаг 2 вешаем
	btn1.classList.toggle('blueviolet')
})

const btn2 = document.querySelector('.btn2')
btn2.addEventListener('click', function () { 
  btn2.classList.toggle('green')
})

const btn3 = document.querySelector('.btn3')
btn3.addEventListener('click', function () {	
	btn3.classList.toggle('black')
})



// Пример
// let toggle = false
// if (toggle === false) {
// 	btn3.classList.add('black')
// 	toggle = true
// } else { 
// 	btn3.classList.remove('black')
// 	toggle = false
// }




// function sum(a, b){
// 	return a + b
// }
// console.log( sum(60, 80) )




// Финиш чтения скрипта 
// console.log('ахмат сила') 
// console.log('Финиш')


// const person = {
//   firstName: "John",
//   lastName: "Smit",
//   age: 30,
//   isStudent: false,
// };



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))







