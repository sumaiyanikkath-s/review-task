//print sum of odd or sum of even 

var n=parseInt(prompt("Enter a number:"));
	sum=0
	sum1=0
	while(n!=0)
	{
		var rem =n%10
		if (rem%2==0)
		{	
			sum=sum+rem;
		}
		else
		{
			sum1=sum1+rem;
		}
		n=parseInt(n/10);
    }
document.write(sum+" is sum of even <br>");
document.write(sum1+" is sum of odd <br>");

