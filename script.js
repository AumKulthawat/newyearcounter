const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const newYear = '1 Jan 2022';

function countdown() {
  const newYearDate = new Date(newYear);
  const nowDate = new Date();

  const diff = Math.abs(newYearDate - nowDate) / 1000;

  const days = Math.floor(diff / 3600 / 24);
  const hours = Math.floor((diff / 3600) % 24);
  const mins = Math.floor((diff / 60) % 60);
  const secs = Math.floor(diff % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secsEl.innerHTML = secs;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
