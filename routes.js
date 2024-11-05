const calculator = require('./AdamHeng_hotelManagement.js');
const router = require('express').Router();

//These get sequences play a part so if the hardcoded calculator is higher, it will be hardcoded first.

router.get('/', function(req,res) {
    res.send("Welcome to the Hotel Management System!");
});

router.get('/users', function(req,res) {
    res.send(
        {
            name: 'Thomas',
            age: 20,
            hobby: 'Badminton'
        }
    );
});

router.get('/hello', function(req,res) {
    res.sendFile(__dirname+"/views/hello.html"); //redirects to the given directory
});

router.get('/calculator/add/2/3', function(req,res) {
    res.send({result:calculator.add(2,3)})
});

router.get('/calculator/:operation/:num1/:num2', function(req,res) {
    let operation = req.params.operation;
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let result = 0;

    //Perform the calculation based on the operation
    //Square bracket notation
    result = calculator[operation](num1,num2);

    res.send({
        operation:operation,
        number1:num1,
        number2:num2,
        result: result
    })
});

module.exports = router;