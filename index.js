//Import ‘express’ module
// const { render } = require('ejs')
const express=require('express')
//initialise express
const app=express();
app.use(express.static(__dirname+"/public/"));
app.use(express.static(__dirname+"/public/css"));



app.set('views engine','ejs');
app.get('',(req,res)=>{
    res.render('home.ejs')})
    app.get('/home',(req,res)=>{
        res.render('home.ejs')})
        app.get('/gallery',(req,res)=>{
            res.render('gallery.ejs')})




//server create
app.listen(2024,()=>{
    console.log('server running at 2024')
})
