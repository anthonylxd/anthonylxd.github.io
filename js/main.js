;$(function()
{
	'use strict';

	var sidebar = $('#sidebar'),//选择侧栏
		mask= $('#mask'),
		sidebar_trigger = $('#sidebar_trigger');
		
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
		
})