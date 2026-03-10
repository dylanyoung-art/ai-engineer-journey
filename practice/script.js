console.log("Javascript is working!")

const button = document.getElementById("changeTextButton");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = "You clicked the button!";
});

let count = 0;

const increaseButton = document.getElementById("increaseButton");
const countDisplay = document.getElementById("count");

increaseButton.addEventListener("click", function() {
  count = count + 1;
  countDisplay.textContent = count;
});