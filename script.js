let city = '';

// Input listener for search input //
document.querySelector('input').addEventListener('input', function (s) {
    city = document.querySelector('input').value;
}) 

// Api key can be obtained from "https://home.openweathermap.org/api_keys" //
var apiKey = "4c7b7f9ca21d60769183dfafb8785ccc"

// Function to get weather data //
document.addEventListener('keydown', async function (e) {
    if (e.key === "Enter") {
        var geocodingLink = ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric");

        const response = await fetch(geocodingLink + `&appid=${apiKey}`);
        const keys = await response.json();

        // Replacez HTML info for parsed data //
        document.querySelector('.temp').textContent = parseFloat(keys.main.temp).toFixed(1) + "°C";
        document.querySelector('.windspeed').textContent = parseFloat(keys.wind.speed).toFixed(1) + "Km/h";
        document.querySelector('.humidity').textContent = Math.floor(keys.main.humidity + 1) + "%";

        // Change card image and background //
        let mainWeather = keys.weather[0].main;
        switch (mainWeather) {
            case "Clear":
                $('#imageId').attr('src', './images/clear.png');
                document.getElementById('card').style.background = "linear-gradient(45deg, rgb(151, 232, 93), rgb(133, 184, 255))";
                break;
            case "Clouds":
                $('#imageId').attr('src', './images/clouds.png');
                document.getElementById('card').style.background = "linear-gradient(45deg, rgb(123, 142, 168), rgb(176, 215, 232))";
                break;
            case "Rain":
                $('#imageId').attr('src', './images/rain.png');
                document.getElementById('card').style.background = "linear-gradient(45deg, rgb(77, 88, 102), rgb(44, 120, 153))";
                break;
            case "Snow":
                $('#imageId').attr('src', './images/snow.png');
                document.getElementById('card').style.background = "linear-gradient(45deg, rgb(127, 129, 130), rgb(202, 214, 230))";
                break;
            case "Drizzle":
                $('#imageId').attr('src', './images/drizzle.png');
                document.getElementById('card').style.background = "linear-gradient(45deg, rgb(147, 170, 181), rgb(127, 177, 201))";
                break;
            case "Mist":
                $('#imageId').attr('src', './images/mist.png');
                document.getElementById('card').style.background = "linear-gradient(45deg, rgb(147, 170, 181), rgb(136, 186, 247))";
                break;
        }
    }
})

