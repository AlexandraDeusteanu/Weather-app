const form = document.querySelector(".searchForm")
const cityName = document.querySelector(".name")
const desc = document.querySelector(".description")
const temperature = document.querySelector(".temperature")
const humidityy = document.querySelector(".humidity")



form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchedCity = form.elements.cityNameValue.value;
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=metric&appid=ecd630c1c3bad6e553abf4bc0b863fbb`)
    .then(response => {
            cityName.innerHTML = searchedCity;
            desc.innerHTML = response.data.weather[0].description.toUpperCase();
            temperature.innerHTML = `Temperature is ${response.data.main.temp}°C`;
            humidityy.innerHTML = `Humidity is ${response.data.main.humidity} %`;
            e.target.reset();
        })
            .catch(err => {
                console.log(err)
                alert("No city with this name")
                e.target.reset()});

   
})

