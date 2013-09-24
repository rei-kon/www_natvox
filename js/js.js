
function topcarousel_initCallback(carousel) {
    $('.jcarousel-control a').bind('click', function() {
    	$('.jcarousel-control a').removeClass('active');
    	$(this).addClass('active');
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).attr('rel')));
        return false;
    });
};

function topcarousel_trigger(carousel, state) {
	var num = carousel.first;
	$('.jcarousel-control a').removeClass('active');
	$('.jcarousel-control a').eq(num-1).addClass('active');
}


$(document).ready( function(){


	/* custom scrollbar init  */
	$("#new-msgs-list, #events-list, #all-person-list, #popular-channels-list, #new-channels-list").mCustomScrollbar({
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

	$('.channels.columns .channels-list .one-channel').hover(
		function () {
			var _this = $(this),
				tooltip = $('.tooltp'),
				ttTitle = tooltip.find('h3'),
				ttAuthor = tooltip.find('p.author'),
				ttText = tooltip.find('.txt'),
				ttClosed = tooltip.find('p.closed'),
				text = _this.find('.descr').html(),
				name = _this.find('.name span').text(),
				author = _this.find('.author').text(),
				mark = _this.find('.closed-mark'),
				w = _this.width(),
				x = _this.offset().left,
				y = _this.offset().top;

			tooltip.css({ top: y-5, left: x+w-15 });
			ttTitle.text(name);
			ttAuthor.text(author);
			ttText.html(text);			

			if ( mark.length > 0 ) {
				ttClosed.removeClass('hidden');
			} else {
				ttClosed.addClass('hidden');
			}

			// tooltip.stop().fadeIn('200');
			tooltip.show();
			
		},
		function () {
			var tooltip = $('.tooltp');

			// tooltip.stop().fadeOut('200');
			tooltip.hide();
		}
	);
	
	if ( $('#simple-carousel').length > 0 ) {
		$('#simple-carousel').jcarousel({
	        scroll: 3,
	        animation: "150",
	        buttonNextHTML: "<div class='arr next'><i></i></div>",
	        buttonPrevHTML: "<div class='arr prev'><i></i></div>"
	    });
	};

	if ( $('#top-carousel').length > 0 ) {
	    $('#top-carousel').jcarousel({
	        scroll: 1,
	        animation: "150",
	        initCallback: topcarousel_initCallback,
	        itemLoadCallback: topcarousel_trigger
	    });
	};    

    $('.fancybox').fancybox({
		padding: 0,
		arrows : false,
		afterShow: function() {
			$('select.styled').dropkick('refresh');
			$('#all-person-list').mCustomScrollbar("update");
			$('.fancybox-inner').css('overflow','visible');
		}
	});

	$('.tabs li').on('click', function(){
		var $this = $(this);
		var tabID = '#'+ $this.attr('rel');
		$('.tabs li').removeClass('active');
		$this.addClass('active');
		$('.tabs-content .one-tab').hide();
		$(tabID).show();
		$('select.styled').dropkick('refresh');
	});

	$('.start-bc-form .add').on('click', function(e){
	    e.preventDefault();
		var $this = $(this);
		$this.toggleClass('opened closed');
		$this.next().slideToggle();
		// $this.next().show();
	});

	$('select.styled').dropkick();

	$('.private-box .person').on('click',function(){
		$(this).toggleClass('selected');
	});

	$('.admission-btn').on('click', function(e){
	    e.preventDefault();
		$(this).next().show();
		$(this).hide();
	});

}); /* end of document.ready */

