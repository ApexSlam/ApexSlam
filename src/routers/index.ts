import { Router } from 'express';

import helloRouter from './hello';

const router = Router();

// for all request whose route start with "/hello", use the helloRouter to resolve the request
router.use('/hello', helloRouter);

export default router;
