<template>
  <div class="nest-check">
    <div class="check-row" v-for="(num, index) in Math.ceil(options.length / countInRow)">
      <label class="nest-checkbox" v-for="item in optionsInLine(index)">
        <input type="checkbox" class="nest-checkbox-input"/>
        <span class="nest-checkbox-core">{{ item }}</span>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nest-check",
    props: {
      countInRow: {
        type: Number,
        default: 2
      },
      size: {
        type: String,
        default: 'large'
      },
      options: {
        type: Array,
        default: []
      }
    },
    methods: {
      optionsInLine (rowIndex) {
        return this.options.filter((item, index) => {
          return index >= rowIndex * this.countInRow && index < (rowIndex + 1) * this.countInRow
        });
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .check-row {
    margin-bottom: .28rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .nest-checkbox {
    flex: 1;
    overflow: hidden;
    margin-right: .3rem;
    &.large {
      height: .6rem;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .nest-checkbox-input {
    display: none;
    &:checked {
      & + .nest-checkbox-core {
        color: #fff;
        background-color: #0f9183;
      }
    }
  }
  .nest-checkbox-core {
    padding: 0 .28rem;
    display: block;
    height: .6rem;
    line-height: .6rem;
    border-radius: .1rem;
    background-color: #f2f2f2;
    font-size: .28rem;
    color: #999;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
