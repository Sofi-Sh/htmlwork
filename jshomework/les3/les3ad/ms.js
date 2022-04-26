// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
// let arr= [];
// let val=0;
// for (let i = 0; i < 10; i++) {
//     val+=2;
//     arr[i]=val;
// }
// console.log(arr);
//
// let arr=[];
// for (let i = 0,y=0; i < 100; i++,y+=2) {
//    arr[i]= y;
//
// }
// console.log(arr);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
// let i =0;
// while (i<array.length){
//     let arrayEl = array[i];
//     document.write(`<div>${arrayEl}</div>`)
//     i++;
// }
// 2. перебрати його циклом for
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement);
// }
//
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let  i = 0;
// while (i<array.length){
// if(i%2!==0){
//     console.log(array[i]);
// }
//     i++;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < array.length; i++) {
//     if (i%2!==0){
//         console.log(array[i]);
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i<array.length){
//     if ((array[i] % 2) === 0){
//         console.log(array[i]);
//     }
//     i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < array.length; i++) {
//     if (array[i]%2===0){
//         console.log(array[i]);
//     }
//
// }
//
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < array.length; i++) {
//     if ((array[i]%3)===0){
// array[i]='okten';
//
//     }
// }
// console.log(array);
//
// 8. вивести масив в зворотньому порядку.
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }

