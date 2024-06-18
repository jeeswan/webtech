// let number = 1;
// let num2 = 1.2;

// const { name } = require("tar/lib/types");

// console.log(number);
// console.log(num2);

// num2 = 'apple';
// console.log(num2);



// let gods = ['ram', 'shyam', 'krishna'];
// let wepons = ['bow', 'arrow', 'sudarsan'];

// for (var item of gods){
//     console.log(item);
//     for(var item of wepons){
//         //
//     }
//     console.log(item);
// }



// const myname = 'Aaalu';
// myname = 'Padalu';

// const myarr = [1,2,3];
// console.log(myarr);
// myarr[1] = 5;
// console.log(myarr);
// myarr.push(7);
// console.log(myarr);

// let somVar = null;
// console.log(somVar);

// let person = {
//     name: "Jeeswan",
//     age: 20,
//   };
  
//   console.log(person);
  
//   const myarr = [1,23,3,'s',true];
//   console.log(myarr);
  
//   function add(a,b) {
//     console.log(a+b);
//   }
  
//   add(2,"3")  
//   add.name="Add function";
//   add.concat = function(a,b){
//     console.log(`${a}${b}`);
//   };
  
//   console.log(add.myName);
//   add.concat(2, 3)

//   const firstName = "Jeeswan";
//   const surName = "Bajracharya";

//   const fullName = firstNameName + ' ' + surName;
//   const fullName2 = 'My name is $(firstName) $(surName)';
//   console.log(fullName);
//   console.log(fullName2);

// const key1 = Symbol("key");
// const key2 = Symbol("key");

// console.log(key1 == key2);

// const email = Symbol("email");

// const person = {
//   name: 'Jeeswan',
//   age: 20,
//   [email]: "Jeeswan@gmail.com",
// };

//  for(key in person){
//   console.log(person[key]);
//  }

//  console.log(person[email])

// const myarr = [1,2,3,4,5];
// const person = {
//   myName: "Jeeswan",
//   myAdd: "Bhotahity",
// };

// // const first = myarr[0];
// // const second = myarr[1];

// const [first, second, ...remaining] = myarr;
// console.log(first,second);
// console.log(remaining);

// // const myName = person.myName;
// // const myAdd = person["myAdd"];
// const {myName, myAdd } =  person;
// console.log(myName);
// console.log(myAdd);

// let a = 1;
// let b = "1";

// console.log(a!=b);
// console.log(a!==b);

// // operator

// const isTrue = true && false;
// console.log(isTrue);

// const type = typeof a;
// console.log(type);
// console.log(typeof type);

// // spread operator 

// const originalArray = [1,2,3];
// const copyArr1 = [...originalArray];
// copyArr1[1] = 5;
// console.log(originalArray, copyArr1);

// const arr1 = [1,2,3];
// const arr2 = [5,4,7];
// const merged = [12,...arr1, 13, ...arr2, 55];
// console.log(merged);

// const person1 = {
//   name: "Jeeswan",
//   age: 21,
// };

// const person2 = {...person1, age: 25, address: "Kathamndu"};
// console.log(person1);
// console.log(person2);

const num = [1,2,3];

function add(a,b,c){
  return a+b+c;
}

console.log(add(1,2,3));
console.log(add(...num));