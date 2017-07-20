<template>
  <div class="area-picker">
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
  </div>
</template>
<script>
  import {
    // briefforecast3days,
    area
  } from '@/services/weatherData'
  export default {
    data() {
      return {
        slots: [{
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }, {
          divider: true,
          content: '-',
          className: 'slot4'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot5',
          textAlign: 'left'
        }]
      }
    },
    async created() {
      let {
        data
      } = await area();
      //   获取所有的省
      for (let item in data) {
        if (item.parentCode === '0') {}
      }
      console.log('briefforecast3days11111', data);
    },
    mounted() {
      // https://h5tq.moji.com/tianqi/assets/images/weather/w1.png
    },
    methods: {
      onValuesChange(picker, values) {
        console.log(picker, values);
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  .area-picker {
    height: 100%;
    width: 100%;
  }

</style>
