function counter() {
    let i = 0;
    setInterval(() =>
        console.log(i++)
        , 1000)
}
counter()