//fibonacci: 0 1 1 2 3 5 8 13

var n=prompt("enter the number");
var num1=0,num2=1,num;
console.log("Fibonacci series:");
for(i=1;i<=n;i++)
{
	console.log(num1);
	num=num1+num2;
	num1=num2;
	num2=num;
}
