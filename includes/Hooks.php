<?php

namespace PageLoadingSpinner;

use OutputPage;
use ParserOutput;

class Hooks {

	static $enableSpinner = false;

	static function start( $pFFormEdit) {
		global $wgOut;

		self::$enableSpinner = true;

		return true;
	}

	public static function onBeforePageDisplay( $out ) {

		if( ! self::$enableSpinner) {
			return;
		}

		$out->addModules ( 'ext.pageLoadingSpinner.js' );
		$out->addModuleStyles ( 'ext.pageLoadingSpinner.css' );

		$out->addHTML('<div class="loadingLayer"><div class="loadingSpinner"><p>'.wfMessage('pageloadingspinner-loadinglayer-label').'</p><i class="fa fa-spinner fa-spin"></i></div></div>');

	}

}