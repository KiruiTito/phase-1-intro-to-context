const app = new Vue({
    el: '#app',
    data: {
      message: 'Enter a city name to get the current weather conditions.',
      city: '',
      description: '',
      temperature: '',
      feels_like: '',
      humidity: '',
      wind_speed: '',
      showResults: false
    },
    methods: {
      getWeather() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=YOUR_API_KEY&units=imperial`)
          .then(response => response.json())
          .then(data => {
            this.description = data.weather[0].description;
            this.temperature = data.main.temp;
            this.feels_like = data.main.feels_like;
            this.humidity = data.main.humidity;
            this.wind_speed = data.wind.speed;
            this.showResults = true;
          })
          .catch(error => {
            console.error(error);
            this.message = `Error: ${error.message}`;
          });
      }
    }
  });
  