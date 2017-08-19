$(document).ready(function(){

	$('#reset').on('click', function(){
		game.reset();
		var maxNum = $('#number_questions').val();
		maxNum === "" ? maxNum = 4 : maxNum = parseInt($('#number_questions').val())-1;
		$('#trivia').attr('maxNum', maxNum);
		display.question();
	});

});

var game = {
	reset: function() {
		$('#trivia').attr('correct', "0");
		$('#trivia').attr("wrong", "0");
		$('#trivia').attr("num", "0");
		$('#correct').html("Correct: 0");
		$('#wrong').html("Wrong: 0");
	},
	incCorrect: function() {
		var correct = parseInt($('#trivia').attr("correct"));
		correct++;
		$('#trivia').attr('correct', correct);
		$('#correct').html("Correct: " + correct);
	},
	incWrong: function(num) {
		var wrong = parseInt($('#trivia').attr("wrong"));
		if (num !== "-1") {
			wrong++;
		}
		$('#trivia').attr("wrong", wrong);
		$('#wrong').html("Wrong: " + wrong);
	},
	incNum: function() {
		var num = parseInt($('#trivia').attr("num"));
		num++;
		var maxNum = parseInt($('#trivia').attr('maxNum'))+1;
		$('#trivia').attr("num", num);
		$('#num').html(num + " / " + maxNum);
	}
}

var timer = {
	start: function(sec, currentPage) {
		$('#timer').text("Timer: " + sec);
		$('#timer').attr('count', "0");

		$('#timer').attr('intervalId', setInterval(function() {
			var count = parseInt($('#timer').attr('count'));
			count++;
			$('#timer').attr('count', count);
			var timer = sec - count;
			$('#timer').text("Timer: " + timer);

			if (count >= sec+1) {
				currentPage === "answer" ? display.question() : display.answer("-1");
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
		var maxNum = $('#trivia').attr('maxNum');
		parseInt($('#trivia').attr("num")) > maxNum ? this.stats() : this.callQuestion();
	},
	callQuestion: function() {
		game.incNum();

		//display random question
		var question = trivia.questions[tools.getRandom(trivia.questions.length)];
    eval('trivia.'+question+'()');

		timer.start(8, "question");
	},
	answer: function(correct) {
		timer.stop();
		$('.selection').off('click');
		$('.selection').removeClass('sel-hover');

		correct === "1" ? game.incCorrect() : game.incWrong(correct);

		for (var i = 1; i <= 4; i++) {
			$('#sel'+i).html('<h2>' + tools.capFirst($('#sel'+i).attr('name')) + '</h2>');
			$('#sel'+i).append('<p>' + $('#sel'+i).attr('mark') + '</p>');
			$('.selection').css('line-height', '30px');

			if ($('#sel'+i).attr('isAnswer') === "1") {
				$('#sel'+i).css('background-color', '#90EE90');
			}
		}

		timer.start(3, "answer");
	},
	stats: function() {
		$('#timer').text("--");
		var percentCorrect = Math.round((parseInt($('#trivia').attr('correct'))
												 / parseInt($('#trivia').attr('num'))) * 100);
		var percentWrong = Math.round((parseInt($('#trivia').attr('wrong'))
											 / parseInt($('#trivia').attr('num'))) * 100);
		var percentAnswered = Math.round((parseInt($('#trivia').attr('correct'))
												  + parseInt($('#trivia').attr('wrong')))
													/ parseInt($('#trivia').attr('num')) * 100);

		$('#trivia').html("<h1>Statistics</h1>");
		var div = $('<div>').addClass('stat-wrapper');
		div.append("<p>Correct: " + percentCorrect + "%</p>");
		div.append("<p>Wrong: " + percentWrong + "%</p>");
		div.append("<p>Unanswered: " + (100-percentAnswered) + "%</p>");

		var btn = $('<button>').attr('id', 'reset').text("Again?");
		btn.on('click', function(){
			game.reset();
			display.question();
		});
		div.append(btn);

		$('#trivia').append(div);
	},
	makeBoxes: function(arr, key, correctIndex) {
		var selRow1 = $('<div>').addClass('sel-row');
		var selRow2 = $('<div>').addClass('sel-row');

		for (var i = 1; i <= 4; i++) {
			var sel = $('<div>').addClass('selection').attr('id', 'sel' + i);
			sel.addClass('sel-hover');
			sel.text(tools.capFirst(arr[i-1].name));
			sel.attr('name', arr[i-1].name);
			sel.attr('mark', arr[i-1][key]);
			if (key === "radioactive") {
				arr[i-1][key] ? sel.attr('isAnswer', '1') : sel.attr('isAnswer', '0');
			}
			else {
				(i-1) === correctIndex ? sel.attr('isAnswer', '1') : sel.attr('isAnswer', '0');
			}
			i < 3 ? selRow1.append(sel) : selRow2.append(sel);
		}

		var selBox = $('<div>').addClass('sel-box').attr('id', 'sel_box');
		selBox.append(selRow1);
		selBox.append(selRow2);

		return selBox;
	},
	attachClicks: function() {
		for (var i = 1; i <= 4; i++) {
			$('#sel'+i).on('click', function() {
				display.answer($(this).attr('isAnswer'));
				if ($(this).attr('isAnswer')==="0") {
					$(this).css('background-color', '#DC143C');
				}
			});
		}
	}
}
