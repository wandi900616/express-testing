const express=require('express')
const app=express()
const path=require('path')\
const https = require('https')//delete
const http = require('http')//delete





app.use(express.urlencoded({extended:false}))
app.use(getWeather)
app.use(express.static(path.join(__dirname,"public")))

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

function getWeather(req,res,next){
    req.visitorWeather=true
    if(req.visitorWeather){
        next()
    }else{next()}
}

app.get('/',(req,res)=>{
   res.render('home',{
       isRaining:req.visitorWeather,
       pets:
       [
           {name:"meow",species:"cat"},
           {name:"bark",species:"dog"}]
    })
})

app.get('/about',(req,res)=>{
    res.send('thanks')
})


app.post('/result',(req,res)=>{
    
    req.body.color.trim().toUpperCase()=="BLUE"?
    res.send(`correct`):
    res.send('hello. incorrect')
})

app.get('/result',(req,res)=>{

    res.send('you are trying to get this to this page using get method')
})

app.get('/api/pets',(req,res)=>{
    res.json( [
        {name:"meow",species:"cat"},
        {name:"bark",species:"dog"}])
})

http.createServer(app).listen(80)//to be deleted
https.createServer(options, app).listen(443)//to be deleted
//app.listen('https://wandi900616.github.io/my-project/')
