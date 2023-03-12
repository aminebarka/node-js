import mongoose from 'mongoose';
import Categorie from './categorie.js';

const scategorieSchema = new mongoose.Schema({
  nomscategorie: { type: String, required: true },
  imagescat: { type: String, required: false },
  categorieID: { type: mongoose.Schema.Types.ObjectId, ref: Categorie },
});

const SCategorie = mongoose.model('scategorie', scategorieSchema);

export default SCategorie;
