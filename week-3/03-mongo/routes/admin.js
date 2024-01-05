const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require("../db/index")

router.post('/signup', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
  
    try {
      const admin = await Admin.findOne({ username: username, password: password });
  
      if (admin) {
        res.json({
          msg: "Admin logged successfully",
          username: username,
          password: password
        });
      } else {
        await Admin.create({ password: password, username: username });
        res.json({
          msg: "Admin created successfully",
          username: username,
          password: password
        });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  router.post('/courses', adminMiddleware, async function(req, res)  {
    const username = req.headers.username;
const password = req.headers.password;
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const image = req.body.image
    const admin = await Admin.findOne({ username: username, password: password });
if (admin) {
     const newCourse = await Course.create({
        title:title,
        description:description,
        price:price,
        image:image
    })
    if(newCourse){
        admin.courses.push(newCourse)
        admin.save()
        res.json({
            msg:"new course has been created successfully"
        })

}
}
   
    });
  
    router.get('/courses', adminMiddleware, async function(req, res) {
        const username = req.headers.username;
        const password = req.headers.password;
    
        try {
            const admin = await Admin.findOne({ username: username, password: password });
    
            if (admin) {
                // Assuming you want to retrieve the courses associated with the admin
                const courses = await Course.find({ _id: { $in: admin.courses } });
    
                if (courses && courses.length > 0) {
                    res.json({
                        msg: "Here are all your courses",
                        courses: courses
                    });
                } else {
                    res.json({
                        msg: "There are no courses associated with this admin"
                    });
                }
            } else {
                res.status(404).json({
                    msg: "Admin not found"
                });
            }
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
    
  module.exports = router;