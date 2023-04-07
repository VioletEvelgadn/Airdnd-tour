const path = require('path')

const resolve = (p) => path.join(__dirname, p)

// 配置写法： 基于webpack去编写
module.exports = {
    // 开发服务器
    devServer: {
        port: 5000,
    },
    // webpack其他配置
    webpack: {
        // 路径别名
        alias: {
            '@': resolve('src'),
            '@c': resolve('src/components'),
            '@v': resolve('src/views'),
        },
    },
}
