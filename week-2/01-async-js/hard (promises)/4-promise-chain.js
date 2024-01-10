function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after 1 sec`);
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 2 sec");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 3 sec");
    }, 3000);
  });
}

async function calculateTime() {
  const startTime = Date.now();

  // Sequentially call the functions
  const resultOne = await waitOneSecond();
  const resultTwo = await waitTwoSecond();
  const resultThree = await waitThreeSecond();

  const endTime = Date.now();
  const totalTime = endTime - startTime;

  console.log(
    "All promises resolved sequentially in",
    totalTime / 1000,
    "seconds"
  );
  console.log("Results:", resultOne, resultTwo, resultThree);
}

// Example usage
calculateTime();
