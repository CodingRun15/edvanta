 const mongoose = require('mongoose');
 const actorSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    }
 })
 const promptModel = mongoose.model('prompt',{
    prompt:{
        type: String,
        required: true
    },
    label: String,
    visibility:{
        type:String,
        enum: ['public', 'private','custom'],
        default: 'public'
    },
    actor:{
        type:actorSchema,
        required: true
    },
    description:{
        type: String
    },
    sharedAccess:{
        type: [String],
        default: []
    }
 });
 module.exports = { promptModel } ;