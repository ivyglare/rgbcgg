// Problems - "New Color" / Reset" button now working.

var numberSquares = 3;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");

var difBtn = [document.querySelector("#easy"), document.querySelector("#med"), document.querySelector("#hard")];
var e = document.querySelector("#easy");
var m = document.querySelector("#med");
var h = document.querySelector("#hard");

//call setupBtn()
//setDifficulty();
//testEasy();
setupBtn();
init();

function init(){
	setupSquares();
	reset();
}

function setDifficulty(){
	for (var i = 0; i < difBtn.length; i++) {
		difBtn[i].addEventListener("click", function() {
			numberSquares = 3 * (i + 1);
			difBtn[i].style.background = "steelblue";
			init();
		});
	}
}
//setup button to enable "Play Again" and "New Color" functions
function setupBtn(){
	resetBtn.addEventListener("click", function(){
		/*if (resetBtn.textContent == "Play Again?"){
			init();
		} else if (resetBtn.textContent == "New Colors"){
			reset();
		}*/
		init();
	});
/*	for (var i = 0; i < difBtn.length; i++) {
		difBtn[i].addEventListener("click", function() {
			numberSquares = 3 * (i + 1);
			//difBtn[i].style.background = "steelblue";
			//difBtn[i].style.color = "white";
			init();
		});
	}
	*/e.addEventListener("click", function() {
		numberSquares = 3;
		e.style.background = "steelblue";
		e.style.color = "white";
		m.style.background = "white";
		m.style.color = "steelblue";
		h.style.background = "white";
		h.style.color = "steelblue";
		init();
	});
		m.addEventListener("click", function() {
		numberSquares = 6;
		m.style.background = "steelblue";
		m.style.color = "white";
		e.style.background = "white";
		e.style.color = "steelblue";
		h.style.background = "white";
		h.style.color = "steelblue";
		init();
	});
		h.addEventListener("click", function() {
		numberSquares = 9;
		h.style.background = "steelblue";
		h.style.color = "white";
		m.style.background = "white";
		m.style.color = "steelblue";
		e.style.background = "white";
		e.style.color = "steelblue";
		init();
	});
}
function setupSquares() {
	for (var i = 0; i < squares.length; i ++) {
		// add click listeners
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.background;
			// compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetBtn.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function reset() {
	// new colors
	colors = generateRandomColors(numberSquares);
	// a new random color
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetBtn.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change color of squares
	for (var i = 0; i < squares.length; i ++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

function changeColors(color) {
	// loop through all the squares
	for (var i = 0; i < squares.length; i ++) {
		// change each color to match the given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i < num; i ++) {
		arr.push(randomColor())
	}
	return arr;
}

function randomColor() {
	// pick a "R" from  0 - 255
	var r =  Math.floor(Math.random() * 256);
	// pick a "G" from  0 - 255
	var g =  Math.floor(Math.random() * 256);
	// pick a "B" from  0 - 255
	var b =  Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}