const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    title:{
        type:String,
        isRequired:true,
    },
    context:{
        type:String,
        isRequired:true,
    },
    tag:{
        type:String,
    },
    createTime:{
        type:String,
        default:new Date(),
    }
});

module.exports = mongoose.model('newsSchema',newsSchema);