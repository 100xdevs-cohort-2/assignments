import express, { Request, Response } from 'express';
import fs from 'fs/promises';

const app = express();
const port: number = 3000;
const filesPath = './testFiles';

app.get('/', (req: Request, res: Response) => {
  res.send(`HI FROM PORT ${port}`);
});

app.get('/files', async (req: Request, res: Response) => {
  try {
    const files: string[] = await fs.readdir(filesPath, 'utf-8');
    res.json(files);
  } catch (err) {
    res.status(500).send(`Server Error: ${err}`);
  }
});

app.get('/files/:fileName', async (req: Request, res: Response) => {
  const { fileName } = req.params;
  const filePath = `${filesPath}/${fileName}`;

  try {
    await fs.stat(filePath);
    const data: string = await fs.readFile(filePath, 'utf-8');
    res.status(200).send(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.status(404).send('File not found :(');
    } else {
      res.status(500).send(`Server Error: ${err}`);
    }
  }
});

app.listen(port, () => {
  console.log(`Port Listening on ${port}`);
});
