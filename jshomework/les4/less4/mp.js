// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function sP(a,b) {
//     let res= a*b;
//     return res;
// }
// sP(10,30);
// console.log(sP(10,30));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function sK(r){
//     let res= Math.PI * Math.pow(r,2);
// return res;
// }
// sK(5);
// console.log(sK(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function sTs(h,r) {
//     let res= 2* Math.PI *h *r;
// return res;
// }
// console.log(sTs(10,10));
//

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [123, 'hello', 'dfghj',{name:'vasya', age:34}]
// function iterator(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// iterator(array);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf(a) {
//     document.write(`<p>${a}</p>`);
// }
// paragraf('Sofiia');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(text) {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// list('Sofiia D');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list2(size,a) {
//     document.write(`<ul>`);
//     for (let i = 0; i <size; i++) {
//         document.write(`<li>${a}- ${i+1}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list2(3,'hello');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [21,3457,true, false, 'hello', 6<7, 'day', 'weekend'];
// function primitive(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement}</div>`);
//     }
// }
// primitive(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let users = [
//     {id:1, name: 'Sofiia', age: 24 },
//     {id:2, name: 'Vasya', age: 32 },
//     {id:3, name: 'Irina', age: 43 },
//     {id:4, name: 'Petro', age: 44 },
//     {id:5, name: 'Dmytro', age: 55 },
// ];
// function iterator1(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id}-${arrElement.name} ${arrElement.age}</div>`);
//     }}
// iterator1(users);

// - створити функцію яка повертає найменше число з масиву
// let nums= [ 0, -11, 2345, 245, 100, -1, 10, 234567, 456];
// function foo(array) {
//     let min = array[0];
//     for (const item of array) {
//         if (item<min){
//             min=item;
//         }
//     }
//     return min;
// }
//
// console.log(foo(nums));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let nums= [10,20,30,40,100,50];
// function suma(arr) {
//     let result = 0;
//     for (const arrElement of arr) {
//         result= result+ arrElement;
//     }
//    return result;
// }
// console.log(suma(nums));