const fs = require('fs')

fs.readFile('./dummyData.txt', 'utf-8', (err, data) => {
    if(err) {
        throw new Error("Cannot read file")
    }
    console.log(data);
})


function expensiveOperaion() {
    let counter = 0;
    for (let i = 0; i < 100000; i++) {
        counter++
    }
    console.log("Conter Value", counter);
    console.log('expensive Operation completed');
}

expensiveOperaion();

fs.writeFile('./dummyData.txt' , "I am a software engineer", (err) =>{
    if(err) {
        throw new Error(err)
    }
    console.log("Data written succesfully");
})