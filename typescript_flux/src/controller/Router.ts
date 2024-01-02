import fluxjs from "fluxjs";
import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import container from "../infraestructure/containers";

const router = Router();

const taskValidationRules = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('completed').isBoolean().withMessage('Completed must be a boolean'),
];

router.post('/', taskValidationRules, async (req: Request, res: Response) => {
  const errors = validationResult(req);

  /*if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }*/

  let fluxContext = new fluxjs.Context(req.body);

    //fluxContext.request.nextStep = 'third_view_step'

    let instance = container.resolve("mobileVersion");

    let result = await instance.versionPostNavigate(fluxContext);
    res.status(200).json(result);
});

router.put('/', taskValidationRules, async (req: Request, res: Response) => {
  const errors = validationResult(req);

  /*if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }*/

  let fluxContext = new fluxjs.Context(req.body);

  //fluxContext.request.nextStep = 'third_view_step'

  let instance = container.resolve("mobileVersion");

  let result = await instance.versionPutNavigate(fluxContext);
  res.status(200).json(result);
});

export default router;
