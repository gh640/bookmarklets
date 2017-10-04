(function() {
    var urlPrefix, codeUnique, isCodeFound = false;
    var bs = document.body.getElementsByTagName('b');
    for (var i = 0; i < bs.length; i++) {
        if (bs[i].innerText == 'ISBN-10:') {
            codeUnique = bs[i].parentNode.innerText.slice(9);
            isCodeFound = true;
            urlPrefix = 'http://www.amazon.com/gp/search/?field-isbn=';
            break;
        }
        if (bs[i].innerText == 'ASIN:') {
            codeUnique = bs[i].parentNode.innerText.slice(6);
            isCodeFound = true;
            urlPrefix = 'http://www.amazon.com/dp/';
            break;
        }
    }
    if (isCodeFound) {
        var w = window.open(urlPrefix + escape(codeUnique));
        w.focus();
    } else {
        alert('ISBN/ASIN not found');
    }
})();

