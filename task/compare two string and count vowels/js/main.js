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
