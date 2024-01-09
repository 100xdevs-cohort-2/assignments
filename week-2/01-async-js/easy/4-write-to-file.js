const fs = require('fs');

const content = 'Hello Everyone!';

fs.writeFile('new.txt', content, 'utf-8', err => {
    if(err){
        console.error('Error in writing', err);
        return;
    }

    console.log('content has been written to the file');
})