var express = require('express');
var path = require('path');
var fs = require('fs');
var replacer = require('./core/replacer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'wee');

app.use(express.static(path.join(__dirname, 'public')));



 
app.engine('wee', function (filePath, options, callback) { 
  
  fs.readFile(filePath, function (err, content) {
    
    if (err) throw new Error(err);
    
    var pure = content.toString();

    var regex = /\*\*list +([\S]+)/g;
    var matches;
    
    while(matches = regex.exec(pure)) {
        pure = pure.replace(matches[0], replacer.listMaker(options[matches[1]].items, options[matches[1]].className, options[matches[1]].showCount));
        console.log("list vayla girdi");
    }
      
    var regex = /\*\*table +([\S]+)/g;
    var matches;
    
    while(matches = regex.exec(pure)) {
        pure = pure.replace(matches[0], replacer.tableMaker(options[matches[1]].items, options[matches[1]].className));
        console.log("teybıl vayla girdi");
    }

    console.log(pure);

    return callback(null, pure);
  });

});


app.set('views', './views'); // burada views klasörümüzü kendimiz belirleyebiliriz  
app.set('view engine', 'wee'); // dosya uzantımızı belirterek template motorumuzu express'e tanımlıyoruz  

app.get('/', function(req, res) {
    res.render('index', 
        {
            list0:
            {
                items:
                [
                    {"content":"sa"},
                    {"content":"sas"},
                    {"content":"asa"}
                ], 
                className:"zaaaxDamnanananamasdjashd", 
                showCount:false
            },
            list1:
            {
                items:
                [
                    {"content":"zaaa"},
                    {"content":"szaas"},
                    {"content":"aananannsa"}
                ], 
                className:"zaaaxDamnanananamasdjashd", 
                showCount:false
            },
            table0: 
            {
                items:
                [
                    [
                        {"content":"ad"},
                        {"content":"soyad"},
                        {"content":"no"}
                    ],
                    [
                        {"content":"furkan"},
                        {"content":"başaran"},
                        {"content":"5"}
                    ],
                    [
                        {"content":"fatma"},
                        {"content":"açar"},
                        {"content":"6"}
                    ],
                    [
                        {"content":"kadir"},
                        {"content":"yaka"},
                        {"content":"7"}
                    ],
                    [
                        {"content":"doğan"},
                        {"content":"derya"},
                        {"content":"8"}
                    ]
                ],
                className: "table-striped"
            }
        });
});


app.listen(80);
