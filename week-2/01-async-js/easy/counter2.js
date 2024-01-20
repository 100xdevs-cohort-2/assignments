let counter=0;

function update(){
    counter++;
    console.log(counter);
    setTimeout(update,1000)
}

update();