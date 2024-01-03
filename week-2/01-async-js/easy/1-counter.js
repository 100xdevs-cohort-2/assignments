// ## Create a counter in JavaScript

// <!-- We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second -->

// let i = 50;

// function counter() {
//     console.log(i);


//     i--;
// }

// const intervalId = setTimeout(counter, 1000);

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailRegex.test(email))
    return emailRegex.test(email);
  }

  isValidEmail("bayees1gmail.com")