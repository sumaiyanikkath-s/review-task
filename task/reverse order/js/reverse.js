//reverse of a number

var number = parseInt(prompt("enter number"));
var reverseNumber = 0;
while(number!=0){
	var digit=number%10;
	reverseNumber= (reverseNumber*10)+digit;
	number = parseInt(number/10);
}
alert(reverseNumber);

