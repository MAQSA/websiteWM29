
// Cycle plugin config
jQuery(document).ready(function($){
    var c3TransitionType = "scrollRight";
    var c3Autostop = 0;
    var c3Speed = 500;
    var c3Timeout = 5000;
    var c3Sync = 0;

    // Cover the scenario of having only one slide
        if ( $("#slider > li").size() == 1 ) {
            if ( c3Autostop == 1 ) {
                // sliding image
                $('#slider').find('.sliding-image').css({'display':'block'}).delay(50).animate({'left':'10px', 'opacity':1}, 250, 'easeOutQuad');
                // sliding text
                $('#slider').find('.sliding-text').css({'display':'block'}).delay(250).animate({'right':'10px', 'opacity':1}, 350, 'easeOutQuad');
            } else {
                // Clone the first slide (only if there's one slide) to be able to initiate the transision effects
                $('#slider li:eq(0)').clone().insertAfter('#slider li:eq(0)');
            }
        }
        
	/* homepage slider params */
	$('#slider').cycle({
	    fx:			c3TransitionType,
        easing:     'easeOutQuad',
        autostop:   c3Autostop,
	    before:		onBefore,
	    after:		onAfter,
	    speed:		c3Speed,
	    timeout:    c3Timeout,
	    sync:		c3Sync,
	    randomizeEffects:	0,
	    prev:		'#slider-prev',
	    next:		'#slider-next',
	    pager:		'#nav'
	});
        
	function onBefore(curr, next, opts, fwd) {
            // sliding image
            $(next).find('.sliding-image').css({'display':'none', 'left':'-940px'});
            // sliding text
            $(next).find('.sliding-text').css({'display':'none', 'right':'-940px'});
	}
	function onAfter(curr, next, opts, fwd) {
            // sliding image
            $(this).find('.sliding-image').css({'display':'block'}).delay(50).animate({'left':'10px', 'opacity':1}, 250, 'easeOutQuad');
            // sliding text
            $(this).find('.sliding-text').css({'display':'block'}).delay(250).animate({'right':'10px', 'opacity':1}, 350, 'easeOutQuad');
	}

	$('#pauseButton').click(function() {
	    $('#slider').cycle('pause');
	    return false;
	});

	$('#resumeButton').click(function() {
	    $('#slider').cycle('resume', true);
	    return false;
	});


});