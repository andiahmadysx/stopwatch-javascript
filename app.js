const displayTimer = document.querySelector(".display-timer");
const startButton = document.getElementById("start-btn");
const pauseButton = document.getElementById("pause-btn");
const resetButton = document.getElementById("reset-btn");

let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeInterval;
let elapsedTime = 0;

function start() {
  elapsedTime += 16;
  let date = new Date(elapsedTime);

  // format seconds
  seconds = date.getSeconds();

  // format minutes
  minutes = date.getMinutes();

  // format hours
  hours = minutes > 59 ? hours + 1 : hours;

  // render stopwatch
  displayTimer.textContent = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`;

  timeInterval = requestAnimationFrame(start);
}

function pause() {
  cancelAnimationFrame(timeInterval);
}

function reset() {
  elapsedTime = 0;
  pause();
  displayTimer.textContent = "00:00:00";
}

function formatTime(num) {
  return num < 10 ? "0" + num : num;
}

startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
