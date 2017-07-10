$(function()
{
	'use strict';

	var sidebar = $('#sidebar'),//选择侧栏
		mask= $('#mask'),
		sidebar_trigger = $('#sidebar_trigger'),
		backButton = $('.back-to-top'),
		itembtn = $('#itembtn'),
		workbtn = $('#workbtn'),
		skillbtn = $('#skillbtn');
		
		function showSidebar(){
			mask.fadeIn();
			//sidebar.animate({'right':0});
			sidebar.css('right',0);			
		}
		function hideSidebar(){
			mask.fadeOut();
			sidebar.css('right',-sidebar.width());
		}
		sidebar_trigger.on('click',showSidebar)
		mask.on('click',hideSidebar)
		

		function backtop(){
			$('html, body').animate({
				scrollTop:0
			},800)
		}
		backButton.on('click',backtop);
		


		$(window).on('scroll',function(){
			if($(window).scrollTop()>$(window).height())
					backButton.fadeIn();
				else
					backButton.fadeOut();
		})
		
		$(window).trigger('scroll');
	
		function backitem(){
			$('html, body').animate({
				scrollTop:1790
			},800)
		}
		function backwork(){
			$('html, body').animate({
				scrollTop:1190
			},800)
		}
		function backskill(){
			$('html, body').animate({
				scrollTop:680
			},800)
		}

		itembtn.on('click',backitem);
		workbtn.on('click',backwork);
		skillbtn.on('click',backskill);
})


	//创建XMLHttpRequest
	var request;
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest();
	}else{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open("POST","http://123.206.42.190/research/GetRequest",true);
	request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	request.send();
	request.onreadystatechange=function() {
  		if (request.readyState==4 && request.status==200){
		var result = request.responseText;
	}
}