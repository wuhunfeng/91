import{i as e,n as t,t as n}from"./jsx-runtime-DyZJNswf.js";import{t as r}from"./createLucideIcon-B932Nfwo.js";import{t as i}from"./clock-3-0QdbNfcE.js";import{t as a}from"./eye-DMt9mY4Z.js";import{Et as o,it as s,pt as c,rt as l,tt as u,y as d}from"./index-B1qHKnjQ.js";import{t as f}from"./format-BrH1U6QE.js";import{a as p,i as m,l as h,o as g,r as _,t as v}from"./videoSource-BknDJl2o.js";var ee={name:`calendar-days`,size:24,node:[[`path`,{d:`M8 2v3`,key:`1ioesn`}],[`path`,{d:`M16 2v3`,key:`otl347`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,key:`h1oib`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M8 13h.01`,key:`1sbv64`}],[`path`,{d:`M12 13h.01`,key:`y0uutt`}],[`path`,{d:`M16 13h.01`,key:`wip0gl`}],[`path`,{d:`M8 17h.01`,key:`p3bg7i`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}],[`path`,{d:`M16 17h.01`,key:`ql8jdd`}]]};ee.node;var y=r(ee),b={name:`pencil`,size:24,node:[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}],[`path`,{d:`m15 5 4 4`,key:`1mk7zo`}]]};b.node;var x=r(b),S={name:`tag`,size:24,node:[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]};S.node;var C=r(S),w=e(t(),1),te=o(),T=n();function E({video:e,availableTags:t=[],availableTagsLoading:n=!1,availableTagsError:r=``,onRetryAvailableTags:i,tagSaving:a=!1,onTagsChange:o}){let[s,l]=(0,w.useState)(!1),[f,p]=(0,w.useState)(e.tags??[]),[m,h]=(0,w.useState)(``),g=(0,w.useId)(),_=(0,w.useRef)(null);d(s),u(s,()=>{a||b()});let v=e.tags??[],ee=(0,w.useMemo)(()=>[...t].sort((e,t)=>{let n=e.count??0,r=t.count??0;return r===n?e.label.localeCompare(t.label,`zh-Hans-CN`):r-n}),[t]);(0,w.useEffect)(()=>{if(!s)return;function e(e){e.key!==`Escape`||a||(e.preventDefault(),b())}let t=window.setTimeout(()=>{(_.current?.querySelector(`button:not(:disabled)`)??_.current)?.focus()},0);return document.addEventListener(`keydown`,e),()=>{window.clearTimeout(t),document.removeEventListener(`keydown`,e)}},[s,a]);function y(){p(v),h(``),l(!0)}function b(){l(!1),h(``)}async function S(){if(o){h(``);try{await o(f),l(!1)}catch(e){h(e instanceof Error?e.message:`保存标签失败`)}}}let E=s?(0,te.createPortal)((0,T.jsx)(`div`,{className:`vd-tag-editor-modal`,role:`presentation`,children:(0,T.jsxs)(`div`,{ref:_,className:`vd-tag-editor`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":g,tabIndex:-1,children:[(0,T.jsxs)(`header`,{className:`vd-tag-editor__head`,children:[(0,T.jsx)(`span`,{id:g,children:`选择适用的标签`}),(0,T.jsx)(`button`,{type:`button`,className:`vd-tag-editor__close`,onClick:b,disabled:a,"aria-label":`关闭`,children:(0,T.jsx)(c,{size:16})})]}),(0,T.jsx)(`div`,{className:`vd-tag-editor__grid`,children:n?(0,T.jsx)(`div`,{className:`vd-tag-editor__empty`,role:`status`,children:`正在加载标签…`}):r?(0,T.jsxs)(`div`,{className:`vd-tag-editor__empty`,role:`alert`,children:[(0,T.jsx)(`span`,{children:r}),i&&(0,T.jsx)(`button`,{type:`button`,className:`vd-tag-editor__retry`,onClick:i,children:`重新加载`})]}):ee.length===0?(0,T.jsx)(`div`,{className:`vd-tag-editor__empty`,children:`暂无可用标签`}):ee.map(e=>{let t=f.includes(e.label);return(0,T.jsx)(`button`,{type:`button`,className:`vd-tag-editor__chip${t?` is-active`:``}`,onClick:()=>p(t=>t.includes(e.label)?t.filter(t=>t!==e.label):[...t,e.label]),disabled:a,"aria-pressed":t,children:(0,T.jsx)(`span`,{children:e.label})},e.id)})}),m&&(0,T.jsx)(`div`,{className:`vd-tag-editor__error`,children:m}),(0,T.jsxs)(`div`,{className:`vd-tag-editor__actions`,children:[(0,T.jsx)(`button`,{type:`button`,className:`vd-tag-editor__btn`,onClick:b,disabled:a,children:`取消`}),(0,T.jsx)(`button`,{type:`button`,className:`vd-tag-editor__btn is-primary`,onClick:S,disabled:a||n||!!r,children:a?`保存中...`:`保存`})]})]})}),document.body):null;return(0,T.jsxs)(`section`,{className:`vd-info`,"aria-label":`视频信息`,children:[(0,T.jsxs)(`div`,{className:`vd-info__tags`,children:[(0,T.jsxs)(`div`,{className:`vd-info__section-head`,children:[(0,T.jsxs)(`span`,{className:`vd-info__section-title`,children:[(0,T.jsx)(C,{size:15,strokeWidth:2,"aria-hidden":`true`}),`标签`]}),o&&(0,T.jsxs)(`button`,{type:`button`,className:`vd-info__tags-edit`,onClick:y,"aria-label":`编辑标签`,children:[(0,T.jsx)(x,{size:13}),(0,T.jsx)(`span`,{children:`编辑`})]})]}),(0,T.jsx)(`div`,{className:`vd-info__tags-list`,children:v.length===0?(0,T.jsx)(`span`,{className:`vd-info__tags-empty`,children:`暂无标签`}):v.map(e=>(0,T.jsx)(`span`,{className:`vd-tag`,children:e},e))})]}),E]})}function ne({video:e}){let t=(e.sourceLabel??``).trim(),n=(e.duration??``).trim(),r=(e.publishedAt??``).trim(),o=re(t);return(0,T.jsxs)(`header`,{className:`vd-header`,children:[(0,T.jsx)(`div`,{className:`vd-header__row`,children:(0,T.jsxs)(`ul`,{className:`vd-meta`,"aria-label":`视频信息`,children:[t&&(0,T.jsx)(`li`,{className:`vd-meta__chip`,"data-tone":o||`neutral`,children:t}),n&&(0,T.jsxs)(`li`,{className:`vd-meta__chip vd-meta__chip--plain`,children:[(0,T.jsx)(i,{size:14,"aria-hidden":`true`}),n]}),(0,T.jsxs)(`li`,{className:`vd-meta__chip vd-meta__chip--plain`,children:[(0,T.jsx)(a,{size:14,"aria-hidden":`true`}),(0,T.jsx)(`strong`,{children:f(e.views)}),` 次观看`]}),r&&(0,T.jsxs)(`li`,{className:`vd-meta__chip vd-meta__chip--plain`,children:[(0,T.jsx)(y,{size:14,"aria-hidden":`true`}),r]})]})}),(0,T.jsx)(`h1`,{className:`vd-header__title`,title:e.title,children:e.title})]})}function re(e){let t=e.toLowerCase();return t.includes(`夸克`)||t.includes(`quark`)?`quark`:t.includes(`115`)||t.includes(`p115`)?`p115`:t.includes(`123`)||t.includes(`p123`)?`p123`:t.includes(`pikpak`)?`pikpak`:t.includes(`沃盘`)||t.includes(`wopan`)||t.includes(`联通`)?`wopan`:t.includes(`光鸭`)||t.includes(`guangyapan`)||t.includes(`guangya`)?`guangyapan`:t.includes(`onedrive`)||t.includes(`one drive`)?`onedrive`:t.includes(`webdav`)||t.includes(`web dav`)?`webdav`:t.includes(`本地`)||t.includes(`localstorage`)||t.includes(`local storage`)?`localstorage`:``}function ie(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,`default`)?e.default:e}var ae={exports:{}},D=ae.exports,O;function oe(){return O||(O=1,(function(e,t){(function(t,n){e.exports=n()})(D,function(){function e(t){return(e=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e})(t)}var t=Object.prototype.toString,n=function(n){if(n===void 0)return`undefined`;if(n===null)return`null`;var i=e(n);if(i===`boolean`)return`boolean`;if(i===`string`)return`string`;if(i===`number`)return`number`;if(i===`symbol`)return`symbol`;if(i===`function`)return(function(e){return r(e)===`GeneratorFunction`})(n)?`generatorfunction`:`function`;if((function(e){return Array.isArray?Array.isArray(e):e instanceof Array})(n))return`array`;if((function(e){return e.constructor&&typeof e.constructor.isBuffer==`function`?e.constructor.isBuffer(e):!1})(n))return`buffer`;if((function(e){try{if(typeof e.length==`number`&&typeof e.callee==`function`)return!0}catch(e){if(e.message.indexOf(`callee`)!==-1)return!0}return!1})(n))return`arguments`;if((function(e){return e instanceof Date||typeof e.toDateString==`function`&&typeof e.getDate==`function`&&typeof e.setDate==`function`})(n))return`date`;if((function(e){return e instanceof Error||typeof e.message==`string`&&e.constructor&&typeof e.constructor.stackTraceLimit==`number`})(n))return`error`;if((function(e){return e instanceof RegExp||typeof e.flags==`string`&&typeof e.ignoreCase==`boolean`&&typeof e.multiline==`boolean`&&typeof e.global==`boolean`})(n))return`regexp`;switch(r(n)){case`Symbol`:return`symbol`;case`Promise`:return`promise`;case`WeakMap`:return`weakmap`;case`WeakSet`:return`weakset`;case`Map`:return`map`;case`Set`:return`set`;case`Int8Array`:return`int8array`;case`Uint8Array`:return`uint8array`;case`Uint8ClampedArray`:return`uint8clampedarray`;case`Int16Array`:return`int16array`;case`Uint16Array`:return`uint16array`;case`Int32Array`:return`int32array`;case`Uint32Array`:return`uint32array`;case`Float32Array`:return`float32array`;case`Float64Array`:return`float64array`}if((function(e){return typeof e.throw==`function`&&typeof e.return==`function`&&typeof e.next==`function`})(n))return`generator`;switch(i=t.call(n)){case`[object Object]`:return`object`;case`[object Map Iterator]`:return`mapiterator`;case`[object Set Iterator]`:return`setiterator`;case`[object String Iterator]`:return`stringiterator`;case`[object Array Iterator]`:return`arrayiterator`}return i.slice(8,-1).toLowerCase().replace(/\s/g,``)};function r(e){return e.constructor?e.constructor.name:null}function i(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:[`option`];return a(e,t,r),o(e,t,r),(function(e,t,r){var s=n(t),c=n(e);if(s===`object`){if(c!==`object`)throw Error(`[Type Error]: '${r.join(`.`)}' require 'object' type, but got '${c}'`);Object.keys(t).forEach(function(n){var s=e[n],c=t[n],l=r.slice();l.push(n),a(s,c,l),o(s,c,l),i(s,c,l)})}if(s===`array`){if(c!==`array`)throw Error(`[Type Error]: '${r.join(`.`)}' require 'array' type, but got '${c}'`);e.forEach(function(n,s){var c=e[s],l=t[s]||t[0],u=r.slice();u.push(s),a(c,l,u),o(c,l,u),i(c,l,u)})}})(e,t,r),e}function a(e,t,r){if(n(t)===`string`){var i=n(e);if(t[0]===`?`&&(t=t.slice(1)+`|undefined`),!(-1<t.indexOf(`|`)?t.split(`|`).map(function(e){return e.toLowerCase().trim()}).filter(Boolean).some(function(e){return i===e}):t.toLowerCase().trim()===i))throw Error(`[Type Error]: '${r.join(`.`)}' require '${t}' type, but got '${i}'`)}}function o(e,t,r){if(n(t)===`function`){var i=t(e,n(e),r);if(!0!==i){var a=n(i);throw a===`string`?Error(i):a===`error`?i:Error(`[Validator Error]: The scheme for '${r.join(`.`)}' validator require return true, but got '${i}'`)}}}return i.kindOf=n,i})})(ae)),ae.exports}var k=ie(oe()),se=`5.4.0`,ce={properties:`audioTracks.autoplay.buffered.controller.controls.crossOrigin.currentSrc.currentTime.defaultMuted.defaultPlaybackRate.duration.ended.error.loop.mediaGroup.muted.networkState.paused.playbackRate.played.preload.readyState.seekable.seeking.src.startDate.textTracks.videoTracks.volume`.split(`.`),methods:[`addTextTrack`,`canPlayType`,`load`,`play`,`pause`],events:[`abort`,`canplay`,`canplaythrough`,`durationchange`,`emptied`,`ended`,`error`,`loadeddata`,`loadedmetadata`,`loadstart`,`pause`,`play`,`playing`,`progress`,`ratechange`,`seeked`,`seeking`,`stalled`,`suspend`,`timeupdate`,`volumechange`,`waiting`],prototypes:[`width`,`height`,`videoWidth`,`videoHeight`,`poster`,`webkitDecodedFrameCount`,`webkitDroppedFrameCount`,`playsInline`,`webkitSupportsFullscreen`,`webkitDisplayingFullscreen`,`onenterpictureinpicture`,`onleavepictureinpicture`,`disablePictureInPicture`,`cancelVideoFrameCallback`,`requestVideoFrameCallback`,`getVideoPlaybackQuality`,`requestPictureInPicture`,`webkitEnterFullScreen`,`webkitEnterFullscreen`,`webkitExitFullScreen`,`webkitExitFullscreen`]},le=globalThis?.CUSTOM_USER_AGENT??(typeof navigator<`u`?navigator.userAgent:``),ue=/^(?:(?!chrome|android).)*safari/i.test(le),de=/iPad|iPhone|iPod/i.test(le)&&!window.MSStream,fe=de||le.includes(`Macintosh`)&&navigator.maxTouchPoints>=1,A=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(le)||fe,j=typeof window<`u`&&typeof document<`u`;function M(e,t=document){return t.querySelector(e)}function pe(e,t=document){return Array.from(t.querySelectorAll(e))}function N(e,t){return e.classList.add(t)}function P(e,t){return e.classList.remove(t)}function F(e,t){return e.classList.contains(t)}function I(e,t){return t instanceof Element?e.appendChild(t):e.insertAdjacentHTML(`beforeend`,String(t)),e.lastElementChild||e.lastChild}function me(e){return e.parentNode.removeChild(e)}function L(e,t,n){return e.style[t]=n,e}function he(e,t){for(let n in t)L(e,n,t[n]);return e}function ge(e,t,n=!0){let r=window.getComputedStyle(e,null).getPropertyValue(t);return n?Number.parseFloat(r):r}function _e(e){return Array.from(e.parentElement.children).filter(t=>t!==e)}function R(e,t){_e(e).forEach(e=>P(e,t)),N(e,t)}function z(e,t,n=`top`){A||(e.setAttribute(`aria-label`,t),N(e,`hint--rounded`),N(e,`hint--${n}`))}function ve(e,t=0){let n=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth,a=n.top-t<=r&&n.top+n.height+t>=0,o=n.left-t<=i+t&&n.left+n.width+t>=0;return a&&o}function ye(e,t){return Te(e).includes(t)}function be(e,t){return t.parentNode.replaceChild(e,t),e}function B(e){return document.createElement(e)}function xe(e=``,t=``){let n=B(`i`);return N(n,`art-icon`),N(n,`art-icon-${e}`),I(n,t),n}function Se(e,t){let n=document.getElementById(e);n||(n=document.createElement(`style`),n.id=e,document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>{document.head.appendChild(n)}):(document.head||document.documentElement).appendChild(n)),n.textContent=t}function Ce(){let e=document.createElement(`div`);return e.style.display=`flex`,e.style.display===`flex`}function V(e){return e.getBoundingClientRect()}function we(e,t){return new Promise((n,r)=>{let i=new Image;i.onload=function(){if(!t||t===1)n(i);else{let a=document.createElement(`canvas`),o=a.getContext(`2d`);a.width=i.width*t,a.height=i.height*t,o.drawImage(i,0,0,a.width,a.height),a.toBlob(t=>{let i=URL.createObjectURL(t),a=new Image;a.onload=function(){n(a)},a.onerror=function(){URL.revokeObjectURL(i),r(Error(`Image load failed: ${e}`))},a.src=i})}},i.onerror=function(){r(Error(`Image load failed: ${e}`))},i.src=e})}function Te(e){if(e.composedPath)return e.composedPath();let t=[],n=e.target;for(;n;)t.push(n),n=n.parentNode;return!t.includes(window)&&window!==void 0&&t.push(window),t}var Ee=class extends Error{constructor(e,t){super(e),typeof Error.captureStackTrace==`function`&&Error.captureStackTrace(this,t||this.constructor),this.name=`ArtPlayerError`}};function H(e,t){if(!e)throw new Ee(t);return e}function De(e){return e.includes(`?`)?De(e.split(`?`)[0]):e.includes(`#`)?De(e.split(`#`)[0]):e.trim().toLowerCase().split(`.`).pop()}function Oe(e,t){let n=document.createElement(`a`);n.style.display=`none`,n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}function U(e,t,n){return Math.max(Math.min(e,Math.max(t,n)),Math.min(t,n))}function ke(e){return e.charAt(0).toUpperCase()+e.slice(1)}function W(e){if(!e)return`00:00`;let t=e=>e<10?`0${e}`:String(e),n=Math.floor(e/3600),r=Math.floor((e-n*3600)/60),i=Math.floor(e-n*3600-r*60);return(n>0?[n,r,i]:[r,i]).map(t).join(`:`)}function Ae(e){return e.replace(/[&<>'"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,"'":`&#39;`,'"':`&quot;`})[e]||e)}function je(e){let t={"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&#39;":`'`,"&quot;":`"`},n=RegExp(`(${Object.keys(t).join(`|`)})`,`g`);return e.replace(n,e=>t[e]||e)}var G=Object.defineProperty,{hasOwnProperty:Me}=Object.prototype;function Ne(e,t){return Me.call(e,t)}function Pe(e,t){return Object.getOwnPropertyDescriptor(e,t)}function Fe(...e){let t=e=>e&&typeof e==`object`&&!Array.isArray(e);return e.reduce((e,n)=>(Object.keys(n).forEach(r=>{let i=e[r],a=n[r];e[r]=Array.isArray(i)&&Array.isArray(a)?i.concat(...a):t(i)&&t(a)?Fe(i,a):a}),e),{})}function Ie(e){return e.replace(/(\d\d:\d\d:\d\d)[,.](\d+)/g,(e,t,n)=>{let r=n.slice(0,3);return n.length===1&&(r=`${n}00`),n.length===2&&(r=`${n}0`),`${t},${r}`})}function Le(e){return`WEBVTT \r
\r
${Ie(e).replace(/\{\\([ibu])\}/g,`</$1>`).replace(/\{\\([ibu])1\}/g,`<$1>`).replace(/\{([ibu])\}/g,`<$1>`).replace(/\{\/([ibu])\}/g,`</$1>`).replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,`$1.$2`).replace(/\{[\s\S]*?\}/g,``).concat(`\r
\r
`)}`}function Re(e){return URL.createObjectURL(new Blob([e],{type:`text/vtt`}))}function ze(e){let t=RegExp(`Dialogue:\\s\\d,(\\d+:\\d\\d:\\d\\d.\\d\\d),(\\d+:\\d\\d:\\d\\d.\\d\\d),([^,]*),([^,]*),(?:[^,]*,){4}([\\s\\S]*)$`,`i`);function n(e=``){return e.split(/[:.]/).map((e,t,n)=>{if(t===n.length-1){if(e.length===1)return`.${e}00`;if(e.length===2)return`.${e}0`}else if(e.length===1)return(t===0?`0`:`:0`)+e;return t===0?e:t===n.length-1?`.${e}`:`:${e}`}).join(``)}return`WEBVTT

${e.split(/\r?\n/).map(e=>{let r=e.match(t);return r?{start:n(r[1].trim()),end:n(r[2].trim()),text:r[5].replace(/\{[\s\S]*?\}/g,``).replace(/(\\N)/g,`
`).trim().split(/\r?\n/).map(e=>e.trim()).join(`
`)}:null}).filter(e=>e).map((e,t)=>e?`${t+1}
${e.start} --> ${e.end}
${e.text}`:``).filter(e=>e.trim()).join(`

`)}`}function Be(e=0){return new Promise(t=>setTimeout(t,e))}function Ve(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>(n=null,e.apply(this,r)),t)}}function He(e,t){let n=!1;return function(...r){n||(e.apply(this,r),n=!0,setTimeout(()=>{n=!1},t))}}var Ue=Object.freeze(Object.defineProperty({__proto__:null,ArtPlayerError:Ee,addClass:N,append:I,assToVtt:ze,capitalize:ke,clamp:U,createElement:B,debounce:Ve,def:G,download:Oe,errorHandle:H,escape:Ae,get:Pe,getComposedPath:Te,getExt:De,getIcon:xe,getRect:V,getStyle:ge,has:Ne,hasClass:F,includeFromEvent:ye,inverseClass:R,isBrowser:j,isIOS:de,isIOS13:fe,isInViewport:ve,isMobile:A,isSafari:ue,loadImg:we,mergeDeep:Fe,query:M,queryAll:pe,remove:me,removeClass:P,replaceElement:be,secondToTime:W,setStyle:L,setStyleText:Se,setStyles:he,siblings:_e,sleep:Be,srtToVtt:Le,supportsFlex:Ce,throttle:He,tooltip:z,unescape:je,userAgent:le,vttToBlob:Re},Symbol.toStringTag,{value:`Module`})),We=`array`,K=`boolean`,q=`string`,J=`number`,Ge=`object`,Y=`function`;function Ke(e,t,n){return H(t===q||t===J||e instanceof Element,`${n.join(`.`)} require '${q}' or 'Element' type`)}var qe={html:Ke,disable:`?${K}`,name:`?${q}`,index:`?${J}`,style:`?${Ge}`,click:`?${Y}`,mounted:`?${Y}`,tooltip:`?${q}|${J}`,width:`?${J}`,selector:`?${We}`,onSelect:`?${Y}`,switch:`?${K}`,onSwitch:`?${Y}`,range:`?${We}`,onRange:`?${Y}`,onChange:`?${Y}`},Je={id:q,container:Ke,url:q,poster:q,type:q,theme:q,lang:q,volume:J,isLive:K,muted:K,autoplay:K,autoSize:K,autoMini:K,loop:K,flip:K,playbackRate:K,aspectRatio:K,screenshot:K,setting:K,hotkey:K,pip:K,mutex:K,backdrop:K,fullscreen:K,fullscreenWeb:K,subtitleOffset:K,miniProgressBar:K,useSSR:K,playsInline:K,lock:K,gesture:K,fastForward:K,autoPlayback:K,autoOrientation:K,airplay:K,proxy:`?${Y}`,plugins:[Y],layers:[qe],contextmenu:[qe],settings:[qe],controls:[{...qe,position:(e,t,n)=>{let r=[`top`,`left`,`right`];return H(r.includes(e),`${n.join(`.`)} only accept ${r.toString()} as parameters`)}}],quality:[{default:`?${K}`,html:q,url:q}],highlight:[{time:J,text:q}],thumbnails:{url:q,number:J,column:J,width:J,height:J,scale:J},subtitle:{url:q,name:q,type:q,style:Ge,escape:K,encoding:q,onVttLoad:Y},moreVideoAttr:Ge,i18n:Ge,icons:Ge,cssVar:Ge,customType:Ge},Ye=class{constructor(e){this.id=0,this.art=e,this.cache=new Map,this.add=this.add.bind(this),this.remove=this.remove.bind(this),this.update=this.update.bind(this)}get show(){return F(this.art.template.$player,`art-${this.name}-show`)}set show(e){let{$player:t}=this.art.template,n=`art-${this.name}-show`;e?N(t,n):P(t,n),this.art.emit(this.name,e)}toggle(){this.show=!this.show}add(e){let t=typeof e==`function`?e(this.art):e;if(t.html=t.html||``,k(t,qe),!this.$parent||!this.name||t.disable)return;let n=t.name||`${this.name}${this.id}`;H(!this.cache.has(n),`Can't add an existing [${n}] to the [${this.name}]`),this.id+=1;let r=B(`div`);N(r,`art-${this.name}`),N(r,`art-${this.name}-${n}`);let i=Array.from(this.$parent.children);r.dataset.index=t.index||this.id;let a=i.find(e=>Number(e.dataset.index)>=Number(r.dataset.index));a?a.insertAdjacentElement(`beforebegin`,r):I(this.$parent,r),t.html&&I(r,t.html),t.style&&he(r,t.style),t.tooltip&&z(r,t.tooltip);let o=[];if(t.click){let e=this.art.events.proxy(r,`click`,e=>{e.preventDefault(),t.click.call(this.art,this,e)});o.push(e)}return t.selector&&[`left`,`right`].includes(t.position)&&this.selector(t,r,o),this[n]=r,this.cache.set(n,{$ref:r,events:o,option:t}),t.mounted&&t.mounted.call(this.art,r),r}remove(e){H(this.cache.has(e),`Can't find [${e}] from the [${this.name}]`);let t=this.cache.get(e);t.option.beforeUnmount&&t.option.beforeUnmount.call(this.art,t.$ref);for(let e of t.events)this.art.events.remove(e);this.cache.delete(e),delete this[e],me(t.$ref)}update(e){if(this.cache.has(e.name)){let t=this.cache.get(e.name);e=Object.assign(t.option,e),this.remove(e.name)}return this.add(e)}};function Xe(e){return t=>{let{i18n:n,constructor:{ASPECT_RATIO:r}}=t,i=r.map(e=>`<span data-value="${e}">${e==="default"?n.get(`Default`):e}</span>`).join(``);return{...e,html:`${n.get(`Aspect Ratio`)}: ${i}`,click:(e,n)=>{let{value:r}=n.target.dataset;r&&(t.aspectRatio=r,e.show=!1)},mounted:e=>{let n=M(`[data-value="default"]`,e);n&&R(n,`art-current`),t.on(`aspectRatio`,t=>{let n=pe(`span`,e).find(e=>e.dataset.value===t);n&&R(n,`art-current`)})}}}}function Ze(e){return t=>({...e,html:t.i18n.get(`Close`),click:e=>{e.show=!1}})}function Qe(e){return t=>{let{i18n:n,constructor:{FLIP:r}}=t,i=r.map(e=>`<span data-value="${e}">${n.get(ke(e))}</span>`).join(``);return{...e,html:`${n.get(`Video Flip`)}: ${i}`,click:(e,n)=>{let{value:r}=n.target.dataset;r&&(t.flip=r.toLowerCase(),e.show=!1)},mounted:e=>{let n=M(`[data-value="normal"]`,e);n&&R(n,`art-current`),t.on(`flip`,t=>{let n=pe(`span`,e).find(e=>e.dataset.value===t);n&&R(n,`art-current`)})}}}}function $e(e){return t=>({...e,html:t.i18n.get(`Video Info`),click:e=>{t.info.show=!0,e.show=!1}})}function et(e){return t=>{let{i18n:n,constructor:{PLAYBACK_RATE:r}}=t,i=r.map(e=>`<span data-value="${e}">${e===1?n.get(`Normal`):e.toFixed(1)}</span>`).join(``);return{...e,html:`${n.get(`Play Speed`)}: ${i}`,click:(e,n)=>{let{value:r}=n.target.dataset;r&&(t.playbackRate=Number(r),e.show=!1)},mounted:e=>{let n=M(`[data-value="1"]`,e);n&&R(n,`art-current`),t.on(`video:ratechange`,()=>{let n=pe(`span`,e).find(e=>Number(e.dataset.value)===t.playbackRate);n&&R(n,`art-current`)})}}}}function tt(e){let t=j?location.href:``;return{...e,html:`<a href="https://artplayer.org?ref=${encodeURIComponent(t)}" target="_blank" style="width:100%;">ArtPlayer ${se}</a>`}}var nt=class extends Ye{constructor(e){super(e),this.name=`contextmenu`,this.$parent=e.template.$contextmenu,A||this.init()}init(){let{option:e,proxy:t,template:{$player:n,$contextmenu:r}}=this.art;e.playbackRate&&this.add(et({name:`playbackRate`,index:10})),e.aspectRatio&&this.add(Xe({name:`aspectRatio`,index:20})),e.flip&&this.add(Qe({name:`flip`,index:30})),this.add($e({name:`info`,index:40})),this.add(tt({name:`version`,index:50})),this.add(Ze({name:`close`,index:60}));for(let t=0;t<e.contextmenu.length;t++)this.add(e.contextmenu[t]);t(n,`contextmenu`,e=>{if(!this.art.constructor.CONTEXTMENU)return;e.preventDefault(),this.show=!0;let t=e.clientX,i=e.clientY,{height:a,width:o,left:s,top:c}=V(n),{height:l,width:u}=V(r),d=t-s,f=i-c;t+u>s+o&&(d=o-u),i+l>c+a&&(f=a-l),he(r,{top:`${f}px`,left:`${d}px`})}),t(n,`click`,e=>{ye(e,r)||(this.show=!1)}),this.art.on(`blur`,()=>{this.show=!1})}};function rt(e){return t=>({...e,tooltip:t.i18n.get(`AirPlay`),mounted:e=>{let{proxy:n,icons:r}=t;I(e,r.airplay),n(e,`click`,()=>t.airplay())}})}function it(e){return t=>({...e,tooltip:t.i18n.get(`Fullscreen`),mounted:e=>{let{proxy:n,icons:r,i18n:i}=t,a=I(e,r.fullscreenOn),o=I(e,r.fullscreenOff);L(o,`display`,`none`),n(e,`click`,()=>{t.fullscreen=!t.fullscreen}),t.on(`fullscreen`,t=>{t?(z(e,i.get(`Exit Fullscreen`)),L(a,`display`,`none`),L(o,`display`,`inline-flex`)):(z(e,i.get(`Fullscreen`)),L(a,`display`,`inline-flex`),L(o,`display`,`none`))})}})}function at(e){return t=>({...e,tooltip:t.i18n.get(`Web Fullscreen`),mounted:e=>{let{proxy:n,icons:r,i18n:i}=t,a=I(e,r.fullscreenWebOn),o=I(e,r.fullscreenWebOff);L(o,`display`,`none`),n(e,`click`,()=>{t.fullscreenWeb=!t.fullscreenWeb}),t.on(`fullscreenWeb`,t=>{t?(z(e,i.get(`Exit Web Fullscreen`)),L(a,`display`,`none`),L(o,`display`,`inline-flex`)):(z(e,i.get(`Web Fullscreen`)),L(a,`display`,`inline-flex`),L(o,`display`,`none`))})}})}function ot(e){return t=>({...e,tooltip:t.i18n.get(`PIP Mode`),mounted:e=>{let{proxy:n,icons:r,i18n:i}=t;I(e,r.pip),n(e,`click`,()=>{t.pip=!t.pip}),t.on(`pip`,t=>{z(e,i.get(t?`Exit PIP Mode`:`PIP Mode`))})}})}function st(e){return t=>({...e,mounted:e=>{let{proxy:n,icons:r,i18n:i}=t,a=I(e,r.play),o=I(e,r.pause);z(a,i.get(`Play`)),z(o,i.get(`Pause`)),n(a,`click`,()=>{t.play()}),n(o,`click`,()=>{t.pause()});function s(){L(a,`display`,`flex`),L(o,`display`,`none`)}function c(){L(a,`display`,`none`),L(o,`display`,`flex`)}t.playing?c():s(),t.on(`video:playing`,()=>{c()}),t.on(`video:pause`,()=>{s()})}})}function ct(e,t){let{$progress:n}=e.template,{left:r}=V(n),i=U((A?t.touches[0].clientX:t.clientX)-r,0,n.clientWidth),a=i/n.clientWidth*e.duration;return{second:a,time:W(a),width:i,percentage:U(i/n.clientWidth,0,1)}}function lt(e,t){if(e.isRotate){let n=t.touches[0].clientY/e.height,r=n*e.duration;e.emit(`setBar`,`played`,n,t),e.seek=r}else{let{second:n,percentage:r}=ct(e,t);e.emit(`setBar`,`played`,r,t),e.seek=n}}function ut(e){return t=>{let{icons:n,option:r,proxy:i}=t,{$player:a,$progress:o}=t.template;return{...e,html:`
                <div class="art-control-progress-inner">
                    <div class="art-progress-hover"></div>
                    <div class="art-progress-loaded"></div>
                    <div class="art-progress-played"></div>
                    <div class="art-progress-highlight"></div>
                    <div class="art-progress-indicator"></div>
                    <div class="art-progress-tip">00:00</div>
                </div>
            `,mounted:e=>{let s=null,c=!1,l=M(`.art-progress-hover`,e),u=M(`.art-progress-loaded`,e),d=M(`.art-progress-played`,e),f=M(`.art-progress-highlight`,e),p=M(`.art-progress-indicator`,e),m=M(`.art-progress-tip`,e);n.indicator?I(p,n.indicator):L(p,`backgroundColor`,`var(--art-theme)`);function h(n){let{width:r}=ct(t,n),{text:i}=n.target.dataset;m.textContent=i;let a=m.clientWidth;r<=a/2?L(m,`left`,0):r>e.clientWidth-a/2?L(m,`left`,`${e.clientWidth-a}px`):L(m,`left`,`${r-a/2}px`)}function g(n,r){let{width:i,time:a}=r||ct(t,n);m.textContent=a||`00:00`;let o=m.clientWidth;i<=o/2?L(m,`left`,0):i>e.clientWidth-o/2?L(m,`left`,`${e.clientWidth-o}px`):L(m,`left`,`${i-o/2}px`)}function _(){f.textContent=``;for(let e=0;e<r.highlight.length;e++){let n=r.highlight[e],i=U(n.time,0,t.duration)/t.duration*100,a=`<span data-text="${n.text}" data-time="${n.time}" style="left: ${i}%"></span>`;I(f,a)}}function v(n,r,i){let o=n===`played`&&i&&A;n===`loaded`&&L(u,`width`,`${r*100}%`),n===`hover`&&(L(l,`width`,`${r*100}%`),ye(i,f)?h(i):g(i),r===0?P(a,`art-progress-hover`):N(a,`art-progress-hover`)),n===`played`&&(L(d,`width`,`${r*100}%`),L(p,`left`,`${r*100}%`)),o&&(N(a,`art-progress-hover`),g(i,{width:e.clientWidth*r,time:W(r*t.duration)}),clearTimeout(s),s=setTimeout(()=>{P(a,`art-progress-hover`)},500))}t.on(`setBar`,v),t.on(`video:loadedmetadata`,_),t.constructor.USE_RAF?t.on(`raf`,()=>{t.emit(`setBar`,`played`,t.played),t.emit(`setBar`,`loaded`,t.loaded)}):(t.on(`video:timeupdate`,()=>{t.emit(`setBar`,`played`,t.played)}),t.on(`video:progress`,()=>{t.emit(`setBar`,`loaded`,t.loaded)}),t.on(`video:ended`,()=>{t.emit(`setBar`,`played`,1)})),t.emit(`setBar`,`loaded`,t.loaded||0),A||(i(o,`click`,e=>{e.target!==p&&lt(t,e)}),i(o,`mousemove`,e=>{let{percentage:n}=ct(t,e);t.emit(`setBar`,`hover`,n,e)}),i(o,`mouseleave`,e=>{t.emit(`setBar`,`hover`,0,e)}),i(o,`mousedown`,e=>{c=e.button===0}),t.on(`document:mousemove`,e=>{if(c){let{second:n,percentage:r}=ct(t,e);t.emit(`setBar`,`played`,r,e),t.seek=n}}),t.on(`document:mouseup`,()=>{c&&=!1}))}}}}function dt(e){return t=>({...e,tooltip:t.i18n.get(`Screenshot`),mounted:e=>{let{proxy:n,icons:r}=t;I(e,r.screenshot),n(e,`click`,()=>{t.screenshot()})}})}function ft(e){return t=>({...e,tooltip:t.i18n.get(`Show Setting`),mounted:e=>{let{proxy:n,icons:r,i18n:i}=t;I(e,r.setting),n(e,`click`,()=>{t.setting.toggle(),t.setting.resize()}),t.on(`setting`,t=>{z(e,i.get(t?`Hide Setting`:`Show Setting`))})}})}function pt(e){return t=>({...e,style:A?{fontSize:`12px`,padding:`0 5px`}:{cursor:`auto`,padding:`0 10px`},mounted:e=>{function n(){let n=`${W(t.currentTime)} / ${W(t.duration)}`;n!==e.textContent&&(e.textContent=n)}n();let r=[`video:loadedmetadata`,`video:timeupdate`,`video:progress`];for(let e=0;e<r.length;e++)t.on(r[e],n)}})}function mt(e){return t=>({...e,mounted:e=>{let{proxy:n,icons:r}=t,i=I(e,r.volume),a=I(e,r.volumeClose),o=I(e,`<div class="art-volume-panel"></div>`),s=I(o,`<div class="art-volume-inner"></div>`),c=I(s,`<div class="art-volume-val"></div>`),l=I(s,`<div class="art-volume-slider"></div>`),u=I(I(l,`<div class="art-volume-handle"></div>`),`<div class="art-volume-loaded"></div>`),d=I(l,`<div class="art-volume-indicator"></div>`);function f(e){let{top:t,height:n}=V(l);return 1-(e.clientY-t)/n}function p(){if(t.muted||t.volume===0)L(i,`display`,`none`),L(a,`display`,`flex`),L(d,`top`,`100%`),L(u,`top`,`100%`),c.textContent=0;else{let e=t.volume*100;L(i,`display`,`flex`),L(a,`display`,`none`),L(d,`top`,`${100-e}%`),L(u,`top`,`${100-e}%`),c.textContent=Math.floor(e)}}if(p(),t.on(`video:volumechange`,p),n(i,`click`,()=>{t.muted=!0}),n(a,`click`,()=>{t.muted=!1}),A)L(o,`display`,`none`);else{let e=!1;n(l,`mousedown`,n=>{e=n.button===0,t.volume=f(n)}),t.on(`document:mousemove`,n=>{e&&(t.muted=!1,t.volume=f(n))}),t.on(`document:mouseup`,()=>{e&&=!1})}}})}var ht=class extends Ye{constructor(e){super(e),this.isHover=!1,this.name=`control`,this.timer=Date.now();let{constructor:t}=e,{$player:n,$bottom:r}=this.art.template;e.on(`mousemove`,()=>{A||(this.show=!0)}),e.on(`click`,()=>{A?this.toggle():this.show=!0}),e.on(`document:mousemove`,e=>{this.isHover=ye(e,r)}),e.on(`video:timeupdate`,()=>{!e.setting.show&&!this.isHover&&!e.isInput&&e.playing&&this.show&&Date.now()-this.timer>=t.CONTROL_HIDE_TIME&&(this.show=!1)}),e.on(`control`,e=>{e?(P(n,`art-hide-cursor`),N(n,`art-hover`),this.timer=Date.now()):(N(n,`art-hide-cursor`),P(n,`art-hover`))}),this.init()}init(){let{option:e}=this.art;e.isLive||this.add(ut({name:`progress`,position:`top`,index:10})),this.add({name:`thumbnails`,position:`top`,index:20}),this.add(st({name:`playAndPause`,position:`left`,index:10})),this.add(mt({name:`volume`,position:`left`,index:20})),e.isLive||this.add(pt({name:`time`,position:`left`,index:30})),e.quality.length&&Be().then(()=>{this.art.quality=e.quality}),e.screenshot&&!A&&this.add(dt({name:`screenshot`,position:`right`,index:20})),e.setting&&this.add(ft({name:`setting`,position:`right`,index:30})),e.pip&&this.add(ot({name:`pip`,position:`right`,index:40})),e.airplay&&window.WebKitPlaybackTargetAvailabilityEvent&&this.add(rt({name:`airplay`,position:`right`,index:50})),e.fullscreenWeb&&this.add(at({name:`fullscreenWeb`,position:`right`,index:60})),e.fullscreen&&this.add(it({name:`fullscreen`,position:`right`,index:70}));for(let t=0;t<e.controls.length;t++)this.add(e.controls[t])}add(e){let t=typeof e==`function`?e(this.art):e,{$progress:n,$controlsLeft:r,$controlsRight:i}=this.art.template;switch(t.position){case`top`:this.$parent=n;break;case`left`:this.$parent=r;break;case`right`:this.$parent=i;break;default:H(!1,`Control option.position must one of 'top', 'left', 'right'`)}super.add(t)}check(e){if(e){e.$control_value.innerHTML=e.html;for(let t=0;t<e.$control_option.length;t++){let n=e.$control_option[t];n.default=n===e,n.default&&R(n.$control_item,`art-current`)}}}selector(e,t,n){let{proxy:r}=this.art.events;N(t,`art-control-selector`);let i=B(`div`);N(i,`art-selector-value`),I(i,e.html),t.textContent=``,I(t,i);let a=B(`div`);N(a,`art-selector-list`),I(t,a);for(let t=0;t<e.selector.length;t++){let n=e.selector[t],r=B(`div`);N(r,`art-selector-item`),n.default&&N(r,`art-current`),r.dataset.index=t,r.dataset.value=n.value,r.innerHTML=n.html,I(a,r),G(n,`$control_option`,{get:()=>e.selector}),G(n,`$control_item`,{get:()=>r}),G(n,`$control_value`,{get:()=>i})}let o=r(a,`click`,async t=>{let n=Te(t),r=e.selector.find(e=>e.$control_item===n.find(t=>e.$control_item===t));this.check(r),e.onSelect&&(i.innerHTML=await e.onSelect.call(this.art,r,r.$control_item,t))});n.push(o)}};function gt(e,t){let{constructor:n,template:{$player:r,$video:i}}=e;function a(t){ye(t,r)?(e.isInput=t.target.tagName===`INPUT`,e.isFocus=!0,e.emit(`focus`,t)):(e.isInput=!1,e.isFocus=!1,e.emit(`blur`,t))}e.on(`document:click`,a),e.on(`document:contextmenu`,a);let o=[];t.proxy(i,`click`,t=>{let r=Date.now();o.push(r);let{MOBILE_CLICK_PLAY:i,DBCLICK_TIME:a,MOBILE_DBCLICK_PLAY:s,DBCLICK_FULLSCREEN:c}=n,l=o.filter(e=>r-e<=a);switch(l.length){case 1:e.emit(`click`,t),A?!e.isLock&&i&&e.toggle():e.toggle(),o=l;break;case 2:e.emit(`dblclick`,t),A?!e.isLock&&s&&e.toggle():c&&(e.fullscreen=!e.fullscreen),o=[];break;default:o=[]}})}function _t(e,t){return Math.atan2(t,e)*180/Math.PI}function vt(e,t,n,r){let i=t-r,a=n-e,o=0;if(Math.abs(a)<2&&Math.abs(i)<2)return o;let s=_t(a,i);return s>=-45&&s<45?o=4:s>=45&&s<135?o=1:s>=-135&&s<-45?o=2:(s>=135&&s<=180||s>=-180&&s<-135)&&(o=3),o}function yt(e,t){if(A&&!e.option.isLive){let{$video:n,$progress:r}=e.template,i=null,a=!1,o=0,s=0,c=0,l=t=>{if(t.touches.length===1&&!e.isLock){i===r&&lt(e,t),a=!0;let{pageX:n,pageY:l}=t.touches[0];o=n,s=l,c=e.currentTime}},u=t=>{if(t.touches.length===1&&a&&e.duration){let{pageX:r,pageY:a}=t.touches[0],l=vt(o,s,r,a),u=[3,4].includes(l),d=[1,2].includes(l);if(u&&!e.isRotate||d&&e.isRotate){let l=U((r-o)/e.width,-1,1),u=U((a-s)/e.height,-1,1),d=e.isRotate?u:l,f=i===n?e.constructor.TOUCH_MOVE_RATIO:1,p=U(c+e.duration*d*f,0,e.duration);e.seek=p,e.emit(`setBar`,`played`,U(p/e.duration,0,1),t),e.notice.show=`${W(p)} / ${W(e.duration)}`}}};e.option.gesture&&(t.proxy(n,`touchstart`,e=>{i=n,l(e)}),t.proxy(n,`touchmove`,u)),t.proxy(r,`touchstart`,e=>{i=r,l(e)}),t.proxy(r,`touchmove`,u),e.on(`document:touchend`,()=>{a&&(o=0,s=0,c=0,a=!1,i=null)})}}function bt(e,t){let n=[`click`,`mouseup`,`keydown`,`touchend`,`touchmove`,`mousemove`,`pointerup`,`contextmenu`,`pointermove`,`visibilitychange`,`webkitfullscreenchange`],r=[`resize`,`scroll`,`orientationchange`],i=[];function a(a={}){for(let e=0;e<i.length;e++)t.remove(i[e]);i.length=0;let{$player:o}=e.template;n.forEach(n=>{let r=a.document||o.ownerDocument||document,s=t.proxy(r,n,t=>{e.emit(`document:${n}`,t)});i.push(s)}),r.forEach(n=>{let r=a.window||o.ownerDocument?.defaultView||window,s=t.proxy(r,n,t=>{e.emit(`window:${n}`,t)});i.push(s)})}a(),t.bindGlobalEvents=a}function xt(e,t){let{$player:n}=e.template;t.hover(n,t=>{N(n,`art-hover`),e.emit(`hover`,!0,t)},t=>{P(n,`art-hover`),e.emit(`hover`,!1,t)})}function St(e,t){let{$player:n}=e.template;t.proxy(n,`mousemove`,t=>{e.emit(`mousemove`,t)})}function Ct(e,t){let{option:n,constructor:r}=e;e.on(`resize`,()=>{let{aspectRatio:t,notice:r}=e;e.state===`standard`&&n.autoSize&&e.autoSize(),e.aspectRatio=t,r.show=``});let i=Ve(()=>e.emit(`resize`),r.RESIZE_TIME);e.on(`window:orientationchange`,()=>i()),e.on(`window:resize`,()=>i()),screen&&screen.orientation&&screen.orientation.onchange&&t.proxy(screen.orientation,`change`,()=>i())}function wt(e){if(e.constructor.USE_RAF){let t=null;(function n(){e.playing&&e.emit(`raf`),e.isDestroy||(t=requestAnimationFrame(n))})(),e.on(`destroy`,()=>{cancelAnimationFrame(t)})}}function Tt(e){let{option:t,constructor:n,template:{$container:r}}=e,i=He(()=>{e.emit(`view`,ve(r,n.SCROLL_GAP))},n.SCROLL_TIME);e.on(`window:scroll`,()=>i()),e.on(`view`,n=>{t.autoMini&&(e.mini=!n)})}var Et=class{constructor(e){this.destroyEvents=new Set,this.proxy=this.proxy.bind(this),this.hover=this.hover.bind(this),gt(e,this),xt(e,this),St(e,this),Ct(e,this),yt(e,this),Tt(e),bt(e,this),wt(e)}proxy(e,t,n,r={}){if(Array.isArray(t))return t.map(t=>this.proxy(e,t,n,r));e.addEventListener(t,n,r);let i=()=>e.removeEventListener(t,n,r);return this.destroyEvents.add(i),i}hover(e,t,n){t&&this.proxy(e,`mouseenter`,t),n&&this.proxy(e,`mouseleave`,n)}remove(e){if(this.destroyEvents.has(e))try{e()}catch(e){console.warn(`Failed to remove event listener:`,e)}finally{this.destroyEvents.delete(e)}}destroy(){for(let e of this.destroyEvents)try{e()}catch(e){console.warn(`Failed to destroy event listener:`,e)}this.destroyEvents.clear()}},Dt=class{constructor(e){this.art=e,this.keys={},A||this.init()}init(){let{constructor:e}=this.art;this.art.option.hotkey&&(this.add(`Escape`,()=>{this.art.fullscreenWeb&&(this.art.fullscreenWeb=!1)}),this.add(`Space`,()=>{this.art.toggle()}),this.add(`ArrowLeft`,()=>{this.art.backward=e.SEEK_STEP}),this.add(`ArrowUp`,()=>{this.art.volume+=e.VOLUME_STEP}),this.add(`ArrowRight`,()=>{this.art.forward=e.SEEK_STEP}),this.add(`ArrowDown`,()=>{this.art.volume-=e.VOLUME_STEP})),this.art.on(`document:keydown`,e=>{if(this.art.isFocus){let t=document.activeElement.tagName.toUpperCase(),n=document.activeElement.getAttribute(`contenteditable`);if(t!==`INPUT`&&t!==`TEXTAREA`&&n!==``&&n!==`true`&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey){let t=this.keys[e.code];if(t){e.preventDefault();for(let n=0;n<t.length;n++)t[n].call(this.art,e);this.art.emit(`hotkey`,e)}}}this.art.emit(`keydown`,e)})}add(e,t){return this.keys[e]?this.keys[e].includes(t)||this.keys[e].push(t):this.keys[e]=[t],this}remove(e,t){if(this.keys[e]){let n=this.keys[e].indexOf(t);n!==-1&&this.keys[e].splice(n,1),this.keys[e].length===0&&delete this.keys[e]}return this}},Ot={"Video Info":`统计信息`,Close:`关闭`,"Video Load Failed":`加载失败`,Volume:`音量`,Play:`播放`,Pause:`暂停`,Rate:`速度`,Mute:`静音`,"Video Flip":`画面翻转`,Horizontal:`水平`,Vertical:`垂直`,Reconnect:`重新连接`,"Show Setting":`显示设置`,"Hide Setting":`隐藏设置`,Screenshot:`截图`,"Play Speed":`播放速度`,"Aspect Ratio":`画面比例`,Default:`默认`,Normal:`正常`,Open:`打开`,"Switch Video":`切换`,"Switch Subtitle":`切换字幕`,Fullscreen:`全屏`,"Exit Fullscreen":`退出全屏`,"Web Fullscreen":`网页全屏`,"Exit Web Fullscreen":`退出网页全屏`,"Mini Player":`迷你播放器`,"PIP Mode":`开启画中画`,"Exit PIP Mode":`退出画中画`,"PIP Not Supported":`不支持画中画`,"Fullscreen Not Supported":`不支持全屏`,"Subtitle Offset":`字幕偏移`,"Last Seen":`上次看到`,"Jump Play":`跳转播放`,AirPlay:`隔空播放`,"AirPlay Not Available":`隔空播放不可用`};typeof window<`u`&&(window[`artplayer-i18n-zh-cn`]=Ot);var kt=class{constructor(e){this.art=e,this.languages={"zh-cn":Ot},this.language={},this.update(e.option.i18n)}init(){let e=this.art.option.lang.toLowerCase();this.language=this.languages[e]||{}}get(e){return this.language[e]||e}update(e){this.languages=Fe(this.languages,e),this.init()}},At=`<svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g>
        <path d="M16,1 L2,1 C1.447,1 1,1.447 1,2 L1,12 C1,12.553 1.447,13 2,13 L5,13 L5,11 L3,11 L3,3 L15,3 L15,11 L13,11 L13,13 L16,13 C16.553,13 17,12.553 17,12 L17,2 C17,1.447 16.553,1 16,1 L16,1 Z"></path>
        <polygon points="4 17 14 17 9 11"></polygon>
    </g>
</svg>
`,jt=`<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" version="1.1" viewBox="0 0 32 32">
    <path d="M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z" />
</svg>`,Mt=`<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" version="1.1" viewBox="0 0 32 32">
    <path d="m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z" />
</svg>`,Nt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_216"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_216)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill-opacity="1" d=" M12.437999725341797,-12.70199966430664 C12.437999725341797,-12.70199966430664 9.618000030517578,-9.881999969482422 9.618000030517578,-9.881999969482422 C8.82800006866455,-9.092000007629395 8.82800006866455,-7.831999778747559 9.618000030517578,-7.052000045776367 C9.618000030517578,-7.052000045776367 16.687999725341797,0.017999999225139618 16.687999725341797,0.017999999225139618 C16.687999725341797,0.017999999225139618 9.618000030517578,7.0879998207092285 9.618000030517578,7.0879998207092285 C8.82800006866455,7.877999782562256 8.82800006866455,9.137999534606934 9.618000030517578,9.918000221252441 C9.618000030517578,9.918000221252441 12.437999725341797,12.748000144958496 12.437999725341797,12.748000144958496 C13.227999687194824,13.527999877929688 14.48799991607666,13.527999877929688 15.267999649047852,12.748000144958496 C15.267999649047852,12.748000144958496 26.58799934387207,1.437999963760376 26.58799934387207,1.437999963760376 C27.368000030517578,0.6579999923706055 27.368000030517578,-0.6119999885559082 26.58799934387207,-1.3919999599456787 C26.58799934387207,-1.3919999599456787 15.267999649047852,-12.70199966430664 15.267999649047852,-12.70199966430664 C14.48799991607666,-13.491999626159668 13.227999687194824,-13.491999626159668 12.437999725341797,-12.70199966430664z M-12.442000389099121,-12.70199966430664 C-13.182000160217285,-13.442000389099121 -14.362000465393066,-13.482000350952148 -15.142000198364258,-12.821999549865723 C-15.142000198364258,-12.821999549865723 -15.272000312805176,-12.70199966430664 -15.272000312805176,-12.70199966430664 C-15.272000312805176,-12.70199966430664 -26.582000732421875,-1.3919999599456787 -26.582000732421875,-1.3919999599456787 C-27.32200050354004,-0.6520000100135803 -27.36199951171875,0.5180000066757202 -26.70199966430664,1.3079999685287476 C-26.70199966430664,1.3079999685287476 -26.582000732421875,1.437999963760376 -26.582000732421875,1.437999963760376 C-26.582000732421875,1.437999963760376 -15.272000312805176,12.748000144958496 -15.272000312805176,12.748000144958496 C-14.531999588012695,13.48799991607666 -13.362000465393066,13.527999877929688 -12.571999549865723,12.868000030517578 C-12.571999549865723,12.868000030517578 -12.442000389099121,12.748000144958496 -12.442000389099121,12.748000144958496 C-12.442000389099121,12.748000144958496 -9.612000465393066,9.918000221252441 -9.612000465393066,9.918000221252441 C-8.871999740600586,9.178000450134277 -8.831999778747559,8.008000373840332 -9.501999855041504,7.2179999351501465 C-9.501999855041504,7.2179999351501465 -9.612000465393066,7.0879998207092285 -9.612000465393066,7.0879998207092285 C-9.612000465393066,7.0879998207092285 -16.68199920654297,0.017999999225139618 -16.68199920654297,0.017999999225139618 C-16.68199920654297,0.017999999225139618 -9.612000465393066,-7.052000045776367 -9.612000465393066,-7.052000045776367 C-8.871999740600586,-7.791999816894531 -8.831999778747559,-8.961999893188477 -9.501999855041504,-9.751999855041504 C-9.501999855041504,-9.751999855041504 -9.612000465393066,-9.881999969482422 -9.612000465393066,-9.881999969482422 C-9.612000465393066,-9.881999969482422 -12.442000389099121,-12.70199966430664 -12.442000389099121,-12.70199966430664z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#a8a6a4;"></path></g></g></g></svg>`,Pt=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" style="width: 100%; height: 100%;">
<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
</svg>`,Ft=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1655876154826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22">
<path d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z" p-id="2131">
</path>
</svg>`,It=`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M15,17h6v1h-6V17z M11,17H3v1h8v2h1v-2v-1v-2h-1V17z M14,8h1V6V5V3h-1v2H3v1h11V8z            M18,5v1h3V5H18z M6,14h1v-2v-1V9H6v2H3v1 h3V14z M10,12h11v-1H10V12z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#a8a6a4;"></path></svg>`,Lt=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1652850026663" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2749" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50">
<path d="M593.8176 168.5504l356.00384 595.21024c26.15296 43.74528 10.73152 99.7376-34.44736 125.05088-14.39744 8.06912-30.72 12.30848-47.37024 12.30848H155.97568C103.75168 901.12 61.44 860.16 61.44 809.61536c0-16.09728 4.38272-31.92832 12.71808-45.8752L430.16192 168.5504c26.17344-43.7248 84.00896-58.65472 129.20832-33.34144a93.0816 93.0816 0 0 1 34.44736 33.34144zM512 819.2a61.44 61.44 0 1 0 0-122.88 61.44 61.44 0 0 0 0 122.88z m0-512a72.31488 72.31488 0 0 0-71.76192 81.3056l25.72288 205.7216a46.40768 46.40768 0 0 0 92.07808 0l25.72288-205.74208A72.31488 72.31488 0 0 0 512 307.2z" p-id="2750">
</path>
</svg>`,Rt=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1652445277062" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
<path d="M554.666667 810.666667v85.333333h-85.333334v-85.333333h85.333334zM170.666667 178.005333a42.666667 42.666667 0 0 1 34.986666 18.218667l203.904 291.328a42.666667 42.666667 0 0 1 0 48.896l-203.946666 291.328A42.666667 42.666667 0 0 1 128 803.328V220.672a42.666667 42.666667 0 0 1 42.666667-42.666667z m682.666666 0a42.666667 42.666667 0 0 1 42.368 37.717334l0.298667 4.949333v582.656a42.666667 42.666667 0 0 1-74.24 28.629333l-3.413333-4.181333-203.904-291.328a42.666667 42.666667 0 0 1-3.029334-43.861333l3.029334-5.034667 203.946666-291.328A42.666667 42.666667 0 0 1 853.333333 178.005333zM554.666667 640v85.333333h-85.333334v-85.333333h85.333334zM196.266667 319.104V716.8L335.957333 512 196.309333 319.104zM554.666667 469.333333v85.333334h-85.333334v-85.333334h85.333334z m0-170.666666v85.333333h-85.333334V298.666667h85.333334z m0-170.666667v85.333333h-85.333334V128h85.333334z">
</path>
</svg>
`,zt=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M768 298.666667h170.666667v85.333333h-256V128h85.333333v170.666667zM341.333333 384H85.333333V298.666667h170.666667V128h85.333333v256z m426.666667 341.333333v170.666667h-85.333333v-256h256v85.333333h-170.666667zM341.333333 640v256H256v-170.666667H85.333333v-85.333333h256z" />
</svg>
`,Bt=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M625.777778 256h142.222222V398.222222h113.777778V142.222222H625.777778v113.777778zM256 398.222222V256H398.222222v-113.777778H142.222222V398.222222h113.777778zM768 625.777778v142.222222H625.777778v113.777778h256V625.777778h-113.777778zM398.222222 768H256V625.777778h-113.777778v256H398.222222v-113.777778z" />
</svg>
`,Vt=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4A76.8 76.8 0 0 0 76.8 1024h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zM896 512a64 64 0 0 1 7.488 127.552L896 640h-128v128a64 64 0 0 1-56.512 63.552L704 832a64 64 0 0 1-63.552-56.512L640 768V582.592c0-34.496 25.024-66.112 61.632-70.208L709.632 512H896zM256 512a64 64 0 0 1-7.488-127.552L256 384h128V256a64 64 0 0 1 56.512-63.552L448 192a64 64 0 0 1 63.552 56.512L512 256v185.408c0 34.432-25.024 66.112-61.632 70.144L442.368 512H256z" />
</svg>
`,Ht=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4A76.8 76.8 0 0 0 76.8 1024h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zM448 192a64 64 0 0 1 7.488 127.552L448 320H320v128a64 64 0 0 1-56.512 63.552L256 512a64 64 0 0 1-63.552-56.512L192 448V262.592c0-34.432 25.024-66.112 61.632-70.144L261.632 192H448zM704 832a64 64 0 0 1-7.488-127.552L704 704h128V576a64 64 0 0 1 56.512-63.552L896 512a64 64 0 0 1 63.552 56.512L960 576v185.408c0 34.496-25.024 66.112-61.632 70.208l-8 0.384H704z" />
</svg>
`,Ut=`<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default">
  <rect x="0" y="0" width="100" height="100" fill="none" class="bk"/>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(0 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-1s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(30 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(60 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(90 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(120 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(150 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(180 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(210 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(240 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(270 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(300 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(330 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/>
  </rect>
</svg>`,Wt=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1650612139149" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
<path d="M298.666667 426.666667V341.333333a213.333333 213.333333 0 1 1 426.666666 0v85.333334h42.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v256a85.333333 85.333333 0 0 1-85.333333 85.333333H256a85.333333 85.333333 0 0 1-85.333333-85.333333v-256a85.333333 85.333333 0 0 1 85.333333-85.333333h42.666667z m213.333333-213.333334a128 128 0 0 0-128 128v85.333334h256V341.333333a128 128 0 0 0-128-128z"></path>
</svg>
`,Gt=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
    <path d="M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zM15 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z"></path>
</svg>`,Kt=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
<path d="M844.8 219.648h-665.6c-6.144 0-10.24 4.608-10.24 10.752v563.2c0 5.632 4.096 10.24 10.24 10.24h256v92.16h-256a102.4 102.4 0 0 1-102.4-102.4v-563.2c0-56.832 45.568-102.4 102.4-102.4h665.6a102.4 102.4 0 0 1 102.4 102.4v204.8h-92.16v-204.8c0-6.144-4.608-10.752-10.24-10.752zM614.4 588.8c-28.672 0-51.2 22.528-51.2 51.2v204.8c0 28.16 22.528 51.2 51.2 51.2h281.6c28.16 0 51.2-23.04 51.2-51.2v-204.8c0-28.672-23.04-51.2-51.2-51.2H614.4z"></path>
</svg>`,qt=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
  <path d="M17.982 9.275L8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z"></path>
</svg>`,Jt=`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M10,8v8l6-4L10,8L10,8z M6.3,5L5.7,4.2C7.2,3,9,2.2,11,2l0.1,1C9.3,3.2,7.7,3.9,6.3,5z            M5,6.3L4.2,5.7C3,7.2,2.2,9,2,11 l1,.1C3.2,9.3,3.9,7.7,5,6.3z            M5,17.7c-1.1-1.4-1.8-3.1-2-4.8L2,13c0.2,2,1,3.8,2.2,5.4L5,17.7z            M11.1,21c-1.8-0.2-3.4-0.9-4.8-2 l-0.6,.8C7.2,21,9,21.8,11,22L11.1,21z            M22,12c0-5.2-3.9-9.4-9-10l-0.1,1c4.6,.5,8.1,4.3,8.1,9s-3.5,8.5-8.1,9l0.1,1 C18.2,21.5,22,17.2,22,12z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#a8a6a4;"></path></svg>`,Yt=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 50 50">
	<path d="M 19.402344 6 C 17.019531 6 14.96875 7.679688 14.5 10.011719 L 14.097656 12 L 9 12 C 6.238281 12 4 14.238281 4 17 L 4 38 C 4 40.761719 6.238281 43 9 43 L 41 43 C 43.761719 43 46 40.761719 46 38 L 46 17 C 46 14.238281 43.761719 12 41 12 L 35.902344 12 L 35.5 10.011719 C 35.03125 7.679688 32.980469 6 30.597656 6 Z M 25 17 C 30.519531 17 35 21.480469 35 27 C 35 32.519531 30.519531 37 25 37 C 19.480469 37 15 32.519531 15 27 C 15 21.480469 19.480469 17 25 17 Z M 25 19 C 20.589844 19 17 22.589844 17 27 C 17 31.410156 20.589844 35 25 35 C 29.410156 35 33 31.410156 33 27 C 33 22.589844 29.410156 19 25 19 Z "/>
</svg>
`,Xt=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
    <circle cx="11" cy="11" r="2"></circle>
    <path d="M19.164 8.861L17.6 8.6a6.978 6.978 0 0 0-1.186-2.099l.574-1.533a1 1 0 0 0-.436-1.217l-1.997-1.153a1.001 1.001 0 0 0-1.272.23l-1.008 1.225a7.04 7.04 0 0 0-2.55.001L8.716 2.829a1 1 0 0 0-1.272-.23L5.447 3.751a1 1 0 0 0-.436 1.217l.574 1.533A6.997 6.997 0 0 0 4.4 8.6l-1.564.261A.999.999 0 0 0 2 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 0 0 1.228 2.075l-.558 1.487a1 1 0 0 0 .436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 0 0 2.272 0l1.04 1.263a1 1 0 0 0 1.272.23l1.997-1.153a1 1 0 0 0 .436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 0 0 .835-.986V9.847a.999.999 0 0 0-.836-.986zM11 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
</svg>`,Zt=`<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
<path d="M9.5 9.325v5.35q0 .575.525.875t1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05t-.525.875ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
</svg>
`,Qt=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="26" height="26" viewBox="0 0 1740 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M511.8976 1024h670.5152c282.4192-0.4096 511.1808-229.4784 511.1808-511.8976 0-282.4192-228.7616-511.488-511.1808-511.8976H511.8976C229.4784 0.6144 0.7168 229.6832 0.7168 512.1024c0 282.4192 228.7616 511.488 511.1808 511.8976zM511.3344 48.64A464.5888 464.5888 0 1 1 48.0256 513.024 463.872 463.872 0 0 1 511.3344 48.4352V48.64z" />
</svg>
`,$t=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="26" height="26" viewBox="0 0 1664 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path fill="#648FFC" d="M1152 0H512a512 512 0 0 0 0 1024h640a512 512 0 0 0 0-1024z m0 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448z"  />
</svg>`,en=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1650612464266" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M666.752 194.517333L617.386667 268.629333A128 128 0 0 0 384 341.333333l0.042667 85.333334h384a85.333333 85.333333 0 0 1 85.333333 85.333333v256a85.333333 85.333333 0 0 1-85.333333 85.333333H256a85.333333 85.333333 0 0 1-85.333333-85.333333v-256a85.333333 85.333333 0 0 1 85.333333-85.333333h42.666667V341.333333a213.333333 213.333333 0 0 1 368.085333-146.816z"></path></svg>
`,tn=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
    <path d="M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z"></path>
    <path d="M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zM18.778 18.778l-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z"></path>
</svg>`,nn=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
    <path d="M10.188 4.65L6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zM14.446 3.778a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z"></path>
    <path d="M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z"></path>
</svg>`,rn=class{constructor(e){let t={loading:Ut,state:Zt,play:qt,pause:Gt,check:Pt,volume:nn,volumeClose:tn,screenshot:Yt,setting:Xt,pip:Kt,arrowLeft:jt,arrowRight:Mt,playbackRate:Jt,aspectRatio:Nt,config:It,lock:Wt,flip:Rt,unlock:en,fullscreenOff:zt,fullscreenOn:Bt,fullscreenWebOff:Vt,fullscreenWebOn:Ht,switchOn:$t,switchOff:Qt,error:Lt,close:Ft,airplay:At,...e.option.icons};for(let e in t)G(this,e,{get:()=>xe(e,t[e])})}},an=class extends Ye{constructor(e){super(e),this.name=`info`,A||this.init()}init(){let{proxy:e,constructor:t,template:{$infoPanel:n,$infoClose:r,$video:i}}=this.art;e(r,`click`,()=>{this.show=!1});let a=null,o=pe(`[data-video]`,n)||[];this.art.on(`destroy`,()=>clearTimeout(a));function s(){for(let e=0;e<o.length;e++){let t=o[e],n=i[t.dataset.video],r=typeof n==`number`?n.toFixed(2):n;t.textContent!==r&&(t.textContent=r)}a=setTimeout(s,t.INFO_LOOP_TIME)}s()}},on=class extends Ye{constructor(e){super(e);let{option:t,template:{$layer:n}}=e;this.name=`layer`,this.$parent=n;for(let e=0;e<t.layers.length;e++)this.add(t.layers[e])}},sn=class extends Ye{constructor(e){super(e),this.name=`loading`,I(e.template.$loading,e.icons.loading)}},cn=class extends Ye{constructor(e){super(e),this.name=`mask`;let{template:t,icons:n,events:r}=e,i=I(t.$state,n.state),a=I(t.$state,n.error);L(a,`display`,`none`),e.on(`destroy`,()=>{L(i,`display`,`none`),L(a,`display`,null)}),r.proxy(t.$state,`click`,()=>e.play())}},ln=class{constructor(e){this.art=e,this.timer=null,e.on(`destroy`,()=>this.destroy())}destroy(){this.timer&&=(clearTimeout(this.timer),null)}set show(e){let{constructor:t,template:{$player:n,$noticeInner:r}}=this.art;e?(r.textContent=e instanceof Error?e.message.trim():e,N(n,`art-notice-show`),clearTimeout(this.timer),this.timer=setTimeout(()=>{r.textContent=``,P(n,`art-notice-show`)},t.NOTICE_TIME)):P(n,`art-notice-show`)}get show(){let{template:{$player:e}}=this.art;return e.classList.contains(`art-notice-show`)}};function un(e){let{i18n:t,notice:n,proxy:r,template:{$video:i}}=e,a=!0;window.WebKitPlaybackTargetAvailabilityEvent&&i.webkitShowPlaybackTargetPicker?r(i,`webkitplaybacktargetavailabilitychanged`,e=>{switch(e.availability){case`available`:a=!0;break;case`not-available`:a=!1}}):a=!1,G(e,`airplay`,{value(){a?(i.webkitShowPlaybackTargetPicker(),e.emit(`airplay`)):n.show=t.get(`AirPlay Not Available`)}})}function dn(e){let{i18n:t,notice:n,template:{$video:r,$player:i}}=e;G(e,`aspectRatio`,{get(){return i.dataset.aspectRatio||`default`},set(a){if(a||=`default`,a==="default")L(r,`width`,null),L(r,`height`,null),L(r,`margin`,null),delete i.dataset.aspectRatio;else{let e=a.split(`:`).map(Number),{clientWidth:t,clientHeight:n}=i,o=t/n,s=e[0]/e[1];o>s?(L(r,`width`,`${s*n}px`),L(r,`height`,`100%`),L(r,`margin`,`0 auto`)):(L(r,`width`,`100%`),L(r,`height`,`${t/s}px`),L(r,`margin`,`auto 0`)),i.dataset.aspectRatio=a}n.show=`${t.get(`Aspect Ratio`)}: ${a==="default"?t.get(`Default`):a}`,e.emit(`aspectRatio`,a)}})}function fn(e){let{template:{$video:t}}=e;G(e,`attr`,{value(e,n){if(n===void 0)return t[e];t[e]=n}})}function pn(e){let{template:{$container:t,$video:n}}=e;G(e,`autoHeight`,{value(){let{clientWidth:r}=t,{videoHeight:i,videoWidth:a}=n,o=r/a*i;L(t,`height`,`${o}px`),e.emit(`autoHeight`,o)}})}function mn(e){let{$container:t,$player:n,$video:r}=e.template;G(e,`autoSize`,{value(){let{videoWidth:i,videoHeight:a}=r,{width:o,height:s}=V(t),c=i/a;if(o/s>c){let e=s*c/o*100;L(n,`width`,`${e}%`),L(n,`height`,`100%`)}else{let e=o/c/s*100;L(n,`width`,`100%`),L(n,`height`,`${e}%`)}e.emit(`autoSize`,{width:e.width,height:e.height})}})}function hn(e){let{$player:t}=e.template;G(e,`cssVar`,{value(e,n){return n?t.style.setProperty(e,n):getComputedStyle(t).getPropertyValue(e)}})}function gn(e){let{$video:t}=e.template;G(e,`currentTime`,{get:()=>t.currentTime||0,set:n=>{n=Number.parseFloat(n),!Number.isNaN(n)&&(t.currentTime=U(n,0,e.duration))}})}function _n(e){G(e,`duration`,{get:()=>{let{duration:t}=e.template.$video;return t===1/0?0:t||0}})}function vn(e){let{i18n:t,notice:n,option:r,constructor:i,proxy:a,template:{$player:o,$video:s,$poster:c}}=e,l=0;for(let t=0;t<ce.events.length;t++)a(s,ce.events[t],t=>{e.emit(`video:${t.type}`,t)});e.on(`video:canplay`,()=>{l=0,e.loading.show=!1}),e.once(`video:canplay`,()=>{e.loading.show=!1,e.controls.show=!0,e.mask.show=!0,e.isReady=!0,e.emit(`ready`)}),e.on(`video:ended`,()=>{r.loop?(e.seek=0,e.play(),e.controls.show=!1,e.mask.show=!1):(e.controls.show=!0,e.mask.show=!0)}),e.on(`video:error`,async a=>{l<i.RECONNECT_TIME_MAX?(await Be(i.RECONNECT_SLEEP_TIME),l+=1,e.url=r.url,n.show=`${t.get(`Reconnect`)}: ${l}`,e.emit(`error`,a,l)):(e.mask.show=!0,e.loading.show=!1,e.controls.show=!0,N(o,`art-error`),await Be(i.RECONNECT_SLEEP_TIME),n.show=t.get(`Video Load Failed`))}),e.on(`video:loadedmetadata`,()=>{e.emit(`resize`),A&&(e.loading.show=!1,e.controls.show=!0,e.mask.show=!0)}),e.on(`video:loadstart`,()=>{e.loading.show=!0,e.mask.show=!1,e.controls.show=!0}),e.on(`video:pause`,()=>{e.controls.show=!0,e.mask.show=!0}),e.on(`video:play`,()=>{e.mask.show=!1,L(c,`display`,`none`)}),e.on(`video:playing`,()=>{e.mask.show=!1}),e.on(`video:progress`,()=>{e.playing&&(e.loading.show=!1)}),e.on(`video:seeked`,()=>{e.loading.show=!1,e.mask.show=!0}),e.on(`video:seeking`,()=>{e.loading.show=!0,e.mask.show=!1}),e.on(`video:timeupdate`,()=>{e.mask.show=!1}),e.on(`video:waiting`,()=>{e.loading.show=!0,e.mask.show=!1})}function yn(e){let{template:{$player:t},i18n:n,notice:r}=e;G(e,`flip`,{get(){return t.dataset.flip||`normal`},set(i){i||=`normal`,i===`normal`?delete t.dataset.flip:t.dataset.flip=i,r.show=`${n.get(`Video Flip`)}: ${n.get(ke(i))}`,e.emit(`flip`,i)}})}var bn=[[`requestFullscreen`,`exitFullscreen`,`fullscreenElement`,`fullscreenEnabled`,`fullscreenchange`,`fullscreenerror`],[`webkitRequestFullscreen`,`webkitExitFullscreen`,`webkitFullscreenElement`,`webkitFullscreenEnabled`,`webkitfullscreenchange`,`webkitfullscreenerror`],[`webkitRequestFullScreen`,`webkitCancelFullScreen`,`webkitCurrentFullScreenElement`,`webkitCancelFullScreen`,`webkitfullscreenchange`,`webkitfullscreenerror`],[`mozRequestFullScreen`,`mozCancelFullScreen`,`mozFullScreenElement`,`mozFullScreenEnabled`,`mozfullscreenchange`,`mozfullscreenerror`],[`msRequestFullscreen`,`msExitFullscreen`,`msFullscreenElement`,`msFullscreenEnabled`,`MSFullscreenChange`,`MSFullscreenError`]],xn=(()=>{if(typeof document>`u`)return!1;let e=bn[0],t={};for(let n of bn)if(n[1]in document){for(let[r,i]of n.entries())t[e[r]]=i;return t}return!1})(),Sn={change:xn.fullscreenchange,error:xn.fullscreenerror},X={request(e=document.documentElement,t){return new Promise((n,r)=>{let i=()=>{X.off(`change`,i),n()};X.on(`change`,i);let a=e[xn.requestFullscreen](t);a instanceof Promise&&a.then(i).catch(r)})},exit(){return new Promise((e,t)=>{if(!X.isFullscreen){e();return}let n=()=>{X.off(`change`,n),e()};X.on(`change`,n);let r=document[xn.exitFullscreen]();r instanceof Promise&&r.then(n).catch(t)})},toggle(e,t){return X.isFullscreen?X.exit():X.request(e,t)},onchange(e){X.on(`change`,e)},onerror(e){X.on(`error`,e)},on(e,t){let n=Sn[e];n&&document.addEventListener(n,t,!1)},off(e,t){let n=Sn[e];n&&document.removeEventListener(n,t,!1)},raw:xn};Object.defineProperties(X,{isFullscreen:{get:()=>!!document[xn.fullscreenElement]},element:{enumerable:!0,get:()=>document[xn.fullscreenElement]},isEnabled:{enumerable:!0,get:()=>!!document[xn.fullscreenEnabled]}});function Cn(e){let{i18n:t,notice:n,template:{$video:r,$player:i}}=e,a=e=>{X.on(`change`,()=>{e.emit(`fullscreen`,X.isFullscreen),X.isFullscreen?(e.state=`fullscreen`,N(i,`art-fullscreen`)):P(i,`art-fullscreen`),e.emit(`resize`)}),X.on(`error`,t=>{e.emit(`fullscreenError`,t)}),G(e,`fullscreen`,{get(){return X.isFullscreen},async set(e){e?await X.request(i):await X.exit()}})},o=e=>{e.on(`document:webkitfullscreenchange`,()=>{e.emit(`fullscreen`,e.fullscreen),e.emit(`resize`)}),G(e,`fullscreen`,{get(){return document.fullscreenElement===r},set(t){t?(e.state=`fullscreen`,r.webkitEnterFullscreen()):r.webkitExitFullscreen()}})};e.once(`video:loadedmetadata`,()=>{X.isEnabled?a(e):r.webkitSupportsFullscreen?o(e):G(e,`fullscreen`,{get(){return!1},set(){n.show=t.get(`Fullscreen Not Supported`)}}),G(e,`fullscreen`,Pe(e,`fullscreen`))})}function wn(e){let{constructor:t,template:{$container:n,$player:r}}=e,i=``;G(e,`fullscreenWeb`,{get(){return F(r,`art-fullscreen-web`)},set(a){a?(i=r.style.cssText,t.FULLSCREEN_WEB_IN_BODY&&I(document.body,r),e.state=`fullscreenWeb`,L(r,`width`,`100%`),L(r,`height`,`100%`),N(r,`art-fullscreen-web`),e.emit(`fullscreenWeb`,!0)):(t.FULLSCREEN_WEB_IN_BODY&&I(n,r),i&&=(r.style.cssText=i,``),P(r,`art-fullscreen-web`),e.emit(`fullscreenWeb`,!1)),e.emit(`resize`)}})}function Tn(e){let{$video:t}=e.template;G(e,`loaded`,{get:()=>e.loadedTime/t.duration}),G(e,`loadedTime`,{get:()=>t.buffered.length?t.buffered.end(t.buffered.length-1):0})}function En(e){let{icons:t,proxy:n,storage:r,template:{$player:i,$video:a}}=e,o=!1,s=0,c=0;function l(){let{$mini:t}=e.template;t&&(P(i,`art-mini`),L(t,`display`,`none`),i.prepend(a),e.emit(`mini`,!1))}function u(t,n){e.playing?(L(t,`display`,`none`),L(n,`display`,`flex`)):(L(t,`display`,`flex`),L(n,`display`,`none`))}function d(){let{$mini:i}=e.template;if(i)return I(i,a),L(i,`display`,`flex`);{let i=B(`div`);N(i,`art-mini-popup`),I(document.body,i),e.template.$mini=i,I(i,a);let d=I(i,`<div class="art-mini-close"></div>`);I(d,t.close),n(d,`click`,l);let f=I(i,`<div class="art-mini-state"></div>`),p=I(f,t.play),m=I(f,t.pause);return n(p,`click`,()=>e.play()),n(m,`click`,()=>e.pause()),u(p,m),e.on(`video:playing`,()=>u(p,m)),e.on(`video:pause`,()=>u(p,m)),e.on(`video:timeupdate`,()=>u(p,m)),n(i,`mousedown`,e=>{o=e.button===0,s=e.pageX,c=e.pageY}),e.on(`document:mousemove`,e=>{if(o){N(i,`art-mini-dragging`);let t=e.pageX-s,n=e.pageY-c;L(i,`transform`,`translate(${t}px, ${n}px)`)}}),e.on(`document:mouseup`,()=>{if(o){o=!1,P(i,`art-mini-dragging`);let e=V(i);r.set(`left`,e.left),r.set(`top`,e.top),L(i,`left`,`${e.left}px`),L(i,`top`,`${e.top}px`),L(i,`transform`,null)}}),i}}function f(){let{$mini:t}=e.template,n=V(t),i=window.innerHeight-n.height-50,a=window.innerWidth-n.width-50;r.set(`top`,i),r.set(`left`,a),L(t,`top`,`${i}px`),L(t,`left`,`${a}px`)}G(e,`mini`,{get(){return F(i,`art-mini`)},set(t){if(t){e.state=`mini`,N(i,`art-mini`);let t=d(),n=r.get(`top`),a=r.get(`left`);typeof n==`number`&&typeof a==`number`?(L(t,`top`,`${n}px`),L(t,`left`,`${a}px`),ve(t)||f()):f(),e.emit(`mini`,!0)}else l()}})}function Dn(e){let{option:t,storage:n,template:{$video:r,$poster:i}}=e;for(let n in t.moreVideoAttr)e.attr(n,t.moreVideoAttr[n]);t.muted&&(e.muted=t.muted),t.volume&&(r.volume=U(t.volume,0,1));let a=n.get(`volume`);typeof a==`number`&&(r.volume=U(a,0,1)),t.poster&&L(i,`backgroundImage`,`url(${t.poster})`),t.autoplay&&(r.autoplay=t.autoplay),t.playsInline&&(r.playsInline=!0,r[`webkit-playsinline`]=!0),t.theme&&(t.cssVar[`--art-theme`]=t.theme);for(let n in t.cssVar)e.cssVar(n,t.cssVar[n]);e.url=t.url}function On(e){let{template:{$video:t},i18n:n,notice:r}=e;G(e,`pause`,{value(){let i=t.pause();return r.show=n.get(`Pause`),e.emit(`pause`),i}})}function kn(e){let{template:{$video:t},proxy:n,notice:r}=e;t.disablePictureInPicture=!1,G(e,`pip`,{get(){return document.pictureInPictureElement},set(n){n?(e.state=`pip`,t.requestPictureInPicture().catch(e=>{throw r.show=e,e})):document.exitPictureInPicture().catch(e=>{throw r.show=e,e})}}),n(t,`enterpictureinpicture`,()=>{e.emit(`pip`,!0)}),n(t,`leavepictureinpicture`,()=>{e.emit(`pip`,!1)})}function An(e){let{$video:t}=e.template;t.webkitSetPresentationMode(`inline`),G(e,`pip`,{get(){return t.webkitPresentationMode===`picture-in-picture`},set(n){n?(e.state=`pip`,t.webkitSetPresentationMode(`picture-in-picture`),e.emit(`pip`,!0)):(t.webkitSetPresentationMode(`inline`),e.emit(`pip`,!1))}})}function jn(e){let{i18n:t,notice:n,template:{$video:r}}=e;document.pictureInPictureEnabled?kn(e):r.webkitSupportsPresentationMode?An(e):G(e,`pip`,{get(){return!1},set(){n.show=t.get(`PIP Not Supported`)}})}function Mn(e){let{template:{$video:t},i18n:n,notice:r}=e;G(e,`playbackRate`,{get(){return t.playbackRate},set(i){if(i){if(i===t.playbackRate)return;t.playbackRate=i,r.show=`${n.get(`Rate`)}: ${i===1?n.get(`Normal`):`${i}x`}`}else e.playbackRate=1}})}function Nn(e){G(e,`played`,{get:()=>e.currentTime/e.duration})}function Pn(e){let{$video:t}=e.template;G(e,`playing`,{get:()=>typeof t.playing==`boolean`?t.playing:t.currentTime>0&&!t.paused&&!t.ended&&t.readyState>2})}function Fn(e){let{i18n:t,notice:n,option:r,constructor:{instances:i},template:{$video:a}}=e;G(e,`play`,{async value(){let o=await a.play();if(n.show=t.get(`Play`),e.emit(`play`),r.mutex)for(let t=0;t<i.length;t++){let n=i[t];n!==e&&n.pause()}return o}})}function In(e){let{template:{$poster:t}}=e;G(e,`poster`,{get:()=>{try{return t.style.backgroundImage.match(/"(.*)"/)[1]}catch{return``}},set(e){L(t,`backgroundImage`,`url(${e})`)}})}function Ln(e){G(e,`quality`,{set(t){let{controls:n,notice:r,i18n:i}=e,a=t.find(e=>e.default)||t[0];n.update({name:`quality`,position:`right`,index:10,style:{marginRight:`10px`},html:a?.html||``,selector:t,async onSelect(t){return await e.switchQuality(t.url),r.show=`${i.get(`Switch Video`)}: ${t.html}`,t.html}})}})}function Rn(e){G(e,`rect`,{get:()=>V(e.template.$player)});let t=[`bottom`,`height`,`left`,`right`,`top`,`width`];for(let n=0;n<t.length;n++){let r=t[n];G(e,r,{get:()=>e.rect[r]})}G(e,`x`,{get:()=>e.left+window.pageXOffset}),G(e,`y`,{get:()=>e.top+window.pageYOffset})}function zn(e){let{notice:t,template:{$video:n}}=e,r=B(`canvas`);G(e,`getDataURL`,{value:()=>new Promise((e,i)=>{try{r.width=n.videoWidth,r.height=n.videoHeight,r.getContext(`2d`).drawImage(n,0,0),e(r.toDataURL(`image/png`))}catch(e){t.show=e,i(e)}})}),G(e,`getBlobUrl`,{value:()=>new Promise((e,i)=>{try{r.width=n.videoWidth,r.height=n.videoHeight,r.getContext(`2d`).drawImage(n,0,0),r.toBlob(t=>{e(URL.createObjectURL(t))})}catch(e){t.show=e,i(e)}})}),G(e,`screenshot`,{value:async t=>{let r=await e.getDataURL();return Oe(r,`${t||`artplayer_${W(n.currentTime)}`}.png`),e.emit(`screenshot`,r),r}})}function Bn(e){let{notice:t}=e;G(e,`seek`,{set(n){e.currentTime=n,e.duration&&(t.show=`${W(e.currentTime)} / ${W(e.duration)}`),e.emit(`seek`,e.currentTime,n)}}),G(e,`forward`,{set(t){e.seek=e.currentTime+t}}),G(e,`backward`,{set(t){e.seek=e.currentTime-t}})}function Vn(e){let t=[`mini`,`pip`,`fullscreen`,`fullscreenWeb`];G(e,`state`,{get:()=>t.find(t=>e[t])||`standard`,set(n){for(let r=0;r<t.length;r++){let i=t[r];i!==n&&e[i]&&(e[i]=!1)}}})}function Hn(e){let{notice:t,i18n:n,template:r}=e;G(e,`subtitleOffset`,{get(){return r.$track?.offset||0},set(i){let{cues:a}=e.subtitle;if(!r.$track||a.length===0)return;let o=U(i,-10,10);r.$track.offset=o;for(let t=0;t<a.length;t++){let n=a[t];n.originalStartTime=n.originalStartTime??n.startTime,n.originalEndTime=n.originalEndTime??n.endTime,n.startTime=U(n.originalStartTime+o,0,e.duration),n.endTime=U(n.originalEndTime+o,0,e.duration)}e.subtitle.update(),t.show=`${n.get(`Subtitle Offset`)}: ${i}s`,e.emit(`subtitleOffset`,i)}})}function Un(e){function t(t,n){return new Promise((r,i)=>{if(t===e.url){r();return}let{playing:a,aspectRatio:o,playbackRate:s}=e;e.pause(),e.url=t,e.notice.show=``;let c={};c.error=t=>{e.off(`video:canplay`,c.canplay),e.off(`video:loadedmetadata`,c.metadata),i(t)},c.metadata=()=>{e.currentTime=n},c.canplay=async()=>{e.off(`video:error`,c.error),e.playbackRate=s,e.aspectRatio=o,a&&await e.play(),e.notice.show=``,r()},e.once(`video:error`,c.error),e.once(`video:loadedmetadata`,c.metadata),e.once(`video:canplay`,c.canplay)})}G(e,`switchQuality`,{value:n=>t(n,e.currentTime)}),G(e,`switchUrl`,{value:e=>t(e,0)}),G(e,`switch`,{set:e.switchUrl})}function Wn(e){G(e,`theme`,{get(){return e.cssVar(`--art-theme`)},set(t){e.cssVar(`--art-theme`,t)}})}function Gn(e){let{option:t,template:{$progress:n,$video:r}}=e,i=null,a=!1,o=null;function s(){clearTimeout(i),i=null,a=!1,o=null}function c(i){let a=e.controls?.thumbnails;if(!a)return;let{number:s,column:c,width:l,height:u,scale:d}=t.thumbnails,f=l*d||o.naturalWidth/c,p=u*d||f/(r.videoWidth/r.videoHeight),m=n.clientWidth/s,h=Math.floor(i/m),g=Math.ceil(h/c)-1,_=h%c||c-1;L(a,`backgroundImage`,`url(${o.src})`),L(a,`height`,`${p}px`),L(a,`width`,`${f}px`),L(a,`backgroundPosition`,`-${_*f}px -${g*p}px`),i<=f/2?L(a,`left`,0):i>n.clientWidth-f/2?L(a,`left`,`${n.clientWidth-f}px`):L(a,`left`,`${i-f/2}px`)}e.on(`setBar`,async(r,i,s)=>{let l=e.controls?.thumbnails,{url:u,scale:d}=t.thumbnails;if(l&&u&&(r===`hover`||r===`played`&&s&&A)){if(!o&&!a&&(a=!0,o=await we(u,d),a=!1),!o)return;let e=n.clientWidth*i;e>0&&e<n.clientWidth&&c(e)}}),G(e,`thumbnails`,{get(){return e.option.thumbnails},set(t){t.url&&!e.option.isLive&&(e.option.thumbnails=t,s())}})}function Kn(e){G(e,`toggle`,{value(){return e.playing?e.pause():e.play()}})}function qn(e){G(e,`type`,{get(){return e.option.type},set(t){e.option.type=t}})}function Jn(e){let{option:t,template:{$video:n}}=e;G(e,`url`,{get(){return n.src},async set(r){if(r){let i=e.url,a=t.type||De(r),o=t.customType[a];a&&o?(await Be(),e.loading.show=!0,o.call(e,n,r,e)):(URL.revokeObjectURL(i),n.src=r),i!==e.url&&(e.option.url=r,e.isReady&&i&&e.once(`video:canplay`,()=>{e.emit(`restart`,r)}))}else await Be(),e.loading.show=!0}})}function Yn(e){let{template:{$video:t},i18n:n,notice:r,storage:i}=e;G(e,`volume`,{get:()=>t.volume||0,set:e=>{t.volume=U(e,0,1),r.show=`${n.get(`Volume`)}: ${Number.parseInt(t.volume*100,10)}`,t.volume!==0&&i.set(`volume`,t.volume)}}),G(e,`muted`,{get:()=>t.muted,set:n=>{t.muted=n,e.emit(`muted`,n)}})}var Xn=class{constructor(e){Jn(e),fn(e),Fn(e),On(e),Kn(e),Bn(e),Yn(e),gn(e),_n(e),Un(e),Mn(e),dn(e),zn(e),Cn(e),wn(e),jn(e),Tn(e),Nn(e),Pn(e),mn(e),Rn(e),yn(e),En(e),In(e),pn(e),hn(e),Wn(e),qn(e),Vn(e),Hn(e),un(e),Ln(e),Gn(e),vn(e),Dn(e)}};function Zn(e){let{notice:t,constructor:n,template:{$player:r,$video:i}}=e,a=`art-auto-orientation`,o=`art-auto-orientation-fullscreen`,s=!1;function c(){let t=document.documentElement.clientWidth,n=document.documentElement.clientHeight;L(r,`width`,`${n}px`),L(r,`height`,`${t}px`),L(r,`transform-origin`,`0 0`),L(r,`transform`,`rotate(90deg) translate(0, -${t}px)`),N(r,a),e.isRotate=!0,e.emit(`resize`)}function l(){L(r,`width`,``),L(r,`height`,``),L(r,`transform-origin`,``),L(r,`transform`,``),P(r,a),e.isRotate=!1,e.emit(`resize`)}function u(){let{videoWidth:e,videoHeight:t}=i,n=document.documentElement.clientWidth,r=document.documentElement.clientHeight;return e>t&&n<r||e<t&&n>r}return e.on(`fullscreenWeb`,t=>{if(t){if(u()){let t=Number(n.AUTO_ORIENTATION_TIME??0);setTimeout(()=>{e.fullscreenWeb&&!F(r,a)&&c()},t)}}else F(r,a)&&l()}),e.on(`fullscreen`,async e=>{let n=!!screen?.orientation?.lock;if(e){if(n&&u())try{let e=screen.orientation.type.startsWith(`portrait`)?`landscape`:`portrait`;await screen.orientation.lock(e),s=!0,N(r,o)}catch(e){s=!1,t.show=e}}else if(F(r,o)&&P(r,o),n&&s){try{screen.orientation.unlock()}catch{}s=!1}}),{name:`autoOrientation`,get state(){return F(r,a)}}}function Qn(e){let{i18n:t,icons:n,storage:r,constructor:i,proxy:a,template:{$poster:o}}=e,s=e.layers.add({name:`auto-playback`,html:`
            <div class="art-auto-playback-close"></div>
            <div class="art-auto-playback-last"></div>
            <div class="art-auto-playback-jump"></div>
        `}),c=M(`.art-auto-playback-last`,s),l=M(`.art-auto-playback-jump`,s),u=M(`.art-auto-playback-close`,s);I(u,n.close);let d=null;e.on(`video:timeupdate`,()=>{if(e.playing){let t=r.get(`times`)||{},n=Object.keys(t);n.length>i.AUTO_PLAYBACK_MAX&&delete t[n[0]],t[e.option.id||e.option.url]=e.currentTime,r.set(`times`,t)}});function f(){let n=(r.get(`times`)||{})[e.option.id||e.option.url];clearTimeout(d),L(s,`display`,`none`),n&&n>=i.AUTO_PLAYBACK_MIN&&(L(s,`display`,`flex`),c.textContent=`${t.get(`Last Seen`)} ${W(n)}`,l.textContent=t.get(`Jump Play`),a(u,`click`,()=>{L(s,`display`,`none`)}),a(l,`click`,()=>{e.seek=n,e.play(),L(o,`display`,`none`),L(s,`display`,`none`)}),e.once(`video:timeupdate`,()=>{d=setTimeout(()=>{L(s,`display`,`none`)},i.AUTO_PLAYBACK_TIMEOUT)}))}return e.on(`ready`,f),e.on(`restart`,f),{name:`auto-playback`,get times(){return r.get(`times`)||{}},clear(){return r.del(`times`)},delete(e){let t=r.get(`times`)||{};return delete t[e],r.set(`times`,t),t}}}function $n(e){let{constructor:t,proxy:n,template:{$player:r,$video:i}}=e,a=null,o=!1,s=1,c=n=>{n.touches.length===1&&e.playing&&!e.isLock&&(a=setTimeout(()=>{o=!0,s=e.playbackRate,e.playbackRate=t.FAST_FORWARD_VALUE,N(r,`art-fast-forward`)},t.FAST_FORWARD_TIME))},l=()=>{clearTimeout(a),o&&(o=!1,e.playbackRate=s,P(r,`art-fast-forward`))};return n(i,`touchstart`,c),e.on(`document:touchmove`,l),e.on(`document:touchend`,l),{name:`fastForward`,get state(){return F(r,`art-fast-forward`)}}}function er(e){let{layers:t,icons:n,template:{$player:r}}=e;function i(){return F(r,`art-lock`)}function a(){N(r,`art-lock`),e.isLock=!0,e.emit(`lock`,!0)}function o(){P(r,`art-lock`),e.isLock=!1,e.emit(`lock`,!1)}return t.add({name:`lock`,mounted(t){let r=I(t,n.lock),i=I(t,n.unlock);L(r,`display`,`none`),e.on(`lock`,e=>{e?(L(r,`display`,`inline-flex`),L(i,`display`,`none`)):(L(r,`display`,`none`),L(i,`display`,`inline-flex`))})},click(){i()?o():a()}}),{name:`lock`,get state(){return i()},set state(e){e?a():o()}}}function tr(e){return e.on(`control`,t=>{t?P(e.template.$player,`art-mini-progress-bar`):N(e.template.$player,`art-mini-progress-bar`)}),{name:`mini-progress-bar`}}var nr=class{constructor(e){this.art=e,this.id=0;let{option:t}=e;t.miniProgressBar&&!t.isLive&&this.add(tr),t.lock&&A&&this.add(er),t.autoPlayback&&!t.isLive&&this.add(Qn),t.autoOrientation&&A&&this.add(Zn),t.fastForward&&A&&!t.isLive&&this.add($n);for(let e=0;e<t.plugins.length;e++)this.add(t.plugins[e])}add(e){this.id+=1;let t=e.call(this.art,this.art);return t instanceof Promise?t.then(t=>this.next(e,t)):this.next(e,t)}next(e,t){let n=t&&t.name||e.name||`plugin${this.id}`;return H(!Ne(this,n),`Cannot add a plugin that already has the same name: ${n}`),G(this,n,{value:t}),this}};function rr(e){let{i18n:t,icons:n,constructor:{SETTING_ITEM_WIDTH:r,ASPECT_RATIO:i}}=e;function a(e){return e==="default"?t.get(`Default`):e}function o(){let t=e.setting.find(`aspect-ratio-${e.aspectRatio}`);e.setting.check(t)}return{width:r,name:`aspect-ratio`,html:t.get(`Aspect Ratio`),icon:n.aspectRatio,tooltip:a(e.aspectRatio),selector:i.map(t=>({value:t,name:`aspect-ratio-${t}`,default:t===e.aspectRatio,html:a(t)})),onSelect(t){return e.aspectRatio=t.value,t.html},mounted:()=>{o(),e.on(`aspectRatio`,()=>o())}}}function ir(e){let{i18n:t,icons:n,constructor:{SETTING_ITEM_WIDTH:r,FLIP:i}}=e;function a(e){return t.get(ke(e))}function o(){let t=e.setting.find(`flip-${e.flip}`);e.setting.check(t)}return{width:r,name:`flip`,html:t.get(`Video Flip`),tooltip:a(e.flip),icon:n.flip,selector:i.map(t=>({value:t,name:`flip-${t}`,default:t===e.flip,html:a(t)})),onSelect(t){return e.flip=t.value,t.html},mounted:()=>{o(),e.on(`flip`,()=>o())}}}function ar(e){let{i18n:t,icons:n,constructor:{SETTING_ITEM_WIDTH:r,PLAYBACK_RATE:i}}=e;function a(e){return e===1?t.get(`Normal`):e.toFixed(1)}function o(){let t=e.setting.find(`playback-rate-${e.playbackRate}`);e.setting.check(t)}return{width:r,name:`playback-rate`,html:t.get(`Play Speed`),tooltip:a(e.playbackRate),icon:n.playbackRate,selector:i.map(t=>({value:t,name:`playback-rate-${t}`,default:t===e.playbackRate,html:a(t)})),onSelect(t){return e.playbackRate=t.value,t.html},mounted:()=>{o(),e.on(`video:ratechange`,()=>o())}}}function or(e){let{i18n:t,icons:n,constructor:r}=e;return{width:r.SETTING_ITEM_WIDTH,name:`subtitle-offset`,html:t.get(`Subtitle Offset`),icon:n.subtitle,tooltip:`0s`,range:[0,-10,10,.1],onChange(t){return e.subtitleOffset=t.range[0],`${t.range[0]}s`},mounted:(t,n)=>{e.on(`subtitleOffset`,e=>{n.$range.value=e,n.tooltip=`${e}s`})}}}var sr=class extends Ye{constructor(e){super(e);let{option:t,controls:n,template:{$setting:r}}=e;this.name=`setting`,this.$parent=r,this.id=0,this.active=null,this.cache=new Map,this.option=[...this.builtin,...t.settings],t.setting&&(this.format(),this.render(),e.on(`blur`,()=>{this.show&&(this.show=!1,this.render())}),e.on(`focus`,e=>{let t=ye(e,n.setting),r=ye(e,this.$parent);this.show&&!t&&!r&&(this.show=!1,this.render())}),e.on(`resize`,()=>this.resize()))}get builtin(){let e=[],{option:t}=this.art;return t.playbackRate&&e.push(ar(this.art)),t.aspectRatio&&e.push(rr(this.art)),t.flip&&e.push(ir(this.art)),t.subtitleOffset&&e.push(or(this.art)),e}traverse(e,t=this.option){for(let n=0;n<t.length;n++){let r=t[n];e(r),r.selector?.length&&this.traverse(e,r.selector)}}check(e){e&&(e.$parent.tooltip=e.html,this.traverse(t=>{t.default=t===e,t.default&&t.$item&&R(t.$item,`art-current`)},e.$option),this.render(e.$parents))}format(e=this.option,t,n,r=[]){for(let i=0;i<e.length;i++){let a=e[i];if(a?.name?(H(!r.includes(a.name),`The [${a.name}] already exists in [setting]`),r.push(a.name)):a.name=`setting-${this.id++}`,!a.$formatted){G(a,`$parent`,{get:()=>t}),G(a,`$parents`,{get:()=>n}),G(a,`$option`,{get:()=>e});let r=[];G(a,`$events`,{get:()=>r}),G(a,`$formatted`,{get:()=>!0})}this.format(a.selector||[],a,e,r)}this.option=e}find(e=``){let t=null;return this.traverse(n=>{n.name===e&&(t=n)}),t}resize(){let{controls:e,constructor:{SETTING_WIDTH:t,SETTING_ITEM_HEIGHT:n},template:{$player:r,$setting:i}}=this.art;if(e.setting&&this.show){let a=this.active[0]?.$parent?.width||t,{left:o,width:s}=V(e.setting),{left:c,width:l}=V(r),u=o-c+s/2-a/2;if(L(i,`height`,`${this.active===this.option?this.active.length*n:(this.active.length+1)*n}px`),L(i,`width`,`${a}px`),this.art.isRotate||A)return;u+a>l?(L(i,`left`,null),L(i,`right`,null)):(L(i,`left`,`${u}px`),L(i,`right`,`auto`))}}inactivate(e){for(let t=0;t<e.$events.length;t++)this.art.events.remove(e.$events[t]);e.$events.length=0}remove(e){let t=this.find(e);H(t,`Can't find [${e}] in the [setting]`);let n=t.$option.indexOf(t);t.$option.splice(n,1),this.inactivate(t),t.$item&&me(t.$item),this.render()}update(e){let t=this.find(e.name);return t?(this.inactivate(t),Object.assign(t,e),this.format(),this.createItem(t,!0),this.render(),t):this.add(e)}add(e,t=this.option){return t.push(e),this.format(),this.createItem(e),this.render(),e}createHeader(e){if(!this.cache.has(e.$option))return;let t=this.cache.get(e.$option),{proxy:n,icons:{arrowLeft:r},constructor:{SETTING_ITEM_HEIGHT:i}}=this.art,a=B(`div`);L(a,`height`,`${i}px`),N(a,`art-setting-item`),N(a,`art-setting-item-back`);let o=I(a,`<div class="art-setting-item-left"></div>`),s=B(`div`);N(s,`art-setting-item-left-icon`),I(s,r),I(o,s),I(o,e.$parent.html);let c=n(a,`click`,()=>this.render(e.$parents));e.$parent.$events.push(c),I(t,a)}createItem(e,t=!1){if(!this.cache.has(e.$option))return;let n=this.cache.get(e.$option),r=e.$item,i=`selector`;Ne(e,`switch`)&&(i=`switch`),Ne(e,`range`)&&(i=`range`),Ne(e,`onClick`)&&(i=`button`);let{icons:a,proxy:o,constructor:s}=this.art,c=B(`div`);N(c,`art-setting-item`),L(c,`height`,`${s.SETTING_ITEM_HEIGHT}px`),c.dataset.name=e.name||``,c.dataset.value=e.value||``;let l=I(c,`<div class="art-setting-item-left"></div>`),u=I(c,`<div class="art-setting-item-right"></div>`),d=B(`div`);switch(N(d,`art-setting-item-left-icon`),i){case`button`:case`switch`:case`range`:I(d,e.icon||a.config);break;case`selector`:e.selector?.length?I(d,e.icon||a.config):I(d,a.check)}I(l,d),G(e,`$icon`,{configurable:!0,get:()=>d}),G(e,`icon`,{configurable:!0,get(){return d.innerHTML},set(e){d.innerHTML=``,I(d,e)}});let f=B(`div`);N(f,`art-setting-item-left-text`),I(f,e.html||``),I(l,f),G(e,`$html`,{configurable:!0,get:()=>f}),G(e,`html`,{configurable:!0,get(){return f.innerHTML},set(e){f.innerHTML=``,I(f,e)}});let p=B(`div`);switch(N(p,`art-setting-item-right-tooltip`),I(p,e.tooltip||``),I(u,p),G(e,`$tooltip`,{configurable:!0,get:()=>p}),G(e,`tooltip`,{configurable:!0,get(){return p.innerHTML},set(e){p.innerHTML=``,I(p,e)}}),i){case`switch`:{let t=B(`div`);N(t,`art-setting-item-right-icon`);let n=I(t,a.switchOn),r=I(t,a.switchOff);L(e.switch?r:n,`display`,`none`),I(u,t),G(e,`$switch`,{configurable:!0,get:()=>t});let i=e.switch;G(e,`switch`,{configurable:!0,get:()=>i,set(e){i=e,e?(L(r,`display`,`none`),L(n,`display`,null)):(L(r,`display`,null),L(n,`display`,`none`))}});break}case`range`:{let t=B(`div`);N(t,`art-setting-item-right-icon`);let n=I(t,`<input type="range">`);n.value=e.range[0],n.min=e.range[1],n.max=e.range[2],n.step=e.range[3],N(n,`art-setting-range`),I(u,t),G(e,`$range`,{configurable:!0,get:()=>n});let r=[...e.range];G(e,`range`,{configurable:!0,get:()=>r,set(e){r=[...e],n.value=e[0],n.min=e[1],n.max=e[2],n.step=e[3]}})}break;case`selector`:if(e.selector?.length){let e=B(`div`);N(e,`art-setting-item-right-icon`),I(e,a.arrowRight),I(u,e)}}switch(i){case`switch`:if(e.onSwitch){let t=o(c,`click`,async t=>{e.switch=await e.onSwitch.call(this.art,e,c,t)});e.$events.push(t)}break;case`range`:if(e.$range){if(e.onRange){let t=o(e.$range,`change`,async t=>{e.range[0]=e.$range.valueAsNumber,e.tooltip=await e.onRange.call(this.art,e,c,t)});e.$events.push(t)}if(e.onChange){let t=o(e.$range,`input`,async t=>{e.range[0]=e.$range.valueAsNumber,e.tooltip=await e.onChange.call(this.art,e,c,t)});e.$events.push(t)}}break;case`selector`:{let t=o(c,`click`,async t=>{e.selector?.length?this.render(e.selector):(this.check(e),e.$parent.onSelect&&(e.$parent.tooltip=await e.$parent.onSelect.call(this.art,e,c,t)))});e.$events.push(t),e.default&&N(c,`art-current`)}break;case`button`:if(e.onClick){let t=o(c,`click`,async t=>{e.tooltip=await e.onClick.call(this.art,e,c,t)});e.$events.push(t)}}G(e,`$item`,{configurable:!0,get:()=>c}),t?be(c,r):I(n,c),e.mounted&&setTimeout(()=>e.mounted.call(this.art,e.$item,e),0)}render(e=this.option){if(this.active=e,this.cache.has(e))R(this.cache.get(e),`art-current`);else{let t=B(`div`);this.cache.set(e,t),N(t,`art-setting-panel`),I(this.$parent,t),R(t,`art-current`),e[0]?.$parent&&this.createHeader(e[0]);for(let t=0;t<e.length;t++)this.createItem(e[t])}this.resize()}},cr=class{constructor(){this.name=`artplayer_settings`,this.settings={}}get(e){try{let t=JSON.parse(window.localStorage.getItem(this.name))||{};return e?t[e]:t}catch{return e?this.settings[e]:this.settings}}set(e,t){try{let n=Object.assign({},this.get(),{[e]:t});window.localStorage.setItem(this.name,JSON.stringify(n))}catch{this.settings[e]=t}}del(e){try{let t=this.get();delete t[e],window.localStorage.setItem(this.name,JSON.stringify(t))}catch{delete this.settings[e]}}clear(){try{window.localStorage.removeItem(this.name)}catch{this.settings={}}}},lr=`.art-video-player {
  --art-theme: #f00;
  --art-font-color: #fff;
  --art-background-color: #000;
  --art-text-shadow-color: rgba(0, 0, 0, 0.5);
  --art-transition-duration: 0.2s;
  --art-padding: 10px;
  --art-border-radius: 3px;
  --art-progress-height: 6px;
  --art-progress-color: rgba(255, 255, 255, 0.25);
  --art-progress-top-gap: 10px;
  --art-hover-color: rgba(255, 255, 255, 0.25);
  --art-loaded-color: rgba(255, 255, 255, 0.25);
  --art-state-size: 80px;
  --art-state-opacity: 0.8;
  --art-bottom-height: 100px;
  --art-bottom-offset: 20px;
  --art-bottom-gap: 5px;
  --art-highlight-width: 8px;
  --art-highlight-color: rgba(255, 255, 255, 0.5);
  --art-control-height: 46px;
  --art-control-opacity: 0.75;
  --art-control-icon-size: 36px;
  --art-control-icon-scale: 1.1;
  --art-volume-height: 120px;
  --art-volume-handle-size: 14px;
  --art-lock-size: 36px;
  --art-indicator-scale: 0;
  --art-indicator-size: 16px;
  --art-fullscreen-web-index: 9999;
  --art-settings-icon-size: 24px;
  --art-settings-max-height: 300px;
  --art-selector-max-height: 300px;
  --art-contextmenus-min-width: 250px;
  --art-subtitle-font-size: 20px;
  --art-subtitle-gap: 5px;
  --art-subtitle-bottom: 15px;
  --art-subtitle-border: #000;
  --art-widget-background: rgba(0, 0, 0, 0.85);
  --art-tip-background: rgba(0, 0, 0, 0.7);
  --art-scrollbar-size: 4px;
  --art-scrollbar-background: rgba(255, 255, 255, 0.25);
  --art-scrollbar-background-hover: rgba(255, 255, 255, 0.5);
  --art-mini-progress-height: 2px;
}
.art-bg-cover {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.art-bottom-gradient {
  background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0.4), transparent);
  background-repeat: repeat-x;
  background-position: center bottom;
}
.art-backdrop-filter {
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(0, 0, 0, 0.75) !important;
}
.art-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.art-video-player {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  outline: 0;
  zoom: 1;
  padding: 0;
  text-align: left;
  direction: ltr;
  font-size: 14px;
  line-height: 1.3;
  user-select: none;
  box-sizing: border-box;
  color: var(--art-font-color);
  background-color: var(--art-background-color);
  text-shadow: 0 0 2px var(--art-text-shadow-color);
  font-family: PingFang SC, Helvetica Neue, Microsoft YaHei, Roboto, Arial, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -ms-high-contrast-adjust: none;
}
.art-video-player *,
.art-video-player *::before,
.art-video-player *::after {
  box-sizing: border-box;
}
.art-video-player ::-webkit-scrollbar {
  width: var(--art-scrollbar-size);
  height: var(--art-scrollbar-size);
}
.art-video-player ::-webkit-scrollbar-thumb {
  background-color: var(--art-scrollbar-background);
}
@media (hover: hover) and (pointer: fine) {
.art-video-player ::-webkit-scrollbar-thumb:hover {
  background-color: var(--art-scrollbar-background-hover);
}
}
.art-video-player img {
  max-width: 100%;
  vertical-align: top;
}
.art-video-player svg {
  fill: var(--art-font-color);
}
.art-video-player a {
  color: var(--art-font-color);
  text-decoration: none;
}
.art-icon {
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.art-video-player.art-backdrop .art-contextmenus,
.art-video-player.art-backdrop .art-info,
.art-video-player.art-backdrop .art-settings,
.art-video-player.art-backdrop .art-layer-auto-playback,
.art-video-player.art-backdrop .art-selector-list,
.art-video-player.art-backdrop .art-volume-inner {
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(0, 0, 0, 0.75) !important;
}
.art-video {
  position: absolute;
  inset: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.art-poster {
  position: absolute;
  inset: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  pointer-events: none;
}
.art-video-player .art-subtitle {
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 20;
  width: 100%;
  padding: 0 5%;
  text-align: center;
  pointer-events: none;
  gap: var(--art-subtitle-gap);
  bottom: var(--art-subtitle-bottom);
  font-size: var(--art-subtitle-font-size);
  transition: bottom var(--art-transition-duration) ease;
  text-shadow: var(--art-subtitle-border) 1px 0 1px, var(--art-subtitle-border) 0 1px 1px, var(--art-subtitle-border) -1px 0 1px, var(--art-subtitle-border) 0 -1px 1px, var(--art-subtitle-border) 1px 1px 1px, var(--art-subtitle-border) -1px -1px 1px, var(--art-subtitle-border) 1px -1px 1px, var(--art-subtitle-border) -1px 1px 1px;
}
.art-video-player.art-subtitle-show .art-subtitle {
  display: flex;
}
.art-video-player.art-control-show .art-subtitle {
  bottom: calc(var(--art-control-height) + var(--art-subtitle-bottom));
}
.art-danmuku {
  position: absolute;
  inset: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}
.art-video-player .art-layers {
  position: absolute;
  inset: 0;
  z-index: 40;
  width: 100%;
  height: 100%;
  display: none;
  pointer-events: none;
}
.art-video-player .art-layers .art-layer {
  pointer-events: auto;
}
.art-video-player.art-layer-show .art-layers {
  display: flex;
}
.art-video-player .art-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.art-video-player .art-mask .art-state {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(2);
  width: var(--art-state-size);
  height: var(--art-state-size);
  transition: all var(--art-transition-duration) ease;
}
.art-video-player.art-mask-show .art-state {
  pointer-events: auto;
  opacity: var(--art-state-opacity);
  transform: scale(1);
}
.art-video-player.art-loading-show .art-state {
  display: none;
}
.art-video-player .art-loading {
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
  z-index: 70;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.art-video-player.art-loading-show .art-loading {
  display: flex;
}
.art-video-player.art-loading-show .art-mask {
  display: none;
}
.art-video-player .art-bottom {
  position: absolute;
  inset: 0;
  z-index: 60;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  padding: 0 var(--art-padding);
  transition: all var(--art-transition-duration) ease;
  background-size: 100% var(--art-bottom-height);
  background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0.4), transparent);
  background-repeat: repeat-x;
  background-position: center bottom;
}
.art-video-player .art-bottom .art-controls,
.art-video-player .art-bottom .art-progress {
  transform: translateY(var(--art-bottom-offset));
  transition: transform var(--art-transition-duration) ease;
}
.art-video-player.art-control-show .art-bottom,
.art-video-player.art-hover .art-bottom {
  opacity: 1;
}
.art-video-player.art-control-show .art-bottom .art-controls,
.art-video-player.art-hover .art-bottom .art-controls,
.art-video-player.art-control-show .art-bottom .art-progress,
.art-video-player.art-hover .art-bottom .art-progress {
  transform: translateY(0);
}
.art-bottom .art-progress {
  position: relative;
  z-index: 0;
  cursor: pointer;
  pointer-events: auto;
  padding-top: var(--art-progress-top-gap);
  padding-bottom: var(--art-bottom-gap);
}
.art-bottom .art-progress .art-control-progress {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--art-progress-height);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner {
  display: flex;
  align-items: center;
  position: relative;
  height: 50%;
  width: 100%;
  transition: height var(--art-transition-duration) ease;
  background-color: var(--art-progress-color);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-hover {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  width: 0%;
  background-color: var(--art-hover-color);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-loaded {
  position: absolute;
  inset: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  width: 0%;
  background-color: var(--art-loaded-color);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-played {
  position: absolute;
  inset: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  width: 0%;
  background-color: var(--art-theme);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight {
  position: absolute;
  inset: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight span {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  right: auto;
  pointer-events: auto;
  width: var(--art-highlight-width) !important;
  transform: translateX(calc(var(--art-highlight-width) / -2));
  background-color: var(--art-highlight-color);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 40;
  left: 0;
  border-radius: 50%;
  width: var(--art-indicator-size);
  height: var(--art-indicator-size);
  transform: scale(var(--art-indicator-scale));
  margin-left: calc(var(--art-indicator-size) / -2);
  transition: transform var(--art-transition-duration) ease;
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator .art-icon {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:hover {
  transform: scale(1.2) !important;
}
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:active {
  transform: scale(1) !important;
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip {
  transform-origin: bottom center;
  transform: scale(0.5);
  opacity: 0;
  position: absolute;
  z-index: 50;
  top: -25px;
  left: 0;
  padding: 3px 5px;
  line-height: 1;
  font-size: 12px;
  border-radius: var(--art-border-radius);
  white-space: nowrap;
  background-color: var(--art-tip-background);
  transition: transform var(--art-transition-duration) ease, opacity var(--art-transition-duration) ease;
}
.art-bottom .art-progress .art-control-thumbnails {
  transform-origin: bottom center;
  transform: scale(0.5);
  opacity: 0;
  position: absolute;
  bottom: calc(var(--art-bottom-gap) + 10px);
  left: 0;
  border-radius: var(--art-border-radius);
  pointer-events: none;
  background-color: var(--art-widget-background);
  transition: transform var(--art-transition-duration) ease, opacity var(--art-transition-duration) ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px -1px rgba(0, 0, 0, 0.2);
}
@media (hover: hover) and (pointer: fine) {
.art-bottom .art-progress:hover .art-control-progress .art-control-progress-inner {
  height: 100%;
}
}
@media (hover: hover) and (pointer: fine) {
.art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator {
  transform: scale(1);
}
}
.art-progress-hover .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip,
.art-progress-hover .art-bottom .art-progress .art-control-thumbnails {
  transform: scale(1);
  opacity: 1;
}
.art-video-player .art-controls {
  position: relative;
  z-index: 10;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--art-control-height);
}
.art-video-player .art-controls .art-controls-left,
.art-video-player .art-controls .art-controls-right {
  display: flex;
  height: 100%;
}
.art-video-player .art-controls .art-controls-center {
  display: none;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  padding: 0 10px;
}
.art-video-player .art-controls .art-controls-right {
  justify-content: flex-end;
}
.art-video-player .art-controls .art-control {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  white-space: nowrap;
  opacity: var(--art-control-opacity);
  min-height: var(--art-control-height);
  min-width: var(--art-control-height);
  transition: opacity var(--art-transition-duration) ease;
}
.art-video-player .art-controls .art-control .art-icon {
  height: var(--art-control-icon-size);
  width: var(--art-control-icon-size);
  transform: scale(var(--art-control-icon-scale));
  transition: transform var(--art-transition-duration) ease;
}
.art-video-player .art-controls .art-control .art-icon:active {
  transform: scale(calc(var(--art-control-icon-scale) * 0.8));
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .art-controls .art-control:hover {
  opacity: 1;
}
}
.art-control-volume {
  position: relative;
}
.art-control-volume .art-volume-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 5px;
  font-size: 12px;
  text-align: center;
  cursor: default;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  bottom: var(--art-control-height);
  width: var(--art-control-height);
  height: var(--art-volume-height);
  transition: all var(--art-transition-duration) ease;
}
.art-control-volume .art-volume-panel .art-volume-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 100%;
  width: 100%;
  padding: 10px 0 12px;
  border-radius: var(--art-border-radius);
  background-color: var(--art-widget-background);
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider {
  flex: 1;
  width: 100%;
  display: flex;
  cursor: pointer;
  position: relative;
  justify-content: center;
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle {
  position: relative;
  display: flex;
  justify-content: center;
  width: 2px;
  border-radius: var(--art-border-radius);
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.25);
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle .art-volume-loaded {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: var(--art-theme);
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-indicator {
  position: absolute;
  width: var(--art-volume-handle-size);
  height: var(--art-volume-handle-size);
  margin-top: calc(var(--art-volume-handle-size) / -2);
  flex-shrink: 0;
  transform: scale(1);
  border-radius: 100%;
  background-color: var(--art-theme);
  transition: transform var(--art-transition-duration) ease;
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider:active .art-volume-indicator {
  transform: scale(0.9);
}
@media (hover: hover) and (pointer: fine) {
.art-control-volume:hover .art-volume-panel {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
}
.art-video-player .art-notice {
  display: none;
  position: absolute;
  inset: 0;
  z-index: 80;
  width: 100%;
  height: 100%;
  height: auto;
  bottom: auto;
  padding: var(--art-padding);
  pointer-events: none;
}
.art-video-player .art-notice .art-notice-inner {
  display: inline-flex;
  padding: 5px;
  line-height: 1;
  border-radius: var(--art-border-radius);
  background-color: var(--art-tip-background);
}
.art-video-player.art-notice-show .art-notice {
  display: flex;
}
.art-video-player .art-contextmenus {
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 120;
  padding: 5px 0;
  border-radius: var(--art-border-radius);
  font-size: 12px;
  background-color: var(--art-widget-background);
  min-width: var(--art-contextmenus-min-width);
}
.art-video-player .art-contextmenus .art-contextmenu {
  cursor: pointer;
  display: flex;
  padding: 10px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.art-video-player .art-contextmenus .art-contextmenu span {
  padding: 0 8px;
}
.art-video-player .art-contextmenus .art-contextmenu span.art-current {
  color: var(--art-theme);
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .art-contextmenus .art-contextmenu span:hover {
  color: var(--art-theme);
}
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .art-contextmenus .art-contextmenu:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
}
.art-video-player .art-contextmenus .art-contextmenu:last-child {
  border-bottom: none;
}
.art-video-player.art-contextmenu-show .art-contextmenus {
  display: flex;
}
.art-video-player .art-settings {
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 90;
  left: auto;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: var(--art-border-radius);
  max-height: var(--art-settings-max-height);
  right: var(--art-padding);
  bottom: var(--art-control-height);
  transition: all var(--art-transition-duration) ease;
  background-color: var(--art-widget-background);
}
.art-video-player .art-settings .art-setting-panel {
  display: none;
  flex-direction: column;
}
.art-video-player .art-settings .art-setting-panel.art-current {
  display: flex;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  cursor: pointer;
  overflow: hidden;
  transition: background-color var(--art-transition-duration) ease;
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .art-settings .art-setting-panel .art-setting-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
}
.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current {
  color: var(--art-theme);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-icon-check {
  visibility: hidden;
  height: 15px;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current .art-icon-check {
  visibility: visible;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 5px;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left .art-setting-item-left-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--art-settings-icon-size);
  width: var(--art-settings-icon-size);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 12px;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-tooltip {
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.5);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  height: 24px;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-range {
  height: 3px;
  width: 80px;
  outline: none;
  appearance: none;
  background-color: rgba(255, 255, 255, 0.2);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item-back {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.art-video-player.art-setting-show .art-settings {
  display: flex;
}
.art-video-player .art-info {
  display: none;
  position: absolute;
  left: var(--art-padding);
  top: var(--art-padding);
  z-index: 100;
  padding: 10px;
  font-size: 12px;
  border-radius: var(--art-border-radius);
  background-color: var(--art-widget-background);
}
.art-video-player .art-info .art-info-panel {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.art-video-player .art-info .art-info-panel .art-info-item {
  display: flex;
  align-items: center;
  gap: 5px;
}
.art-video-player .art-info .art-info-panel .art-info-item .art-info-title {
  width: 100px;
  text-align: right;
}
.art-video-player .art-info .art-info-panel .art-info-item .art-info-content {
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: all;
}
.art-video-player .art-info .art-info-close {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
.art-video-player.art-info-show .art-info {
  display: flex;
}
.art-hide-cursor * {
  cursor: none !important;
}
.art-video-player[data-aspect-ratio] {
  overflow: hidden;
}
.art-video-player[data-aspect-ratio] .art-video {
  object-fit: fill;
  box-sizing: content-box;
}
.art-fullscreen {
  --art-progress-height: 8px;
  --art-indicator-size: 20px;
  --art-control-height: 60px;
  --art-control-icon-scale: 1.3;
}
.art-fullscreen-web {
  --art-progress-height: 8px;
  --art-indicator-size: 20px;
  --art-control-height: 60px;
  --art-control-icon-scale: 1.3;
  position: fixed;
  inset: 0;
  z-index: var(--art-fullscreen-web-index);
  width: 100%;
  height: 100%;
}
.art-mini-popup {
  position: fixed;
  z-index: 9999;
  width: 320px;
  height: 180px;
  background: #000;
  border-radius: var(--art-border-radius);
  cursor: move;
  user-select: none;
  overflow: hidden;
  transition: opacity 0.2s ease;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.art-mini-popup svg {
  fill: #fff;
}
.art-mini-popup .art-video {
  pointer-events: none;
}
.art-mini-popup .art-mini-close {
  position: absolute;
  z-index: 20;
  right: 10px;
  top: 10px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.art-mini-popup .art-mini-state {
  position: absolute;
  inset: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  background-color: rgba(0, 0, 0, 0.25);
}
.art-mini-popup .art-mini-state .art-icon {
  opacity: 0.75;
  cursor: pointer;
  transform: scale(3);
  pointer-events: auto;
  transition: transform 0.2s ease;
}
.art-mini-popup .art-mini-state .art-icon:active {
  transform: scale(2.5);
}
.art-mini-popup.art-mini-dragging {
  opacity: 0.9;
}
@media (hover: hover) and (pointer: fine) {
.art-mini-popup:hover .art-mini-close, .art-mini-popup:hover .art-mini-state {
  opacity: 1;
}
}
.art-video-player[data-flip='horizontal'] .art-video {
  transform: scaleX(-1);
}
.art-video-player[data-flip='vertical'] .art-video {
  transform: scaleY(-1);
}
.art-video-player .art-layer-lock {
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  height: var(--art-lock-size);
  width: var(--art-lock-size);
  left: var(--art-padding);
  background-color: var(--art-tip-background);
}
.art-video-player .art-layer-auto-playback {
  display: none;
  gap: 10px;
  align-items: center;
  position: absolute;
  border-radius: var(--art-border-radius);
  padding: 10px;
  line-height: 1;
  left: var(--art-padding);
  bottom: calc(var(--art-control-height) + var(--art-bottom-gap) + 10px);
  background-color: var(--art-widget-background);
}
.art-video-player .art-layer-auto-playback .art-auto-playback-close {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.art-video-player .art-layer-auto-playback .art-auto-playback-close svg {
  width: 15px;
  height: 15px;
  fill: var(--art-theme);
}
.art-video-player .art-layer-auto-playback .art-auto-playback-jump {
  color: var(--art-theme);
  cursor: pointer;
}
.art-video-player.art-lock .art-subtitle {
  bottom: var(--art-subtitle-bottom) !important;
}
.art-video-player.art-mini-progress-bar .art-bottom,
.art-video-player.art-lock .art-bottom {
  opacity: 1;
  padding: 0;
  background-image: none;
}
.art-video-player.art-mini-progress-bar .art-bottom .art-controls,
.art-video-player.art-lock .art-bottom .art-controls,
.art-video-player.art-mini-progress-bar .art-bottom .art-progress,
.art-video-player.art-lock .art-bottom .art-progress {
  transform: translateY(calc(var(--art-control-height) + var(--art-bottom-gap) + var(--art-progress-height) / 4));
}
.art-video-player.art-mini-progress-bar .art-bottom .art-progress-indicator,
.art-video-player.art-lock .art-bottom .art-progress-indicator {
  display: none !important;
}
.art-video-player.art-control-show .art-layer-lock {
  display: flex;
}
.art-control-selector {
  position: relative;
  display: flex;
  justify-content: center;
}
.art-control-selector .art-selector-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  border-radius: var(--art-border-radius);
  overflow-y: auto;
  overflow-x: hidden;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  bottom: var(--art-control-height);
  max-height: var(--art-selector-max-height);
  background-color: var(--art-widget-background);
  transition: all var(--art-transition-duration) ease;
}
.art-control-selector .art-selector-list .art-selector-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  flex-shrink: 0;
  line-height: 1;
}
@media (hover: hover) and (pointer: fine) {
.art-control-selector .art-selector-list .art-selector-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
}
.art-control-selector .art-selector-list .art-selector-item.art-current {
  color: var(--art-theme);
}
@media (hover: hover) and (pointer: fine) {
.art-control-selector .art-selector-list .art-selector-item:hover {
  color: var(--art-theme);
}
}
@media (hover: hover) and (pointer: fine) {
.art-control-selector:hover .art-selector-list {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
}
.art-video-player {
  /*! Hint.css - v2.7.0 - 2021-10-01
    * https://kushagra.dev/lab/hint/
    * Copyright (c) 2021 Kushagra Gour */
  /*-------------------------------------*\\
        HINT.css - A CSS tooltip library
    \\*-------------------------------------*/
  /**
    * HINT.css is a tooltip library made in pure CSS.
    *
    * Source: https://github.com/chinchang/hint.css
    * Demo: http://kushagragour.in/lab/hint/
    *
    */
  /**
    * source: hint-core.scss
    *
    * Defines the basic styling for the tooltip.
    * Each tooltip is made of 2 parts:
    * 	1) body (:after)
    * 	2) arrow (:before)
    *
    * Classes added:
    * 	1) hint
    */
  /**
    * source: hint-position.scss
    *
    * Defines the positoning logic for the tooltips.
    *
    * Classes added:
    * 	1) hint--top
    * 	2) hint--bottom
    * 	3) hint--left
    * 	4) hint--right
    */
  /**
    * set default color for tooltip arrows
    */
  /**
    * top tooltip
    */
  /**
    * bottom tooltip
    */
  /**
    * right tooltip
    */
  /**
    * left tooltip
    */
  /**
    * top-left tooltip
    */
  /**
    * top-right tooltip
    */
  /**
    * bottom-left tooltip
    */
  /**
    * bottom-right tooltip
    */
  /**
    * source: hint-sizes.scss
    *
    * Defines width restricted tooltips that can span
    * across multiple lines.
    *
    * Classes added:
    * 	1) hint--small
    * 	2) hint--medium
    * 	3) hint--large
    *
    */
  /**
    * source: hint-theme.scss
    *
    * Defines basic theme for tooltips.
    *
    */
  /**
    * source: hint-color-types.scss
    *
    * Contains tooltips of various types based on color differences.
    *
    * Classes added:
    * 	1) hint--error
    * 	2) hint--warning
    * 	3) hint--info
    * 	4) hint--success
    *
    */
  /**
    * Error
    */
  /**
    * Warning
    */
  /**
    * Info
    */
  /**
    * Success
    */
  /**
    * source: hint-always.scss
    *
    * Defines a persisted tooltip which shows always.
    *
    * Classes added:
    * 	1) hint--always
    *
    */
  /**
    * source: hint-rounded.scss
    *
    * Defines rounded corner tooltips.
    *
    * Classes added:
    * 	1) hint--rounded
    *
    */
  /**
    * source: hint-effects.scss
    *
    * Defines various transition effects for the tooltips.
    *
    * Classes added:
    * 	1) hint--no-animate
    * 	2) hint--bounce
    *
    */
}
.art-video-player [class*='hint--'] {
  position: relative;
  display: inline-block;
  font-style: normal;
  /**
        * tooltip arrow
        */
  /**
        * tooltip body
        */
}
.art-video-player [class*='hint--']:before,
.art-video-player [class*='hint--']:after {
  position: absolute;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  visibility: hidden;
  opacity: 0;
  z-index: 1000000;
  pointer-events: none;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  transition: 0.3s ease;
  -webkit-transition-delay: 0ms;
  -moz-transition-delay: 0ms;
  transition-delay: 0ms;
}
@media (hover: hover) and (pointer: fine) {
.art-video-player [class*='hint--']:hover:before, .art-video-player [class*='hint--']:hover:after {
  visibility: visible;
  opacity: 1;
}
}
@media (hover: hover) and (pointer: fine) {
.art-video-player [class*='hint--']:hover:before, .art-video-player [class*='hint--']:hover:after {
  -webkit-transition-delay: 100ms;
  -moz-transition-delay: 100ms;
  transition-delay: 100ms;
}
}
.art-video-player [class*='hint--']:before {
  content: '';
  position: absolute;
  background: transparent;
  border: 6px solid transparent;
  z-index: 1000001;
}
.art-video-player [class*='hint--']:after {
  background: #000000;
  color: white;
  padding: 8px 10px;
  font-size: 12px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 12px;
  white-space: nowrap;
}
.art-video-player [class*='hint--'][aria-label]:after {
  content: attr(aria-label);
}
.art-video-player [class*='hint--'][data-hint]:after {
  content: attr(data-hint);
}
.art-video-player [aria-label='']:before,
.art-video-player [aria-label='']:after,
.art-video-player [data-hint='']:before,
.art-video-player [data-hint='']:after {
  display: none !important;
}
.art-video-player .hint--top-left:before {
  border-top-color: #000000;
}
.art-video-player .hint--top-right:before {
  border-top-color: #000000;
}
.art-video-player .hint--top:before {
  border-top-color: #000000;
}
.art-video-player .hint--bottom-left:before {
  border-bottom-color: #000000;
}
.art-video-player .hint--bottom-right:before {
  border-bottom-color: #000000;
}
.art-video-player .hint--bottom:before {
  border-bottom-color: #000000;
}
.art-video-player .hint--left:before {
  border-left-color: #000000;
}
.art-video-player .hint--right:before {
  border-right-color: #000000;
}
.art-video-player .hint--top:before {
  margin-bottom: -11px;
}
.art-video-player .hint--top:before,
.art-video-player .hint--top:after {
  bottom: 100%;
  left: 50%;
}
.art-video-player .hint--top:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--top:after {
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%);
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--top:hover:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--top:hover:after {
  -webkit-transform: translateX(-50%) translateY(-8px);
  -moz-transform: translateX(-50%) translateY(-8px);
  transform: translateX(-50%) translateY(-8px);
}
}
.art-video-player .hint--bottom:before {
  margin-top: -11px;
}
.art-video-player .hint--bottom:before,
.art-video-player .hint--bottom:after {
  top: 100%;
  left: 50%;
}
.art-video-player .hint--bottom:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--bottom:after {
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%);
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--bottom:hover:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--bottom:hover:after {
  -webkit-transform: translateX(-50%) translateY(8px);
  -moz-transform: translateX(-50%) translateY(8px);
  transform: translateX(-50%) translateY(8px);
}
}
.art-video-player .hint--right:before {
  margin-left: -11px;
  margin-bottom: -6px;
}
.art-video-player .hint--right:after {
  margin-bottom: -14px;
}
.art-video-player .hint--right:before,
.art-video-player .hint--right:after {
  left: 100%;
  bottom: 50%;
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--right:hover:before {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px);
}
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--right:hover:after {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px);
}
}
.art-video-player .hint--left:before {
  margin-right: -11px;
  margin-bottom: -6px;
}
.art-video-player .hint--left:after {
  margin-bottom: -14px;
}
.art-video-player .hint--left:before,
.art-video-player .hint--left:after {
  right: 100%;
  bottom: 50%;
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--left:hover:before {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px);
}
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--left:hover:after {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px);
}
}
.art-video-player .hint--top-left:before {
  margin-bottom: -11px;
}
.art-video-player .hint--top-left:before,
.art-video-player .hint--top-left:after {
  bottom: 100%;
  left: 50%;
}
.art-video-player .hint--top-left:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--top-left:after {
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  transform: translateX(-100%);
}
.art-video-player .hint--top-left:after {
  margin-left: 12px;
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--top-left:hover:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--top-left:hover:after {
  -webkit-transform: translateX(-100%) translateY(-8px);
  -moz-transform: translateX(-100%) translateY(-8px);
  transform: translateX(-100%) translateY(-8px);
}
}
.art-video-player .hint--top-right:before {
  margin-bottom: -11px;
}
.art-video-player .hint--top-right:before,
.art-video-player .hint--top-right:after {
  bottom: 100%;
  left: 50%;
}
.art-video-player .hint--top-right:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--top-right:after {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  transform: translateX(0);
}
.art-video-player .hint--top-right:after {
  margin-left: -12px;
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--top-right:hover:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--top-right:hover:after {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
}
.art-video-player .hint--bottom-left:before {
  margin-top: -11px;
}
.art-video-player .hint--bottom-left:before,
.art-video-player .hint--bottom-left:after {
  top: 100%;
  left: 50%;
}
.art-video-player .hint--bottom-left:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--bottom-left:after {
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  transform: translateX(-100%);
}
.art-video-player .hint--bottom-left:after {
  margin-left: 12px;
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--bottom-left:hover:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--bottom-left:hover:after {
  -webkit-transform: translateX(-100%) translateY(8px);
  -moz-transform: translateX(-100%) translateY(8px);
  transform: translateX(-100%) translateY(8px);
}
}
.art-video-player .hint--bottom-right:before {
  margin-top: -11px;
}
.art-video-player .hint--bottom-right:before,
.art-video-player .hint--bottom-right:after {
  top: 100%;
  left: 50%;
}
.art-video-player .hint--bottom-right:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--bottom-right:after {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  transform: translateX(0);
}
.art-video-player .hint--bottom-right:after {
  margin-left: -12px;
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--bottom-right:hover:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
}
@media (hover: hover) and (pointer: fine) {
.art-video-player .hint--bottom-right:hover:after {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
}
.art-video-player .hint--small:after,
.art-video-player .hint--medium:after,
.art-video-player .hint--large:after {
  white-space: normal;
  line-height: 1.4em;
  word-wrap: break-word;
}
.art-video-player .hint--small:after {
  width: 80px;
}
.art-video-player .hint--medium:after {
  width: 150px;
}
.art-video-player .hint--large:after {
  width: 300px;
}
.art-video-player [class*='hint--'] {
  /**
        * tooltip body
        */
}
.art-video-player [class*='hint--']:after {
  text-shadow: 0 -1px 0px black;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
}
.art-video-player .hint--error:after {
  background-color: #b34e4d;
  text-shadow: 0 -1px 0px #592726;
}
.art-video-player .hint--error.hint--top-left:before {
  border-top-color: #b34e4d;
}
.art-video-player .hint--error.hint--top-right:before {
  border-top-color: #b34e4d;
}
.art-video-player .hint--error.hint--top:before {
  border-top-color: #b34e4d;
}
.art-video-player .hint--error.hint--bottom-left:before {
  border-bottom-color: #b34e4d;
}
.art-video-player .hint--error.hint--bottom-right:before {
  border-bottom-color: #b34e4d;
}
.art-video-player .hint--error.hint--bottom:before {
  border-bottom-color: #b34e4d;
}
.art-video-player .hint--error.hint--left:before {
  border-left-color: #b34e4d;
}
.art-video-player .hint--error.hint--right:before {
  border-right-color: #b34e4d;
}
.art-video-player .hint--warning:after {
  background-color: #c09854;
  text-shadow: 0 -1px 0px #6c5328;
}
.art-video-player .hint--warning.hint--top-left:before {
  border-top-color: #c09854;
}
.art-video-player .hint--warning.hint--top-right:before {
  border-top-color: #c09854;
}
.art-video-player .hint--warning.hint--top:before {
  border-top-color: #c09854;
}
.art-video-player .hint--warning.hint--bottom-left:before {
  border-bottom-color: #c09854;
}
.art-video-player .hint--warning.hint--bottom-right:before {
  border-bottom-color: #c09854;
}
.art-video-player .hint--warning.hint--bottom:before {
  border-bottom-color: #c09854;
}
.art-video-player .hint--warning.hint--left:before {
  border-left-color: #c09854;
}
.art-video-player .hint--warning.hint--right:before {
  border-right-color: #c09854;
}
.art-video-player .hint--info:after {
  background-color: #3986ac;
  text-shadow: 0 -1px 0px #1a3c4d;
}
.art-video-player .hint--info.hint--top-left:before {
  border-top-color: #3986ac;
}
.art-video-player .hint--info.hint--top-right:before {
  border-top-color: #3986ac;
}
.art-video-player .hint--info.hint--top:before {
  border-top-color: #3986ac;
}
.art-video-player .hint--info.hint--bottom-left:before {
  border-bottom-color: #3986ac;
}
.art-video-player .hint--info.hint--bottom-right:before {
  border-bottom-color: #3986ac;
}
.art-video-player .hint--info.hint--bottom:before {
  border-bottom-color: #3986ac;
}
.art-video-player .hint--info.hint--left:before {
  border-left-color: #3986ac;
}
.art-video-player .hint--info.hint--right:before {
  border-right-color: #3986ac;
}
.art-video-player .hint--success:after {
  background-color: #458746;
  text-shadow: 0 -1px 0px #1a321a;
}
.art-video-player .hint--success.hint--top-left:before {
  border-top-color: #458746;
}
.art-video-player .hint--success.hint--top-right:before {
  border-top-color: #458746;
}
.art-video-player .hint--success.hint--top:before {
  border-top-color: #458746;
}
.art-video-player .hint--success.hint--bottom-left:before {
  border-bottom-color: #458746;
}
.art-video-player .hint--success.hint--bottom-right:before {
  border-bottom-color: #458746;
}
.art-video-player .hint--success.hint--bottom:before {
  border-bottom-color: #458746;
}
.art-video-player .hint--success.hint--left:before {
  border-left-color: #458746;
}
.art-video-player .hint--success.hint--right:before {
  border-right-color: #458746;
}
.art-video-player .hint--always:after,
.art-video-player .hint--always:before {
  opacity: 1;
  visibility: visible;
}
.art-video-player .hint--always.hint--top:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--always.hint--top:after {
  -webkit-transform: translateX(-50%) translateY(-8px);
  -moz-transform: translateX(-50%) translateY(-8px);
  transform: translateX(-50%) translateY(-8px);
}
.art-video-player .hint--always.hint--top-left:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--always.hint--top-left:after {
  -webkit-transform: translateX(-100%) translateY(-8px);
  -moz-transform: translateX(-100%) translateY(-8px);
  transform: translateX(-100%) translateY(-8px);
}
.art-video-player .hint--always.hint--top-right:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--always.hint--top-right:after {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--always.hint--bottom:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--always.hint--bottom:after {
  -webkit-transform: translateX(-50%) translateY(8px);
  -moz-transform: translateX(-50%) translateY(8px);
  transform: translateX(-50%) translateY(8px);
}
.art-video-player .hint--always.hint--bottom-left:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--always.hint--bottom-left:after {
  -webkit-transform: translateX(-100%) translateY(8px);
  -moz-transform: translateX(-100%) translateY(8px);
  transform: translateX(-100%) translateY(8px);
}
.art-video-player .hint--always.hint--bottom-right:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--always.hint--bottom-right:after {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--always.hint--left:before {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px);
}
.art-video-player .hint--always.hint--left:after {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px);
}
.art-video-player .hint--always.hint--right:before {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px);
}
.art-video-player .hint--always.hint--right:after {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px);
}
.art-video-player .hint--rounded:after {
  border-radius: 4px;
}
.art-video-player .hint--no-animate:before,
.art-video-player .hint--no-animate:after {
  -webkit-transition-duration: 0ms;
  -moz-transition-duration: 0ms;
  transition-duration: 0ms;
}
.art-video-player .hint--bounce:before,
.art-video-player .hint--bounce:after {
  -webkit-transition: opacity 0.3s ease, visibility 0.3s ease, -webkit-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
  -moz-transition: opacity 0.3s ease, visibility 0.3s ease, -moz-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
}
.art-video-player .hint--no-shadow:before,
.art-video-player .hint--no-shadow:after {
  text-shadow: initial;
  box-shadow: initial;
}
.art-video-player .hint--no-arrow:before {
  display: none;
}
.art-video-player.art-mobile {
  --art-bottom-gap: 10px;
  --art-control-height: 38px;
  --art-control-icon-scale: 1;
  --art-state-size: 60px;
  --art-settings-max-height: 180px;
  --art-selector-max-height: 180px;
  --art-indicator-scale: 1;
  --art-control-opacity: 1;
}
.art-video-player.art-mobile .art-controls-left {
  margin-left: calc(var(--art-padding) / -1);
}
.art-video-player.art-mobile .art-controls-right {
  margin-right: calc(var(--art-padding) / -1);
}
`,ur=class extends Ye{constructor(e){super(e),this.name=`subtitle`,this.option=null,this.destroyEvent=()=>null,this.init(e.option.subtitle);let t=!1;e.on(`video:timeupdate`,()=>{if(!this.url)return;let e=this.art.template.$video.webkitDisplayingFullscreen;typeof e==`boolean`&&e!==t&&(t=e,this.createTrack(e?`subtitles`:`metadata`,this.url))})}get url(){return this.art.template.$track.src}set url(e){this.switch(e)}get textTrack(){return this.art.template.$video?.textTracks?.[0]}get activeCues(){return this.textTrack?Array.from(this.textTrack.activeCues):[]}get cues(){return this.textTrack?Array.from(this.textTrack.cues):[]}style(e,t){let{$subtitle:n}=this.art.template;return typeof e==`object`?he(n,e):L(n,e,t)}update(){let{option:{subtitle:e},template:{$subtitle:t}}=this.art;t.innerHTML=``,this.activeCues.length&&(this.art.emit(`subtitleBeforeUpdate`,this.activeCues),t.innerHTML=this.activeCues.map((t,n)=>t.text.split(/\r?\n/).filter(e=>e.trim()).map(t=>`<div class="art-subtitle-line" data-group="${n}">
                                ${e.escape?Ae(t):t}
                            </div>`).join(``)).join(``),this.art.emit(`subtitleAfterUpdate`,this.activeCues))}async switch(e,t={}){let{i18n:n,notice:r,option:i}=this.art,a={...i.subtitle,...t,url:e},o=await this.init(a);return t.name&&(r.show=`${n.get(`Switch Subtitle`)}: ${t.name}`),o}createTrack(e,t){let{template:n,proxy:r,option:i}=this.art,{$video:a,$track:o}=n,s=B(`track`);s.default=!0,s.kind=e,s.src=t,s.label=i.subtitle.name||`Artplayer`,s.track.mode=`hidden`,s.onload=()=>{this.art.emit(`subtitleLoad`,this.cues,this.option)},this.art.events.remove(this.destroyEvent),o.onload=null,me(o),I(a,s),n.$track=s,this.destroyEvent=r(this.textTrack,`cuechange`,()=>this.update())}async init(e){let{notice:t,template:{$subtitle:n}}=this.art;if(!this.textTrack)return null;if(k(e,Je.subtitle),e.url)return this.option=e,this.style(e.style),fetch(e.url).then(e=>e.arrayBuffer()).then(t=>{let n=new TextDecoder(e.encoding).decode(t);switch(e.type||De(e.url)){case`srt`:{let t=Le(n);return Re(e.onVttLoad(t))}case`ass`:{let t=ze(n);return Re(e.onVttLoad(t))}case`vtt`:return Re(e.onVttLoad(n));default:return e.url}}).then(e=>(n.innerHTML=``,this.url===e||(URL.revokeObjectURL(this.url),this.createTrack(`metadata`,e)),e)).catch(e=>{throw n.innerHTML=``,t.show=e,e})}},dr=class e{constructor(e){this.art=e;let{option:t,constructor:n}=e;t.container instanceof Element?this.$container=t.container:(this.$container=M(t.container),H(this.$container,`No container element found by ${t.container}`)),H(Ce(),`The current browser does not support flex layout`);let r=this.$container.tagName.toLowerCase();H(r===`div`,`Unsupported container element type, only support 'div' but got '${r}'`),H(n.instances.every(e=>e.template.$container!==this.$container),`Cannot mount multiple instances on the same dom element`),this.query=this.query.bind(this),this.$container.dataset.artId=e.id,this.init()}static get html(){return`
          <div class="art-video-player art-subtitle-show art-layer-show art-control-show art-mask-show">
            <video class="art-video">
              <track default kind="metadata" src=""></track>
            </video>
            <div class="art-poster"></div>
            <div class="art-subtitle"></div>
            <div class="art-danmuku"></div>
            <div class="art-layers"></div>
            <div class="art-mask">
              <div class="art-state"></div>
            </div>
            <div class="art-bottom">
              <div class="art-progress"></div>
              <div class="art-controls">
                <div class="art-controls-left"></div>
                <div class="art-controls-center"></div>
                <div class="art-controls-right"></div>
              </div>
            </div>
            <div class="art-loading"></div>
            <div class="art-notice">
              <div class="art-notice-inner"></div>
            </div>
            <div class="art-settings"></div>
            <div class="art-info">
              <div class="art-info-panel">
                <div class="art-info-item">
                  <div class="art-info-title">Player version:</div>
                  <div class="art-info-content">${se}</div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video url:</div>
                  <div class="art-info-content" data-video="currentSrc"></div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video volume:</div>
                  <div class="art-info-content" data-video="volume"></div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video time:</div>
                  <div class="art-info-content" data-video="currentTime"></div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video duration:</div>
                  <div class="art-info-content" data-video="duration"></div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video resolution:</div>
                  <div class="art-info-content">
                    <span data-video="videoWidth"></span> x <span data-video="videoHeight"></span>
                  </div>
                </div>
              </div>
              <div class="art-info-close">[x]</div>
            </div>
            <div class="art-contextmenus"></div>
          </div>
        `}query(e){return M(e,this.$container)}init(){let{option:t}=this.art;if(t.useSSR||(this.$container.innerHTML=e.html),this.$player=this.query(`.art-video-player`),this.$video=this.query(`.art-video`),this.$track=this.query(`track`),this.$poster=this.query(`.art-poster`),this.$subtitle=this.query(`.art-subtitle`),this.$danmuku=this.query(`.art-danmuku`),this.$bottom=this.query(`.art-bottom`),this.$progress=this.query(`.art-progress`),this.$controls=this.query(`.art-controls`),this.$controlsLeft=this.query(`.art-controls-left`),this.$controlsCenter=this.query(`.art-controls-center`),this.$controlsRight=this.query(`.art-controls-right`),this.$layer=this.query(`.art-layers`),this.$loading=this.query(`.art-loading`),this.$notice=this.query(`.art-notice`),this.$noticeInner=this.query(`.art-notice-inner`),this.$mask=this.query(`.art-mask`),this.$state=this.query(`.art-state`),this.$setting=this.query(`.art-settings`),this.$info=this.query(`.art-info`),this.$infoPanel=this.query(`.art-info-panel`),this.$infoClose=this.query(`.art-info-close`),this.$contextmenu=this.query(`.art-contextmenus`),t.proxy){let e=t.proxy.call(this.art,this.art);H(e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement,`Function 'option.proxy' needs to return 'HTMLVideoElement' or 'HTMLCanvasElement'`),be(e,this.$video),e.className=`art-video`,this.$video=e}t.backdrop&&N(this.$player,`art-backdrop`),A&&N(this.$player,`art-mobile`)}destroy(e){e?this.$container.innerHTML=``:N(this.$player,`art-destroy`)}},fr=class{on(e,t,n){let r=this.e||={};return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this}once(e,t,n){let r=this;function i(...a){r.off(e,i),t.apply(n,a)}return i._=t,this.on(e,i,n)}emit(e,...t){let n=((this.e||={})[e]||[]).slice();for(let e=0;e<n.length;e+=1)n[e].fn.apply(n[e].ctx,t);return this}off(e,t){let n=this.e||={},r=n[e],i=[];if(r&&t)for(let e=0,n=r.length;e<n;e+=1)r[e].fn!==t&&r[e].fn._!==t&&i.push(r[e]);return i.length?n[e]=i:delete n[e],this}},pr=0,mr=[],Z=class e extends fr{constructor(t,n){if(super(),!j)throw Error(`Artplayer can only be used in the browser environment`);this.id=++pr;let r=Fe(e.option,t);if(r.container=t.container,this.option=k(r,Je),this.isLock=!1,this.isReady=!1,this.isFocus=!1,this.isInput=!1,this.isRotate=!1,this.isDestroy=!1,this.template=new dr(this),this.events=new Et(this),this.storage=new cr(this),this.icons=new rn(this),this.i18n=new kt(this),this.notice=new ln(this),this.player=new Xn(this),this.layers=new on(this),this.controls=new ht(this),this.contextmenu=new nt(this),this.subtitle=new ur(this),this.info=new an(this),this.loading=new sn(this),this.hotkey=new Dt(this),this.mask=new cn(this),this.setting=new sr(this),this.plugins=new nr(this),typeof n==`function`&&this.on(`ready`,()=>n.call(this,this)),e.DEBUG){let t=e=>console.log(`[ART.${this.id}] -> ${e}`);t(`Version@${e.version}`);for(let e=0;e<ce.events.length;e++)this.on(`video:${ce.events[e]}`,e=>t(`Event@${e.type}`))}mr.push(this)}static get instances(){return mr}static get version(){return se}static get config(){return ce}static get utils(){return Ue}static get scheme(){return Je}static get Emitter(){return fr}static get validator(){return k}static get kindOf(){return k.kindOf}static get html(){return dr.html}static get option(){return{id:``,container:`#artplayer`,url:``,poster:``,type:``,theme:`#f00`,volume:.7,isLive:!1,muted:!1,autoplay:!1,autoSize:!1,autoMini:!1,loop:!1,flip:!1,playbackRate:!1,aspectRatio:!1,screenshot:!1,setting:!1,hotkey:!0,pip:!1,mutex:!0,backdrop:!0,fullscreen:!1,fullscreenWeb:!1,subtitleOffset:!1,miniProgressBar:!1,useSSR:!1,playsInline:!0,lock:!1,gesture:!0,fastForward:!1,autoPlayback:!1,autoOrientation:!1,airplay:!1,proxy:void 0,layers:[],contextmenu:[],controls:[],settings:[],quality:[],highlight:[],plugins:[],thumbnails:{url:``,number:60,column:10,width:0,height:0,scale:1},subtitle:{url:``,type:``,style:{},name:``,escape:!0,encoding:`utf-8`,onVttLoad:e=>e},moreVideoAttr:{controls:!1,preload:ue?`auto`:`metadata`},i18n:{},icons:{},cssVar:{},customType:{},lang:navigator?.language.toLowerCase()}}get proxy(){return this.events.proxy}get query(){return this.template.query}get video(){return this.template.$video}reset(){this.video.removeAttribute(`src`),this.video.load()}destroy(t=!0){e.REMOVE_SRC_WHEN_DESTROY&&this.reset(),this.events.destroy(),this.template.destroy(t),mr.splice(mr.indexOf(this),1),this.isDestroy=!0,this.emit(`destroy`)}};Z.STYLE=lr,Z.DEBUG=!1,Z.CONTEXTMENU=!0,Z.NOTICE_TIME=2e3,Z.SETTING_WIDTH=250,Z.SETTING_ITEM_WIDTH=200,Z.SETTING_ITEM_HEIGHT=35,Z.RESIZE_TIME=200,Z.SCROLL_TIME=200,Z.SCROLL_GAP=50,Z.AUTO_PLAYBACK_MAX=10,Z.AUTO_PLAYBACK_MIN=5,Z.AUTO_PLAYBACK_TIMEOUT=3e3,Z.RECONNECT_TIME_MAX=5,Z.RECONNECT_SLEEP_TIME=1e3,Z.CONTROL_HIDE_TIME=3e3,Z.DBCLICK_TIME=300,Z.DBCLICK_FULLSCREEN=!0,Z.MOBILE_DBCLICK_PLAY=!0,Z.MOBILE_CLICK_PLAY=!1,Z.AUTO_ORIENTATION_TIME=200,Z.INFO_LOOP_TIME=1e3,Z.FAST_FORWARD_VALUE=3,Z.FAST_FORWARD_TIME=1e3,Z.TOUCH_MOVE_RATIO=.5,Z.VOLUME_STEP=.1,Z.SEEK_STEP=5,Z.PLAYBACK_RATE=[.5,.75,1,1.25,1.5,2],Z.ASPECT_RATIO=[`default`,`4:3`,`16:9`],Z.FLIP=[`normal`,`horizontal`,`vertical`],Z.FULLSCREEN_WEB_IN_BODY=!0,Z.LOG_VERSION=!0,Z.USE_RAF=!1,Z.REMOVE_SRC_WHEN_DESTROY=!0,j&&(Se(`artplayer-style`,lr),setTimeout(()=>{Z.LOG_VERSION&&console.log(`%c ArtPlayer %c ${Z.version} %c https://artplayer.org`,`color: #fff; background: #5f5f5f`,`color: #fff; background: #4bc729`,``)},100));var hr=.06,gr=16,_r=56;function vr(e,t){return!br(e)||!br(t)?null:t>e?`portrait`:`landscape`}function yr(e,t,n,r){if(!br(e)||!br(t)||!br(n)||!br(r))return null;let i=r*Math.min(e/n,t/r);return Math.max(0,(t-i)/2)+xr(i*hr,gr,_r)}function br(e){return Number.isFinite(e)&&e>0}function xr(e,t,n){return Math.min(n,Math.max(t,e))}function Sr(e,t){let n=e.clientX-t.left,r=e.clientY-t.top;return t.rotated?{x:r,y:t.width-n,width:t.height,height:t.width}:{x:n,y:r,width:t.width,height:t.height}}function Cr(e,t){if(!Number.isFinite(t))return null;let n=Math.round(Math.min(1,Math.max(0,t))*100)/100;try{e.volume=n;let t=e.volume;return!Number.isFinite(t)||Math.abs(t-n)>.005?null:(e.muted=t<=0,t)}catch{return null}}function wr(e){e.get(`volume`)!==void 0&&e.del(`volume`);let t=e.set.bind(e);e.set=(e,n)=>{e!==`volume`&&t(e,n)}}function Tr(e){if(!s())return()=>{};let t,n;function r(){e.fullscreenWeb&&!t?t=l.register(()=>{if(!e.fullscreenWeb)return!1;e.fullscreenWeb=!1},`fullscreen`):!e.fullscreenWeb&&t&&(t(),t=void 0)}function i(){e.setting.show&&!n?n=l.register(()=>{if(!e.setting.show)return!1;e.setting.show=!1},`menu`):!e.setting.show&&n&&(n(),n=void 0)}return e.on(`fullscreenWeb`,r),e.on(`setting`,i),r(),i(),()=>{e.off(`fullscreenWeb`,r),e.off(`setting`,i),t?.(),n?.()}}var Er=20,Dr=8,Or=14,kr=[`vtt`,`srt`,`ass`,`ssa`];function Ar(e,t){return Pr(Fr(e),Ir(e),Rr(e),t)}function jr(e,t){return Pr(Ur(Fr(e),Dr),Hr(Ir(e),Er),Rr(e),t)}function Mr(e,t){return Ur(jr(e,t),Or)}function Nr(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function Pr(e,t,n,r){let i=[e,t,n].filter(Boolean);return i.length>0?i.join(` · `):typeof r==`number`?`字幕 ${r+1}`:`在线字幕`}function Fr(e){return zr(e.language??``)}function Ir(e){let t=zr(e.name??``)||Lr(e),n=t.lastIndexOf(`.`);if(n<=0)return t;let r=t.slice(n+1).toLowerCase();return kr.includes(r)?t.slice(0,n):t}function Lr(e){let t=zr(e.label??``);if(!t)return``;let n=t.split(` · `).filter(Boolean);if(n.length<=1)return t;let r=Fr(e),i=Rr(e);return n.filter(e=>e!==r&&e.toUpperCase()!==i).join(` · `)||t}function Rr(e){return zr(e.ext??e.type??``).replace(/^\./,``).toUpperCase()}function zr(e){return e.replace(/\s+/g,` `).trim()}function Br(e){let t=0;for(let n of e)t+=Vr(n);return t}function Vr(e){let t=e.codePointAt(0)??0;return t>=4352&&t<=4447||t>=11904&&t<=42191||t>=44032&&t<=55203||t>=63744&&t<=64255||t>=65072&&t<=65135||t>=65280&&t<=65376||t>=65504&&t<=65510||t>=127744?2:1}function Hr(e,t){if(Br(e)<=t)return e;let n=Math.max(0,t-1),r=Wr(e,Math.ceil(n/2));return`${r}…${Gr(e,n-Br(r))}`}function Ur(e,t){return Br(e)<=t?e:`${Wr(e,Math.max(0,t-1))}…`}function Wr(e,t){let n=0,r=``;for(let i of e){let e=n+Vr(i);if(e>t)break;r+=i,n=e}return r}function Gr(e,t){let n=Array.from(e),r=0,i=``;for(let e=n.length-1;e>=0;--e){let a=r+Vr(n[e]);if(a>t)break;i=n[e]+i,r=a}return i}var Kr=3,qr=2;function Jr(e,t){return Number.isFinite(e)&&Number.isFinite(t)&&e>0&&t>e}function Yr(e,t,n,r){if(!ei(e)||!ei(t)||!Jr(n,r))return null;let i=n*Kr,a=Math.min(e/i,t/r),o=i*a,s=r*a;return{x:(e-o)/2,y:(t-s)/2,width:o,height:s}}function Xr(e,t,n){if(!ei(e)||!ei(t))return null;let r=ti(ei(n)?n:1,1,qr);return{width:Math.max(1,Math.round(e*r)),height:Math.max(1,Math.round(t*r))}}var Zr=class{container;video;canvas;onVisibilityChange;onError;gl=null;program=null;texture=null;positionBuffer=null;textureBuffer=null;indexBuffer=null;positionLocation=-1;textureLocation=-1;samplerLocation=null;maxTextureSize=0;enabledValue=!1;visible=!1;destroyed=!1;frameCallbackID=null;animationFrameID=null;resizeObserver=null;constructor({container:e,video:t,canvas:n,onVisibilityChange:r,onError:i}){this.container=e,this.video=t,this.canvas=n,this.onVisibilityChange=r,this.onError=i,this.canvas.hidden=!0,this.video.addEventListener(`playing`,this.handlePlaying),this.video.addEventListener(`loadeddata`,this.handleFrameAvailable),this.video.addEventListener(`seeked`,this.handleFrameAvailable),this.video.addEventListener(`emptied`,this.handleVideoEmptied),this.canvas.addEventListener(`webglcontextlost`,this.handleContextLost),this.canvas.addEventListener(`webglcontextrestored`,this.handleContextRestored),typeof ResizeObserver<`u`&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.container)),window.addEventListener(`resize`,this.handleResize)}get enabled(){return this.enabledValue}enable(){return this.destroyed||!Jr(this.video.videoWidth,this.video.videoHeight)||!this.ensureResources()||(this.enabledValue=!0,this.resizeCanvas(),this.video.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA&&!this.drawFrame())?!1:(this.scheduleFrame(),this.enabledValue)}disable(){this.enabledValue=!1,this.cancelFrame(),this.setVisible(!1)}resize(){this.enabledValue&&(this.resizeCanvas(),this.video.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA&&this.drawFrame())}destroy(){this.destroyed||(this.destroyed=!0,this.disable(),this.video.removeEventListener(`playing`,this.handlePlaying),this.video.removeEventListener(`loadeddata`,this.handleFrameAvailable),this.video.removeEventListener(`seeked`,this.handleFrameAvailable),this.video.removeEventListener(`emptied`,this.handleVideoEmptied),this.canvas.removeEventListener(`webglcontextlost`,this.handleContextLost),this.canvas.removeEventListener(`webglcontextrestored`,this.handleContextRestored),this.resizeObserver?.disconnect(),window.removeEventListener(`resize`,this.handleResize),this.releaseResources(!0),this.canvas.remove())}handlePlaying=()=>{this.scheduleFrame()};handleFrameAvailable=()=>{this.enabledValue&&(this.resizeCanvas(),this.video.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA&&this.drawFrame(),this.scheduleFrame())};handleVideoEmptied=()=>{this.disable()};handleResize=()=>{this.resize()};handleContextLost=e=>{e.preventDefault();let t=this.enabledValue;this.enabledValue=!1,this.cancelFrame(),this.setVisible(!1),this.releaseResources(!1),t&&this.onError?.(Error(`WebGL context lost`))};handleContextRestored=()=>{this.releaseResources(!1)};ensureResources(){if(this.gl&&this.program&&this.texture&&this.positionBuffer&&this.textureBuffer&&this.indexBuffer)return!0;let e=null,t=null,n=null;try{if(e=this.canvas.getContext(`webgl`,{alpha:!1,antialias:!1,preserveDrawingBuffer:!0,powerPreference:`high-performance`})||this.canvas.getContext(`experimental-webgl`,{alpha:!1,antialias:!1,preserveDrawingBuffer:!0,powerPreference:`high-performance`}),!e)throw Error(`WebGL unavailable`);this.gl=e,t=Qr(e,e.VERTEX_SHADER,`
          attribute vec2 aPosition;
          attribute vec2 aTexCoord;
          varying vec2 vTexCoord;
          void main() {
            gl_Position = vec4(aPosition, 0.0, 1.0);
            vTexCoord = aTexCoord;
          }
        `),n=Qr(e,e.FRAGMENT_SHADER,`
          precision mediump float;
          varying vec2 vTexCoord;
          uniform sampler2D uSampler;
          void main() {
            gl_FragColor = texture2D(uSampler, vTexCoord);
          }
        `);let r=$r(e,t,n);this.program=r;let i=e.createBuffer();if(!i)throw Error(`WebGL resource allocation failed`);this.positionBuffer=i;let a=e.createBuffer();if(!a)throw Error(`WebGL resource allocation failed`);this.textureBuffer=a;let o=e.createBuffer();if(!o)throw Error(`WebGL resource allocation failed`);this.indexBuffer=o;let s=e.createTexture();if(!s)throw Error(`WebGL resource allocation failed`);this.texture=s;let c=new Float32Array([-1,-1,-1/3,-1,-1,1,-1/3,1,-1/3,-1,1/3,-1,-1/3,1,1/3,1,1/3,-1,1,-1,1/3,1,1,1]),l=new Float32Array([0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0]),u=new Uint16Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11]);e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,c,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,l,e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,o),e.bufferData(e.ELEMENT_ARRAY_BUFFER,u,e.STATIC_DRAW),e.bindTexture(e.TEXTURE_2D,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR);let d=e.getAttribLocation(r,`aPosition`),f=e.getAttribLocation(r,`aTexCoord`),p=e.getUniformLocation(r,`uSampler`);if(d<0||f<0||p===null)throw Error(`WebGL shader bindings unavailable`);if(this.positionLocation=d,this.textureLocation=f,this.samplerLocation=p,this.maxTextureSize=Number(e.getParameter(e.MAX_TEXTURE_SIZE)),!ei(this.maxTextureSize))throw Error(`WebGL texture size limit unavailable`);if(e.getError()!==e.NO_ERROR)throw Error(`WebGL resource initialization failed`);return!0}catch(e){return this.releaseResources(!0),this.reportFailure(e),!1}finally{e&&!e.isContextLost()&&(t&&e.deleteShader(t),n&&e.deleteShader(n))}}resizeCanvas(){let e=Xr(this.container.clientWidth,this.container.clientHeight,window.devicePixelRatio);e&&(this.canvas.width!==e.width&&(this.canvas.width=e.width),this.canvas.height!==e.height&&(this.canvas.height=e.height))}drawFrame(){if(!this.enabledValue||!this.gl||!this.program||!this.texture||!this.positionBuffer||!this.textureBuffer||!this.indexBuffer||this.samplerLocation===null)return!1;let e=this.gl,t=Yr(this.canvas.width,this.canvas.height,this.video.videoWidth,this.video.videoHeight);if(!t)return!1;try{if(this.video.videoWidth>this.maxTextureSize||this.video.videoHeight>this.maxTextureSize)throw Error(`Video exceeds the WebGL texture size limit`);return e.viewport(0,0,this.canvas.width,this.canvas.height),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.viewport(Math.round(t.x),Math.round(t.y),Math.max(1,Math.round(t.width)),Math.max(1,Math.round(t.height))),e.useProgram(this.program),e.bindBuffer(e.ARRAY_BUFFER,this.positionBuffer),e.vertexAttribPointer(this.positionLocation,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(this.positionLocation),e.bindBuffer(e.ARRAY_BUFFER,this.textureBuffer),e.vertexAttribPointer(this.textureLocation,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(this.textureLocation),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this.video),e.uniform1i(this.samplerLocation,0),e.drawElements(e.TRIANGLES,18,e.UNSIGNED_SHORT,0),this.setVisible(!0),!0}catch(e){return this.reportFailure(e),!1}}scheduleFrame(){if(this.enabledValue&&!this.destroyed){if(typeof this.video.requestVideoFrameCallback==`function`){if(this.frameCallbackID!==null)return;this.frameCallbackID=this.video.requestVideoFrameCallback(()=>{this.frameCallbackID=null,this.enabledValue&&this.drawFrame()&&this.scheduleFrame()})}else this.video.paused||this.animationFrameID!==null||(this.animationFrameID=window.requestAnimationFrame(()=>{this.animationFrameID=null,this.enabledValue&&this.drawFrame()&&this.scheduleFrame()}))}}cancelFrame(){this.frameCallbackID!==null&&typeof this.video.cancelVideoFrameCallback==`function`&&this.video.cancelVideoFrameCallback(this.frameCallbackID),this.frameCallbackID=null,this.animationFrameID!==null&&window.cancelAnimationFrame(this.animationFrameID),this.animationFrameID=null}setVisible(e){this.visible!==e&&(this.visible=e,this.canvas.hidden=!e,this.onVisibilityChange?.(e))}reportFailure(e){this.enabledValue=!1,this.cancelFrame(),this.setVisible(!1),this.onError?.(e instanceof Error?e:Error(`Triple-screen rendering failed`))}releaseResources(e){let t=this.gl;e&&t&&!t.isContextLost()&&(this.texture&&t.deleteTexture(this.texture),this.positionBuffer&&t.deleteBuffer(this.positionBuffer),this.textureBuffer&&t.deleteBuffer(this.textureBuffer),this.indexBuffer&&t.deleteBuffer(this.indexBuffer),this.program&&t.deleteProgram(this.program)),this.gl=null,this.program=null,this.texture=null,this.positionBuffer=null,this.textureBuffer=null,this.indexBuffer=null,this.positionLocation=-1,this.textureLocation=-1,this.samplerLocation=null,this.maxTextureSize=0}};function Qr(e,t,n){let r=e.createShader(t);if(!r)throw Error(`WebGL shader allocation failed`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)||`WebGL shader compilation failed`;throw e.deleteShader(r),Error(t)}return r}function $r(e,t,n){let r=e.createProgram();if(!r)throw Error(`WebGL program allocation failed`);if(e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){let t=e.getProgramInfoLog(r)||`WebGL program linking failed`;throw e.deleteProgram(r),Error(t)}return r}function ei(e){return Number.isFinite(e)&&e>0}function ti(e,t,n){return Math.min(n,Math.max(t,e))}var ni=400,ri=2,ii=1,ai=2,oi=2e3,si=15,ci=1500;Z.FAST_FORWARD_VALUE=ri,Z.RECONNECT_TIME_MAX=ai,Z.CONTROL_HIDE_TIME=oi;var Q={volume:1,muted:!1,playbackRate:1,brightness:1,loop:!0},li={width:Z.SETTING_WIDTH,itemWidth:Z.SETTING_ITEM_WIDTH,itemHeight:Z.SETTING_ITEM_HEIGHT},ui={width:172,itemWidth:148,itemHeight:30},di=`orientationToggle`,fi=`video-player__art`,pi=`tripleScreen`,mi=`tripleScreenRelay`,hi=`art-manual-orientation`,gi=`art-triple-screen-active`,_i=`art-fast-rate-active`,vi=`video-player__art-rate-hint`,yi=`video-player__art-gesture-hud`,bi=`video-player__art-gesture-hud-icon`,xi=`video-player__art-gesture-hud-value`,Si=`--video-player-subtitle-bottom`,Ci=`videoPlayerSubtitleOrientation`,wi=`input,textarea,select,button,a[href],[contenteditable]:not([contenteditable='false']),[role='button'],[role='textbox'],[role='combobox'],[role='slider'],[role='menuitem'],[role='option'],[role='dialog']`,Ti=`dialog[open], [role="dialog"][aria-modal="true"]`,Ei=`no-referrer`,Di=`ios-pikpak-mp4-source`,Oi=`source[data-video-player-typed-source="mp4"]`,ki=.45,Ai=1.35,ji=12,Mi=1.2,Ni=1.15,Pi=new WeakMap,Fi=new WeakMap,Ii=new WeakMap;function Li({src:e,playbackUrl:t,preferTypedMp4SourceOnIOS:n=!1,poster:r,previewSrc:i,loadSubtitles:a,title:o,onFirstPlay:s}){let c=(0,w.useRef)(null),l=(0,w.useRef)(null),u=(0,w.useRef)(null),d=(0,w.useRef)(s),f=(0,w.useRef)(a),p=(0,w.useRef)(!1),[m,h]=(0,w.useState)(0),[_,v]=(0,w.useState)(null),[ee,y]=(0,w.useState)(null),[b,x]=(0,w.useState)(null),S=(0,w.useRef)(null);(0,w.useEffect)(()=>{d.current=s},[s]),(0,w.useEffect)(()=>{f.current=a},[a]),(0,w.useEffect)(()=>{let i=c.current;if(i)return p.current=!1,v(null),x(null),zi({mount:i,src:e,playbackUrl:t,refreshSource:m>0,preferTypedMp4SourceOnIOS:n,poster:r,title:o,loadSubtitlesRef:f,artRef:l,playedRef:p,onFirstPlayRef:d,onFastChange:_a,onError:v,onPreviewHover:x,onGestureHud:C})},[r,n,m,e,t,o]),(0,w.useEffect)(()=>()=>{S.current!==null&&window.clearTimeout(S.current)},[]),(0,w.useEffect)(()=>{i&&b&&ro(u.current,b.ratio)},[b,i]);function C(e,t=700){S.current!==null&&window.clearTimeout(S.current),y({key:Date.now(),label:e}),S.current=window.setTimeout(()=>{y(null),S.current=null},t)}function te(){v(null),h(e=>e+1)}async function E(){let t=new URL(l.current&&g(l.current.video)||e,window.location.href).href;try{await navigator.clipboard.writeText(t),C(`播放地址已复制`,900)}catch{io(t),C(`播放地址已复制`,900)}}let ne=b?{left:`${b.x}px`}:void 0;return(0,T.jsxs)(`div`,{className:`video-player`,children:[(0,T.jsx)(`div`,{ref:c,className:`video-player__mount`}),_&&(0,T.jsxs)(`div`,{className:`video-player__error`,role:`alert`,children:[(0,T.jsx)(`div`,{className:`video-player__error-title`,children:_.title}),(0,T.jsx)(`div`,{className:`video-player__error-message`,children:_.message}),(0,T.jsxs)(`div`,{className:`video-player__error-actions`,children:[(0,T.jsx)(`button`,{type:`button`,onClick:te,children:`重试`}),(0,T.jsx)(`button`,{type:`button`,onClick:E,children:`复制地址`})]})]}),i&&b&&(0,T.jsxs)(`div`,{className:`video-player__seek-preview`,style:ne,"aria-hidden":`true`,children:[(0,T.jsx)(`video`,{ref:u,src:i,poster:r,muted:!0,playsInline:!0,preload:`metadata`,onLoadedMetadata:()=>ro(u.current,b.ratio)}),(0,T.jsx)(`span`,{children:ao(b.time)})]}),ee&&(0,T.jsx)(`div`,{className:`video-player__gesture-hud`,"aria-hidden":`true`,children:ee.label},ee.key)]})}function Ri(e){let t=e.toLowerCase();if(t.split(`#`)[0].split(`?`)[0].endsWith(`.m3u8`)||t.includes(`.m3u8`))return`m3u8`}function zi({mount:e,src:t,playbackUrl:n,refreshSource:r,preferTypedMp4SourceOnIOS:i,poster:a,loadSubtitlesRef:o,title:s,artRef:c,playedRef:l,onFirstPlayRef:u,onFastChange:d,onError:f,onPreviewHover:g,onGestureHud:ee}){let y=i&&Xi(),b=n?`resolved-source`:y?Di:Ri(t),x={status:`idle`,subtitles:[]},S=Qa(),C=Gi(),w=Ki(),te=qi(C),T=!1,E=!1,ne=null,re=null,ie=null;$i(Qi(e,C));let ae={id:`91-detail-player`,container:e,url:``,poster:a,theme:`var(--video-player-progress)`,lang:`zh-cn`,volume:Q.volume,muted:Q.muted,autoplay:!1,autoSize:!1,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!1,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:te,miniProgressBar:!0,backdrop:!1,playsInline:!0,lock:!0,gesture:!1,fastForward:!1,airplay:!0,customType:{"resolved-source":e=>{_(e,t,n,{refresh:r,loadNative:y?t=>Bi(e,t,D):void 0})},hls:S,m3u8:S,[Di]:Bi},moreVideoAttr:{preload:`metadata`,playsInline:!0},settings:aa(x,k),controls:va(C,w),contextmenu:[],cssVar:{"--art-theme":`var(--video-player-progress)`}};b&&(ae.type=b);let D=new Z(ae);c.current=D,D.template.$player.classList.add(fi);let O=D.video;wr(D.storage),O.volume=Q.volume,O.muted=Q.muted,O.setAttribute(`referrerpolicy`,Ei),O.setAttribute(`aria-label`,s),O.setAttribute(`controlsList`,`nodownload`),O.setAttribute(`webkit-playsinline`,`true`),O.disablePictureInPicture=!1,O.loop=Q.loop,O.playbackRate=Q.playbackRate;let oe=qa(D);async function k(){if(x.status===`loading`||x.status===`loaded`||x.status===`empty`)return;let e=o.current;if(!e)x.status=`empty`,oa(D,x,k);else{x.status=`loading`,sa(D,`加载中`),D.notice.show=`正在加载字幕`;try{let t=ra(await e());if(T)return;x.subtitles=t,x.status=t.length>0?`loaded`:`empty`,oa(D,x,k),D.notice.show=t.length>0?`已加载 ${t.length} 条字幕`:`暂无可用字幕`}catch{if(T)return;x.status=`error`,oa(D,x,k),D.notice.show=`字幕加载失败，点击字幕重试`}}}function se(e){e.preventDefault()}function ce(){l.current||(l.current=!0,u.current?.()),E=!1,A(),f(null)}function le(){E=!1,f(null)}function ue(){E=!1,A(),f(null)}function de(){if(n)return;E=!0;let e=no(O.error);f({title:`视频源加载失败`,message:ie||e}),!re&&(ne=new AbortController,re=h(t,{signal:ne.signal}),re.then(e=>{ie=e,!T&&E&&e&&f({title:`视频源加载失败`,message:e})}))}function fe(){let e=p(O);e&&f({title:`视频源暂不可用`,message:e})}function A(){ne?.abort(),ne=null,re=null,ie=null}function j(){pa(D,!1),d(!1)}let M=e=>{pa(D,e),d(e)},pe=$a(O,M),N=eo(D,O,M,ee),P=to(D,O,e,g),F=Ui(D),I=Tr(D),me=fa(D),L=Hi(D,O),he=w?ba(D,O,t):_a,ge=C?Oa(D):_a;return e.addEventListener(`contextmenu`,se),D.on(`video:loadstart`,le),O.addEventListener(v,fe),D.on(`video:loadeddata`,ue),D.on(`video:canplay`,ue),D.on(`video:playing`,ue),D.on(`video:error`,de),D.on(`error`,de),D.on(`video:play`,ce),D.on(`video:pause`,j),D.on(`video:ended`,j),y&&!n?(D.option.url=t,Bi(O,t,D)):D.url=t,()=>{T=!0,O.removeEventListener(v,fe),m(O),A(),D.fullscreenWeb&&=!1,oe(),pe(),N(),P(),F(),I(),me(),L(),he(),ge(),pa(D,!1),e.removeEventListener(`contextmenu`,se),y&&Vi(O),D.off(`video:loadstart`,le),D.off(`video:loadeddata`,ue),D.off(`video:canplay`,ue),D.off(`video:playing`,ue),D.off(`video:error`,de),D.off(`error`,de),D.off(`video:play`,ce),D.off(`video:pause`,j),D.off(`video:ended`,j),D.destroy(!0),c.current===D&&(c.current=null),g(null)}}function Bi(e,t,n){if(n.isDestroy||!e.isConnected)return;e.removeAttribute(`src`),Vi(e);let r=document.createElement(`source`);r.src=t,r.type=`video/mp4`,r.dataset.videoPlayerTypedSource=`mp4`,r.addEventListener(`error`,t=>{!n.isDestroy&&r.isConnected&&(n.emit(`video:error`,t),e.dispatchEvent(new Event(`error`)))},{once:!0}),e.insertBefore(r,e.firstChild),e.load()}function Vi(e){e.querySelectorAll(Oi).forEach(e=>e.remove())}function Hi(e,t){let n=e.template.$player,r=!0,i=null;function a(){if(i=null,!r)return;let e=vr(n.clientWidth,n.clientHeight);e===null?delete n.dataset[Ci]:n.dataset[Ci]=e;let a=yr(n.clientWidth,n.clientHeight,t.videoWidth,t.videoHeight);a===null?n.style.removeProperty(Si):n.style.setProperty(Si,`${a.toFixed(2)}px`)}function o(){r&&(i!==null&&window.cancelAnimationFrame(i),i=window.requestAnimationFrame(a))}let s=typeof ResizeObserver>`u`?null:new ResizeObserver(o);return s?.observe(n),e.on(`video:loadedmetadata`,o),e.on(`resize`,o),e.on(`fullscreen`,o),e.on(`fullscreenWeb`,o),e.on(`aspectRatio`,o),o(),()=>{r=!1,i!==null&&window.cancelAnimationFrame(i),s?.disconnect(),e.off(`video:loadedmetadata`,o),e.off(`resize`,o),e.off(`fullscreen`,o),e.off(`fullscreenWeb`,o),e.off(`aspectRatio`,o),n.style.removeProperty(Si),delete n.dataset[Ci]}}function Ui(e){let t=null,n=null,r=new Set;function i(){n!==null&&(window.clearTimeout(n),n=null)}function a(){i(),n=window.setTimeout(()=>{n=null,c()},ci)}function o(n){let r=e.duration;t===null||!Number.isFinite(r)||r<=0||(t=$(t,0,r),e.emit(`setBar`,`played`,t/r),n&&(e.notice.show=`${ao(t)} / ${ao(r)}`))}function s(n,i){let s=e.duration;!Number.isFinite(s)||s<=0||(r.add(i),t=$((t??e.currentTime)+n,0,s),o(!0),a())}function c(){if(t===null)return;i();let n=e.duration,a=Number.isFinite(n)&&n>0?$(t,0,n):t;t=null,r.clear(),e.seek=a,Number.isFinite(n)&&n>0&&e.emit(`setBar`,`played`,a/n)}let l=()=>{c(),e.fullscreenWeb&&=!1},u=t=>{t.repeat||(c(),e.toggle())},d=()=>{c(),e.volume+=Z.VOLUME_STEP},f=()=>{c(),e.volume-=Z.VOLUME_STEP},p=()=>{s(-15,`ArrowLeft`)},m=()=>{s(si,`ArrowRight`)};function h(e){e.code!==`Space`&&e.key!==` `||Wi(e)||(e.preventDefault(),u(e))}function g(e){(e.code===`ArrowLeft`||e.code===`ArrowRight`)&&t!==null&&(e.preventDefault(),r.delete(e.code),r.size===0&&c())}function _(){t!==null&&o(!1)}function v(){document.hidden&&c()}return e.hotkey.add(`Escape`,l),e.hotkey.add(`ArrowUp`,d),e.hotkey.add(`ArrowDown`,f),e.hotkey.add(`ArrowLeft`,p),e.hotkey.add(`ArrowRight`,m),e.on(`video:timeupdate`,_),e.on(`blur`,c),document.addEventListener(`keydown`,h),document.addEventListener(`keyup`,g),document.addEventListener(`visibilitychange`,v),window.addEventListener(`blur`,c),()=>{i(),t=null,r.clear(),e.hotkey.remove(`Escape`,l),e.hotkey.remove(`ArrowUp`,d),e.hotkey.remove(`ArrowDown`,f),e.hotkey.remove(`ArrowLeft`,p),e.hotkey.remove(`ArrowRight`,m),e.off(`video:timeupdate`,_),e.off(`blur`,c),document.removeEventListener(`keydown`,h),document.removeEventListener(`keyup`,g),document.removeEventListener(`visibilitychange`,v),window.removeEventListener(`blur`,c)}}function Wi(e){return e.defaultPrevented||e.isComposing||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||document.querySelector(Ti)?!0:[e.target,document.activeElement].some(e=>e instanceof Element&&e.closest(wi)!==null)}function Gi(){return Ji()&&!Yi()}function Ki(){return!Ji()}function qi(e){return!e&&!Zi()}function Ji(){return window.matchMedia?.(`(hover: none) and (pointer: coarse)`).matches?!0:/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)}function Yi(){return/iPhone|iPod/i.test(navigator.userAgent)}function Xi(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)||/Macintosh/i.test(navigator.userAgent)&&navigator.maxTouchPoints>1}function Zi(){return/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)}function Qi(e,t){let n=window.matchMedia?.(`(max-width: 640px)`).matches??window.innerWidth<=640;return t||n||e.clientWidth<=640}function $i(e){let t=e?ui:li;Z.SETTING_WIDTH=t.width,Z.SETTING_ITEM_WIDTH=t.itemWidth,Z.SETTING_ITEM_HEIGHT=t.itemHeight}function ea(){return Ji()}function ta(){return{name:`mind-loop`,html:`洗脑循环`,tooltip:Q.loop?`开`:`关`,switch:Q.loop,onSwitch(e){let t=!e.switch;return this.video.loop=t,e.tooltip=t?`开`:`关`,t}}}var na=240;function ra(e){return e.filter(e=>!!e.url&&(e.type===`vtt`||e.type===`srt`||e.type===`ass`))}function ia(e){return{url:e.url,name:Ar(e),type:e.type,encoding:`utf-8`,escape:!0}}function aa(e,t){return[ta(),ca(e,t)]}function oa(e,t,n){let r=e.setting.show,i=e.setting;if(i.update(ca(t,n)),!r)return;let a=i.find(`online-subtitle`);a?.selector?.length&&i.render(a.selector),i.show=!0}function sa(e,t){let n=e.setting.find(`online-subtitle`);n&&(n.tooltip=t,n.$tooltip&&(n.$tooltip.textContent=t))}function ca(e,t){let n=e.subtitles;return{name:`online-subtitle`,html:`字幕`,tooltip:e.status===`empty`?`无字幕`:e.status===`error`?`加载失败`:e.status===`loading`?`加载中`:e.status===`idle`?``:`关闭`,width:na,selector:[{name:`online-subtitle-option-off`,html:`关闭`,value:`off`,default:!0},...n.map((e,t)=>({name:`online-subtitle-option-${t}`,html:la(e,t),value:String(t),default:!1}))],mounted(n){n.addEventListener(`click`,()=>{(e.status===`idle`||e.status===`error`)&&t()})},onSelect(e){let t=String(e.value??``);if(t===`off`)return ua(this,!1),`关闭`;let r=Number(t),i=n[r];return i?(ua(this,!0),this.subtitle.switch(i.url,ia(i)),Nr(Mr(i,r))):Nr(this.option.subtitle?.name||`字幕`)}}}function la(e,t){let n=Nr(jr(e,t));return`<span class="video-player__subtitle-option" title="${Nr(Ar(e,t))}">${n}</span>`}function ua(e,t){e.subtitle.show=t}function da(e){return!!(e.fullscreen||e.fullscreenWeb||Na())}function fa(e){if(!Ji())return _a;let t=null;function n(){t!==null&&(window.clearTimeout(t),t=null)}function r(){return e.setting.show||e.isInput||e.template.$player.classList.contains(_i)}function i(){t=null,da(e)&&e.playing&&e.controls.show&&(r()?a():e.controls.show=!1)}function a(){n(),da(e)&&e.playing&&e.controls.show&&(t=window.setTimeout(i,Z.CONTROL_HIDE_TIME))}function o(){da(e)?a():n()}function s(e){e?a():n()}function c(e){e?n():a()}function l(t){let n=t.target;n instanceof Node&&e.template.$player.contains(n)&&a()}return e.on(`fullscreen`,o),e.on(`fullscreenWeb`,o),e.on(`video:playing`,a),e.on(`video:pause`,n),e.on(`video:ended`,n),e.on(`control`,s),e.on(`setting`,c),e.on(`document:pointerup`,l),e.on(`document:touchend`,l),()=>{n(),e.off(`fullscreen`,o),e.off(`fullscreenWeb`,o),e.off(`video:playing`,a),e.off(`video:pause`,n),e.off(`video:ended`,n),e.off(`control`,s),e.off(`setting`,c),e.off(`document:pointerup`,l),e.off(`document:touchend`,l)}}function pa(e,t){let n=e.template.$player;n.classList.toggle(_i,t);let r=n.querySelector(`.${vi}`);t?r||(r=document.createElement(`div`),r.className=vi,r.setAttribute(`aria-hidden`,`true`),r.textContent=`${ri}x`,n.appendChild(r)):r?.remove()}function ma(e,t,n,r=680){let i=e.template.$player,a=Pi.get(i);a!==void 0&&window.clearTimeout(a);let o=i.querySelector(`.${yi}`);o||(o=document.createElement(`div`),o.setAttribute(`aria-hidden`,`true`),i.appendChild(o)),o.className=[yi,`${yi}--${t}`,t===`volume`&&n===`0%`?`${yi}--muted`:``].filter(Boolean).join(` `),o.replaceChildren();let s=document.createElement(`span`);s.className=bi,s.innerHTML=ga(t,n);let c=document.createElement(`span`);c.className=xi,c.textContent=n,o.append(s,c);let l=window.setTimeout(()=>{o?.remove(),Pi.delete(i)},r);Pi.set(i,l)}function ha(e){let t=e.template.$player,n=Pi.get(t);n!==void 0&&(window.clearTimeout(n),Pi.delete(t)),t.querySelector(`.${yi}`)?.remove()}function ga(e,t){return e===`brightness`?`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <!--! Font Awesome Pro 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2026 Fonticons, Inc. -->
        <path opacity=".4" fill="currentColor" d="M64 320C64 337.7 78.3 352 96 352L144 352C161.7 352 176 337.7 176 320C176 302.3 161.7 288 144 288L96 288C78.3 288 64 302.3 64 320zM137.4 137.4C124.9 149.9 124.9 170.2 137.4 182.7L169.4 214.7C181.9 227.2 202.2 227.2 214.7 214.7C227.2 202.2 227.2 181.9 214.7 169.4L182.7 137.4C170.2 124.9 149.9 124.9 137.4 137.4zM137.4 457.4C124.9 469.9 124.9 490.2 137.4 502.7C149.9 515.2 170.2 515.2 182.7 502.7L214.7 470.7C227.2 458.2 227.2 437.9 214.7 425.4C202.2 412.9 181.9 412.9 169.4 425.4L137.4 457.4zM288 96L288 144C288 161.7 302.3 176 320 176C337.7 176 352 161.7 352 144L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96zM288 496L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 496C352 478.3 337.7 464 320 464C302.3 464 288 478.3 288 496zM425.4 169.4C412.9 181.9 412.9 202.2 425.4 214.7C437.9 227.2 458.2 227.2 470.7 214.7L502.7 182.7C515.2 170.2 515.2 149.9 502.7 137.4C490.2 124.9 469.9 124.9 457.4 137.4L425.4 169.4zM425.4 425.4C412.9 437.9 412.9 458.2 425.4 470.7L457.4 502.7C469.9 515.2 490.2 515.2 502.7 502.7C515.2 490.2 515.2 469.9 502.7 457.4L470.7 425.4C458.2 412.9 437.9 412.9 425.4 425.4zM464 320C464 337.7 478.3 352 496 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L496 288C478.3 288 464 302.3 464 320z"/>
        <path fill="currentColor" d="M224 320C224 267 267 224 320 224C373 224 416 267 416 320C416 373 373 416 320 416C267 416 224 373 224 320z"/>
      </svg>
    `:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <!--! Font Awesome Pro 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2026 Fonticons, Inc. -->
      <path opacity=".4" fill="currentColor" d="M64 272L64 368C64 394.5 85.5 416 112 416L160 416L294.1 535.2C300.5 540.9 308.7 544 317.2 544C336.4 544 352 528.4 352 509.2L352 130.8C352 111.6 336.4 96 317.2 96C308.7 96 300.5 99.1 294.1 104.8L160 224L112 224C85.5 224 64 245.5 64 272z"/>
      ${t===`0%`?`<path d="M432 264L544 376M544 264L432 376" fill="none" stroke="currentColor" stroke-width="48" stroke-linecap="round"/>`:`<path fill="currentColor" d="M471.3 174.5C479.7 164.2 494.8 162.7 505.1 171C548.3 206.2 576 259.9 576 320C576 380.1 548.3 433.8 505.1 469C494.8 477.4 479.7 475.8 471.3 465.5C462.9 455.2 464.5 440.1 474.8 431.7C507.3 405.3 528 365.1 528 320C528 274.9 507.3 234.7 474.8 208.2C464.5 199.8 463 184.7 471.3 174.4zM410.8 249C419.2 238.7 434.3 237.2 444.6 245.5C466.2 263.1 480 289.9 480 320C480 350.1 466.1 376.9 444.6 394.5C434.3 402.9 419.2 401.3 410.8 391C402.4 380.7 404 365.6 414.3 357.2C425.1 348.4 432 335 432 320C432 305 425.1 291.6 414.3 282.7C404 274.3 402.5 259.2 410.8 248.9z"/>`}
    </svg>
  `}function _a(){}function va(e,t){let n=[];return t&&n.push(ya()),e&&n.push(Da()),n}function ya(){return{name:pi,position:`right`,index:29,tooltip:`三屏画面`,html:`
      <span class="video-player__triple-screen-control-icon" aria-hidden="true">
        <svg width="30" height="30" viewBox="6 6 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 9.875h3.125v12.25H10.5A1.125 1.125 0 0 1 9.375 21V11c0-.621.504-1.125 1.125-1.125z" stroke="currentColor" stroke-width="1.75"/>
          <path d="M18.25 9.75v12.5h-4.5V9.75h4.5z" stroke="currentColor" stroke-width="1.5"/>
          <path d="M21.5 9.875c.621 0 1.125.504 1.125 1.125v10c0 .621-.504 1.125-1.125 1.125h-3.125V9.875H21.5z" stroke="currentColor" stroke-width="1.75"/>
        </svg>
      </span>
    `,mounted(e){e.dataset.tripleScreenControl=``,e.dataset.tripleScreenEligible=`false`,e.setAttribute(`role`,`button`),e.setAttribute(`tabindex`,`0`),e.setAttribute(`aria-pressed`,`false`),e.setAttribute(`aria-label`,`三屏画面`),e.setAttribute(`title`,`三屏画面`),this.events.proxy(e,`keydown`,e=>{let t=e;(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),Ii.get(this)?.toggle())})},click(){Ii.get(this)?.toggle()}}}function ba(e,t,n){let r=e.template.$player,i=xa(n),a=document.createElement(`canvas`);a.className=`video-player__triple-screen-canvas`,a.setAttribute(`aria-hidden`,`true`),r.appendChild(a);let o=!1,s=null,c=n,l=!1,u=new Zr({container:r,video:t,canvas:a,onVisibilityChange(t){r.classList.toggle(gi,t),t&&l&&(l=!1,e.notice.show=`已开启三屏画面`)},onError(t){l=!1,console.warn(`[triple-screen] render failed`,t),r.classList.remove(gi),Ea(e,o,!1),e.notice.show=Ta(t)}});function d(){let n=Ca(e.url)||Ca(t.currentSrc);n&&(c=n)}function f(n){return wa(Ca(e.url)||Ca(t.currentSrc)||c,n)}function p(){s=null,l=!1}function m(){d(),o=Jr(t.videoWidth,t.videoHeight),!s||o&&f(s.url)||p(),o||(u.disable(),l=!1),s&&Number.isFinite(s.time)&&(t.currentTime=s.time),Ea(e,o,u.enabled)}function h(t){l=t;let n=u.enable();return n||(l=!1),Ea(e,!0,n),n}function g(){let e=s;e&&(!o||!f(e.url)?p():(s=null,h(!0)&&e.shouldPlay&&t.play().catch(()=>void 0)))}function _(){d(),s&&!f(s.url)&&p(),l=!1,o=!1,u.disable(),r.classList.remove(gi),Ea(e,!1,!1)}let v={toggle(){o&&(u.enabled?(l=!1,u.disable(),Ea(e,!0,!1),e.notice.show=`已关闭三屏画面`):i&&!Sa(c)?(s={time:Number.isFinite(t.currentTime)?t.currentTime:0,shouldPlay:!t.paused,url:i},u.disable(),Ea(e,!0,!1),e.notice.show=`正在切换到三屏中转播放`,c=i,e.url=i):h(!0))},destroy(){p(),u.destroy()}};return Ii.set(e,v),e.on(`video:loadstart`,_),e.on(`video:loadedmetadata`,m),e.on(`video:loadeddata`,g),e.on(`video:canplay`,g),m(),()=>{e.off(`video:loadstart`,_),e.off(`video:loadedmetadata`,m),e.off(`video:loadeddata`,g),e.off(`video:canplay`,g),Ii.delete(e),v.destroy(),r.classList.remove(gi)}}function xa(e){if(typeof window>`u`)return null;let t;try{t=new URL(e,window.location.href)}catch{return null}if(t.origin!==window.location.origin)return null;let n=t.pathname.toLowerCase();return n.startsWith(`/p/stream/`)||n.startsWith(`/p/share/`)&&n.endsWith(`/stream`)?(t.searchParams.set(mi,`1`),`${t.pathname}${t.search}${t.hash}`):null}function Sa(e){if(!e||typeof window>`u`)return!1;try{return new URL(e,window.location.href).searchParams.get(mi)===`1`}catch{return!1}}function Ca(e){return typeof e!=`string`||!e||e.startsWith(`blob:`)?``:e}function wa(e,t){if(!e||!t||typeof window>`u`)return e===t;try{return new URL(e,window.location.href).href===new URL(t,window.location.href).href}catch{return e===t}}function Ta(e){return e.name===`SecurityError`||/cross-origin|cross origin|origin-clean|tainted|security/i.test(e.message)?`当前视频源受跨域限制，无法开启三屏画面`:`当前浏览器或视频源不支持三屏画面`}function Ea(e,t,n){let r=e.controls?.[pi];r&&(r.dataset.tripleScreenEligible=t?`true`:`false`,r.setAttribute(`aria-pressed`,n?`true`:`false`),r.setAttribute(`aria-label`,`三屏画面`),r.setAttribute(`title`,`三屏画面`))}function Da(){return{name:di,position:`right`,index:55,tooltip:`横竖屏切换`,html:`
      <span class="video-player__orientation-control-icon video-player__orientation-control-icon--to-landscape" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M14.4 11.2h2.7c1.7 0 3 1.3 3 3v4.1c0 1.7-1.3 3-3 3h-3.8" fill="none" stroke="currentColor" stroke-opacity=".42" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="3.1" y="6.7" width="9.7" height="14.1" rx="2.4" fill="none" stroke="currentColor" stroke-width="2.3"/>
          <path d="M11.8 2.8h2.9c2.6 0 4.7 1.8 5 4.2" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"/>
          <path d="M17.4 4.6 19.8 7 22 4.5" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="video-player__orientation-control-icon video-player__orientation-control-icon--to-portrait" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g transform="rotate(180 12 12)">
            <path d="M12.8 14.4v2.7c0 1.7-1.3 3-3 3H5.7c-1.7 0-3-1.3-3-3v-3.8" fill="none" stroke="currentColor" stroke-opacity=".42" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="3.2" y="3.1" width="14.1" height="9.7" rx="2.4" fill="none" stroke="currentColor" stroke-width="2.3"/>
            <path d="M21.2 11.8v2.9c0 2.6-1.8 4.7-4.2 5" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"/>
            <path d="M19.4 17.4 17 19.8 19.5 22" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </span>
    `,mounted(e){e.setAttribute(`role`,`button`),e.setAttribute(`tabindex`,`0`),Ga(this,e),this.events.proxy(e,`keydown`,e=>{let t=e;(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),ka(this))})},click(){ka(this)}}}function Oa(e){function t(){Ha(e),Ga(e)}function n(n){!n&&Ba(e)===`web`?Va(e):t()}function r(t){!t&&Ba(e)===`native`?Va(e):Ga(e)}return window.addEventListener(`resize`,t),window.addEventListener(`orientationchange`,t),Pa()?.addEventListener?.(`change`,t),e.on(`fullscreenWeb`,n),e.on(`fullscreen`,r),Ga(e),()=>{Va(e),window.removeEventListener(`resize`,t),window.removeEventListener(`orientationchange`,t),Pa()?.removeEventListener?.(`change`,t),e.off(`fullscreenWeb`,n),e.off(`fullscreen`,r)}}async function ka(e){let t=Ia(e);await Aa(e,t)?(Wa(e),Ra(e,t,`native`),e.notice.show=`已切换${Ka(t)}`,Ga(e)):(await Ma(),e.fullscreenWeb||=!0,Ra(e,t,`web`),Ha(e),e.notice.show=`已切换${Ka(t)}`,Ga(e))}async function Aa(e,t){let n=Pa();if(!n?.lock)return!1;try{return await ja(e.template.$player)?(await n.lock(t),!0):!1}catch{return!1}}async function ja(e){if(Na())return!0;let t=e;try{if(t.requestFullscreen)return await t.requestFullscreen({navigationUI:`hide`}),!0;let e=t.webkitRequestFullscreen||t.mozRequestFullScreen||t.msRequestFullscreen;return e?(await Fa(e.call(t)),!0):!1}catch{return!1}}async function Ma(){if(!Na())return;let e=document,t=e.exitFullscreen||e.webkitExitFullscreen||e.mozCancelFullScreen||e.msExitFullscreen;if(t)try{await Fa(t.call(document))}catch{}}function Na(){let e=document;return document.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement||null}function Pa(){return window.screen?.orientation}async function Fa(e){e&&typeof e.then==`function`&&await e}function Ia(e){return(za(e)??La())===`landscape`?`portrait`:`landscape`}function La(){let e=Pa()?.type;return e?.startsWith(`landscape`)?`landscape`:e?.startsWith(`portrait`)?`portrait`:window.innerWidth>window.innerHeight?`landscape`:`portrait`}function Ra(e,t,n){let{dataset:r}=e.template.$player;r.videoPlayerOrientationTarget=t,r.videoPlayerOrientationKind=n}function za(e){let t=e.template.$player.dataset.videoPlayerOrientationTarget;return t===`landscape`||t===`portrait`?t:null}function Ba(e){let t=e.template.$player.dataset.videoPlayerOrientationKind;return t===`native`||t===`web`?t:null}function Va(e){let t=Ba(e);if(delete e.template.$player.dataset.videoPlayerOrientationTarget,delete e.template.$player.dataset.videoPlayerOrientationKind,Wa(e),t===`native`)try{Pa()?.unlock?.()}catch{}Ga(e)}function Ha(e){if(Ba(e)!==`web`)return;let t=za(e);t&&(e.fullscreenWeb?t===La()?Wa(e):Ua(e):Va(e))}function Ua(e){let t=e.template.$player,n=document.documentElement.clientWidth,r=document.documentElement.clientHeight;t.style.width=`${r}px`,t.style.height=`${n}px`,t.style.transformOrigin=`0 0`,t.style.transform=`rotate(90deg) translate(0, -${n}px)`,t.classList.add(hi),e.emit(`resize`)}function Wa(e){let t=e.template.$player;t.classList.remove(hi),t.style.transform=``,t.style.transformOrigin=``,e.fullscreenWeb?(t.style.width=`100%`,t.style.height=`100%`):(t.style.width=``,t.style.height=``),e.emit(`resize`)}function Ga(e,t){let n=e.controls,r=t??n?.[di];if(!r)return;let i=Ia(e),a=`切换${Ka(i)}`;r.dataset.nextOrientation=i,r.setAttribute(`aria-label`,a),r.setAttribute(`title`,a)}function Ka(e){return e===`landscape`?`横屏`:`竖屏`}function qa(e){Ja(e,Q.brightness);function t(){Ja(e,Ya(e))}return e.on(`fullscreenWeb`,t),()=>{e.off(`fullscreenWeb`,t),Fi.delete(e)}}function Ja(e,t){let n=Number($(t,ki,Ai).toFixed(2));Fi.set(e,n),e.template.$player.style.setProperty(`--video-player-brightness`,n.toFixed(2))}function Ya(e){return Fi.get(e)??Q.brightness}function Xa(e,t,n){return`${t>=e?`快进`:`快退`} ${ao(t)} / ${ao(n)}`}function Za(e){return oo(($(e,ki,Ai)-ki)/.9000000000000001)}function Qa(){return(e,t)=>_(e,t)}function $a(e,t){let n=null,r=!1,i=ii,a=!1;function o(){n!==null&&(window.clearTimeout(n),n=null)}function s(n){r!==n&&(n&&(i=Number.isFinite(e.playbackRate)&&e.playbackRate>0?e.playbackRate:ii),r=n,e.playbackRate=n?ri:i,t(n))}function c(){e.paused||e.ended||s(!0)}function l(){e.paused||e.ended||(o(),n=window.setTimeout(()=>{n=null,c()},ni))}function u(e=!1){o();let t=r;s(!1),t&&e&&(a=!0)}function d(e){e.button===0&&l()}function f(e){e.button===0&&u(!0)}function p(){u()}function m(e){a&&(a=!1,e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation())}return e.addEventListener(`mousedown`,d),e.addEventListener(`mouseup`,f),e.addEventListener(`click`,m,!0),e.addEventListener(`mouseleave`,p),e.addEventListener(`pause`,p),e.addEventListener(`ended`,p),()=>{o(),s(!1),e.removeEventListener(`mousedown`,d),e.removeEventListener(`mouseup`,f),e.removeEventListener(`click`,m,!0),e.removeEventListener(`mouseleave`,p),e.removeEventListener(`pause`,p),e.removeEventListener(`ended`,p)}}function eo(e,t,n,r){if(!ea())return _a;let i=e.template.$player,a=null;function o(){a&&a.pressTimer!==null&&(window.clearTimeout(a.pressTimer),a.pressTimer=null)}function s(e){if(!a||a.fastActive===e)return;if(e){a.previousRate=Number.isFinite(t.playbackRate)&&t.playbackRate>0?t.playbackRate:ii,a.fastActive=!0,n(!0),t.playbackRate=ri;return}let r=a.previousRate;a.fastActive=!1,n(!1),t.playbackRate=r}function c(){o(),a?.fastActive&&s(!1),a=null}function l(n){if(c(),n.touches.length!==1||e.isLock)return;let r=n.touches[0],o=i.getBoundingClientRect(),l={left:o.left,top:o.top,width:o.width,height:o.height,rotated:i.classList.contains(hi)||e.isRotate},u=Sr(r,l);a={frame:l,startPoint:u,startTime:t.currentTime||0,startVolume:t.muted?0:$(t.volume,0,1),startBrightness:Ya(e),side:u.x<u.width/2?`left`:`right`,mode:null,targetTime:t.currentTime||0,moved:!1,fastActive:!1,previousRate:t.playbackRate||ii,pressTimer:null},a.pressTimer=window.setTimeout(()=>{!a||a.mode||a.moved||t.paused||t.ended||s(!0)},ni)}function u(t,n){if(!a)return;let r=Math.abs(t),i=Math.abs(n);if(!(r<ji&&i<ji)){if(a.moved=!0,o(),r>=i*Mi)a.mode=`seek`;else if(i>=r*Mi){if(!da(e)){c();return}a.mode=a.side===`right`?`volume`:`brightness`}}}function d(t){if(!a)return;if(t.touches.length!==1||e.isLock){c();return}let n=t.touches[0],r=Sr(n,a.frame),i=r.x-a.startPoint.x,o=r.y-a.startPoint.y;a.fastActive?t.preventDefault():!a.mode&&(u(i,o),!a||!a.mode)||(t.preventDefault(),a.mode===`seek`?f(t,i):a.mode===`volume`?p(r.y):m(r.y))}function f(n,i){if(!a)return;let o=t.duration;if(!Number.isFinite(o)||o<=0)return;let s=$(a.startTime+i/Math.max(1,a.startPoint.width)*o,0,o);a.targetTime=s,e.emit(`setBar`,`played`,s/o,n),da(e)&&r(Xa(a.startTime,s,o),560)}function p(n){if(!a)return;let r=(a.startPoint.y-n)/Math.max(1,a.startPoint.height),i=Cr(t,a.startVolume+r);i===null?(ha(e),e.notice.show=`当前浏览器不支持音量调节`,c()):ma(e,`volume`,oo(i))}function m(t){if(!a)return;let n=(a.startPoint.y-t)/Math.max(1,a.startPoint.height)*Ni,r=$(a.startBrightness+n,ki,Ai);Ja(e,r),ma(e,`brightness`,Za(r))}function h(){if(a){if(a.mode===`seek`){let n=t.duration;Number.isFinite(n)&&n>0&&(e.seek=$(a.targetTime,0,n),da(e)&&r(Xa(a.startTime,a.targetTime,n),720))}c()}}return t.addEventListener(`touchstart`,l,{passive:!0}),t.addEventListener(`touchmove`,d,{passive:!1}),t.addEventListener(`touchend`,h),t.addEventListener(`touchcancel`,c),t.addEventListener(`pause`,c),t.addEventListener(`ended`,c),window.addEventListener(`blur`,c),e.on(`resize`,c),e.on(`fullscreen`,c),e.on(`fullscreenWeb`,c),()=>{ha(e),c(),t.removeEventListener(`touchstart`,l),t.removeEventListener(`touchmove`,d),t.removeEventListener(`touchend`,h),t.removeEventListener(`touchcancel`,c),t.removeEventListener(`pause`,c),t.removeEventListener(`ended`,c),window.removeEventListener(`blur`,c),e.off(`resize`,c),e.off(`fullscreen`,c),e.off(`fullscreenWeb`,c)}}function to(e,t,n,r){let i=e.query(`.art-progress`);if(!i)return()=>void 0;let a=i;function o(e){if(`pointerType`in e&&e.pointerType===`touch`)return;let i=t.duration;if(!Number.isFinite(i)||i<=0)return;let o=a.getBoundingClientRect(),s=n.getBoundingClientRect(),c=$((e.clientX-o.left)/Math.max(1,o.width),0,1),l=Math.min(92,s.width/2),u=Math.max(l,s.width-l);r({x:$(e.clientX-s.left,l,u),ratio:c,time:c*i})}function s(){r(null)}return a.addEventListener(`pointermove`,o),a.addEventListener(`pointerdown`,o),a.addEventListener(`pointerleave`,s),window.addEventListener(`pointerup`,s),window.addEventListener(`blur`,s),()=>{a.removeEventListener(`pointermove`,o),a.removeEventListener(`pointerdown`,o),a.removeEventListener(`pointerleave`,s),window.removeEventListener(`pointerup`,s),window.removeEventListener(`blur`,s)}}function no(e){switch(e?.code){case MediaError.MEDIA_ERR_ABORTED:return`视频加载已取消，请重试`;case MediaError.MEDIA_ERR_NETWORK:return`视频源网络连接失败，请稍后重试`;case MediaError.MEDIA_ERR_DECODE:return`视频编码无法解码，可尝试换用兼容的浏览器`;case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:return`浏览器未能加载视频源，可能是网盘连接、地址失效或视频格式问题`;default:return`视频源暂时无法播放，请重试或复制地址排查`}}function ro(e,t){if(!e||!Number.isFinite(e.duration)||e.duration<=0)return;let n=$(t*e.duration,0,Math.max(0,e.duration-.05));if(Math.abs(e.currentTime-n)>.25)try{e.currentTime=n}catch{}}function io(e){let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,`true`),t.style.position=`fixed`,t.style.left=`-9999px`,document.body.appendChild(t),t.select();try{document.execCommand(`copy`)}catch{}finally{t.remove()}}function $(e,t,n){return e<t?t:e>n?n:e}function ao(e){if(!Number.isFinite(e)||e<0)return`00:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`}function oo(e){return`${Math.round($(e,0,1)*100)}%`}export{ne as n,E as r,Li as t};