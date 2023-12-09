function count() {
  var counter = 1;
  setInterval(() => {
    console.clear();
    console.log(counter++);
  }, 1000);
}

count();
