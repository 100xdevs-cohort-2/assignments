const fs =  require('fs')

async function fn()
{
    let dt;
    await new Promise((resolve,reject)=>{
        const fileP = '/media/abhi/Data/BTP/new data/sampdate.txt';
        fs.readFile(fileP,'utf-8',(err,data)=>
        {
            if (err) {
                console.error('Error reading the file:', err);
                return;
              }
              dt=data;
              resolve();
        })
    })
    const filePath = '/home/abhi/Downloads/CP/Cohort0-100/Chapter 1/Assignments/newsam.txt';
    fs.writeFile(filePath,dt,'utf-8',(err)=>
{
    if (err) {
        console.error('Error writing the file:', err);
        return;
      }
      console.log("created the file");
})
}
fn()


