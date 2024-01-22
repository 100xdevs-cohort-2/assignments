//! Counter without using set time out
const counter=(delay,count)=>{
    console.log(count)
    if(true){
        setTimeout(()=>{
           counter(delay,count+1);
        },delay)
    }
    
}
counter(1000,1);