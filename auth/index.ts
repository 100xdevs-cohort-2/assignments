import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import zod from 'zod';

const app = express();
const port: number = 3000;
const secretKey: string = 'Your_SECRET_Key';

const Users = [{
  username: 'fsdhjslpk',
  password: '123456789',
},{
  username: 'hjslpk',
  password: '123456789',

  }]

function validate(user) {
  const schema = zod.object({
    username: zod.string(),
    password: zod.string().min(8),
  });
  const res = schema.safeParse(user);
  return res;
}

app.use(express.json());

app.post('/signup', (req: Request, res: Response) => {
  const { user } = req.body;
  const valid = validate(user);
  console.log(valid);
  if(!valid.success){
    res.status(401).json('Invalid Credentials');
    return;
  }
  const token: string = jwt.sign(user.username, secretKey);
  Users.push(user);
  res.status(200).send(token);
})

app.get('/users', (req: Request, res: Response) => {
  const token: string = req.headers.authorization;
  if (!token) return res.status(401).json('Invalid Credentials');
jwt.verify(token, secretKey, (err, decoded: string) => {
  if (err) return res.status(401).json('Unauthorized');
  const displayed = Users.filter(temp => temp.username !== decoded);
  res.status(200).json({ users: displayed.map(user => user.username) });
});
});

app.listen(port, () => {
  console.log(`App Listning on port ${port}`);
})
