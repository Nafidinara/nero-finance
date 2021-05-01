const express = require("express");
const app     = express();
const path    = require("path");
const port    = 9000;

app.use(express.static(__dirname+"/"));

//set view engine
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

 
 app.get('/',function(req,res){
     res.send('ceeeeeeek');
 });

 app.get('/home',function(req,res){
    res.render('layouts/app');
});



app.listen(port, () => console.info(`App listen on port ${port}`));