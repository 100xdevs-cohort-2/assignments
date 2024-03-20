async function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = true;
            if(!data){
                reject("Data is not present.");
            }
            resolve("Data fetched succesfully.")
        },3000);
    });
}

// fetchData()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

async function processData(){
    try{
        const data = await fetchData();
        console.log(data.toUpperCase());
    }
    catch(error){
        console.error(error);
    }
}

processData();