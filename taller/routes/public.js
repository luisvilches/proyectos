const express = require('express');
const Router = express.Router();
const controller = require('.././controllers/main')

Router.get('/', controller.main)
Router.post('/create', controller.create)
Router.get('/all', controller.find)
Router.get('/all/:id', controller.findId)
Router.post('/name', controller.one)
Router.delete('/delete/:id', controller.delete)
Router.put('/update/:id', controller.update)
Router.post('/login', controller.auth)


module.exports = Router;