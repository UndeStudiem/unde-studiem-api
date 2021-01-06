const express = require('express');
const { checkSchema } = require('express-validator');
const { ObjectId } = require('mongodb');
const service = require('./services.js');
const { collegeSchema, querySchema } = require('./schemas.js');

const router = express.Router();

router.post('/', checkSchema(collegeSchema), async (req, res, next) => {
   const {
      name,
      universityId,
      description,
      graduateRate,
      employabilityRate,
      studentOrganizations,
      partnerships,
      accommodationType,
      otherFacilities
   } = req.body;

   try {
      await service.create(name, ObjectId(universityId), description, graduateRate, employabilityRate, studentOrganizations,
          partnerships, accommodationType, otherFacilities);

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

router.get('/:id', checkSchema(querySchema), async (req, res, next) => {
   const {
      id
   } = req.params;

   try {
      res.status(200).json(await service.getById(id, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      universityId
   } = req.query.universityId;

   try {
      res.status(200).json(await service.getByUniversityId(universityId, querySchema));
   } catch (err) {
      next(err);
   }
});

module.exports = router;