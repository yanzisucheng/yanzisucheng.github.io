(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{665:function(t,s,a){t.exports=a.p+"assets/img/htmlname.37feb594.png"},666:function(t,s,a){t.exports=a.p+"assets/img/svgname.882dc4a8.png"},667:function(t,s,a){t.exports=a.p+"assets/img/not.4a9c2cf8.png"},777:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"一、引言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、引言"}},[t._v("#")]),t._v(" 一、引言")]),t._v(" "),n("blockquote",[n("p",[t._v("本文讲一讲css选择器的一些机制。")])]),t._v(" "),n("h2",{attrs:{id:"二、选择器的基本意义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、选择器的基本意义"}},[t._v("#")]),t._v(" 二、选择器的基本意义")]),t._v(" "),n("blockquote",[n("p",[t._v("根据一些特征，选中元素树上的一批元素。")])]),t._v(" "),n("p",[t._v("选择器的结构分类")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("简单选择器")]),t._v("：针对某一特征判断是否选中元素。")]),t._v(" "),n("li",[n("code",[t._v("复合选择器")]),t._v("：连续写在一起的简单选择器，针对元素自身特征选择单个元素。")]),t._v(" "),n("li",[n("code",[t._v("复杂选择器")]),t._v("：由“（空格）”“ >”“ ~”“ +”“ ||”等符号连接的复合选择器，根据父元素或者前序元素检查单个元素。")]),t._v(" "),n("li",[n("code",[t._v("选择器列表")]),t._v("：由逗号分隔的复杂选择器，表示“或”的关系。")])]),t._v(" "),n("h2",{attrs:{id:"三、简单选择器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、简单选择器"}},[t._v("#")]),t._v(" 三、简单选择器")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://static001.geekbang.org/resource/image/4c/ce/4c9ac78870342dc802137ea9c848c0ce.png",alt:"简单选择器分类"}})]),t._v(" "),n("h3",{attrs:{id:"_3-1、类型选择器和全体选择器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、类型选择器和全体选择器"}},[t._v("#")]),t._v(" 3.1、类型选择器和全体选择器")]),t._v(" "),n("p",[n("code",[t._v("svg 和 html")]),t._v(" 中都有 "),n("code",[t._v("a")]),t._v(" 元素，若要想区分选择 "),n("code",[t._v("svg 中的 a")]),t._v(" 和 "),n("code",[t._v("html 中的 a")]),t._v("，就必须用带"),n("code",[t._v("命名空间")]),t._v("的类型选择器。")]),t._v(" "),n("blockquote",[n("p",[t._v("svg 元素在： "),n("a",{attrs:{href:"http://www.w3.org/2000/svg",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.w3.org/2000/svg"),n("OutboundLink")],1),t._v(" 命名空间之下。")])]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("namespace"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token style"}},[n("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n        "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@namespace")]),t._v(" svg "),n("span",{pre:!0,attrs:{class:"token url"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http://www.w3.org/2000/svg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@namespace")]),t._v(" html "),n("span",{pre:!0,attrs:{class:"token url"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http://www.w3.org/1999/xhtml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("svg|a")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("stroke")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hotpink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("stroke-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html|a")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("svg")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("viewBox")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0 0 100 50"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1.1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2000/svg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xlink")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/1999/xlink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("desc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Example"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("desc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xlink:")]),t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("y")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("svgname"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("svg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javascript:void 0;"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("htmlname"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br")])]),n("p",[t._v("如图所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(665),alt:"htmlname"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(666),alt:"svgname"}})]),t._v(" "),n("h3",{attrs:{id:"_3-2、id-选择器与-class-选择器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、id-选择器与-class-选择器"}},[t._v("#")]),t._v(" 3.2、id 选择器与 class 选择器")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("id")]),t._v(" 选择器是 "),n("code",[t._v("#")]),t._v(" 号后面跟随 "),n("code",[t._v("id")]),t._v(" 名，"),n("code",[t._v("class")]),t._v(" 选择器是 "),n("code",[t._v(".")]),t._v(" 后面跟随 "),n("code",[t._v("class")]),t._v(" 名。")])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#myid")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("stroke")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("stroke-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".myclass")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("h3",{attrs:{id:"_3-3、属性选择器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、属性选择器"}},[t._v("#")]),t._v(" 3.3、属性选择器")]),t._v(" "),n("p",[t._v("四中形态")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("[att]")]),t._v("：直接在方括号中放入属性名，是检查元素是否具有这个属性。")]),t._v(" "),n("li",[n("code",[t._v("[att=val]")]),t._v("：精确匹配，检查一个元素属性的值是否是 val。")]),t._v(" "),n("li",[n("code",[t._v("[att~=val]")]),t._v("：多种匹配，检查一个元素的值是否是若干值之一。")]),t._v(" "),n("li",[n("code",[t._v("[att|=val]")]),t._v("：开头匹配，检查一个元素的值是否是以 val 开头，后面内容不管。")])]),t._v(" "),n("h2",{attrs:{id:"四、伪类选择器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、伪类选择器"}},[t._v("#")]),t._v(" 四、伪类选择器")]),t._v(" "),n("h3",{attrs:{id:"_4-1、树结构关系伪类选择器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1、树结构关系伪类选择器"}},[t._v("#")]),t._v(" 4.1、树结构关系伪类选择器")]),t._v(" "),n("ul",[n("li",[n("code",[t._v(":root")]),t._v("：伪类表示树的根元素。")]),t._v(" "),n("li",[n("code",[t._v(":empty")]),t._v("：伪类表示没有子节点的元素。")]),t._v(" "),n("li",[n("code",[t._v(":nth-child")]),t._v("："),n("img",{attrs:{src:"https://static001.geekbang.org/resource/image/1e/a9/1ebdba2978a22c13844d108318b271a9.png",alt:":nth-child"}})]),t._v(" "),n("li",[n("code",[t._v(":nth-last-child")]),t._v("：的区别仅仅是从后往前数。")]),t._v(" "),n("li",[n("code",[t._v(":first-child :last-child")]),t._v("：分别表示第一个和最后一个元素。")]),t._v(" "),n("li",[n("code",[t._v(":only-child")]),t._v("：选中唯一一个子元素。")])]),t._v(" "),n("h3",{attrs:{id:"_4-2、链接与行为伪类选择器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2、链接与行为伪类选择器"}},[t._v("#")]),t._v(" 4.2、链接与行为伪类选择器")]),t._v(" "),n("ul",[n("li",[n("code",[t._v(":any-link")]),t._v("：表示任意的链接，包括 "),n("code",[t._v("a、area 和 link")]),t._v("标签都可能匹配到这个伪类。")]),t._v(" "),n("li",[n("code",[t._v(":link")]),t._v("：表示未访问过的链接。")]),t._v(" "),n("li",[n("code",[t._v(":visited")]),t._v("：表示已经访问过的链接。")]),t._v(" "),n("li",[n("code",[t._v(":hover")]),t._v("：表示鼠标悬停在上的元素。")]),t._v(" "),n("li",[n("code",[t._v(":active")]),t._v("：表示正在激活这个元素。")]),t._v(" "),n("li",[n("code",[t._v(":focus")]),t._v("：表示焦点落在这个元素之上。")]),t._v(" "),n("li",[n("code",[t._v(":target")]),t._v("：用于选中浏览器 "),n("code",[t._v("URL 的 hash")]),t._v(" 部分所指示的元素。")])]),t._v(" "),n("h3",{attrs:{id:"_4-3、逻辑伪类选择器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3、逻辑伪类选择器"}},[t._v("#")]),t._v(" 4.3、逻辑伪类选择器")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("CSS 否定伪类 :not(X)")]),t._v("，是以一个简单的以选择器X为参数的功能性标记函数。它匹配不符合参数选择器X描述的元素。X不能包含另外一个否定选择器。"),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not#HTML",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情链接"),n("OutboundLink")],1)])]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我是一个段落。"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fancy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我好看极了！"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我不是一个段落。"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".fancy")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-shadow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px 2px 3px gold"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 类名不是 `.fancy` 的 <p> 元素 */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p:not(.fancy)")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 非 <p> 元素 */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body :not(p)")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-decoration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" underline"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 非 <div> 或 <span> 的元素 */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body :not(div):not(span)")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 类名不是 `.crazy` or `.fancy` 的元素 */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 注意，此语法尚未被较好地支持。 */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body :not(.crazy, .fancy)")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sans-serif"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])]),n("p",[t._v("结果如图：（"),n("a",{attrs:{href:"https://codepen.io/pen/",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以打开：https://codepen.io/pen/ 进行代码编写，查看效果"),n("OutboundLink")],1),t._v("）")]),t._v(" "),n("p",[n("img",{attrs:{src:a(667),alt:"not"}})]),t._v(" "),n("h3",{attrs:{id:"_4-4、其它伪类选择器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4、其它伪类选择器"}},[t._v("#")]),t._v(" 4.4、其它伪类选择器")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("国际化")]),t._v("：用于处理国际化和多语言问题。\n"),n("ul",[n("li",[n("code",[t._v("dir")])]),t._v(" "),n("li",[n("code",[t._v("lang")])])])]),t._v(" "),n("li",[n("code",[t._v("音频 / 视频")]),t._v("：用于区分音视频播放状态。\n"),n("ul",[n("li",[n("code",[t._v("play")])]),t._v(" "),n("li",[n("code",[t._v("pause")])])])]),t._v(" "),n("li",[n("code",[t._v("时序")]),t._v("：用于配合读屏软件等时序性客户端的伪类。\n"),n("ul",[n("li",[n("code",[t._v("current")])]),t._v(" "),n("li",[n("code",[t._v("past")])]),t._v(" "),n("li",[n("code",[t._v("future")])])])]),t._v(" "),n("li",[n("code",[t._v("表格")]),t._v("：用于处理 "),n("code",[t._v("table")]),t._v(" 的列的伪类。\n"),n("ul",[n("li",[n("code",[t._v("nth-col")])]),t._v(" "),n("li",[n("code",[t._v("nth-last-col")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);