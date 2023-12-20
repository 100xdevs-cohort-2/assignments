function clock() {
    setInterval(function () {
      let date = new Date();
      console.log(
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
      );
    }, 1000);
  }
  
  clock();
  