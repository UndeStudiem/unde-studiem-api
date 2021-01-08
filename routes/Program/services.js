const { Program } = require('../../data');

const create = async (body) => {
   const record = new Program({
      name: body.name,
      college: ObjectId(collegeId),
      degree: body.degree,
      language: body.language,
      type: body.type,
      accredited: body.accredited,
      duration: body.duration,
      organization: body.organization,
      credits: body.credits,
      totalPlaces: body.totalPlaces,
      taxFreePlaces: body.taxFreePlaces,
      taxPlaces: body.taxPlaces,
      admissionType: body.admissionType,
      courses: body.courses,
      competencies: body.competencies
   });
   await record.save();
};

const getAll = async (query) => {
   const searchOptions = {
      name: query.name,
      degree: query.degree,
      language: query.language,
      type: query.type,
      college: query.collegeId
   };
   sanitizeObject(searchOptions);

   return await Program
      .find(searchOptions)
      .skip(query.size * query.page)
      .limit(query.size);
};

const getById = async (id) => {
   return await Program.findById(id);
};


module.exports = {
   create,
   getAll,
   getById,
}