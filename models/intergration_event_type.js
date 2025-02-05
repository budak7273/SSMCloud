const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const intergrationEventTypeSchema = new Schema({
    eventTypeName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
});

module.exports = mongoose.model(
    "IntergrationEventType",
    intergrationEventTypeSchema
);
