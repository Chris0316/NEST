<template>
  <div class="map" ref="map"></div>
</template>

<script>

  export default {
    name: "Map",
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        let map = new google.maps.Map(this.$refs.map, {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.map {

}
</style>
