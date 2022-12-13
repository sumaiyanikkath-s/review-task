/*Write A Program To Accept Three Numbers From User And
 Print Them In Ascending And Descending Order.*/

var a=parseInt(prompt("enter the a value"));
var b=parseInt(prompt("enter the b value"));
var c=parseInt(prompt("enter the c value"));
if (a>=b && a>=c)
{
        if (b>=c)
        {
			document.write(a,b,c);
			document.write(c,b,a);
        }
        else
        {
		   document.write(a,c,b);
		   document.write(b,c,a);
        }
}
else if (b>=a && b>=c)
{
        if (a>=c)
        {
			 document.write(b,a,c);
			 document.write(c,a,b);
        }
        else
        {
			 document.write(b,c,a);
			 document.write(a,c,b);
        }
}
else if (c>=a && c>=b)
{
        if (a>=b)
        {
			document.write(c,a,b);
			document.write(b,a,c);
        }
        else
        {
		   document.write(c,b,a);
		   document.write(a,b,c);
        }
}

//Task - Find the number of days in a month
