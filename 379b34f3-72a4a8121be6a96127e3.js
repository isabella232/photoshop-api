(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[505],{8300:function(e,t,n){"use strict";n.d(t,{o:function(){return Q}});var r=n(18),s=n(2137),i=n(7757),a=n.n(i),o=n(5007),c=n(6508),u=n(2275),l=n(465),m=n(7197),d=n(7851),f=n(2390),p=n(5900),h=n.n(p),g=n(5961),v=n(755);var y="688px",b="keywords",w=function(e,t){var n=new URLSearchParams(window.location.search);n.set(e,t),window.history.replaceState({},"",window.location.pathname+"?"+n)},Z=function(e){return e.map((function(e){return Object.keys(e)[0]}))},x=function(){var e=(0,s.Z)(a().mark((function e(t,n,s,i){var o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],"all"===Object.keys(s[0])[0]?s=i:(c=Z(s).filter((function(e){return"all"!==e})),s=[].concat((0,r.Z)(c),(0,r.Z)(i.filter((function(e){return!c.includes(e)}))))),s.forEach((function(e){o.push({indexName:e,query:n,params:{hitsPerPage:Math.ceil(10/s.length),attributesToRetrieve:["objectID","url","title","description"]}})})),e.next=5,t.multipleQueries(o);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),k=function(){var e=(0,s.Z)(a().mark((function e(t,n,r,s,i){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],(r="all"===r?s:[r]).forEach((function(e){o.push({indexName:e,query:n,params:{facets:[b],attributesToRetrieve:["objectID","url"],hitsPerPage:Math.ceil(100/r.length),filters:i.map((function(e){return'keywords:"'+e+'"'})).join(" AND ")}})})),e.next=5,t.multipleQueries(o);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s,i){return e.apply(this,arguments)}}(),z=function(e,t){e.forEach((function(e){var n=e.objectID,r=e.url,s=e._highlightResult;t.find((function(e){return e.url===r}))||t.push({objectID:n,url:r,_highlightResult:s})}))},S=function(e,t){e.keywords&&Object.keys(e.keywords).forEach((function(n){var r,s=t.find((function(e){return Object.keys(e)[0]===n}));s?s[n]+=e.keywords[n]:t.push(((r={})[n]=e.keywords[n],r))}))},A={name:"wciztf",styles:"position:fixed;z-index:1;top:calc(var(--spectrum-global-dimension-size-1200) + var(--spectrum-global-dimension-size-800));bottom:0;left:0;right:0;background-color:rgba(0, 0, 0, 0.4);pointer-events:none"},E={name:"5fn1g1",styles:"margin-top:var(--spectrum-global-dimension-size-100)"},_={name:"pcg0ds",styles:"width:var(--spectrum-global-dimension-size-2400);height:var(--spectrum-global-dimension-size-1200);margin-bottom:var(--spectrum-global-dimension-size-300);fill:var(--spectrum-global-color-static-gray-500)"},j={name:"rwu85d",styles:"margin:var(--spectrum-global-dimension-size-100) 0"},R={name:"1jwcxx3",styles:"font-style:italic"},N={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},q={name:"1hctma0",styles:"margin:var(--spectrum-global-dimension-size-300);mark,em{background-color:transparent;color:inherit;font-weight:700;font-style:inherit;}"},H={name:"13udsys",styles:"height:100%"},L={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},M={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},B={name:"11en623",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center"},I={name:"14gwd3k",styles:"margin-top:var(--spectrum-global-dimension-size-800);margin-bottom:var(--spectrum-global-dimension-size-800)"},D={name:"pgkztz",styles:"mark,em{background-color:transparent;color:inherit;font-weight:inherit;font-style:inherit;text-decoration:underline;}"},T={name:"a4hmbt",styles:"position:absolute"},C={name:"11qpleq",styles:"min-width:auto;width:100%"},P={name:"1d3w5wq",styles:"width:100%"},Q=function(e){var t=e.algolia,n=e.searchIndex,i=e.indexAll,p=e.showSearch,b=e.setShowSearch,Q=e.searchButtonId,O=(0,o.useState)(""),V=O[0],F=O[1],U=(0,o.useState)(Z(n)[0]),K=U[0],X=U[1],J=(0,o.useState)([]),G=J[0],W=J[1],Y=(0,o.useState)(!1),$=Y[0],ee=Y[1],te=(0,o.useState)(!1),ne=te[0],re=te[1],se=(0,o.useState)(!1),ie=se[0],ae=se[1],oe=(0,o.useRef)(null),ce=(0,o.useRef)(null),ue=(0,o.useRef)(null),le=(0,o.useRef)(null),me=(0,o.useState)([]),de=me[0],fe=me[1],pe=(0,o.useState)([]),he=pe[0],ge=pe[1],ve=(0,o.useState)([]),ye=ve[0],be=ve[1],we=(0,o.useState)(!1),Ze=we[0],xe=we[1],ke=(0,o.useState)(!1),ze=ke[0],Se=ke[1],Ae=(0,o.useRef)(null),Ee=(0,o.useState)(!1),_e=Ee[0],je=Ee[1],Re=function(e){var t;void 0===e&&(e=n[Z(n).indexOf(K)].tabRef),$&&null!==(t=e)&&void 0!==t&&t.current&&((0,l.Rp)(Ae,_e),(0,l.BA)(Ae,e))},Ne=function(){var e=(0,s.Z)(a().mark((function e(){var n,r,s,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!V.length){e.next=15;break}return xe(!1),w(f.AQ.query,V),w(f.AQ.keywords,G),w(f.AQ.index,K),Re(),ee(!0),e.next=9,k(t,V,K,i,G);case 9:r=e.sent,s=[],o=[],null!=r&&null!==(n=r.results)&&void 0!==n&&n.length&&r.results.forEach((function(e){var t=e.hits,n=e.facets;z(t,s),S(n,o)})),ge(s),be(o);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){if(p){var e=new URL(window.location).searchParams,t=e.get(f.AQ.query),n=e.get(f.AQ.keywords),r=e.get(f.AQ.index);r&&X(r),n&&W(n.split(",")),null!=t&&t.length&&(F(t),ae(!0),Se(!0)),null!=ue&&ue.current&&ue.current.focus()}}),[p]),(0,o.useEffect)((function(){Ne()}),[K,G]),(0,o.useEffect)((function(){ze&&(Se(!1),Ne())}),[ze,Se]),(0,o.useEffect)((function(){null!=le&&le.current&&(le.current.scrollTop=0)}),[he]),(0,o.useEffect)((function(){$?(Re(),je(!0)):je(!1)}),[$]),(0,o.useEffect)((function(){var e=function(e){var t=e.target;xe(!1),oe.current&&!oe.current.contains(t)&&t.id!==Q&&b(!1)};return document.addEventListener("click",e,!0),function(){document.removeEventListener("click",e,!0)}}),[xe,$,b,oe]),(0,o.useEffect)((function(){var e=function(e){"Escape"===e.key&&b(!1)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[b]),(0,c.tZ)(o.default.Fragment,null,(0,c.tZ)("div",{ref:oe,css:(0,c.iv)("position:fixed;top:var(--spectrum-global-dimension-size-800);left:0;right:0;",$&&"bottom: 0;"," background-color:var(--spectrum-global-color-static-white);z-index:10;@media screen and (max-width: ",f.q9,"){top:var(--spectrum-global-dimension-size-1200);}","")},(0,c.tZ)("div",{css:(0,c.iv)("position:relative;margin:var(--spectrum-global-dimension-size-400) auto;max-width:",y,";@media screen and (max-width: ",f.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},(0,c.tZ)("form",{css:P,className:"spectrum-Search",onSubmit:function(){var e=(0,s.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Ne();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},(0,c.tZ)("div",{className:h()("spectrum-Textfield",{"is-focused":ne}),css:C},(0,c.tZ)(g.Magnify,{className:"spectrum-Textfield-icon"}),(0,c.tZ)("input",{ref:ue,value:V,onFocus:function(){re(!0)},onBlur:function(){re(!1)},onKeyDown:function(e){var t=e.key;null!=ce&&ce.current&&("ArrowDown"===t?ce.current.querySelector('[tabindex="0"]').focus():"ArrowUp"===t&&ce.current.querySelector('[tabindex="0"]:last-of-type').focus())},onChange:function(){var e=(0,s.Z)(a().mark((function e(r){var s,o,c,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=r.target.value,F(s),!s.length){e.next=11;break}return ae(!0),e.next=6,x(t,s,n,i);case 6:null!=(c=e.sent)&&null!==(o=c.results)&&void 0!==o&&o.length?(u=[],c.results.forEach((function(e){var t=e.hits;z(t,u)})),fe(u),de.length||ee(!1)):fe([]),xe(!0),e.next=13;break;case 11:ae(!1),xe(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"aria-label":"Search",type:"search",placeholder:"Search",className:"spectrum-Textfield-input spectrum-Search-input",autoComplete:"off"})),ie&&(0,c.tZ)("button",{css:T,tabIndex:"-1","aria-label":"Clear Search",type:"reset",className:"spectrum-ClearButton spectrum-Search-clearButton",onClick:function(){F(""),ue.current.focus()}},(0,c.tZ)(g.Cross,null))),(0,c.tZ)(d.J,{isOpen:Ze,css:(0,c.iv)("position:absolute;top:var(--spectrum-global-dimension-size-400);width:",y,";@media screen and (max-width: ",f.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},de.length>0?(0,c.tZ)(m.v2,{ref:ce,onKeyDown:function(e){var t=e.key;if(null!=ce&&ce.current&&ce.current.contains(document.activeElement))if("ArrowDown"===t){var n=document.activeElement.nextElementSibling;n?n.focus():ce.current.querySelector('[tabindex="0"]').focus()}else if("ArrowUp"===t){var r=document.activeElement.previousElementSibling;r?r.focus():ce.current.querySelector('[tabindex="0"]:last-of-type').focus()}}},de.map((function(e){return(0,c.tZ)(m.ck,{key:e.objectID,href:""+location.origin+e.url},(0,c.tZ)("div",{css:D},(0,c.tZ)("strong",{dangerouslySetInnerHTML:{__html:e._highlightResult.title.value}})," -",(0,c.tZ)("span",{dangerouslySetInnerHTML:{__html:e._highlightResult.content.value}})))}))):(0,c.tZ)("div",{css:I},(0,c.tZ)("div",{css:B},(0,c.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeS",css:M},"No Results Found"),(0,c.tZ)("em",null,"Try another search term"))))),$&&(0,c.tZ)("div",{css:(0,c.iv)("display:flex;max-width:",f.Av,";margin:auto;height:100%;@media screen and (max-width: ",f.q9,"){overflow:auto;flex-wrap:wrap;}","")},(0,c.tZ)("div",{css:(0,c.iv)("display:flex;align-items:flex-start;flex-direction:column;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);min-width:",f.dP,";","")},(0,c.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:L},"Filter by"),(0,c.tZ)("div",{css:(0,c.iv)("margin-top:var(--spectrum-global-dimension-size-100);margin-bottom:var(--spectrum-global-dimension-size-1200);display:flex;flex-direction:column;overflow:auto;@media screen and (max-width: ",f.q9,"){margin-bottom:0;}","")},ye.length>0?ye.map((function(e,t){var n=Object.keys(e)[0];return(0,c.tZ)(v.X,{key:t,isSelected:G.includes(n),value:n,onChange:function(e){W(e?function(e){return[].concat((0,r.Z)(e),[n])}:G.filter((function(e){return e!==n})))}},(0,c.tZ)("span",null,n),(0,c.tZ)("em",null," (",e[n],")"))})):(0,c.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS"},"No filter options available"))),(0,c.tZ)("div",{css:H},(0,c.tZ)(l.mQ,{onFontsReady:function(){Re()}},n.map((function(e,t){var n=Object.keys(e)[0],r=e[n];return(0,c.tZ)(l.ck,{key:t,ref:function(t){e.tabRef={current:t}},selected:K===n,tabIndex:0,onClick:(0,s.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X(n);case 1:case"end":return e.stop()}}),e)})))},(0,c.tZ)(l.__,null,r))})),(0,c.tZ)(l.NN,{ref:Ae})),he.length>0?(0,c.tZ)("div",{ref:le,css:(0,c.iv)("height:calc(\n                      100% - var(--spectrum-global-dimension-size-800) - var(--spectrum-global-dimension-size-800) -\n                        var(--spectrum-global-dimension-size-200)\n                    );overflow:auto;@media screen and (max-width: ",f.q9,"){height:auto;overflow:inherit;}","")},he.map((function(e){var t=""+location.origin+e.url;return(0,c.tZ)("div",{css:q},(0,c.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeM",css:N},(0,c.tZ)(u.P,{to:t},(0,c.tZ)("span",{dangerouslySetInnerHTML:{__html:e._highlightResult.title.value}}))),(0,c.tZ)("div",{css:R},(0,c.tZ)(u.P,{variant:"secondary",to:t},t)),(0,c.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS",css:j,dangerouslySetInnerHTML:{__html:e._highlightResult.content.value}}))}))):(0,c.tZ)("div",{css:(0,c.iv)("position:absolute;top:var(--spectrum-global-dimension-size-3600);height:calc(2 * var(--spectrum-global-dimension-size-1250));margin-top:calc(-1 * var(--spectrum-global-dimension-size-1250));text-align:center;right:0;left:0;padding:0 var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",f.q9,"){position:static;margin:var(--spectrum-global-dimension-size-800) 0;height:auto;}","")},(0,c.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 104 90",css:_},(0,c.tZ)("g",null,(0,c.tZ)("g",null,(0,c.tZ)("path",{d:"M37.5,69A24.54,24.54,0,1,0,17,57.92l0,0L1.46,73.52A5,5,0,0,0,5,82.05H5a5,5,0,0,0,3.54-1.47L24.06,65l0,0A24.33,24.33,0,0,0,37.5,69Zm0-46A21.5,21.5,0,1,1,16,44.5,21.52,21.52,0,0,1,37.5,23ZM6.41,78.46A2,2,0,0,1,5,79.05H5a2,2,0,0,1-1.42-3.42L18.83,60.34a25.21,25.21,0,0,0,2.83,2.83Z"}),(0,c.tZ)("path",{d:"M28.67,53.33a1.51,1.51,0,0,0,1.06.44,1.49,1.49,0,0,0,1.06-.44l6.71-6.71,6.71,6.71a1.5,1.5,0,0,0,2.12,0,1.49,1.49,0,0,0,0-2.12L39.62,44.5l6.71-6.71a1.49,1.49,0,0,0,0-2.12,1.51,1.51,0,0,0-2.12,0L37.5,42.38l-6.71-6.71a1.5,1.5,0,0,0-2.12,2.12l6.71,6.71-6.71,6.71A1.51,1.51,0,0,0,28.67,53.33Z"}),(0,c.tZ)("path",{d:"M102.5,31a1.5,1.5,0,0,0-1.5,1.5V86.17a.83.83,0,0,1-.83.83H38.83a.83.83,0,0,1-.83-.83V73.5a1.5,1.5,0,0,0-3,0V86.17A3.84,3.84,0,0,0,38.83,90h61.34A3.84,3.84,0,0,0,104,86.17V32.5A1.5,1.5,0,0,0,102.5,31Z"}),(0,c.tZ)("path",{d:"M37.5,17A1.5,1.5,0,0,0,39,15.5V3.83A.83.83,0,0,1,39.83,3H75V26.5A1.5,1.5,0,0,0,76.5,28h25.55a1.5,1.5,0,0,0,1-2.57L77.55.43a1.43,1.43,0,0,0-.49-.32A1.41,1.41,0,0,0,76.52,0H39.83A3.84,3.84,0,0,0,36,3.83V15.5A1.5,1.5,0,0,0,37.5,17ZM78,5.07,98.37,25H78Z"})))),(0,c.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--light spectrum-Heading--sizeM"},"Sorry, we couldn't find any results for ",(0,c.tZ)("strong",null,V)),(0,c.tZ)("p",{className:"spectrum-Body spectrum-Body--S",css:E},"Make sure all the words are spelled correctly or try to refine your keywords."))))),!$&&(0,c.tZ)("div",{css:A}))}}}]);
//# sourceMappingURL=379b34f3-72a4a8121be6a96127e3.js.map