import request from './request'

export function getTestApi(params: { hash: string }) {
  const res = request({
    url: '/test',
    method: 'get',
    params
  })
}