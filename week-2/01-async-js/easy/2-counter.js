function counter(timer) {
    console.log(timer++);
    setTimeout(function() {
      counter(timer);
    }, 1000);
  }
  
counter(1);
