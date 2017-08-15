var express = require('express');
var router = express.Router();
var Article = require('../models/article');
var Comment = require('../models/comment');
var path = require('path');
var request = require('request');

var keys = require("../keys.js");
var apiKey = process.env.NYT_API || keys.nytApi.key;

router.get("/api/saved", function(req, res) {
  Article.find({}).exec(function(err, doc) {
    if (err) console.log(err);
    else res.send(doc);
  });
});

router.post("/api/saved", function(req, res) {
  var newArticle = req.body;
  newArticle = Article(newArticle);
  newArticle.save(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Article saved");
    }
  });
});

router.delete("/api/saved", function(req, res) {
  console.log(req.body);
  Article.findByIdAndRemove({ _id: req.body._id }, function(err, doc) {
    if (err) console.log(err);
    else res.send(doc);
  });
});

router.get("*", function(req, res, next) {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = router;