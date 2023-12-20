
let cnt = 0 ;
function asyncfunction(){
    let  p = new Promise(function(resolve){
        setTimeout(function(){
            cnt+=1;
            resolve(cnt);
        } , 1000);
        
    })
    return p;
}

async function counterr(){
    while(true){
        let val = await asyncfunction();
        console.log(val);
    }
}

counterr()
