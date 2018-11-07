<template>
  <div class="details">
    <div class="header border-bottom">
      <div class="back" @click="$router.go(-1);"></div>
      {{ title }}
    </div>
    <div class="content">
      <div class="banner">给我您的需求，帮您淘满意的房子</div>
      <div class="card">
        <div class="card-top" :class="detailsType">
          <span class="title">公寓</span>
          <span class="date" :class="pageType">2018-08-19</span>
          <span class="share" v-if="pageType === 'my'"></span>
        </div>
        <div class="card-body">
          <div class="info-row">
            <div class="info-label"></div>
            <div class="info-value"></div>
          </div>
          <div class="info-row">
            <div class="info-label"></div>
            <div class="info-value"></div>
          </div>
          <div class="info-row">
            <div class="info-label"></div>
            <div class="info-value"></div>
          </div>
          <div class="info-row">
            <div class="info-label"></div>
            <div class="info-value"></div>
          </div>
          <div class="info-row">
            <div class="info-label"></div>
            <div class="info-value"></div>
          </div>
          <div class="info-row">
            <div class="info-label"></div>
            <div class="info-value"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Details",
    data() {
      return {
        title: '帮住广场-购置信息',
        pageType: 'my',
        detailsType: 'buy'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .details {
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
    .content {
      padding: .2rem .28rem 0;
    }
    .banner {
      font-size: .28rem;
      color: #333;
      height: 1.4rem;
      line-height: 1.4rem;
      text-align: center;
      background-color: #f2f2f2;
      border-radius: .2rem;
    }
    .card {
      margin-top: .2rem;
      border-radius: .2rem;
      box-shadow:1px .04rem .28rem 0px rgba(182,185,186,0.3);
      .card-top {
        padding: 0 .4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1rem;
        border-radius: .2rem .2rem 0 0;
        &.buy {
          background-color: #D5BE88;
          .date {
            color: #FDECC3;
          }
        }
        &.rent {
          background-color: #8BB5DF;
          .date {
            color: #D5EAFF;
          }
        }
        .title {
          font-size: .46rem;
          font-weight: bold;
          color: #fff;
        }
        .date {
          font-size: .24rem;
          &.my {
            width: 4.06rem;
          }
        }
        .share {
          width: .38rem;
          height: .38rem;
          background-color: #fff;
        }
      }
      .card-body {
        padding: .4rem;
      }
    }
  }
</style>
