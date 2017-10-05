(function(){
  var url = location.href;
  var title = document.title;
  var linkTag = '[' + title + '](' + url + ')';
  window.prompt("link to this page:", linkTag);
})();
