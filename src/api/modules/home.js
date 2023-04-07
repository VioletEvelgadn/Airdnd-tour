import request from '..';

// 获取高性价比房
export const getHomeGoodPriceData = () => request.get({ url: '/home/goodprice' })

// 获取高分好评房
export const getHomeHighScoreData = () => request.get({ url: '/home/highscore' })

// 获取折扣房
export const getHomeDiscountData  = () => request.get({ url: '/home/discount' })

// 获取推荐房/热门
export const getHomeHotData = () => request.get({ url: '/home/hotrecommenddest' })

// 获取你可能想去
export const getHomeLongforData = () => request.get({ url: '/home/longfor' })

// 获取Plus房源
export const getHomePlusData = () => request.get({ url: '/home/plus' })
