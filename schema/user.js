/**
 * Created by xiaolb on 2018/1/5.
 */
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    userName: String,
    password: String
});

module.exports  = schema;
