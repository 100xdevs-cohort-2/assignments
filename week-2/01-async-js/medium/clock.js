
function gettime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = now.getHours() < 12 ? 'AM' : 'PM';
    return `${hours}:${minutes}:${seconds} ${ampm}`;
}


function updatetime() {
    const time = gettime();
    console.log(time);
}


setInterval(updatetime, 1000);