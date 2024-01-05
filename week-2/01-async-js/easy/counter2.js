function counter() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

async function main() {
  let i = 0;
  while (1) {
    await counter().then(() => {
      console.log(i++);
    });
  }
}

module.exports = counter;
