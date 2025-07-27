const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    taste: {
        type: String,
        required: true,
        enum: ['sweet', 'spicy', 'sour']
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }
})

const Menu = mongoose.model('Menu',menuItemSchema)
module.exports = Menu;