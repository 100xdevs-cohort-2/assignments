class MyPromise{
    // executor: any async fn
   constructor(executor){
     this.state='pending'
     this.value=undefined
     this.handlers=[]

     const resolve=(value)=>{
        if(this.state=='pending'){
            this.state='fulfilled'
            this.value=value
            this.handlers.forEach(handler=>handler.onFulfilled(value))
        }
     }

     const reject=(reason)=>{
        if(this.state=='pending'){
            this.state='rejected'
            this.value=reason
            this.handlers.forEach(handler=>handler.onRejected(reason))
        }
     }

     try{
        executor(resolve,reject)
     }catch(err){
        reject(err)
     }
   }

   then(onFulfilled,onRejected){
    return new MyPromise((resolve,reject)=>{
        const handle=(handler)=>{
            try{
                const result=handler(this.value)
                if (result instanceof MyPromise){
                    
                }
            }
        }
    })
   }
}