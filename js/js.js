

$(document).ready( function(){


	/* custom scrollbar init  */
	$("#new-msgs-list").mCustomScrollbar({
		scrollInertia:300,
		mouseWheel:true,
		mouseWheelPixels:"auto"
	});

	$("#events-list").mCustomScrollbar({
		scrollInertia:300,
		mouseWheel:true,
		mouseWheelPixels:"auto"
	});


	$(".tt").hover(
		function () {
			var _this = $(this);
			_this.children('.tltip').stop().fadeIn('200', function(){
				/* update scrollbar in new messages list */
				if ( _this.hasClass('mail') ) {
					$("#new-msgs-list").mCustomScrollbar("update");
				};
			});
		},
		function () {
			$(this).children('.tltip').stop().fadeOut('200');
		}
	);

	$('#simple-carousel').jcarousel({
        scroll: 3,
        animation: "150",
        buttonNextHTML: "<div class='arr next'><i></i></div>",
        buttonPrevHTML: "<div class='arr prev'><i></i></div>"
    });


}); /* end of document.ready */

