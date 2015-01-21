var express = require('express');
var fs = require('fs');
var replacer = require('../core/replacer');

var app = express();

app.engine('wee', function (filePath, options, callback) { 
  
  fs.readFile(filePath, function (err, content) {
    
    if (err) throw new Error(err);
    
    var pure = content.toString();

    var regex = /\*\*list +([\S]+)/g;
    var matches;
    
    while(matches = regex.exec(pure)) {
        pure = pure.replace(matches[0], replacer.listMaker(options[matches[1]].items, options[matches[1]].className, options[matches[1]].showCount, options[matches[1]].isLink));
    }
      
    var regex = /\*\*table +([\S]+)/g;
    var matches;
    
    while(matches = regex.exec(pure)) {
        pure = pure.replace(matches[0], replacer.tableMaker(options[matches[1]].items, options[matches[1]].className));
    }

    var regex = /\*\*form +([\S]+)/g;
    var matches;
    
    while(matches = regex.exec(pure)) {
        pure = pure.replace(matches[0], replacer.formMaker(options[matches[1]].action, options[matches[1]].method, options[matches[1]].fields, options[matches[1]].id_prefix));
    }

    return callback(null, pure);
  });
});

module.exports = app;

