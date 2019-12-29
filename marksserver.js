var express=require('express');
var app=express();
var marksmodule=require('./marksmodule');
var bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,res)
{
    console.log("Showing You File...");
    res.sendFile("student.html",({root:__dirname}));
});

app.post("/percentage",function(req,res)
{
    console.log("In Calculate Percentage");
    console.log(req.body.cpp,req.body.java,req.body.os,req.body.dbt);
    res.send("<h1>Percentage Of "+req.body.name+" is<br> "+marksmodule.percentage(req.body.cpp,req.body.java,req.body.os,req.body.dbt)+"%</h1>");
});

app.listen(8081);