interface User{
    id:string,
    name:string
}
type Users=Record<string ,User>

const users:Users={
    "khjsfj":{
        id:"skjd",
        name:"hksdhj"
    },
    "kejkr":{
        id:"dkjshfj",
        name:"snfkd"
    }
}
console.log(users['khjsfj'])