$(document).ready(function() {
  var searchedCities = [];

  function findCurrentWeather() {
    $("#border-adder").addClass("border");
    var city = $("#city-input")
      .val()
      .trim();

    var queryURL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=e1eb6c55373004adbe9f3bca057c7ee4";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var name = response.name;
      var date = moment().format("dddd, MMMM Do, YYYY");
      var temp = response.main.temp;
      var humidity = response.main.humidity;
      var windSpeed = response.wind.speed;
      var lat = response.coord.lat;
      var lon = response.coord.lon;
      $("#city-title").text(name + " (" + date + ")");
      $("#current-temperature").text("Temperature: " + temp + " °F");
      $("#current-humidity").text("Humidity: " + humidity + "%");
      $("#current-wind-speed").text("Wind Speed: " + windSpeed + " MPH");

      var UVURL =
        "http://api.openweathermap.org/data/2.5/uvi?appid=e1eb6c55373004adbe9f3bca057c7ee4&lat=" +
        lat +
        "&lon=" +
        lon;
      $.ajax({
        url: UVURL,
        method: "GET"
      }).then(function(response) {
        var UV = response.value;
        $("#current-UV-index").text("UV Index: " + UV);
      });
    });
  }

  function findFutureWeather() {
    // var city = $("#city-input")
    //   .val()
    //   .trim();
    // var queryURL =
    //   "http://api.openweathermap.org/data/2.5/forecast?q=" +
    //   city +
    //   "&units=imperial&appid=e1eb6c55373004adbe9f3bca057c7ee4";
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response) {
    //   console.log(response);
    // });
  }
  function displayCurrentWeather() {
    var city = $(this).attr("data-name");
    var queryURL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=e1eb6c55373004adbe9f3bca057c7ee4";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var name = response.name;
      var date = moment().format("dddd, MMMM Do, YYYY");
      var temp = response.main.temp;
      var humidity = response.main.humidity;
      var windSpeed = response.wind.speed;
      var lat = response.coord.lat;
      var lon = response.coord.lon;
      $("#city-title").text(name + " (" + date + ")");
      $("#current-temperature").text("Temperature: " + temp + " °F");
      $("#current-humidity").text("Humidity: " + humidity + "%");
      $("#current-wind-speed").text("Wind Speed: " + windSpeed + " MPH");

      var UVURL =
        "http://api.openweathermap.org/data/2.5/uvi?appid=e1eb6c55373004adbe9f3bca057c7ee4&lat=" +
        lat +
        "&lon=" +
        lon;
      $.ajax({
        url: UVURL,
        method: "GET"
      }).then(function(response) {
        var UV = response.value;
        $("#current-UV-index").text("UV Index: " + UV);
      });
    });
  }

  function displayFutureWeather() {
    var city = $(this).attr("data-name");
    var queryURL =
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=imperial&appid=e1eb6c55373004adbe9f3bca057c7ee4";

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
