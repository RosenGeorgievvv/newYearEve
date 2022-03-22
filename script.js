const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('mins');
const secondsElement = document.getElementById('secs');

let newYears = '1 Jan 2023';

function countDown() {
    let newYearsDate = new Date(newYears);
    let currentDate = new Date();

    let allSeconds = (newYearsDate - currentDate) / 1000;
    let days = Math.floor(allSeconds / 3600 / 24);
    let hours = Math.floor(allSeconds / 3600) % 24;
    let minutes = Math.floor(allSeconds / 60) % 60;
    let seconds = Math.floor(allSeconds) % 60;

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}
countDown();

setInterval(countDown, 1000);
