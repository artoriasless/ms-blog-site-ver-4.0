# ms-blog-site-ver-4.0
a blog site of mine,version 4.0（[中文](https://github.com/MonkingStand/ms-blog-site-ver-4.0/blob/master/README.zh.md)）

## brief
*   it will use koa (ver ^2.0.0) as server side
*   it will use mySQL as database
*   it will use react as browser side
*   it will use bootstrap for ui structure
*   it will use postcss to customize style
*   about bundle tool
    *   using gulp and webpack
    *   using gulp to bundle stylesheet file(s)
    *   using webpack to bundle javascript file(s)
    *   while file changed,choose **`Incremental Build`**,avoid **`Full Build`**

## NOTE
*   node version must be at least 7.6.0
*   scripts cmd in pkg.json is available for linux/os x,if you want to run under window,it's supposed to modify
    *   change `NODE_ENV=development` to `$env:NODE_ENV="development"` may work
    *   if still not work,try to ask for help on **Stack Overflow**

## PS
*   when you need to develop,you need to start TWO terminal
    *   one for start web,and watch files change
        *   `npm run dev`
    *   one for start webpack,and watch files change
        *   `cd ./web/src`
        *   `npm run pack-development`
*   **Info**
    *   before you run scripts above,you must have install all dependencies,for web project and webpack
    *   I use my personal gmail to auto-send email for activate user account,this config info has been added into **`.gitignore`** in order to protect privacy.You can add config info to **`config/email-config.js`** for secondary development(refer to **`config/email-config-tpl.js`** for config content)
    *   I use my personal **Alibaba Cloud** for upload service ,this config info has been added into **`.gitignore`** in order to protect privacy.You can add config info to **`config/oss-config.js`** for secondary development(refer to **`config/oss-config-tpl.js`** for config content)

## Tech Stack
+   Bundle Solution: gulp + webpack
    1.  take advantage of gulp and webpack
        +   gulp is good at automated build,focus on **`task`**
        +   webpack is good at module solution，focus on **`bundle`**
        +   **` gulp.watch `** (gulp) is safer than **` Copy Webpack Plugin `** (webpack) on handling static asserts (fonts/images/...)
        +   gulp is more efficient than webpack on handling CSS preprocessor
        +   webpack needs loaders/plugins to resolve static asserts in stylesheet

    1.  the plugin in webpack to bundle css costs too much time
        +	this problem appears while using **` css-loader `** 、 **` style-loader `** 、 **` sass-loader `** 、 **` less-loader `** 、 **` postcss-loader `** with **` extract-text-webpack-plugin `**

+   Incremental Build
    +   use chokidar (based on fs.watch) to watch file(s) changed
        1.  not use nodemon  -> inefficient
        2.  not use webpack-hot-middleare -> process blocked while using with gulp.watch
        3.  not use gulp.watch  -> throw error while remove folder
        4.  using chokidar
            +   avoid problems above
            +   for incremental build