var express = require('express');
var router = express.Router();
var Article = require('../models/article');
var Comment = require('../models/comment');
var path = require('path');
var request = require('request');

var keys = require("../keys.js");
var apiKey = process.env.NYT_API || keys.nytApi.key;

// router.post("/api/search", function(req, res) {
//   request.get({
//     url: req.body.url,
//     qs: {
//       'api-key': apiKey
//     },
//   }, function(err, response, body) {
//     body = JSON.parse(body);
//     res.send(body.response.docs);
//   });
// });

router.get("/api/saved", function(req, res) {

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

});

router.get("*", function(req, res, next) {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = router;