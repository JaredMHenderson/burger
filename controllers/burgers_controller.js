const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(function(data) {
        let handlebarObject = {
            burgers: data
        };
        console.log(handlebarObject);
        res.render("index", handlebarObject);     
    });
});

router.post('/api/burgers', (req, res) =>{
    burger.createOne([
        'burger_name', 'devoured'
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({ id: result.inserteId });
    });
});

router.put('/api/burgers/:id', (req, res) =>{
    let condition = 'id = ' + req.params.id;

    console.log('condition', condition) ;
    
    burger.updateOne({
        devoured: req.body.sleepy
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        }
    });
});

module.exports = router;