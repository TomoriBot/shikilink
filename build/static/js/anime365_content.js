!function(){"use strict";var e,t,o,n=0,i=0;chrome.runtime.onMessage.addListener((function(l){if(l&&"page-rendered-anime365"===l.type&&(clearInterval(e),document.getElementById("videoFrame"))){var a,d,r,s,m,u=document.getElementById("videoFrame"),v=u.contentWindow;if(null!==(a=document.getElementsByClassName("m-select-sibling-episode").item(0))&&void 0!==a&&a.getElementsByTagName("i").item(1))o=(null===(s=document.getElementsByClassName("m-select-sibling-episode").item(0))||void 0===s||null===(m=s.getElementsByTagName("a").item(1))||void 0===m?void 0:m.href)||"/";else if("chevron_right"===(null===(d=document.getElementsByClassName("m-select-sibling-episode").item(0))||void 0===d||null===(r=d.getElementsByTagName("i").item(0))||void 0===r?void 0:r.textContent)){var c,f;o=(null===(c=document.getElementsByClassName("m-select-sibling-episode").item(0))||void 0===c||null===(f=c.getElementsByTagName("a").item(0))||void 0===f?void 0:f.href)||"/"}else o="/";e=setTimeout((function l(){var a,d;if(n=(null===v||void 0===v||null===(a=v.document.getElementsByTagName("video").item(0))||void 0===a?void 0:a.currentTime)||0,i=(null===v||void 0===v||null===(d=v.document.getElementsByTagName("video").item(0))||void 0===d?void 0:d.duration)||0,u&&i-15<=n&&i>0&&n>0&&"/"!==o){var r=null===v||void 0===v?void 0:v.document.getElementById("answer_is_forty_two");if(r){var s;n===i&&"/"!==o&&(document.location.href=o),null===(s=r.getElementsByTagName("a").item(0))||void 0===s||s.style.setProperty("--width",100*(i-n-15)*-1/15+"%")}else{var m=document.createElement("div"),c=document.createElement("a"),f=document.createElement("span");m.id="answer_is_forty_two",f.innerText="\u0414\u0430\u043b\u0435\u0435",c.title="\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",c.onclick=function(){var o,n;clearInterval(e),null===v||void 0===v||null===(o=v.document.getElementById("answer_is_forty_two"))||void 0===o||o.remove(),null===(n=t)||void 0===n||n.remove()},m.appendChild(c).appendChild(f),(t=null===v||void 0===v?void 0:v.document.head.appendChild(document.createElement("style"))).innerHTML='#answer_is_forty_two{background-color: #ff6d0033; position:absolute; bottom:10%; right:5%;}#answer_is_forty_two a{border-radius: 2px; display: block; cursor: pointer; width: 200px; height: 40px; line-height: 40px; font-size: 18px; font-family: sans-serif; text-decoration: none; color: #fff;border: 1px solid #fff;letter-spacing: 2px;text-align: center;position: relative;transition: all .35s;}#answer_is_forty_two a:after{border-radius: 2px; position: absolute; content: ""; top: 0; left: 0; width: var(--width, 0); height: 100%; background: #ff6d00; transition: all .35s;}#answer_is_forty_two a:hover{color: #fff; background: #ff6d0088;}#answer_is_forty_two a span{position: relative; z-index: 2;}';var g=null===v||void 0===v?void 0:v.document.getElementsByClassName("vjs-control-bar").item(0);g.parentNode.insertBefore(m,g)}}else{var p,y;null===v||void 0===v||null===(p=v.document.getElementById("answer_is_forty_two"))||void 0===p||p.remove(),null===(y=t)||void 0===y||y.remove()}e=setTimeout(l,500)}),500)}}))}();
//# sourceMappingURL=anime365_content.js.map