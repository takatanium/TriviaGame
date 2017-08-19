var trivia = {
	symbol: function() {
		//randomly get four elements
		var arr = this.getUniqueElem(4);

		//randomly choose a correct answer
		correctIndex = tools.getRandom(4);
		var selBox = trivia.makeBoxes(arr, "symbol", correctIndex);

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
		var selBox = trivia.makeBoxes(arr, "number", correctIndex);

		var question = $('<h1>').addClass('question').attr('id', 'question');
		question.html('What element has the atomic number: ' + arr[correctIndex].number);

		$('.trivia').html(question);
		$('.trivia').append(selBox);

		display.attachClicks();
	},
	radius: function() {
		//randomly get four elements
		var arr = this.getUniqueKey(4, "radius");

		//assign correct
		correctIndex = tools.getMaxAttrIndex(arr, "radius");
		var selBox = trivia.makeBoxes(arr, "radius", correctIndex);

		var question = $('<h1>').addClass('question').attr('id', 'question');
		question.html('Which element is largest?');

		$('.trivia').html(question);
		$('.trivia').append(selBox);

		display.attachClicks();
	},
	eleneg: function() {
		//randomly get four elements
		var arr = this.getUniqueKey(4, "eleneg");

		//assign correct
		correctIndex = tools.getMaxAttrIndex(arr, "eleneg");
		var selBox = trivia.makeBoxes(arr, "eleneg", correctIndex);

		var question = $('<h1>').addClass('question').attr('id', 'question');
		question.html('Which element has the greatest electronegativity?');

		$('.trivia').html(question);
		$('.trivia').append(selBox);

		display.attachClicks();
	},
	eleaff: function() {
		//randomly get four elements
		var arr = this.getUniqueKey(4, "eleaff");

		//assign correct
		correctIndex = tools.getMaxAttrIndex(arr, "eleaff");
		var selBox = trivia.makeBoxes(arr, "eleaff", correctIndex);

		var question = $('<h1>').addClass('question').attr('id', 'question');
		question.html('Which element has the greatest electron affinity?');

		$('.trivia').html(question);
		$('.trivia').append(selBox);

		display.attachClicks();
	},
	member: function() {
		//randomly get four elements
		var arr = this.getUniqueKey(4, "member");

		//randomly choose a correct answer
		correctIndex = tools.getRandom(4);
		var selBox = trivia.makeBoxes(arr, "member", correctIndex);

		var memberType = arr[correctIndex].member;
		var question = $('<h1>').addClass('question').attr('id', 'question');
		question.html('Which element is a '+ memberType +'?');

		$('.trivia').html(question);
		$('.trivia').append(selBox);

		display.attachClicks();
	},
	radioactive: function() {
		//randomly get four elements
		var arr = this.getUniqueBool(4, "radioactive");
		
		var selBox = trivia.makeBoxes(arr, "radioactive", 0);
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
				else {i--;}
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
	questions: ["symbol", "number", "radius", "radioactive", "eleneg", "eleaff", "member"],
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
	}
}