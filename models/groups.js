var db = require('../helper/db');

var Group = db.define('groups', {
  id:      {type: 'serial', key: true}, // the auto-incrementing primary key
  name:    {type: 'text'},
  parents: {type: 'text'},
  prefix:  {type: 'text'},
  suffix:  {type: 'text'},
});

module.exports = Group;
