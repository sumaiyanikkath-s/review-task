/*var year= prompt("Enter a year:");
var monthnumber = prompt("Enter a month:"); 
var monthname={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"september",10:"october",11:"November",12:"December"};
if ((monthnumber==1)||(monthnumber==3)||(monthnumber==5)||(monthnumber==7)||(monthnumber==8)||(monthnumber==10)||(monthnumber==12))
{
	alert(monthname[monthnumber] + " has 31 days");
}
else if ((monthnumber==2)&&((year%400==0)||(year%4==0)||(year%100==0)))
{
	alert(monthname[monthnumber] + " has 29 days");
}
else if (monthnumber==2)
{
	alert(monthname[monthnumber] + " has 28 days");
}
else
{
	alert(monthname[monthnumber] + " has 30 days");
}
*/
/*i=199;
while(i>=200)
{
	console.log(i);
	i=i-2;
}
*/



/*var a=prompt("enter the number");
i=0;
while(i<=a)
{
	if(i%2!=0)
	{
		console.log(i);
	}
	i++;
}*/
//even in for loop
//var i=0;
/*var a=parseInt(prompt('enter'));
for (i=a;i>=2;i=i-2)
{
    console.log(i)
}
odd in for loop
for (i=199;i>=100;i=i-2)
{
    console.log(i)
}*/



/*i=199;
while(i>=100)
{
    console.log(i)
    i=i-2;
}*/
/*var i=200
do
{
    console.log(i);
i=i-2;
}
while(i>=100);
*/
/*var i=199
do
{
    console.log(i);
i=i-2;
}
while(i>=100);
*/
//for in loop
/*var bottle={
    color:"yellow",
    shape:"cylinder",
    size:{
        height:"100px",
        width:"20px",
    }
}
for (a in bottle)
{
    console.log(bottle[a])
    console.log(a)
    console.log(a+":"+bottle[a]);
}*/
//for of loop
/*var b =[10,20,30,40]
for(a of b)
{
    console.log(a)
}*/
/*var a = parseInt(prompt("Enter the value"));
for(let i = 0; i<=a ; i++)
{
  if(i%2!==0)
  {
    console.log("number"+" "+ i);
  }
}*/
/*var a = parseInt(prompt("Enter the value"));
var i = 1;
var factorial = 1;
do
{
    factorial = factorial * i;
    i++;
    console.log(factorial);    
}
while(i<=a)*/
    



/*const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

   // multiply i with number
    const result = i * number;

   // display the result
    console.log(i+ "x" +i+ "=" +i*number);
}*/
/*var a=2;

while(a<=10)
{
	console.log(a);
	a=a*2;
}*/



/*var a=5;
var fact=1;
for(i=1;i<=a;i++)
{
	fact*=i;
	console.log(fact);
} */


/*var a="sumaiya";
for(x of a)
{
	console.log(x);
}*/

/*var a=10;

for(i=0;i<20;i++)
{
	console.log(i);
}*/

/*var a=10;

for(i=a;i>0;i--)
{
	console.log(i);
}*/

/*let x="";
let i=0;
while(i<10)
{
	//x =+ +i; 	
	x = "<br>the number is " +i;
	console.log(x);
	i++;
}*/
/*var det={name:"sumaiya",lastname:"nikkath",age:22};
var b=" ";
for(x in det)
{
	b=det[x]+" ";
	alert(b);
}*/

/*let txt="";
let i=0;
do{
	txt = "The number is " + i;
	i++;
	console.log(txt);
}
while(i<10)*/


/*let x="";
let i=0;
while(i<5)
{	
	x += "*";
	console.log(x);
	i++;
}*/

/*var a = parseInt(prompt("Enter a number:"));
for (i=a;i>0;i--)
{
	console.log(i);
}*/


/*var a = parseInt(prompt("Enter a number:"));
do 
{
	console.log(a);
	a--;
}
while(a>0);*/


/*var a=500;
for(a=500;a>=450;a=a-2)
{
	console.log(a);
}

var a=500;
while(a>=450)
{
	console.log(a);
	a=a-2;
}*/



var a ="12345";

for ( i = a.length - 1; i >= 0; i--) 
{
	//console.log(a[i]);
    document.write(a[i]);
	//a.reverse;
	//console.log(a);
}