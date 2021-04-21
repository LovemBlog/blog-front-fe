<template>
  <div class="layout">
    <v-header />
    <Nuxt class="page-cont" />
    <v-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VHeader from '../components/layout/default-header.vue'
import VFooter from '../components/layout/default-footer.vue'

@Component({
  components: {
    VHeader,
    VFooter
  }
})
export default class Layout extends Vue {
  
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 14px;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
