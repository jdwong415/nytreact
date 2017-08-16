var express = require('express');
var router = express.Router();
var Article = require('../models/article');
var path = require('path');

router.get("/api/saved", function(req, res) {
  Article.find({}).exec(function(err, doc) {
    if (err) console.log(err);
    else res.send(doc);
  });
});

router.post("/api/saved", function(req, res) {
  var newArticle = req.body;
  newArticle = Article(newArticle);
  newArticle.save(function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log("Article saved");
      res.send(doc);
    }
  });
});

router.delete("/api/saved", function(req, res) {
  Article.findByIdAndRemove({ _id: req.body._id }, function(err, doc) {
    if (err) console.log(err);
    else res.send(doc);
  });
});

router.get("*", function(req, res, next) {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = router;