const express = require('express');
const { checkSchema } = require('express-validator');
const { ObjectId } = require('mongodb');
const service = require('./services.js');
const { querySchema, programSchema } = require('./schemas.js');

const router = express.Router();

router.post('/', checkSchema(programSchema), async (req, res, next) => {
   const {
      name,
      collegeId,
      degree,
      language,
      type,
      accredited,
      duration,
      organization,
      credits,
      totalPlaces,
      taxFreePlaces,
      taxPlaces,
      admissionType,
      courses,
      competencies
   } = req.body;

   try {
      await service.create(name, ObjectId(collegeId), degree, language, type, accredited, duration, organization, credits,
          totalPlaces, taxFreePlaces, taxPlaces, admissionType, courses, competencies);

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
      name
   } = req.query.name;

   try {
      res.status(200).json(await service.getByName(name, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      degree
   } = req.query.degree;

   try {
      res.status(200).json(await service.getByDegree(degree, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      language
   } = req.query.language;

   try {
      res.status(200).json(await service.getByLanguage(language, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      type
   } = req.query.type;

   try {
      res.status(200).json(await service.getByType(type, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      collegeId
   } = req.query.collegeId;

   try {
      res.status(200).json(await service.getByCollege(collegeId, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      collegeId
   } = req.query.collegeId;

   const {
      degree
   } = req.query.degree;

   try {
      res.status(200).json(await service.getByCollegeAndDegree(collegeId, degree, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      collegeId
   } = req.query.collegeId;

   const {
      language
   } = req.query.language;

   try {
      res.status(200).json(await service.getByCollegeAndLanguage(collegeId, language, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      collegeId
   } = req.query.collegeId;

   const {
      type
   } = req.query.type;

   try {
      res.status(200).json(await service.getByCollegeAndType(collegeId, type, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      degree
   } = req.query.degree;

   const {
      language
   } = req.query.language;

   try {
      res.status(200).json(await service.getByDegreeAndLanguage(degree, language, querySchema));
   } catch (err) {
      next(err);
   }
});


router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      degree
   } = req.query.degree;

   const {
      type
   } = req.query.type;

   try {
      res.status(200).json(await service.getByDegreeAndType(degree, type, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      language
   } = req.query.language;

   const {
      type
   } = req.query.type;

   try {
      res.status(200).json(await service.getByLanguageAndType(language, type, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      collegeId
   } = req.query.collegeId;

   const {
      degree
   } = req.query.degree;

   const {
      language
   } = req.query.language;

   try {
      res.status(200).json(await service.getByCollegeAndDegreeAndLanguage(collegeId, degree, language, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      collegeId
   } = req.query.collegeId;

   const {
      degree
   } = req.query.degree;

   const {
      type
   } = req.query.type;

   try {
      res.status(200).json(await service.getByCollegeAndDegreeAndType(collegeId, degree, type, querySchema));
   } catch (err) {
      next(err);
   }
});

router.get('', checkSchema(querySchema), async (req, res, next) => {
   const {
      collegeId
   } = req.query.collegeId;

   const {
      degree
   } = req.query.degree;

   const {
      type
   } = req.query.type;

   const {
      language
   } = req.query.language;

   try {
      res.status(200).json(await service.getByCollegeAndDegreeAndLanguageAndType(collegeId, degree, language, type, querySchema));
   } catch (err) {
      next(err);
   }
});

module.exports = router;