const {Phone} = require('./../models');
const createError = require('http-errors');

module.exports.getPhones = async (req, res, next) => {
    try {
        const foundPhones = await Phone.find();

        res.status(200).send({data: foundPhones});
    } catch (error) {
        next(error);
    }
};

module.exports.createPhone = async (req, res, next) => {
    const {body} = req;

    try {
        const createdPhone = await Phone.create(body);

        if(createdPhone) {
            return res.status(200).send({data: createdPhone});
        }

        next(createError(400, 'Bad request'));
    } catch (error) {
        next(error);
    }
}

module.exports.deletePhoneById = async (req, res, next) => {
    const {params: {phoneId}} = req;

    try {
        const deletedPhone = await Phone.findByIdAndDelete(phoneId);

        if(deletedPhone) {
            return res.status(200).send({data: deletedPhone});
        }   

        next(createError(404, 'Phone is not found'));
    } catch (error) {
        next(error);
    }
}

module.exports.getPhoneById = async (req, res, next) => {
    const {params: {phoneId}} = req;

    try {
        const foundPhone = await Phone.findById(phoneId);
        
        if(foundPhone) {
            return res.status(200).send(foundPhone);
        }

        next(createError(404, 'Requested phone is not found'));
    } catch (error) {
        next(error);
    }
}