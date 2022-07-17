import instance from '@/utils/request';

/**
 * 新增
 */
export function add(data) {
    return instance({
        url: '/api/user',
        method: 'post',
        data,
    });
}

/**
 * 更新
 */
export function update(data) {
    return instance({
        url: '/api/user',
        method: 'put',
        data,
    });
}

/**
 * 获取信息
 */
export function getInfo() {
    return instance({
        url: '/api/user',
        method: 'get',
    });
}

/**
 * 登录
 */
export function signin(data) {
    return instance({
        url: '/api/user/login',
        method: 'post',
        data,
    });
}

/**
 * 登出
 */
export function signout(data) {
    return instance({
        url: '/api/user/logout',
        method: 'post',
        data,
    });
}

/**
 * 注册
 */
export function signup(data) {
    return instance({
        url: '/api/user/signin',
        method: 'post',
        data,
    });
}

// more functions...