import request from '..'

// 获取全部房源信息  offset偏移值  size每页条数
export const getEntireRoomList = (offset = 0, size = 20) =>
    request.get({ url: '/entire/list', params: { offset, size } })
