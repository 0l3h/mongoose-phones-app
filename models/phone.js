const mongoose = require('mongoose');
const {Schema} = mongoose;

const phoneSchema = new Schema({
    brand: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    manufacture_year: {
        type: Date,
        required: true,
    },
    RAM_size: {
        type: Number,
        required: true,
    },
    CPU_name: {
        type: String,
        required: true,
    },
    has_NFC: {
        type: Boolean,
        required: true,
    }
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;