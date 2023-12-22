const zod=require('zod');
function validCourseStructure(data){
    const schema=zod.object({
        title:zod.string(),
        description:zod.string(),
        price:zod.number(),
        imageLink:zod.string(),
        published:zod.boolean(),
    })
    
    return schema.safeParse(data).success;
}
module.exports={validCourseStructure}