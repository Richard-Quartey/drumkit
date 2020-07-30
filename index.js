//add an event listener to listen for when the button gets clicked we do not add
//the () parenthesis along with the method name
// document.querySelector("button").addEventListener("click", handleClick);

// function tom1() {
//   var audio = new Audio('sounds/tom-1.mp3');
//   return audio.play();
// }

//DETECTING BUTTONS PRESSED
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}


//DETECTING KEYBOARD KEY PRESSED
//passing the function an event to accept inputs from the keyboard(event)
document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  // console.log(event);
  // alert("Key was pressed!");

  buttonAnimation(event.key);

});

//creating a function that takes a key from the keyboard as input
function makeSound(key) {
  //using switch statement to switch between letters in inner HTML of buttons
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}


//[this] is used to determine the identity of the element (eg the button etc)
// that triggered the evenet listener

// function handleClick() {
//   alert("I got clicked!");
// }

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}