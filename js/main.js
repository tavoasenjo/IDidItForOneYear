/*=============================================================
						JQUERY
=============================================================*/

$(document).ready(function(){

/* ============================================================
                        PICTURE - HOMEPAGE
============================================================== */
	
	$(".pic_month .img_cha").mouseover(function(){
		$(this).css({
			transition: 'width 1s ease',
			'width': 310, 'height': 230});
	});

	$(".pic_month .img_cha").mouseout(function(){
		$(this).css({
			'width': 300, 'height': 220});
	});


	/* ============================================================
                        PICTURE - ABOUT
============================================================== */

	$('#profile_image').mouseover(function(){

		$('#description').css({'display': 'inline'})
		$('#profile_image img').css({
			transition : 'opacity 1s ease-in-out',
            'opacity': 1
		})
	});

		$('#profile_image').mouseout(function(){
		$('#description').css({'display': 'none'}, 3000)
		$('#profile_image img').css({'opacity': 0.7})
	});	

/* ============================================================
                        COUNTDOWN
============================================================== */
		$("#countdown").countdown("2016/07/01", function(event) {
	     $(this).text(event.strftime('%D days %H:%M:%S')  );
	   });

		

});

