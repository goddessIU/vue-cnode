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

export function getPage(id, params) {
    return request({
        url: `/topic/${id}`,
        method: 'get',
        mock: false,
        data: params
    })
}

export function getAuthor(loginname) {
    return request({
        url: `/user/${loginname}`,
        method: 'get',
        mock: false
    })
}