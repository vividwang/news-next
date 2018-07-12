const server = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = server();

const News = require('./mongo/schema');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/news',{server:{
    socketOptions:{
        keepAlive:1
    }
}});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded:true}));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/news',(req,res)=>{
    News.find({},(err,docs)=>{
        if(err) {
            console.info(err);
            return res.json({code:0});
        }
        return res.json({data:docs,code:1});
    })
});

app.get('/news/:title',(req,res)=>{
    console.info(req.params.title.split);
    News.find({title:req.params.title},(err,docs)=>{
        if(err) {
            console.info(err);
            return res.json({code:0});
        }
        console.info(docs);
        return res.json({data:docs,code:1});
    })
})

app.put('/news/add',(req,res)=>{
    const newNews = new News({
        title:req.body.title,
        context:req.body.context,
        createTime:req.body.time,
        tag:req.tag
    });

    newNews.save(err=>{
        if(err){
            console.info(err);
            return res.json({code:0});
        }
        console.info("success~");
        return res.json({code:1});
    })
})

app.listen(8000,()=>{
    console.info("App running~")
})