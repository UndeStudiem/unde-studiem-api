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

   if (req.query.name != null) {
         try {
            res.status(200).json(await service.getByName(req.query.name, querySchema));
         } catch (err) {
            next(err);
         }
   }

   if (req.query.degree != null && req.query.language == null && req.query.type == null && req.query.collegeId == null) {
      try {
         res.status(200).json(await service.getByDegree(req.query.degree, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.degree == null && req.query.language != null && req.query.type == null && req.query.collegeId == null) {
      try {
         res.status(200).json(await service.getByLanguage(req.query.language, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.degree == null && req.query.language == null && req.query.type != null && req.query.collegeId == null) {
      try {
         res.status(200).json(await service.getByType(req.query.type, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.degree == null && req.query.language == null && req.query.type == null && req.query.collegeId != null) {
      try {
         res.status(200).json(await service.getByCollege(req.query.collegeId, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.degree != null && req.query.language == null && req.query.type == null && req.query.collegeId != null) {
      try {
         res.status(200).json(await service.getByCollegeAndDegree(req.query.collegeId, req.query.degree, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.degree == null && req.query.language != null && req.query.type == null && req.query.collegeId != null) {
      try {
         res.status(200).json(await service.getByCollegeAndLanguage(req.query.collegeId, req.query.language, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.degree == null && req.query.language == null && req.query.type != null && req.query.collegeId != null) {
      try {
         res.status(200).json(await service.getByCollegeAndType(req.query.collegeId, req.query.type, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.degree != null && req.query.language != null && req.query.type == null && req.query.collegeId == null) {
      try {
         res.status(200).json(await service.getByDegreeAndLanguage(req.query.degree, req.query.language, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.degree != null && req.query.language == null && req.query.type != null && req.query.collegeId == null) {
      try {
         res.status(200).json(await service.getByDegreeAndType(req.query.degree, req.query.type, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.degree == null && req.query.language != null && req.query.type != null && req.query.collegeId == null) {
      try {
         res.status(200).json(await service.getByLanguageAndType(req.query.language, req.query.type, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.degree != null && req.query.language != null && req.query.type == null && req.query.collegeId != null) {
      try {
         res.status(200).json(await service.getByCollegeAndDegreeAndLanguage(req.query.collegeId, req.query.degree, req.query.language, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.degree != null && req.query.language == null && req.query.type != null && req.query.collegeId != null) {
      try {
         res.status(200).json(await service.getByCollegeAndDegreeAndType(req.query.collegeId, req.query.degree, req.query.type, querySchema));
      } catch (err) {
         next(err);
      }
   } else if (req.query.degree != null && req.query.language != null && req.query.type != null && req.query.collegeId != null) {
      try {
         res.status(200).json(await service.getByCollegeAndDegreeAndLanguageAndType(req.query.collegeId,
             req.query.degree, req.query.language, req.query.type, querySchema));
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