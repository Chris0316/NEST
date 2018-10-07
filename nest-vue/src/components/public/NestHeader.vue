<template>
  <div class="nest-header">
    <div class="search-wrap">
      <div class="back" v-if="headerType !== 'home'"></div>
      <div class="search-box">
        <nest-select/>
      </div>
      <div class="location">马尼拉</div>
    </div>
    <div class="control-wrap">
      <div class="control-btn" @click="locationShow = !locationShow">地点</div>
      <div class="control-btn" @click="typeShow = !typeShow">户型</div>
      <div class="control-btn" @click="conditionShow = !conditionShow" v-if="headerType !== 'home'">筛选</div>
      <div class="sort-btn" @click="sortShow = !sortShow" v-if="headerType !== 'home'"></div>
    </div>
    <!--@modalConfirm="locationConfirm" @modalClear="locationClear"-->
    <nest-modal title="地点" modal-confirm-txt="确定" @modalClose="locationShow = false" v-show="locationShow">
      <nest-check v-model="locationVal" :options="locationOpts"></nest-check>
    </nest-modal>
    <!--@modalConfirm="typeConfirm" @modalClear="typeClear"-->
    <nest-modal title="户型" modal-confirm-txt="立即发现惊喜房源" @modalClose="typeShow = false" v-show="typeShow">
      <nest-check v-model="typeVal" :options="typeOpts"></nest-check>
    </nest-modal>
    <nest-modal :is-full="true" :has-cancel="true" modal-cancel-txt="清空条件" @modalClose="conditionShow = false"
                v-show="conditionShow" v-if="headerType !== 'home'">
      <div class="conditions">
        <div class="condition">
          <div class="condition-title">租金</div>
          <nest-radio v-model="rental" :options="rentalOpts" size="small"></nest-radio>
          <div class="slider-val">0 - 不限</div>
          <div class="slider-container">
            <nest-slider></nest-slider>
          </div>
        </div>
        <div class="condition">
          <div class="condition-title">房型</div>
          <nest-radio v-model="rental" :options="rentalOpts" size="small"></nest-radio>
          <div class="slider-val">0 - 不限</div>
          <div class="slider-container">
            <nest-slider></nest-slider>
          </div>
        </div>
      </div>
    </nest-modal>
    <nest-modal title="排序" :has-clear="false" :has-footer="false" @modalClose="sortShow = false" v-show="sortShow"
                v-if="headerType !== 'home'">
      <nest-radio v-model="sortVal" :count-in-row="1" :options="sortOpts"></nest-radio>
    </nest-modal>
  </div>
</template>

<script>
  export default {
    name: "nest-header",
    props: {
      headerType: String
    },
    data() {
      return {
        locationShow: false,
        typeShow: false,
        conditionShow: false,
        sortShow: false,
        locationVal: [],
        locationOpts: [{
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
        typeVal: [],
        typeOpts: [{
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
        }],
        sortVal: '默认排序',
        sortOpts: [{
          label: '默认排序',
          value: '默认排序'
        }, {
          label: '均价由低到高',
          value: '均价由低到高'
        }, {
          label: '均价由高到低',
          value: '均价由高到低'
        }, {
          label: '开盘时间顺序',
          value: '开盘时间顺序'
        }, {
          label: '开盘时间倒序',
          value: '开盘时间倒序'
        }],
        rental: '',
        rentalOpts: [{
          label: '15000-30000',
          value: '15000-30000'
        }, {
          label: '30000-40000',
          value: '30000-40000'
        }, {
          label: '40000-50000',
          value: '40000-50000'
        }, {
          label: '50000以上',
          value: '50000以上'
        }]
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .nest-header {
    padding: .2rem .28rem 0;
  }

  .search-wrap {
    display: flex;
    align-items: center;
  }

  .back {
    width: .9rem;
    height: .8rem;
    background: url('../../assets/images/return-icon.png') no-repeat left center;
    background-size: .42rem .32rem;
  }

  .search-box {
    position: relative;
    flex: 1;
    height: .8rem;
    border: 1px solid #e8e8ea;
    border-radius: 0.1rem;
    box-shadow: 0px 0px 0.2rem rgba(176, 183, 187, 0.4);
    box-sizing: border-box;
    &:active {
      background-color: #e8e8ea;
    }
    &::before {
      position: absolute;
      content: "";
      top: .24rem;
      left: .24rem;
      width: .32rem;
      height: .32rem;
      background: url('../../assets/images/search-img.png') no-repeat;
      background-size: 100% 100%;
    }
  }

  .location {
    position: relative;
    padding-left: .88rem;
    width: 1.88rem;
    height: .8rem;
    line-height: .8rem;
    font-size: .28rem;
    color: #333;
    box-sizing: border-box;
    &::before {
      position: absolute;
      content: "";
      left: .48rem;
      top: .22rem;
      width: .26rem;
      height: .35rem;
      background: url('../../assets/images/position.png') no-repeat;
      background-size: 100% 100%;
    }
  }

  .control-wrap {
    position: relative;
    margin-top: .28rem;
    display: flex;
  }

  .control-btn {
    position: relative;
    margin-right: .28rem;
    padding: 0 .22rem;
    min-width: 1.2rem;
    max-width: 1.6rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    font-size: .28rem;
    color: #333;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: .1rem;
    &.active {
      color: #fff;
      background-color: #0f9183;
      &::after {
        display: none;
      }
    }
    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      border: 1px solid #b2b2b2;
      border-radius: .2rem;
      box-sizing: border-box;
      width: 200%;
      height: 200%;
      transform: scale(.5);
      transform-origin: left top;
    }
  }

  .sort-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.5rem;
    height: .6rem;
    background: url('../../assets/images/sort.png') no-repeat center center;
    background-size: .36rem .32rem;
  }

  .conditions {
    padding: .6rem .28rem 0;
  }

  .condition {
    margin-bottom: .6rem;
  }

  .condition-title {
    margin-bottom: .27rem;
    font-size: .32rem;
    color: #333;
    line-height: 1;
  }
  .slider-val {
    margin-top: .4rem;
    font-size: .24rem;
    color: #333;
    line-height: 1;
    text-align: center;
  }
  .slider-container {
    margin-top: .14rem;
    padding: 0 .3rem;
  }
</style>
