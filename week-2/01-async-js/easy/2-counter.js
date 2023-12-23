function counter() {
  let a = 0;
  for (; a < 10; a++) {
    setTimeout(() => {
      console.log(a);
      a = a + 1;
    }, 1000);
  }
}

counter();
