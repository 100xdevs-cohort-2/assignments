let timer = 0;

function count() {
    console.log(timer++);
    setTimeout(count,1000);
}

count();