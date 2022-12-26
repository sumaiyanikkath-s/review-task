//string methods
/*let a="abcdefghijklmnopqrstuvwxyz"; // length of strng
let len=a.length;
document.write(len)*/

//string slice
//let a="apple,banana,kiwi";
//let part=a.slice(7,13);//string slice
//let part=a.substring(7,13);//string substring
//let part=a.substr(7,13);//string substr
//document.write(part);

//replace
/*let txt="my name is sumaiya";
//let newtxt=txt.replace('my name is','im');
//let newtxt=txt.replaceAll('my name is','MY NAME IS');
document.write(newtxt);*/

/*let txt="sumaiya nikkath";
//let txt1=txt.toUpperCase();//UPPERCASE
let txt1=txt.toLowerCase();//LOWERCASE
document.write(txt1);*/

/*let a="SUMAIYA";
let b="NIKKATHS";
let txt=a.concat(" ",b);
document.write(txt);*/

/*let a="		hello world! 	";
//let b=a.trim();
//let b=a.trimStart();
let b=a.trimEnd();
document.write(b);*/

/*let a="6";
let b=a.padStart(5,"x");
//let b=a.padEnd(5,"x");
document.write(b);*/

//charAt and charCodeAt
//let a="hello world!";
//let b=a.charAt(0);
//let b=a.charCodeAt();
//document.write(b);

//property access
/*let a="hello world!";
let b=a[1];
document.write(b);*/

//string repeat
/*const c="hello";
const r=c.repeat(5);
document.write(r);*/

//codePointAt
/*const txt = "*?/>";
const c =txt.codePointAt(1);
document.write(c);*/

//startsWith
/*const str1 = 'Saturday night plans!';
//const txt=str1.startsWith('S');// expected output: true
//const txt=str1.startsWith('Sat',5);// expected output: false
//const txt=str1.endsWith('plans');
const txt=str1.endsWith('!');
document.write(txt);*/
//match
/*const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
//const regex = /[a-z]/g;
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
document.write(found);*/
//indexOf
/*const str1 = 'Saturday night plans!';
const txt=str1.indexOf('S');
document.write(txt);*/
//includes
/*const str1 ="Saturday night plans!";
const str2="sund"//to return boolean value t/f
const txt=str1.includes(str2);
document.write(txt);*/

//string split
/*let txt="hi imsumaiya";
//const myarr=txt.split("",3);//h,i,i
const myarr=txt.split(" ",3); //hi,im,sumaiya
//const myarr=txt.split(",");
//const myarr=txt.split("|");
document.write(myarr);*/
/*const worldString = "Hello, world"
//console.log(worldString.small()); // <small>Hello, world</small>
//console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); */// <font size="7">Hello, world</fontsize>
/*split()
split(separator)
split(separator, limit)*/
// valueof
/*const d=("0,sumaiya");
const s=d.valueOf();
document.write(s);*/

//n = "Hi im sumaiya "
//b = n.search("m") //to return index value
//b = n.indexOf("i")//to return index value 1st value
//b = n.lastIndexOf("i",1) //i oda index value kudukathum illati -1 return     
//b= n.includes("nikkath")
//b = n.startsWith("Hi",0);
//b = n.endsWith("ya")
//document.write(b)


// trimming
/*
a = "  monisha  " //output will be "monisha"
//z = a.trim()
//z = a.trimStart()
z = a.trimEnd(a)
//document.write(a)
console.log({z})
*/

//padding
/*
a = "moni"
//z = "abc".padStart(5)
//z = a.padStart(8,"0")
z = a.padEnd(6,"*")
console.log({z})
*/

//extracting
/*
a = "This is my string method"
//z = a.split(" ")  // ,2
//z = a.substring(0,6)
z = a.slice(8)
console.log({z})
document.write(z)

*/
// concatenating & interpolating
/*
a = "Good Morning"
z = a.concat(" ","sandhiya");
console.log(a.length) //tempalte literal
console.log(typeof a)  //tempalte literal
console.log({z})

*/
//replacing
/*
a = "Monisha Chezhiyan"
z = a.replace("Chezhiyan","Vasantha")
console.log(z)
*/
//a = "Monisha is a good girl, Monisha is a obedient girl"
//z = a.replaceAll("Monisha","Sandhiya")
//console.log(z)

//changing cases
/*
a = "Monisha "
//z = a.toUpperCase();
z = a.toLowerCase();
console.log(z)
*/








