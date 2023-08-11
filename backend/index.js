const db = require('./database');
// const bodyParsor = require('body-parser');
const express = require('express');
const app = express()
const port = 5000;
const user = require('./user/user')
const services = require('./services/services')
const offer = require('./offer/offer')
const category = require('./category/category')
const booking = require('./booking/booking')
const cors = require('cors')
// app.use(bodyParsor.urlencoded({ extended: false }));
// app.use(bodyParsor.json());
const bodyParser = require('body-parser')
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  app.use(bodyParser.json());
  app.use(express.json())
app.use(cors())
app.use(express.json());
app.use('/parlourdoc',express.static(__dirname + '/public/images'));
app.use('/user',user)
app.use('/services',services)
app.use('/offer',offer)
app.use('/category',category)
app.use('/booking',booking)




app.listen(port,function(err,res){
    if(err){
        console.log('err')
    }
    else{
        console.log('port listen'+port)
    }
})