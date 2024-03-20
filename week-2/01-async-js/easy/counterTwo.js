
// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. 
let inc = 1; 
const counter = function(n)
{
    for(let i = 1; i<=n;i++)
    {
            setTimeout(function()
            {
                console.log(inc++); 
            },i*1000); 
    }
}
counter(5); 