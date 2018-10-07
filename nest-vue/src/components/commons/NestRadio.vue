<template>
  <div class="nest-radio" :class="size">
    <div class="radio-row" v-for="(rowNum, rowIndex) in Math.ceil(options.length / countInRow)">
      <div class="radio-cell" v-for="(cellNum, cellIndex) in countInRow">
        <label class="nest-radio" v-if="optionsInCell(rowIndex, cellIndex)">
          <input type="radio" class="nest-radio-input"
                 v-model="currentValue"
                 :value="optionsInCell(rowIndex, cellIndex).value || optionsInCell(rowIndex, cellIndex)"
                 @change="$emit('input', $event.target.value)"
          />
          <span class="nest-radio-core">{{ optionsInCell(rowIndex, cellIndex).label || optionsInCell(rowIndex, cellIndex) }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nest-radio",
    props: {
      value: String,
      countInRow: {
        type: Number,
        default: 2
      },
      size: {
        type: String,
        default: 'large'
      },
      options: Array
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    watch: {
      value(val) {
        this.currentValue = val;
      }
    },
    methods: {
      optionsInCell(rowIndex, cellIndex) {
        let optionsIndex = rowIndex * this.countInRow + cellIndex;
        return this.options[optionsIndex];
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .radio-row {
    margin-bottom: .28rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .radio-cell {
    flex: 1;
    overflow: hidden;
    margin-right: .3rem;
    &:last-child {
      margin-right: 0;
    }
  }

  .nest-radio {
    display: block;
  }

  .nest-radio-input {
    display: none;
    &:checked {
      & + .nest-radio-core {
        color: #fff;
        background-color: #0f9183;
      }
    }
  }

  .nest-radio-core {
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

  .small {
    .radio-row {
      margin-bottom: .2rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .radio-cell {
      margin-right: .2rem;
      &:last-child {
        margin-right: 0;
      }
    }
    .nest-radio-core {
      height: .48rem;
      line-height: .48rem;
      font-size: .24rem;
    }
  }
</style>
