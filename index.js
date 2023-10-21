const content = document.querySelector(".marquee-content");

// Override default paste to just palin text paste
content.addEventListener("paste", (e) => {
  e.preventDefault();

  const text = e.clipboardData.getData("text/plain");

  content.textContent += text;
});

// Start Animation
const startButton = document.querySelector("#startBtn");

startButton.addEventListener("click", () => {
  content.style.animationPlayState = "running";
});

// Pause Animation
const pauseButton = document.querySelector("#pauseBtn");

pauseButton.addEventListener("click", () => {
  content.style.animationPlayState = "paused";
});

// Pause Animation when text is edited
content.addEventListener("click", () => {
  content.style.animationPlayState = "paused";
});

// On Animation end -> reset to initial state but pause the animation
content.addEventListener("animationend", () => {
  content.style.animationPlayState = "paused";
  content.style.animationName = "none";
  setTimeout(() => {
    content.style.animationName = "scrollAnimation";
  }, 500); // 500 milliseconds
});
