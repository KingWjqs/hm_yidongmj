<template>
  <div class="detail-page">
    <van-nav-bar
      left-text="返回"
      @click-left="$router.back()"
      fixed
      title="面经详情"
    />
    <header class="header">
      <h1>{{ detail.stem }}</h1>
      <p>
        {{ detail.createAt }} | {{ detail.views }} 浏览量 |
        {{ detail.likeCount }} 点赞数
      </p>
      <p>
        <img :src="detail.avater" alt="" />
        <span>{{ detail.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="detail.content"></main>
    <div class="opt">
      <van-icon
        @click.native="addlikeorstar(1)"
        :class="{ active: like === 1 }"
        name="like-o"
      />
      <van-icon
        @click.native="addlikeorstar(2)"
        :class="{ active: star === 1 }"
        name="star-o"
      />
    </div>
  </div>
</template>

<script>
import { articleitemadd, articleitemdetail } from '@/api/article'
export default {
  name: 'MyDetail',
  data () {
    return {
      detail: {},
      like: 0,
      star: 0
    }
  },
  methods: {
    async addlikeorstar (num) {
      await articleitemadd({
        id: this.$route.params.id,
        optType: num
      })
      if (num === 1) this.detail.likeFlag = this.detail.likeFlag === 0 ? 1 : 0
      if (num === 2) this.detail.collectFlag = this.detail.collectFlag === 0 ? 1 : 0
      this.star = this.detail.collectFlag
      this.like = this.detail.likeFlag
    }
  },
  async created () {
    const res = await articleitemdetail(this.$route.params.id)
    this.detail = res.data
    this.like = this.detail.likeFlag
    this.star = this.detail.collectFlag
  }
}
</script>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #fec635;
        color: #fff;
      }
    }
  }
}
</style>
