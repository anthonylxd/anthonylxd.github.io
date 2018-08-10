$(function(){

$(".leftcontent li").click(function(){
	var obj = $(this).attr("obj");
	
	$(".leftcontent li").each(function(){
		$(this).removeClass("select");
		var o = $(this).attr("obj");
		$("."+o).hide();
	});
	$(this).addClass("select");
	$("."+obj).show();
});




});