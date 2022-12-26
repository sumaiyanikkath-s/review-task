//sum of a digit using dom

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

