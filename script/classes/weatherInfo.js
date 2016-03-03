/**
 * Created by debarshi.bhaumik on 3/4/2016.
 */

var WeatherInfo = (function () {
    function WeatherInfo(data) {
        try {
            this.cityName = data.data.name + ', ' + data.data.sys.country;
            this.maxTemp = parseInt(data.data.main.temp_max);
            this.minTemp = parseInt(data.data.main.temp_min);
            this.currentTemp = parseInt(data.data.main.temp);
            this.icon = data.data.weather[0].icon;
        }
        catch (e) {
            console.error(e);
        }
    }

    return WeatherInfo;
})();
