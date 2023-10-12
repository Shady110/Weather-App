import React, { Component } from 'react';
import { search_weather, search_hourly_weather ,forcast } from '../services/weather_services';
import { useState } from 'react';
function Home() {

    const [search, setcountry] = useState();
    const [weather_arr, setweather] = useState([]);
    const [hour_weather, sethourweather] = useState([]);
    const [weather_forcast ,setforcast]=useState([]);



    const handlesubmit = (event) => {
        event.preventDefault();
        search_weather(search)
            .then(res => setweather(res.data))
            .catch(err => alert("inavlid country"));

        search_hourly_weather(search)
            .then(res => sethourweather(res.data.list))
            .catch(err => { })

        forcast(search)
        .then(res=>setforcast(res.data))
        .then(console.log(weather_forcast))
        .catch(err=>{throw err})

    }

    return (
        <>
            {/* Search Bar */}
            {/* ============================================================ */}
            <section className="w-75 mx-auto">
                <form onSubmit={handlesubmit}>
                    <div className="row d-flex align-items-center gap-3">
                        <input type="text" onChange={(e) => { setcountry(e.target.value) }} className="fs-3 col rounded-5 w-100 my-4 px-4 py-2 opacity-50 text-white" placeholder="search by city" style={{ backgroundColor: '#3A4350', borderStyle: "none" }} />
                        <button type='submit' className='btn btn-light col-lg-3 rounded-5 text-white' style={{ width: "fit-content", height: "fit-content", backgroundColor: '#3A4350', borderStyle: "none" }}><i class="fa-solid fa-magnifying-glass" style={{ color: "#ffffff" }}></i></button>
                    </div>
                </form>
            </section>

            {/* temprature Bar */}
            {/* ============================================================ */}


            {typeof weather_arr.main !== "undefined" ? (
                <section className='text-center w-75 mx-auto'>
                    <div className="row my-3">
                        <div className="col w-50 my-auto text-start">
                            <h2 className='text-white' style={{ fontSize: "5rem" }}>{weather_arr.name}</h2>
                            <h2 className='text-white' style={{ fontSize: "5rem" }}>{Math.trunc(weather_arr.main.temp)} °C </h2>
                            <p className="opacity-50 text-white fs-2">{weather_arr.weather[0].description}</p>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 my-auto text-end"><img src={`https://openweathermap.org/img/wn/${weather_arr.weather[0].icon}@2x.png`} alt="" width={'50%'} /></div>
                    </div>
                    <div className="p-4 rounded-5 opacity-75" style={{ backgroundColor: '#3A4350', borderStyle: "none" }}>
                        <h5 className="text-white opacity-50 text-start">today's forcast</h5>
                        <div className="row p-3 gap-3">
                            {hour_weather.length > 0 &&

                                hour_weather.map((hour, index) => (
                                    <div className="col" key={index}>
                                        <p className="text-white opacity-50 text-center fw-medium">{(new Date((hour.dt) * 1000).getUTCHours()) > 12 ? new Date((hour.dt) * 1000).getUTCHours() - 12 + ":00 PM" : new Date((hour.dt) * 1000).getUTCHours() + ":00 AM"}</p>
                                        <img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt="" width={"70%"} />
                                        <p className="text-white text-center mt-3 fw-medium">{Math.trunc(hour.main.temp)} °C</p>
                                    </div>

                                ))

                            }
                        </div>
                    </div>

                    {/* air conditions */}
                    {/* ================================================== */}
                    
                    <div className="p-5 rounded-5 opacity-75 mt-5" style={{ backgroundColor: '#3A4350', borderStyle: "none" }}>
                        <h5 className="text-white opacity-50 text-start mb-4">Air conditions</h5>
                        
                            <div className="row">
                                <div className="col text-center">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className=" fa-solid fa-temperature-half fa-2x" style={{ color: "#85898f" }}></i>
                                        <h2 className=' mx-3 text-secondary'>Real feel :</h2>
                                    </div>
                                    <div className="row px-5 text-secondary "><h2>{Math.trunc(weather_arr.main.feels_like)} °C</h2></div>
                                </div>
                                <div className="col text-center">
                                    <div className="d-flex align-items-center justify-content-center">
                                    <i class="fa-solid fa-up-right-and-down-left-from-center fa-2x" style={{color: "#85898f"}}></i>
                                        <h2 className=' mx-3 text-secondary'>Min/Max :</h2>
                                    </div>
                                    <div className="row text-center text-secondary "><h2>{Math.trunc(weather_arr.main.temp_min)}/{Math.trunc(weather_arr.main.temp_max)} °C</h2></div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col text-center">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-wind fa-2x" style={{ color: "#85898f" }}></i>
                                        <h2 className=' mx-3 text-secondary'>Wind :</h2>
                                    </div>
                                    <div className="row px-5 text-secondary "><h2>{(weather_arr.wind.speed)} KM/HR</h2></div>
                                </div>
                                <div className="col text-center">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-water fa-2x" style={{ color: "#85898f" }}></i>
                                        <h2 className=' mx-3 text-secondary'>Humidity :</h2>
                                    </div>
                                    <div className="row px-5 text-secondary "><h2>{Math.trunc(weather_arr.main.humidity)} %</h2></div>
                                </div>
                            </div>
                        
                    </div>


                    
                </section>
            ) : console.log("not found")}
        </>
    );
}

export default Home;