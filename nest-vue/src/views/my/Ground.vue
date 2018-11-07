<template>
  <div class="live-ground">
    <div class="header border-bottom">
      <div class="back" @click="$router.go(-1);"></div>
      帮住广场
    </div>
    <div class="row-wrapper">
      <div class="control-bar border-bottom">
        <button class="control-btn">类型</button>
        <button class="control-btn">区域</button>
      </div>
    </div>
    <div class="list-item">
      <div class="item border-bottom"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Ground"
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
    .row-wrapper {
      padding: 0 .28rem;
    }
    .control-bar {
      padding: .2rem 0 .6rem;
    }
    .control-btn {
      position: relative;
      margin-right: .28rem;
      padding: 0 .22rem;
      min-width: 1.2rem;
      max-width: 1.6rem;
      height: .6rem;
      line-height: .6rem;
      text-align: center;
      font-size: .28rem;
      color: #333;
      box-sizing: border-box;
      border-radius: .1rem;
      &.active {
        color: #fff;
        background-color: #0f9183;
        &::after {
          display: none;
        }
      }
      &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        border: 1px solid #b2b2b2;
        border-radius: .2rem;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
        transform: scale(.5);
        transform-origin: left top;
      }
    }
    .list-item {
      padding: 0 .28rem;
    }
  }
</style>
