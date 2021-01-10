const { Schema, model } = require('mongoose');

const keywordSchema = new Schema({
    id: {
        type:  String
    },
    keywords:{
        type: Array
    }
}, {
    timestamps: true
})

const Keyword = model('keyword', keywordSchema,  'keywords')

module.exports = Keyword;