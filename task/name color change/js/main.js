var div=document.createElement("div");
document.body.appendChild(div); 
var input=document.createElement("input");
input.setAttribute("id","inputid");
input.style.marginTop="200px"
input.style.marginLeft="40%"
div.appendChild(input);
document.write("</br>");
var s=document.createElement("div");
//s.style.marginLeft="30%"

div.appendChild(s);
var but=document.createElement("button");
but.innerHTML="Click!";
but.style.marginLeft="45%"
but.style.marginTop="20px"
s.appendChild(but);

var output=document.createElement("h1");
output.setAttribute("id","output");
output.style.marginLeft="38%"
div.appendChild(output);

but.onclick=function()
{
	document.getElementById("output").innerHTML="Sumaiya Nikkath";
	document.getElementById("output").style.color=String(document.getElementById("inputid").value);
}