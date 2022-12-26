function mydate(date)
{
    x= new Date(date)
	if ((x.getDay() == 0) || (x.getDay() == 6))
	{
		document.write("its a weekend");
	}
	else
	{
		document.write("Its a weekday");//mm-dd-yyyy
	}
}
date = prompt("Enter a date mm-dd-yyyy");
mydate(date);