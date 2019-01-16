
$('.loadingLayer').appendTo('body');

$('document').ready(function () {

	$('body').css('position', 'relative');
	$('body').css('right', 'initial');
	$('body').css('left', 'initial');

	mw.hook( 'pf.formInitializationEnd' ).add( function(div) {
		$( ".loadingLayer" ).hide();
	});

})