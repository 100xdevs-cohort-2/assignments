/*
function printMessage(msg, callback){
    console.log("Message Received is:"+msg);
    callback("Call back was called.");
}
function demoCallback(){
    return "This is a callback function";
}

printMessage("Eda mone nee pwoli!", function(callbackMsg){
    console.log(callbackMsg);
});

function printMessage(msg, callback){
    console.log("Message Received is:"+msg);
    callback;
}
function demoCallback(){
    console.log("This is a callback function");
}

printMessage("Eda mone nee pwoli!", demoCallback());

function processData(array,callback){
    if(!Array.isArray(array)){
        callback("Error: Data is not an array!", null);
        return;
    }
    let processedArray = array.map(function(item){
        return item*2;
    });
    callback(null, processedArray);

}

function printProcessedArray(error, input){
    if(error){
        console.log(error);
    }
    else{
        input.forEach(function(item){
            console.log(item);
        });
    }
    
}

processData([1,2,3,6],printProcessedArray);
*/

function processData(array,callback){
    if(!Array.isArray(array)){
        callback("Error: Data is not an array!", null);
        return;
    }
    let processedArray = array.map(function(item){
        callback(null, item*2);
    });

}

function printProcessedArray(error, input){
    if(error){
        console.log(error);
    }
    else{
            console.log(input);
    }
}

processData([1,2,3,6],printProcessedArray);