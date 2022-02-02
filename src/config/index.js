const env = process.env.NODE_ENV || 'development';
const EnvConfig = {
    development: {
        baseApi: '/api/v1',
        mockApi: 'https://www.fastmock.site/mock/b9bfd2c6465af0be4ec7828b44c9b4dd/api'
    },
    production: {
        baseApi: '',
        mockApi: ''
    }
}

export default {
    env,
    mock: true,
    ...EnvConfig[env]
}