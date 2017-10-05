(function(){
  var url = location.href;
  var title = document.title;
  var linkTag = '<a href="' + url + '">' + title + '</a>';
  window.prompt("link to this page:", linkTag);
})();
