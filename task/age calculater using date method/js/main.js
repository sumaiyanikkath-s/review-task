var c=new Date();
current_year=c.getFullYear();
current_month=c.getMonth();
current_date=c.getDate();

var dob1=String(prompt("enter your Date yyyy-mm-dd:"));
var dob=new Date(dob1);
birth_year=dob.getFullYear();
birth_month=dob.getMonth();
birth_date=dob.getDate();

var age=current_year-birth_year;
if(current_month<birth_month||current_month==birth_month&&birth_date>current_date)
{
	age--;
}
document.write("Age:"+age);









/*dob=prompt("enter the date yyyy-mm-dd")
x=new Date()
//document.write(x);//to print {object value} 2day date
crntyr=x.getFullYear()
const dob1=new Date(dob);
const year=dob1.getFullYear();
//document.write(year);//to prnt 2000
age=crntyr-year;
document.write("your age is :" +age);
//document.write(age);
//document.write("<br>");
//document.write(crntyr);
//document.write(dob);
//document.write("<br>");
//document.write("<br>");*/

/*dob=prompt("enter the date yyyy-mm-dd")
x=new Date()
crntyr=x.getFullYear()
const dob1=new Date(dob);
const year=dob1.getFullYear();
age=crntyr-year;
document.write("your age is :" +age);*/



