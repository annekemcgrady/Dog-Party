// VARIABLES FOR INPUT BOX BUTTON AND SPAN TEXT
var inputBox = document.querySelector(".input");
var nameButton = document.querySelector(".name_button");
var someDogSpan = document.querySelector(".some_dogs");

// // FUNCTION TO CHANGE TEXT OF SPAN TEXT WHEN BUTTON CLICKED
function changeName(){
	// event.preventDefault();
	console.log(inputBox.value);
	console.log(someDogSpan.innerText);
	someDogSpan.innerText = inputBox.value;
}
// // EVENT LISTENER WHEN BUTTON CLICKED ACTION HAPPENS
nameButton.addEventListener("click", changeName, false);


