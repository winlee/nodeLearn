var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
  //清空session用户信息
  req.session.user = null;
  req.flash('success','登出成功');

  //登出后跳转首页
  res.redirect('/posts');

  res.send(req.flash());
});

module.exports = router;