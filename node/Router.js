var express = require('express');
var router = express.Router();

//引用连接数据库Model
var TestModel = require('../db.js');


router.get('/getLog', function (req, res) {
    
    sqlserver.sql("select * from [Mylogger]", function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        res.render("log", {
            //item: result
            title:"标题"
        });
    });
 
});

//1 可以直接用Form表单方式提交数据
//2 或者通过页面脚本绑定事件响应结合JQuery的Ajax
//  实现调用路由（controller）接口将数据写入数据库
//一般开发中会在页面脚本中调用很多其他或者外部接口//【该方式比较常用 即就把路由方法当成一个对外的接口】
router.post('/insert', function (req, res) {
    var params = req.body;
    //MogoDB中可以用Create方法添加数据
    TestModel.create(params, function (err) {
        if (err) res.end('{result:-1}');
        else {
            TestModel.find({}, function (error, data) {
                if (error) res.end('{result:-1}');
                else {
                    res.end('{result:1,data:' + data + '}');
                }
            });
        }
    });
});
module.exports = router;