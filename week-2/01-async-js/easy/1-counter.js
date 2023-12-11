let counter = 1;

setInterval(() => {
    process.stdout.write(`\rCounter Value: ${counter++}`);
}, 1000);
