var express = require('express');
var data = require('../data.json');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login');
});

router.post('/list', function (req, res, next) {
  if (req.body.username == data.users[0].username && req.body.pwd == data.users[0].password) {
    let dataList = [];
    for (let i = 0; i < data.chapterList.length; i++) {
      let list = { title: data.chapterList[i].title, views: data.chapterList[i].views };
      dataList.push(list);
    };
    // console.log(dataList);
    res.render('list', { chapterList: dataList });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.end("用户名或密码错误");
  }
});

module.exports = router;