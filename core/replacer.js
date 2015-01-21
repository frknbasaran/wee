module.exports = {

/* 
list maker method
@items Array
@className String
@showCount Boolean 
*/
listMaker: function (items, className, showCount) {
    
    var output = "";
    
    if (typeof className === "undefined") {
        output += "<ul>";
    } else {
        output += "<ul class='" + className + "'>";
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
},
    
/*
table maker method
@items ObjectArray
@className String
*/
tableMaker: function (items, className) {
    
    var output = "";
    
    if (typeof className === "undefined") {
       output += "<table class='table'>";
    } else {
       output += "<table class='table " + className + "'>";
    }
    
    for (var i = 0; i < items.length; i++) {
        output += (i == 0) ? "<thead>" : "<tr>";
        
        for (var j = 0; j < items[i].length; j++) {
            output += (i == 0) ? "<td><strong>" + items[i][j].content + "</strong></td>" : "<td>" + items[i][j].content + "</td>" ;
        }
        
        output += (i == 0) ? "</thead>" : "</tr>";
    }
    
    output += "</table>";
    
    return output;
}


};

