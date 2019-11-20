document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  getWeatherByCity(event.target[0].value)
    .then(json => renderCity(json))
    .catch(e => setResult("entry-template-err", { message: e }));
});

function renderCity(json) {
  if (json.cod === 200) {
    setResult("entry-template", json);
  } else {
    setResult("entry-template-err", json);
  }
}

function getWeatherByCity(cityName) {
  let clientKey = "ade7e1ffdaf68377d9167f51d8def411";
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${clientKey}`
  ).then(data => data.json());
}

function setResult(templateName, json) {
  document.getElementById("result").innerHTML = Handlebars.compile(
    document.getElementById(templateName).innerHTML
  )(json);
}
