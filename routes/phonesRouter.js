const {phonesController} = require('./../controllers');
const {Router} = require('express');
const phonesRouter = Router();

phonesRouter.route('/')
    .get(phonesController.getPhones)
    .post(phonesController.createPhone);

phonesRouter.route('/:phoneId')
    .delete(phonesController.deletePhoneById)
    .get(phonesController.getPhoneById);

module.exports = phonesRouter;