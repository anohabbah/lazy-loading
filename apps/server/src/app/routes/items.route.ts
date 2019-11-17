import * as express from 'express';
import items from '../data/items';
import { Request, Response } from 'express';

const router = express.Router();

router.get('/', ((req: Request, res: Response) => res.json({ items })));

router.get('/page/:page/amount/:amount', (req, res) => {
  const page = parseInt(req.params.page, 10) - 1;
  const amount = parseInt(req.params.amount, 10);
  const found = items.slice(page * amount, (page + 1) * amount);

  if (found) {
    setTimeout(() => res.json({ items: found }), 1000);
  } else {
    res.status(400).json({message: 'No items found.'});
  }
});

export default router;
