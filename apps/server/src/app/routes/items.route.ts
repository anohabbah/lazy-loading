import * as express from 'express';
import items from '../data/items';
import { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const queryParams = req.query;

  const pageNumber = parseInt(queryParams.pageNumber, 10) || 0;
  const pageSize = parseInt(queryParams.pageSize, 10);

  const start = pageNumber * pageSize;
  const found = items.slice(start, start + pageSize);

  if (found) {
    setTimeout(() => res.json({ items: found }), 1000);
  } else {
    res.status(400).json({message: 'No items found.'});
  }
});

export default router;
