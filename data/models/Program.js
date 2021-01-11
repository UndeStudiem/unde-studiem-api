const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   college: {
      type: Schema.Types.ObjectId,
      ref: 'College',
      required: true
   },
   degree: {
      type: String,
      enum: ['PU', 'L', 'M', 'D', 'L+M'],
      require: true
   },
   language: {
      type: String,
      enum: ['RO', 'EN', 'FR', 'DU'],
      require: true
   },
   type: {
      type: String,
      enum: ['IF', 'ID', 'IFR'],
      require: true
   },
   field: {
      type: String,
      enum: ['Științe Inginerești',
         'Științe Politice și Comunicare',
         'Științe Sociale și Psihologie',
         'Științe Umaniste',
         'Științe ale Naturii',
         'Științe Juridice',
         'Arte, Arhitectură și Urbanism',
         'Științe Economice',
         'Științe Exacte',
         'Științe ale Naturii',
         'Științe Agricole',
         'Medicină',
         'Ştiinţa Sportului şi Educaţiei Fizice',
         'Teologie',
         'Științe Militare și de Informații']
   },
   accredited: {
      type: String,
      enum: ['A', 'AP']
   },
   duration: {
      type: Number
   },
   organization: {
      type: Number
   },
   credits: {
      type: Number
   },
   totalPlaces: {
      type: Number
   },
   taxFreePlaces: {
      type: Number
   },
   taxPlaces: {
      type: Number
   },
   admissionType: {
      type: String,
      enum: ['DOSAR', 'EXAMEN', 'EXAMEN+BAC']
   },
   tax: {
      type: String
   },
   courses: {
      type: String
   },
   competencies: {
      type: String
   }

}, { timestamps: true });

const ProgramModel = mongoose.model('Program', ProgramSchema, 'programs');

module.exports = ProgramModel;
