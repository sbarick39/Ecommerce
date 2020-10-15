"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var app = express();
app.get('/phones', function (req, res) {
    mongodb.MongoClient.connect("mongodb+srv://admin:admin@employeemanagementsyste.ccfym.mongodb.net/Ecommerce?retryWrites=true&w=majority", function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db("Ecommerce");
            db.collection("phones").find().toArray(function (err, array) {
                res.send(array);
            });
        }
    });
});
var port = process.env.PORT || 8080;
app.listen(port);
console.log("server started");
