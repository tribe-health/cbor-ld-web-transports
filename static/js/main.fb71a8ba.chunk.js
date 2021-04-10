(this["webpackJsonpcbor-ld-web-transports"]=this["webpackJsonpcbor-ld-web-transports"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),o=n.n(c),s=(n(65),n(15)),i=n(2),d=n.n(i),u=n(6),p=n(4),l=n(28),b=n(57),f=n(45),j=n.n(f),h=n(13),x=n(3),m=function(){var e=a.a.useState({}),t=Object(p.a)(e,2),n=t[0],r=t[1];a.a.useEffect((function(){n.base32EncodedCborLd||Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.c)(h.d);case 2:t=e.sent,r({jsonldDocument:h.d,base32EncodedCborLd:t});case 4:case"end":return e.stop()}}),e)})))()}));var c=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}return e.t0=r,e.t1=s.a,e.t2=Object(s.a)({},n),e.t3={},e.next=7,Object(h.a)(t);case 7:e.t4=e.sent,e.t5={scannedQrCode:e.t4},e.t6=(0,e.t1)(e.t2,e.t3,e.t5),(0,e.t0)(e.t6);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(l.a,{container:!0,spacing:8,children:[Object(x.jsxs)(l.a,{item:!0,xs:12,children:[Object(x.jsx)("h3",{children:"CBOR-LD"}),Object(x.jsx)("p",{children:n.scannedQrCode?"Decoded CBOR-LD.":"Use a mirror to scan the QR Code."})]}),!n.scannedQrCode&&Object(x.jsx)(l.a,{item:!0,xs:12,sm:6,children:Object(x.jsx)(j.a,{delay:300,onScan:c,onError:function(e){console.error(e)},style:{maxWidth:"".concat(512,"px")}})}),Object(x.jsx)(l.a,{item:!0,sm:6,children:Object(x.jsx)(b.a,{data:n.base32EncodedCborLd||"",logo:{image:window.location+"/logo192.png"},fgColor:"#594aa8",height:512,width:512,ecLevel:"M"})}),n.scannedQrCode&&Object(x.jsx)(l.a,{item:!0,sm:6,children:Object(x.jsx)("pre",{children:JSON.stringify(n.scannedQrCode,null,2)})})]})})},O=n(56);var w=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m,{}),Object(x.jsx)(O.a,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root")),v()},13:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return j}));var r=n(2),a=n.n(r),c=n(6),o=n(33),s=n(32),i=n(48),d=n.n(i),u=n(49),p=n.n(u);function l(e){return Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("")}var b={"@context":["https://www.w3.org/ns/did/v1"],id:"did:key:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"},f=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.b)({jsonldDocument:t,documentLoader:s.a});case 2:return n=e.sent,r=d()(n,"RFC4648").replace(/=/g,""),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Uint8Array.from(e.from(p()(n,"RFC4648"))),t.next=3,Object(o.a)({cborldBytes:r,documentLoader:s.a});case 3:return c=t.sent,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}).call(this,n(29).Buffer)},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(2),a=n.n(r),c=n(6),o=n(47),s=n.n(o),i=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.startsWith("http")){e.next=5;break}return e.next=3,s.a.get(t);case 3:return n=e.sent,e.abrupt("return",{documentUrl:t,document:n.data});case 5:throw console.error(t),new Error("unsupported iri "+t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},56:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return j}));var r=n(7),a=n(2),c=n.n(a),o=n(15),s=n(6),i=n(4),d=n(0),u=n.n(d),p=n(28),l=n(58),b=n(13),f=n(3),j=function(){var t=u.a.useState({}),n=Object(i.a)(t,2),a=n[0],d=n[1];return u.a.useEffect((function(){a.base32EncodedCborLd||Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)(b.d);case 2:t=e.sent,d(Object(o.a)(Object(o.a)({},a),{},{jsonldDocument:b.d,base32EncodedCborLd:t}));case 4:case"end":return e.stop()}}),e)})))()})),Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(p.a,{container:!0,spacing:8,children:[Object(f.jsxs)(p.a,{item:!0,xs:12,children:[Object(f.jsx)("h3",{children:"Web NFC"}),Object(f.jsx)("p",{children:"Web NFC is not supported by Apple."}),Object(f.jsx)("p",{children:a.readFromTag?"Decoded CBOR-LD from NFC Tag using Web NFC!":"Click Write and hold an NDEF compatible NFC Tag next to your phone."})]}),!a.readFromTag&&Object(f.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(f.jsx)(l.a,{variant:"contained",color:"primary",onClick:Object(s.a)(c.a.mark((function t(){var n,r,o,s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!("NDEFReader"in window)){t.next=8;break}return n=window,r=n.NDEFReader,o=new r,s={recordType:"mime",mediaType:"application/ld+cbor",data:e.from(a.base32EncodedCborLd)},t.next=6,o.write({records:[s]});case 6:i=t.sent,d({res:i,write:!0});case 8:case"end":return t.stop()}}),t)}))),children:"Write"})}),Object(f.jsx)(p.a,{item:!0,sm:6,children:Object(f.jsx)(l.a,{variant:"contained",color:"primary",onClick:Object(s.a)(c.a.mark((function t(){var n,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"NDEFReader"in window&&(n=window,a=n.NDEFReader,(o=new a).scan().then((function(){console.log("Scan started successfully."),o.onerror=function(){console.log("Cannot read data from the NFC tag. Try another one?")},o.onreading=function(){var t=Object(s.a)(c.a.mark((function t(n){var a,o,s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=[],o=Object(r.a)(n.message.records),t.prev=2,o.s();case 4:if((s=o.n()).done){t.next=22;break}if(i=s.value,console.log("Record type:  "+i.recordType),console.log("MIME type:    "+i.mediaType),console.log("Record id:    "+i.id),console.log("Record data:    "+i.data),"application/ld+cbor"!==i.mediaType){t.next=20;break}return t.t0=a,t.t1=i.id,t.t2=i.recordType,t.t3=i.mediaType,t.next=17,Object(b.a)(e.from(Object(b.b)(i.data.buffer),"hex").toString("utf8"));case 17:t.t4=t.sent,t.t5={id:t.t1,recordType:t.t2,mediaType:t.t3,data:t.t4},t.t0.push.call(t.t0,t.t5);case 20:t.next=4;break;case 22:t.next=27;break;case 24:t.prev=24,t.t6=t.catch(2),o.e(t.t6);case 27:return t.prev=27,o.f(),t.finish(27);case 30:d({readFromTag:a});case 31:case"end":return t.stop()}}),t,null,[[2,24,27,30]])})));return function(e){return t.apply(this,arguments)}}()})));case 1:case"end":return t.stop()}}),t)}))),children:"Read"})}),a.readFromTag&&Object(f.jsx)(p.a,{item:!0,sm:6,children:Object(f.jsx)("pre",{children:JSON.stringify(a.readFromTag,null,2)})})]})})}}).call(this,n(29).Buffer)},65:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.fb71a8ba.chunk.js.map