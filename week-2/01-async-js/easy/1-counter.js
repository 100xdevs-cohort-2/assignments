function counter() {
    let timer = 0;
    console.log("counter starting:::");
    setInterval(() => {
    console.log(timer++);
    }, 1000);
}
  
  counter();