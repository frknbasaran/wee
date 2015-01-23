/**
 * @module replacer
 * author : Furkan BAŞARAN <frknbasaran@gmail.com>
 *
 * twitter bootstrap based html helper for express
 *
 * @return {Object}
 */

module.exports = {
    /**
     * list maker method
     *
     * @params {Array} items, {String} className, {Boolean} showCount, {Boolean} isLink
     * @return {String}
     */
    listMaker : function (items, className, showCount, isLink) {
        var output = "";

        if (typeof className === "undefined") {
            output += "<ul>";
        } else {
            output += "<ul class='" + className + "'>";
        }

        if (!showCount || typeof showCount === "undefined") {
            for (var i = 0; i < items.length; i++) {
                if(isLink) output += "<a href='" + items[i].href + "'><li class='list-group-item'>" + items[i].content + "</li></a>";
                else output += "<li class='list-group-item'>" + items[i].content + "</li>";
            }
        } else {
            for (var i = 0; i < items.length; i++) {
                if(isLink) output += "<a href='" + items[i].href + "'><li class='list-group-item'><span class='badge'>" + items[i].count + "</span>" + items[i].content + "</li></a>";
                else output += "<li class='list-group-item'><span class='badge'>" + items[i].count + "</span>" + items[i].content + "</li>";
            }
        }

        output += "</ul>";
        return output;
    },
    /**
     * table maker method
     *
     * @params {Array} items, {String} className
     * @return {String}
     */
    tableMaker : function (items, className) {
        var output = "";

        if (typeof className === "undefined") {
            output += "<table class='table'>";
        } else {
            output += "<table class='table " + className + "'>";
        }

        for (var i = 0; i < items.length; i++) {
            output += (i == 0) ? "<thead>" : "<tr>";
            for (var j = 0; j < items[i].length; j++) {
                output += (i == 0) ? "<td><strong>" + items[i][j].content + "</strong></td>" : "<td>" + items[i][j].content + "</td>";
            } output += (i == 0) ? "</thead>" : "</tr>";
        }

        output += "</table>";
        return output;
    },
    /**
     * html form maker method
     *
     * @params {String} action, {String} method, {Array} fields, {String} id_prefix
     * @return {String}
     */
    formMaker : function (action, method, fields, id_prefix) {
        var output = "";

        output += "<form action='" + action + "' method='" + method +"'>";

        for (var i = 0; i < fields.length; i++) {
            switch (fields[i].type) {
                case 0:
                    if(fields[i].req && id_prefix !== "undefined") output += "<div class='form-group'><label for='"+fields[i].name+"'>"+fields[i].name+"</label><input class='form-control' type='text' name='"+fields[i].name+"' id='"+id_prefix+fields[i].name+"' required></div>";
                    else if(fields[i].req) output += "<div class='form-group'><label for='"+fields[i].name+"'>"+fields[i].name+"</label><input class='form-control' type='text' name='"+fields[i].name+"' required></div>";
                    else output += "<div class='form-group'><label for='"+fields[i].name+"'>"+fields[i].name+"</label><input class='form-control' type='text' name='"+fields[i].name+"'></div>";
                    break;
                case 1:
                    if(fields[i].req && id_prefix !== "undefined") output += "<div class='form-group'><label for='"+fields[i].name+"'>"+fields[i].name+"</label><input class='form-control' type='email' name='"+fields[i].name+"' id='"+id_prefix+fields[i].name+"' required></div>";
                    else if(fields[i].req) output += "<div class='form-group'><label for='"+fields[i].name+"'>"+fields[i].name+"</label><input class='form-control' type='email' name='"+fields[i].name+"' required></div>";
                    else output += "<div class='form-group'><label for='"+fields[i].name+"'>"+fields[i].name+"</label><input class='form-control' type='email' name='"+fields[i].name+"'></div>";
                    break;
                case 2:
                    if(fields[i].req && id_prefix !== "undefined") output += "<div class='form-group'><label for='"+fields[i].name+"'>"+fields[i].name+"</label><input class='form-control' type='password' name='"+fields[i].name+"' id='"+id_prefix+fields[i].name+"' required></div>";
                    else if(fields[i].req) output += "<div class='form-group'><label for='"+fields[i].name+"'>"+fields[i].name+"</label><input type='password' class='form-control' name='"+fields[i].name+"' required></div>";
                    else output += "<div class='form-group'><label for='"+fields[i].name+"'>"+fields[i].name+"</label><input class='form-control' type='password' name='"+fields[i].name+"'></div>";
                    break;
            }
        }

        output += "<input type='submit' class='btn btn-default' value='Submit'></form>";
        return output;
    }
};
