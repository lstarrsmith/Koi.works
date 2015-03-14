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


// ----------------CHAT ON USER PAGE ----------//


// Chat function using Firebase only called on the users/:id show page

function initChat() {
	var dbref = new Firebase('https://fox-fit.firebaseio.com/');

	var groupRef = dbref.child(group_data.id)

	var messages = groupRef.child("messages")

	groupRef.on("child_added", function(snapshot){
		if (snapshot.val().group_id == group_data.id) {
		var newMessage = $("<li>").text(snapshot.val().user_fname + ": " + snapshot.val().message)
		$("#chat-log").append(newMessage)
		var total = $('ul').prop('scrollHeight')
		$('ul').scrollTop(total)
		}
	});

	$(function(){

		$('.chat_form').on('submit', function(e){
			e.preventDefault();
			var $input = $('.chat_message');
			var message = $input.val();
			groupRef.push({user_id: user_data.id, user_fname: user_data.fname, group_id: group_data.id, group_name: group_data.name, message: message});
			$input.val("")
		})

	});
}

$('.remove_user_from_group').on("click", function(event) {
		user_id = parseInt(event.target.id)
		group_id = parseInt(event.target.parentElement.parentElement.id)
		admin_id = admin_data.id
		$.ajax({
			url:'/admin/' + admin_id.toString() + '/memberships',
			method: "GET"
		}).done(function(data){


		}
		)
})



// --------------- Show LOGIN SIGNUP ---------------------------//

$(window).on('keyup', function(e){
	if (e.keyCode === 220) {
		$('.login_signup_section').toggle()
	}

})



// --------------- Request Submission ---------------------------//

if (!String.prototype.includes) {
  String.prototype.includes = function() {'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}

// need wrap this in a function to use elsewhere for consistency

$('.requests_input').on('keyup', function() {
	if ($('.requests_input').val().includes('@')) {
		$('.requests_email_submit_button').show()
	} else if (!$('.requests_input').val().includes('@')){
		$('.requests_email_submit_button').hide()
	}
})

$('.requests_email_submit_button').on('click', function() {
	$('#sign_up div').hide()
	$('.requests_input').val("")
	var new_request_email = $('.requests_input').val()
	$.ajax({
		url: '/requests',
		method: 'POST',
		data: {email: new_request_email}
	}).done(function(data){
		console.log("added email to list")
		$('#sign_up h3').text("Thanks! We'll be in touch when we're ready for you!").addClass('animated flipInX')	
		$('.content_footer').hide();
	})
})


// --------------- SCROLLING DOWN SPLASH PAGE ---------------------------//


$("#logo").click(function() {
   $('html,body').animate({scrollTop: $('.banner').offset().top},'slow');
});

$(".how_it_works_nav").click(function() {
   $('html,body').animate({scrollTop: $('#how_it_works').offset().top},'slow');
});

$(".examples_nav").click(function() {
   $('html,body').animate({scrollTop: $('#spectrum').offset().top},'slow');
});

$(".sign_up_nav").click(function() {
   $('html,body').animate({scrollTop: $('#sign_up').offset().top},'slow');
});

$(".content_footer").click(function() {
   $('html,body').animate({scrollTop: $('#sign_up').offset().top},'slow');
});





		