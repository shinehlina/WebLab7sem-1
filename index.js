"use strict"
let key = 'ade7e1ffdaf68377d9167f51d8def411';
function getWeatherByCity() {
    var city = document.getElementsByClassName('form').value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`;
    // let ss = fetch(url)
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // let jsonString = "{"coord":{"lon":145.77,"lat":-16.92},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":300.15,"pressure":1007,"humidity":74,"temp_min":300.15,"temp_max":300.15},"visibility":10000,"wind":{"speed":3.6,"deg":160},"clouds":{"all":40},"dt":1485790200,"sys":{"type":1,"id":8166,"message":0.2064,"country":"AU","sunrise":1485720272,"sunset":1485766550},"id":2172797,"name":"Cairns","cod":200}";
    let json = {"coord":{"lon":145.77,"lat":-16.92},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":300.15,"pressure":1007,"humidity":74,"temp_min":300.15,"temp_max":300.15},"visibility":10000,"wind":{"speed":3.6,"deg":160},"clouds":{"all":40},"dt":1485790200,"sys":{"type":1,"id":8166,"message":0.2064,"country":"AU","sunrise":1485720272,"sunset":1485766550},"id":2172797,"name":"Cairns","cod":200};
    var source   = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    var weather = document.createElement('div');
    weather.innerHTML = template(json);
    document.body.appendChild(weather);
    // document.body.appendChild(template(json));
}