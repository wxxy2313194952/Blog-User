// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  productionSourceMap:false,
  // pages: {
  //   index: {
  //     //入口
  //     entry: 'src/main.js',
  //   },
  // },
  lintOnSave: false, //关闭语法检查
  //开启代理服务器
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target:'http://127.0.0.1:3080'
  //     }
  //   } 
  // }
}