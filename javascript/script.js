// Play audio and animate letter
function playAudioAndAnimate(audioId, letterId) {
  const audio = document.querySelector("#" + audioId);
  const letterElement = document.getElementById(letterId);

  if (audio.paused) {
    audio.play();
    addPulseAnimation(letterElement);
  } else {
    audio.pause();
    removePulseAnimation(letterElement);
  }

  audio.addEventListener("ended", function () {
    removePulseAnimation(letterElement);
  });
}

// Add pulse animation to an element
function addPulseAnimation(element) {
  element.classList.add("animate-pulse");
}

// Remove pulse animation from an element
function removePulseAnimation(element) {
  element.classList.remove("animate-pulse");
}

// Handle keyboard events
function handleKeyDown(event) {
  const key = event.key;
  const validKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if (validKeys.includes(key)) {
    const audioId = "audio" + key;
    const letterId = "letter" + key;
    playAudioAndAnimate(audioId, letterId);
  }
}

// Ensure DOMContent is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Listen for keyboard events
  document.addEventListener("keydown", handleKeyDown);

  // Add event listeners to each box
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(function (box, index) {
    const audioId = box.getAttribute("data-audio");
    const letterId = "letter" + (index + 1);
    box.addEventListener("click", function () {
      playAudioAndAnimate(audioId, letterId);
    });
  });
});
