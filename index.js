import express from 'express'
import cookieParser from 'cookie-parser'
import fs from 'fs'
// import ejs from 'ejs'

const app = express()

app.use(cookieParser())
app.use(express.json())
app.set('view engine','ejs')


console.log('hai',process.argv)

app.get('/',(req,res)=>{
    res.send('simple server is working fine')

})
app.get('/view',(req,res)=>{
    res.render('index',{'user':'akash'})
})

app.get('/test',(req,res)=>{
    fs.createReadStream('./try/sample.txt').pipe(fs.createWriteStream('./test/hello.txt'))
//     fs.writeFile('./test/Hello world.txt','hello bro ',(err)=>{
// if(err){
//     console.log(error)
// }
//     })
})

const PORT = 8080
 
app.listen(PORT, () => {
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log(`server running on port `+PORT);
});
 
 

