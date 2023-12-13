// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.




function county2(){
    let cnt = 0;
    function increment(){
        cnt++;
        console.log(cnt);
        setTimeout(increment,1000);
    }
    increment();
}
county2();