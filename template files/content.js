var elements = document.getElementsByTagName('*');
//returns all elements in document

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
//isolating each individual element (which has nodes)

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
//iterating through the nodes, till we get 3, which contains the text

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            if (text.length <3)
//here we need to get thesaurus stuff??
            var replacedText = text.replace(/Genius/gi, 'Numbskull'); //edit this line

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}