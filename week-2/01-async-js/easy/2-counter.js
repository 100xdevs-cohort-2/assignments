let num = 1

const counter = () => {
    console.log(num++)
}

for (let i = 0; i < 10; i++) {
    setTimeout(counter, 1000)
}

