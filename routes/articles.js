const express = require("express");
const assert = require('assert');
const { BadRequest } = require("http-errors");
const ArticleModel = require("../models/article");

const router = express.Router();

router.get('/', async (req, res, next) => {
  const allArticles = await ArticleModel.find();
  res.json(allArticles);
  next();
});

router.get('/:id', (req, res) => {
  res.json({ text: `post id = ${req.params.id}` });
});

// POST /
// add a new article
router.post('/', async (req, res, next) => {
  const { title, content } = req.body || {};
  assert.ok(title !== undefined, new BadRequest('`title` is missing'));
  assert.ok(typeof title === 'string', new BadRequest('`title` needs to be of type string'));
  assert.ok(content !== undefined, new BadRequest('`content` is missing'));
  assert.ok(typeof content === 'string', new BadRequest('`content` needs to be of type string'));

  // create the article object
  const article = new ArticleModel({
    title:  title,
    content: content,
  });

  // saved in the db
  const savedArticle = await article.save();

  // return saved data from the db to the client
  res.json(savedArticle);

  next();
});

module.exports = router;
