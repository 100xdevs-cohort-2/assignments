const fs = require('fs')



let myPromise = new Promise(function(myResolve) {
    // "Producing Code" (May take some time)
    let fileContents;
    fs.readFile('/home/vishnubv944/Cohort/assignments/week-2/01-async-js/medium/text.txt', 'utf-8', function(err, data){
        if(err) console.log("Error in reading the file", err)
        //console.log(data)
        myResolve(data);
    })
    
       // when successful
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { 
        arrayOfStrings = value.split(" ")
        let newArray = [];


        for(let i = 0; i < arrayOfStrings.length; i++){
            if(arrayOfStrings[i].length != 0){
                newArray.push(arrayOfStrings[i])
            }
        }
        
        finalString = newArray.join(" ")
        console.log(finalString)

        fs.writeFile('/home/vishnubv944/Cohort/assignments/week-2/01-async-js/medium/text.txt', finalString, function(err){
            if(err) console.log("Error in writing to the file")
        })
    }
);




