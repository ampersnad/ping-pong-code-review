 

// User Int logic
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var n = parseInt($("input#userNumber").val());
    console.log("userinput", n);
	$("li").remove();
	
  $("#reset").click(function() {
		document.location.reload(true);
  });
    
//Business logic

	 for (var i = 1; i <= n; i++) {
	   if (i % 15 == 0) {
		 $("#list").append("<li>PingPong</li>");
		console.log(i);
	   } else if (i % 3 == 0) {
		 $("#list").append("<li>Ping</li>");
		console.log(i);
	   } else if (i % 5 == 0) {
		 $("#list").append("<li>Pong</li>");
		console.log(i);
	   } else {
		 $("#list").append('<li> ' + i + ' </li>');   
	   }
	 }
	



   

    // $("#blanks").hide();





  });
});
