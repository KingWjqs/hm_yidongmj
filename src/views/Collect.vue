<template>
  <div class="collect-page">
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
  </div>
</template>

<script>
import { likearticleitem } from '@/api/article'
export default {
  name: 'CollectPage',
  data () {
    return {
      obj1: {
        optType: 2,
        page: 1
      },
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    getarticleiteminfo (id) {
      this.$router.push(`/detail/${id}`)
    },
    async onload () {
      const d = await likearticleitem(this.obj1)
      this.list.push(...d.data.rows)
      this.obj1.page++
      this.loading = false
      if (d.data.total === this.list.length) {
        this.finished = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
