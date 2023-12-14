// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clockLoop(timeFormat)
{
    setInterval(timeFormat, 1000);
}

function format24hr()
{
    const seconds = new Date().getSeconds();
    const minutes =  new Date().getMinutes();
    const hours = new Date().getHours();

    console.log(`${hours} : ${minutes} : ${seconds}`)
}

function format12hr()
{
    const time = new Date().toLocaleTimeString();
    console.log(time);
}

function main()
{
    // for 24-hr format
   clockLoop(format24hr);

    // for 12-hr format
    clockLoop(format12hr);

}

main()