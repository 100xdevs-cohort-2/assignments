const fs = require('fs')

fs.readFile('/Users/sparshkarna/DevOps/assignments/week-2/01-async-js/medium/sample.txt', 'utf-8', (err, data) => {
    data = data.split(' ').filter(element => element.length != 0).join(' ')
    data = data.slice(0, data.length - 2)
    fs.writeFile('/Users/sparshkarna/DevOps/assignments/week-2/01-async-js/medium/sample.txt', data, (err) => {})
})