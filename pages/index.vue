<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{ name }}
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getTestApi } from '@/api'
import axios from 'axios'

export default Vue.extend({
  // async asyncData ({ $axios }) {
  //   // called every time before loading the component
  //   const test = await $axios.$get('http://127.0.0.1:3006/test?hash=123')
  //   console.log('test', test)
  //   return { name: 'World' }
  // },
})
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
