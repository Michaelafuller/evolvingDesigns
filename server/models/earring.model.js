const mongoose = require('mongoose');

const EarringSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, 'Name must be at least 3 characters']
    },
    content: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [10, '{PATH} must be at least 10 characters']
    },
    isComplete: {
        type: Boolean,
        required: [true, "{PATH} is required"],
        default: false
    }
}, { timestamps: true });

module.exports.Earring = mongoose.model("Earring", EarringSchema);