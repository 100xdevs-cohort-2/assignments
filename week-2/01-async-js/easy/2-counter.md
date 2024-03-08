## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
function counter()
{
    let c=0;
    function updateCounter()
    {
        c++;
        console.log(c);
        setTimeout(counter(),1000);
    }
    updateCounter();
}


































































(Hint: setTimeout)