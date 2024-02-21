/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        
        setTimeout(function(){
            //callback
            resolve();
        }, n*1000);
    });
}


// function delay(){
//     console.log(`A promise returned after some seconds`);

// }


// wait(5).then(delay);



module.exports = wait;
