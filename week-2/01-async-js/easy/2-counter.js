// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. 
// There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)

function counter(seconds){
    
    let curSecond = 1;

    function count()
    {
        console.log(curSecond)
        curSecond++;

        if(curSecond <= seconds)
        {
            setTimeout(count, 1000);
        }
    }

    count();

}

function main(){
    counter(5);
}

main();