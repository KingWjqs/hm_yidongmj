<template>
  <div class="loginbox">
    <van-nav-bar title="面经登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^[a-zA-Z0-9]{5,10}$/, message: '用户名格式错误'}
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^[a-zA-Z0-9]{6,15}$/, message: '密码格式错误'}
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
export default {
  name: 'MyLogin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
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
