const mongoose=require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const subject = require('./subjects.model')
const topic = require('./topic.model')

const examSchema=new mongoose.Schema({
    name:{ type: "string", required: true}, 
    subject:{type:ObjectId, required: true,ref:subject},
    topic:{type:ObjectId, required: true,ref:topic},

    // user:{type:ObjectId, required: false,ref:"users"},
    // exam:{ type: ObjectId, required: true,ref:"exams"},
},
{timestamps:true}
)

module.exports = mongoose.model('Chapter',examSchema,'chapters');