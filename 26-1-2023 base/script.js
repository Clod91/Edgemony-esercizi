const bodyEl = document.body;
const timerEl = document.createElement("h3");
timerEl.className = ".timer";

let timeoutTimer = 10;
const stopBtn = document.createElement("button");
stopBtn.className = "stop_button";
stopBtn.textContent = "STOP";
bodyEl.append(timerEl, stopBtn);

const timerId = setInterval(() => {
  timeoutTimer--;
  timerEl.textContent = timeoutTimer;
  if (timeoutTimer === 0) {
    bodyEl.style.backgroundColor = "blue";
    timerEl.remove();
  }
}, 1000);

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
});
