const fs=require('fs')

fs.readFile('../easy/newText.txt',(err,data)=>{
  updated_data=data+' .This is the updated data.'
  fs.writeFile('../easy/newText.txt',updated_data,(err)=>{
    console.log(err?err:'No error')
  })  
})