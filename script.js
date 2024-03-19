
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '828beeaa7dmshcb1497ec66e968ep1678f2jsn4ec954542a20',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getdata = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    cityname.innerHTML = city
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        {
            console.log(result);
            temp.innerHTML = result.temp
            temp2.innerHTML = result.temp
            feels_like.innerHTML = result.feels_like
            humidity.innerHTML = result.humidity
            humidity2.innerHTML = result.humidity
            min_temp.innerHTML = result.min_temp
            max_temp.innerHTML = result.max_temp
            wind_speed.innerHTML = result.wind_speed
            wind_speed2.innerHTML = result.wind_speed
            wind_degrees.innerHTML = result.wind_degrees
            sunrise.innerHTML = result.sunrise
            sunset.innerHTML = result.sunset
        }
    } catch (error) {
        console.error(error);
    }
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
     getdata(city.value)
})
getdata("Delhi")