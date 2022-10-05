const express= require('express')
const bodyParser= require('body-parser')
const _=require('lodash')
const ejs= require('ejs')
const app= express()
app.use(bodyParser.urlencoded({extended:true}))
app.use('/public', express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
const homePage=' i am a homepage ertyukihuiudsjuyg iodyudfyuideyu hdg idggfdidh jdgtrwwlerkjhg, jdfgdhfjddhdhfdh'
const contactPage='my address is jfdgtfyui gutwuierty qwloeuyr hjfjkghjfu'
const aboutUs='this is about us ghfhdf hgdghfgyu klidhghjbv l;fukg jhjfhdhdg '
const posts=[]
app.get('/', function(req, res) {
    
    res.render('home', {home:homePage, posts:posts})
    
})
app.get('/about', function(req, res){
    res.render('about', {about:aboutUs})
})
app.get('/contact', function(req, res){
    res.render('contact', {contact:contactPage})
})
app.get('/compose', function(req,res){
    res.render('compose')
})

app.post('/compose',function(req, res){
    const post={
        title: req.body.postTitle,
        body:req.body.postBody
    }
 posts.push(post)
res.redirect('/')
})
app.get('/post/:postName', function(req, res){
    const requestedTitle=_.lowerCase(req.params.postName)
    posts.forEach(function(post){
        const postTitle=_.lowerCase(post.title)
        const postBody=post.body
        if (requestedTitle===postTitle) {
            res.render('post',{postTitle:postTitle, postBody:postBody})
        }
    })
})



app.listen(3000, function(){
console.log('server is listening on port 3000');
})
