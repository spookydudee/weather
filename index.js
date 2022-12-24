const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ac36ae8966mshd7591bed767159fp1c6be8jsn07bb5df8f24e',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city)=>{
  cityName.innerHTML=city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    // cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset



  })
  .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
  e.preventDefault()
  getWeather(city.value)
})

getWeather("Delhi")

for(var i=1;i<=6;i++){
  var ct = "text-start"+i;
  place = document.getElementsByClassName(ct)[0];
  place=place.innerHTML;
  const getWeather2 = (place,i)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ place, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      // console.log(i);
      // var z=i+2;
      // console.log(document.getElementById("temp"+z));
      // console.log(z);
      // document.getElementById("temp"+z).innerHTML=response.temp
      console.log(response.temp);
      document.getElementById("temp"+(i+2)).innerHTML = response.temp
      // temp2.innerHTML = response.temp
      document.getElementById("feels_like"+(i+2)).innerHTML = response.feels_like
      document.getElementById("humidity"+(i+2)).innerHTML = response.humidity
      // humidity2.innerHTML = response.humidity
      document.getElementById("min_temp"+(i+2)).innerHTML = response.min_temp
      document.getElementById("max_temp"+(i+2)).innerHTML = response.max_temp
      document.getElementById("wind_speed"+(i+2)).innerHTML = response.wind_speed
      // wind_speed2.innerHTML = response.wind_speed
      document.getElementById("wind_degrees"+(i+2)).innerHTML = response.wind_degrees
      document.getElementById("sunrise"+(i+2)).innerHTML = response.sunrise
      document.getElementById("sunset"+(i+2)).innerHTML = response.sunset
    })
    // .catch(err => {console.error(err)});
  }
  getWeather2(place,i);
  // console.log(city);
  // alert("Yo");
}
