function aysncCalltest(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello from resolve");
        },5000);
    });
}

// async function main(){
//     console.log("Magic is going to start");
//     const msg = await aysncCalltest();
//     console.log(msg);
//     console.log("magic happeinign behind the scene");        // function aync is same as promise chain i.e until upr wala await nhi chlta niche ke statwment stuck rahene similar to .then
// }

function main(){
    console.log("Magic is going to start");
    aysncCalltest().then((msg)=>{                   // .then don't blockl all the statements in the fucntion it only blocks the .then chained statements.
        console.log(msg);
    });
    console.log("magic happeinign behind the scene");
}

main()
console.log("kab hoga magic ?");