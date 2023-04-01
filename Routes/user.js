const express = require('express');
const client = require('../Controller/connection');
const router = express.Router();
const allMethods = require('../Controller/product')
const userMethods = require('../Controller/userModel')
// let data = [];
router.get('/products', allMethods.getAllProduct);
router.get('/filter/:query',allMethods.wildCardfilter)
router.post('/',userMethods.createUser);
router.put('/',userMethods.updateUser);
router.delete('/:id',userMethods.deleteUser)
module.exports = router