/**
 * 此为通用的全局类型定义（全局模块式写法）
 */
import Vue, { VNode } from 'vue';

// 类型、变量与函数部分
declare global {
  type BasicType = string | number| boolean
}

// 通用接口部分
declare global {
  interface Window {
    [propName: string]: any
  }

  /**
   * 通用模块
   */
  // 对于不定参数的 object 类型的最简单的定义，视情况 extend 此基础类型
  interface BasicObject {
    [propName: string]: any,
  }

  // () => {} 函数的定义
  interface Noop {
    (...args: Array<any>): void,
  }

  // checkState 获取的 Axios 返回的数据，默认仅有此三项
  interface BasicAxiosResult {
    errNo: number,
    errStr: string,
    data: BasicObject,
  }

  /**
   * Vuex 模块
   */
  // 范形 RootState 的接口
  interface RootState { }

  // 范形各 State 部分的基础接口
  interface StateBasic extends BasicObject { }

}

// 命名空间部分
declare global {
  // .tsx 文件的 jsx 语法支持
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode { }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: any,
    }
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $zs: any
  }
}
