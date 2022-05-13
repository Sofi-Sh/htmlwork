// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)/
// / - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// //
// class User {
//     constructor (id,name,surname,email,phone){
//     this.id = id;
//     this.name = name;
//     this.surname=surname;
//     this.email= email;
//     this.phone= phone;
// }
// }
// let user1= new User(1,'Sofiia','Fendyk','gfghj@hjk','098733356');
// let user2= new User(2,'Ira','lvivska','asdfgh@gmail.com','102938476');
// let user3= new User(3,'Vasya','Kyiv','kyivh@gmail.com','100987676');
// let user4= new User(4,'Ania','Kyivska','kyivska@gmail.com','100998906');
// let user5= new User(5,'Lesia','Morsska','leska@gmail.com','112345566');
// let user6= new User(6,'Tetiana','Shevchenko','shevat@gmail.com','199987665');
// let user7= new User(7,'Pavlo','Gnatenko','gnat@gmail.com','987653456');
// let user8= new User(8,'Petro','Ignatenko','ignaten@gmail.com','912345676');
// let user9= new User(9,'Olga','Petrenko','opetrenko@gmail.com','890987806');
// let user10= new User(10,'Zlata','Zlatenko','zlatenko@gmail.com','825688774');
//
// function arrayUser(...user) {
//     let arr =[];
//     for (const userE of user) {
//         arr.push(userE);
//     }
//     return arr;
// }
// console.log(arrayUser(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10));
// let users = arrayUser(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
// console.log(users);

//
// function User (id,name,surname,email,phone){
//     this.id = id;
//     this.name = name;
//     this.surname=surname;
//     this.email= email;
//     this.phone= phone;
// }
// let array=[];
// let user1= new User(1,'Sofiia','Fendyk','gfghj@hjk','098733356');
// let user2= new User(2,'Ira','lvivska','asdfgh@gmail.com','102938476');
// let user3= new User(3,'Vasya','Kyiv','kyivh@gmail.com','100987676');
// let user4= new User(4,'Ania','Kyivska','kyivska@gmail.com','100998906');
// let user5= new User(5,'Lesia','Morsska','leska@gmail.com','112345566');
// let user6= new User(6,'Tetiana','Shevchenko','shevat@gmail.com','199987665');
// let user7= new User(7,'Pavlo','Gnatenko','gnat@gmail.com','987653456');
// let user8= new User(8,'Petro','Ignatenko','ignaten@gmail.com','912345676');
// let user9= new User(9,'Olga','Petrenko','opetrenko@gmail.com','890987806');
// let user10= new User(10,'Zlata','Zlatenko','zlatenko@gmail.com','825688774');
// array=[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
// let users= array.filter(value => value.id%2===0);
// console.log(users);
// let userS= array.sort((a,b)=>a.id-b.id);
// console.log(userS);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class User {
//     constructor (id,name,surname,email,phone,order){
//     this.id = id;
//     this.name = name;
//     this.surname=surname;
//     this.email= email;
//     this.phone= phone;
//     this.order=order;
// }}
// let arr=[];
// let user1= new User(1,'Sofiia','Fendyk','gfghj@hjk','098733356',['bread','milk','butter']);
// let user2= new User(2,'Ira','lvivska','asdfgh@gmail.com','102938476',['bread','milk','butter']);
// let user3= new User(3,'Vasya','Kyiv','kyivh@gmail.com','100987676',['bread','milk','butter','juice']);
// let user4= new User(4,'Ania','Kyivska','kyivska@gmail.com','100998906');
// let user5= new User(5,'Lesia','Morsska','leska@gmail.com','112345566');
// let user6= new User(6,'Tetiana','Shevchenko','shevat@gmail.com','199987665');
// let user7= new User(7,'Pavlo','Gnatenko','gnat@gmail.com','987653456');
// let user8= new User(8,'Petro','Ignatenko','ignaten@gmail.com','912345676');
// let user9= new User(9,'Olga','Petrenko','opetrenko@gmail.com','890987806');
// let user10= new User(10,'Zlata','Zlatenko','zlatenko@gmail.com','825688774');
// array=[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
// array.sort(a,b)=>a
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// function Car(model,producer,year,maxspeed,volume) {
//     this.model=model;
//     this.producer=producer;
//     this.year=year;
//     this.maxspeed=maxspeed;
//     this.volume=volume;
//     this.drive=function () {
//         // console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//     this.info=function () {
//         for (const item in this) {
//             // console.log(`${item}-${this[item]}`);
//             // console.log(this);
//         }
//     }
//     this.increaseMaxSpeed= function (newSpeed) {
//         this.maxspeed+=newSpeed
//     }
//     this.year = function (newYear){
//         this.year=newYear;
//     }
//     this.addDriver= function (driver) {
//         this.driver=driver;
//     }
// }
// let newCar= new Car('bmv','germany',2020,280,3.5);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(50);
// console.log(newCar);
// newCar.year(2022);
// console.log(newCar);
// newCar.addDriver('vasya');
// console.log(newCar);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
class Car {
    constructor(model,producer,year,maxspeed,volume){

    this.model=model;
    this.producer=producer;
    this.year=year;
    this.maxspeed=maxspeed;
    this.volume=volume;
    this.drive=function () {
        // console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    this.info=function () {
        for (const item in this) {
            // console.log(`${item}-${this[item]}`);
            // console.log(this);
        }
    }
    this.increaseMaxSpeed= function (newSpeed) {
        this.maxspeed+=newSpeed
    }
    this.yearChange = function (newYear){
        this.year=newYear;
    }
    this.addDriver= function (driver) {
        this.driver=driver;
    }
}}
let newCar= new Car('bmv','germany',2020,280,3.5);
newCar.drive();
newCar.info();
newCar.increaseMaxSpeed(50);
console.log(newCar);
newCar.yearChange(2022);
console.log(newCar);
newCar.addDriver('vasya');
console.log(newCar);



//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Cinderella(name,age,footSize) {
//     this.name=name;
//     this.age=age;
//     this.footSize=footSize;
// }
// let arrCinderella=[
//     new Cinderella('Nata',22,36),
//     new Cinderella('Katya',23,37),
//     new Cinderella('Nina',60,45),
// ];
//
// function Prince(name,age,findSize) {
//     this.name=name;
//     this.age=age;
//     this.findSize=findSize;
// }
// let newPrince= new Prince('Vasya',30,36);
//
// let find=(arrCind,prince)=>{
//     for (const item of arrCind) {
//         if(item.footSize===prince.findSize){
//             return `${item.name}`;
//         }
//     }
// }
// console.log(find(arrCinderella, newPrince));
//
// let cind=arrCinderella.find(value => value.footSize===newPrince.findSize);
// console.log(cind);