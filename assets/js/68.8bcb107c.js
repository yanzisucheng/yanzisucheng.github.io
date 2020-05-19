(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{818:function(v,_,t){"use strict";t.r(_);var r=t(4),e=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[v._v("#")]),v._v(" 说明")]),v._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://time.geekbang.org/column/intro/189",target:"_blank",rel:"noopener noreferrer"}},[v._v("《透视HTTP协议》"),t("OutboundLink")],1),v._v("是 "),t("code",[v._v("罗剑锋")]),v._v(" （奇虎360技术专家）在极客时间开的一门专栏课，笔者记录一下学习笔记，仅供参考。")])]),v._v(" "),t("p",[v._v("据 "),t("code",[v._v("NetCraft")]),v._v(" 公司统计，目前全球至少有 16 亿个网站、2 亿多个独立域名，而这个庞大网络世界的底层运转机制就是 HTTP。")]),v._v(" "),t("h2",{attrs:{id:"史前时期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#史前时期"}},[v._v("#")]),v._v(" 史前时期")]),v._v(" "),t("p",[t("strong",[v._v("20 世纪 60 年代：")])]),v._v(" "),t("p",[v._v("美国国防部高等研究计划署（"),t("code",[v._v("ARPA")]),v._v("）建立了 "),t("code",[v._v("ARPA")]),v._v(" 网，它有四个分布在各地的节点，被认为是如今互联网的 "),t("code",[v._v("始祖")]),v._v("。")]),v._v(" "),t("p",[t("strong",[v._v("70 年代：")])]),v._v(" "),t("p",[v._v("基于对 "),t("code",[v._v("ARPA")]),v._v(" 网的实践和思考，发明出了著名的 "),t("code",[v._v("TCP/IP")]),v._v(" 协议。")]),v._v(" "),t("p",[t("strong",[v._v("80 年代：")])]),v._v(" "),t("p",[v._v("由于 TCP/IP 协议具有良好的分层结构和稳定的性能，并在 80 年代中期进入了 UNIX 系统内核，促使更多的计算机接入了互联网。")]),v._v(" "),t("h2",{attrs:{id:"创世纪"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创世纪"}},[v._v("#")]),v._v(" 创世纪")]),v._v(" "),t("p",[t("strong",[v._v("年份")]),v._v("：1989 年")]),v._v(" "),t("p",[t("strong",[v._v("人物")]),v._v("：蒂姆·伯纳斯 - 李（Tim Berners-Lee）")]),v._v(" "),t("p",[t("strong",[v._v("任职")]),v._v("：欧洲核子研究中心（CERN）")]),v._v(" "),t("p",[t("strong",[v._v("事件")]),v._v("：发表了一篇论文，提出了在互联网上构建超链接文档系统的构想。")]),v._v(" "),t("p",[v._v("该篇论文中他确立了三项关键技术：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("URI")]),v._v("：即统一资源标识符，作为互联网上资源的唯一身份")]),v._v(" "),t("li",[t("strong",[v._v("HTML")]),v._v("：即超文本标记语言，描述超文本文档")]),v._v(" "),t("li",[t("strong",[v._v("HTTP")]),v._v("：即超文本传输协议，用来传输超文本")])]),v._v(" "),t("p",[v._v("基于它们，就可以把超文本系统完美地运行在互联网上，让各地的人们能够自由地共享信息，蒂姆把这个系统称为“万维网”（"),t("code",[v._v("World Wide Web")]),v._v("）。Http在这一年也开始它伟大的征途。")]),v._v(" "),t("h2",{attrs:{id:"http-0-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-0-9"}},[v._v("#")]),v._v(" HTTP/0.9")]),v._v(" "),t("p",[t("strong",[v._v("时间")]),v._v("：20 世纪 90 年代初期")]),v._v(" "),t("p",[t("strong",[v._v("背景")]),v._v("：互联网世界非常简陋，计算机处理能力低，存储容量小，网速很慢，还是一片“信息荒漠”。")]),v._v(" "),t("p",[t("strong",[v._v("HTTP情况")]),v._v("：")]),v._v(" "),t("p",[v._v("1、这一时期的 HTTP 被定义为 0.9 版，结构比较简单，为了便于服务器和客户端处理，它也采用了纯文本格式。")]),v._v(" "),t("p",[v._v("2、蒂姆·伯纳斯 - 李最初设想的系统里的文档都是只读的，所以只允许用“GET”动作从服务器上获取 HTML 文档，并且在响应请求之后立即关闭连接，功能非常有限。")]),v._v(" "),t("h2",{attrs:{id:"http-1-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0"}},[v._v("#")]),v._v(" HTTP/1.0")]),v._v(" "),t("p",[t("strong",[v._v("背景")]),v._v("：")]),v._v(" "),t("p",[v._v("1、1992 年发明了 JPEG 图像格式")]),v._v(" "),t("p",[v._v("2、1993 年，NCSA（美国国家超级计算应用中心）开发出了 Mosaic，是第一个可以图文混排的浏览器")]),v._v(" "),t("p",[v._v("3、1995 年开发出了服务器软件 Apache （源于NCSAhttpd服务器），简化了 HTTP 服务器的搭建工作。")]),v._v(" "),t("p",[v._v("4、1995 年发明了 MP3 音乐格式")]),v._v(" "),t("p",[t("strong",[v._v("HTTP情况")]),v._v("：")]),v._v(" "),t("p",[v._v("在已有实践的基础上，HTTP/1.0 版本在 1996 年正式发布。")]),v._v(" "),t("p",[v._v("HTTP/1.0 版本在多方面增强了 0.9 版：")]),v._v(" "),t("ul",[t("li",[v._v("增加了 HEAD、POST 等新方法")]),v._v(" "),t("li",[v._v("增加了响应状态码，标记可能的错误原因")]),v._v(" "),t("li",[v._v("引入了协议版本号概念")]),v._v(" "),t("li",[v._v("引入了 HTTP Header（头部）的概念，让 HTTP 处理请求和响应更加灵活")]),v._v(" "),t("li",[v._v("传输的数据不再仅限于文本")])]),v._v(" "),t("h2",{attrs:{id:"http-1-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[v._v("#")]),v._v(" HTTP/1.1")]),v._v(" "),t("p",[t("strong",[v._v("背景")]),v._v("：")]),v._v(" "),t("p",[v._v("时间：1995 年")]),v._v(" "),t("p",[v._v("事件：“浏览器大战”")]),v._v(" "),t("p",[v._v("参与者："),t("code",[v._v("网景的 Netscape Navigator")]),v._v(" VS "),t("code",[v._v("微软的 Internet Explorer")])]),v._v(" "),t("p",[v._v("结局：微软的 Internet Explorer 取得胜利。")]),v._v(" "),t("p",[t("strong",[v._v("HTTP情况")]),v._v("：")]),v._v(" "),t("p",[v._v("1、在“浏览器大战”结束之后的 1999 年，HTTP/1.1 发布了 RFC 文档，编号为 2616，正式确立了延续十余年的传奇。（“正式的标准”）")]),v._v(" "),t("p",[v._v("HTTP/1.1 主要的变更点有：")]),v._v(" "),t("ul",[t("li",[v._v("增加了 PUT、DELETE 等新的方法")]),v._v(" "),t("li",[v._v("增加了缓存管理和控制")]),v._v(" "),t("li",[v._v("明确了连接管理，允许持久连接")]),v._v(" "),t("li",[v._v("允许响应数据分块（chunked），利于传输大文件")]),v._v(" "),t("li",[v._v("强制要求 Host 头，让互联网主机托管成为可能")])]),v._v(" "),t("p",[v._v("2、2014 年又做了一次修订，把原来一个大文档拆分成6个较小的文档，编号为 7230-7235，优化了一些细节，没有实质性的改动。")]),v._v(" "),t("h2",{attrs:{id:"http-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[v._v("#")]),v._v(" HTTP/2")]),v._v(" "),t("p",[t("strong",[v._v("背景")]),v._v("：")]),v._v(" "),t("p",[v._v("1、一方面：HTTP、1.1发布之后，随着互联网爆发式的增长，出现了一些对HTTP不满的意见，主要就是连接慢，跟不上迅猛的发展。")]),v._v(" "),t("p",[v._v("2、另一方面：Google 首先开发了自己的浏览器 Chrome，然后推出了新的 "),t("code",[v._v("SPDY 协议")]),v._v("，并在 Chrome 里应用于自家的服务器，如同十多年前的网景与微软一样，从实际的用户方来“倒逼”HTTP 协议的变革，这也开启了第二次的“浏览器大战”。")]),v._v(" "),t("p",[t("strong",[v._v("结局")]),v._v("：")]),v._v(" "),t("p",[v._v("胜利者是 Google，Chrome 目前的全球的占有率超过了 60%。Google 借此顺势把 SPDY 推上了标准的宝座，互联网标准化组织以 SPDY 为基础开始制定新版本的 HTTP 协议，最终在 2015 年发布了 HTTP/2，RFC 编号 7540。")]),v._v(" "),t("p",[t("strong",[v._v("特点")]),v._v("：")]),v._v(" "),t("ul",[t("li",[v._v("二进制协议，不再是纯文本")]),v._v(" "),t("li",[v._v("可发起多个请求，废弃了 1.1 里的管道")]),v._v(" "),t("li",[v._v("使用专用算法压缩头部，减少数据传输量")]),v._v(" "),t("li",[v._v("允许服务器主动向客户端推送数据")]),v._v(" "),t("li",[v._v("增强了安全性，“事实上”要求加密通信")])]),v._v(" "),t("p",[v._v("目前它的普及率还比较低，HTTP/1.1太过于经典和强势了，哈哈哈。。。")]),v._v(" "),t("h2",{attrs:{id:"http-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-3"}},[v._v("#")]),v._v(" HTTP/3")]),v._v(" "),t("p",[v._v("在 HTTP/2 还处于草案之时，Google 又发明了一个新的协议，叫做 "),t("code",[v._v("QUIC")]),v._v("。")]),v._v(" "),t("p",[v._v("2018 年，互联网标准化组织 IETF 提议将“HTTP over QUIC”更名为“HTTP/3”并获得批准，HTTP/3 正式进入了标准化制订阶段。")]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("HTTP 协议始于三十年前蒂姆·伯纳斯 - 李的一篇论文")])]),v._v(" "),t("li",[t("p",[v._v("HTTP/0.9 是个简单的文本协议，只能获取文本资源")])]),v._v(" "),t("li",[t("p",[v._v("HTTP/1.0 确立了大部分现在使用的技术，但它不是正式标准")])]),v._v(" "),t("li",[t("p",[v._v("HTTP/1.1 是目前互联网上使用最广泛的协议，功能也非常完善")])]),v._v(" "),t("li",[t("p",[v._v("HTTP/2 基于 Google 的 SPDY 协议，注重性能改善，但还未普及")])]),v._v(" "),t("li",[t("p",[v._v("HTTP/3 基于 Google 的 QUIC 协议，是将来的发展方向")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);