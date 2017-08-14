$(document).ready(function(){
  $("#groceryForm").submit(function(event){
    event.preventDefault();
    var list = $("#groceryList").val().toUpperCase().split(", ").sort();
    console.log(list);
  })

  $("form#sentence").submit(function(event){
    event.preventDefault();
    var sentence= $("#sentenceInput").val().split(" ");
    var largeWords = [];
    sentence.forEach(function(word){
      if (word.length>3) {
        largeWords.push(word);
      }
    });
      largeWords.reverse();
      var newSentence = largeWords.join(" ");
      console.log(newSentence)
      alert(newSentence);
  })

  var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  var suits = ["hearts", "clubs", "diamonds", "spades"];
  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      $("#cards").append("<li>" + rank + " of " + suit +"</li>");

    })
  })
})
