var button1 = document.createElement("button");
button1.setAttribute("id","button1");
button1.setAttribute("onclick","main()");
button1.innerHTML="Click Me!";
button1.style.marginTop="240px";
button1.style.marginLeft="45%";
document.body.appendChild(button1);

function main()
{
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("button1");
	document.body.style.backgroundColor = '#' + randomColor;//hexadecimal aga # used
}



