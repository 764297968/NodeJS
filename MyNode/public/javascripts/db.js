var mssql = require('mssql');
//47.94.152.18
var db = {};
var config = {
    user: 'customer',
    password: '!@#123qweasd',
    server: '47.94.152.18',
    database: 'WDB',
    port: 1433,
    options: {
        encrypt: true // Use this if you're on Windows Azure  
    },
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 3000
    }
};
var conn=new mssql.connect(config)
//执行sql,返回数据.
//"mssql://sa:123456@192.168.0.122/Log"
db.sql = function (sql, callBack) {
    new mssql.Request().query(sql).then(function (recordset) {
        callBack(null, recordset);
        
       // console.log(conn)
    }).catch(function (err) {
        console.log(err);
        callBack(err, null);
    });


    //var connection = new mssql.connect("mssql://sa:123456@192.168.0.122/Log", function (err) {
    //    if (err) {
    //        console.log(err);
    //        return;
    //    }
    //    var ps = new mssql.PreparedStatement(connection);
    //    ps.prepare(sql, function (err) {
    //        if (err) {
    //            console.log(err);
    //            return;
    //        }
    //        ps.execute('', function (err, result) {
    //            if (err) {
    //                console.log(err);
    //                return;
    //            }

    //            ps.unprepare(function (err) {
    //                if (err) {
    //                    console.log(err);
    //                    callback(err, null);
    //                    return;
    //                }

    //                callBack(err, result);
    //            });
    //        });

    //    });
    //});

};

module.exports = db;
