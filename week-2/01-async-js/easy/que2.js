function displayTime() {
  const timeout = setTimeout(() => {
    const date = new Date();
    console.log(date.getSeconds());
    displayTime();
  });
}

displayTime();
