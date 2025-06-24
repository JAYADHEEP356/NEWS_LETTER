const express = require('express'); 
const router = express.Router();
const {
  getAllArticles,
  getArticleById,
  getArticleBySlug,
  getArticlesByCategory,
  getArticlesByLocation,
  getArticlesByCategoryAndLocation,
  createArticle,
  updateArticleBySlug
} = require('../controllers/articleController');

// CREATE
router.post('/', createArticle);

// UPDATE
router.put('/slug/:slug', updateArticleBySlug);

// GET by ID or slug
router.get('/id/:id', getArticleById);
router.get('/slug/:slug', getArticleBySlug);

// ✅ ORDER MATTERS: place the specific route first
router.get('/category/:category/location/:location', getArticlesByCategoryAndLocation);
router.get('/category/:category', getArticlesByCategory);
router.get('/location/:location', getArticlesByLocation);

// All articles
router.get('/', getAllArticles);

module.exports = router;
