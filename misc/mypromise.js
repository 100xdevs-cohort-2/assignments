class MyPromise {
    /*
     When we create a promise, we pass a callback function with parameters(resolve, reject)
     executionFunction below is that callback function
    */
    constructor(executionFunction) {
        //promiseChain array to support chaining. 
        this.promiseChain = [];
        this.handleError = () => {};

        //we bind the current object to our internal onResolve and onReject methods,
        // so that we can use handleError and promiseChain of that particular obkect
        this.onResolve = this.onResolve.bind(this);
        this.onReject = this.onReject.bind(this);

        //mapping our internal onResolve and onReject parameters with the resolve and reject parameters passed with the callback method
        executionFunction(this.onResolve, this.onReject);
    }

    then(handleSuccess) {
        this.promiseChain.push(handleSuccess);
        //returning the object because it will allow us to chain
        return this;
    }

    catch(handleError) {
        this.handleError = handleError;
        //returning the object because it will allow us to chain
        return this;
    }

    onResolve(value) {
        let storedValue = value;

        try {
            this.promiseChain.forEach((nextFunction) => {
                storedValue = nextFunction(storedValue);
            });
        } catch (err) {
            this.promiseChain = [];
            this.onReject(err);
        }
    }

    onReject(err) {
        this.handleError(err);
    }
}

/*
 *Test code to simulate api call.
 Deciding to fail api based on the response from Math.random() 
 */

simulateApiCall = () => {
    const userData = {
        name:"John",
        subject:"CS",
        hobbies:"Swimming"
    };

    if(Math.random() > 0.5) {
        return {
            data:userData,
            statusCode:200
        }
    } else {
        return {
            statusCode:404,
            message:"Could not find the user",
            errCode:"CNFU"
        }
    }
}


const callApi = () => {
    return new MyPromise((resolve, reject) => {
        /*
        Using setTimeOut to mimick network delay
         */
        setTimeout(() => {
            const apiRes = simulateApiCall();

            if(apiRes.statusCode >= 400) {
                reject(apiRes);
            } else {
                resolve(apiRes);
            }
        },5000);
    })
}


callApi().then((user) => {
    console.log("Check the user Data", user);
    return user;
}).then((user) => {
    console.log("Check user subject", user.data.subject);
    return user;
}).catch((err) => {
    console.log("Logging the error",err);
})


const usingAsyncAwait = async () => {
    const res = await callApi();
    console.log("Async await working:", res);
}

usingAsyncAwait();