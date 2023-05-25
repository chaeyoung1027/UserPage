let express = require('express');
let ejs = require('ejs');
let path = require('path');

let userinfo = [
    {id:'hi', password:'1234', username : 'young', phone:'010-2232-2343', email:'rlk@naver.com'}
]

let app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    console.log("페이지 시작!");
    res.render('list');
});

app.post('/list', (req, res) =>{
    console.log("list start");
    userinfo.push({id:req.body.id, password:req.body.password, username:req.body.password, phone:userinfo.phone, email:userinfo.email});
    res.redirect('/done');
});

app.listen(3000, () =>{
    console.log("3000번 시작");
});


