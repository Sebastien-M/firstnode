let mysql = require("mysql");

function request(callback) {
  let con = mysql.createConnection({
    host: "localhost",
    user: "php",
    password: "toor",
    database: "first_db"
  });

  con.connect(function (err) {
    con.query("SELECT * FROM small_doggo", function (err, result, fields) {
      if (err) throw err;
      callback(result);
    });
    con.end();
  });
}

module.exports = {
  request : request
}