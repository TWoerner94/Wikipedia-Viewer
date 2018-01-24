$(document).ready(function() {
  
  var api = "https://en.wikipedia.org/w/api.php";
  
  $(".submitBtn").on("click", function() {
    var searchInput = $('#searchTerm').val();
    var resultsUrl = api+"?action=query&list=search&srsearch="+searchInput+"&format=json&callback=?";
    $.getJSON(resultsUrl, function(data){
      $('#output').empty();
      $('#output').append("Results for <strong>" + searchInput + "</strong>");
      $.each(data.query.search, function(i, item) {
        $('#output').append("<li><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + " </a>" + item.snippet + "</li>");
      });
    });
  });
});