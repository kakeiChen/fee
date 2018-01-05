var express = require('express');
var router = express.Router();

var User = require('../modal/user');

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

router.post('/user/register', function(req, res, next) {
    var userName = req.body.userName;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;
    // console.log(req.body);

    User.findOne({
        userName: userName
    }).then(function(userInfo) {
        if(userInfo) {
            responseData.resultCode = 2;
            responseData.resultDesc = "用户名已存在";
            res.json(responseData);
            return
        }
        var user = new User({
            userName: userName,
            password: password
        })
        return user.save();
    }).then(function(newuserInfo) {
        console.log(newuserInfo);
        responseData.resultDesc = '注册成功';
        res.json(responseData);
    })
});

module.exports = router;
