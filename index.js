// Handle Button Clicks

function changeBackgroundColor() {
  document.body.style.backgroundColor = "rgb(173, 216, 230)";
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = "rgb (255, 255, 255)";
}

// Capture Keyboard Input

function displayKeyPress(event) {
  const paragraph = document.querySelector("#keyPressDisplay");
  paragraph.textContent = `Key pressed: ${event.key}`;
}

// Process Text Input

function displayUserInput() {
  const userInput = document.querySelector("#textInput");
  const paragraph = document.querySelector("#textInputDisplay");

  paragraph.textContent = `You typed: ${userInput.value}`;
}

// Addd Event Listeners

function setupEventListeners() {
  document
    .getElementById("changeColorButton")
    .addEventListener("click", changeBackgroundColor);

  document
    .getElementById("resetColorButton")
    .addEventListener("dblclick", resetBackgroundColor);

  document.addEventListener("keydown", displayKeyPress);

  document
    .getElementById("textInput")
    .addEventListener("input", displayUserInput);
}



if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};