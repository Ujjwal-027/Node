const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    category_name:{
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true})
//timestanp gives us createdAt and updatedAt fields automatically
//_id is automatically created by mongodb - 24bit hex character, type: ObjectId 

module.exports = mongoose.model('Category', categorySchema)