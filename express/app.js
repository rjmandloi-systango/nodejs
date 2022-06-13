const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.use('/static', express.static('static'))
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// app.get('/' , (req, res)=>{
//     res.status(200).send("first express node app")
// })

// app.get('/about' , (req, res)=>{
//     res.send("get about")
// })

// app.post('/about' , (req, res)=>{
//     res.send("post about")
// })


// app.get('/services' , (req, res)=>{
//     res.send("SERVICES")
// })


// //pug demo end point
// app.get('/demo' , (req, res)=>{
//     res.status(200).render('demo', { title: 'hey rj', message: 'Hello there!' })
// })

app.get('/', (req, res) => {
    const con='Then create a route to render the index.pug file. If the view engine property is not set, you must specify the extension of the view file. Otherwise, you can omit it.'
    const params={'title':'node js using pug templete' , 'content':con}
    res.status(200).render('index.pug' , params)
})
app.post('/' ,(req, res)=>{
    console.log(req.body);
const params={'message':'form submitted successfully'}
res.status(200).render('index.pug' , params)

} )

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})