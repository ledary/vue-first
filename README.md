# firstvue

> 我的第一个vue项目 教你从小白到Vue大神的指路

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

build:项目构建相关代码
config:配置目录，包括端口号等，初学默认使用
node——modules npm加载的项目依赖模块

src:开发的目录

    assets: 放置一些图片，如logo等

    components；目录里面放置的组件文件，可以不用

    App.vue  项目人口文件，可以直接将组件写这里，不适用components目录

    main.js   项目核心文件

    测试提交功能
    static   静态资源目录，如图片，字体等
    index.html   首页入口文件 可以填写额外代码  比如统计代码 meta信息
