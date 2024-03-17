import { Hono } from 'hono';

import { getPostsByTag, getTags } from '../controller/tagController';

export const tagRouter = new Hono();

tagRouter.get('/getPost/:tag', getPostsByTag);
tagRouter.get('/tags', getTags);
