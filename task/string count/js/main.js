var x=prompt("Enter The names");
var y=prompt("Enter The String");
var arr=x.split(" ");
var count=0;
for(i=0;i<arr.length;i++)
{
    if(arr[i]==y)
    {
        count++;
    }
}
document.write(count);


/*count=0
name=prompt("enter the string")
v=['aa','bb','aa','cc','dd','aa','dd','ee','ff','dd']
for(i=0;i<v.length;i++){
	if(name===v[i]){
	count+=1
}}	
document.write(count)*/