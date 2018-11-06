<template>
  <div class="nest-calendar">
    <div class="calendar-control border-bottom">
      <div class="control-group">
        <div class="cell left" @click="fullYear--;"></div>
        <div class="cell">{{ fullYear }}</div>
        <div class="cell right" @click="fullYear++;"></div>
      </div>
      <div class="control-group">
        <div class="cell left" @click="monthIndex === 0 ? monthIndex = 11 : monthIndex--"></div>
        <div class="cell">{{ monthIndex + 1 }}</div>
        <div class="cell right" @click="monthIndex === 11 ? monthIndex = 0 : monthIndex++"></div>
      </div>
    </div>
    <ul class="calendar-th border-bottom">
      <li class="calendar-cell">日</li>
      <li class="calendar-cell">一</li>
      <li class="calendar-cell">二</li>
      <li class="calendar-cell">三</li>
      <li class="calendar-cell">四</li>
      <li class="calendar-cell">五</li>
      <li class="calendar-cell">六</li>
    </ul>
    <ul class="calendar-tr">
      <li class="calendar-cell"
          :class="[{ 'disabled': item.monthType !== 'current' }, item.itemStyle]"
          v-for="item in options"
          @click="selectDate(item)">
        {{ item.date }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "nest-calendar",
    data() {
      return {
        fullYear: this.value.getFullYear(),
        monthIndex: this.value.getMonth(),
        options: [],
        startDate: '',
        endDate: ''
      }
    },
    props: {
      value: {
        type: Date,
        default: function () {
          return new Date();
        }
      }
    },
    created() {
      this.options = this.render()
    },
    computed: {
      currentMonthOfDays() {
        return this.daysInTargetMonth(this.fullYear, this.monthIndex);
      },
      prevMonthOfDays() {
        let year = this.fullYear;
        let monthIndex = this.monthIndex - 1;
        if (monthIndex < 0) {
          year--;
          monthIndex = 11;
        }
        return this.daysInTargetMonth(year, monthIndex);
      },
      targetDay() {
        return new Date(this.fullYear, this.monthIndex, 1).getDay();
      }
    },
    watch: {
      fullYear() {
        this.options = this.render();
      },
      monthIndex() {
        this.options = this.render();
      }
    },
    methods: {
      daysInTargetMonth(year, monthIndex) {
        let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          daysInMonth[1] = 29;
        }
        return daysInMonth[monthIndex];
      },
      render() {
        let daysArr = [],
          nextMonthDay = 0;
        for (let i = 1; i <= this.targetDay; i++) {
          daysArr.push({
            monthType: 'prev',
            itemStyle: '',
            date: this.prevMonthOfDays - this.targetDay + i
          });
        }
        for (let j = 1; j <= 42 - this.targetDay; j++) {
          if (j > this.currentMonthOfDays) {
            nextMonthDay++;
            daysArr.push({
              monthType: 'next',
              itemStyle: '',
              date: nextMonthDay
            });
          } else {
            daysArr.push({
              monthType: 'current',
              itemStyle: '',
              date: j
            });
          }
        }
        return daysArr;
      },
      selectDate(item) {
        item.itemStyle = 'active';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nest-calendar {
    padding-bottom: .4rem;
    .calendar-control {
      padding: 0 .4rem .3rem;
      display: flex;
      justify-content: space-between;
      .control-group {
        width: 2.2rem;
        display: flex;
        font-size: .28rem;
        color: #333;
      }
      .cell {
        flex: 1;
        text-align: center;
        &.left {
          background-color: #0f9183;
        }
        &.right {
          background-color: #0f9183;
        }
      }
    }
    .calendar-th, .calendar-tr {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
      font-size: .24rem;
      color: #333;
    }
    .calendar-th {
      .calendar-cell {
        margin-top: 0;
      }
    }
    .calendar-cell {
      margin: .2rem .19rem 0;
      flex: 0 0 .6rem;
      height: .6rem;
      line-height: .6rem;
      text-align: center;
      border-radius: .6rem;
      &.disabled {
        color: #b3b3b3;
      }
      &.active {
        background-color: #0f9183;
        color: #fff;
      }
    }
  }
</style>
