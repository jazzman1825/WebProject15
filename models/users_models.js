const db = require('../database');

const users = {
    getAllusers: function(callback) {
        return db.query('select * from users order by idusers desc', callback);
    },
    getById: function(id, callback) {
        return db.query('select * from users where idusers=?', [id], callback);
    },
    add: function(users, callback) {
        return db.query(
            'insert into users (firstName,lastName,contact) values(?,?,?)', [users.firstName, users.lastName, users.contact],
            callback
        );
    },
    delete: function(id, callback) {
        return db.query('delete from users where idusers=?', [id], callback);
    },
    update: function(id, users, callback) {
        return db.query(
            'update users set firstName=?,lastName=?, contact=? where idusers=?', [users.firstName, users.lastName, users.contact, id],
            callback
        );
    }
};
module.exports = users;