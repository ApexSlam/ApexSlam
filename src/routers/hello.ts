import { Router, Request, Response } from 'express';

import HelloService from 'services/hello';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const hello = HelloService.get();
    res.send(hello);
});

export default router;
