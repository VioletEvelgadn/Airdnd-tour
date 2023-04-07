import request from '@/utils/request'

const config = {
    baseURL: 'http://codercba.com:1888/airbnb/api',
    timeout: 10000,
}

const http = new request(config)

export default http
