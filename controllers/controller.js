var express = require('express');
var router = express.Router();
var Article = require('../models/article');
var Comment = require('../models/comment');
var path = require('path');
var request = require('request');

var keys = require("../keys.js");
var apiKey = process.env.NYT_API || keys.nytApi.key;

router.get("/api/search", function(req, res) {
  request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': apiKey
    },
  }, function(err, response, body) {
    body = JSON.parse(body);
    console.log(body.response.docs);
  });
});

router.get("/api/saved", function(req, res) {

});

router.post("/api/saved", function(req, res) {

});

router.delete("/api/saved", function(req, res) {

});

router.get("*", function(req, res, next) {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = router;