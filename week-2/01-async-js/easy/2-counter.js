function timer(i) {
   setTimeout(() => {
      console.log(i);
      timer(++i);
   }, 1000);
}

timer(1);
