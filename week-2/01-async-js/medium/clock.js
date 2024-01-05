
///clock 24 hour format
function clock() {
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    
    console.log(time);

    setTimeout(() => {
        clock();
    }, 1000);
}

clock();
