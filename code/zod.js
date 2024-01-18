const express=require('express')
const zod=require('zod')
const app=express()

const schema1=zod.array(zod.number());

const schema2=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
    country:zod.literal("IN").or(zod.literal("US")),
})

app.use(express.json());

app.post("/health-checkup",(req,res)=>{
    const kidneys=req.body.kidneys;
    const response=schema1.safeParse(kidneys)

    if(!response.success){
        res.status(411).json({
            msg:"input is valid"
        })
    }
    res.send({
        response
    })
})

app.listen(3000)