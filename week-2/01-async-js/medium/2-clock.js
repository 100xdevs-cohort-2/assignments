/**
 * @summary Using `1-counter.md` or `2-counter.md` from the easy section, can you create a clock that shows you the current machine time?
 * Can you make it so that it updates every second, and shows time in the following formats -
 * - HH:MM:SS (Eg. 13:45:23)
 * - HH:MM:SS AM/PM (Eg 01:45:23 PM)
 * @param {boolean} twentyFourFormat - 24 Hour Format
 */
function createClock(twentyFourFormat = false) {
  let currentTime = +new Date();

  setInterval(() => {
    const timeDiff = +new Date() - currentTime;

    currentTime = new Date(+currentTime + timeDiff);
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const hrs = !twentyFourFormat ? hours % 12 || 12 : hours;

    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');

    const ampm = !twentyFourFormat ? (hours >= 12 ? 'PM' : 'AM') : '';

    console.log(`${hrs}:${minutes}:${seconds} ${ampm}`);
  }, 1000);
}

// Logs the time in 24 hour format
createClock(true);

// Logs the format in AM/PM format
createClock();
