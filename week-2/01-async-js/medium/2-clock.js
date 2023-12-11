let ctr = 0;
let timeout = null;
function counter() {
  ctr++;
  var date = new Date();
  var current_time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  console.log(current_time);
  timeout = setTimeout(counter, 1000);
  if (ctr == 5) clearTimeout(timeout);
}

counter();
