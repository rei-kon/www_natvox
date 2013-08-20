

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
			_this.find('.tltip').stop().fadeIn('200', function(){
				/* update scrollbar in new messages list */
				if ( _this.hasClass('mail') ) {
					$("#new-msgs-list").mCustomScrollbar("update");
				};
			});
		},
		function () {
			$(this).find('.tltip').stop().fadeOut('200');
		}
	);

	$(".tt-click > .btn").on('click', function(){
		var tt = $(this).parent().find('.tltip');
		tt.stop().fadeToggle('200');
	});

	$(document).mouseup(function (e) {
	    var tooltip = $(".tltip"),
	    tooltip_box = tooltip.closest('.tt-click')

	    if (!tooltip_box.is(e.target) // if the target of the click isn't the container...
	        && tooltip_box.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        tooltip.fadeOut('200');
	    }
	});
	

	$('#simple-carousel').jcarousel({
        scroll: 3,
        animation: "150",
        buttonNextHTML: "<div class='arr next'><i></i></div>",
        buttonPrevHTML: "<div class='arr prev'><i></i></div>"
    });

    $('.fancybox').fancybox({
		padding: 0,
		arrows : false
	});

}); /* end of document.ready */

