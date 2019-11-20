const data = {
    coord: { lon: -0.13, lat: 51.51 },
    weather: [
        {
            main: "Drizzle"
        }
    ],
    main: {
        temp: 280.32,
        pressure: 1012,
        humidity: 81
    },
    wind: { speed: 4.1 },
    cod: 200,
    message: ""
};
describe("Fetch data success_ii", function () {
    beforeEach(async function () {
        document.getElementById("city").value = "Moscow"
        window.fetch = sinon.stub();
        function mockApiResponse(body = {}) {
            return new window.Response(JSON.stringify(body), {
                status: 200,
                headers: { 'Content-type': 'application/json' }
            });
        }
        window.fetch.returns(Promise.resolve(mockApiResponse(data)));

        await getWeatherByCity()
    });

    it("Contsins main", function () {
        chai.assert.include(document.getElementById("main").innerHTML, "Main: Drizzle");
    });

    it("Contains temperature", function () {
        chai.assert.include(document.getElementById("temp").innerHTML, "Temperature: 280.32 K");
    });

    it("Contains wind", function () {
        chai.assert.include(document.getElementById("wind").innerHTML, "Wind: 4.1 m/c");
    });

    it("Contains pressure", function () {
        chai.assert.include(document.getElementById("pressure").innerHTML, "Presure: 1012 kPa");
    });

    it("Contains humidity", function () {
        chai.assert.include(document.getElementById("hum").innerHTML, "Humidity: 81%");
    });

    it("Error is empty", function () {
        chai.expect(document.getElementById("error")).to.be.empty;
    });
});

describe("Fetch data not found", function () {
    beforeEach(async function () {
        document.getElementById("city").value = "Moscow"
        window.fetch = sinon.stub();
        function mockApiResponse() {
            return new window.Response(JSON.stringify({ message: "Bad bad error" }), {
                status: 404,
                headers: { 'Content-type': 'application/json' }
            });
        }
        window.fetch.returns(Promise.resolve(mockApiResponse()));

        await getWeatherByCity()
    });

    it("Weather is empty", function () {
        chai.expect(document.getElementById("weather")).to.be.empty;
    });

    it("Error not empty", function () {
        chai.assert.include(document.getElementById("error").innerHTML, "Bad bad error");
    });

});
mocha.run();