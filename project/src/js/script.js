// JavaScript Document
window.onload = function(){
	console.log("Junior developer test.");
	
	// declare your variables here.
	var background;
	var canvas;
	var deezer;
	var ms;
	var logo;
	var chooseReward;
	var f1Blue;
	var joinSky;
	var lineRental;
	var skyStamp;
	var cta;
	var yearFree;
	var f3Blue;
	var limited;
	var f3grey;
	
	// store a reference to the canvas which we will draw on.
	var stage = new createjs.Stage("stage");
	
	// register the stage to handle mouse events. 
	stage.enableMouseOver(10);
	
	// register the Ticker to listen for the tick event.
	createjs.Ticker.addEventListener("tick", handleTick, false);
	
	// redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
	function handleTick(event) {
		stage.update();
	}
	
	// create a preloader to load the images.
	var loader = new createjs.LoadQueue(false);
	
	// when all images are loaded call the handleAllImageLoaded function.
	loader.on('complete', handleAllImagesLoaded, this);
	
	// provide a manifest of files and ids to be loaded.
	loader.loadManifest([
		{id: "background", src:"images/background.png"},
		{id: "logo", src:"images/skylogo.png"},
		{id: "ms", src:"images/100-MandS.png"},
		{id: "deezer", src:"images/deezer.png"},
		{id: "chooseReward", src:"images/choose-reward.png"},
		{id: "f1Blue", src:"images/frame1-blue-text.png"},
		{id: "joinSky", src:"images/join-sky.png"},
		{id: "lineRental", src:"images/line-rental.png"},
		{id: "skyStamp", src:"images/sky-stamp.png"},
		{id: "cta", src:"images/cta.png"},
		{id: "yearFree", src:"images/1-year-free.png"},
		{id: "f3Blue", src:"images/frame3-blue-text.png"},
		{id: "limited", src:"images/limited-time.png"},
		{id: "f3grey", src:"images/frame3-grey-text.png"}
	]);
	
	function handleAllImagesLoaded() {
		console.log("All the images have loaded.");
		drawTheBannerBackground();
	}
	
	function drawTheBannerBackground() {
		console.log("draw and animate the background.");
		
		// provide the loader result for the item with id == 'background'
		// as a bitmap which will be stored in our background variable.
		background = new createjs.Bitmap( loader.getResult( "background" ) );
		
		// set the background bitmap alpha to zero.
		background.alpha = 1;
		
		// add background to the display list.
		stage.addChild( background );
		
		// animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
		//createjs.Tween.get( background ).to( {alpha:1}, 1000 );
		
		// after the background is drawn on the canvas draw and animate the content for frame 1.
		setTimeout(frame1, 100);
	}
	
	function frame1() {
		console.log("draw and animate frame one.");
		
		// refer to the creative brief, frame 1 for guidance.

		//sky logo
		logo = new createjs.Bitmap( loader.getResult( "logo" ) );
		logo.alpha = 1;
		stage.addChild ( logo );
		logo.x = 20;
		logo.y = 205;
		createjs.Tween.get( logo ).to( {alpha:1}, 0 );

		//deezer product
		deezer = new createjs.Bitmap( loader.getResult( "deezer" ) );
		deezer.alpha = 1;
		stage.addChild ( deezer );
		deezer.x = 57;
		deezer.y = 115;
		createjs.Tween.get( deezer ).to( {alpha:1}, 0 );

		//m and s product
		ms = new createjs.Bitmap( loader.getResult( "ms" ) );
		ms.alpha = 1;
		stage.addChild ( ms );
		ms.x = 163;
		ms.y = 115;
		createjs.Tween.get( ms ).to( {alpha:1}, 0 );

		//gradient text
		chooseReward = new createjs.Bitmap( loader.getResult( "chooseReward" ) );
		chooseReward.alpha = 0;
		stage.addChild ( chooseReward );
		chooseReward.x = 56;
		chooseReward.y = 19;
		createjs.Tween.get( chooseReward ).wait( 0 ).to( {alpha:1}, 1000 );

		//blue text
		f1Blue = new createjs.Bitmap( loader.getResult( "f1Blue" ) );
		f1Blue.alpha = 0;
		stage.addChild ( f1Blue );
		f1Blue.x = 65;
		f1Blue.y = 45;
		createjs.Tween.get( f1Blue ).wait( 1000 ).to( {alpha:1}, 1000 );

		// after a timeout and the animations have completed, draw frame 2.
		setTimeout(frame2, 3000);
	}
	
	function frame2() {
		console.log("draw and animate frame two.");
		
		// refer to the creative brief, frame 2 for guidance.

		//fade out
		createjs.Tween.get( deezer ).wait( 0 ).to( {alpha:0}, 1000 );
		createjs.Tween.get( ms ).wait( 0 ).to( {alpha:0}, 1000 );
		createjs.Tween.get( chooseReward ).wait( 0 ).to( {alpha:0}, 1000 );
		createjs.Tween.get( f1Blue ).wait( 0 ).to( {alpha:0}, 1000 );

		//join sky gradient text
		joinSky = new createjs.Bitmap( loader.getResult( "joinSky" ) );
		joinSky.alpha = 0;
		stage.addChild ( joinSky );
		joinSky.x = 42;
		joinSky.y = 27;
		createjs.Tween.get( joinSky ).wait( 1000 ).to( {alpha:1}, 1000 );

		//grey line rental text
		lineRental = new createjs.Bitmap( loader.getResult( "lineRental" ) );
		lineRental.alpha = 0;
		stage.addChild ( lineRental );
		lineRental.x = 127;
		lineRental.y = 220;
		createjs.Tween.get( lineRental ).wait( 2000 ).to( {alpha:1}, 1000 );

		//sky stamp
		skyStamp = new createjs.Bitmap( loader.getResult( "skyStamp" ) );
		skyStamp.y = -145;
		stage.addChild ( skyStamp );
		skyStamp.x = 66;
		//skyStamp.y = 65;
		createjs.Tween.get( skyStamp ).wait( 2000 ).to( {y:65}, 1000, createjs.Ease.bounceOut );
		
		// after a timeout and the animations have completed, draw frame 3.
		setTimeout(frame3, 4000);
	}
	
	function frame3() {
		console.log("draw and animate frame three.");
		
		// refer to the creative brief, frame 3 for guidance.

		//fade out
		createjs.Tween.get( joinSky ).wait( 0 ).to( {alpha:0}, 1000 );
		createjs.Tween.get( lineRental ).wait( 0 ).to( {alpha:0}, 1000 );
		createjs.Tween.get( skyStamp ).wait( 0 ).to( {alpha:0}, 1000 );

		//cta button
		cta = new createjs.Bitmap( loader.getResult( "cta" ) );
		cta.alpha = 0;
		stage.addChild ( cta );
		cta.x = 147;
		cta.y = 203;
		createjs.Tween.get( cta ).wait( 1000 ).to( {alpha:1}, 0 );

		//gradient text
		yearFree = new createjs.Bitmap( loader.getResult( "yearFree" ) );
		yearFree.alpha = 0;
		stage.addChild ( yearFree );
		yearFree.x = 11;
		yearFree.y = 31;
		createjs.Tween.get( yearFree ).wait( 2000 ).to( {alpha:1}, 1000 );

		//blue text
		f3Blue = new createjs.Bitmap( loader.getResult( "f3Blue" ) );
		f3Blue.alpha = 0;
		stage.addChild ( f3Blue );
		f3Blue.x = 41;
		f3Blue.y = 85;
		createjs.Tween.get( f3Blue ).wait( 3000 ).to( {alpha:1}, 1000 );

		//limited offer gradient
		limited = new createjs.Bitmap( loader.getResult( "limited" ) );
		limited.alpha = 0;
		stage.addChild ( limited );
		limited.x = 74;
		limited.y = 140;
		createjs.Tween.get( limited ).wait( 4000 ).to( {alpha:1}, 1000 );

		//grey text
		f3grey = new createjs.Bitmap( loader.getResult( "f3grey" ) );
		f3grey.alpha = 0;
		stage.addChild ( f3grey );
		f3grey.x = 85;
		f3grey.y = 182;
		createjs.Tween.get( f3grey ).wait( 5000 ).to( {alpha:1}, 1000 );

		//cta animated sheen

	}
	
};