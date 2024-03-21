const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending"
}

class MyPromise {

    #thenCbs = []
    #catchCbs = []
    #state = STATE.PENDING
    #value
    //Doing bind because without that was seeing `this` as undefined 
    #onSuccessBind = this.#onSuccess.bind(this)
    #onFailBind = this.#onFail.bind(this); 

    constructor(cb) {
      try {    
        cb(this.#onSuccessBind, this.#onFailBind)
      } catch(e) {
        this.#onFail(e)
      }
    }

    #runCallbacks() {
        if(this.#state === STATE.FULFILLED) {
            this.#thenCbs.forEach(callback => {
                callback(this.#value)
            })
            this.#thenCbs = []
        }

        if(this.#state === STATE.REJECTED) {
            this.#catchCbs.forEach(callback => {
                callback(this.#value)
            })
            this.#catchCbs = []
        }
    }

    #onSuccess(value) {
      queueMicrotask(() => {  
        if(this.#state !== STATE.PENDING) return;

        if(value instanceof MyPromise) {
            value.then(this.#onSuccessBind, this.#onFailBind)
            return
        }

        this.#value = value
        this.#state = STATE.FULFILLED
        this.#runCallbacks()
      })
    }

    #onFail(value) {
      queueMicrotask(() => {
        if(this.#state !== STATE.PENDING) return;

        if(value instanceof MyPromise) {
            value.then(this.#onSuccessBind, this.#onFailBind)
            return
        }

        if(this.#catchCbs.length == 0) {
            throw new UncaughtMyPromiseError(value);
        }

        this.#value = value
        this.#state = STATE.REJECTED
        this.#runCallbacks()
      })
    }

    then(thenCb, catchCb) {
      return new MyPromise((resolve, reject) => {
        
        this.#thenCbs.push(result => {
            if(thenCb == null) {
                resolve(result)
                return
            }

            try {
                resolve(thenCb(result))
            } catch (err) {
                reject(err);
            }
        })


        this.#catchCbs.push(result => {
            if(catchCb == null) {
                reject(result)
                return
            }

            try {
                resolve(catchCb(result))
            } catch (err) {
                reject(err);
            }
        })        
        
        this.#runCallbacks()   
      })
    }

    catch(cb) {
        return this.then(undefined, cb);
    }

    finally(cb) {
        return this.then(result => {
            cb()
            return result;
        }, result => {
            cb()
            throw result
        })
    }


    static resolve(value) {
        return new MyPromise((resolve, reject) => {
            resolve(value)
        })
    }

    static reject(value) {
        return new MyPromise((resolve, reject) => {
            reject(value);
        })
    }


    static all(promises) {
        const results = []
        let completedPromises = 0
        return new MyPromise((resolve, reject) => {
            for(let iter = 0; iter < promises.length; iter++) {
                const promise = promises[iter];
                promise.then(value => {
                    completedPromises++
                    results[iter] = value;
                    if(completedPromises == promises.length) {
                        resolve(results)
                    }
                }).catch(reject)
            }
            
        })
    }

    static allSettled(promises) {
        const results = []
        let completedPromises = 0
        return new MyPromise((resolve, reject) => {
            for(let iter = 0; iter < promises.length; iter++) {
                const promise = promises[iter];
                promise.then(value => {
                    results[iter] = {status: STATE.FULFILLED, value}
                }).catch(reason => {
                    results[iter] = {status: STATE.REJECTED, reason}
                })
                .finally(() => {
                    completedPromises++
                    if(completedPromises == promises.length) {
                        resolve(results)
                    }
                })
            }
            
        })        
    }

    static race(promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach(promise => {
                promise.then(resolve).catch(reject)
            })
        })
    }

    static any(promises) {
        const errors = []
        let rejectedPromises = 0
        return new MyPromise((resolve, reject) => {
            for(let iter = 0; iter < promises.length; iter++) {
                const promise = promises[iter];
                promise.then(resolve)
                .catch(value => {
                    rejectedPromises++
                    errors[iter] = value
                    if(rejectedPromises == promises.length) {
                        reject(new AggregateError(errors, "All promises were rejected"))
                    }
                })
            }
            
        })        
    }
}


class UncaughtMyPromiseError extends Error {
    constructor(error) {
        super(error)
        this.stack = `(in promise) ${error.stack}`
    }
}

module.exports = MyPromise;