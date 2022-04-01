$(function($) {
	$("#draggable").draggable($);
});

$(function($) {
	$(".tree").draggable($);
});

$(function($) {
	$(".bush").draggable($);
});

$(document).ready(function($) {
	$('.darkostrov-open').click(function() {
		$('.darkostrov-fade').fadeIn();
		return false;
	});

	$('.darkostrov-close').click(function() {
		$(this).parents('.darkostrov-fade').fadeOut();
		return false;
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.darkostrov-fade').fadeOut();
		}
	});

	$('.darkostrov-fade').click(function(e) {
		if ($(e.target).closest('.darkostrov').length == 0) {
			$(this).fadeOut();
		}
	});
});




$(document).ready(function(){
    $("button").click(function(){
        $("p5").addClass("hide");
				$("#ostrovtima").addClass("hide");
				$("#button").addClass("hide");
        $("#candle").addClass("appear");
    });
});

$(document).ready(function(){
    $(".candle").click(function(){
		$("#candlebefore").attr("src", "images/candle1.svg");
    });
});

$(document).ready(function(){
    $("#candlebefore").click(function(){
		$("#ostrovtima").removeClass("hide");
		$("#candlebefore").addClass("hide");
		$("p7").addClass("appear");
		$(".button2").addClass("appear1");
    });
});

$(document).ready(function($) {
$('.button2').click(function() {
		$(this).parents('.darkostrov-fade').fadeOut();
		return false;
	});
});



$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});

	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});

	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();
		}
	});
});

// $(document).ready(function(){
//     $("#button3").click(function(){
//         $("p10").addClass("hide");
// 				$("#button").addClass("hide");
// 				});
// });

$(document).ready(function(){
    $("#button3").click(function(){
        $("p10").addClass("hide");
				$("#shades").addClass("hide");
				$("#button3").addClass("hide");
				$(".sun").addClass("appear1");
			});
	});

	$(document).ready(function(){
	    $(".sun").click(function(){
					$(".sun").removeClass("appear1");
					$(".wings").addClass("hide");
				  $("p12").addClass("appear");
					$("#shades").removeClass("hide");
          $(".button2").addClass("appear1");
				});
		});

		// $(document).ready(function(){
		//     $("#ship").click(function(){
		// 			console.log("lolololo");
		// 			$("#ministerstvo").addClass("hide");
		//     });
		// });







		$(document).ready(function($) {
	$('.popup-open1').click(function() {
		$('.popup-fade1').fadeIn();
		return false;
	});

	$('.popup-close1, .button2').click(function() {
		$(this).parents('.popup-fade1').fadeOut();
		return false;
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade1').fadeOut();
		}
	});

	$('.popup-fade1').click(function(e) {
		if ($(e.target).closest('.popup1').length == 0) {
			$(this).fadeOut();
		}
	});
});



$(document).ready(function(){
    $(".ship").click(function(){
		$("#ship").attr("src", "images/ship1.svg");
    });
});


$(document).ready(function(){
    $(".Os-Alta").click(function(){
		$("#OsAlta").attr("src", "images/OsAlta1.png");
    });
});
