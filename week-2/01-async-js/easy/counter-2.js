let count = 0;

// could be a recursive logic just add settimeout inside the callback function
function counter() {
  count += 1;
  console.log(count);
  setTimeout(counter, 1000);
}

counter();
