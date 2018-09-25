<template>
  <div class="lease-list">
    <button class="button" @click="openLocation">地点</button>
    <button class="button" @click="openHType">户型</button>
    <nest-modal title="地点" v-show="locationShow" modalBtnTxt="确定" @modalBtnClick="locationConfirm">
      <nest-check size="big" :options="locationOptions"></nest-check>
    </nest-modal>
    <nest-modal title="户型" v-show="hTypeShow" modalBtnTxt="立即发现惊喜房源" @modalBtnClick="hTypeConfirm">
      <nest-check size="big" :options="typeOptions"></nest-check>
    </nest-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        locationShow: false,
        hTypeShow: false,
        locationOptions: ['马卡提(Makati)', '帕赛(Pasay)', '马尼拉市(City of Manila)', '曼达卢永(Mandaluyong)', '奎松(Quezon)', 'BGC(BGC, Taguig)', '帕西市(Pasig)'],
        typeOptions: ['一居室', '二居室', '三居室', '其他']
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
</style>
