const orm = require('../config/orm.js');

let burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },

    createOne: function(cols, vals, cb) {
        orm.createOne('burgers', cols, vals, function(fres){
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;