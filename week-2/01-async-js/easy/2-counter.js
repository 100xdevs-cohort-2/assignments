function counter() {
  setTimeout(function () {
    const date = new Date();
    console.log(
      `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    );
    counter();
  }, 1000);
}

counter();
