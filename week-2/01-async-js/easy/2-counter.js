async function counter(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    let timerId = setTimeout(
      (val) => {
        console.log(val);
        clearTimeout(timerId);
      },
      1000 * i,
      i
    );
  }
}

counter(10);
