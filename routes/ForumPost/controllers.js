const express = require('express');
const { checkSchema } = require('express-validator');
const { authorizeAndExtractToken } = require('../../security/Jwt')
const { ObjectId } = require('mongodb');
const service = require('./services.js');
const { forumPostSchema, querySchema } = require('./schemas.js');

const router = express.Router();

router.post('/', authorizeAndExtractToken, checkSchema(forumPostSchema), async (req, res, next) => {
   const {
      text,
      forumTopicId
   } = req.body;
   const {
      decoded
   } = req.state;

   try {
      await service.create(text, ObjectId(decoded.userId), ObjectId(forumTopicId));

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