// const data = {
//     coord: { lon: -0.13, lat: 51.51 },
//     weather: [
//         {
//             main: "Drizzle"
//         }
//     ],
//     main: {
//         temp: 280.32,
//         pressure: 1012,
//         humidity: 81
//     },
//     wind: { speed: 4.1 },
//     cod: 200,
//     message: ""
// };
// describe("Проверки получения данных о погоде", function () {
//     // mocha.setup('bdd');
//     this.beforeAll(function () {
//         const fakeUrl =
//             "http://api.openweathermap.org/data/2.5/weather?q=Moscow&APPID=ade7e1ffdaf68377d9167f51d8def411";
//         var mock = sinon.fakeServer.create();
//         mock.autoRespond = true;
//         mock.respondWith("GET", fakeUrl, [
//             200,
//             { "Content-Type": "application/json" },
//             JSON.stringify(data)
//         ]);
//     });

//     it("Заголовок", function () {
//         const res = document.getElementById("content");
//         assert.include(res.innerHTML, "<h2>Weather in city Moscow</h2>");
//     });
// });
// // mocha.run();