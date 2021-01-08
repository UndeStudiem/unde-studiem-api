const express = require('express');
const { checkSchema } = require('express-validator');
const service = require('./services.js');
const { querySchema, programSchema } = require('./schemas.js');

const router = express.Router();

router.post('/', checkSchema(programSchema), async (req, res, next) => {
   try {
      await service.create(req.body);

      res.status(201).end();
   } catch (err) {
      next(err);
   }
});

router.get('/:id', async (req, res, next) => {
   const {
      id
   } = req.params;

   try {
      res.status(200).json(await service.getById(id));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   try {
      res.status(200).json(await service.getAll(req.query));
   } catch (err) {
      next(err);
   }
});

module.exports = router;