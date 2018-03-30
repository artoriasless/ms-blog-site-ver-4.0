# ms-blog-site-ver-4.0
a blog site of mine,version 4.0（[中文](https://github.com/MonkingStand/ms-blog-site-ver-4.0/blob/master/README.zh.md)）

## brief
*   it will use koa (ver ^2.0.0) as server side
*   it will use mySQL as database
*   it will use react as browser side
*   it will use bootstrap for ui structure
*   it will use postcss to customize style ( using webpack to bundle )

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
        *   `npm run pack`
*   **Info**
    *   before you run scripts above,you must have install all dependencies,for web project and webpack
