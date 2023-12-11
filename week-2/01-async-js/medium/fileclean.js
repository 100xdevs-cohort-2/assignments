const fs =  require('fs')
function clean(data)
{
    const trimmedString = data.replace(/\s+/g, ' ').trim();
    return trimmedString;
}
async function fn()
{
    let dt;
    const fileP = '/home/abhi/Downloads/CP/Cohort0-100/Chapter 1/Assignments/newsam.txt';
    await new Promise((resolve,reject)=>{
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
    dt=clean(dt);
    fs.writeFile(fileP,dt,'utf-8',(err)=>
{
    if (err) {
        console.error('Error writing the file:', err);
        return;
      }
      console.log("created the file");
})
}
fn()


