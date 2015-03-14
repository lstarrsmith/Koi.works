
$(document).ready(function(){

//----------- Banner title fadein scroll------------//

	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	function changeHeader() {
		setInterval(updateHeaderText, 2500);
	}

	function updateHeaderText(){
		var banner_text = $('.banner_headline').text()

		if (banner_text === "Free movement with friends"){
			$('.banner_headline').text("Twice a week for 30 minutes").addClass('animated fadeInDown').one(animationEnd, function(){
				$('.banner_headline').removeClass('animated fadeInDown')
			})
		} else if (banner_text === "Twice a week for 30 minutes") {
			$('.banner_headline').text("You stay active, social and comfortable").addClass('animated fadeInDown').one(animationEnd, function(){
				$('.banner_headline').removeClass('animated fadeInDown')
				})
		} else if (banner_text === "You stay active, social and comfortable") {
			$('.banner_headline').text("So you can focus on the important things").addClass('animated fadeInDown').one(animationEnd, function(){
				$('.banner_headline').removeClass('animated fadeInDown')
				})
		} else if (banner_text === "So you can focus on the important things") {
			$('.banner_headline').text("Free movement with friends").addClass('animated fadeInDown').one(animationEnd, function(){
				$('.banner_headline').removeClass('animated fadeInDown')
				})
		}
	}

	changeHeader();


	// -----------background image change -------------/
		var image_classes = [
			'hula',
			'hiking',
			'kites',
			'walking'
		]

		var curImage = 0;
		setInterval(changeImage, 2500);

		function changeImage(){
			if (curImage == image_classes.length){
				curImage = 0
			}
			if (curImage < 3 ) {
				$('.banner').removeClass(image_classes[curImage]).addClass(image_classes[curImage+1])
				curImage++;
			} else {
				$('.banner').removeClass(image_classes[curImage]).addClass(image_classes[0])
				curImage++;
			}

			
		}


// ------------ Scroll Events --------------------------//

$(window).on('scroll', function() {
	var scrolled = $(window).scrollTop();
	
	// top nav bar control
	if (scrolled > 5){
		if (!$('.navbar').hasClass('condense')) {
			$('.navbar').addClass('condense');
		} 	
	} else {
		if ($('.navbar').hasClass('condense')) {
			$('.navbar').removeClass('condense');
		}
	}

	scroll_before_sign_up = $('.banner').height() + $('#how_it_works').height() + $('#spectrum').height() 
	

	if (scrolled > scroll_before_sign_up) {
		var opacity = 1- ((scrolled - scroll_before_sign_up) / 200)
		$('.content_footer').css('opacity', opacity)
		
	} else {
		$('.content_footer').css('opacity', "1")
	}
	// footer call to action control


	
})



})

