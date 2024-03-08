function myOwnSetTimeout(fn,duration){
    setTimeout(fn,duration)
} 
   
myOwnSetTimeout(()=>console.log("hi there"),1000)

myOwnSetTimeout(()=>{
    console.log("hi there from first")
    myOwnSetTimeout(()=>console.log("hi there from second"),2000)
},3000)