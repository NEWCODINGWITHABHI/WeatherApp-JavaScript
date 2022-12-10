const weatherApi={
    key:'0e2eef31120349558b9142215223011',
    url:"https://api.weatherapi.com/v1/current.json?key=0e2eef31120349558b9142215223011&q=mumbai&aqi=yes"
}
const API_KEY="c616d1708330d9008f9cc19efb45566f"
// const URL=https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const input=document.querySelector(".input");

input.addEventListener("keypress",(event)=>{
  
  if(event.keyCode==13){
  document.querySelector('.weather-body').style.display="block";
  console.log(input.value,event);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&units=metric`).
  then(res=>{
    console.log(res,"....")
    return res.json()}).
  then(showWeatherReport)
}
})
function showWeatherReport(weatherData){
  console.log(weatherData,"weeeeee");
  let city=document.getElementById("city").innerHTML=`${weatherData.name} ,${weatherData.sys.country}`

  let temp=document.getElementById("temp").innerHTML=`${Math.round(weatherData.main.temp)}&deg;C`;

  let minMax=document.getElementById("min-max").innerHTML=`${Math.floor(weatherData.main.temp_min)}&deg;C (min)  / ${Math.ceil(weatherData.main.temp_max)}${'&deg;C'}(max)`;

  let weatherCond=document.getElementById("weather-condition").innerHTML=`${weatherData.weather[0].main}`;
 

  
  if(weatherCond=='Clear'){
     document.body.style.backgroundImage="url('images/clear.jfif')"
  }
  else if(weatherCond=='Clouds'){
    document.body.style.backgroundImage="url('images/cloudy.jpeg')"
 }
 else if(weatherCond=='Rain'){
  document.body.style.backgroundImage="url('images/rainy.jpg')"
}
else if(weatherCond=='Snow'){
  document.body.style.backgroundImage="url('images/snow.jfif')"
}
else if(weatherCond=='Smoke'){
  document.body.style.backgroundImage="url('images/smoky.jfif')"
}
else if(weatherCond=='Thunderstorm'){
  document.body.style.backgroundImage="url('images/Thunderstorms.jpg')"
}
else{
  document.body.style.backgroundImage="url('images/haze.jfif')"
}
let date=document.getElementById("date");
let todayDate=new Date();
console.log(todayDate.getDay())
date.innerText=findDate(todayDate);
}

function findDate(todayDate){
  let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  let year=todayDate.getFullYear();
  let month=months[todayDate.getMonth()];
  let date=todayDate.getDate();
  let day=days[todayDate.getDay()];
  return `${date} ${month} (${day}), ${year}`;
}
