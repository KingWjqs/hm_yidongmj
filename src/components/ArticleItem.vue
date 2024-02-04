<template>
  <div>
    <van-cell class="article-item">
      <div class="head">
        <img :src="ele.avatar" alt="" />
        <div class="con">
          <p class="title van-ellipsis">{{ ele.stem }}</p>
          <p class="other">{{ ele.creator }} | {{ ele.createdAt }}</p>
        </div>
      </div>
      <div class="body van-multi-ellipsis--l2">{{removeHTMLTags(ele.content)}}</div>
      <div class="foot">点赞 {{ ele.likeCount }} | 浏览 {{ ele.views }}</div>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    ele: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeHTMLTags (str) {
      return str.replace(/<[^>]*>/g, '')
    }
  }
}
</script>

<style lang='less' scoped>
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
