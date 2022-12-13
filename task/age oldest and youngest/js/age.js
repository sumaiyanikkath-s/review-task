/*3-Take input of age of 3 people by user and determine oldest and youngest among them.*/

var a = prompt("Enter your 1st age");
var b = prompt("Enter your 2nd age");
var c = prompt("Enter your 3rd age");
if(a>b && a>c)
{
	document.write("a is oldest");
if(b>c)
{
	document.write("c is youngest");
}
else 
{
	document.write("b is youngest")
}
}
if(b>c && b>a)
{
	document.write("b is oldest");
if(a>c)
{
	document.write("c is youngest");
}
else 
{
	document.write("a is youngest")
}
}
if(c>a && c>b)
{
	document.write("c is oldest");
if(b>a)
{
	document.write("a is youngest");
}
else 
{
	document.write("b is youngest");
}
}



/*if(a>b)
{
	if(a>c)
	{
		document.write("a is oldest");
	}
}
else if(a<b)
{
	if(a<c)
	{
	document.write("a is youngest");
	}
}
if(b>a)
{
	if(b>c)
	{
		document.write("b is oldest");
	}
}
else if(b<a)
{
	if(b<c)
	{
	document.write("b is youngest");
	}
}
if(c>a)
{
	if(c>b)
	{
		document.write("c is oldest");
	}
}
else if(c<a)
{
	if(c<b)
	{
	document.write("c is youngest");
	}
}*/
















































































