import mysql from 'mysql';

var connectDB = () => {
    //connect with database server
    // var conn = mysql.createConnection({ host: "localhost", user: "root", password: "" });
    var result = false;
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "", database: 'mern6' });
    conn.connect(function (err) {
        if (!err) {
            console.log("Connect database server successfully!");
            result = true;
        }
        else {
            throw err;
        }
    });
    //insert, update, select, delete
    conn.end(function (err) {
        if (err) {
            return console.log('error:' + err.message);
        }
        console.log('Close the database connection successfully');
    });
    return result;
}
var insertRecord = (values) => {
    let res = false;
    let sql = `INSERT INTO queries(name, email, subject, message) VALUES(?)`;
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "mern6" });
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(sql, [values], function (err, result) {
            if (!err) {
                // console.log(result.affectedRows);
                console.log("Insert record successfully")
                res=true;
            }
            else {
                throw err;
            }
        });
    });
    return res;
}
export { insertRecord };