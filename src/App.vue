<template>
  <div id="app">
    <div id="map"></div>
    <img class="drops" src="./assets/logo.svg">
    <input class="search-input" type="text" v-model="location" :class="{'search-input-hidden':infoReady}" placeholder="Enter your adress">
    <div class="info wrapper" :class="{'wrapper-show': !infoReady}">
      <p class="info temperature">{{ temperature }} &deg;C</p>
      <p class="info location">{{ location }}</p>
      <img class="info gif" :src="gifLink" alt="">
      <p class="info weater">{{ conditions }}</p>
    </div>
    <button class="search-btn" @click=search() :class="{ 'search-btn-move': infoReady }">Search</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      location: '',
      temperature: null,
      conditions: null,
      gifLink: null,
      infoReady: false,
    }
  },
  methods: {
    search: async function() {
      if (this.infoReady === false) {
        try {
          const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&APPID=fc94cdf16f9e67399b434a447c3963da`, {mode: "cors"})
          const weatherData = await response.json();
          this.getGif(weatherData.weather[0].main);
          this.conditions = weatherData.weather[0].description;
          this.location = weatherData.name + ', ' + weatherData.sys.country;
          this.temperature = Math.round(weatherData.main.temp);
        } catch(err) {
          this.location = '';
          document.querySelector('.search-input').placeholder = 'No such location';
          return;
        }
      }
      this.infoReady = !this.infoReady;
    },
    getGif: async function(term) {
      const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=VNVcZotHyN6vqUSxFaaqv2oIjAnAMvbz&s=${term}`);
      const gifData = await response.json();
      this.gifLink = gifData.data.images.original.url;
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  position: relative;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background: url('./assets/background.jpeg');
  background-repeat: no-repeat;
}

.search-input, .search-btn, .drops {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 2;
}

.drops {
  top: 5%;
}

.search-btn {
  bottom: 40%;
  background: #8DBBFF;
  border-radius: 50px;
  border: 1px solid #8DBBFF;
  padding: 10px;
  color: #ffffff;
  transition: all .3s ease-in-out;
}

.search-btn-move {
  transform: translateY(600%);
}

.search-btn:hover {
  background: #6aa6ff;
}

.search-input {
  width: 60%;
  height: 2.5em;
  padding: 10px;
  bottom: 50%;
  border-radius: 50px;
  border: 1px solid #dddddd;
  transition: all .3s ease-in-out;
}

.search-input-hidden {
  opacity: 0;
}

.wrapper {
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  margin: 15vh auto;
  width: 50vw;
  height: 70vh;
  background-color: #ffffff;
  border: .2px solid #ffffff;
  border-radius: 20px;
  opacity: 1;
  transition: all .3s ease-in-out;
}

.wrapper-show {
  opacity: 0;
}

.location {
  margin: 1em;
}

.temperature {
  font: 4em Arial bold;
  padding: .7em 0 0;
  margin: 0;
}

.weather {
  margin-top: 20px;
}

.gif {
  margin: 0 auto;
  display: block;
  height: 30vh;
  border-radius: 20px;
  max-width: 90%;
}


@media screen and (max-width: 800px){
  .wrapper {
    width: 90vw;
  }
}
</style>
