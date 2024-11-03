// var studentArr = ['adil','17','karachi','adil@gmail.com','male'];

// console.log(studentArr);

// console.log(studentArr[2]);

// console.log(typeof studentArr);


// ______________ OBJECTS _______________



// CREATING OBJECT:

// var studentObj = {
//     stdName: 'adil',
//     stdGetName: function(){
//         return this.stdCity;
//     },
//     stdAge: 17,
//     stdCity: 'karachi',
//     stdEmail: 'adil@gmail.com',
//     stdGender: 'male',
//     stdStatus: true,
// };



// There are 3 types of functions in JS:

// 1) Function Declaration

// function abc() {
//     console.log("Function Declaration call...");
// }

// abc();


// 2) Anonymous function / Regular function

// var abc = function(){
//     console.log("Anonymous Function call...");
// }

// abc();


// 3) Arrow function / Fat Arrow function





// METHODS:
// a key in an object which have a function in its value is not a key it becomes a method.



// INSERTING DATA:

// studentObj['courses'] = ['html','css','js'];

// studentObj.courses = ['html','css','js'];

// studentObj['qualifications'] = {
//     education: 'bachelors',
//     CGPA: 3.4,
// }

// studentObj.qualifications = {
//     education: 'bachelors',
//     CGPA: 3.4,
// }



// DELETING DATA:

// delete studentObj.stdStatus;



// FINDING A KEY:

// var response = 'stdEmail' in studentObj;

// console.log(response);



// CONSOLING A SINGLE KEY:

// console.log(studentObj['stdName']);

// console.log(studentObj.stdGender);



// CONSOLING A FUNCTION:

// studentObj.stdGetName()

// console.log(studentObj.stdGetName());



// console.log(studentObj);

// console.log(typeof studentObj);




// CONSTRUCTOR FUNCTION:


// 1.) Students Info: 

// function Student(name,age,city,email,education) {
//     (this.stdName = name),
//     (this.stdAge = age),
//     (this.stdCity = city),
//     (this.stdEmail = email),
//     (this.stdEducation = education)
//     // this.stdGetAge = function() {
//     // console.log(this.stdAge);
//     // };
// }

// Student.prototype.stdGetAge = function() {
//     console.log(this.stdAge);
// };


// var student1 = new Student('adil',17,'karachi','adil@gmail.com','bachelors');

// var student2 = new Student('hamza',19,'lahore','hamza21@gmail.com','CA');

// console.log(student1);

// console.log(student2);


// 2.) Books Info: 

// function Book(name,price,edition,author) {
//     this.bookName = name,
//     this.bookPrice = price,
//     this.bookEdition = edition,
//     this.bookAuthor = author
// }

// var book1 = new Book('Charlie chaplin',499,'2nd','John Wakson');

// var book2 = new Book('A trip to Japan',799,'1st','Adil The Great');

// var book3 = new Book('Gaming Addict',299,'1st','Farooq The Gamer');

// console.log(book1);

// console.log(book2);

// console.log(book3);








// PROTOTYPE:

// var studentObj = {
//     stdName: 'adil',
//     // stdGetName: function(){
//     //     return this.stdCity;
//     // },
//     stdAge: 17,
//     stdCity: 'karachi',
//     stdEmail: 'adil@gmail.com',
//     stdGender: 'male',
//     stdStatus: true,
// };


// (studentObj.prototype.stdGetName = function(){
//     console.log("function call...");
// })


// console.log(studentObj);




// FOR IN LOOP(Used only on objects):


var studentObj = {
    qualifications : {
            education: 'bachelors',
            CGPA: 3.4,
        },
    stdName: 'adil',
    stdAge: 17,
    stdCity: 'karachi',
    stdEmail: 'adil@gmail.com',
    stdGender: 'male'
};


for (var key in studentObj) {
    console.log(key,":",studentObj[key]);
    for (var keyaA in studentObj.qualifications) {
        console.log(keyaA, ":" , studentObj.qualifications[keyaA]);
    }
}