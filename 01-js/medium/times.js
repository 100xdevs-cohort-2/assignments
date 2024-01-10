/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(fn) {
    const date1 = Date.now()
    fn()
    const date2 = Date.now()
    console.log(date2 - date1)
}

calculateTime(() => {
    let sum = 0
    for (let i = 0; i < 100; i++) {
        sum += i
    }
    console.log(sum)
})

calculateTime(() => {
    let sum = 0
    for (let i = 0; i < 1000000; i++) {
        sum += i
    }
    console.log(sum)
})


calculateTime(() => {
    let sum = 0
    for (let i = 0; i < 100000000000; i++) {
        sum += i
    }
    console.log(sum)
})

