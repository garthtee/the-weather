<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getLocation($event)">Location</button>
    <h4>Position: {{ lat }} {{ long }}</h4>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      msg: 'The Weather',
      lat: 0,
      long: 0
    }
  },
  methods: {
    getLocation: function (event) {
      var self = this

      navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
        console.log(result.state)
      })

      navigator.geolocation.getCurrentPosition(function (position) {
        self.lat = position.coords.latitude
        self.long = position.coords.longitude
        console.log(self.lat)
        console.log(self.long)
      }, function (error) {
        console.error(error)
      })
    }
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
</style>
