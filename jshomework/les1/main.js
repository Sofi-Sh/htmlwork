// - Створити змінні. Присвоїти кожному з них значення: 
//     'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//

// let a1 = 'hello';
// let a2 = 'owu';
// let a3 = 'com';
// let a4 = 'ua';
// let a5 = 1;
// let a6 = 10;
// let a7 = -999;
// let a8 = 123;
// let a9 = 3.14;
// let a10 = 2.7;
// let a11 = 16;
// let a12 = true;
// let a13 = false;

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);
// console.log(a11);
// console.log(a12);
// console.log(a13);

// alert(a1);
// alert(a2);
// alert(a3);
// alert(a4);
// alert(a5);
// alert(a6);
// alert(a7);
// alert(a8);
// alert(a9);
// alert(a10);
// alert(a11);
// alert(a12);
// alert(a13);

// document.write(a1);
// document.write(a2);
// document.write(a3);
// document.write(a4);
// document.write(a5);
// document.write(a6);
// document.write(a7);
// document.write(a8);
// document.write(a9);
// document.write(a10);
// document.write(a11);
// document.write(a12);
// document.write(a13);


// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)

// let book1 ={
//     title: 'Python',
//     pages: 325,
//     genre: 'python',
// };
// console.log(book1);


// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)

// let book2 ={
//     title: 'Python',
//     pages: 325,
//     genre: 'python',
//     authors: [
//         'Mattes',
//         'Briggs',
//         'Djons'
//     ]
// };
// console.log(book2);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//     З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

    // let firstName ='Sofiia';
    // let middleName = 'Dmytrivna';
    // let lastName = 'Fendyk';

    // let person = firstName + ' ' + middleName+ ' '+ lastName + '.';
    // console.log(person);
    // let person2 = `${firstName} ${middleName} ${lastName}`;
    // console.log(person2);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// та вивести в консоль

// let firstName = prompt('enter your name');
// let middleName = prompt('enter your middle name');
// let age = prompt('enter your age');
//
// // console.log(firstName);
// // console.log(middleName);
// // console.log(age);
//
// let person = firstName+ ' '+ middleName+ ' '+ age + '.'
// console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100 let b = '100'; let c = true;

// let a =100;
// let b = '100';
// let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. ' +
// 'Вивести кожну книгу як окремий об'єкт

// let books = [
//     {title:'Queen', pages:1000, genre: 'drama', authors:['Mattes', 'Briggs','Djons']},
//     {title:'Girls', pages:325, genre: 'comedy', authors:['johnson', 'Bring','ABHDK']},
//     {title:'School', pages:309, genre: 'comedy', authors:['Ms', 'Bs','Djhshjks']},
//     {title:'Princes', pages:145, genre: 'drama', authors:['Mate', 'Brs','Dons']},
// ];
// console.log(books[0]);
// console.log(books[1]);
// console.log(books[2]);
// console.log(books[3]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;



// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
//
//
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// let bool = 5<6;
// let bool1 = 5>=6;
// let bool2 = 5===6;
// let bool3= 10===10;
// let bool4 = '10'==='10';
// let bool5=10!==10;
// let bool6= 10==='10';
// let bool7= 10>=10;
// let bool8= 123>123;
// let bool9= 123===123;
//
//     console.log(bool);
//     console.log(bool1);
//     console.log(bool2);
//     console.log(bool3);
//     console.log(bool4);
//     console.log(bool5);
//     console.log(bool6);
//     console.log(bool7);
//     console.log(bool8);
//     console.log(bool9);