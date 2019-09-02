import './index.scss';

let hours = document.querySelector('.hrs');
const mins = document.querySelector('.mins');
const calcluateBtn = document.querySelector('.calculateBtn');
const rhrs = document.querySelector('.result1');
const rmins = document.querySelector('.result2');

calcluateBtn.onclick = () => {
    convertMins();
    convertToMins();
};

const convertMins = () => {
    if (hours.value === "") hours.value = "0";
    const minsInDecimal = (mins.value / 60).toFixed(2);
    const convertedHours = parseFloat(hours.value);
    const convertedMinutes = parseFloat(minsInDecimal);
    rhrs.innerHTML = convertedHours + convertedMinutes + " hours";
}

const convertToMins = () => {
    const minsInHrs = mins.value / 60;
    rmins.innerHTML = Math.ceil(hours.value + minsInHrs) + " minutes";
};

const limitMinutesLength = () => {
    if (mins.value.length > 2) mins.value.slice(0, 2);
};

const limitMinutesRange = () => {
    if (mins.value > 59 || mins.value < 0) alert("Minutes must be between 0 and 59");
}

mins.addEventListener('keyup', () => {
    limitMinutesLength();
    limitMinutesRange();
});
