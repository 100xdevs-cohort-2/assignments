// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.







let count = 0;
for (let i = 1; i <= 10; i++) {
    setTimeout(function () {
        count += i;
        console.log(count);
    }, 1000);

}
console.log(count);
































































// (Hint: setTimeout)