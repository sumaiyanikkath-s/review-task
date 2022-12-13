var ch = prompt("Enter the character");

if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))
	document.write("the character is an alphabet"); 
 
else if (ch >= "0" && ch <= "9")
	document.write("the character is an number");

else
	document.write("the character is an special character");

