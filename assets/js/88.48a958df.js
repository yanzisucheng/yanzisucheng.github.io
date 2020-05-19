(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{730:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、回顾"}},[t._v("#")]),t._v(" 一、回顾")]),t._v(" "),s("blockquote",[s("p",[t._v("大致梳理一下前面四篇文章主要讲的内容。")])]),t._v(" "),s("ul",[s("li",[t._v("把 "),s("code",[t._v("URL")]),t._v(" 变成字符流")]),t._v(" "),s("li",[t._v("把字符流变成词（"),s("code",[t._v("token")]),t._v("）流")]),t._v(" "),s("li",[t._v("把词（"),s("code",[t._v("token")]),t._v("）流构造成 "),s("code",[t._v("DOM")]),t._v("树")]),t._v(" "),s("li",[t._v("把不含样式信息的 "),s("code",[t._v("DOM")]),t._v(" 树应用 "),s("code",[t._v("CSS")]),t._v(" 规则，变成包含样式信息的 "),s("code",[t._v("DOM")]),t._v(" 树")]),t._v(" "),s("li",[t._v("并且根据样式信息，计算了每个元素的位置和大小。")])]),t._v(" "),s("h2",{attrs:{id:"二、概括"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、概括"}},[t._v("#")]),t._v(" 二、概括")]),t._v(" "),s("blockquote",[s("p",[t._v("本文是最后的步骤，就是根据这些样式信息和大小信息，为每个元素在内存中渲染它的图形，并且把它绘制到对应的位置。")])]),t._v(" "),s("h2",{attrs:{id:"三、渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、渲染"}},[t._v("#")]),t._v(" 三、渲染")]),t._v(" "),s("blockquote",[s("p",[t._v("本文中出现的“渲染”一词，统一指的是它在图形学的意义，也就是把模型变成位图的过程。")])]),t._v(" "),s("h3",{attrs:{id:"_3-1、位图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、位图"}},[t._v("#")]),t._v(" 3.1、位图")]),t._v(" "),s("blockquote",[s("p",[t._v("在内存里建立一张二维表格，把一张图片的每个像素对应的颜色保存进去。")])]),t._v(" "),s("p",[t._v("位图信息也是 "),s("code",[t._v("DOM")]),t._v(" 树中占据浏览器内存最多的信息，做内存占用优化时，主要就是考虑这一部分。")]),t._v(" "),s("h3",{attrs:{id:"_3-2、图形和文字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、图形和文字"}},[t._v("#")]),t._v(" 3.2、图形和文字")]),t._v(" "),s("blockquote",[s("p",[t._v("浏览器中渲染这个过程，就是把每一个元素对应的盒变成位图。这里的元素包括 "),s("code",[t._v("HTML")]),t._v(" 元素和伪元素，一个元素可能对应多个盒（比如 "),s("code",[t._v("inline")]),t._v(" 元素，可能会分成多行）。每一个盒对应着一张位图。")])]),t._v(" "),s("ul",[s("li",[t._v("盒的背景、边框、SVG 元素、阴影等特性，都是需要绘制的图形类。")]),t._v(" "),s("li",[t._v("盒中的文字，也需要用底层库来支持，叫做字体库。能根据字符的码点抽取出字形。字形分为像素字形和矢量字形两种。")])]),t._v(" "),s("h2",{attrs:{id:"四、合成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、合成"}},[t._v("#")]),t._v(" 四、合成")]),t._v(" "),s("blockquote",[s("p",[t._v("合成的过程，就是为一些元素创建一个“合成后的位图”（称为合成层），把一部分子元素渲染到合成的位图上面。")])]),t._v(" "),s("p",[t._v("1、好的合成策略是“猜测”可能变化的元素，把它排除到合成之外。")]),t._v(" "),s("p",[t._v("举个例子：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("假设合成策略能够把 "),s("code",[t._v("a、b")]),t._v(" 两个 "),s("code",[t._v("div")]),t._v(" 合成，而不把 "),s("code",[t._v("c")]),t._v(" 合成，执行以下代码时：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"translate(100px, 0)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("绘制的时候，只需要绘制 "),s("code",[t._v("a")]),t._v(" 和 "),s("code",[t._v("b")]),t._v(" 合成好的位图和 "),s("code",[t._v("c")]),t._v("，从而减少了绘制次数。如果 "),s("code",[t._v("b")]),t._v(" 有很多复杂的子元素，那么性能提升收益非常高。")]),t._v(" "),s("p",[t._v("2、主流浏览器一般根据 "),s("code",[t._v("position、transform")]),t._v(" 等属性来决定合成策略，新的 "),s("code",[t._v("CSS")]),t._v(" 标准中，规定了 "),s("code",[t._v("will-change")]),t._v(" 属性，提升合成策略的效果。")]),t._v(" "),s("h2",{attrs:{id:"五、绘制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、绘制"}},[t._v("#")]),t._v(" 五、绘制")]),t._v(" "),s("blockquote",[s("p",[t._v("把任何位图合成到"),s("code",[t._v("最终位图")]),t._v("的操作称为绘制。")])]),t._v(" "),s("p",[t._v("1、"),s("code",[t._v("绘制")]),t._v("发生的频率比我们想象中要高得多。")]),t._v(" "),s("p",[t._v("比如：鼠标的每次移动，都造成了重新绘制，如果我们不重新绘制，就会产生大量的鼠标残影。")]),t._v(" "),s("p",[t._v("2、计算机图形学中，使用的方案就是"),s("code",[t._v("脏矩形")]),t._v("算法限制绘制面积，也就是把屏幕均匀地分成若干矩形区域。")])])}),[],!1,null,null,null);a.default=e.exports}}]);