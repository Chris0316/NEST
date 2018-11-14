<template>
  <div class="economic">
    <div class="title">
      经纪人详情
      <div class="reback"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "economic-man"
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.economic{
  .title{
    position: relative;
    padding-top: 0.44rem;
    text-align: center;
    font-size: 0.32rem;
    color: #333333;
    .reback{
      position: absolute;
      top: 50%;
      left: 0.28rem;
      transform: translate3d(0,-50%,0);
      width: 0.42rem;
      height: 0.32rem;
      background: url("../../assets/images/return-icon.png") no-repeat;
      background-size: 100%;
    }
  }
}
</style>
