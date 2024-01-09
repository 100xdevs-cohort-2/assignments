let a = 0;

let z = () => {
  setTimeout(() => {
    console.clear();
    console.log(a);
    a++;
    z();
  }, 1000);
};
z();
