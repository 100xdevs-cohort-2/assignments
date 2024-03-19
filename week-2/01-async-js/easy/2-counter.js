/*Counter without setInterval
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.*/


function job()
{
    return new Promise(function(resolve)
    {
        setTimeout(resolve, 1000);
    })
}

async function myOwnSetInterval()
{
   let count = 0;
   while(1)
   {
    await job().then(function()
    {
        console.log(count++);
    })
   }
}


myOwnSetInterval();