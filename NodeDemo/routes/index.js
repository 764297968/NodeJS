var express = require('express');
var router = express.Router();
var sqlserver = require("../db.js");
/* GET home page. */
router.get('/', function (req, res, next) {
    sqlserver.sql("select top 3 * from [Mylogger]", function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result.recordset)

        //res.write(JSON.stringify(result.recordset));
        //res.end();//不写则没有http协议尾
        res.render("index", {
            item: JSON.stringify(result.recordset),
            title: "标题",
            data: result.recordset
        });
    });
   
  //res.render('index', { title: 'Express' });
});

module.exports = router;
