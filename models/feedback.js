const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timeStamps: true });

const Feedback = mongoose.model('Feedbacks', feedbackSchema);

module.exports = Feedback;
