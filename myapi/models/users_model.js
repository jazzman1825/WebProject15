const db = require('../database');

const users = {
  getById: function(id, callback) {
    return db.query('select * from users where idusers=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from users', callback);
  },
  add: function(users, callback) {
    return db.query(
      'insert into users (idusers, email, password) values(?,?,?)',
      [users.idusers, users.email, users.password],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from users where idusers=?', [id], callback);
  },
  update: function(id, users, callback) {
    return db.query(
      'update users set idusers=?, email=?, password=?',
      [users.idusers, users.email, users.password],
      callback
    );
  }
};
module.exports = users;