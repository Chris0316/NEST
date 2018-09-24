<template>
  <div class="home">
    <div class="search-wrap">
      <div class="search-box">
        <input class="search-msg" type="text">
        <div class="search-img"></div>
        <div class="search-sle">
          <div class="types">二手房</div>
          <div class="point"></div>
        </div>
        <div class="typelist">
          <div class="typeli">
            二手房
          </div>
          <div class="typeli">
            租房
          </div>
        </div>
      </div>
      <div class="search-place">
        <div class="place-icon"></div>
        <div class="place-name">马尼拉</div>
      </div>
    </div>
    <div class="opt-type">
      <div class="where">地点</div>
      <div class="where">户型</div>
    </div>
    <div class="todotype">
      <div class="todo">
        <img class="todo-img" src="../assets/images/todo-img.png" alt="">
        <div class="name">发布房源</div>
      </div>
      <div class="todo">
        <img class="todo-img" src="../assets/images/todo-img.png" alt="">
        <div class="name">租房</div>
      </div>
      <div class="todo">
        <img class="todo-img" src="../assets/images/todo-img.png" alt="">
        <div class="name">二手房</div>
      </div>
      <div class="todo">
        <img class="todo-img" src="../assets/images/todo-img.png" alt="">
        <div class="name">新房</div>
      </div>
      <div class="todo">
        <img class="todo-img" src="../assets/images/todo-img.png" alt="">
        <div class="name">车位</div>
      </div>
    </div>
    <div class="bedrooms">
      <div class="bedroom">
        <div class="title">温馨一居室</div>
        <div class="msg">属于你的独享空间</div>
      </div>
      <div class="bedroom">
        <div class="title">温馨一居室</div>
        <div class="msg">属于你的独享空间</div>
      </div>
      <div class="bedroom">
        <div class="title">温馨一居室</div>
        <div class="msg">属于你的独享空间</div>
      </div>
    </div>
    <div class="bedrooms budget">
      <div class="bedroom">
        <div class="title">500万预算</div>
        <div class="msg">小资一族上车</div>
      </div>
      <div class="bedroom">
        <div class="title">500万预算</div>
        <div class="msg">小资一族上车</div>
      </div>
      <div class="bedroom">
        <div class="title">500万预算</div>
        <div class="msg">小资一族上车</div>
      </div>
    </div>
    <div class="recommend">
      <div class="left">为你推荐</div>
      <div class="right">
        <div class="lease on">出租</div>
        <div class="lease">销售</div>
      </div>
    </div>
    <div class="room-msg">
      <div class="room">
        <img src="../assets/images/room-img.png" class="room-img" alt="">
        <div class="room-place">Jazz residence户型Jazz residence户型<</div>
        <div class="room-size">
          <div class="left">10F</div>
          <div class="left">100.55 ㎡</div>
        </div>
        <div class="price-m">
          <div class="num">23000</div>
          <div class="month">P/月</div>
        </div>
      </div>
      <div class="room">
        <img src="../assets/images/room-img.png" class="room-img" alt="">
        <div class="room-place">Jazz residence户型Jazz residence户型<</div>
        <div class="room-size">
          <div class="left">10F</div>
          <div class="left">100.55 ㎡</div>
        </div>
        <div class="price-m">
          <div class="num">23000</div>
          <div class="month">P/月</div>
        </div>
      </div>
      <div class="room">
        <img src="../assets/images/room-img.png" class="room-img" alt="">
        <div class="room-place">Jazz residence户型Jazz residence户型<</div>
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
  </div>
</template>

<script>
  export default {}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  input {
    background: none;
    outline: none;
    border: 0px;
    caret-color: #0f9183;
  }

  @mixin rowcenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home {
    box-sizing: border-box;
    width: 100%;
    /*overflow: hidden;*/
    padding: 0.2rem .28rem 0rem;
    .search-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .search-box {
        position: relative;
        width: 5.06rem;
        height: 0.8rem;
      }
      .search-msg {
        box-sizing: border-box;
        padding-left: 0.64rem;
        width: 100%;
        height: 100%;
        border: 1px solid #e8e8ea;
        border-radius: 0.1rem;
        box-shadow: 0px 0px 0.2rem rgba(176, 183, 187, 0.4);
      }
      .search-img {
        position: absolute;
        top: 0.28rem;
        left: 0.2rem;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../assets/images/search-img.png") no-repeat;
        background-size: 100% 100%;
      }
      .search-sle {
        @include rowcenter;
        position: absolute;
        top: 0.24rem;
        right: 0rem;
      }
      .types {
        padding-left: 0.2rem;
        padding-top: 0.01rem;
        padding-bottom: 0.01rem;
        font-size: 0.24rem;
        color: #333333;
        border-left: 1px solid #cccccc;
      }
      .point {
        margin-left: 0.14rem;
        margin-right: 0.25rem;
        width: 0.14rem;
        height: 0.09rem;
        background: url("../assets/images/triangle.png") no-repeat;
        background-size: 100% 100%;
      }
      .typelist {
        position: absolute;
        right: 0rem;
        top: 0.8rem;
        width: 1.4rem;
        border: 1px solid #e8e8ea;
        border-radius: 0.1rem;
        box-shadow: 0px 0px 0.2rem rgba(176, 183, 187, 0.4);
        background: #ffffff;
        .typeli {
          box-sizing: border-box;
          height: 0.7rem;
          line-height: 0.7rem;
          padding-left: 0.18rem;
          color: #0f9183;
          font-size: 0.24rem;
          &:hover {
            background: #e7f4f2;
            color: #333333;
          }
        }
      }
      .search-place {
        display: flex;
      }
      .place-icon {
        width: 0.26rem;
        height: 0.35rem;
        background: url("../assets/images/position.png") no-repeat;
        background-size: 100% 100%;
      }
      .place-name {
        margin-left: 0.15rem;
        font-size: 0.28rem;
        color: #333333;
      }
    }
    .opt-type {
      margin-top: 0.28rem;
      display: flex;
      .where {
        margin-right: 0.28rem;
        box-sizing: border-box;
        border: 1px solid #b2b2b2;
        border-radius: 0.1rem;
        width: 1.2rem;
        height: 0.6rem;
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.28rem;
        color: #333333;
      }
    }
    .todotype {
      margin-top: 0.7rem;
      display: flex;
      justify-content: space-between;
      .todo {
        @include rowcenter;
        flex-direction: column;
        .todo-img {
          margin-bottom: 0.25rem;
          width: 1.1rem;
          height: 1.1rem;
        }
        .name {
          font-size: 0.28rem;
          color: #333333;
        }
      }
    }
    .bedrooms {
      margin-top: 1rem;
      display: flex;
      overflow-x: auto;
      .bedroom {
        flex-shrink: 0;
        margin-right: 0.1rem;
        display: flex;
        flex-direction: column;
        width: 2.8rem;
        height: 2rem;
        background: #f5f5f7;
        border-radius: 0.1rem;
        .title {
          margin-top: 0.2rem;
          margin-left: 0.2rem;
          font-size: 0.3rem;
          color: #333333;
        }
        .msg {
          margin-left: 0.2rem;
          margin-top: 0.1rem;
          font-size: 0.24rem;
          color: #b2b2b2;
          font-weight: lighter;
        }
      }
    }
    .budget{
      margin-top: 0.7rem;
    }
    .recommend{
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .left{
        font-size: 0.46rem;
        color: #333333;
        font-weight: bold;
      }
      .right{
        display: flex;
        font-size: 0.28rem;
        color: #999999;
        .lease{
          margin-right: 0.45rem;
          padding-bottom: 0.2rem;
          border-bottom: 0.04rem solid #ffff;
        }
        .on{
          color: #0f9183;
          border-bottom: 0.04rem solid #0f9183;
        }
      }
    }
    .room-msg{
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
      }
      .room-place{
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        font-size: 0.28rem;
        color: #333333;
        font-weight: bold;
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
  }
</style>
