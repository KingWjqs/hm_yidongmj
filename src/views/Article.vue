<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a href="javascript:;" @click="activeIndex = 0" :class="{active: activeIndex === 0}">推荐</a>
      <a href="javascript:;" @click="activeIndex = 1" :class="{active: activeIndex === 1}">最新</a>
      <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
    </nav>
    <keep-alive>
      <van-list
        @load="onload"
        v-model="loading"
        :finished="finished"
        finished-text="到底了"
      >
        <article-item
          @click.native="getarticleiteminfo(ele.id)"
          v-for="ele in list"
          :key="ele.id"
          :ele="ele"
        />
      </van-list>
    </keep-alive>
  </div>
</template>

<script>
import { articleitem } from '@/api/article'
export default {
  name: 'ArticlePage',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      activeIndex: 0,
      obj: {
        current: 1,
        sorter: 'weight_desc'
      }
    }
  },
  methods: {
    getarticleiteminfo (id) {
      this.$router.push(`/detail/${id}`)
    },
    async onload () {
      const d = await articleitem(this.obj)
      this.list.push(...d.data.rows)
      this.obj.current++
      this.loading = false
      if (d.data.total === this.list.length) {
        this.finished = true
      }
    }
  },
  watch: {
    activeIndex (newval) {
      this.obj.sorter = this.activeIndex === 0 ? 'weight_desc' : null
      this.list = []
      this.obj.current = 1
      this.loading = true
      this.onload()
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
