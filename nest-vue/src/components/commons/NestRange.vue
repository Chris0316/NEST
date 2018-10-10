<template>
  <div class="nest-range" ref="nestRange">
    <div class="range start"
         :style="{left: rangeStartPos + '%'}"
         @touchstart="rangeTouchStart"
         @touchmove="rangeTouchMove"
         @touchend="rangeTouchEnd">
    </div>
    <div class="range-bar" :style="barStyle"></div>
    <div class="range end"
         :style="{left: rangeEndPos + '%'}"
         @touchstart="rangeTouchStart"
         @touchmove="rangeTouchMove"
         @touchend="rangeTouchEnd">
    </div>
  </div>
</template>

<script>
  export default {
    name: "nest-range",
    data () {
      return {
        status: false,
        startX: 0,
        rangeStartPos: 0,
        rangeEndPos: 100,
        rangesOldPos: [0, 100]
      }
    },
    computed: {
      slideWidth() {
        return this.$refs.nestRange.offsetWidth;
      },
      barStyle () {
        const style = {
          left: this.rangeStartPos + '%',
          width: (this.rangeEndPos - this.rangeStartPos) + '%'
        };
        return style;
      }
    },
    methods: {
      rangeTouchStart(evt) {
        this.startX = evt.touches[0].clientX;
      },
      rangeTouchMove(evt) {
        let isStart = evt.target.className.indexOf('start') > -1;
        let currentX = evt.touches[0].clientX, // 移动时当前X坐标
            offset = currentX - this.startX; // 偏移量 = 移动时X坐标 - 初始X坐标
        if (isStart) {
          this.rangeStartPos = this.rangesOldPos[0] + (offset / this.slideWidth * 100);
          if (this.rangeStartPos < 0) {
            this.rangeStartPos = 0;
          }
          if (this.rangeStartPos > 100) {
            this.rangeStartPos = 100
          }
          if (this.rangeStartPos > this.rangeEndPos) {
            this.rangeEndPos = this.rangeStartPos;
          }
        } else {
          this.rangeEndPos = this.rangesOldPos[1] + (offset / this.slideWidth * 100);
          if (this.rangeEndPos < 0) {
            this.rangeEndPos = 0;
          }
          if (this.rangeEndPos > 100) {
            this.rangeEndPos = 100;
          }
          if (this.rangeEndPos < this.rangeStartPos) {
            this.rangeStartPos = this.rangeEndPos;
          }
        }
      },
      rangeTouchEnd() {
        this.rangesOldPos = [this.rangeStartPos, this.rangeEndPos];
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .nest-range {
    position: relative;
    height: .1rem;
    border-radius: .1rem;
    background-color: rgba(15,145,131,.2);
  }
  .range-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: .1rem;
    background-color: #0f9183;
    z-index: 1;
  }
  .range {
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
