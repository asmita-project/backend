const express = require('express')
const app = express()
const Router = express.Router()
const db = require('../database')

const multer = require('multer');
const bodyParser = require('body-parser')
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  app.use(bodyParser.json());
  app.use(express.json())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'parlourdoc/user');
    },
    filename: function (req, file, cb) {
        console.log(file)
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  const upload = multer({ storage: storage });

  Router.post('/upload', upload.single('user'), function (req, res) {
    // Access the uploaded image details via req.file
    // Process the image as needed
    console.log(req.file)
    res.send(req.file)
  });

Router.get('/',function(req,res){
    db.query('select * from user',function(err,result){
        if(err){
            console.log(err)
           
            res.send("Error")
        }
        else{
            console.log(result)
            res.send(result)
          
        }
    })
})

Router.post('/login',function(req,res){
    let email = req.body.email
    let password = req.body.password
    console.log(email)
    db.query('select * from user where email=? AND password=?',[email,password],function(err,result){
        if(err){
            console.log(err)
           
            res.status(400).json({
                error: "Please enter valid username or password"
              })
        }
        else{
            if(result!=""){
                console.log(result)
                res.send(result)
            }
            else{
                res.status(400).json({
                    error: "Please enter valid username or password"
                  })
            }
          
          
        }
    })
})

Router.get('/:id',function(req,res){
    const id = Number(req.params.id)

    db.query('select * from user where id=$1',[id],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

Router.post('/delete/:id',function(req,res){
    const id = Number(req.params.id)

    db.query('delete from user where id=$1',[id],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result.rows)
        }
    })
})

Router.post('/add',function(req,res){

    let  firstname=req.body.firstname;
    let  lastname=req.body.lastname;

    let email=req.body.email;
    let city=req.body.city;

    let phone=req.body.phone;
    let username=req.body.username;

    let role=req.body.role;
    let password=req.body.password;

    let photo=req.body.photo;

console.log(req.body);
let sql = 'INSERT INTO user(firstname,lastname,email,city,phone,username,password,role,photo)VALUES(?,?,?,?,?,?,?,?,?)'
db.query(sql,[firstname,lastname,email,city,phone,username,password,role,photo],function (error, results, fields) {
if (error) {
    res.send(error)
    console.log(error)
    
}else{
    console.log('inserted')
    res.setHeader('Content-Type', 'application/json')
    console.log(results)
    //    res.write(results)
    res.send("Inserted");
}

});
 
})

Router.post('/update',function(req,res){
     const id = Number(req.body.id)
    let  firstname=req.body.firstname;
    let  lastname=req.body.lastname;
    let email=req.body.email;
    let city=req.body.city;
    let phone=req.body.phone;
    let role=req.body.role;
    let photo=req.body.photo;

console.log(req.body);
let sql = 'update user set firstname = $1,lastname=$2,phone=$3,email=$4,city=$5,photo=$6,role=$7 where id=$8'
db.query(sql,[firstname,lastname,phone,email,city,photo,role,id], function (error, results, fields) {
if (error) throw error;
console.log('Updated')
res.setHeader('Content-Type', 'application/json')
console.log(results)
//    res.write(results)
res.end("Updated");
});
})


module.exports= Router




