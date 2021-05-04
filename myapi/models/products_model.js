const db = require('../database');

const products = {
  getById: function(id, callback) {
    return db.query('select * from products where idproducts=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from products', callback);
  },
  add: function(products, callback) {
    return db.query(
      'insert into products (Title, price, img, description, date, place, product_ownage) values(?,?,?,?,?,?,?)',
      [products.Title, products.price, products.img, products.description, products.date, products.place, products.product_ownage],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from products where idproducts=?', [id], callback);
  },
  update: function(id, products, callback) {
    return db.query(
      'update products set Title=?,price=?, img=?, description=?, date=?, place=?, product_ownage=? where idproducts=?',
      [products.Title, products.price, products.img, products.description, products.date, products.place, products.product_ownage, id],
      callback
    );
  }
};
module.exports = products;