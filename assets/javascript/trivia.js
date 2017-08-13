$(document).ready(function(){

	//load in question
	display.question();

});

var game = {
	reset: function() {
		$('#trivia').attr('correct', "0");
		$('#trivia').attr("wrong", "0");
		$('#trivia').attr("num", "0");
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

			if (count >= sec+1) {
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
		game.incNum();

		//display random question
		var question = trivia.questions[tools.getRandom(trivia.questions.length)];
    eval('trivia.'+question+'()');
  	// trivia.radioactive();

		timer.start(5, "question");
	},
	answer: function(correct) {
		timer.stop();
		correct === "1" ? game.incCorrect() : game.incWrong();
		timer.start(5, "answer");
	},
	attachClicks: function() {
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
	}
}

var trivia = {
	symbol: function() {
		//randomly get four elements
		var arr = this.getUniqueElem(4);

		//randomly choose a correct answer
		correctIndex = tools.getRandom(4);

		var selRow1 = $('<div>').addClass('sel-row');
		var selRow2 = $('<div>').addClass('sel-row');

		for (var i = 1; i <= 4; i++) {
			var sel = $('<div>').addClass('selection').attr('id', 'sel' + i);
			sel.text(tools.capFirst(arr[i-1].name));
			(i-1) === correctIndex ? sel.attr('isAnswer', '1') : sel.attr('isAnswer', '0');
			i < 3 ? selRow1.append(sel) : selRow2.append(sel);
		}

		var selBox = $('<div>').addClass('sel-box').attr('id', 'sel_box');
		selBox.append(selRow1);
		selBox.append(selRow2);

		var question = $('<h1>').addClass('question').attr('id', 'question');
		question.html('What element has the symbol: ' + arr[correctIndex].symbol);

		$('.trivia').html(question);
		$('.trivia').append(selBox);

		display.attachClicks();
	},
	number: function() {
		//randomly get four elements
		var arr = this.getUniqueElem(4);

		//randomly choose a correct answer
		correctIndex = tools.getRandom(4);
		
		var selRow1 = $('<div>').addClass('sel-row');
		var selRow2 = $('<div>').addClass('sel-row');

		for (var i = 1; i <= 4; i++) {
			var sel = $('<div>').addClass('selection').attr('id', 'sel' + i);
			sel.text(tools.capFirst(arr[i-1].name));
			(i-1) === correctIndex ? sel.attr('isAnswer', '1') : sel.attr('isAnswer', '0');
			i < 3 ? selRow1.append(sel) : selRow2.append(sel);
		}

		var selBox = $('<div>').addClass('sel-box').attr('id', 'sel_box');
		selBox.append(selRow1);
		selBox.append(selRow2);

		var question = $('<h1>').addClass('question').attr('id', 'question');
		question.html('What element has the atomic number: ' + arr[correctIndex].number);

		$('.trivia').html(question);
		$('.trivia').append(selBox);

		display.attachClicks();
	},
	radius: function() {
		//randomly get four elements
		var arr = this.getUniqueKey(4, "radius");
 		console.log(arr);
		//assign correct
		correctIndex = tools.getMaxAttrIndex(arr, "radius");
		console.log(correctIndex);
		
		var selRow1 = $('<div>').addClass('sel-row');
		var selRow2 = $('<div>').addClass('sel-row');

		for (var i = 1; i <= 4; i++) {
			var sel = $('<div>').addClass('selection').attr('id', 'sel' + i);
			sel.text(tools.capFirst(arr[i-1].name));
			(i-1) === correctIndex ? sel.attr('isAnswer', '1') : sel.attr('isAnswer', '0');
			i < 3 ? selRow1.append(sel) : selRow2.append(sel);
		}

		var selBox = $('<div>').addClass('sel-box').attr('id', 'sel_box');
		selBox.append(selRow1);
		selBox.append(selRow2);

		var question = $('<h1>').addClass('question').attr('id', 'question');
		question.html('Which element is largest?');

		$('.trivia').html(question);
		$('.trivia').append(selBox);

		display.attachClicks();
	},
	// eleneg: function() {

	// },
	// eleaff: function() {

	// },
	// member: function() {

	// },
	// period: function() {

	// },
	// group: function() {

	// },
	radioactive: function() {
		//randomly get four elements
		var arr = this.getUniqueBool(4, "radioactive");
		
		var selRow1 = $('<div>').addClass('sel-row');
		var selRow2 = $('<div>').addClass('sel-row');

		for (var i = 1; i <= 4; i++) {
			var sel = $('<div>').addClass('selection').attr('id', 'sel' + i);
			sel.text(tools.capFirst(arr[i-1].name));
			arr[i-1].radioactive ? sel.attr('isAnswer', '1') : sel.attr('isAnswer', '0');
			i < 3 ? selRow1.append(sel) : selRow2.append(sel);
		}

		var selBox = $('<div>').addClass('sel-box').attr('id', 'sel_box');
		selBox.append(selRow1);
		selBox.append(selRow2);

		var question = $('<h1>').addClass('question').attr('id', 'question');
		question.html('Which element is radioactive?');

		$('.trivia').html(question);
		$('.trivia').append(selBox);

		display.attachClicks();
	},
	getUniqueElem: function(num) {
		var arr = [];
		for (var i = 0; i < num; i++) {
			var rand = tools.getRandom(elements.length);
			if (arr.indexOf(elements[rand]) === -1) {
				arr.push(elements[rand]);
			}
			else {i--;}
		}
		return arr;
	},
	getUniqueKey: function(num, key) {
		var arr = [];
		var arrKey = [];
		for (var i = 0; i < num; i++) {
			var rand = tools.getRandom(elements.length);
			if (arr.indexOf(elements[rand]) === -1 && elements[rand][key] != null) {
				if (arrKey.indexOf(elements[rand][key]) === -1) {
					arr.push(elements[rand]);
					arrKey.push(elements[rand][key]);
				}
			}
			else {i--;}
		}
		return arr;
	},
	getUniqueBool: function(num, key) {
		var arr = [];

		//get a key of true
		var gotKey = false;
		while (!gotKey) {
			var rand = tools.getRandom(elements.length);
			if (elements[rand][key]) {
				arr.push(elements[rand]);
				gotKey = true;
			}
		}

		for (var i = 1; i < num; i++) {
			var rand = tools.getRandom(elements.length);
			if (arr.indexOf(elements[rand]) === -1 && !elements[rand][key]) {
					arr.push(elements[rand]);
			}
			else {i--;}
		}

		return tools.shuffle(arr);
	},
	questions: ["symbol", "number", "radius", "radioactive"]
}