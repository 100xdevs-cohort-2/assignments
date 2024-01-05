function TwentyFourHourClock(){
    console.log(`24 Hour Clock`);
    setInterval(function(){
        const date = new Date();

        var HH = date.getHours();
        var MM = date.getMinutes();
        var SS = date.getSeconds();

        console.log(HH + ":" + MM + ":"+ SS);
    },1000);

}


TwentyFourHourClock();


function TwelveHourClock(){
    console.log(`12 Hour Clock`);
    setInterval(function(){
        const date = new Date();

        var HH = date.getHours();
        var MM = date.getMinutes();

        console.log(`${HH%12}:${MM}${HH<12 ? "AM" : "PM"}`);

    },3000);
}

TwelveHourClock();