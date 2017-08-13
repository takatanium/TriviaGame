$(document).ready(function(){

	//load in question
	display.question();

});

var trivia = {
	reset: function() {

	},
	incCorrect: function() {
		var correct = parseInt($('#trivia').attr("correct"));
		correct++;
		$('#trivia').attr('correct', correct);
		$('#correct').html("Correct: " + correct);
		$('#sel_box').html("Correct");
	},
	incWrong: function() {
		var wrong = parseInt($('#trivia').attr("wrong"));
		wrong++;
		$('#trivia').attr("wrong", wrong);
		$('#wrong').html("Wrong: " + wrong);
		$('#sel_box').html("Wrong");
	},
	incNum: function() {
		var num = parseInt($('#trivia').attr("num"));
		num++;
		$('#trivia').attr("num", num);
		$('#num').html("Num: " + num);
	}
}

var timer = {
	start: function(sec, currentPage) {
		$('#timer').text(sec);
		$('#timer').attr('count', "0");

		$('#timer').attr('intervalId', setInterval(function() {

			var count = parseInt($('#timer').attr('count'));
			count++;
			$('#timer').attr('count', count);
			$('#timer').text(sec - count);

			if (count === sec+1) {
				currentPage === "answer" ? display.question() : display.answer("0");
			}
		}, 1000));
	},
	stop: function() {
		clearInterval($('#timer').attr('intervalId'));
	}
}

var display = {
	question: function() {
		timer.stop();
		trivia.incNum();

		var sel1 = $('<div>').addClass('selection').attr('id', 'sel1');
		sel1.text('Carbon');
		sel1.attr('isAnswer', '0');
		var sel2 = $('<div>').addClass('selection').attr('id', 'sel2');
		sel2.text('Fluorine');
		sel2.attr('isAnswer', '1');
		var sel3 = $('<div>').addClass('selection').attr('id', 'sel3');
		sel3.text('Oxygen');
		sel3.attr('isAnswer', '0');
		var sel4 = $('<div>').addClass('selection').attr('id', 'sel4');
		sel4.text('Chlorine');
		sel4.attr('isAnswer', '0');

		var selRow1 = $('<div>').addClass('sel-row');
		var selRow2 = $('<div>').addClass('sel-row');
		selRow1.append(sel1);
		selRow1.append(sel2);
		selRow2.append(sel3);
		selRow2.append(sel4);

		$('.sel-box').html(selRow1);
		$('.sel-box').append(selRow2);

		$('#sel1').on('click', function() {
			display.answer($('#sel1').attr('isAnswer'));
		});
		$('#sel2').on('click', function() {
			display.answer($('#sel2').attr('isAnswer'));
		});
		$('#sel3').on('click', function() {
			display.answer($('#sel3').attr('isAnswer'));
		});
		$('#sel4').on('click', function() {
			display.answer($('#sel4').attr('isAnswer'));
		});

		timer.start(5, "question");
	},
	answer: function(correct) {
		timer.stop();
		correct === "1" ? trivia.incCorrect() : trivia.incWrong();
		timer.start(5, "answer");
	}
}