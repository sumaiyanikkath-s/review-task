//Palindrome : 12321


var n = parseInt(prompt("Enter the number"));
var actualnum= n;
var reversenum= 0;
while(n!=0){
	digit=n%10
	reversenum= (reversenum*10)+digit;
	n = parseInt(n/10);
}

 if (reversenum===actualnum){
	console.log("is a Palindrome Number");
}
else{
	console.log("Not a Palindrome Number");
}
