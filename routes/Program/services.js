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
   return await Program.find({
      name: name
   })
};

const getByDegree = async ( degree, query) => {
   return await Program.find({
      degree: degree
   })
};

const getByLanguage = async ( language, query) => {
   return await Program.find({
      language: language
   })
};

const getByType = async ( type, query) => {
   return await Program.find({
      type: type
   })
};

const getByCollege = async ( collegeId, query) => {
   return await Program.find({
      college: collegeId
   })
};

const getByCollegeAndDegree = async ( collegeId, degree, query) => {
   return await Program.find({
      college: collegeId,
      degree: degree
   })
};

const getByCollegeAndLanguage = async ( collegeId, language, query) => {
   return await Program.find({
      college: collegeId,
      language: language
   })
};

const getByCollegeAndType = async ( collegeId, type, query) => {
   return await Program.find({
      college: collegeId,
      type: type
   })
};

const getByDegreeAndLanguage = async (degree, language, query) => {
   return await Program.find({
      degree: degree,
      language: language
   })
};

const getByDegreeAndType = async (degree, type, query) => {
   return await Program.find({
      type: type,
      degree: degree
   })
};

const getByLanguageAndType = async (language, type, query) => {
   return await Program.find({
      type: type,
      language: language
   })
};

const getByCollegeAndDegreeAndLanguage = async ( collegeId, degree, language, query) => {
   return await Program.find({
      college: collegeId,
      degree: degree,
      language: language
   })
};

const getByCollegeAndDegreeAndType = async ( collegeId, degree, type, query) => {
   return await Program.find({
      college: collegeId,
      degree: degree,
      type: type
   })
};

const getByCollegeAndDegreeAndLanguageAndType = async ( collegeId, degree, language, type, query) => {
   return await Program.find({
      college: collegeId,
      degree: degree,
      language: language,
      type: type
   })
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