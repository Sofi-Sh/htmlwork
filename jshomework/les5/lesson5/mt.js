// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let nums= [ 10,40,20,30];
// let aryfm=(array)=> {
// let sum1 = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum1 += array[i];
//     }
//     return result = sum1/array.length;
// }
//
// console.log(aryfm(nums));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let minmax=(...arg)=>{
//     console.log(arg);
// let min=arg[0];
// let max = arg[0];
//     for (const item of arg) {
//         if (item<min){
//             min=item
//         }
//         if (item>max){
//             max=item
//         }
//     }
//     console.log(max);
//     return min;
// }
// minmax(1,3,6,9,8,88);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// let random1=()=> {
//     let arr= [];
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.round(Math.random()*100))
//     }
// return arr;
// }
// console.log(random1());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randoms=(limit)=> {
//     let array=[];
//     for (let i = 0; i < limit; i++) {
//         array.push(Math.round(Math.random()*limit))
//     }
//     return array;
// }
// console.log(randoms(100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let nums = [1,2,3,4,677,876];
// let mas=(arr)=> {
// let num2=[];
//     for (let i = arr.length - 1,j=0; i >= 0; i--,j++) {
//         num2[j]=arr[i];
//     }
//     return num2;
// }
// console.log(mas(nums));
//



//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let sP=(a,b)=> a*b;
// console.log(sP(10,30));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let sK=(r)=>Math.PI * Math.pow(r,2);
// console.log(sK(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let sTs=(h,r)=> Math.PI *h *r*2;
// console.log(sTs(10,10));
//

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [123, 'hello', 'dfghj',{name:'vasya', age:34}]
// let iterator=(arr)=> {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// iterator(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraf=(a)=> document.write(`<p>${a}</p>`);
// paragraf('Sofiia');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list= (text)=> {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// list('Sofiia D');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list2= (size,a)=> {
//     document.write(`<ul>`);
//     for (let i = 0; i <size; i++) {
//         document.write(`<li>${a}- ${i+1}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list2(3,'hello');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [21,3457,true, false, 'hello', 6<7, 'day', 'weekend'];
// let primitive=(arr)=> {
//     for (const arrElement of arr) {
//         document.write(`<ul><li>${arrElement}</li></ul>`);
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
// let iterator1=(arr)=> {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id}-${arrElement.name} ${arrElement.age}</div>`);
//     }}
// iterator1(users);

// - створити функцію яка повертає найменьше число з масиву
// let nums= [ 0, -11, 2345, 245, 100, -1, 10, 234567, 456];
// let foo=(array)=> {
//     let min = array[0];
//     for (const item of array) {
//         if (item<min){
//             min=item;
//         }
//     }
//     return min;
// }
// console.log(foo(nums));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let nums= [10,20,30,40,100,50];
// let suma=(arr) =>{
//     let result = 0;
//     for (const arrElement of arr) {
//         result= result+ arrElement;
//     }
//    return result;
// }
// console.log(suma(nums));

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let arr=[
//     {
//       age:22
//     },
//     {
//        age:33
//     }
// ];
// let change=(array)=>{
//     let temp = array[0];
//     array[0]=array[1];
//     array[1]= temp;
//     return array;
// }
// console.log(change(arr));
