const formatTimeUnit = (unit) => (unit < 10 ? `0${unit}` : unit);

const formatTime = (hours, minutes, seconds, period) => {
    const formattedHours = hours % 12 || 12;
    const timeString = `${formatTimeUnit(formattedHours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)} ${period}`;
    console.log(timeString);
};

const getPeriod = (hours) => (hours < 12 ? 'AM' : 'PM');

const counter = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const period = getPeriod(hours);

    formatTime(hours, minutes, seconds, period);

    setTimeout(counter, 1000);
};

counter();
// This is the better and clean code acquired from gpt learn from it.