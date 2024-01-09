let i=0;

function logTime(){
    console.log(i + " seconds");
    i++;
    setTimeout(logTime,1000);
}

logTime();

