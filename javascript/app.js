// console.log("It's working!");
// function add(number1,number2) {
//     return number1 + number2
// }

// // Change Text

// function capitalize(text) {
//     return text.toUpperCase()
// }

// function changeText(text, changeFunction) {
//     return changeFunction(text)
// }

// var result = changeText('hello', capitalize)


// var dog = {
//     legs:4,
//     ears:2,
//     tail:1,
//     bark: function() {
//         console.log('bark')
//     }
// }

// console.log('The dog has this number of legs ', dog.legs)


// document.write('hi')
// document.body.bgColor = 'pink'

// var title = document.querySelector ('#main-title')
// title.innerHTML = 'new text'

// function click() {
//     document.body.bgColor = 'red'
// }
// button.addEventListener('click',click )

// alternative. Method chaining

// document
//     .querySelector('#button')
//     .addEventListener('click', 
//     function() {
//     console.log('clicked')
// })


// 1.Get HTML Elements

// const getElement(el) {
//     return document.querySelector(el)
// }

// You can make it into a function

var button = document.querySelector('#button')
var menu = document.querySelector('#menu')
var closedButton = document.querySelector('#close-button')

// 2.Define Actions
function openMenu() {
    menu.className = 'menu'
}

function closeMenu() {
    menu.className = 'menu closed'
}

// 3. Wire it all up

button.addEventListener('click', openMenu)
closedButton.addEventListener('click', closeMenu)
