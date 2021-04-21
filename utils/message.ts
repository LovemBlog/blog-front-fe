import { Message, Notification, MessageBox } from 'element-ui'
import { debounce } from 'lodash'

// 正常显示
export function info(content: string) {
  Message({
    showClose: true,
    message: content,
    type: 'info'
  })
}

// 成功提示
export function success(content: string) {
  Message({
    showClose: true,
    message: content,
    type: 'success'
  })
}

// 警告提示
export function warning(content: string) {
  Message({
    showClose: true,
    message: content,
    type: 'warning'
  })
}

// 错误提示，duration 设为 0 则不会自动关闭
// OPTIMIZE: 优化错误提示弹框同一时间多次出现问题，现在仅立即执行一次
export const error = debounce(function (content) {
  Message({
    showClose: true,
    message: content,
    type: 'error'
  })
}, 200, { leading: true, trailing: false })

// 正常通知
export function infoNotify(title: string, content: string) {
  Notification({
    title: title,
    message: content
  })
}

// 成功通知
export function successNotify(title: string, content: string) {
  Notification({
    title: title,
    message: content,
    type: 'success'
  })
}

// 错误通知
export function errorNotify(title: string, content: string) {
  Notification({
    title: title,
    message: content,
    type: 'error'
  })
}

// 警告通知
export function warningNotify(title: string, content: string) {
  Notification({
    title: title,
    message: content,
    type: 'warning'
  })
}

// 操作确认
// title: 标题；
// content: 提示内容；
// callbackFunc: 回调函数；
// infoContent: 取消时的提示
export function confirm(title = '', content = '', callbackFunc: Function) {
  MessageBox.confirm(content, title, {
    showCancelButton: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    if (typeof callbackFunc === 'function') {
      callbackFunc()
    }
  }).catch(() => {})
}

export default {
  success,
  warning,
  error,
  info,
  successNotify,
  errorNotify,
  warningNotify,
  infoNotify,
  confirm
}
