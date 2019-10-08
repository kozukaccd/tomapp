# @nuxt/vuetifyでイラストコンテスト用の投票ページ&システムを組んでみたよ

## 詰まったところ
* themeの切り替え方法
    *
* webフォントがどうがんばってもつかえない
    * nuxt-webfontloaderをnpm install.
    * variables.scssにスタイルを記述
    * nuxt.config.jsにtreeShark:trueを設定し、variables.scssにスタイルを読み込ませる。
    *
    *
* transitionする
    * 普通にcssで.page-enter-transitioとかひたすらごりごり書いた。
*
firebase関連はここを参照
https://qiita.com/hirotatsuuu/items/101a613af9afd27353bb