<template>
  <div class="nest-modal">
    <div class="modal-dialog">
      <div class="modal-header">{{ title }}</div>
      <a href="javascript:;" class="modal-clear" @click="$emit('modalClear')">清空</a>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button class="modal-btn" @click="$emit('modalConfirm')">{{ modalBtnTxt }}</button>
      </div>
    </div>
    <div class="modal-mask"></div>
  </div>
</template>

<script>
  export default {
    name: "nest-modal",
    props: {
      title: {
        type: String,
        default: '标题'
      },
      modalBtnTxt: {
        type: String,
        default: '确定'
      }
    },
    data() {
      return {
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .nest-modal {
    position: fixed;
    padding: 0 .28rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    z-index: 1001;
  }

  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(255, 255, 255, .8);
  }

  .modal-dialog {
    position: absolute;
    top: 1.45rem;
    width: 6.94rem;
    border-radius: .2rem;
    box-shadow: 0 .04rem .2rem rgba(182, 185, 186, .8);
    z-index: 2;
    background-color: #fff;
  }

  .modal-header {
    line-height: 1.1rem;
    height: 1.1rem;
    font-size: .32rem;
    color: #333333;
    text-align: center;
  }

  .modal-clear {
    position: absolute;
    top: .4rem;
    right: .4rem;
    color: #999;
    font-size: .28rem;
    line-height: 1;
  }

  .modal-body {
    padding: .2rem .4rem;
  }

  .modal-footer {
    padding: .4rem;
  }

  .modal-btn {
    display: block;
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    border: none;
    border-radius: .1rem;
    text-align: center;
    font-size: .3rem;
    color: #fff;
    background-color: #0f9183;
  }
</style>
