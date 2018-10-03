<template>
  <div class="search-list">
    <div class="search-item">
      <div class="item-img"></div>
      <div class="msg-wrap">
        <div class="title">{{title}}</div>
        <div class="type-wrap">
          <div class="type" v-for="(label,index) in labels" :key="index">{{label}}</div>
        </div>
        <div class="rent">
          <div class="price">{{price}}</div>
          <div class="price-msg">P/月</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nest-rent-list",
    props: {
      imgurl:{
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: 'Jazzreerfererererererrereerererereresdsdfsdfsfdsfdsfdfdsfrererererereeres'
      },
      labels: {
        type: Array,
        default:function(){
          return ['1室1厅','10F','100.55 ㎡'];
        }
      },
      price: {
        type: Number,
        default: 3000
      },
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .search-list{
    margin-left: 0.28rem;
    margin-right: 0.28rem;
    display: flex;
    flex-direction: column;
    .search-item{
      display: flex;
      align-items: center;
      margin-bottom: 0.4rem;
      .item-img{
        width: 2.7rem;
        height: 1.74rem;
        border-radius: 0.1rem;
        background-color:  red;
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .msg-wrap{
        width: 100%;
        flex: 1;
        margin-left: 0.28rem;
      }
      .title{
        word-break:break-all;
        margin-bottom: 0.1rem;
        font-size: 0.28rem;
        color: #333333;
        font-weight: bold;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .type-wrap{
        display: flex;
        margin-bottom: 0.1rem;
      }
      .type{
        margin-right: 0.1rem;
        padding: 0.08rem;
        background: #fbf8f3;
        color: #d5be88;
        font-size: 0.24rem;
        border-radius: 0.1rem;
      }
      .rent{
        display: flex;
        align-items: flex-end;
        font-size: 0.28rem;
        color: #0f9183;
      }
      .price{
        font-weight: bold;
      }
      .price-msg{
        margin-left: 0.1rem;
        font-size: 0.24rem;
      }
    }
  }

</style>
