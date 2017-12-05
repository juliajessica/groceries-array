$(document).ready(function() {
  $("#groceryForum").submit(function(event) {
    event.preventDefault();
    var groceries = ["item1", "item2", "item3", "item4", "item5"];
    var sorted = [];

    items.forEach(groceries(function(items) {
    items.push($("#item" + item).val());
    });
    items.sort();
    items.forEach(function(item) {
    var itemsCaps = items.maps(function(items) {
      return item.toUpperCase();
    });
    });
    itemsCaps.forEach(function(itemCap) {
      $("#results").append("<li>" + itemCap + "</li>");
    });
      $("#results").show();
      $("#items").hide();
  });
});















// $(document).ready(function() {
//   $("#groceryForum").submit(function(event) {
//     event.preventDefault();
//     var items = ["item1", "item2", "item3", "item4", "item5"];
//     var groceries = [];
//
//     items === groceries;
//     groceries.sort();
//
//     var foods = items.map(function(food) {
//       return food.toUppercase();
//     });
//
//     // items.forEach(function(item) {
//     //   var userInput = $("input#" + item).val();
//     //   $("." + item).text(userInput);
//     // //  userInput.sort());
//     // });
//
//     // var newItems = items.map(function(item) {
//     //   return item.toUpperCase();
//     // });
//
//
//     alert(foods);
//
//   });
// });
