const fs = require('fs'); 

fs.readFile('lorem.txt', 'utf8', function(err, data){ 
    if(err) {
        console.error(err);
        return;
    }
    else{
        console.log(data);
    }
    expensiveOperation();
}); 

const expensiveOperation = () =>{
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    }
};
