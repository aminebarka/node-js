// Importing Required Module(s)
import express from 'express';
import Categorie from '../models/categorie';

// Creating a New Router Instance
const router = express.Router();

// Get All Categories
router.get('/', async (req, res) => {
  // Your Code Here
});

// Create a New Category
router.post('/', async (req, res) => {
  // Your Code Here
});

// Get a Specific Category by its ID
router.get('/:categorieId', async (req, res) => {
  // Your Code Here
});

// Update a Specific Category by Its ID
router.put('/:categorieId', async (req, res) => {
  // Your Code Here
});

// Delete a Category by Its ID
router.delete('/:categorieId', async (req, res) => {
  // Your Code Here
});

// Exporting The Router Instance
export default router;
