// Business logic







// User Int logic
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var n = parseInt($("input#userNumber").val());
    console.log("userinput", n);
    $("#list ul").append('<li> ' + n + ' </li>');





    // var item1Input = $("input#item1").val();
    // var item2Input = $("input#item2").val();
    // var item3Input= $("input#item3").val();
    // var item4Input = $("input#item4").val();

    // var listArray1 = [item1Input, item2Input, item3Input, item4Input]
    //
    // var listArray2 = listArray1.map(function(uppercaseList) {
    //   return uppercaseList.toUpperCase()
    // });
    // console.log(listArray2);
    //
    // var listArray3 = listArray2.sort();
    //
    //
    // $(".item1").append(listArray3[0]);
    // $(".item2").append(listArray3[1]);
    // $(".item3").append(listArray3[2]);
    // $(".item4").append(listArray3[3]);

    // $(".this1").text(listArray3[0]);
    // $(".this2").text(listArray3[1]);
    // $(".this3").text(listArray3[2]);
    // $(".this4").text(listArray3[3]);



    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);
    // $(".beverage").text(beverageInput);
    // $(".flavor").text(flavor);

    // $("#blanks").hide();





  });
});
