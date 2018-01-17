/**
 * Created by kakeiChen on 2018/01/08.
 */
'use strict';

var mongoose = require('mongoose');
var ProjectData = require('../InitData/initProject');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    id:String,
    title:String,
    shareTime:String,
    description:String,
    sharer: String,
    flag:String,
})

// projectSchema.index({id: 1});

const Project = mongoose.model('Project', projectSchema);

Project.findOne((err, data) => {
    if (!data) {
        ProjectData.forEach(item => {
            Project.create(item);
        })
    }
});


module.exports = Project;
