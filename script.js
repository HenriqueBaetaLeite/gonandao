const theDate = new Date('May 8 2022, 23:33:00').getTime();

const theDays = document.querySelector('.days');
const theHours = document.querySelector('.hours');
const theMinutes = document.querySelector('.minutes');
const theSeconds = document.querySelector('.seconds');

const daysCount = 1000 * 60 * 60 * 24;
const minutesCount = 1000 * 60 * 60;
const secondsCount = 1000 * 60;

function setTheTimer() {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeleft = theDate - now;
    if (timeleft < 0) {
      return clearInterval(timer);
    }
    const days = Math.floor(timeleft / daysCount);
    const hours = Math.floor((timeleft % daysCount) / minutesCount);
    const minutes = Math.floor((timeleft % minutesCount) / secondsCount);
    const seconds = Math.floor((timeleft % secondsCount) / 1000);

    writeTimerOnScreen({
      days,
      hours,
      minutes,
      seconds,
    });
  }, 1000);
}

function writeTimerOnScreen(theTime) {
  const { days, hours, minutes, seconds } = theTime;
  theDays.innerText = days;
  theHours.innerText = hours;
  theMinutes.innerText = minutes;
  theSeconds.innerText = seconds;
}

setTheTimer();
