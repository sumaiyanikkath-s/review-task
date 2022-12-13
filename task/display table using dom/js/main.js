// display table using dom 

var a = document.createElement("INPUT");
    a.setAttribute("type", "text");
    a.setAttribute("placeholder", "enter the number");
    a.setAttribute("id","new1");
	document.body.appendChild(a);
    document.write("<br>");
	document.write("<br>");
	
    var b = document.createElement("INPUT");
    b.setAttribute("type", "text");
    b.setAttribute("placeholder", "enter the value:");
    b.setAttribute("id","new2");
    document.body.appendChild(b);
	document.write("<br>");
	document.write("<br>");
	
	q=document.createElement("Button");
    q.setAttribute("onclick","run()");
    document.body.appendChild(q)
    q.innerHTML="run";
	
	
function run(){
  num1 = Number(document.getElementById("new1").value);
  num2 = Number(document.getElementById("new2").value);
  var  i=1;
while(i<=num2)
{
document.write(i+  "  *  "  +num1+  "  =  "  +i*num1+ "<br>");
i++;
}
}

