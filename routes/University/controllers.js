const express = require('express');
const { checkSchema } = require('express-validator');
const { ObjectId } = require('mongodb');
const service = require('./services.js');
const { universitySchema, querySchema } = require('./schemas.js');

const router = express.Router();

router.post('/', checkSchema(universitySchema), async (req, res, next) => {
   const {
      name,
      shortname,
      city,
      description,
      website,
      year,
      faculties,
      students
   } = req.body;

   try {
      await service.create(name, shortname, city,  description, website, year, faculties, students);

      res.status(201).end();
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
   if (req.query.city != null && req.query.name == null ) {
      try {
         res.status(200).json(await service.getByCity(req.query.city, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.city == null && req.query.name != null) {
      try {
         res.status(200).json(await service.getByName(req.query.name, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.city != null && req.query.name != null) {
      try {
         res.status(200).json(await service.getByNameAndCity(req.query.name, req.query.city, querySchema));
      } catch (err) {
         next(err);
      }
   } else { //empty query params => getAll
      try {
         res.status(200).json(await service.getAll(req.query));
      } catch (err) {
         next(err);
      }
   }
});

module.exports = router;