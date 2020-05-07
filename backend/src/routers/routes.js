import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Uai eu tô Alive.',
  });
});

export default router;
