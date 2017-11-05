import React, { Component } from 'react';

class GetWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            weather: '',
            mainTemp: '',
            mainTempMax: '',
            mainTempMin: '',
            windSpeed: '',
        }
    }

    getWeatherInfo(city) {
        if (city !== undefined) {
            let info = new XMLHttpRequest();

            let mainUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=c2c1440340fca385f3938af5da00f293';

            info.open('GET',mainUrl, false);
            info.send();

                if (info.status == 200) {
                    let showWeather = document.querySelector('.viewWeather');
                    showWeather.style.cssText = 'display: block';

                    let result = JSON.parse(info.responseText);

                    let image_Url = "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png";
                    let weather_ = result.weather[0].main;
                    let main_Temp = result.main.temp;
                    let main_Temp_max = result.main.temp_max;
                    let main_Temp_min = result.main.temp_min;
                    let wind_speed = result.wind.speed;

                    this.setState({
                        imageUrl: image_Url,
                        weather: weather_,
                        mainTemp: (main_Temp - 273.15).toFixed(1),
                        mainTempMax: (main_Temp_max - 273.15).toFixed(1),
                        mainTempMin: (main_Temp_min - 273.15).toFixed(1),
                        windSpeed: wind_speed,
                    });
                } else {
                    alert( info.status + ':' + info.statusText + ' Enter correct city name' );

                    let showWeather = document.querySelector('.viewWeather');
                    showWeather.style.cssText = 'display: none';
                }
        }
    }

    componentWillReceiveProps(nextProps) {
        let city = nextProps.cityName;
        let inputItemCity = nextProps.InputItemCity;
        let flag = nextProps.InputItemFlag;

        if (flag === true) {
            this.getWeatherInfo(inputItemCity);
        } else {
            this.getWeatherInfo(city);
        }
    }

    render() {
        return (
            <div className = "viewWeather">
                <p>{ this.state.weather }</p>
                <img className = "iconWeather" src = { this.state.imageUrl } />
                <p><span className = "temperature" >t</span> { this.state.mainTemp } <span className = "upText" >o</span>C</p>
                <p>t<span className = "underText" >max</span> { this.state.mainTempMax } <span className = "upText" >o</span>C</p>
                <p>t<span className = "underText" >min</span> { this.state.mainTempMin } <span className = "upText" >o</span>C</p>
                <p>wind speed { this.state.windSpeed } m/sec</p>
            </div>
        )
    }
}

export default GetWeather;
