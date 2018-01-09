var Project = require('../modal/projectlist');
var express = require('express');
var router = express.Router();


var Speech = require('../modal/speech');
var moverUndefined = require('../public/javascripts/Util');

var responseData;

router.use(function(req, res, next) {
    responseData = {
        resultCode: 0,
        resultData:'',
        resultDesc:''
    }
    next();
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submitDetail', function(req, res, next) {

    var params = req.body;
    // console.log(req.body);

    Project.findOne({
        id: req.body.id
    }).then(function(info) {
        // console.log(info);
        if (!info) {
            responseData.resultDesc = '项目不存在，请先创建项目';
            responseData.resultCode = '1';
            res.json(responseData);
            return;
        }
        var speech = new Speech(req.body);
        return speech.save();
    }).then(function(newuserInfo) {
        // console.log(newuserInfo);
        responseData.resultDesc = '提交成功';
        res.json(responseData);
        return;
    })
});

router.post('/getdetail', function(req, res, next) {
    Speech.find({
        id: req.body.id
    }).then(function(info) {
        // console.log(info);
        var list = [];
        var averageScore = 0;
        for (var i = 0; i < info.length; i += 1) {
            averageScore += parseFloat(info[i].score);
            var obj = {};
            var meritF = info[i].meritF + '   ' + info[i].meritScoreF;
            var meritS = info[i].meritS + '   ' + info[i].meritScoreS;
            var meritT = info[i].meritT + '   ' + info[i].meritScoreT;

            var merit = [meritF, meritS, meritT];

            var suggest = [
                info[i].suggestF,
                info[i].suggestS,
                info[i].suggestT
            ];

            var defectF = info[i].defectF + '   ' + info[i].defectScoreF;
            var defectS = info[i].defectS + '   ' + info[i].defectScoreS;
            var defectT = info[i].defectT + '   ' + info[i].defectScoreT;


            var defect = [defectF, defectS, defectT];

            // console.log(moverUndefined)

            // 去掉数组中的undefined
            obj.merit = moverUndefined(merit);
            obj.suggest = moverUndefined(suggest);
            obj.defect = moverUndefined(defect);

            list.push(obj);
        }
        // console.log(averageScore)
        if (info.length) {
            averageScore = (averageScore / info.length);
        }
        // console.log(averageScore)
        responseData.resultData = {};
        responseData.resultData.averageScore = averageScore;
        responseData.resultData.list = list;
        responseData.resultDesc = '获取数据成功';
        res.json(responseData);
        return;
    })
});

router.post('/projectlist',function (req, res, next) {
    Project.find({},function (err,docs) {
        res.json({
            resultCode:0,
            resultData:{
                list:docs
            },
            resultDesc:"请求成功"
        });
    });
});

module.exports = router;
