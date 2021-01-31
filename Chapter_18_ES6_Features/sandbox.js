// // rest parameter
// const double = (...nums)=>{
//     // do something 
//     console.log(nums)
//     return nums.map( num => num*2 );
// }

// const result = double(1,3,5,7,9,2,4,6,8);
// console.log(result);
// //spread syntax arrays
// const people = ['shaun','ruy','crystal'];
// const members =['mario','chun-li',...people];

// // console.log(...people);
// console.log(members);

// //spread syntax (objects)

// const person = {
//     name: 'shaun',
//     age: 30,
//     jon:'net ninja'
// };
// const personClone = {...person, location: 'manchester'};
// console.log(personClone)

// 149. sets => data structure in the object category which measn are refernfce type an allows to store any unique values

// const namesArray = ['ryu','chun-li','ryu','shaun'];
// // console.log(namesArray);

// // const nameSet = new Set(namesArray);
// // console.log(nameSet);

// // const uniqueNames = [...nameSet];
// const uniqueNames = [...new Set(namesArray)];// this is a shrothand to 
// console.log(uniqueNames)

// const ages = new Set();
// ages.add(20).add(25).add(35);
// ages.add(20).add(25).add(35);
// ages.delete(25);



// console.log(ages, ages.size);
// console.log(ages.has(35), ages.has(25))

// ages.clear();
// console.log(ages)

// const ninjas = new Set([
//     {name:'shaun', age: 30},
//     {name:'crystal', age: 29},
//     {name:'chun-li', age: 32},
// ]);

// ninjas.forEach((ninja)=>{
//     console.log(ninja.name, ninja.age);
// })

//150. Symbols

const symbolOne = Symbol('a generic name here ');
const symbolTwo = Symbol('a generic name here ');

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo)



const ninja = {};

ninja.age = 30;
ninja['belt'] = "orange";
ninja['belt'] = "black";


ninja[symbolOne] = 'ruy';
ninja[symbolTwo] ='shaun';
 console.log(ninja)
