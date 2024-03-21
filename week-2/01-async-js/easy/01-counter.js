
const counter = () => {
    let time = 0;
    setInterval(() => {
        console.log(++time);
    }, 1000);

}
counter();