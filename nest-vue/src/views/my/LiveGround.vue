<template>
  <div class="live-ground">
    <div class="header border-bottom">
      <div class="back" @click="$router.go(-1);"></div>
      帮住广场
    </div>
  </div>
</template>

<script>
  export default {
    name: "live-ground"
  }
</script>

<style lang="scss" scoped>
  .live-ground {
    background-color: #fff;
    .header {
      position: relative;
      display: flex;
      padding: 0 .28rem;
      height: 1.2rem;
      justify-content: center;
      align-items: center;
    }
    .back {
      position: absolute;
      top: 0;
      left: .28rem;
      width: .9rem;
      height: 100%;
      background: url('../../assets/images/return-icon.png') no-repeat left center;
      background-size: .42rem .32rem;
    }
  }
</style>
