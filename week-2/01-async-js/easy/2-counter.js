function incrementCounter(counter) {
    console.log(counter);
    counter++;
    setTimeout(function() {
      incrementCounter(counter);
    }, 1000);
  }
  
  
  incrementCounter(1);
  
  
  