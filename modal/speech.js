/**
 * Created by xiaolb on 2018/1/5.
 */

var mongoose = require('mongoose');

var userSchema = require('../schema/speech');

var Speech = mongoose.model('speech', userSchema);

module.exports = Speech;