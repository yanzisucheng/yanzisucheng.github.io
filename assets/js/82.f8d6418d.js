(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{736:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、javascript对象分类介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、javascript对象分类介绍"}},[t._v("#")]),t._v(" 一、javaScript对象分类介绍")]),t._v(" "),a("h3",{attrs:{id:"_1-0、宿主对象（host-objects）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-0、宿主对象（host-objects）"}},[t._v("#")]),t._v(" 1.0、宿主对象（host Objects）")]),t._v(" "),a("blockquote",[a("p",[t._v("由 JavaScript 宿主环境提供的对象，它们的行为完全由宿主环境决定。")])]),t._v(" "),a("h3",{attrs:{id:"_1-1、内置对象（built-in-objects）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、内置对象（built-in-objects）"}},[t._v("#")]),t._v(" 1.1、内置对象（Built-in Objects）")]),t._v(" "),a("blockquote",[a("p",[t._v("由 JavaScript 语言提供的对象。")])]),t._v(" "),a("h4",{attrs:{id:"_1-1-0、固有对象（intrinsic-objects-）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-0、固有对象（intrinsic-objects-）"}},[t._v("#")]),t._v(" 1.1.0、固有对象（Intrinsic Objects ）")]),t._v(" "),a("blockquote",[a("p",[t._v("由标准规定，随着 "),a("code",[t._v("JavaScript")]),t._v(" 运行时创建而自动创建的对象实例。")])]),t._v(" "),a("h4",{attrs:{id:"_1-1-1、原生对象（native-objects）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1、原生对象（native-objects）"}},[t._v("#")]),t._v(" 1.1.1、原生对象（Native Objects）")]),t._v(" "),a("blockquote",[a("p",[t._v("可以由用户通过 "),a("code",[t._v("Array、RegExp")]),t._v(" 等内置构造器或者特殊语法创建的对象。")])]),t._v(" "),a("h4",{attrs:{id:"_1-1-2、普通对象（ordinary-objects）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2、普通对象（ordinary-objects）"}},[t._v("#")]),t._v(" 1.1.2、普通对象（Ordinary Objects）")]),t._v(" "),a("blockquote",[a("p",[t._v("由 "),a("code",[t._v("{}")]),t._v(" 语法、"),a("code",[t._v("Object")]),t._v(" 构造器或者 "),a("code",[t._v("class")]),t._v(" 关键字定义类创建的对象，它能够被原型继承。")])]),t._v(" "),a("p",[t._v("下面winter主要介绍了普通对象之外的对象原型（刚好都是我不太懂的，mark一下）")]),t._v(" "),a("h2",{attrs:{id:"二、宿主对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、宿主对象"}},[t._v("#")]),t._v(" 二、宿主对象")]),t._v(" "),a("h3",{attrs:{id:"_2-0、window对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0、window对象"}},[t._v("#")]),t._v(" 2.0、window对象")]),t._v(" "),a("ul",[a("li",[t._v("全局对象 "),a("code",[t._v("window")]),t._v(" 上的属性，一部分来自 "),a("code",[t._v("JavaScript")]),t._v(" 语言，一部分来自浏览器环境")]),t._v(" "),a("li",[t._v("宿主也会提供一些构造器，比如使用 "),a("code",[t._v("new Image")]),t._v("来创建 "),a("code",[t._v("img")]),t._v(" 元素（winter下次会讲浏览器的API，到时再详细的mark一下）")])]),t._v(" "),a("h2",{attrs:{id:"三、内置对象·固有对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、内置对象·固有对象"}},[t._v("#")]),t._v(" 三、内置对象·固有对象")]),t._v(" "),a("h3",{attrs:{id:"_3-0、简单介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0、简单介绍"}},[t._v("#")]),t._v(" 3.0、简单介绍")]),t._v(" "),a("ul",[a("li",[t._v("固有对象在任何 JS 代码执行前就已经被创建出来，类似基础库的角色")]),t._v(" "),a("li",[t._v("ECMA 标准为我们提供了"),a("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/9.0/index.html#sec-well-known-intrinsic-objects",target:"_blank",rel:"noopener noreferrer"}},[t._v("一份固有对象表"),a("OutboundLink")],1),t._v("，里面含有 150+ 个固有对象（链接打开比较慢，稍等一下就好）")])]),t._v(" "),a("h3",{attrs:{id:"_3-1、小实验：获取全部-javascript-固有对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、小实验：获取全部-javascript-固有对象"}},[t._v("#")]),t._v(" 3.1、小实验：获取全部 JavaScript 固有对象")]),t._v(" "),a("h4",{attrs:{id:"_3-1-0、三个值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-0、三个值"}},[t._v("#")]),t._v(" 3.1.0、三个值")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Infinity、NaN、undefined")])])]),t._v(" "),a("h4",{attrs:{id:"_3-1-1、九个函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1、九个函数"}},[t._v("#")]),t._v(" 3.1.1、九个函数")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("eval、isFinite、isNaN、parseFloat、parseInt、decodeURI decodeURIComponent、encodeURI、encodeURIComponent")])])]),t._v(" "),a("h4",{attrs:{id:"_3-1-2、一些构造器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2、一些构造器"}},[t._v("#")]),t._v(" 3.1.2、一些构造器")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Array、Date、RegExp、Promise、Proxy、Map、WeakMap、Set、WeapSet、Function、Boolean、String、Number、Symbol、Object、Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError URIError、ArrayBuffer、SharedArrayBuffer、DataView、Typed Array、Float32Array、Float64Array、Int8Array、Int16Array、Int32Array、UInt8Array、UInt16Array、UInt32Array、UInt8ClampedArray")])])]),t._v(" "),a("h4",{attrs:{id:"_3-1-3、四个用于当作命名空间的对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3、四个用于当作命名空间的对象"}},[t._v("#")]),t._v(" 3.1.3、四个用于当作命名空间的对象")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Atomics、JSON、Math、Reflect")])])]),t._v(" "),a("h4",{attrs:{id:"_3-1-4、处理方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4、处理方法"}},[t._v("#")]),t._v(" 3.1.4、处理方法")]),t._v(" "),a("p",[t._v("1、winter的做法：使用广度优先搜索，查找这些对象所有的属性和 "),a("code",[t._v("Getter/Setter")]),t._v("，就可以获得 JavaScript 中所有的固有对象。")]),t._v(" "),a("p",[t._v("2、下面代码可以研究一下看看，"),a("code",[t._v("new Set()")]),t._v("不懂的可以看看"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN关于set的介绍"),a("OutboundLink")],1),t._v("，（我现在还没有看明白，我去不同网页打开运行输出set不一样，感觉有点懵逼"),a("code",[t._v("_(:3」∠)_")]),t._v("，理解的大佬可以留言告诉我，不胜感激）")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" objects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    eval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    isFinite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    isNaN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    parseFloat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    parseInt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    decodeURI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    decodeURIComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    encodeURI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    encodeURIComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    RegExp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    WeakMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    WeakSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    EvalError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    RangeError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ReferenceError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    SyntaxError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    TypeError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    URIError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ArrayBuffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    SharedArrayBuffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    DataView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Float32Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Float64Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Int8Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Int16Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Int32Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Uint8Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Uint16Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Uint32Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Uint8ClampedArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Atomics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Reflect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobjects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("o")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOwnPropertyNames")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOwnPropertyDescriptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br"),a("span",{staticClass:"line-number"},[t._v("62")]),a("br"),a("span",{staticClass:"line-number"},[t._v("63")]),a("br"),a("span",{staticClass:"line-number"},[t._v("64")]),a("br"),a("span",{staticClass:"line-number"},[t._v("65")]),a("br"),a("span",{staticClass:"line-number"},[t._v("66")]),a("br")])]),a("h2",{attrs:{id:"四、内置对象·原生对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、内置对象·原生对象"}},[t._v("#")]),t._v(" 四、内置对象·原生对象")]),t._v(" "),a("h3",{attrs:{id:"_4-0、分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-0、分类"}},[t._v("#")]),t._v(" 4.0、分类")]),t._v(" "),a("blockquote",[a("p",[t._v("winter按照不同应用场景，将原生对象分成了以下几个种类")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/6c/d0/6cb1df319bbc7c7f948acfdb9ffd99d0.png",alt:"原生对象种类"}})]),t._v(" "),a("h3",{attrs:{id:"_4-1、注意的几个点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1、注意的几个点"}},[t._v("#")]),t._v(" 4.1、注意的几个点")]),t._v(" "),a("ul",[a("li",[t._v("可以用 new 运算创建新的对象")]),t._v(" "),a("li",[t._v("几乎所有这些构造器的能力都是无法用纯 JavaScript 代码实现")]),t._v(" "),a("li",[t._v("也无法用 "),a("code",[t._v("class/extend")]),t._v(" 语法来继承")]),t._v(" "),a("li",[t._v("创建的对象多数使用了私有字段，比如："),a("code",[t._v("Error: [[ErrorData]]")]),t._v("...这些字段使得原型继承方法无法正常工作")]),t._v(" "),a("li",[t._v("所有这些原生对象都是为了特定能力或者性能，而设计出来的"),a("code",[t._v("特权对象")])])]),t._v(" "),a("h2",{attrs:{id:"五、用对象来模拟函数与构造器：函数对象与构造器对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、用对象来模拟函数与构造器：函数对象与构造器对象"}},[t._v("#")]),t._v(" 五、用对象来模拟函数与构造器：函数对象与构造器对象")]),t._v(" "),a("h3",{attrs:{id:"_5-0、函数对象的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-0、函数对象的定义"}},[t._v("#")]),t._v(" 5.0、函数对象的定义")]),t._v(" "),a("blockquote",[a("p",[t._v("具有 "),a("code",[t._v("[[call]]")]),t._v(" 私有字段的对象")])]),t._v(" "),a("p",[a("code",[t._v("[[call]]")]),t._v(" 私有字段必须是一个引擎中定义的函数，需要接受 "),a("code",[t._v("this")]),t._v(" 值和调用参数，并且会产生域的切换")]),t._v(" "),a("h3",{attrs:{id:"_5-1、构造器对象的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1、构造器对象的定义"}},[t._v("#")]),t._v(" 5.1、构造器对象的定义")]),t._v(" "),a("blockquote",[a("p",[t._v("具有 "),a("code",[t._v("[[construct]]")]),t._v(" 私有字段的对象")])]),t._v(" "),a("h4",{attrs:{id:"_5-1-0、-construct-的大致执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-0、-construct-的大致执行过程"}},[t._v("#")]),t._v(" 5.1.0、"),a("code",[t._v("[[construct]]")]),t._v(" 的大致执行过程")]),t._v(" "),a("p",[t._v("1、以 "),a("code",[t._v("Object.protoype")]),t._v(" 为原型创建一个新对象\n2、以新对象为 "),a("code",[t._v("this")]),t._v("，执行函数的 "),a("code",[t._v("[[call]]")]),t._v("\n3、如果 "),a("code",[t._v("[[call]]")]),t._v(" 的返回值是对象，那么，否则返回第一步创建的新对象")]),t._v(" "),a("h3",{attrs:{id:"_5-2、例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2、例子"}},[t._v("#")]),t._v(" 5.2、例子")]),t._v(" "),a("p",[t._v("1、内置对象 Date 在作为构造器调用时产生新的对象，作为函数时，则产生字符串，见以下代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("2、浏览器宿主环境中，提供的 Image 构造器，则根本不允许被作为函数调用。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抛出错误 Uncaught TypeError: Failed to construct 'Image': Please use the 'new' operator, this DOM object constructor cannot be called as a function.'Image'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("3、基本类型（String、Number、Boolean），它们的构造器被当作函数调用，则产生类型转换的效果")]),t._v(" "),a("p",[t._v("4、在 ES6 之后 "),a("code",[t._v("=>")]),t._v(" 语法创建的函数仅仅是函数，它们无法被当作构造器使用，见以下代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错：Uncaught TypeError: (intermediate value) is not a constructor")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("5、使用 "),a("code",[t._v("function")]),t._v(" 语法或者 "),a("code",[t._v("Function")]),t._v(" 构造器创建的对象来说，"),a("code",[t._v("[[call]]")]),t._v(" 和 "),a("code",[t._v("[[construct]]")]),t._v(" 行为总是相似的，它们执行同一段代码。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把 f 作为函数调用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把 f 作为构造器调用")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("6、如果构造器返回了一个新的对象，那么 "),a("code",[t._v("new")]),t._v(" 创建的新对象就变成了一个构造函数之外完全无法访问的对象，这一定程度上可以实现"),a("code",[t._v("私有")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getValue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("cls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//100")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//a 在外面永远无法访问到")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h2",{attrs:{id:"六、特殊行为的对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、特殊行为的对象"}},[t._v("#")]),t._v(" 六、特殊行为的对象")]),t._v(" "),a("h3",{attrs:{id:"_6-0、行为不大一样的对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-0、行为不大一样的对象"}},[t._v("#")]),t._v(" 6.0、行为不大一样的对象")]),t._v(" "),a("blockquote",[a("p",[t._v("winter总结了常见的下标运算（就是使用中括号或者点来做属性访问）或者设置原型跟普通对象不同的对象，如下：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Array")]),t._v("："),a("code",[t._v("Array")]),t._v(" 的 "),a("code",[t._v("length")]),t._v(" 属性根据最大的下标自动发生变化。")]),t._v(" "),a("li",[a("code",[t._v("Object.prototype")]),t._v("：作为所有正常对象的默认原型，不能再给它设置原型了。")]),t._v(" "),a("li",[a("code",[t._v("String")]),t._v("：为了支持下标运算，"),a("code",[t._v("String")]),t._v(" 的正整数属性访问会去字符串里查找。")]),t._v(" "),a("li",[a("code",[t._v("Arguments")]),t._v("："),a("code",[t._v("arguments")]),t._v(" 的非负整数型下标属性跟对应的变量联动。")]),t._v(" "),a("li",[t._v("模块的 "),a("code",[t._v("namespace")]),t._v(" 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 "),a("code",[t._v("import")])]),t._v(" "),a("li",[t._v("类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊")]),t._v(" "),a("li",[a("code",[t._v("bind")]),t._v(" 后的 "),a("code",[t._v("function")]),t._v("：跟原来的函数相关联")])])])}),[],!1,null,null,null);s.default=e.exports}}]);