<template>
  <div class="home">
    <nest-header header-type="home"></nest-header>
    <div class="todotype">
      <div class="todo">
        <div class="todo-img"></div>
        <div class="name">发布房源</div>
      </div>
      <div class="todo">
        <div class="todo-img"></div>
        <div class="name">租房</div>
      </div>
      <div class="todo">
        <div class="todo-img"></div>
        <div class="name">二手房</div>
      </div>
      <div class="todo">
        <div class="todo-img"></div>
        <div class="name">新房</div>
      </div>
      <div class="todo">
        <div class="todo-img"></div>
        <div class="name">车位</div>
      </div>
    </div>
    <div class="bedrooms">
      <div class="bedrooms-wrap">
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
    </div>
    <div class="bedrooms budget">
      <div class="bedrooms-wrap">
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
    </div>
    <div class="recommend">
      <div class="left">为你推荐</div>
      <div class="right">
        <div class="lease" :class="{on: curindex == i }" v-for="(lease ,i) in leaseArr" :key="i" @click="leaseChange(i)">出租</div>
      </div>
    </div>
    <NestListView double/>
  </div>
</template>

<script>
  export default {
    props:{
      leaseArr:{
        type:Array,
        default: function () {
          return ['出租','销售'];
        }
      }
    },
    data() {
      return {
        options: [
          {
            val: '二手房',
            id: 'second'
          },
          {
            val: '租房',
            id: 'rent'
          }
        ],
        curindex:0
      }
    },
    methods:{
      leaseChange(i){
        this.curindex = i;
      }
    },
    computed: {
      selectedVal() {
        return this.options[0].val
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
    /*overflow: hidden;*/
    padding-top: 0.2rem;
    .todotype {
      margin-left: 0.28rem;
      padding-right: 0.28rem;
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
          border-radius: 50%;
          background-color: red;
          background-repeat: no-repeat;
          background-size: 100% 100%;
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
      .bedrooms-wrap {
        display: flex;
      }
      .bedroom {
        flex-shrink: 0;
        margin-right: 0.1rem;
        display: flex;
        flex-direction: column;
        width: 2.8rem;
        height: 2rem;
        background: #f5f5f7;
        border-radius: 0.1rem;
        &:first-child {
          margin-left: 0.28rem;
        }
        &:last-child {
          margin-right: 0.28rem;
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
