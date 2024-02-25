import express,{ Express, Router } from "express";
import { getUser, insertUser } from "../controller/users";
const router: Router = express.Router();

router.post('/create',insertUser)
router.get('/fetchUser',getUser)

export default router;
