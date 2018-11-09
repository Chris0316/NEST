<template>
  <div class="live">
    <div class="header border-bottom">
      <div class="back" @click="$router.go(-1);"></div>
      我的帮住
    </div>
    <!--<div class="row-wrapper">-->
      <!--<div class="control-bar">-->
        <!--<button class="control-btn">类型</button>-->
        <!--<button class="control-btn">区域</button>-->
      <!--</div>-->
    <!--</div>-->
    <div class="list">
      <div class="list-item" v-for="item in options">
        <div class="item"
             :class="item.type"
             @touchstart="handleTouchStart"
             @touchmove="handleTouchMove"
             @touchend="handleTouchEnd">
          <div class="item-img"></div>
          <div class="item-content">
            <div class="title"><span class="txt">{{ item.title }}</span><span class="tag">{{ item.type === 'rent'? '租赁' : '购置' }}</span></div>
            <div class="desc">
              预算：{{ item.budget }}<br>
              地区：{{ item.area }}
            </div>
            <div class="date">{{ item.date }}</div>
          </div>
        </div>
        <div class="item-control">
          <div class="share"></div>
          <div class="delete"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Live",
    data() {
      return {
        options: [
          { title: '公寓', type: 'rent', budget: '400-500万Peso', area: '马卡提（Makati）', date: '2018-08-19' },
          { title: '公寓', type: 'buy', budget: '400-500万Peso', area: '马卡提（Makati）', date: '2018-08-19' },
          { title: '公寓', type: 'rent', budget: '400-500万Peso', area: '马卡提（Makati）', date: '2018-08-19' },
          { title: '公寓', type: 'rent', budget: '400-500万Peso', area: '马卡提（Makati）', date: '2018-08-19' }
        ]
      }
    },
    methods: {
      handleTouchStart() {

      },
      handleTouchMove() {},
      handleTouchEnd() {}
    }
  }
</script>

<style lang="scss" scoped>
  .live {
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
    .list {
      margin-top: .6rem;
    }
    .list-item {
      position: relative;
      margin-bottom: .4rem;
      .item {
        display: flex;
        position: relative;
        padding: 0 .28rem;
        z-index: 2;
        background-color: #fff;
        &.rent {
          .item-img {
            background-color: rgba(139,181,223,.15);
          }
          .tag {
            color: #8BB5DF;
            background-color: rgba(139,181,223,.15);
          }
        }
        &.buy {
          .item-img {
            background: rgba(213,190,136,.15);
          }
          .tag {
            color: #D5BE88;
            background-color: rgba(213,190,136,.15);
          }
        }
        .item-img {
          margin-right: .28rem;
          width: 1.74rem;
          height: 1.74rem;
        }
        .item-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: .06rem 0;
          flex: 1;
          .title {
            font-size: 0;
            .txt {
              display: inline-block;
              vertical-align: middle;
              font-size: .32rem;
              font-weight: bold;
              color: #333;
            }
            .tag {
              display: inline-block;
              vertical-align: middle;
              margin-left: .2rem;
              width: .8rem;
              height: .36rem;
              line-height: .36rem;
              border-radius: .1rem;
              font-size: .24rem;
              text-align: center;
            }
          }
          .desc {
            font-size: .24rem;
            color: #999;
            line-height: .32rem;
          }
          .date {
            font-size: .22rem;
            color: #b3b3b3;
          }
        }
      }
      .item-control {
        display: flex;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        .share {
          width: 1.2rem;
          height: 100%;
          background: rgba(15,145,131,.1) url('../../assets/images/share.png') no-repeat center center;
          background-size: .3rem .3rem;
        }
        .delete {
          width: .8rem;
          height: 100%;
          background: #FFE6E6 url('../../assets/images/icon-delete.png') no-repeat center center;
          background-size: .3rem .3rem;
        }
      }
    }
  }
</style>
