//armstrong number not armstrong number

var number=prompt("please enter a number");
var temp=number;
var sum=0;
while(temp>0)
{
var digit=temp%10;
sum+= digit**3;
temp=parseInt(temp/10);
}
if(sum==number)
{
	document.write(' armstrong number');	
}
else
{
	document.write(' not armstrong number');	
}



/*
var number=prompt("please enter a number");
var temp=number;
var sum=0;
var a=number;
count=0;
while(a>0)
{
	
	var rem=a%10;
	a=(a-rem)/10;
	count++;
}
while(temp>0)
{
	rem=temp%10;
	sum=sum+rem**count;
	temp=parseInt(temp/10);
}
if(sum==number)
{
	document.write(" is a armstrong number <br>");	
}
else
{
	document.write(" is not armstrong number <br>");	
}

*/