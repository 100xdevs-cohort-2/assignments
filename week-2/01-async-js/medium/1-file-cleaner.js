const fs = require('fs');

function read() {
    fs.readFile('demo.txt','utf-8',function(err,data) {
            if(err) console.error(err);
        var cleaned = clean(data);
        fs.writeFile('demo.txt',cleaned,function(err) {
            if(err) console.error(err);
            console.log('File has been cleaned');
        });        
    });
}

function clean(str) {
        let arr = str.trim().split(' ');
    let filArr = arr.filter(function(item) {
        if(item!==' ') return item;
    });
    return filArr.join(' ');
}

read();
