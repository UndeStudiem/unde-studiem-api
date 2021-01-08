
const sanitizeObject = (obj) => {
   Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key]);
}

module.exports = {
   sanitizeObject
};