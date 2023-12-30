const fs = require('fs')


fs.readFile('/Users/sparshkarna/DevOps/assignments/week-2/01-async-js/easy/sample.txt', 'utf-8', (err, data) => {
    data = data.split('\n')
    data = data.slice(1, data.length)
    data = data.filter(function (item) {
        return item.length != 0
    })
    let data1 = ''
    data.forEach(element => {
        data1 += element + '\n'
    });
    fs.writeFile('/Users/sparshkarna/DevOps/assignments/week-2/01-async-js/easy/sample.txt', data1, (err) => {
        if (err) {
            console.log('There was an error')
        }
        else {
            console.log('Data has beenwritten succefully')
        }
    })
})
