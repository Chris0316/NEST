<template>
  <div class="home">
    <nest-header header-type="home"></nest-header>
    <div class="menus">
      <router-link to="" class="menu-item">
        <div class="menu-icon"></div>
        <div class="name">发布房源</div>
      </router-link>
      <router-link to="/list/rent" class="menu-item">
        <div class="menu-icon"></div>
        <div class="name">租房</div>
      </router-link>
      <router-link to="/list/second" class="menu-item">
        <div class="menu-icon"></div>
        <div class="name">二手房</div>
      </router-link>
      <router-link to="/list/new" class="menu-item">
        <div class="menu-icon"></div>
        <div class="name">新房</div>
      </router-link>
      <router-link to="/list/parking" class="menu-item">
        <div class="menu-icon"></div>
        <div class="name">车位</div>
      </router-link>
    </div>
    <div class="swiper-container topics" ref="swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide topic" @click="showToast">
          <div class="title">温馨一居室</div>
          <div class="msg">属于你的独享空间</div>
        </div>
        <div class="swiper-slide topic">
          <div class="title">温馨一居室</div>
          <div class="msg">属于你的独享空间</div>
        </div>
        <div class="swiper-slide topic">
          <div class="title">温馨一居室</div>
          <div class="msg">属于你的独享空间</div>
        </div>
      </div>
    </div>
    <div class="swiper-container topics budget" ref="swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide topic">
          <div class="title">500万预算</div>
          <div class="msg">小资一族上车</div>
        </div>
        <div class="swiper-slide topic">
          <div class="title">500万预算</div>
          <div class="msg">小资一族上车</div>
        </div>
        <div class="swiper-slide topic">
          <div class="title">500万预算</div>
          <div class="msg">小资一族上车</div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="left">为你推荐</div>
      <div class="right">
        <div class="lease" :class="{on: curindex == i }" v-for="(lease,i) in leaseArr" :key="i"
             @click="leaseChange(i)">{{lease}}
        </div>
      </div>
    </div>
    <nest-list-view double/>
    <nest-nav page="explore"></nest-nav>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'

  export default {
    props: {
      leaseArr: {
        type: Array,
        default: function () {
          return ['出租', '销售'];
        }
      }
    },
    data() {
      return {
        curindex: 0
      }
    },
    mounted() {
      setTimeout(() => {
        this.initSwiper();
      }, 20);
    },
    methods: {
      showToast() {
        this.$toast.info({
          callback: () => {
            console.log(343)
          }
        });
      },
      leaseChange(i) {
        this.curindex = i;
      },
      initSwiper() {
        new Swiper(this.$refs.swiper1, {
          slidesPerView: 'auto',
          freeMode: true,
          releaseOnEdges: false
        });
        new Swiper(this.$refs.swiper2, {
          slidesPerView: 'auto',
          freeMode: true,
          releaseOnEdges: false
        });
      }
    }
  }
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
    background-color: #fff;
    /*overflow: hidden;*/
    padding: 0.2rem 0 .8rem;
    .menus {
      margin-left: 0.28rem;
      padding-right: 0.28rem;
      margin-top: 0.7rem;
      display: flex;
      justify-content: space-between;
      .menu-item {
        @include rowcenter;
        flex-direction: column;
        .menu-icon {
          margin-bottom: 0.25rem;
          width: 1.1rem;
          height: 1.1rem;
          border-radius: 50%;
          background-color: #e8e8ea;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .name {
          font-size: 0.28rem;
          color: #333333;
        }
      }
    }
    .topics {
      margin-top: 1rem;
      padding: 0 .28rem;
      .topic {
        margin-right: 0.1rem;
        width: 2.8rem;
        height: 2rem;
        background: #f5f5f7;
        border-radius: 0.1rem;
        &:last-child {
          margin-right: 0;
        }
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
    .budget {
      margin-top: 0.7rem;
    }
    .recommend {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .left {
        margin-left: 0.28rem;
        font-size: 0.46rem;
        color: #333333;
        font-weight: bold;
      }
      .right {
        display: flex;
        font-size: 0.28rem;
        color: #999999;
        .lease {
          margin-right: 0.45rem;
          padding-bottom: 0.2rem;
          border-bottom: 0.04rem solid #ffff;
        }
        .on {
          color: #0f9183;
          border-bottom: 0.04rem solid #0f9183;
        }
      }
    }
  }
</style>
