let j = 0;
(function counter() {
  console.log(j);
  setTimeout(() => {
    counter();
  }, 1000);
  j++;
})();
