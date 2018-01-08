/**
 * Created by xiaolb on 2018/1/5.
 */
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    suggestF: String,
    suggestS: String,
    suggestT: String,
    defectF: String,
    defectS: String,
    defectT: String,
    meritF: String,
    meritS: String,
    meritT: String,
    defectScoreF: String,
    defectScoreS: String,
    defectScoreT: String,
    meritScoreF: String,
    meritScoreS: String,
    meritScoreT: String,
    score: String,
    id: String,
});

module.exports  = schema;
