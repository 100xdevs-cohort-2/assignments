// since i solved the first question without setInterval so used setInterval here.
let count =0;
function delay(){

    return new Promise(resolve =>{

        let intervalId = setInterval(() =>{
            resolve();
            clearInterval(intervalId)
            
        }, 1000);
    });

}

async function main(){

    for(let i=0;i<10;i++){
        await delay();
        count++;
        console.log(count);
    }
}
main();