<template>
  <div class="nest-upload" v-if="finalMediaArr.length > 1">
    <div class="upload-row" v-for="(rowNum, rowIndex) in Math.ceil(finalMediaArr.length / 4)">
      <div class="upload-cell" v-for="(cellNum, cellIndex) in 4">
        <label class="upload-item" v-if="mediaInCell(rowIndex, cellIndex) === 'control'">
          添加
          <input type="file" accept="image/*" @change="selectMedia" multiple class="hidden" />
        </label>
        <div class="upload-item img"
             v-else-if="mediaInCell(rowIndex, cellIndex)"
             :style="{ backgroundImage: 'url(' + mediaInCell(rowIndex, cellIndex) + ')' }">
        </div>
      </div>
    </div>
  </div>
  <label class="nest-upload empty" v-else>
    <!--添加图片/视频, video/*-->
    添加图片
    <input type="file" accept="image/*" @change="selectMedia" multiple class="hidden" />
  </label>
</template>

<script>
  import canvasResize from 'canvas-resize';

  export default {
    name: "nest-upload",
    props: {
      mediaSrcArr: {
        type: Array,
        default: () => {
          return [];
        }
      }
    },
    computed: {
      finalMediaArr() {
        if (this.mediaSrcArr.indexOf('control') === -1)
          this.mediaSrcArr.push('control');
        return this.mediaSrcArr;
      }
    },
    methods: {
      mediaInCell(rowIndex, cellIndex) {
        let mediaIndex = rowIndex * 4 + cellIndex;
        return this.finalMediaArr[mediaIndex];
      },
      selectMedia(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        Object.keys(files).forEach((key) => {
          let file = files[key];
          canvasResize(file, {
            crop: false,
            quality: 0.9,
            rotate: 0,
            callback: baseStr => {
              this.finalMediaArr.unshift(baseStr);
            }
          });
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nest-upload {
    padding: .3rem .28rem;
    background-color: #f1f1f1;
    &.empty {
      display: block;
      padding: 0;
      height: 2rem;
      line-height: 2rem;
      font-size: .28rem;
      color: #333;
      text-align: center;
      box-sizing: border-box;
    }
  }
  .upload-row {
    margin-top: .4rem;
    display: flex;
    justify-content: space-between;
    &:first-child {
      margin-top: 0;
    }
  }
  .upload-cell {
    width: 1.4rem;
    height: 1.4rem;
  }
  .upload-item {
    padding-top: .8rem;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #dadada;
    font-size: .28rem;
    color: #b3b3b3;
    text-align: center;
    line-height: 1;
    box-sizing: border-box;
    &.img {
      position: relative;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }
</style>
