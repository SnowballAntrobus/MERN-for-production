const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema(
    {
        type: { type: String, required: true },
        brand: { type: String, required: true },
        season: { type: String, required: true },

        // image_url: { type: String, required: true },
        // w2c: { type: [String], required: false },
    },
    { timestamps: true }
)

module.exports = mongoose.model('items', Item)