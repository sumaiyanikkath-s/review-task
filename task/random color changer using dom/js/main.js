var text =document.createElement("a")
text.innerText="RANDOM COLOR CHANGER";
document.body.appendChild(text);
text.style.textAlign = "center";
text.style.color= "DeepPink";
text.style.marginTop= "60px";
text.style.fontSize= "35px";
document.write("<br/>","<br/>");

document.body.style.textAlign="center";


button1=document.createElement("button");
button1.setAttribute("onclick","random()");
button1.style.backgroundColor="lightblue";
button1.innerText="Click Me!";
document.body.appendChild(button1);


function random()
{
	var randomColor = Math.floor(Math.random()*16777215).toString(8);
	document.body.style.backgroundColor = '#' + randomColor;
	
}