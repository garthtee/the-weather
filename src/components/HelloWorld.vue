<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>City: {{ city }}</h4>
    <div id="map"></div>
  </div>
</template>

<script>

var axios = require('axios')
const url = 'https://www.googleapis.com/geolocation/v1/geolocate?key='
const googleApiKey = 'AIzaSyCgT0X9tyBw3yLC9lxD_0Igy2EOdT4E5g4'

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      msg: 'The Weather',
      lat: 0,
      long: 0,
      accuracy: 0,
      city: ''
    }
  },
  methods: {},
  mounted: function () {
    const self = this
    const mapDiv = document.getElementById('map')

    axios.post(url + googleApiKey, { data: { } })
      .then(function (position) {
        self.lat = position.data.location.lat
        self.long = position.data.location.lng
        self.accuracy = position.data.accuracy
        const map = new google.maps.Map(mapDiv, {
          zoom: 10,
          center: new google.maps.LatLng(self.lat, self.long)
        })
        
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${self.lat},${self.long}&key=${googleApiKey}`)
        .then(function (result) {
          // If type contains "locality" then it's a city
          result.data.results.forEach(function (item) {
            if (item.types.indexOf('locality') >= 0)
              self.city = item.formatted_address
          });
        })
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#map {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background: gray;
}
</style>
