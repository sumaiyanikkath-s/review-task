var age = prompt("Enter your age");
var sex = prompt("Enter your sex");
/*Ask user to enter age, sex ( M or F ), marital status ( Y or N ) and then using following rules print their place of service.

if employee is female, then she will work only in urban areas.

if employee is a male and age is in between 20 to 40 then he may work in anywhere

if employee is male and age is in between 40 to 60 then he will work in urban areas only.

And any other input of age should print "ERROR".*/

var maritalStatus = prompt("yes or no");
if(sex=="female")
{
alert ("works urban area only");
}
else if (sex=="male" && age>20 && age<40)
{
alert ("work in anywhere");
}
else if (sex=="male" && age>40 && age<60)
{
alert ("works urban area only");
}
else
{
alert ("error");
}