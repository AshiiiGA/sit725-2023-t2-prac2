var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/',()=> {
    res.render('index.html');
});

app.get('/addTwoNumbers',(req,res)=>{
    //let payLoad = {}
    let statusCode = 200;
    let successMessage = "success"
    let number1 = req.query.number1;
    let number2 = req.query.number2;
    let result = parseInt(number1) + parseInt(number2);

    res.json({
        message:successMessage,
        code:statusCode,
        data:result,
    });
});

app.listen(port, () =>{
    console.log("Server started, app listening to: " + port)
})