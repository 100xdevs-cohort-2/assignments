const clock = function(){
function time(){
        const date = new Date();
        const showTime = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
        console.log(showTime);
    }
    setInterval(time,1000);
};

clock();

const clock2 = function(){
    function time(){
        const date = new Date();
        const showTime = date.toLocaleTimeString();
        console.log(showTime);
    }
    setInterval(time,1000);
}

clock2();