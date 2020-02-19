
function Palindrome()
{
	var str = document.getElementById("str").value;
	var rep = /[\W_]/g;
	var str = str.toLowerCase().replace(rep, '');
	var revStr = str.split('').reverse().join("");
	var n = str.localeCompare(revStr);
	
	if(n==0)
	{
		document.write("It's a PALINDROME");
	}
	else
	{
		document.write("It's not a PALINDROME");
	}
	return str === revStr;
}