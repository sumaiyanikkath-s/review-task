/*var x="sumaiya"
count=0;
for(i=0;i<x.length;i++)
{
	if(x[i]=="a"|| x[i]=="e" || x[i]=="i"||x[i]=="o"||x[i]=="u" ) 
   {
     count++;
   }
 }
document.write(count);*/


var x="sumaiya"
var y="aeiouaeiou"
 count=0;
 temp=0;
 for(i=0;i<x.length;i++)
 {
   if(x[i]=="a"|| x[i]=="e" || x[i]=="i"||x[i]=="o"||x[i]=="u" ) 
   {
     count++;
   }
 }
 for(i=0;i<y.length;i++)
 {
  if(y[i]=="a"|| y[i]=="e" || y[i]=="i"||y[i]=="o"||y[i]=="u" ) 
   {
     temp++;
   }
 }
   if(count>temp)
   {
	   document.write(count);
   }
  else
  {
	  document.write(temp);
  }

/*function vowels(sum){
count=0;
x=sum
for(i=0;i<x.length;i++)
{
	if(x[i]=="a"|| x[i]=="e" || x[i]=="i"||x[i]=="o"||x[i]=="u" ) 
   {
     count++;
   }
 }
 return count;
}
 a=vowels(prompt("Enter the string"));
 //y=count;
//document.write(y);
document.write(count);*/


/*var a = document.createElement("INPUT");
    a.setAttribute("type", "text");
    a.setAttribute("placeholder", "Enter the string:");
    a.setAttribute("id","new1");
	document.body.appendChild(a);
	a.style.backgroundColor="white";
	a.style.fontFamily="bold";
	a.style.fontSize="20px";
	a.style.padding="20px";
	document.write("<br/>");
	document.write("<br/>");
	
	document.body.style.textAlign="center";
	document.body.style.paddingTop="100px";
	document.body.style.backgroundColor="gray";
	
	q=document.createElement("Button");
    q.setAttribute("onclick","run();");
    document.body.appendChild(q)
    q.innerHTML="Run";
	q.style.backgroundColor="white";
	q.style.fontSize="20px";
	q.style.width="10%";
	
	x=document.createElement("div")
	x.style.marginTop="30px";
	x.style.marginLeft="45%";
	x.style.width="10%"
	//x.style.padding="40px";
	x.style.border="2px solid black"
	x.style.color="black";
	x.style.backgroundColor="white";
	document.body.appendChild(x)
	
function run(){
y=document.getElementById("new1").value;
var count=0;
for(i=0;i<y.length;i++)
{
	if(y[i]=="a"|| y[i]=="e" || y[i]=="i"||y[i]=="o"||y[i]=="u" ) 
   {
     count++;
   }
 }
x.innerHTML+=count;
document.body.style.backgroundColor="blue";
document.body.style.textAlign="center";
}*/





/*function vowel(y){
	x=y;
	z=0
	for(i=0;i<x.length;i++){
		if(x[i]=="a"|| x[i]=="e" || x[i]=="i"||x[i]=="o"||x[i]=="u" ) 
   {
     count++;
   }
 }

return count
}*/

/*var x=prompt("enter the string");
count=0;
for(i=0;i<x.length;i++)
{
	if(x[i]!="a"&& x[i]!="e" && x[i]!="i"&&x[i]!="o"&&x[i]!="u" ) 
   {
    document.write(x[i])
	count++;
   }
 }*/






















/*var a=prompt("enter the string");
const r=/[^aeiou]/gi;
var vowels*/

 
 

