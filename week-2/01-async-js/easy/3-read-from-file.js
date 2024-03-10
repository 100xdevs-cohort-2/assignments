const fs = require('fs')
fs.readFile('/Users/sparshkarna/DevOps/assignments/week-2/01-async-js/easy/sample.txt', 'utf-8', (err, data) => {
    data = data.split('\n')
    data = data.slice(1, data.length)
    data = data.filter(function (item) {
        return item.length != 0
    })
    console.log(data)
})

for(let i = 0; i < 10000000000; i++){
}
console.log('done')
