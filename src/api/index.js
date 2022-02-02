import request from "../utils/request";


export function getTopics(params) {
    return request({
        url: '/topics',
        method: 'get',
        data: params,
        mock: false
    })
}

export function getTopicsLength(params) {
    return request({
        url: '/topics',
        method: 'get',
        data: params,
        mock: false
    })
}

export function getAllTopics() {
    return request({
        url: '/topics',
        method: 'get',
        mock: false
    })
}
