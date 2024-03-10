import CustomPromise from "./customPromise.js";

new CustomPromise((myResolve,myReject)=>{ myResolve();})
.customThen(()=>{console.log("then 1 completed");})
.customThen(()=>{  throw new Error("then 2 Failed");  console.log("then 2 completed");})
.customThen(()=>{console.log("then 3 completed");})
.customCatch(()=>{console.log("Error catched");});

new CustomPromise((myResolve,myReject)=>{ myResolve();})
.customThen(()=>{console.log("then 1 completed");})
.customThen(()=>{console.log("then 2 completed");})
.customThen(()=>{console.log("then 3 completed");})
.customCatch(()=>{console.log("Error catched");});


new CustomPromise((myResolve,myReject)=>{ myReject();})
.customThen(()=>{console.log("then 1 completed");})
.customThen(()=>{console.log("then 2 completed");})
.customThen(()=>{console.log("then 3 completed");})
.customCatch(()=>{console.log("Error catched");});

