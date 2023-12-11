function fn1()
{
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    console.log(hours + " : " + minutes + " : " + seconds);
}

function fn2()
{
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    if(hours<12)
    console.log(hours + " : " + minutes + " : " + seconds + " am");
    else if(hours==12)
    console.log(hours + " : " + minutes + " : " + seconds + " pm");
    else
    console.log(hours%12 + " : " + minutes + " : " + seconds + " pm");
}

setInterval(fn2,1000);
