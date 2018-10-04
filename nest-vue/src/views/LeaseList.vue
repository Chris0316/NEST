<template>
  <div class="lease-list">
    <!--<button class="button" @click="openLocation">地点</button>-->
    <!--<button class="button" @click="openType">户型</button>-->
    <nest-modal title="地点" v-show="locationShow" modalBtnTxt="确定" @modalConfirm="locationConfirm" @modalClear="locationClear">
      <nest-check v-model="locationChecked" :options="locationOptions"></nest-check>
    </nest-modal>
    <nest-modal title="户型" v-show="typeShow" modalBtnTxt="立即发现惊喜房源" @modalConfirm="typeConfirm" @modalClear="typeClear">
      <nest-check v-model="typeChecked" :options="typeOptions"></nest-check>
    </nest-modal>

    <nest-modal :isFull="isModalFull" v-show="false">
    xxx
    </nest-modal>
    <div class="search-wrap">
      <img src="../assets/images/return-icon.png" alt="" class="return">
      <div class="search-box">
        <input type="text" class="search-msg">
        <div class="search-img"></div>
      </div>
      <div class="search-place">
        <div class="place-icon"></div>
        <div class="place-name">马尼拉</div>
      </div>
    </div>
    <NestSort/>
    <NestRentRow class="list-top"></NestRentRow>
  </div>
</template>

<script>
  import NestRentRow from '../components/commons/NestRentRow'
  import NestSort from '../components/commons/NestSort'
  export default {
    data() {
      return {
        locationShow: false,
        typeShow: false,
        isModalFull: true,
        locationChecked: ['马卡提(Makati)', 'BGC(BGC, Taguig)'],
        locationOptions: [{
          label: '马卡提(Makati)',
          value: '马卡提(Makati)'
        }, {
          label: '帕赛(Pasay)',
          value: '帕赛(Pasay)'
        }, {
          label: '马尼拉市(City of Manila)',
          value: '马尼拉市(City of Manila)'
        }, {
          label: '曼达卢永(Mandaluyong)',
          value: '曼达卢永(Mandaluyong)'
        }, {
          label: '奎松(Quezon)',
          value: '奎松(Quezon)'
        }, {
          label: 'BGC(BGC, Taguig)',
          value: 'BGC(BGC, Taguig)'
        }, {
          label: '帕西市(Pasig)',
          value: '帕西市(Pasig)'
        }],
        typeChecked: ['其他'],
        typeOptions: [{
          label: '一居室',
          value: '一居室'
        }, {
          label: '二居室',
          value: '二居室'
        }, {
          label: '三居室',
          value: '三居室'
        }, {
          label: '其他',
          value: '其他'
        }]
      }
    },
    methods: {
      openType() {
        this.typeShow = true;
      },
      openLocation() {
        this.locationShow = true;
      },
      locationConfirm() {
        console.log(this.locationChecked);
        this.locationShow = false;
      },
      typeConfirm() {
        console.log(this.typeChecked);
        this.typeShow = false;
      },
      locationClear () {
        this.locationChecked = null
      },
      typeClear() {
        this.typeChecked = null
      }
    },
    components: {
      NestRentRow,
      NestSort
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  input {
    background: none;
    outline: none;
    border: 0px;
    caret-color: #0f9183;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  @mixin rowcenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lease-list {
    box-sizing: border-box;
    width: 100%;
    padding-top: 0.2rem;
    .search-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .return{
        margin-left: 0.28rem;
        width: 0.42rem;
        height: 0.32rem;
      }
      .search-box {
        position: relative;
        width: 4.14rem;
        height: 0.8rem;
      }
      .search-msg {
        box-sizing: border-box;
        padding-left: 0.64rem;
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid #e8e8ea;
        border-radius: 0.1rem;
        box-shadow: 0px 0px 0.2rem rgba(176, 183, 187, 0.4);
      }
      .search-img {
        position: absolute;
        top: 0.25rem;
        left: 0.2rem;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../assets/images/search-img.png") no-repeat;
        background-size: 100% 100%;
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
        margin-right: 0.28rem;
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
    .list-top{
      margin-top: 0.7rem;
    }
  }
</style>
