var a = document.createElement("INPUT");
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
	document.body.appendChild(x)// div tag la oru line varum run clickpannuna box la output varum ;code varum aprm output la box la varum
	
function run(){
	//innerHTML=""
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
//document.body.appendChild(x)//function la run clickpannuma box varum
}

/*note:document.body.appendChild(x)==>div tag la kudutha line 
ah erukum ethai na function la kutha 
run click pannuna box la output varum */
