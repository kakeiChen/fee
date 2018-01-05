/**
 * Created by xiaolb on 2018/1/5.
 */

var mongoose = require('mongoose');

var userSchema = require('../schema/user');

var User = mongoose.model('Project', userSchema);

module.exports = User;