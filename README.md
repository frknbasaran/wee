# Wee
*Twitter Bootstrap Based HTML Helper for Express*

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

##Requirements

You need only two thing for getting start with wee.

####NPM for Install
Open terminal and write below line for installation.
```
$npm install wee
```

#### Twitter Bootstrap for Style

CSS and JS files for stylesheets.
```
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
```

### Express Integration

Wee's express integration is realy easy. Integration is very easy like other modules, you only need add one line into your main node file.

For example:
```
var express = require('express');
var app = express();
var wee = require('wee')(app);

app.set('view engine', 'wee');
app.set('views', __dirname + "/views");
```

After the module declaration now we can start use helper.
Only three type supporting for now:
* Lists
* Tables
* Forms

###Lists

Firstly we declare view render progress;

```

var myList = {
    "items" : [
        {"content":"list element 1", "href":"this field optional, will compile when isLink property true", "count":1},
        {"content":"list element 2", "href":"this field optional, will compile when isLink property true", "count":2},
        {"content":"list element 3", "href":"this field optional, will compile when isLink property true", "count":3}
    ],
    "className":"spesificClassName",
    "showCount":true,
    "isLink":true
}

app.get('/', function(req, res) {
    res.render('index', {myList:myList});
});
```

* **items**: {Object Array}:
    * **content** : {String} text 
    * **href**: {String} Link's href attribute when **isLink** property defined **true**
    * **count**: {Number} Count value for that item, this property will show when **count** property defined **true**
* **className**: {String} spesific css class selector
* **showCount**: {Boolean} Count field's showing state
* **isLink**: {Boolean} Element's be link state

Let's prepare our view to render progress:

```
<!doctype html>
<head>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
	<div style="margin-top:100px"></div>
	<div class="row">
		<div class="col-md-4">
		    // for list type we must write '**list' pre-declaration
			**list myList
		</div>
	</div>
</div>
</body>
</html>
```
*After render progress html result looks like below:*

![alt](http://s22.postimg.org/mc2f142ox/Screenshot_2015_01_22_13_23_44.png)

###Table

For tables likes to **list**'s declare again in main app file.

```
var table = {
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
            };
        
        app.get('/', function (req, res) {
        	res.render('index', {myTable:myTable});
        });
```

* **items**: {Object Array}:
    * **content** : {String} text 
* **className**: {String} spesific css class selector

```
<!doctype html>
<head>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
	<div style="margin-top:100px"></div>
	<div class="row">
		<div class="col-md-4">
		    // for list type we must write '**list' pre-declaration
			**table myTable
		</div>
	</div>
</div>
</body>
</html>
```

*After render progress html ouput looks like below*

![alt](http://s15.postimg.org/k0pvsvz6j/Screenshot_2015_01_22_13_46_14.png)

###Form

Declare again in main app file

```
var form = {
	"action":"/register",
        "method":"POST",
        "fields": [
		{"name":"username","type":0,"req":true},
		{"name":"email","type":1,"req":true},
		{"name":"password","type":2,"req":true}
        ],
        "id_prefix":"item"
}

app.get('/', function(req, res) {
    res.render('index', {myForm:myForm});
});
```

* **action:** {String} target url
* **method:** {String} http request type
* **fields:** {Object Array}
	* **name:** {String} field name
	* **type:** {Number} input type
		* **0:** generate text type input
		* **1:** generate email type input
		* **2:** generate password type input
	* **req:** {Boolean} field required status
* **id_prefix:** {String} this property will add id attribute to input like this : **id_prefix** + **name**

```
<!doctype html>
<head>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
	<div style="margin-top:100px"></div>
	<div class="row">
		<div class="col-md-4">
		    // for list type we must write '**list' pre-declaration
			**form myForm
		</div>
	</div>
</div>
</body>
</html>
```

Rendered output looks like below:

[Table](http://s30.postimg.org/onrhljfyp/Screenshot_2015_01_22_14_08_43.png)

[npm-image]: https://img.shields.io/npm/v/express.svg?style=flat
[npm-url]: https://npmjs.org/package/wee


