const express = require('express')
const app = express()
const Router = express.Router()
const db = require('../database')

const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'parlourdoc/category');
    },
    filename: function (req, file, cb) {
        console.log(file)
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  const upload = multer({ storage: storage });

  Router.post('/upload', upload.single('category'), function (req, res) {
    // Access the uploaded image details via req.file
    // Process the image as needed
    console.log(req.file)
    res.send(req.file)
  });

Router.get('/',function(req,res){
    db.query('select * from category',function(err,result){
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

    db.query('select * from  category id=$1',[id],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result.rows)
        }
    })
})

Router.post('delete/:id',function(req,res){
    const id = Number(req.params.id)

    db.query('delete from category where id=?',[id],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result.rows)
        }
    })
})

Router.post('/add',function(req,res){

    
    let category=req.body.category;
    let photo=req.body.photo;

console.log(req.body);
let sql = "INSERT INTO category(category,photo) VALUES(?,?)"
db.query(sql,[category,photo], function (error, results, fields) {
if (error) {
    res.send(error)
    res.end()
}
else{
    console.log('inserted')
    res.setHeader('Content-Type', 'application/json')
    console.log(results)
    //    res.write(results)
    res.send("Inserted");
   
}

})

})
Router.post('/update',function(req,res){
     const id = Number(req.body.id)
    let photo=req.body.photo;
   
    let category=req.body.category;
console.log(req.body);
let sql = 'update category set category = $1,photo=$2 where id=$3'
db.query(sql,[category,photo,id], function (error, results, fields) {
if (error) throw error;
console.log('Updated')
res.setHeader('Content-Type', 'application/json')
console.log(results)
//    res.write(results)
res.end("Updated");
});
})

module.exports = Router




