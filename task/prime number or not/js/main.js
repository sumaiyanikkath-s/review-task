/*a=parseInt(prompt("enter a number"));
flag=true;
for(i=2;i<a;i++)
{
	if(a%i==0)
	{
		flag=false;
	}
	
}
if(flag==true)
{
	alert("It is an prime number")
}
else
{
	alert("It is not an prime number")
}*/

/*a=parseInt(prompt("enter a range"));
for(i=1;i<=a;i++)
{
	if(i>1)
	{
		for(j=2;j<i;j++)
		{
			if(i%j==0)
			{
				break;
			}
			else
			{
				console.log(i)
			}
		}
	}
}*/
/*
var input = document.createElement("input");
input.setAttribute("id","input");
input.placeholder="Enter the range:";
document.body.appendChild(input);
document.write("<br>");
document.write("<br>");

document.body.style.textAlign="center";
document.body.style.paddingTop="50px";
document.body.style.backgroundColor="gray";
	
var a = document.createElement("button");
a.setAttribute("id","a");
a.innerHTML="Click me";
document.body.appendChild(a);

a.onclick=function()
{
	var rangeInput = parseInt(document.getElementById("input").value);
	
	for(i=2;i<=rangeInput;i++)
	{
		for(j=2;j<i;j++)
		{
			if(i%j==0)
			{
				break;
			}
		}
		if(i==j)
	{
		document.write(i+" is a prime number<br>");
	}
	}
	
}*/















/*var a=parseInt(prompt("enter the number"));
if(a>1)
{
for(i=2;i<a;i++)
{
	if(a%i==0)
	{
	console.log("not prime number");
	break;
	}
    else  
	{
		console.log("prime number");
		
	}
	}
}
else
{
	console.log("zero and  one");
}
*/