function getWeatherByCity() {
    let clientKey = 'ade7e1ffdaf68377d9167f51d8def411';
    var city = document.getElementById('city').value;
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${clientKey}`)
        .then(data => data.json())
        .then(json => {
            var source = document.getElementById('entry-template').innerHTML;
            var template = Handlebars.compile(source);
            var weather = document.createElement('div');
            weather.innerHTML = template(json);
            document.body.appendChild(weather)
        })
        .catch(e => {
            console.log(e)
        })
}