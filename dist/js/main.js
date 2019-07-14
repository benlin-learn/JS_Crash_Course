// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');
// --------------------------------------------------
// var,          let, const
// global scope, have a block-level scope

// let : can reassign values
// let age = 30;
// age = 31;
// console.log(age);

// const age2 = 30;
// age2 = 31;
// console.log(age2);

// --------------------------------------------------

// String, Number, Boolean, null, undefined

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);

// --------------------------------------------------

// Concatenation

// const name = 'John';
// const age = 30;
// console.log('My name is name and I am age');console.log('My name is '+ name + ' and I am '+age);
// // Template String
// console.log(`My name is ${name} and I am ${age}`);

// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);



// const s = 'Hello World';
// const s2 = 'technology, computers, it, code';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''));
// console.log(s.split(' '));
// console.log(s.split(', '));

// --------------------------------------------------

// Arrays - variables that hold multiple values

// const numbers = new Array(1, 2, 3, 4, 5);
// const fruits = ['apples', 'oranges', 'pears', 10,true];

// console.log(numbers);
// fruits[5] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');

// fruits.pop();

// console.log(Array.isArray(fruits));
// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('oranges'));

// console.log(fruits);

// --------------------------------------------------
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// };
// console.log(person);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const {firstName, lastName, address:{city}} = person;

// console.log(firstName);

// console.log(city);


// person.email = 'john@gmail.com';
// console.log(person);

// --------------------------------------------------
// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];

// console.log(todos);
// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

/*For loop */
// for(let i = 0; i <= 10; i++){
//     console.log(`For Loop Number: ${i}`);
// }

/*While */
// let i = 0;
// while(i < 10){
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

/*regular for */

// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }

/*for of */
// for(let todo of todos){
//     console.log(todo);
//     console.log(todo.text);
// }

/*forEach, map, filter*/ 

// forEach

// todos.forEach(function(todo){
//     console.log(todo.text);
// });

// map

// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);

// filter

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);

// mix map & filter
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// });
// console.log(todoCompleted);
// --------------------------------------------------

/*If  */
// const x = 20;
// if(x === 10){
//     console.log('x is 10');
// }else if( x > 10){
//     console.log('x is greater than 10');
// }else{
//     console.log('x is less than 10');
// }
// -----------------
// const x = 4;
// const y = 11;
// if(x > 5 || y > 10){
//     console.log('x is more than 5 or y is more than 10');
// }
// -----------------
// const x = 10;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

/*switch */
// -----------------
// --------------------------------------------------
// function addNums(num1 = 1, num2 = 1){
//     return num1 + num2;
// }
// console.log(addNums(5, 5));
// console.log(addNums());

// => function

// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums(5, 5));


