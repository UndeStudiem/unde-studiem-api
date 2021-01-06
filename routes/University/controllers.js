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
      city
   } = req.query.city;

   try {
      res.status(200).json(await service.getByCity(city, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      name
   } = req.query.name;

   try {
      res.status(200).json(await service.getByName(name, querySchema));
   } catch (err) {
      next(err);
   }
});

module.exports = router;