$(document).ready(function(){
	$('i.btn').click(function(){
	$('.dropdown_content').slideToggle(500,'swing');
	
})


$('.product').hover(
			function(){$(this).find('.product_summary:first').slideToggle(300,'swing');},
			function(){$(this).find('.product_summary:first').fadeOut(800);})
//Add slide show function

});
