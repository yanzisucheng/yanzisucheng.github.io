(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{748:function(v,_,e){"use strict";e.r(_);var t=e(4),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[v._v("#")]),v._v(" 说明")]),v._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://time.geekbang.org/column/intro/189",target:"_blank",rel:"noopener noreferrer"}},[v._v("《透视HTTP协议》"),e("OutboundLink")],1),v._v("是 "),e("code",[v._v("罗剑锋")]),v._v(" （奇虎360技术专家）在极客时间开的一门专栏课，笔者记录一下学习笔记，仅供参考。")])]),v._v(" "),e("h2",{attrs:{id:"网络世界"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络世界"}},[v._v("#")]),v._v(" 网络世界")]),v._v(" "),e("p",[v._v("1、通常所说的“上网”实际上访问的只是互联网的一个子集“"),e("code",[v._v("万维网")]),v._v("”（World Wide Web）")]),v._v(" "),e("blockquote",[e("p",[v._v("World Wide Web 它基于 HTTP 协议，传输 HTML 等超文本资源，能力也就被限制在 HTTP 协议之内。")])]),v._v(" "),e("p",[v._v("2、互联网上还有许多万维网之外的资源")]),v._v(" "),e("blockquote",[e("p",[v._v("例如常用的电子邮件、BT 和 Magnet 点对点下载、FTP 文件下载、SSH 安全登录、各种即时通信服务等等，它们需要用各自的专有协议来访问。")])]),v._v(" "),e("h2",{attrs:{id:"浏览器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[v._v("#")]),v._v(" 浏览器")]),v._v(" "),e("blockquote",[e("p",[v._v("浏览器的正式名字叫“"),e("code",[v._v("Web Browser")]),v._v("”，顾名思义，就是检索、查看互联网上网页资源的应用程序")])]),v._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/resource/image/61/8b/613fffb6defee1735431dc5f89085d8b.png",alt:"常见浏览器"}})]),v._v(" "),e("p",[v._v("Chrome、Firefox、Safari、IE、Edge、Opera。。。")]),v._v(" "),e("p",[e("strong",[v._v("浏览器本质")]),v._v("上是一个 HTTP 协议中的"),e("code",[v._v("请求方")]),v._v("，使用 HTTP 协议获取网络上的各种资源。集成了很多额外的功能")]),v._v(" "),e("blockquote",[e("p",[v._v("比如：HTML 排版引擎用来展示页面，JavaScript 引擎用来实现动态化效果，甚至还有开发者工具用来调试网页，等等插件和扩展。")])]),v._v(" "),e("p",[v._v("在 HTTP 协议里，浏览器的角色被称为“"),e("code",[v._v("User Agent")]),v._v("”即“"),e("code",[v._v("用户代理")]),v._v("”，作为访问者的“"),e("code",[v._v("代理")]),v._v("”来发起 HTTP 请求。")]),v._v(" "),e("h2",{attrs:{id:"web-服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-服务器"}},[v._v("#")]),v._v(" Web 服务器")]),v._v(" "),e("p",[v._v("浏览器是 HTTP 里的"),e("code",[v._v("请求方")]),v._v("，另一端的"),e("code",[v._v("应答方（响应方）")]),v._v("就是"),e("code",[v._v("服务器")]),v._v("，"),e("code",[v._v("Web Server")]),v._v("。")]),v._v(" "),e("p",[e("strong",[v._v("Web 服务器两个层面的含义：")])]),v._v(" "),e("p",[e("strong",[v._v("硬件")]),v._v("含义：物理形式或“云”形式的机器")]),v._v(" "),e("p",[e("strong",[v._v("软件")]),v._v("含义：提供 Web 服务的应用程序")]),v._v(" "),e("p",[e("code",[v._v("Apache")]),v._v("、"),e("code",[v._v("Nginx")]),v._v("、Windows 上的 IIS、Java 的 Jetty/Tomcat 等")]),v._v(" "),e("h2",{attrs:{id:"cdn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[v._v("#")]),v._v(" CDN")]),v._v(" "),e("blockquote",[e("p",[v._v("CDN，全称"),e("code",[v._v("Content Delivery Network")]),v._v("（"),e("code",[v._v("内容分发网络")]),v._v("）。应用了 HTTP 协议里的缓存和代理技术，代替源站响应客户端的请求。")])]),v._v(" "),e("p",[e("strong",[v._v("好处")]),v._v("：它可以缓存源站的数据。如果 CDN 的调度算法很优秀，更可以找到离用户最近的节点，大幅度缩短响应时间。")]),v._v(" "),e("p",[e("strong",[v._v("其他")]),v._v("：CDN 除了基本的"),e("code",[v._v("网络加速")]),v._v("外，还提供"),e("code",[v._v("负载均衡")]),v._v("、"),e("code",[v._v("安全防护")]),v._v("、"),e("code",[v._v("边缘计算")]),v._v("、"),e("code",[v._v("跨运营商网络")]),v._v("等功能")]),v._v(" "),e("h2",{attrs:{id:"爬虫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#爬虫"}},[v._v("#")]),v._v(" 爬虫")]),v._v(" "),e("blockquote",[e("p",[v._v("“"),e("code",[v._v("爬虫")]),v._v("”（Crawler），实际上是一种可以"),e("code",[v._v("自动访问 Web 资源")]),v._v("的应用程序。")])]),v._v(" "),e("p",[e("strong",[v._v("1、来源")]),v._v("：绝大多数"),e("code",[v._v("爬虫")]),v._v("是由各大搜索引擎“放”出来的，抓取网页存入庞大的数据库，再建立关键字索引，这样我们才能够在搜索引擎中快速地搜索到互联网角落里的页面。")]),v._v(" "),e("p",[e("strong",[v._v("2、爬虫坏处")]),v._v("：它会过度消耗网络资源，占用服务器和带宽，影响网站对真实数据的分析，甚至导致敏感信息泄漏。")]),v._v(" "),e("p",[e("strong",[v._v("3、“君子协定”")]),v._v("："),e("code",[v._v("robots.txt")]),v._v("约定哪些该爬，哪些不该爬。")]),v._v(" "),e("p",[e("strong",[v._v("4、基本技术")]),v._v("：无论是“"),e("code",[v._v("爬虫")]),v._v("”还是“"),e("code",[v._v("反爬虫")]),v._v("”，用到的基本技术都是两个，一个是 "),e("code",[v._v("HTTP")]),v._v("，另一个就是 "),e("code",[v._v("HTML")]),v._v("。")]),v._v(" "),e("h2",{attrs:{id:"html-webservice-waf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-webservice-waf"}},[v._v("#")]),v._v(" HTML/WebService/WAF")]),v._v(" "),e("p",[e("strong",[v._v("1、HTML")]),v._v(" 是 HTTP 协议传输的主要内容之一，它描述了超文本页面，用各种“标签”定义文字、图片等资源和排版布局，最终由浏览器“渲染”出可视化页面。")]),v._v(" "),e("p",[e("strong",[v._v("2、Web Service")]),v._v("：是一种由 "),e("code",[v._v("W3C")]),v._v(" 定义的应用服务开发规范，使用 "),e("code",[v._v("client-server")]),v._v(" 主从架构，通常使用 "),e("code",[v._v("WSDL")]),v._v(" 定义服务接口，使用 "),e("code",[v._v("HTTP")]),v._v(" 协议传输 "),e("code",[v._v("XML")]),v._v(" 或 "),e("code",[v._v("SOAP")]),v._v(" 消息，也就是说，它是一个基于 Web（HTTP）的"),e("code",[v._v("服务架构技术")]),v._v("，既可以运行在内网，也可以在适当保护后运行在外网。")]),v._v(" "),e("p",[e("strong",[v._v("3、WAF")]),v._v("：是“"),e("code",[v._v("网络应用防火墙")]),v._v("”。与硬件“"),e("code",[v._v("防火墙")]),v._v("”类似，它是应用层面的“防火墙”，"),e("code",[v._v("专门检测 HTTP 流量")]),v._v("，是防护 Web 应用的安全技术。")]),v._v(" "),e("p",[v._v("WAF 通常位于 Web 服务器之前，可以阻止如 "),e("code",[v._v("SQL 注入")]),v._v("、"),e("code",[v._v("跨站脚本")]),v._v("等攻击，目前应用较多的一个开源项目是 "),e("code",[v._v("ModSecurity")]),v._v("，它能够完全集成进 Apache 或 Nginx。")]),v._v(" "),e("h2",{attrs:{id:"要点小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#要点小结"}},[v._v("#")]),v._v(" 要点小结")]),v._v(" "),e("p",[v._v("1、互联网上绝大部分资源都使用 HTTP 协议传输")]),v._v(" "),e("p",[v._v("2、浏览器是 HTTP 协议里的请求方，即 User Agent")]),v._v(" "),e("p",[v._v("3、服务器是 HTTP 协议里的应答方，常用的有 Apache 和 Nginx")]),v._v(" "),e("p",[v._v("4、CDN 位于浏览器和服务器之间，主要起到缓存加速的作用")]),v._v(" "),e("p",[v._v("5、爬虫是另一类 User Agent，是自动访问网络资源的程序")])])}),[],!1,null,null,null);_.default=o.exports}}]);