const fs = require('fs');

const filePath = 'path/to/your/2-counter.md'; // Replace with the actual path to your file

function updateClock() {
  const now = new Date();

  const formattedTime24 = now.toLocaleTimeString('en-US', { hour12: false });

  const formattedTime12 = now.toLocaleTimeString('en-US', { hour12: true });

  const clockContent = `Current Time (24-hour format): ${formattedTime24}\nCurrent Time (12-hour format): ${formattedTime12}`;

  fs.writeFile(filePath, clockContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }

    console.log('Clock has been updated successfully.');
  });
}

setInterval(updateClock, 1000);
