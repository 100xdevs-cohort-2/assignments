function time(){
    const HH = new Date().getHours();
    const MM = new Date().getMinutes();
    const SS = new Date().getSeconds();
    console.log(HH,"HH",MM,"MM",SS,"SS");
}
setInterval(time,1000);


