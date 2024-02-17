import { client } from "..";

export async function CreateUser(username:string,password:string,name:string){
    const q=`
    INSERT INTO
    users(usernname,password,name)
    VALUES($1,$2,$3)
    `
    await client.query(q,[username,password,name])

} 

export async function getUser(userId:number){
    const query=`
    SELECT * FROM users WHERE id=$1
    `
    const response=await client.query(query,[userId])
    const data= response;
    return data.rows[0];
}