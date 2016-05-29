// var mymessage = confirm("你喜欢吗？");
// if(mymessage==true){
// 	document.write("加油");
// }
// else{
// 	document.write("嗯");
// }
var myname=prompt("your name");
if(myname!=null)
{
	alert("你好"+myname);
}
else{
	alert("您好");
}
// var mye = document.getElementById("con")
// document.write(mye);
//var mychar = document.getElementById("con");
 //  mychar.style.backgroundColor ="blue";
function hidetext()
{
	document.getElementById("con").style.display="none";
}
function showtext()
{
	document.getElementById("con").style.display="block";
}

	   function modify(){
	      var p2 = document.getElementById("conn");
	      p2.className="two";
	   }
