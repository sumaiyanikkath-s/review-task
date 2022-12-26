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
	
}
