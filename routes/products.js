const express = require('express');
const router = express.Router();
const product = require('../models/products_models');

router.get('/:id?',
    function(request, response) {
        if (request.params.id) {
            product.getById(request.params.id, function(err, dbResult) {
                if (err) {
                    response.json(err);
                } else {
                    response.json(dbResult);
                }
            });
        } else {
            product.getAllproducts(function(err, dbResult) {
                if (err) {
                    response.json(err);
                } else {
                    response.json(dbResult);
                }
            });
        }
    });


router.post('/',
    function(request, response) {
        product.add(request.body, function(err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult.insertId);
            }
        });
    });


router.delete('/:id',
    function(request, response) {
        product.delete(request.params.id, function(err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    });


router.put('/:id',
    function(request, response) {
        product.update(request.params.id, request.body, function(err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    });

module.exports = router;