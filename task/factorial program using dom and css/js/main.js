 // factorial program using dom and css


var a = document.createElement("INPUT");
    a.setAttribute("type", "text");
    a.setAttribute("placeholder", "Enter a number:");
    a.setAttribute("id","new1");
	document.body.appendChild(a);
	a.style.backgroundColor="white";
	a.style.fontFamily="bold";
	a.style.fontSize="20px";
	a.style.padding="20px";
	document.write("<br/>");
	document.write("<br/>");
	
	document.body.style.textAlign="center";
	document.body.style.paddingTop="100px";
	document.body.style.backgroundColor="gray";
	
	q=document.createElement("Button");
    q.setAttribute("onclick","run();");
    document.body.appendChild(q)
    q.innerHTML="Run";
	q.style.backgroundColor="white";
	q.style.fontSize="20px";
	q.style.width="10%";
	
	x=document.createElement("div")
	x.style.marginTop="30px";
	x.style.marginLeft="45%";
	x.style.width="10%"
	//x.style.padding="40px";
	x.style.border="2px solid black"
	x.style.color="white";
	document.body.appendChild(x)
	
function run(){
num = Number(document.getElementById("new1").value);
var fact =1;
for(i=1;i<=num;i++)
{
	fact=fact*i;
	
}
	//document.write(fact);
	x.innerHTML=fact
}


