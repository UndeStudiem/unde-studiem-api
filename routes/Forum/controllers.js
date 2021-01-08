const express = require('express');
const { checkSchema } = require('express-validator');
const { ObjectId } = require('mongodb');
const service = require('./services.js');
const { forumSchema, querySchema } = require('./schemas.js');

const router = express.Router();

router.post('/', checkSchema(forumSchema), async (req, res, next) => {
   try {
      await service.create(req.body);

      res.status(201).end();
   } catch (err) {
      next(err);
   }
});

router.get('/', checkSchema(querySchema), async (req, res, next) => {
   try {
      res.status(200).json(await service.getAll(req.query));
   } catch (err) {
      next(err);
   }
});

module.exports = router;