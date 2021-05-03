const db = require('../database');

const products = {
    getAllproducts: function(callback) {
        return db.query('select * from products order by idproducts desc', callback);
    },
    getById: function(id, callback) {
        return db.query('select * from products where idproducts=?', [id], callback);
    },
    add: function(products, callback) {
        return db.query(
            'insert into products (title,img,contact,description,date,place) values(?,?,?,?,?,?)', [products.title, products.img, products.contact, products.description, products.date, products.place],
            callback
        );
    },
    delete: function(id, callback) {
        return db.query('delete from products where idproducts=?', [id], callback);
    },
    update: function(id, products, callback) {
        return db.query(
            'update products set title=?, img=?, contact=?, description=?, date=?, place=? where idproducts=?', [products.title, products.img, products.contact, products.description, products.date, products.place, id],
            callback
        );
    }
};
module.exports = products;