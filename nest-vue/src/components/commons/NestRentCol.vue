<template>
  <div class="room-msg">
    <div class="room" v-for="(recommend,index) in recommends">
      <div class="room-img"></div>
      <div class="room-place">Jazz residence户型Jazz residence户型residence户型residence户型<</div>
      <div class="room-size">
        <div class="left">10F</div>
        <div class="left">100.55 ㎡</div>
      </div>
      <div class="price-m">
        <div class="num">23000</div>
        <div class="month">P/月</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nest-rentcol",
    props:{
      recommends:{
        type:Array,
        default:function(){
          return ['1室1厅','10F','100.55 ㎡'];
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .room-msg{
    margin-left: 0.28rem;
    display: flex;
    flex-wrap: wrap;
  .room{
    margin-right: 0.34rem;
    margin-bottom: 0.45rem;
    display: flex;
    flex-direction:column ;
    width: 3.3rem;
  &:nth-of-type(even){
     margin-right: 0rem;
   }
  }
  .room-img{
    width: 3.3rem;
    height: 2.36rem;
    border-radius: 0.1rem;
    background-color: red;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .room-place{
    word-break:break-all;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    font-size: 0.28rem;
    color: #333333;
    font-weight: bold;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .room-size{
    display: flex;
    margin-bottom: 0.2rem;
  .left{
    margin-right: 0.1rem;
    padding: 0.15rem;
    background: #fbf8f3;
    color: #d5be88;
    font-size: 0.24rem;
    border-radius: 0.1rem;
  }
  }
  .price-m{
    display: flex;
    align-items: flex-end;
    font-size: 0.28rem;
    color: #0f9183;
  .num{
    font-weight: bold;
  }
  .month{
    margin-left: 0.1rem;
    font-size: 0.24rem;
  }
  }
  }
</style>
