

$('.loadingLayer').appendTo('body');

$('document').ready(function () {


	var action = mw.config.get('wgAction');

	// if action = formedit, and there is e pageForm form, use the PF hook
	if (action == 'formedit' && $('#pfForm').length > 0) {
		mw.hook( 'pf.formInitializationEnd' ).add( function(div) {
			$('body').css('position', 'relative');
			$('body').css('right', 'initial');
			$('body').css('left', 'initial');
			$( ".loadingLayer" ).hide();
		});
	} else {
		$('body').css('position', 'relative');
		$('body').css('right', 'initial');
		$('body').css('left', 'initial');
		$( ".loadingLayer" ).hide();
	}

})