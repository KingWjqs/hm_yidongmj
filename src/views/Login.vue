<template>
  <div class="loginbox">
    <van-nav-bar title="面经登录" />
    <van-form @submit="onSubmit" :show-error="false">
      <van-field
        v-model="username"
        name="username"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^[a-zA-Z0-9]{5,10}$/, message: '用户名格式错误' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^[a-zA-Z0-9]{6,15}$/, message: '密码格式错误' },
        ]"
      />
      <div style="margin: 16px">
        <van-button square block color="orange" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>

    <router-link class="link" to="/register">没有账号？点击注册</router-link>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
import { Toast } from 'vant'
import { settoken } from '@/utils/storange'
export default {
  name: 'MyLogin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const res = await login(values)
      Toast.success({
        message: '登录成功',
        forbidClick: true
      })
      settoken(res.data.token)
      setTimeout(() => {
        this.$router.push('/')
      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
