const express = require('express')
const app = express()
const Router = express.Router()
const db = require('../database')

const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'parlourdoc/offer');
    },
    filename: function (req, file, cb) {
        console.log(file)
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  const upload = multer({ storage: storage });

  Router.post('/upload', upload.single('offer'), function (req, res) {
    // Access the uploaded image details via req.file
    // Process the image as needed
    console.log(req.file)
    res.send(req.file)
  });

Router.get('/',function(req,res){
    db.query('select * from offer',function(err,result){
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

    db.query('select * from  offer id=$1',[id],function(err,result){
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

    db.query('delete from offer where id=$1',[id],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result.rows)
        }
    })
})

Router.post('/',function(req,res){

    let  percent=req.body.percent;
    let  offerprice=req.body.offerprice;
    let price=req.body.price;
    let photo=req.body.photo;
    let fromdate=req.body.fromdate;
    let todate=req.body.todate;

console.log(req.body);
let sql = "INSERT INTO offer(percent,offerprice,price,photo,fromdate,todate) VALUES($1,$2,$3,$4,$5,$6)"
db.query(sql,[percent,offerprice,price,photo,fromdate,todate], function (error, results, fields) {
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
     let  percent=req.body.percent;
    let  offerprice=req.body.offerprice;
   
    let photo=req.body.photo;
    let fromdate=req.body.fromdate;
    let todate=req.body.todate;
console.log(req.body);
let sql = 'update offer set percent = $1,fromdate=$2,todate=$3,photo=$4,offerprice=$5 where id=$6'
db.query(sql,[percent,fromdate,todate,photo,offerprice,id], function (error, results, fields) {
if (error) throw error;
console.log('Updated')
res.setHeader('Content-Type', 'application/json')
console.log(results)
//    res.write(results)
res.end("Updated");
});
})

module.exports = Router




