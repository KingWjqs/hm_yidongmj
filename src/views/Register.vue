<template>
  <div class="loginbox">
    <van-nav-bar title="面经注册" />
    <van-form @submit="onSubmit" :show-error="false">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
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
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^[a-zA-Z0-9]{6,15}$/, message: '密码格式错误' },
        ]"
      />
      <div style="margin: 16px">
        <van-button square block color="skyblue" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>

    <router-link class="link" to="/login">已有账号？点击登录</router-link>
  </div>
</template>

<script>
import { register } from '@/api/user.js'
import { Toast } from 'vant'
export default {
  name: 'MyRegister',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      await register(values)
      // this.$toast.success('注册成功')
      Toast.success({
        message: '注册成功',
        forbidClick: true
      })
      setTimeout(() => {
        this.$router.push('/login')
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
