const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    user:{
        //to know what user
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User',
    },
    text: {
        type : String,
        required: [true, 'Please add a text Value']
    }
}, 
{
    timestamps : true,
})

module.exports = mongoose.model('Goal', goalSchema)