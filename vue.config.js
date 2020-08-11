// vue.config.js

const path = require("path");
module.exports = {
    outputDir: 'dist',
    indexPath:"../index.html",
    publicPath: process.env.NODE_ENV==='production'?'./dist/':'',
    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: [path.resolve(__dirname, "src/common/less/variable.less")] // 引入全局样式变量
        }
   }
};
