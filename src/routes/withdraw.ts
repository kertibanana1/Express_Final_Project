import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { WithdrawModel } from '../models/withdraw';

const jwt = new Jwt();

const router: Router = Router();

const withdrawModel = new WithdrawModel();

router.post('/', async (req: Request, res: Response) => {
    let db = req.db;
    const data = req.body.data;

    try {
        const result: any = await withdrawModel.insertWithdraw(db, data);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/getByCode', async (req: Request, res: Response) => {
    let db = req.db;
    const withdrawCode = req.body.withdrawCode

    try {
        const result: any = await withdrawModel.getWithdrawByCode(db, withdrawCode);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/statusWithdraw', async (req: Request, res: Response) => {
    let db = req.db;
    const withdrawId = req.body.withdrawId;
    try {
        const result: any = await withdrawModel.statusWithdraw(db, withdrawId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/updateRound', async (req: Request, res: Response) => {
    let db = req.db;
    const round = req.body.round;
    const withdrawId = req.body.withdrawId;
    try {
        const result: any = await withdrawModel.updateRound(db, round, withdrawId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/getWithdrawByUserId', async (req: Request, res: Response) => {
    let db = req.db;
    const userId = req.body.userId;
    try {
        const result: any = await withdrawModel.getWithdrawByUserId(db, userId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

export default router;