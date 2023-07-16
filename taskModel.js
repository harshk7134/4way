const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    toDo: {
        type: String,
        required: true
    },
    donation: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Task', taskSchema);
