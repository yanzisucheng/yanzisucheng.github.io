(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{732:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一、概括"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、概括"}},[s._v("#")]),s._v(" 一、概括")]),s._v(" "),t("blockquote",[t("p",[s._v("本文主要聊聊浏览器是如何把  "),t("code",[s._v("CSS")]),s._v(" 规则应用到节点上，并给这棵朴素的 "),t("code",[s._v("DOM")]),s._v(" 树添加上 "),t("code",[s._v("CSS")]),s._v(" 属性的。")])]),s._v(" "),t("h2",{attrs:{id:"二、css构建过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、css构建过程"}},[s._v("#")]),s._v(" 二、CSS构建过程")]),s._v(" "),t("blockquote",[t("p",[s._v("构建 DOM 的过程是：从父到子，从先到后，一个一个节点构造，并且挂载到 DOM 树上的，那么这个过程中，依次拿到上一步构造好的元素，去检查它匹配到了哪些规则，再根据规则的优先级，做覆盖和调整。")])]),s._v(" "),t("h3",{attrs:{id:"_2-1、选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、选择器"}},[s._v("#")]),s._v(" 2.1、选择器")]),s._v(" "),t("ul",[t("li",[s._v("空格: 后代，选中它的子节点和所有子节点的后代节点")]),s._v(" "),t("li",[s._v(">: 子代，选中它的子节点")]),s._v(" "),t("li",[t("code",[s._v("+")]),s._v("：直接后继选择器，选中它的下一个相邻节点")]),s._v(" "),t("li",[t("code",[s._v("~")]),s._v("：后继，选中它之后所有的相邻节点")]),s._v(" "),t("li",[t("code",[s._v("||")]),s._v("：列，选中表格中的一列")])]),s._v(" "),t("p",[s._v("选择器有个特点，那就是选择器的出现顺序，必定跟构建 "),t("code",[s._v("DOM")]),s._v(" 树的顺序一致。这是一个 "),t("code",[s._v("CSS")]),s._v(" 设计的原则，即保证选择器在 "),t("code",[s._v("DOM")]),s._v(" 树构建到当前节点时，已经可以准确判断是否匹配，不需要后续节点信息。")]),s._v(" "),t("p",[s._v("接下来看一下操作过程。")]),s._v(" "),t("h2",{attrs:{id:"三、操作过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、操作过程"}},[s._v("#")]),s._v(" 三、操作过程")]),s._v(" "),t("blockquote",[t("p",[s._v("首先，须把 "),t("code",[s._v("CSS")]),s._v(" 规则进行处理。作为一门语言，"),t("code",[s._v("CSS")]),s._v(" 需要先经过词法分析和语法分析，变成计算机能够理解的结构。将其抽象成一棵可用的抽象语法树。")])]),s._v(" "),t("p",[s._v("一个 "),t("code",[s._v("compound-selector")]),s._v(" 是检查一个元素的规则，而一个复合型选择器，则是由数个 "),t("code",[s._v("compound-selector")]),s._v(" 通过前面讲的符号连接起来的。")]),s._v(" "),t("h3",{attrs:{id:"_3-1、后代选择器-空格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、后代选择器-空格"}},[s._v("#")]),s._v(" 3.1、后代选择器 “空格”")]),s._v(" "),t("blockquote",[t("p",[s._v("后代选择器的作用范围是父节点的所有子节点，因此规则是在匹配到本标签的结束标签时回退。")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a#b .cls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("当匹配 "),t("code",[s._v("a#b")]),s._v(" 的元素时，才会开始检查它所有的子代是否匹配 "),t("code",[s._v(".cls")]),s._v("。")]),s._v(" "),t("p",[s._v("后退的情况：")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("b")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("cls")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("cls")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("3"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这段代码里有 "),t("code",[s._v("cls")]),s._v(" 类的有有两个 "),t("code",[s._v("span")]),s._v(" 标签，所以为了防止第三个 "),t("code",[s._v("span")]),s._v(" 才不会被选中，当遇到 "),t("code",[s._v("</a>")]),s._v(" 时，必须使得规则 "),t("code",[s._v("a#b .cls")]),s._v(" 回退一步。")]),s._v(" "),t("h3",{attrs:{id:"_3-2、后继选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、后继选择器"}},[s._v("#")]),s._v(" 3.2、后继选择器“ ~ ”")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".cls~*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("solid 1px green"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("cls")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    3\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("4"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("5"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("上面代码可以看出 "),t("code",[s._v(".cls")]),s._v(" 选中了"),t("code",[s._v("span2")]),s._v("，它的后继应该是 "),t("code",[s._v("span3")]),s._v("，"),t("code",[s._v("span4")]),s._v("是"),t("code",[s._v("span3")]),s._v("的子节点不应被选中， "),t("code",[s._v("span5")]),s._v("是后继应该被选中。")]),s._v(" "),t("p",[s._v("从上面我们可以得出一个结论："),t("code",[s._v("后继节点和当前节点父元素相同是充分必要条件")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"_3-3、子代选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、子代选择器"}},[s._v("#")]),s._v(" 3.3、子代选择器 “>”")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div>.cls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("solid 1px green"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("cls")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    3\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("4"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("5"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("当 "),t("code",[s._v("DOM")]),s._v(" 树构造到 "),t("code",[s._v("div")]),s._v(" 时，匹配了 "),t("code",[s._v("CSS")]),s._v(" 规则的第一段，激活后面的 "),t("code",[s._v(".cls")]),s._v(" 选择条件，并且指定父元素必须是当前 "),t("code",[s._v("div")]),s._v("。于是"),t("code",[s._v("span2")]),s._v("就会被选中。")]),s._v(" "),t("h3",{attrs:{id:"_3-4、直接后继选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4、直接后继选择器"}},[s._v("#")]),s._v(" 3.4、直接后继选择器 “+”")]),s._v(" "),t("blockquote",[t("p",[s._v("直接后继选择器只对唯一一个元素生效，不需要像前面几种一样反复激活和关闭规则。")])]),s._v(" "),t("h3",{attrs:{id:"_3-5、列选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5、列选择器"}},[s._v("#")]),s._v(" 3.5、列选择器 “ || ”")]),s._v(" "),t("blockquote",[t("p",[s._v("列选择器比较特别，它是专门针对表格的选择器。")])]),s._v(" "),t("h3",{attrs:{id:"_3-6、其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6、其他"}},[s._v("#")]),s._v(" 3.6、其他")]),s._v(" "),t("h4",{attrs:{id:"_3-6-1、逗号分隔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-1、逗号分隔"}},[s._v("#")]),s._v(" 3.6.1、逗号分隔")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 这里用,隔开，可以当作两条规则处理 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a#b, .cls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a#b")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".cls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"_3-6-2、选择器重合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-2、选择器重合"}},[s._v("#")]),s._v(" 3.6.2、选择器重合")]),s._v(" "),t("blockquote",[t("p",[s._v("可以使用树形结构来进行一些合并，来提高效率。")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#a .cls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#a span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#a>span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("上面选择器可以构建成一棵树")]),s._v(" "),t("ul",[t("li",[s._v("#a\n"),t("ul",[t("li",[s._v("< 空格 >.cls")]),s._v(" "),t("li",[s._v("< 空格 >span")]),s._v(" "),t("li",[s._v(">span")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);