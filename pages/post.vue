<template>
  <section>template</section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// 通过 namespace 便捷引用 store
// import { namespace } from 'vuex-class';
// const SMatedStore = namespace('AutoMatedTests');

// 注册组件
// @Component({
//    components: { xxComponent }
// })
@Component
export default class XXX extends Vue {
  // prop 数据
  // @Prop({ type: Boolean, default: false }) loading!: boolean;

  // data 数据
  uid: string | number = '';
  flag = false;

  // 计算属性
  get isTagSelected() {
    return this.uid === '123';
  }

  // 将 store 相关挂载到当前实例
  // @SMatedStore.State('totalInfo') totalInfo!: BasicObject;
  // @SMatedStore.Getter('isLogSelected') isLogSelected!: boolean;
  // @SMatedStore.Mutation('setMonitorStatus') setMonitorStatus!: Function;

  // 生命周期钩子
  created() {}
}
</script>

<style lang="less" scoped>

</style>
