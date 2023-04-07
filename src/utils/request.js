import axios from "axios";

class Request {
    constructor(config = {}) {
        this.instance = axios.create(config)

        // 请求拦截
        this.instance.interceptors.request.use(
            (req) => {
                return req
            },
            (err) => err
        )

        // 响应处理
        this.instance.interceptors.response.use(
            (res) => {
                return res.data
            },
            (err) => err
        )
    }

    request(config) {
        return this.instance.request(config)
    }

    get(config) {
        return this.request({ ...config, method: 'GET' })
    }

    post(config) {
        return this.request({ ...config, method: 'POST' })
    }
}

export default Request
