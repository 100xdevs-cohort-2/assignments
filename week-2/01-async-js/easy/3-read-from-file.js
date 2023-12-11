const fs = require('fs')

fs.readFile('/home/vishnubv944/Cohort/assignments/week-2/01-async-js/easy/file.txt','utf8',  function(err,data){
    console.log(data)
})

let a = 0;
for(let i = 0; i < 1000; i++){
    a = a + 1;
    console.log(a)
}