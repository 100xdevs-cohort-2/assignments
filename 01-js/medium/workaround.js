setInterval(function () {
    var d = new Date();  // Move the creation of Date object inside setInterval
    var n = d.toLocaleTimeString();
    process.stdout.write('\r' + n);  // Fix the syntax error
}, 1000);  // Update every 1000 milliseconds (1 second)


