fs = require('fs')
function clean_text(path, path1){
    fs.readFile(path, 'utf-8', function(err, data){
        if(err){
            console.log("error while reading file", err)
        }
        else{
            console.log(data)
            // cleaned_text = data.trim()
            cleaned_text = data.replace(/\s+/g, ' ').trim()
            fs.writeFile(path1, cleaned_text, function(err){
                if (err){
                    console.log("error while writing ", err)
                }
                else{
                    console.log("cleaned text ", cleaned_text)
                    console.log("file written succesfully")
                }
            })
        }
    })
}

path = 'text.txt'
path1=  'cleaned.txt'
clean_text(path, path1)