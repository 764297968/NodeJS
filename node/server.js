var http=require("http")

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // 发送响应数据 "Hello World"
    //response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
var fs = require("fs");
fs.readFile("input.txt", function (err, data) {
    if (err)
       return  console.log(err);
    console.log(data.toString());
});
console.log("读取结束");

//var sql = require('mssql');
////连接方式2："mssql://用户名:密码@ip地址:1433(默认端口号)/数据库名称"
//sql.connect("mssql://sa:123456@localhost/Log").then(function() {
//    new sql.Request().query('select * from [Mylogger]').then(function (recordset) {
//        console.dir(recordset);
//    }).catch(function (err) {
//        console.log(err);
//    });
//}).catch(function (err) {
//    console.log(err);
//});

var sqlserver = require("./db.js");
sqlserver.sql("select * from [Mylogger]", function (err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});