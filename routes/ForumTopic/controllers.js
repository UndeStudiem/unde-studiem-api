const express = require('express');
const { checkSchema } = require('express-validator');

const service = require('./services.js');
const { forumTopicSchema, querySchema } = require('./schemas.js');

const router = express.Router();

router.post('/', checkSchema(forumTopicSchema), async (req, res, next) => {
   const {
      name,
      forumId
   } = req.body;

   try {
      await service.create(name, forumId);

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