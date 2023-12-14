let count = 0
let func = (n) => {
    console.log(count++)
    if (count > n) {
        return 0
    }
    else {
        setTimeout(func(), 1000,10)
    }
}

func(10)