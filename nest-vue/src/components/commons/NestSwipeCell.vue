<template>
  <div class="nest-swipe-cell">
    <div class="swipe-wrapper"
         :class="transitionClass"
         :style="{ transform: 'translate3d(' + offsetX + 'px,0,0)' }"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
         @transitionend="removeTransition">
      <slot name="content"></slot>
    </div>
    <div class="item-control" ref="control">
      <slot name="controls" ref="controlBar"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nest-swipe-cell",
    data() {
      return {
        transitionClass: '',
        startPos: 0,
        offsetX: 0,
        controlWidth: 0,
        distance: 0
      }
    },
    methods: {
      handleTouchStart(event) {
        this.startPos = event.touches[0].clientX; // 手指触点X位置
        this.controlWidth = this.$refs.control.offsetWidth; // 操作按钮栏宽度
      },
      handleTouchMove(event) {
        let currentPos = event.touches[0].clientX;
        this.offsetX = (currentPos - this.startPos) + this.distance; // 移动位置
      },
      handleTouchEnd() {
        this.transitionClass = 'release';
        let cond1 = this.offsetX,
          cond2 = 0 - this.controlWidth;
        if (cond1 < cond2 || cond1 < cond2 / 2) {
          this.offsetX = -this.controlWidth;
        } else if (cond1 > 0 || cond1 >= cond2 / 2) {
          this.offsetX = 0;
        }
        this.distance = this.offsetX;
      },
      removeTransition() {
        this.transitionClass = '';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nest-swipe-cell, .swipe-wrapper {
    position: relative;
  }
  .swipe-wrapper {
    position: relative;
    z-index: 2;
    background-color: #fff;
    &.release {
      transition: transform .3s ease-out;
    }
  }
  .item-control {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    .follow {
      width: 1.2rem;
      height: .87rem;
      background: rgba(15,145,131,.1) url('../../assets/images/heart.png') no-repeat center center;
      background-size: .36rem .32rem;
    }
    .share {
      width: 1.2rem;
      height: .87rem;
      background: rgba(15,145,131,.1) url('../../assets/images/share.png') no-repeat center center;
      background-size: .3rem .3rem;
    }
  }
</style>
