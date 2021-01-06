const { Program } = require('../../data');

const create = async (name, collegeId, degree, language, type, accredited, duration, organization, credits,
                      totalPlaces, taxFreePlaces, taxPlaces, admissionType, courses, competencies) => {
   const record = new Program({
      name,
      college: collegeId,
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
   });
   await record.save();
};

const getAll = async (query) => {
   return await Program
      .find()
      .skip(query.size * query.page)
      .limit(query.size);
};

const getById = async (id, query) => {
   return await Program.findById(id)
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByName = async ( name, query) => {
   return await Program.findOne({
      name: name
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByDegree = async ( degree, query) => {
   return await Program.findOne({
      degree: degree
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByLanguage = async ( language, query) => {
   return await Program.findOne({
      language: language
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByType = async ( type, query) => {
   return await Program.findOne({
      type: type
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByCollege = async ( collegeId, query) => {
   return await Program.findOne({
      college: collegeId
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByCollegeAndDegree = async ( collegeId, degree, query) => {
   return await Program.findOne({
      college: collegeId,
      degree: degree
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByCollegeAndLanguage = async ( collegeId, language, query) => {
   return await Program.findOne({
      college: collegeId,
      language: language
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByCollegeAndType = async ( collegeId, type, query) => {
   return await Program.findOne({
      college: collegeId,
      type: type
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByDegreeAndLanguage = async (degree, language, query) => {
   return await Program.findOne({
      degree: degree,
      language: language
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByDegreeAndType = async (degree, type, query) => {
   return await Program.findOne({
      type: type,
      degree: degree
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByLanguageAndType = async (language, type, query) => {
   return await Program.findOne({
      type: type,
      language: language
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByCollegeAndDegreeAndLanguage = async ( collegeId, degree, language, query) => {
   return await Program.findOne({
      college: collegeId,
      degree: degree,
      language: language
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByCollegeAndDegreeAndType = async ( collegeId, degree, type, query) => {
   return await Program.findOne({
      college: collegeId,
      degree: degree,
      type: type
   })
       .skip(query.size * query.page)
       .limit(query.size);
};

const getByCollegeAndDegreeAndLanguageAndType = async ( collegeId, degree, language, type, query) => {
   return await Program.findOne({
      college: collegeId,
      degree: degree,
      language: language,
      type: type
   })
       .skip(query.size * query.page)
       .limit(query.size);
};


module.exports = {
   create,
   getAll,
   getById,
   getByName,
   getByDegree,
   getByLanguage,
   getByCollegeAndDegree,
   getByCollege,
   getByType,
   getByDegreeAndType,
   getByCollegeAndDegreeAndLanguage,
   getByCollegeAndDegreeAndLanguageAndType,
   getByCollegeAndLanguage,
   getByCollegeAndType,
   getByDegreeAndLanguage,
   getByDegreeAndType,
   getByLanguageAndType,
   getByCollegeAndDegreeAndType
}