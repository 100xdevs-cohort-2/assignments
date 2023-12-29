let count =0;

async function incrementCounter(){
    return new Promise((resolve) =>{
        setTimeout(resolve,1000)
    });
}
async function main() {
    for(let i=0;i<10;i++){
    
        await incrementCounter();
        count++;
        console.log(count);
    }
    
}

main();
