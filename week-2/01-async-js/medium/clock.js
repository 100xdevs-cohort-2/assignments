
function updater(){
    const date = new Date(); 
    const formatHour = (input) => { 
        if (input > 12) { 
        return input - 12; 
        } 
        return input; 
    }; 

    const formatData = (input) => { 
        if (input > 9) { 
        return input; 
        } else return `0${input}`; 
    }; 

    const format = { 
        HH: formatData(date.getHours()), 
        hh: formatData(formatHour(date.getHours())), 
        MM: formatData(date.getMinutes()), 
        SS: formatData(date.getSeconds()), 
    }; 



    const time = ({ hh, MM, SS }) => { 
        console.log(`${hh}:${MM}:${SS}`); 
    };


  time(format)

}

setInterval(updater,1000)