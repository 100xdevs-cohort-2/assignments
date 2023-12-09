export default class CustomPromise{
    state;
    set stateSetter(newState){
        this.state = newState;
    }
    get getState(){
        return this.state;
    }

    resolve(){
        this.stateSetter = "RESOLVED";
    }

    reject(){
        this.stateSetter = "REJECTED";
    }


    constructor(tempfunction){
        const resolveParam = ()=>{ this.resolve()} ;
        const rejectParam =  ()=>{this.reject()}; 
        tempfunction(resolveParam , rejectParam);
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
