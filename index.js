document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  getWeatherByCity();
});

function getWeatherByCity() {
  document.getElementById("weather").innerHTML = "";
  document.getElementById("error").innerHTML = "";
  let clientKey = "ade7e1ffdaf68377d9167f51d8def411";
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${clientKey}`
  )
    .then(data => data.json())
    .then(json => {
      if (json.cod === 200) {
        document.getElementById("weather").innerHTML = prepareTemplate(
          "entry-template"
        )(json);
      } else {
        document.getElementById("error").innerHTML = prepareTemplate(
          "entry-template-err"
        )(json);
      }
    })
    .catch(e => {
      var errorObject = {};
      errorObject.message = e;
      document.getElementById("error").innerHTML = prepareTemplate(
        "entry-template-err"
      )(errorObject);
    });
}

function prepareTemplate(name) {
  return Handlebars.compile(document.getElementById(name).innerHTML);
}
