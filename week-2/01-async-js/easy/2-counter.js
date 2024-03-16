function counter() {
  for (let a = 1; a < 10; a++) {
    setTimeout(() => {
      console.log(a);
    }, 1000 * a);
  }
}

counter();
