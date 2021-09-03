const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send("ok"))
 
// interpretar o formulário que veio o arquivo de upload
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },     
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})


app.listen(8080, () => console.log("Executando..."))