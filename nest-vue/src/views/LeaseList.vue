<template>
  <div class="lease-list">
    <button class="button" @click="openHType">户型</button>
    <button class="button" @click="openLocation">地点</button>
    <nest-check :countInLine="countInLine" size="big" :options="locationOptions"></nest-check>
    <nest-modal title="地点" v-show="locationShow" modalBtnTxt="确定" @modalBtnClick="locationConfirm">
      <!--<nest-check countInLine="2" size="big" :options="locationOptions"></nest-check>-->
      <!--<div class="btn-group">-->
        <!--<div class="btn-column">-->
          <!--<div class="opt-btn">马卡提(Makati)</div>-->
          <!--<div class="opt-btn">帕赛(Pasay)</div>-->
        <!--</div>-->
        <!--<div class="btn-column">-->
          <!--<div class="opt-btn on">马尼拉市(City of Manila)</div>-->
          <!--<div class="opt-btn">曼达卢永(Mandaluyong)</div>-->
        <!--</div>-->
        <!--<div class="btn-column">-->
          <!--<div class="opt-btn on">奎松(Quezon)</div>-->
          <!--<div class="opt-btn">BGC(BGC, Taguig)</div>-->
        <!--</div>-->
        <!--<div class="btn-column last">-->
          <!--<div class="opt-btn">帕西市(Pasig)</div>-->
        <!--</div>-->
      <!--</div>-->
    </nest-modal>
    <nest-modal title="户型" v-show="hTypeShow" modalBtnTxt="立即发现惊喜房源" @modalBtnClick="hTypeConfirm">
      <div class="btn-group">
        <div class="btn-column">
          <div class="opt-btn">一居室</div>
          <div class="opt-btn">二居室</div>
        </div>
        <div class="btn-column last">
          <div class="opt-btn on">三居室</div>
          <div class="opt-btn">其他</div>
        </div>
      </div>
    </nest-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        locationShow: false,
        hTypeShow: false,
        countInLine: 3,
        locationOptions: ['马卡提(Makati)', '帕赛(Pasay)', '马尼拉市(City of Manila)', '曼达卢永(Mandaluyong)', '奎松(Quezon)', 'BGC(BGC, Taguig)', '帕西市(Pasig)']
      }
    },
    methods: {
      openHType() {
        this.hTypeShow = true;
      },
      openLocation() {
        this.locationShow = true;
      },
      locationConfirm() {
        this.locationShow = false;
      },
      hTypeConfirm() {
        this.hTypeShow = false;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .lease-list {

  }
  .btn-group {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
  .btn-column {
    margin-bottom: .28rem;
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
    &.last {
      margin-bottom: 0;
    }
  }
  .opt-btn {
    padding: 0 .3rem;
    width: 2.92rem;
    height: .6rem;
    line-height: .6rem;
    background-color: #f2f2f2;
    text-align: center;
    border-radius: .1rem;
    font-size: .28rem;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
    &.on {
      background-color: #0f9183;
      color: #fff;
    }
  }
</style>
