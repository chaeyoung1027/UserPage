let express = require('express');
let ejs = require('ejs');
let path = require('path');
let mysql = require('mysql');

let dbconn = mysql.createConnection( {
    user : 'root',
    password : '1234',
    database: 'Userdb'
});

let userArr = [];

let app = express();

app.use(express.static('public'));  // pulbic 폴더 공유
app.use(express.urlencoded({ extended: false }));  // 사용자 html 입력
app.set('views', path.join(__dirname, 'views'));    // 뷰 폴더
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('/ get이 시작됨~~');
    dbconn.query('select * from Usertbl', (err, result) => {
        if(err) {
            console.log('db select error '+err);
        } else {
            console.dir(result);
            res.render('list', {datalist: result}); 
        }
    });
});

//list uri get방식
app.get('/list', (req, res) => {
    console.log('list get...');
    res.render('list'); 
});

//list uri post방식
app.post('/list', (req, res) => {
    console.log('list get...');
    dbconn.query('list into Usertbl(id, password, username, phone, email) values(?, ?, ?, ?, ?)', 
    [req.body.id, req.body.password, req.body.username, userinfo.phone, userinfo.email], 
    (err, results) => {
        if(err) {
            console.log('db insert error '+err);
        } else {
            console.log(`insert Ok... ${req.body.id} ${req.body.password} ${req.body.username} ${userinfo.phone} ${userinfo.email}`);
            res.redirect('/');
        }
        
    });
});

app.get('/list', (req, res) => {
    console.log("/list get 시작됨~");
    res.render('list');
});

app.post('/list', (req, res) => {
    console.log("/list post 시작됨~");
    //배열에 입력 받은 값으로 객체를 만들어 추가
    let id_num = count++;
    todoArr.push({id:id_num, contents:req.body.contents, yesno: req.body.yesno});
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("3000 포트 서버가 시작됨");
});

