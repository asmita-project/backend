const express = require('express')
const app = express()
const Router = express.Router()
const db = require('../database')

const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'parlourdoc/services');
    },
    filename: function (req, file, cb) {
        console.log(file)
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  const upload = multer({ storage: storage });

  Router.post('/upload', upload.single('service'), function (req, res) {
    // Access the uploaded image details via req.file
    // Process the image as needed
    console.log(req.file)
    res.send(req.file)
  });

Router.get('/',function(req,res){
    db.query('select * from services',function(err,result){
        if(err){
            console.log(err)
           
            res.send("Error")
        }
        else{
            console.log(result)
            res.send(result)
            res.end()
        }
    })
})

Router.get('/:id',function(req,res){
    const id = Number(req.params.id)

    db.query('select * from  services id=$1',[id],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result.rows)
        }
    })
})

Router.post('/:id',function(req,res){
    const id = Number(req.params.id)

    db.query('delete from services where id=$1',[id],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result.rows)
        }
    })
})

Router.post('/',function(req,res){

    let  category=req.body.category;
    let  service_name=req.body.service_name;
    let price=req.body.price;
    let photo=req.body.photo;

console.log(req.body);
let sql = "INSERT INTO services(category,service_name,price,photo) VALUES($1,$2,$3,$4)"
db.query(sql,[category,service_name,price,photo], function (error, results, fields) {
if (error) throw error;
console.log('inserted')
res.setHeader('Content-Type', 'application/json')
console.log(results)
//    res.write(results)
res.end("Inserted");
});
})

Router.post('/update',function(req,res){
     const id = Number(req.body.id)
     let  category=req.body.category;
    let  service_name=req.body.service_name;
    let price=req.body.price;
    let photo=req.body.photo;

console.log(req.body);
let sql = 'update user set category = $1,service_name=$2,price=$3,photo=$4 where id=$5'
db.query(sql,[category,service_name,price,photo,id], function (error, results, fields) {
if (error) throw error;
console.log('Updated')
res.setHeader('Content-Type', 'application/json')
console.log(results)
//    res.write(results)
res.end("Updated");
});
})

module.exports = Router




