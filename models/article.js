import mongoose from 'mongoose';
import Scategorie from './scategorie.js';

const { Schema, model } = mongoose;

const articleSchema = new Schema({
  reference: {
    type: String,
    required: true,
    unique: true
  },
  designation: {
    type: String,
    required: true,
    unique: true
  },
  prix: {
    type: Number,
    required: false
  },
  marque: {
    type: String,
    required: true
  },
  qtestock: {
    type: Number,
    required: false
  },
  imageart: {
    type: String,
    required: false
  },
  scategorieID: {
    type: Schema.Types.ObjectId,
    ref: Scategorie
  }
});

export default model('article', articleSchema);
