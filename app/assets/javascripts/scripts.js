
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

// --------------- Survey ---------------------------//

$('.button_quiz').on('click', function(){
	$('.survey').css('display','block').removeClass('inactive').addClass('active');
	$('.content_container').hide();
})

$('.close_survey').on('click', function() {
	$('.content_container').show();
	$('.survey').css('display', 'none').removeClass('active').addClass('inactive');
})

$('.survey_input').on('keyup', function() {
	if ($('.survey_input').val() !== "") {
		$('.survey_email_submit_button').show()
	} else {
		$('.survey_email_submit_button').hide()
	}
})

$('.survey_email_submit_button.first_button').on('click', function(){
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
	$('.survey_questions.first').addClass('animated zoomOutLeft').one(animationEnd, function(){
		$('.survey_questions.second').css('display', 'block').addClass('animated zoomInRight')
				})
		}
	)

$('.survey_email_submit_button.second_button').on('click', function() {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$('.survey_questions.second').addClass('animated zoomOutLeft').one(animationEnd, function() {
			$('.survey_questions.third').css('display', 'block').addClass('animated zoomInRight')
			})
		}
	)

$('.survey_email_submit_button.third_button').on('click', function() {
	$('.content_container').show();
	$('.survey').css('display', 'none').removeClass('active').addClass('inactive');

})

// // --------------- Scroll Events ---------------------------//

$(window).on('scroll', function() {
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
	var scrolled = $(window).scrollTop();
	if (scrolled > 5 && scrolled < 640){
		$('.background.grey').children().children('p').addClass('animated fadeIn').one(animationEnd, $('.background.grey').children().children('img').addClass('animated zoomInRight') )
	} else if (scrolled > 643 && scrolled < 1290) {
		$('.background.red').children().children('p').addClass('animated fadeIn')
	} else if (scrolled > 1295 && scrolled < 1915) {
		$('.background.blue_green').children().children('p').addClass('animated zoomInRight')
	} else if (scrolled > 1915) {
		$('.background.white').children().children('button:last').addClass('animated bounce infinite')
	}

})
	

// --------------- Show LOGIN SIGNUP ---------------------------//

$(window).on('keyup', function(e){
	if (e.keyCode === 220) {
		$('.login_signup_section').toggle()
	}

})




// --------------- Changing the title word ---------------------------//

			function changeTitle() {
			  nIntervId = setInterval(flashText, 2000);
			}

			function flashText(){
				var title_word = $('.title_word').text()
				if (title_word === "CONQUER") {
					$('.title_word').text("INSPIRE") 
				} else if (title_word === "INSPIRE") {
					$('.title_word').text("FOCUS")
				} else if (title_word === "FOCUS") {
					$('.title_word').text("UPGRADE")
				} else if (title_word === "UPGRADE") {
					$('.title_word').text("CONQUER")
				}
			}

			function stopChangeTitle() {
				clearInterval(nIntervId);
			}

			changeTitle();

			$('.title_button').on('click', stopChangeTitle)


// --------------- Request Submission ---------------------------//

if (!String.prototype.includes) {
  String.prototype.includes = function() {'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}

$('.requests_input').on('keyup', function() {
	if ($('.requests_input').val().includes('@')) {
		$('.requests_email_submit_button').show()
	} else if (!$('.requests_input').val().includes('@')){
		$('.requests_email_submit_button').hide()
	}
})

$('.requests_email_submit_button').on('click', function() {
	var new_request_email = $('.requests_input').val()
	$.ajax({
		url: '/requests',
		method: 'POST',
		data: {email: new_request_email}
	}).done(function(data){
		console.log("added email to list")
	})
})


// --------------- SCROLLING DOWN SPLASH PAGE ---------------------------//


$(".title_button").click(function() {
   $('html,body').animate({scrollTop: $('.grey').offset().top},'slow');
});

$(".cost_button").click(function() {
   $('html,body').animate({scrollTop: $('.blue_green').offset().top},'slow');
});

$(".tell_more_button").click(function() {
   $('html,body').animate({scrollTop: $('.red').offset().top},'slow');
});

$(".sign_me_up_button").click(function() {
   $('html,body').animate({scrollTop: $('.call_to_action_wrapper').offset().top},'slow');
});





		