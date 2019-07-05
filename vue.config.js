module.exports = {
    transpileDependencies: [
        'platform-detect'
    ],
    chainWebpack: config => {
        config.module
          .rule('graphql')
          .test(/\.graphql$/)
          .use('graphql-tag/loader')
          .loader('graphql-tag/loader')
          .end();
    },
    productionSourceMap: false,
    publicPath: './'
}