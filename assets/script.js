$(document).ready(function() {
  var searchedCities = [];

  function displayCurrentWeather() {
    var city = $(this).attr("data-name");
    var queryURL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=e1eb6c55373004adbe9f3bca057c7ee4";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  }

  function findCurrentWeather() {
    var city = $("#city-input")
      .val()
      .trim();

    var queryURL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=e1eb6c55373004adbe9f3bca057c7ee4";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  }

  function displayFutureWeather() {
    var city = $(this).attr("data-name");
    var queryURL =
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=e1eb6c55373004adbe9f3bca057c7ee4";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  }

  function findFutureWeather() {
    var city = $("#city-input")
      .val()
      .trim();

    var queryURL =
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=e1eb6c55373004adbe9f3bca057c7ee4";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
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

    cityList();
    findCurrentWeather();
    findFutureWeather();
  });

  $(document).on("click", ".city", displayCurrentWeather);
  $(document).on("click", ".city", displayFutureWeather);

  cityList();
});
