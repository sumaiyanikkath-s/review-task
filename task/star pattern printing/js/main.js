var x = parseInt(prompt("Enter x value:"));//To Print Row Side 
var y = parseInt(prompt("Enter y value:"));//To Print Column Side//debugger;
for(let i=0; i<x; i++) 
{ 
  for(let j=0; j<y; j++) 
  { 
    document.write("*");
  }
  
  document.write("<br>");
}