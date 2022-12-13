//sum of a digit 

/*var n = parseInt(prompt("Enter number"));
var sum =0;
while(n!=0)
{
	var r =n%10;
	sum=sum+r;
	n=parseInt(n/10);
}
console.log(sum);*/

//sum of a digit using dom
/*
var a = document.createElement("INPUT");
    a.setAttribute("type", "text");
    a.setAttribute("placeholder", "Enter a number:");
    a.setAttribute("id","new1");
	document.body.appendChild(a);
	document.write("<br/>");
	document.write("<br/>");
	document.write("<br/>");
	document.write('<br/>');	
	
    q=document.createElement("Button");
    q.setAttribute("onclick","run();");
    document.body.appendChild(q)
    q.innerHTML="run";
	q.style.backgroundColor="white";
	q.style.border="2px solid red";
	
	
function run(){
  x = parseInt(document.getElementById("new1").value);
var n=0;
while(x>0)
{
	rem=x%10;
	n=n*10
	n+=rem;
    x= parseInt(x/10);
} 

while(n>0)
{
	rem=n%10;
	x+=rem;
	n=parseInt(n/10);
	if(n!=0)
	{
		document.write(rem+"+");
	}
	else
	{
		document.write(rem);
	}
}
document.write("="+x);
}

*/










//adding
/*var n=03453
	sum=0
while(n>0)
{
	var rem =n%10
	sum=sum+rem;
	n=(n-rem)/10;
	console.log(sum)
}*/

/*var arr=[0,3,4,5,3]
var sum=0;
for(i=0;i<arr.length;i++)
{
sum=sum+arr[i];
}
console.log(sum);*/
	

