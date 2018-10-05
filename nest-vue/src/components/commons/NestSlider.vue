<template>
  <div class="nest-slider">
    <div class="slide start"
         :style="{left: slideStartPos + '%'}"
         @touchstart="slideTouchStart"
         @touchmove="slideTouchMove"
         @touchend="slideTouchEnd">
    </div>
    <div class="slider-bar" :style="barStyle"></div>
    <div class="slide end"
         :style="{left: slideEndPos + '%'}"
         @touchstart="slideTouchStart"
         @touchmove="slideTouchMove"
         @touchend="slideTouchEnd">
    </div>
  </div>
</template>

<script>
  export default {
    name: "nest-slider",
    data () {
      return {
        status: false,
        startX: 0,
        slideStartPos: 0,
        slideEndPos: 100,
        slidesOldPos: [0, 100]
      }
    },
    computed: {
      slideWidth() {
        return document.querySelector('.nest-slider').offsetWidth;
      },
      barStyle () {
        const style = {
          left: this.slideStartPos + '%',
          width: (this.slideEndPos - this.slideStartPos) + '%'
        };
        return style;
      }
    },
    methods: {
      slideTouchStart(evt) {
        this.startX = evt.touches[0].clientX;
      },
      slideTouchMove(evt) {
        let isStart = evt.target.className.indexOf('start') > -1;
        let currentX = evt.touches[0].clientX, // 移动时当前X坐标
            offset = currentX - this.startX; // 偏移量 = 移动时X坐标 - 初始X坐标
        if (isStart) {
          this.slideStartPos = this.slidesOldPos[0] + (offset / this.slideWidth * 100);
          if (this.slideStartPos < 0) {
            this.slideStartPos = 0;
          }
          if (this.slideStartPos > 100) {
            this.slideStartPos = 100
          }
          if (this.slideStartPos > this.slideEndPos) {
            this.slideEndPos = this.slideStartPos;
          }
        } else {
          this.slideEndPos = this.slidesOldPos[1] + (offset / this.slideWidth * 100);
          if (this.slideEndPos < 0) {
            this.slideEndPos = 0;
          }
          if (this.slideEndPos > 100) {
            this.slideEndPos = 100;
          }
          if (this.slideEndPos < this.slideStartPos) {
            this.slideStartPos = this.slideEndPos;
          }
        }
      },
      slideTouchEnd() {
        this.slidesOldPos = [this.slideStartPos, this.slideEndPos];
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .nest-slider {
    position: relative;
    height: .1rem;
    border-radius: .1rem;
    background-color: rgba(15,145,131,.2);
  }
  .slider-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: .1rem;
    background-color: #0f9183;
    z-index: 1;
  }
  .slide {
    position: absolute;
    width: .3rem;
    height: .3rem;
    border-radius: .3rem;
    border: .02rem solid #0f9183;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 2;
    top: -.1rem;
    transform: translateX(-50%);
  }
</style>
