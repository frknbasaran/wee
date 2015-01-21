var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'wee');

app.use(express.static(path.join(__dirname, 'public')));


/* 
list maker method
@items Array
@className String
@showCount Boolean 
*/
var listMaker = function(items, className, showCount) {
    
    var output = "";
    
    if (typeof className === "undefined") {
        output += "<ul class=''>";
    }

    if (!showCount || typeof showCount === "undefined") {
        for (var i = 0; i < items.length; i++) {
            output += "<li class='list-group-item'>" + items[i].content + "</li>";
        }
    } else {
        for (var i = 0; i < items.length; i++) {
            output += "<li class='list-group-item'><span class='badge'>" + items[i].count + "</span>" + items[i].content + "</li>";
        }
    }

    output += "</ul>";

    return output;
}
 
app.engine('wee', function (filePath, options, callback) { 
  
  fs.readFile(filePath, function (err, content) {
    
    if (err) throw new Error(err);
    
    var pure = content.toString();

    var regex = /\*\*list +([\S]+)/g;
    var matches;
    
    while(matches = regex.exec(pure)) {
        pure = pure.replace(matches[0], listMaker(options[matches[1]].items, options[matches[1]].className, options[matches[1]].showCount));
        console.log("vayla girdi");
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
            }
        });
});


app.listen(80);
