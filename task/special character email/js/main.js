/*var n=prompt("Enter the email:");
var spcl=n.replace(/[^a-zA-Z0-9]/g,"");
document.write(spcl);*/

/*Input:
(aa,bb,cc,aa)
(dd,ee,dd,tt,dd)

Output:
"aa" was found 2 times
"dd" was found 3 times*/



/*const name=("aa,bb,cc,dd,aa,aa");
const txt=name.length;
document.write(txt)*/

//a = "This is my first code in javascript javascript is a case sensitive"
//b = a.split(" ")
//document.write(b)

//map
/*var arr=[0,3,4,5,3];
const res=arr.map(function(val,index){
    return val*2;
});
console.log("res",res);*/
//filter
/*var arr=[0,3,4,5,3];
const res1=arr.filter(function(val,index){
    return val>3;
});
console.log("res1",res1);*/
//every
/*var arr=[0,3,4,5,3];
const res2=arr.every(function(val,index){
    return val>-1;
});
console.log(res2);*/
//some
// var arr=[0,3,4,5,3];
// const res3=arr.some(function(val,index){
//     return val>4;
// });
// console.log(res3);

// find
// var arr=[0,3,4,5,3];
// const res4=arr.find(function(val,index){
//     return val===5;
// });
// console.log(res4);

//reduce
// var arr=[0,,3,4,5,3];
// var sum=0;
// for(i=0;ii<arr.length;i++)
// {
//     sum=sum+arr[i];
// }
// console.log(sum);
/*
var arr=[0,3,4,5,3];
const sum=arr.reduce(function(acc,currentvalue){
    return acc+currentvalue;
});
console.log(sum);

*/



//return a specified index value 
/*
x = [3,5,9,3,8,2]
y = 5
document.write(x.at(y))
document.write("<br>"); */

// concat merge two array
/*
x = [1,2,3,4,5]
y = [6,7,8,9,10]
z = x.concat(y)
document.write(z)
document.write("<br>");*/


// fill (val,strt,end)
/*
x = [1,2,3,4,5,6,7,8]
document.write(x.fill(4)) 
document.write("<br>");
document.write(x.fill(0,4)) 
document.write("<br>");
document.write(x.fill(0,2,4))
document.write("<br>");
*/
//copyWithin(tar,start,end)

/*x = [1,2,3,4,5,6,7,8,9]
document.write(x.copyWithin(0,3,6))
document.write("<br>");*/


//includes return t/f
/*
names = ["sumaiya", "dheepika", "monisha","nikkath"];
document.write(names.includes("nikkath"));
document.write("<br>");
*/

//join return array as a strg

/*names = ["sumaiya", "dheepika", "monisha","nikkath"];
//document.write(names.join());
document.write(names.join("&"));
document.write("<br>");*/


// lastindexof return spc values index
/*
names = ["sumaiya", "dheepika", "monisha","nikkath"];
document.write(names.lastIndexOf("dheepika"));
document.write("<br>");*/

//length
/*
names = ["sumaiya", "dheepika", "monisha","nikkath"];
x= names.length
document.write(x);
document.write("<br>");
*/

//pop removes last element
/*
names = ["sumaiya", "dheepika", "monisha","nikkath"];
document.write(names.pop());
document.write("<br>");
document.write(names);
document.write("<br>");
*/
//push add element in end

/*names = ["sumaiya", "dheepika", "monisha","nikkath"];
z = names.push("jainab","chithara")
document.write(z);
document.write("<br>");
document.write(names);
document.write("<br>");*/

//reverse nikk,moni,dp,sumi
/*
names = ["sumaiya", "dheepika", "monisha","nikkath"];
document.write(names.reverse());
document.write("<br>");*/

//shift removes 1st element
/*
names = ["sumaiya", "dheepika", "monisha","nikkath"];
document.write(names.shift());
document.write("<br>");
document.write(names);
document.write("<br>");*/

//unshift length add element 1st

/*names = ["sumaiya", "dheepika", "monisha","nikkath"];
document.write(names.unshift("jainab","chithara"));
document.write("<br>");
document.write(names);
document.write("<br>");*/

//slice

/*names = ["sumaiya", "dheepika", "monisha","nikkath"];
document.write(names.slice(1,3));
document.write("<br>");
document.write(names.slice(-4,-2)); //start omittd
document.write("<br>");
*/

//splice start,del coun,item

/*names = ["sumaiya", "dheepika", "monisha","nikkath"];
x = names.splice(2,1,"chithara","jainab")
document.write(names);
document.write("<br>");
document.write(x);
document.write("<br>");*/
//isarray
/*arr = [1,2,3,4,5,2];
a=Array.isArray(arr);
document.write(a)*/

//sort

/*names = ["sumaiya", "dheepika", "monisha","nikkath"];
names.sort();
document.write(names);
document.write("<br>");
*/

// var a1 = [1,2,3];
// var a2 = [4,5,6];
//var a3 = ["a","b","c"];
//var a = a1.concat(a2,a3)
//var a = a3.toString();
 // a3.pop();
 // a3.push("d");
 // a3.shift();
 // a3.unshift("e")
 //changing elements
 // a3[1]="f";//change element at index 1
 // a3[a3.length]="1";// same as push methods add element at end
 //delete a3[1];
 //a3.splice(2,1,2);
 //a=a3.slice(1,3)
 // a3.sort();
 // a3.sort((a,b)=>a-b);//using compare function
//a3.reverse();
 /*arr = [1,2,3,4,5,2];
 arr.copyWithin(0,1,4);
 //arr.forEach(x=>console.log(x));
 //a=arr.indexOf(3);
 //a=arr.indexOf(7);
 //a=arr.lastIndexOf(2);
 //a=arr.includes(4)
 //a=arr.fill(8);
 
document.write(arr)*/
 /*//findIndex
 var b = ((x)=>x>2)
 document.write(arr.findIndex(b));*/
 /*a=arr.entries();//gives index value and value
 for (var i of a){
 document.write(i+"<br>");
}*/


 
 /*//join
 a=arr.join("greater than");
 document.write(a)*/
 

 
 /*//reduce
 a= arr.reduce(function(value1,value2){
 	return value1+value2
 })
 document.write(a+"<br>");*/
//entries() method returns a new Array Iterator object
/*const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value);
// expected output: Array [0, "a"]
console.log(iterator1.next().value);*/

//findIndex() method returns index 1st elmnt array satisfiesed no elements satisfyg-1 is returned.
/*const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 1;
console.log(array1.findIndex(isLargeNumber));
// expected output: 3
*/
/*const array1 = [5, 12, 50, 130, 44];
const found = array1.findLast((element) => element > 55);
console.log(found);
// expected output: 130*/

/*const array1 = [5, 12, 50, 130, 44];
const isLargeNumber = (element) => element > 45;
console.log(array1.findLastIndex(isLargeNumber));
// expected output: 3  (of element with value: 13*/

/*const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];//creates a new array with all sub-array elements
console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]*/

/*const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => num);

console.log(flattened);
// expected output: Array [1, 2, 3, 4, 5, 6]*/
/*const array1 = [[0, 1], [2, 3], [4, 5]];
const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(result);
// expected output: Array [4, 5, 2, 3, 0, 1]*/

/*const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]
// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);*/
/*const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);

const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

Array.of(element0)
Array.of(element0, element1)
Array.of(element0, element1, /* … ,*/ elementN)
/*
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
/*
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
*/
/*
 console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
*/
//entries

/*fruits = ["Banana", "Orange", "kiwi", "Mango"];
z = fruits.entries()
console.log(z.next().value)
for(x of z)
{
	console.log(x);
}
*/

//every
/*
fruits = [34,67,0,46,67];
c = fruits.every(practice)

function practice(fruits)
{
	return fruits>1
}
document.write(c)
*/

//forEach
/*
sum =0
a = [34,67,2,46,67];
a.forEach(fun);

function fun(item)
{
	sum += item
}
document.write(sum)
*/

//filter
/*
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 33;
}
document.write(result)
*/

//find
/*
const ages = [32, 33, 16, 40];
const result = ages.find(checkAdult);

function checkAdult(age) {
  return age >33;
}
document.write(result)
*/


//indexOf
/*
fruits = [34,65,2,46,65];
document.write(fruits.indexOf(65))
*/

//map
/*
numbers = [4, 9, 16, 25];
arr = numbers.map(Math.sqrt)
document.write(arr)
*/

//reduce reduceright

a = [150,25,20]
document.write(b = a.reduceRight(fun));

function fun(tot,n)
{
	return tot - n;
}
