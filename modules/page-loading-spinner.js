
$('.loadingLayer').appendTo('body');
$('body').addClass('pls-page-loading');

$('document').ready(function () {

	$('body').removeClass('pls-page-loading');
	
	$( ".loadingLayer" ).hide();
})