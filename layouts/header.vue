<!--
 * @Date: 2021-03-11 01:04:07
 * @Author: Leo
 * @LastEditors: Leo
 * @LastEditTime: 2021-03-11 02:11:15
 * @Description: Do not edit
 * @FilePath: \toolkitg:\workspace-self\blog-front-fe\layouts\header.vue
-->
<template>
  <header class="header">
    <div class="content header-cont">
      <div class="logo-box">
        <!-- <img src="/static/images/logo.png" alt="" class="logo"> -->
        <div class="logo-text">进击的学霸的博客</div>
      </div>
      <nav class="nav-list">
        <div class="nav-item">
          <nuxt-link to="/" tag="div" class="nav">首页</nuxt-link>
        </div>
        <div class="nav-item">
          <nuxt-link to="/about" tag="div" class="nav">关于</nuxt-link>
        </div>
        <div class="nav-item">
          <nuxt-link to="/site-log" tag="div" class="nav">建站日志</nuxt-link>
        </div>
        <div class="nav-item">
          <nuxt-link to="/friends" tag="div" class="nav">友情链接</nuxt-link>
        </div>
        <div class="nav-item">
          <nuxt-link to="/sub-bangumi" tag="div" class="nav">B站追番列表</nuxt-link>
        </div>
        <div class="nav-item">
          <div class="nav">
            <a href="//code-fe.lovem.fun" target="_blank">前端资源</a>
          </div>
        </div>
        <div class="nav-item">
          <div class="nav">
            <a href="//blog.lovem.fun" target="_blank">Blog</a>
          </div>
        </div>
        <div class="nav-item">
          <div class="nav">
            <a href="//lovem.fun" target="_blank">站点</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class VFooter extends Vue {}
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $header-height;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
    z-index: $header-zindex;
    background-color: #fff;
    .header-cont {
      display: flex;
      padding-right: 60px;
      justify-content: space-between;
    }
    .logo-box {
      display: flex;
      align-items: center;
      color: $ft-color-title;
      .logo {
        width: 36px;
        height: 36px;
        margin-right: 10px;
      }
      .logo-text {
        font-size: 18px;
        font-weight: 500;
      }
    }
    .nav-list {
      display: flex;
      .nav-item {
        height: $header-height;
        margin-right: 30px;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        .nav {
          position: relative;
          height: $header-height;
          line-height: $header-height;
          padding: 0 10px;
          font-size: 16px;
          &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            width: 0;
            background-color: $theme-color;
            transition: width .3s;
          }
          &.nuxt-link-exact-active {
            color: $theme-color;
            &:after {
              width: 100%;
            }
          }
        }
        &:hover {
          .nav {
            color: $theme-color;
            &:after {
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>
