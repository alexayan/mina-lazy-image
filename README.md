# mina-lazy-image

小程序图片懒加载自定义组件

## 背景

​小程序原生图片组件 image 提供的图片懒加载功能 `lazy-load` 限制过多，只针对 page 与 scroll-view 下的 image 有效。

## 实现思路

使用 `wx.createIntersectionObserver()` 判断图片是否出现在视口中并进行加载

## 使用方法

1. 安装组件

```
npm install --save mina-lazy-image
```

2. 在页面的 json 配置文件中添加 mina-lazy-image

使用此组件需要依赖小程序基础库 2.2.2 版本，同时依赖开发者工具的 npm 构建。具体详情可查阅[官方 npm 文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

   ```json
   {
     "usingComponents": {
       "mina-lazy-image": "mina-lazy-image/index"
     }
   }
   ```

3. WXML 文件中引用 mina-lazy-image

   ```xml
   <mina-lazy-image src="{{src}}" mode="widthFIx" image-class="custom-class-name"/>
   ```

   **mina-lazy-image 的属性介绍如下：**

   | 字段名                | 类型    | 必填 | 描述                                      |
   | --------------------- | ------- | ---- | ----------------------------------------- |
   | src                   | String  | 是   | 图片链接               |
   | placeholder           | String | 否   | 占位图片链接          |
   | mode                | String  | 否   | 请参考 image 组件 mode 属性    |
   | webp                 | Number  | 否   | 请参考 image 组件 webp 属性 |
   | showMenuByLongpress    | Boolean | 否   | 请参考 image 组件 show-menu-by-longpress 属性        |
   | styles            | String  | 否   | 设置图片样式       |
   | viewport              | Object  | 否   | 默认为 {bottom: 0}，配置图片显示区域        |

   **mina-lazy-image 外部样式类**

  `image-class`, `image-container-class`
