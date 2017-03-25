function thesaurus (word){
  var request = require('request');
  var cheerio = require('cheerio');
  var URL = require('url-parse');

  var pageToVisit = "http://www.thesaurus.com/browse/" + word + "?s=t";
  console.log("Visiting page " + pageToVisit);
  request(pageToVisit, function(error, response, body) {
     if(error) {
       console.log("var elements = document.getElementsByTagName('*');
//returns all elements in document

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
//isolating each individual element (which has nodes)

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
//iterating through the nodes, till we get 3, which contains the text

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var orgWords = "website";
            //text.replace( /\n/g, " " ).split( " " );
            //splitting entire text into words, storing in array

            for(var i = 0; i < 1; i++){
              //if (orgWords[i] > 3 && orgWords[i] < 5){
                  //here we need to get thesaurus stuff??

                  //RegExp.quote = function(str) {
                    //return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
                  //};
                var re = new RegExp(orgWords, "g");
                var replacedText = text.replace(re, 'SHIT'); //edit this line
            }

        }



        if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
        }
    }
}
