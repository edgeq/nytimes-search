
// Built by LucyBot. www.lucybot.com

$("#search-btn").click(function() {
  
  var userKey = $("#search").val().trim();
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "083040deb76744ca8c92a2ec79536c0d",
    'q': userKey, 'fq': "New York Times"
  });
  
  console.log(userKey);
 $.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  var nytResult = result.response.docs;
  // EDGEEE!!! Because of async stuff, you can
  // only access the 'result' variable from
  // INSIDE the done function :) :) -D
  console.log('Result', result);
  console.log(nytResult);
  $("#search-result").empty();
  for (var i = 0; i < nytResult.length; i++) {
    var headline = nytResult[i].headline.main;
    console.log(headline);

    var headlineDiv = $('<h1>');
    headlineDiv.text(headline);
   
    $("#search-result").append(headlineDiv);
    
  }
  
});
// .fail(function(err) {
});
//   throw err;
// })


// console.log(nytResult);

// function postHeadline() {
// 	var headline = $('<h1>');
// 	headline.attr("class", "api-data");
// 	headline.HTML(nytResult);
// 	$("jumbotron").append(headline);	
// }

// postHeadline();


