const prependZero = (val) => {
    if(val < 10){
        return '0' + val;
    }
    return val;
};

const getTimes = (date) => {
    const [hh, mm, ss] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const militaryTime = `${prependZero(hh)}:${prependZero(mm)}::${prependZero(ss)}`;
    const normalTime = `${prependZero(hh % 12)}:${prependZero(mm)}::${prependZero(ss)} ${(hh >= 12 && hh <=23) ? 'PM' : 'AM'}`;
    return [normalTime, militaryTime];
};

const printTime = () => {
    const [normalTime, militaryTime] = getTimes(new Date());
    console.log("Military time:", militaryTime);
    console.log("Normal time:", normalTime);
    setTimeout( () => console.clear(),1000);
};
// printTime();
setInterval(printTime, 1000);