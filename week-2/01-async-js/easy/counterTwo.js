
// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. 

const counter = function(n)
{
    for(let i = 1; i<=n;i++)
    {
            setTimeout(function()
            {
                console.log(i)
            },i*1000); 
    }
}
counter(5); 