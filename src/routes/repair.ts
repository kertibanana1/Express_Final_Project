import { RepairModel } from '../models/repair';
import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';

const jwt = new Jwt();

const router: Router = Router();

const repairModel = new RepairModel();

router.get('/', async (req: Request, res: Response) => {
  let db = req.db;
  try {
    const result = await repairModel.get(db);
    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
    console.log(error.message);
    res.send({
      ok: false,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
});

router.post('/', async (req: Request, res: Response) => {
  let db = req.db;
  let data = req.body.data;
  try {
    const result = await repairModel.insert(db,data);
    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
    console.log(error.message);
    res.send({
      ok: false,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
});

router.post('/sumByClothId', async (req: Request, res: Response) => {
  let db = req.db;
  let clothId = req.body.clothId;
  try {
    const result = await repairModel.sumByClothId(db,clothId);
    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
    console.log(error.message);
    res.send({
      ok: false,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
});

router.post('/getByClothId', async (req: Request, res: Response) => {
  let db = req.db;
  let clothId = req.body.clothId;
  try {
    const result = await repairModel.getByClothId(db,clothId);
    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
    console.log(error.message);
    res.send({
      ok: false,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
});

router.post('/searchByDate', async (req: Request, res: Response) => {
  let db = req.db;
  const dateSearch1 = req.body.dateSearch1;
  const dateSearch2 = req.body.dateSearch2;
  try {
      const result: any = await repairModel.searchByDate(db, dateSearch1,dateSearch2);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (err) {
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});



export default router;