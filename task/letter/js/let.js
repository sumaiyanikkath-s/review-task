var x=parseInt(prompt("enter a number"));
 while(x>0){
     rem=x%10
     x=(x-rem)/10
     if (rem==1)
	 {
		 console.log("one")
	 }
	 else if (rem==2)
	 {
		 console.log("two")
	 }
	 else if (rem==3)
	 {
		 console.log("three")
	 }
	 else if (rem==4)
	 {
		 console.log("four")
	 }
	 else if (rem==5)
	 {
		 console.log("five")
	 }
	 else if (rem==6)
	 {
		 console.log("six")
	 }
	 else if (rem==7)
	 {
		 console.log("seven")
	 }
	 else if (rem==8)
	 {
		 console.log("eight")
	 }
	 else if (rem==9)
	 {
		 console.log("nine")
	 }
	 else
	 {
		 console.log("zero")
	 }
 }