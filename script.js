$("button").click(function(){
    // 1. Extract the text from the inputs
    var name = $(".name").val();
      var number = $(".number").val();
        var food = $(".food").val();
    // 2. Use the input text to build the fortune to display.
    var myAnswer = "In the year 2020 " + name + " will have eaten " + parseInt(number) * 32 + " " + food;
    $(".answer").text(myAnswer);
    
    // 3. Clear the old text from the inputs.
    $(".name").val("");
    $(".number").val("");
    $(".food").val("");
});