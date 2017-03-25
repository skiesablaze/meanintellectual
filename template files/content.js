function thesaurus (word){
  var request = require('request');
  var cheerio = require('cheerio');
  var URL = require('url-parse');

  var pageToVisit = "http://www.thesaurus.com/browse/" + word + "?s=t";
  console.log("Visiting page " + pageToVisit);
  request(pageToVisit, function(error, response, body) {
     if(error) {
       console.log("Error: " + error);
     }
     // Check status code (200 is HTTP OK)
     console.log("Status code: " + response.statusCode);
     if(response.statusCode === 200) {
       // Parse the document body
       var body = cheerio.load(body);
       var temp = body('div').text();
       var tempArray = temp.split(" ");
       var compare = "next";

       tempArray = tempArray.filter(function(str)
       { return /\S/.test(str);
       });

       for (var i = 0; i < tempArray.length; i++){
         //console.log("word: " + tempArray[i]);
         if (tempArray[i].match("next")){
           var synonym = tempArray[i+1];
           break;
         }
       }
       //console.log("word: " + synonym);
     }
  });

  return synonym;
}

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/[word or phrase to replace here]/gi, thesaurus(      ));

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
