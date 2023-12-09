export default class CustomPromise{
    state;
    set stateSetter(newState){
        this.state = newState;
    }
    get getState(){
        return this.state;
    }

    resolve(classReference){
        classReference.stateSetter = "RESOLVED";
    }

    reject(classReference){
        classReference.stateSetter = "REJECTED";
    }


    constructor(tempfunction){
        const resolveParam = ()=>{ this.resolve(this)} ;
        const rejectParam =  ()=>{this.reject(this)}; 
        tempfunction(resolveParam , rejectParam);

        //Silly mistake:- 
        /**
         * when I did tempfunction(this.resolve , this.reject) and then 
         * defined resolve as resolve(){this.setSetter} I received compiler error as 
         * cannot set the properties of undefined
         * the this mentioned in resolve method is undefined 
         * hence I  had to pass it by object param
         * 
         * Query :-  Why object ref is lost
         * 
         */
    };
    customThen(successFunction){
        if(this.getState ==="RESOLVED"){
            try{
                successFunction();
                this.stateSetter = "RESOLVED"
            }catch(error){
                this.stateSetter = "REJECTED";
            }
            
        }
        return this;
    };
    customCatch(failedFunction){
        if(this.getState ==="REJECTED"){
                failedFunction();
        }
    };

    

}
