import { client } from "..";


export async function createTodos(title:string,desription:string,done:boolean,userId:number){
    const query=`
    INSERT INTO todos (userId,title,desription)
    VALUES($1,$2,$3)
    RETURNING title,done,id,description
    `
    const response=client.query(query,[userId,title,desription]);
    return (await response).rows[0];

}

export async function updateTodos(todoId:number){
const query=`
    UPDATE todos
    SET done=true
    WHERE id=$1
    RETURNING *;
`
const response=await client.query(query,[todoId]);
return response.rows[0];
}


export async function getTodos(userId:number){
    const query=`
    SELECT * FROM todos  WHERE id=$1
    `
    const response=await client.query(query,[userId])
    return response.rows[0];
}