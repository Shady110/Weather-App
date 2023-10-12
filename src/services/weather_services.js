import axios from "axios";

export async function ck(x){
    return await x-273.15;
}

export async function search_weather(search){
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f59c5797c4d0b39f1052f6c79d395395&units=metric`)
}

export async function search_hourly_weather(search){
    return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=f59c5797c4d0b39f1052f6c79d395395&cnt=8&units=metric`)
}
export async function forcast(search){
    return await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=8aa10e4170014ba9b6b153155230109&q=$${search}&days=7&aqi=no&alerts=no`)
}




