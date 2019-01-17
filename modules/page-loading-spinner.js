
$('.loadingLayer').appendTo('body');

$('document').ready(function () {


	var action = mw.config.get('wgAction');

	if (action == 'formedit') {
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