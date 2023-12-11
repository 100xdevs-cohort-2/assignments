function count(seconds) {
    console.log(seconds);
    if (seconds > 0) {
      setTimeout(() => {
        count(seconds - 1);
      }, 1000); 
    }
  }
  
 
  count(10);
  