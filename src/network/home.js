import { request } from 'network/request.js'

export function getHomeMultiData() {
   return request({
        url: '/home/multidata',
    })
}