var express = require('express');
var router = express.Router();
var sqlserver = require("../public/javascripts/db.js");

/* GET home page. */
router.get('/', function(req, res, next) {
    sqlserver.sql("select top 3 * from [MyRoles]", function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        res.render("index", {
            title: "角色展示",
            data: result.recordset,
            role:{}
        });
    });


});
router.get("/role/getjson", function (req, res, next) {
    sqlserver.sql("select top 3 * from [MyRoles]", function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        res.end(result.recordset);
    });


});
router.get('/role/addrole', function (req, res, next) {
    res.render("addrole");


});


module.exports = router;
