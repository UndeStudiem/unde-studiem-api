const { University } = require('../../data');

const create = async (name, city) => {
   const record = new University({
      name,
      city
   });
   await record.save();
};

const getAll = async (query) => {
   return await University
      .find()
      .skip(query.size * query.page)
      .limit(query.size);
};

module.exports = {
   create,
   getAll,
}