<!--
 * @Date: 2021-03-11 01:04:14
 * @Author: Leo
 * @LastEditors: Leo
 * @LastEditTime: 2021-03-11 02:05:12
 * @Description: Do not edit
 * @FilePath: \toolkitg:\workspace-self\blog-front-fe\layouts\footer.vue
-->
<template>
  <footer class="footer">
    <div class="content copyright">
      Copyright © {{ new Date().getFullYear() }} 鲁ICP备18003483号
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class VFooter extends Vue {}
</script>

<style lang="scss" scoped>
  .footer {
    height: $footer-height;
    background-color: #2c3e50;
    .copyright {
      height: $footer-height;
      line-height: $footer-height;
      text-align: center;
      color: #fff;
    }
  }
</style>
