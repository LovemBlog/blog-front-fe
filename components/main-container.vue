<template>
  <section class="main-container">
    <slot v-if="noLeft" />
    <template v-else>
      <div class="main-left">
        <slot />
      </div>
      <div class="main-right">
        <div class="basic-box-style">最近文章</div>
        <div class="basic-box-style">最近评论</div>
      </div>
    </template>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
// import { namespace } from 'vuex-class'
// const SMatedStore = namespace('AutoMatedTests')

// @Component({
//    components: { xxComponent }
// })
@Component
export default class XXX extends Vue {
  @Prop({ type: Boolean, default: false }) noLeft!: boolean

  uid: string | number = ''
  flag = false

  get isTagSelected() {
    return this.uid === '123'
  }

  // @SMatedStore.State('totalInfo') totalInfo!: BasicObject
  // @SMatedStore.Getter('isLogSelected') isLogSelected!: boolean
  // @SMatedStore.Mutation('setMonitorStatus') setMonitorStatus!: Function

  created() {}
}
</script>

<style lang="less" scoped>

</style>
