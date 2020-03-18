$(document).ready(function() {
  var searchedCities = [];

  function displayCurrentWeather() {
    var city = $(this).attr("data-name");
    var queryURL =
      "api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&apiid=e1eb6c55373004adbe9f3bca057c7ee4";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response); 
    });
    console.log(city); 
    console.log(this); 
  }

  function displayFutureWeather() {
    var city = $(this).attr("data-name");
    var queryURL =
      "api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&apiid=e1eb6c55373004adbe9f3bca057c7ee4";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response); 
    });
    console.log(city); 
    console.log(this);
  }
  function cityList() {
    $("#city-list").empty();

    for (i = 0; i < searchedCities.length; i++) {
      var savedCities = $("<button>");
      savedCities.addClass("list-group-item button city");
      savedCities.attr("data-name", searchedCities[i]);
      savedCities.text(searchedCities[i]);
      $("#city-list").append(savedCities);
    }
  }

  $("#search-button").on("click", function(event) {
    event.preventDefault();
    var city = $("#city-input")
      .val()
      .trim();

    searchedCities.push(city);
    console.log(searchedCities);

    cityList();
    displayCurrentWeather(); 
    displayFutureWeather(); 
  });

  $(document).on("click", ".city", displayCurrentWeather); 
  $(document).on("click", ".city", displayFutureWeather); 

  cityList();
});
