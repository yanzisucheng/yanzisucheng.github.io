(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{815:function(t,a,s){"use strict";s.r(a);var v=s(4),n=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("blockquote",[s("p",[t._v("《你不知道的JavaScript》学习笔记。")])]),t._v(" "),s("h2",{attrs:{id:"编译原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译原理"}},[t._v("#")]),t._v(" 编译原理")]),t._v(" "),s("h3",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),s("blockquote",[s("p",[t._v("在传统编译语言的流程中，程序中的一段源代码在执行之前会经历三个步骤，统称为"),s("code",[t._v("编译")]),t._v("。")])]),t._v(" "),s("p",[s("strong",[t._v("1、分词/词法分析（Tokenizing/Lexing）")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("这个过程会将由字符组成的字符串分解成（对编程语言来说）有意义的代码块，这些代码块被称为"),s("code",[t._v("词法单元（token）")]),t._v("。")])]),t._v(" "),s("p",[s("strong",[t._v("2、解析/语法分析（Parsing）")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("这个过程是将"),s("code",[t._v("词法单元流")]),t._v("（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树被称为"),s("code",[t._v("抽象语法树（Abstract Syntax Tree），简称AST")]),t._v("。")])]),t._v(" "),s("p",[s("strong",[t._v("3、代码生成")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("将 AST 转换为可执行代码的过程称被称为代码生成。")])]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("：任何 JavaScript 代码片段在执行前都要进行编译（通常就在执行前）。")]),t._v(" "),s("h2",{attrs:{id:"理解作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解作用域"}},[t._v("#")]),t._v(" 理解作用域")]),t._v(" "),s("h3",{attrs:{id:"涉及概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#涉及概念"}},[t._v("#")]),t._v(" 涉及概念")]),t._v(" "),s("p",[s("strong",[t._v("1、引擎")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("从头到尾负责整个 JavaScript 程序的编译及执行过程。")])]),t._v(" "),s("p",[s("strong",[t._v("2、编译器")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("负责语法分析及代码生成等脏活累活。")])]),t._v(" "),s("p",[s("strong",[t._v("3、作用域")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。")])]),t._v(" "),s("h3",{attrs:{id:"怎样协同工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎样协同工作"}},[t._v("#")]),t._v(" 怎样协同工作")]),t._v(" "),s("p",[t._v("将 var a = 2; 分解，看看引擎它们是如何协同工作的。")]),t._v(" "),s("p",[s("strong",[t._v("1、编译器")]),t._v("：")]),t._v(" "),s("p",[t._v("1.1、检查有没有变量存在作用域")]),t._v(" "),s("blockquote",[s("p",[t._v("遇到 var a，编译器会询问作用域是否已经有一个该名称的变量存在于同一个作用域的集合中。如果是，编译器会忽略该声明，继续进行编译；否则它会要求作用域在当前作用域的集合中声明一个新的变量，并命名为 a。")])]),t._v(" "),s("p",[t._v("1.2、为引擎生成运行时所需的代码")]),t._v(" "),s("blockquote",[s("p",[t._v("接下来编译器会为引擎生成运行时所需的代码，这些代码被用来处理 a = 2 这个赋值操作。引擎运行时会首先询问作用域，在当前的作用域集合中是否存在一个叫作 a 的变量。如果是，引擎就会使用这个变量；如果否，引擎会继续查找该变量。")])]),t._v(" "),s("p",[s("strong",[t._v("2、引擎")]),t._v("：")]),t._v(" "),s("p",[t._v("引擎会为变量 a 进行 LHS 查询。")]),t._v(" "),s("blockquote",[s("p",[t._v("注释：RHS 查询与简单地查找某个变量的值别无二致，而 LHS 查询则是试图找到变量的容器本身，从而可以对其赋值。")])]),t._v(" "),s("h2",{attrs:{id:"作用域嵌套"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域嵌套"}},[t._v("#")]),t._v(" 作用域嵌套")]),t._v(" "),s("blockquote",[s("p",[t._v("遍历嵌套作用域链的规则很简单：引擎从当前的执行作用域开始查找变量，如果找不到，就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都会停止。")])]),t._v(" "),s("h2",{attrs:{id:"异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[t._v("#")]),t._v(" 异常")]),t._v(" "),s("p",[t._v("为什么区分 LHS 和 RHS 是一件重要的事情？")]),t._v(" "),s("blockquote",[s("p",[t._v("因为在变量还没有声明（在任何作用域中都无法找到该变量）的情况下，这两种查询的行为是不一样的。")])]),t._v(" "),s("p",[t._v("1、首先 LHS 以及 RHS 到底是什么意思？")]),t._v(" "),s("blockquote",[s("p",[t._v("LHS和RHS：是JavaScript引擎的两种查找类型，含义是赋值操作的左侧与右侧。")])]),t._v(" "),s("p",[s("strong",[t._v("LHS")]),t._v("：对哪个赋值就对哪个进行LHS引用，可以理解为赋值操作的目标。")]),t._v(" "),s("p",[s("strong",[t._v("RHS")]),t._v("：需要获取哪个变量的值，就对哪个变量的值进行RHS引用，理解为赋值操作的源头。")]),t._v(" "),s("p",[t._v("举个例子，看如下代码：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("找出所有的 LHS 查询（这里有 3 处！），找出所有的 RHS 查询（这里有 4 处！）")]),t._v(" "),s("ul",[s("li",[t._v("1、var c 中的c需要被赋值，在赋值操作的左侧，所以对c进行 "),s("code",[t._v("LHS")]),t._v(" 引用")]),t._v(" "),s("li",[t._v("2、变量c需要被赋值，而它的值是foo(2)，那么foo(2)的值是多少，就需要查找foo(2)的值，而它在赋值操作的右侧，所以对foo(2)进行 "),s("code",[t._v("RHS")]),t._v(" 引用")]),t._v(" "),s("li",[t._v("3、隐含赋值操作，将2传递给function foo(a){……}函数的参数a，a在赋值操作的左侧，对a进行 "),s("code",[t._v("LHS")]),t._v(" 引用")]),t._v(" "),s("li",[t._v("4、var b = a; 中，b需要被赋值，处在赋值操作的左侧，所以b进行的 "),s("code",[t._v("LHS")]),t._v("引用")]),t._v(" "),s("li",[t._v("5、在第4点的基础上，b的值将从a来，那么右侧的a的值从何而来呢？这就需要对赋值操作右侧的a进行 "),s("code",[t._v("RHS")]),t._v(" 引用。")]),t._v(" "),s("li",[t._v("6、return a+b; 中，需要找到a与b的值的来源，a与b都在赋值操作的右侧，才能得到a+b的值，所以对a与b都是进行 "),s("code",[t._v("RHS")]),t._v(" 引用，有"),s("code",[t._v("两次")]),t._v("。")])]),t._v(" "),s("p",[t._v("2、异常例子")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[t._v("第一次对 b 进行 RHS 查询时是无法找到该变量的。")]),t._v(" "),s("li",[t._v("如果 RHS 查询在所有嵌套的作用域中遍寻不到所需的变量，引擎就会抛出 ReferenceError 异常。")]),t._v(" "),s("li",[t._v("当引擎执行 LHS 查询时，如果在顶层（全局作用域）中也无法找到目标变量，全局作用域中就会创建一个具有该名称的变量，并将其返还给引擎，前提程序运行在非“严格模式”下。")]),t._v(" "),s("li",[t._v("如果 RHS 查询找到了一个变量，但是你尝试对这个变量的值进行不合理的操作，比如试图对一个非函数类型的值进行函数调用，或着引用 null 或undefined 类型的值中的属性，那么引擎会抛出另外一种类型的异常，叫作 TypeError。")])]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("ul",[s("li",[t._v("作用域是一套规则，用于确定在何处以及如何查找变量（标识符）。")]),t._v(" "),s("li",[t._v("如果查找的目的是对变量进行赋值，那么就会使用 LHS 查询。")]),t._v(" "),s("li",[t._v("如果目的是获取变量的值，就会使用 RHS 查询。")]),t._v(" "),s("li",[t._v("赋值操作符会导致 LHS 查询。")]),t._v(" "),s("li",[t._v("＝操作符或调用函数时传入参数的操作都会导致关联作用域的赋值操作。")]),t._v(" "),s("li",[t._v("不成功的 RHS 引用会导致抛出 ReferenceError 异常。")]),t._v(" "),s("li",[t._v("不成功的 LHS 引用会导致自动隐式地创建一个全局变量（非严格模式下），该变量使用 LHS 引用的目标作为标识符，或者抛出 ReferenceError 异常（严格模式下）。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);