// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function num(x,y,z) {
// if (x<y&&x<z){
//     return x;
// }
// else if (y<x&&y<z){
//     return y;
//     }
// else if (z<x&&z<y) {
//     return z;
//     }
// }
//
// console.log(num(16,10,11));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function nums(num1,num2,num3) {
//     if (num1>num2 && num1>num3){
//         return num1;
//     }
//     else if (num2>num1 && num2>num3){
//         return num2;
//     }
//     else if (num3>num1 && num3>num2) {
//         return num3;
//     }
// }
//
// console.log(nums(16,34,23));

// - створити функцію яка повертає найбільше число з масиву
// let nums= [ 0, -11, 2345, 245, 100, -1, 10, 234567, 456];
// function numb(arr) {
//     let max = arr[0];
//     for (const item of arr) {
//         if (item>max){
//             max = item;
//         }
//     }
//     return max;
// }
// console.log(numb(nums));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let nums= [ 10,40,20,30];
// function aryfm(array) {
// let sum1 = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum1 += array[i];
//     }
//     return result = sum1/array.length;
// }
//
// console.log(aryfm(nums));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let nums= [ 0, -11, 245, 100, -1, 10, 456];
// function minimal (arr) {
//     let min = arr[0];
//     let max= arr[0];
//     for (const item of arr) {
//         if (item<min){
//             min = item;
//
//         }
//          if (item>max&& item>min){
//             max=item;
//             console.log(`maximal- ${+max}`);
//     }
//     }
//     return min;
// }
// console.log(minimal(nums));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// function random1() {
//     let arr= [];
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.round(Math.random()*100))
//     }
// return arr;
// }
// console.log(random1());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
// function randoms(limit) {
//     let array=[];
//     for (let i = 0; i < limit; i++) {
//         array.push(Math.round(Math.random()*limit))
//     }
//     return array;
// }
// console.log(randoms(100));

// ?- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// ?
//     ?
//         ?
// let nums = [1,2,3,4,677,876]
// function mas(arr) {
//
//     for (let i = arr.length - 1; i >= 0; i--) {
//
//     }
// }
// console.log(mas(nums));
//

// - ?створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//?
// ?
// function arg(a,b) {
//     for (const aElement of arr) {
//         if (a){
//             return a;
//         }
//         if (a&b){
//             return a+b;
//
//         }
//     }
// }


// - ?створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//

// let nums1= [1,2,3,4];
// let nums2=[2,3,4,5];
// function res(arr1,arr2) {


// -? Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let arr = [{name: 'Dima'}, {age: 13}, {model: 'Camry'}];
// function f(array) {
//     let res=[];
//     for (const item of array) {
//
//     }
//
//
// console.log(f(arr));

//
//     ?- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima'}, {age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let arr = [{name: 'Dima'}, {age: 13}, {model: 'Camry'}];
// function f(array) {
//     let res=[];
//     for (const item of array) {
//       res.push([`${item.name},${item.age},${item.model}`]) ;
//     }
//     return res;
// }
//
// console.log(f(arr));
