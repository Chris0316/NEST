<template>
  <div class="nest-check">
    <div class="check-row" v-for="(rowNum, rowIndex) in Math.ceil(options.length / countInRow)">
      <div class="check-cell" v-for="(cellNum, cellIndex) in countInRow">
        <label class="nest-checkbox" v-if="optionsInCell(rowIndex, cellIndex)">
          <input type="checkbox" class="nest-checkbox-input"
                 v-model="currentValue"
                 :value="optionsInCell(rowIndex, cellIndex).value || optionsInCell(rowIndex, cellIndex)"
                 @change="optionCheck"/>
          <span class="nest-checkbox-core">{{ optionsInCell(rowIndex, cellIndex).label || optionsInCell(rowIndex, cellIndex) }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nest-check",
    props: {
      value: Array,
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
    methods: {
      optionsInCell(rowIndex, cellIndex) {
        let optionsIndex = rowIndex * this.countInRow + cellIndex;
        return this.options[optionsIndex];
      },
      optionCheck() {
        this.$emit('input', this.currentValue);
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

  .check-cell {
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

  .nest-checkbox {
    display: block;
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
