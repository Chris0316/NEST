<template>
  <div class="condition">
    <div class="option-wrap">
      <div class="option" v-for="(sort,index) in sorts" :key="index">{{sort}}</div>
    </div>
    <img src="../../assets/images/sort.png" alt="" class="fresh"/>
  </div>
</template>

<script>
  export default {
    name: "nest-sort",
    props:{
      sorts:{
        type:Array,
        default:function(){
          return ['地点','户型','筛选'];
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .condition {
    margin-top: 0.28rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .option-wrap {
      display: flex;
      margin-left: 1.3rem;
      .option {
        margin-right: 0.28rem;
        box-sizing: border-box;
        width: 1.2rem;
        height: 0.6rem;
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.28rem;
        color: #333333;
        border: 1px solid #cccccc;
        border-radius: 0.1rem;
      }
    }
    .fresh {
      margin-right: 0.84rem;
      width: 0.36rem;
      height: 0.32rem;
    }
  }
</style>
