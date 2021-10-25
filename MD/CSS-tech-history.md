# 因 CSS in JS 優缺點而開始的CSS 基本發展史及各自框架的研讀隨筆



> 因為看到別人被問了一句為何選用 styles components 
> 進而開始思考起自己的選擇是不是有足夠的依據支撐

一開始以為 `CSS`,`SASS`,`SCSS`,`CSS in JS`都是同一個脈絡下所衍生出的分歧技術走向，隨著相關資料閱讀逐漸增加，開始發現其中並不是想像的那麼一回事


關於`SASS`,`SCSS`,`LESS` 原本預想的是這幾個預處理器並不支援邏輯處理，所以才蹦出`CSS in JS`這個產物

---

> CSS每代新增的渲染、排版、多媒體功能

![CSS version](../Image/CSS%20version.jpeg)

---
> 以前，网页开发有一个原则，叫做"关注点分离"（separation of concerns）。
> 它的意思是，各种技术只负责自己的领域，不要混合在一起，形成耦合。对于网页开发来说，主要是三种技术分离。 
> 引用自 [CSS in JS 简介(阮一峰)](https://www.ruanyifeng.com/blog/2017/04/css_in_js.html)

而`inline style`, `inline script`違背了這一原則，其閱讀和維護體驗都非常糟糕
為了降低開發和維護的難度，圍繞著`HTML`, `JS`, `CSS` 相關應用工具在接下來的十幾年裡百家爭鳴，不斷的誕生又不斷的退場

### 預處理工具
在對`CSS`發展史做了一點基礎功課之後才發現，其實CSS本身能處理一定程度的邏輯，只是使用起來的成本相對較高，直到`SASS`的出現，宣告預處理器時代來臨

預處理器透過類似`JS`編寫方式讓CSS得以使用邏輯運算子、巢狀、變數宣告...etc等功能開發，再轉譯成原生`CSS`的語意讓瀏覽器解析，同時預處理器仍舊保持在關注點分離的原則內運作

### `CSS in JS`又是怎麼來的？

這就得說到`React`, `Angular`, `Vue`框架的誕生，它們的出現顛覆了`關注點分離`原則，打破`HTML`, `JS`, `CSS`之間的藩籬，開始將三者整合到一起

透過`Babel`的轉譯，`React`, `Angular`, `Vue`在經過封裝的方式，讓開發者得以用`JS`的方式來編譯`HTML`結構，而`CSS in JS`也是透過相同的概念孕育而生，在具備`CSS`預處理器作用基礎上，多了`JS`與`CSS`直接溝通的動態操作的優勢

---
> 目前查到並簡單分類的分支發展狀況

![CSS History](../out/UML/CSS-tech-history/CSS%20history.png)


---
## 疑問

回歸到最一開始的問題，選擇`CSS in jS`的原因又是什麼？
在自學的過程中，看到許多圍繞在`CSS`編譯上的爭論，無論是`class name`的命名、`CSS`屬性定義帶有全域作用的特性，`CSS in JS`可讀性較差...etc，各式各樣的問題層出不窮，選哪個才是好的？

無論是預處理器還是`CSS in JS`很明顯的是目前的技術發展狀況都只能解決開發者的部分需求，並沒有一項能夠滿足絕大多數開發者的工具，所以今天這個問題才會爭論不休

不管是一人專案還是團體協作，工具都是盡可能單一最好，選什麼就從一而終，但這終究是理想狀況，那麼只能在這前提下盡可能分析專案架構到底會用到多少技術，從中挑一個可以最大幅度覆蓋技術需求，亦或是成熟的團隊有固定的coding style，具備足夠的應對經驗來處理工具交雜下產生的管理問題

**若都不是，那就卷起你的袖子，開始爆肝刻吧**


---
### 最後放了幾個Google到整理知識覺得有用的幾篇文章

[CSS前處理器和後處理器](https://www.itread01.com/content/1549014321.html)

[深入理解CSS中選擇器的邏輯處理](https://www.itread01.com/p/670161.html)

[CSS in JS 简介](https://www.ruanyifeng.com/blog/2017/04/css_in_js.html)

[預 & 後處理器](https://2019.stateofcss.com/tw/technologies/pre-post-processors/)

[談談 CSS 前處理器](https://www.gushiciku.cn/pl/g5Rt/zh-tw)

[2019年，你是否可以拋棄CSS預處理器？](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/682547/)

[Webpack、PostCSS、Babel、Sass到底是什麼？](https://yixuntseng-bruce.medium.com/%E4%BA%94%E5%88%86%E9%90%98%E5%AD%B8%E5%89%8D%E7%AB%AF-webpack-postcss-babel-sass%E5%88%B0%E5%BA%95%E6%98%AF%E4%BB%80%E9%BA%BC-21820404fdd3)
