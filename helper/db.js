var orm = require("orm");

var db = orm.connect({
    host:     'localhost',
    database: 'permissions_mk',
    user:     'root',
    password: 'root',
    protocol: 'mysql',
    port:     '3306',
    query:    {pool: true}
});

db.on('connect', function(err) {
  if (err) return console.error('Connection error: ' + err);
  console.log('Database loaded successfully');
});

module.exports = db;
