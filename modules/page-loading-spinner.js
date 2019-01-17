
$('.loadingLayer').appendTo('body');

$('document').ready(function () {

	$('body').css('position', 'relative');
	$('body').css('right', 'initial');
	$('body').css('left', 'initial');

	var action = mw.config.get('wgAction');

	if (action == 'formedit') {
		mw.hook( 'pf.formInitializationEnd' ).add( function(div) {
			$( ".loadingLayer" ).hide();
		});
	} else {
		$( ".loadingLayer" ).hide();
	}

})