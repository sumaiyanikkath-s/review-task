/*var grade=prompt("enter the grade");

switch(grade){
	case "s":
	alert("excellent grade");
	break;
	case "a":
	alert("good grade");
	break;
	case "b":
	alert("avg grade");
	break;
	case "e":
	alert("poor grade");
	break;
	case "u":
	alert("fail grade");
	break;
	default:
	alert("unknown grade");
}*/
/*2-A school has following rules for grading system:
a. Below 25 - F
b. 25 to 45 - E
c. 45 to 50 - D
d. 50 to 60 - C
e. 60 to 80 - B
f. Above 80 - A*/

var mark = prompt("Enter the Marks");
if(mark>80)
{
	alert("Grade A");
}
else if(mark>=60 && mark<=80)
{
	alert("Grade B");
}
else if(mark>=50 && mark<=59)
{
	alert("Grade C");
}
else if(mark>=45 && mark<=49)
{
	alert("Grade D");
}
if(mark>=25 && mark<=44)
{
	alert("Grade E");
}
else
{
	alert("Grade F");
}

