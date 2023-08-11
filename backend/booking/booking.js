const express = require('express')
const app = express()
const Router = express.Router()
const db = require('../database')


Router.get('/',function(req,res){
    db.query('select * from booking',function(err,result){
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

    db.query('select * from booking where id=$1',[id],function(err,result){
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

    db.query('delete from booking where id=$1',[id],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result.rows)
        }
    })
})

app.post('/',function(req,res){

    let  service_name=req.body.service_name;
    let  user_name=req.body.user_name;
    let user=req.body.user;
    let category=req.body.category;
    let service=req.body.service;
    let photo=req.body.photo;
    let price=req.body.price;
    let subtotal=req.body.subtotal;
    let payment=req.body.payment;
    let time=req.body.time;
    let category_name=req.body.category_name;
    let payment_status=req.body.payment_status;


    db.query('select * from booking order by orderid desc',function(err,resuldata){
        if(err){
            console.log(err)
        }
        else{
           let length = resuldata.orderid
            
           let sql = "INSERT INTO booking(service_name,orderid,user,category,service,photo,price,subtotal,payment,time,category_name,payment_status,user_name) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)"
           db.query(sql,[service_name,length,user,category,service,photo,price,subtotal,payment,time,category_name,payment_status,user_name], function (error, results, fields) {
            if(err){
                console.log(err)
            }
            else{
                if(length == null){
                    length = 1
                    console.log('inserted')
                    res.setHeader('Content-Type', 'application/json')
                    console.log(results)
                    //    res.write(results)
                    res.end("Inserted");
                 }
                 else{
                    length++
                    console.log('inserted')
                    res.setHeader('Content-Type', 'application/json')
                    console.log(results)
                    //    res.write(results)
                    res.end("Inserted");
                    
                    }
                    
                    
                 
                }
            })
           
          
        }
        
    })


})


app.post('/update',function(req,res){
     const id = Number(req.body.id)
  
  
     let payment_status=req.body.payment_status;
   

console.log(req.body);
let sql = 'update booking set payment_status = $1 where id=$2'
db.query(sql,[payment_status,id], function (error, results, fields) {
if (error) throw error;
console.log('Updated')
res.setHeader('Content-Type', 'application/json')
console.log(results)
//    res.write(results)
res.end("Updated");
});
})


module.exports= Router




