function displayCurrentTime() {
    const formatToTwoDigits = (number) => (number < 10 ? '0' + number : number);
  
    // Function to get the current time and display it
    const printTime = () => {
      const currentTime = new Date();
      const hours = formatToTwoDigits(currentTime.getHours());
      const minutes = formatToTwoDigits(currentTime.getMinutes());
      const seconds = formatToTwoDigits(currentTime.getSeconds());
      let newformat = hours >= 12 ? 'PM' : 'AM';

      const currentTimeString = `${hours}:${minutes}:${seconds} `+ newformat;
      console.log('Current Time:', currentTimeString);
    };
    printTime();
  
    const intervalId = setInterval(printTime, 1000);
  }
  
  displayCurrentTime();
  
