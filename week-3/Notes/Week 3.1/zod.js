const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

// How to write the schema in zod

// Zod is an independednt library using which we create a schhme to validate the inputs (just like validators in flask py)
// {
//     email: string => email,
//     password: atleast 8 letters
//     country: "IN", "US",
// }

// const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string(),
//     country: zod.literal("IN").or(z.literal("US")),
//     kidneys: zod.array(z.number())
// })

app.use(express.json());

app.post("/health-checkup", (req, res)=>{
    // kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){

    }   
})

app.listen(3000);