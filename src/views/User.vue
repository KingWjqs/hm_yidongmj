<template>
  <div class="user-page">
    <div class="user">
      <img :src="avatar" alt="" />
      <h3>{{ username }}</h3>
    </div>
    <van-grid clickable :column-num="3" :border="false">
      <van-grid-item icon="clock-o" text="历史记录" to="/" />
      <van-grid-item icon="bookmark-o" text="我的收藏" to="/collect" />
      <van-grid-item icon="thumb-circle-o" text="我的点赞" to="/like" />
    </van-grid>

    <van-cell-group class="mt20">
      <van-cell title="推荐分享" is-link />
      <van-cell title="意见反馈" is-link />
      <van-cell title="关于我们" is-link />
      <van-cell @click="logout" title="退出登录" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { usrInfoAPI } from '@/api/user'
import { deltoken } from '@/utils/storange'
export default {
  name: 'UserPage',
  data () {
    return {
      avatar: '',
      username: ''
    }
  },
  async created () {
    const res = await usrInfoAPI()
    this.avatar = res.data.avatar
    this.username = res.data.username
  },
  methods: {
    logout () {
      this.$dialog.confirm({
        title: '提示',
        message: '确认退出吗？'
      })
        .then(() => {
          deltoken()
          this.$toast.success('退出成功')
          this.$router.push('/login')
        })
        .catch(() => {
          this.$toast('取消退出')
        })
    }
  }
}
</script>

<style lang="less" scoped>
.user-page {
  padding: 0 10px;
  background: #f5f5f5;
  height: 100vh;
  .mt20 {
    margin-top: 20px;
  }
  .user {
    display: flex;
    padding: 20px 0;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
    }
    h3 {
      margin: 0;
      padding-left: 20px;
      font-size: 18px;
    }
  }
}
</style>
