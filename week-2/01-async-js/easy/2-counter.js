//## Counter without setInterval

//Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
function counter(number){
    for(let i=0;i<number;i++){
        setTimeout(()=>{
            console.log(i);
        },i*1000);
    }
}
counter(10);






































































