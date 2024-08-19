/* rest and spread */

// lab-01
// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด

// function multiple(...arr){
//   let result = arr.reduce((start,value)=>start*=value,1)
//   return result
// }

// console.log(multiple(1,2,3,2,2,2))

// lab-02
// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

// function filterOutOdds(...arr){
//   let result_array = [];
//   for (let key of arr){
//     if(key%2==0){result_array.push(key)}
//   }
//   return result_array
// }

// console.log(filterOutOdds(1,2,3,4,5,6,7,8,9,10))

// lab-03
// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน

// function mergeObjects(...obj){
//   let result_object = {};
//   for (let key in obj){
//     Object.assign(result_object,obj[key])
//   }
//   return result_object
// }
// let obj1 = {
//   name:`Japan`,
//   age:25
// }
// let obj2 = {
//   address:`England`,
//   hobby:`Tennis`
// }
// let obj3 = {
//   Anime:`Conan`,
//   birthdaye:`04-02-1999`
// }
// console.log(mergeObjects(obj1,obj2,obj3))

// lab-04

// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1,20,2];

// let num3 = [5,...nums1,-6,-1,...nums2];
// console.log(num3)

// let sum = num3.reduce((start,item)=>{
//   start +=item
//   return start
// },0)
// console.log(sum)

// lab-05

// let array1 = [1,2,3,4,5,6];
// let array2 = [];
// // console.log(array1)

// function test(){
//   array2 = [...array1]
//   array2[3]=array2[3]**2
//   return array2 
// }
// test()
// console.log(array1)
// console.log(array2)
// // console.log(array2)

// lab-06
// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter

// result={};

// function getData(fname,lname,...hobby){
//   result = {
//     "first name":fname,
//     "last name":lname,
//     "hobby":`${hobby}`,
//     "จำนวนงานอดิเรก":hobby.length
//   }
//   console.log(result)
//   return result
// }

// getData(`Jirapat`,`Thongbenjawat`,`Golf`,`Game`,`Tennis`)
// // console.log(result)

// lab-07
// let array1=[1,2,3,4]
// let array2=[3,6,9,12]
// function doubleAndReturnArgs(array,...number) {
//     let result1=[];
//     let result2;
//     result2 = number.map((item)=>{
//       return item=item*2
//     })
//     result1.push(...array)
//     result1.push(...result2)
//     return result1
// }

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// // // expexted result: [1, 2, 3, 8, 8]
// console.log(doubleAndReturnArgs([2], 10, 4));
// // // expexted result: [2, 20, 8]

// lab-09

// function cloneArray(...arr){
//   let result = [];
//   result = result.concat(...arr)
//   return result
// }
// let array1 = [1,2,3];;
// let array2 = [4,5,6];;
// let array3 = [7,8,9];;

// console.log(cloneArray(array1,array2,array3))

// lab-10
//จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// function cloneObject(...obj){
//   let result = {};
//   result = Object.assign(result,...obj)
//   return result
// }
// let object1 = {
//   name:`Japan`
// };;
// let object2 = {
//   age:`25`
// };;
// let object3 = {
//   address:`BKK`
// };;

// console.log(cloneObject(object1,object2,object3))

/* Destructuring */

// lab-11

// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // * Maya เพราะเลข index ตรงกัน
// console.log(second); // ** Marisa เพราะเลข index ตรงกัน
// console.log(third); // *** Chi เพราะเลข index ตรงกัน

// lab-12

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // * เพราะเลข index ตรงกัน
// console.log(whiskers); // ** เพราะเลข index ตรงกัน
// console.log(aFewOfMyFavoriteThings); // *** เพราะเลข index ตรงกัน

// lab-13

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // * [10,30,20] เพราะสับเลขตามค่าใน index

// lab-14

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // * 8 เพราะมีการระบุค่าไว้และเลขตรงกับเลข index
// console.log(yearNeptuneDiscovered); // ** 1846 เพราะมีการระบุค่าไว้และเลขตรงกับเลข index

// lab-15

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };

// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // *มีค่าเป็น object ที่ประกอบไปด้วย properties ที่ 2 เป็นต้นมา เพราะมีระบุเป็น...ไว้

// lab-16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // *
// // Your name is Alejandro and you like purple เนื่องจากมีการระบุค่าไว้
// console.log(getUserData({ firstName: 'Melissa' })); // **
// // Your name is Melissa and you like green เนื่องจากมีการระบุค่า default ไว้
// console.log(getUserData({})); // ***
// // Your name is undefined and you like green เนื่องจากมีการระบุค่า default ไว้

// lab-17
// let guest = 'Jane';
// let admin = 'Pete';
// [guest,admin]=[admin,guest]
// console.log(guest)
// console.log(admin)

// lab-18


// let somepeople = {
//   firstName:`Jirapat`,
//   lastName:`Thongbenjawat`,
//   ages:25
// }

// function getData(person){
// let {firstName:fname,lastName:lname,ages:age}=person
//   if (age>=18){
//     return result = `สวัสดีคุณ ${fname} ${lname} คุณมีสิทธิ์เข้าใช้งาน`
//   }
//   else return result = `คุณไม่มีสิทธิ์เข้าใช้งาน`
// }

// console.log(getData(somepeople))

// lab-19

// let user = {
//   name: 'John',
//   years: 27
// };

// let {name:name,years:age,isAdmin:isAdmin=`false`} = user

// console.log(name)
// console.log(age)
// console.log(isAdmin)

// lab-21
// ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ

// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]] = arr;
// console.log(a,b,c,d,e,f)

// lab-22
// const obj = { prop: 5, prop2: 10 };
// let {prop:a,prop2:b}=obj
// console.log(a,b)

// lab-23 ข้าม error
// let a, b;
// {a, b} = {a:1, b:2 };
// console.log(a,b)

//lab-24   
// const [, , , a, b] = [1, 2, 3];
// console.log(a)
// console.log(b)
// Ans: undefined

// lab-25

// const q = { prop: 5, prop2: [10, 100] };
// let {prop:x} = q
// let {prop2:[,y]} = q

// console.log(x)
// console.log(y)

// lab-26

// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {prop: x,}=q
// let {prop2:{prop2:{nested:[,y,]}}}=q
// console.log(x)
// console.log(y)

// lab-27

// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for (let { firstName, lastName } of names) {
//   console.log(`${firstName} ${lastName}`);
// }

// let [{firstName:fname,lastName:lname}]= names;

// for(let key of names){
//   console.log(`${key.firstName} ${key.lastName}` )
// }

//lab-28 

// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (let {user,age=`unknown`} of users)[
//   console.log(`${user} ${age}`)
// ]
