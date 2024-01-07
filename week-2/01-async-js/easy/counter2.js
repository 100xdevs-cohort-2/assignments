
const counter = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  })
}

const main = async () => {
  let count = 0;
  while (true) {
    await counter();
    count++;
    console.log(count);
  }
}

module.exports = main;
