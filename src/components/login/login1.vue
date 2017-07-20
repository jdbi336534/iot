<template>
  <div class="loginbgk">
    <div class="login">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-button plain size="large" type="primary" @click="loginsys">plain</mt-button>
    </div>
  </div>
</template>
<script>
  import {
    briefforecast3days
  } from '@/services/weatherData'
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    created() {},
    mounted() {
      // https://h5tq.moji.com/tianqi/assets/images/weather/w1.png
    },
    methods: {
      async loginsys() {
        let data = await briefforecast3days({
          lat: '32.812036',
          lon: '106.969741'
        });
        console.log('briefforecast3days', data);
      }
    }
  }

</script>
<style lang="scss" scoped>
  .loginbgk {
    height: 100%;
    width: 100%;
    background: url(../../assets/img/bgk.jpeg) no-repeat;
    background-size: 100% 100%;
    .login {
      height: 100%;
      width: 98%;
      padding: 0 1%;  
      background: -webkit-linear-gradient(top, rgba(146, 135, 187, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
      background: linear-gradient(to bottom, rgba(146, 135, 187, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
      -webkit-transition: opacity 0.1s, -webkit-transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);
      transition: opacity 0.1s, transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
  }

</style>
