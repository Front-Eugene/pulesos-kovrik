/*!
* jquery.inputmask.min.js
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2015 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.1.60
*/
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){function t(e){var t=document.createElement("input"),a="on"+e,i=a in t;return i||(t.setAttribute(a,"return;"),i="function"==typeof t[a]),t=null,i}function a(t,i,n){var r=n.aliases[t];return!!r&&(r.alias&&a(r.alias,void 0,n),e.extend(!0,n,r),e.extend(!0,n,i),!0)}function i(t){function a(a){function i(e,t,a,i){this.matches=[],this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=a||!1,this.isAlternator=i||!1,this.quantifier={min:1,max:1}}function n(a,i,n){var r=t.definitions[i],o=0==a.matches.length;if(n=null!=n?n:a.matches.length,r&&!f){r.placeholder=e.isFunction(r.placeholder)?r.placeholder.call(this,t):r.placeholder;for(var s=r.prevalidator,l=s?s.length:0,u=1;u<r.cardinality;u++){var c=l>=u?s[u-1]:[],p=c.validator,d=c.cardinality;a.matches.splice(n++,0,{fn:p?"string"==typeof p?new RegExp(p):new function(){this.test=p}:new RegExp("."),cardinality:d||1,optionality:a.isOptional,newBlockMarker:o,casing:r.casing,def:r.definitionSymbol||i,placeholder:r.placeholder,mask:i})}a.matches.splice(n++,0,{fn:r.validator?"string"==typeof r.validator?new RegExp(r.validator):new function(){this.test=r.validator}:new RegExp("."),cardinality:r.cardinality,optionality:a.isOptional,newBlockMarker:o,casing:r.casing,def:r.definitionSymbol||i,placeholder:r.placeholder,mask:i})}else a.matches.splice(n++,0,{fn:null,cardinality:0,optionality:a.isOptional,newBlockMarker:o,casing:null,def:i,placeholder:void 0,mask:i}),f=!1}for(var r,o,s,l,u,c,p=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,f=!1,d=new i,m=[],v=[];r=p.exec(a);)switch(o=r[0],o.charAt(0)){case t.optionalmarker.end:case t.groupmarker.end:if(s=m.pop(),m.length>0){if((l=m[m.length-1]).matches.push(s),l.isAlternator){u=m.pop();for(var h=0;h<u.matches.length;h++)u.matches[h].isGroup=!1;m.length>0?(l=m[m.length-1]).matches.push(u):d.matches.push(u)}}else d.matches.push(s);break;case t.optionalmarker.start:m.push(new i(!1,!0));break;case t.groupmarker.start:m.push(new i(!0));break;case t.quantifiermarker.start:var k=new i(!1,!1,!0),g=(o=o.replace(/[{}]/g,"")).split(","),y=isNaN(g[0])?g[0]:parseInt(g[0]),b=1==g.length?y:isNaN(g[1])?g[1]:parseInt(g[1]);if(("*"==b||"+"==b)&&(y="*"==b?0:1),k.quantifier={min:y,max:b},m.length>0){var _=m[m.length-1].matches;if(!(r=_.pop()).isGroup)(P=new i(!0)).matches.push(r),r=P;_.push(r),_.push(k)}else{var P;if(!(r=d.matches.pop()).isGroup)(P=new i(!0)).matches.push(r),r=P;d.matches.push(r),d.matches.push(k)}break;case t.escapeChar:f=!0;break;case t.alternatormarker:m.length>0?c=(l=m[m.length-1]).matches.pop():c=d.matches.pop(),c.isAlternator?m.push(c):((u=new i(!1,!1,!1,!0)).matches.push(c),m.push(u));break;default:if(m.length>0){if((l=m[m.length-1]).matches.length>0&&((c=l.matches[l.matches.length-1]).isGroup&&(c.isGroup=!1,n(c,t.groupmarker.start,0),n(c,t.groupmarker.end))),n(l,o),l.isAlternator){u=m.pop();for(h=0;h<u.matches.length;h++)u.matches[h].isGroup=!1;m.length>0?(l=m[m.length-1]).matches.push(u):d.matches.push(u)}}else d.matches.length>0&&((c=d.matches[d.matches.length-1]).isGroup&&(c.isGroup=!1,n(c,t.groupmarker.start,0),n(c,t.groupmarker.end))),n(d,o)}return d.matches.length>0&&((c=d.matches[d.matches.length-1]).isGroup&&(c.isGroup=!1,n(c,t.groupmarker.start,0),n(c,t.groupmarker.end)),v.push(d)),v}function i(i,n){if(null!=i&&""!=i){if(1==i.length&&0==t.greedy&&0!=t.repeat&&(t.placeholder=""),t.repeat>0||"*"==t.repeat||"+"==t.repeat){var r="*"==t.repeat?0:"+"==t.repeat?1:t.repeat;i=t.groupmarker.start+i+t.groupmarker.end+t.quantifiermarker.start+r+","+t.repeat+t.quantifiermarker.end}return null==e.inputmask.masksCache[i]&&(e.inputmask.masksCache[i]={mask:i,maskToken:a(i),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:n}),e.extend(!0,{},e.inputmask.masksCache[i])}}function n(e){if(e=e.toString(),t.numericInput){e=e.split("").reverse();for(var a=0;a<e.length;a++)e[a]==t.optionalmarker.start?e[a]=t.optionalmarker.end:e[a]==t.optionalmarker.end?e[a]=t.optionalmarker.start:e[a]==t.groupmarker.start?e[a]=t.groupmarker.end:e[a]==t.groupmarker.end&&(e[a]=t.groupmarker.start);e=e.join("")}return e}var r=void 0;if(e.isFunction(t.mask)&&(t.mask=t.mask.call(this,t)),e.isArray(t.mask)){if(t.mask.length>1){t.keepStatic=null==t.keepStatic||t.keepStatic;var o="(";return e.each(t.mask,(function(t,a){o.length>1&&(o+=")|("),o+=n(null==a.mask||e.isFunction(a.mask)?a:a.mask)})),i(o+=")",t.mask)}t.mask=t.mask.pop()}return t.mask&&(r=null==t.mask.mask||e.isFunction(t.mask.mask)?i(n(t.mask),t.mask):i(n(t.mask.mask),t.mask)),r}function n(a,i,n){function r(e,t,a){t=t||0;var i,n,r,o=[],s=0;do{if(!0===e&&u().validPositions[s]){var l=u().validPositions[s];n=l.match,i=l.locator.slice(),o.push(!0===a?l.input:O(s,n))}else n=(r=m(s,i,s-1)).match,i=r.locator.slice(),o.push(O(s,n));s++}while((null==J||J>s-1)&&null!=n.fn||null==n.fn&&""!=n.def||t>=s);return o.pop(),o}function u(){return i}function c(e){var t=u();t.buffer=void 0,t.tests={},!0!==e&&(t._buffer=void 0,t.validPositions={},t.p=0)}function p(e){var t=-1,a=u().validPositions;null==e&&(e=-1);var i=t,n=t;for(var r in a){var o=parseInt(r);(-1==e||null!=a[o].match.fn)&&(e>=o&&(i=o),o>=e&&(n=o))}return-1!=i&&e-i>1||e>n?i:n}function f(t,a,i){if(n.insertMode&&null!=u().validPositions[t]&&null==i){var r,o=e.extend(!0,{},u().validPositions),s=p();for(r=t;s>=r;r++)delete u().validPositions[r];u().validPositions[t]=a;var l,c=!0;for(r=t;s>=r;r++){var f=o[r];if(null!=f){var d=u().validPositions;c=h(l=!n.keepStatic&&d[r]&&(null!=d[r+1]&&k(r+1,d[r].locator.slice(),r).length>1||null!=d[r].alternation)?r+1:M(r),f.match.def)?c&&!1!==E(l,f.input,!0,!0):null==f.match.fn}if(!c)break}if(!c)return u().validPositions=e.extend(!0,{},o),!1}else u().validPositions[t]=a;return!0}function d(e,t,a,i){var r,o=e;for(u().p=e,null!=u().validPositions[e]&&u().validPositions[e].input==n.radixPoint&&(t++,o++),r=o;t>r;r++)null!=u().validPositions[r]&&(!0===a||0!=n.canClearPosition(u(),r,p(),i,n))&&delete u().validPositions[r];for(c(!0),r=o+1;r<=p();){for(;null!=u().validPositions[o];)o++;var s=u().validPositions[o];o>r&&(r=o+1);var l=u().validPositions[r];null!=l&&null==s?(h(o,l.match.def)&&!1!==E(o,l.input,!0)&&(delete u().validPositions[r],r++),o++):r++}var f=p();f>=e&&null!=u().validPositions[f]&&u().validPositions[f].input==n.radixPoint&&delete u().validPositions[f],c(!0)}function m(e,t,a){for(var i,r=k(e,t,a),o=p(),s=u().validPositions[o]||k(0)[0],l=null!=s.alternation?s.locator[s.alternation].split(","):[],c=0;c<r.length&&!((i=r[c]).match&&(n.greedy&&!0!==i.match.optionalQuantifier||(!1===i.match.optionality||!1===i.match.newBlockMarker)&&!0!==i.match.optionalQuantifier)&&(null==s.alternation||null!=i.locator[s.alternation]&&P(i.locator[s.alternation].toString().split(","),l)));c++);return i}function v(e){return u().validPositions[e]?u().validPositions[e].match:k(e)[0].match}function h(e,t){for(var a=!1,i=k(e),n=0;n<i.length;n++)if(i[n].match&&i[n].match.def==t){a=!0;break}return a}function k(t,a,i){function n(a,i,r,s){function p(r,s,d){if(o>1e4)return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+u().mask),!0;if(o==t&&null==r.matches)return l.push({match:r,locator:s.reverse()}),!0;if(null!=r.matches){if(r.isGroup&&!0!==d){if(r=p(a.matches[f+1],s))return!0}else if(r.isOptional){var m=r;if(r=n(r,i,s,d)){var v=l[l.length-1].match;0==e.inArray(v,m.matches)&&(c=!0),o=t}}else if(r.isAlternator){var h,k=r,g=[],y=l.slice(),b=s.length,_=i.length>0?i.shift():-1;if(-1==_||"string"==typeof _){var P,E=o,C=i.slice();"string"==typeof _&&(P=_.split(","));for(var x=0;x<k.matches.length;x++){l=[],r=p(k.matches[x],[x].concat(s),d)||r,h=l.slice(),o=E,l=[];for(var M=0;M<C.length;M++)i[M]=C[M];for(var w=0;w<h.length;w++)for(var A=h[w],S=0;S<g.length;S++){var O=g[S];if(A.match.mask==O.match.mask&&("string"!=typeof _||-1!=e.inArray(A.locator[b].toString(),P))){h.splice(w,1),O.locator[b]=O.locator[b]+","+A.locator[b],O.alternation=b;break}}g=g.concat(h)}"string"==typeof _&&(g=e.map(g,(function(t,a){if(isFinite(a)){var i=t.locator[b].toString().split(",");t.locator[b]=void 0,t.alternation=void 0;for(var n=0;n<i.length;n++)-1!=e.inArray(i[n],P)&&(null!=t.locator[b]?(t.locator[b]+=",",t.alternation=b,t.locator[b]+=i[n]):t.locator[b]=parseInt(i[n]));if(null!=t.locator[b])return t}}))),l=y.concat(g),c=!0}else r=p(k.matches[_],[_].concat(s),d);if(r)return!0}else if(r.isQuantifier&&!0!==d)for(var j=r,T=i.length>0&&!0!==d?i.shift():0;T<(isNaN(j.quantifier.max)?T+1:j.quantifier.max)&&t>=o;T++){var D=a.matches[e.inArray(j,a.matches)-1];if(r=p(D,[T].concat(s),!0)){if((v=l[l.length-1].match).optionalQuantifier=T>j.quantifier.min-1,0==e.inArray(v,D.matches)){if(T>j.quantifier.min-1){c=!0,o=t;break}return!0}return!0}}else if(r=n(r,i,s,d))return!0}else o++}for(var f=i.length>0?i.shift():0;f<a.matches.length;f++)if(!0!==a.matches[f].isQuantifier){var d=p(a.matches[f],[f].concat(r),s);if(d&&o==t)return d;if(o>t)break}}var r=u().maskToken,o=a?i:0,s=a||[0],l=[],c=!1;if(null==a){for(var p,f=t-1;null==(p=u().validPositions[f])&&f>-1;)f--;if(null!=p&&f>-1)o=f,s=p.locator.slice();else{for(f=t-1;null==(p=u().tests[f])&&f>-1;)f--;null!=p&&f>-1&&(o=f,s=p[0].locator.slice())}}for(var d=s.shift();d<r.length;d++){if(n(r[d],s,[d])&&o==t||o>t)break}return(0==l.length||c)&&l.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]}),u().tests[t]=e.extend(!0,[],l),u().tests[t]}function g(){return null==u()._buffer&&(u()._buffer=r(!1,1)),u()._buffer}function y(){return null==u().buffer&&(u().buffer=r(!0,p(),!0)),u().buffer}function b(e,t,a){if(a=a||y().slice(),!0===e)c(),e=0,t=a.length;else for(var i=e;t>i;i++)delete u().validPositions[i],delete u().tests[i];for(i=e;t>i;i++)a[i]!=n.skipOptionalPartCharacter&&E(i,a[i],!0,!0)}function _(e,t){switch(t.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase()}return e}function P(t,a){for(var i=n.greedy?a:a.slice(0,1),r=!1,o=0;o<t.length;o++)if(-1!=e.inArray(t[o],i)){r=!0;break}return r}function E(t,a,i,r){function o(t,a,i,r){var o=!1;return e.each(k(t),(function(s,l){for(var m=l.match,v=a?1:0,h="",k=(y(),m.cardinality);k>v;k--)h+=A(t-(k-1));if(a&&(h+=a),!1!==(o=null!=m.fn?m.fn.test(h,u(),t,i,n):(a==m.def||a==n.skipOptionalPartCharacter)&&""!=m.def&&{c:m.def,pos:t})){var g=null!=o.c?o.c:a;g=g==n.skipOptionalPartCharacter&&null===m.fn?m.def:g;var P=t;if(null!=o.remove&&d(o.remove,o.remove+1,!0),o.refreshFromBuffer){var C=o.refreshFromBuffer;if(i=!0,b(!0===C?C:C.start,C.end),null==o.pos&&null==o.c)return o.pos=p(),!1;if((P=null!=o.pos?o.pos:t)!=t)return o=e.extend(o,E(P,g,!0)),!1}else if(!0!==o&&null!=o.pos&&o.pos!=t&&(P=o.pos,b(t,P),P!=t))return o=e.extend(o,E(P,g,!0)),!1;return 1!=o&&null==o.pos&&null==o.c||(s>0&&c(!0),f(P,e.extend({},l,{input:_(g,m)}),r)||(o=!1)),!1}})),o}function s(t,a){for(var i=u().validPositions[a].locator,n=i.length,r=t;a>r;r++)if(!C(r)){var o=k(r),s=o[0],l=-1;e.each(o,(function(e,t){for(var a=0;n>a;a++)t.locator[a]&&P(t.locator[a].toString().split(","),i[a].toString().split(","))&&a>l&&(l=a,s=t)})),f(r,e.extend({},s,{input:s.match.def}),!0)}}i=!0===i;for(var l=y(),m=t-1;m>-1&&!u().validPositions[m];m--);for(m++;t>m;m++)null==u().validPositions[m]&&((!C(m)||l[m]!=O(m))&&k(m).length>1||l[m]==n.radixPoint||"0"==l[m]&&e.inArray(n.radixPoint,l)<m)&&o(m,l[m],!0);var v=t,h=!1,g=e.extend(!0,{},u().validPositions);if(v<x()&&(h=o(v,a,i,r),!i&&!1===h)){var w=u().validPositions[v];if(!w||null!=w.match.fn||w.match.def!=a&&a!=n.skipOptionalPartCharacter){if((n.insertMode||null==u().validPositions[M(v)])&&!C(v))for(var S=v+1,j=M(v);j>=S;S++)if(!1!==(h=o(S,a,i,r))){s(v,S),v=S;break}}else h={caret:M(v)}}if((!1===h&&n.keepStatic&&I(l)&&(h=function(t,a,i,r){var o,s,l=e.extend(!0,{},u().validPositions);for(o=p();o>=0;o--)if(u().validPositions[o]&&null!=u().validPositions[o].alternation){s=u().validPositions[o].alternation;break}if(null!=s)for(var f in u().validPositions)if(parseInt(f)>parseInt(o)&&void 0===u().validPositions[f].alternation){for(var d=u().validPositions[f].locator[s],m=u().validPositions[o].locator[s].split(","),v=0;v<m.length;v++)if(d<m[v]){for(var h,k,g=f-1;g>=0;g--)if(null!=(h=u().validPositions[g])){k=h.locator[s],h.locator[s]=m[v];break}if(d!=h.locator[s]){for(var b=y().slice(),_=f;_<p()+1;_++)delete u().validPositions[_],delete u().tests[_];c(!0),n.keepStatic=!n.keepStatic;for(_=f;_<b.length;_++)b[_]!=n.skipOptionalPartCharacter&&E(p()+1,b[_],!1,!0);h.locator[s]=k;var P=E(t,a,i,r);if(n.keepStatic=!n.keepStatic,P)return P;c(),u().validPositions=e.extend(!0,{},l)}}break}return!1}(t,a,i,r)),!0===h&&(h={pos:v}),e.isFunction(n.postValidation)&&0!=h&&!i)&&(c(!0),!n.postValidation(y(),n)))return c(!0),u().validPositions=e.extend(!0,{},g),!1;return h}function C(e){var t=v(e);return null!=t.fn&&t.fn}function x(){var e;-1==(J=z.prop("maxLength"))&&(J=void 0);var t,a=p(),i=u().validPositions[a],n=null!=i?i.locator.slice():void 0;for(t=a+1;null==i||null!=i.match.fn||null==i.match.fn&&""!=i.match.def;t++)n=(i=m(t,n,t-1)).locator.slice();return e=t,null==J||J>e?e:J}function M(e){var t=x();if(e>=t)return t;for(var a=e;++a<t&&!C(a)&&(!0!==n.nojumps||n.nojumpsThreshold>a););return a}function w(e){var t=e;if(0>=t)return 0;for(;--t>0&&!C(t););return t}function A(e){return null==u().validPositions[e]?O(e):u().validPositions[e].input}function S(t,a,i,r,o){if(r&&e.isFunction(n.onBeforeWrite)){var s=n.onBeforeWrite.call(t,r,a,i,n);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;b(!0===l?l:l.start,l.end,s.buffer),c(!0),a=y()}i=s.caret||i}}t._valueSet(a.join("")),null!=i&&G(t,i),!0===o&&(X=!0,e(t).trigger("input"))}function O(e,t){return null!=(t=t||v(e)).placeholder?t.placeholder:null==t.fn?t.def:n.placeholder.charAt(e%n.placeholder.length)}function j(t,a,i,n){var r=null!=n?n.slice():t._valueGet().split(""),o="",s=0;c(),u().p=M(-1),a&&t._valueSet("");var l=g().slice(0,M(-1)).join(""),f=r.join("").match(new RegExp(function(t){return e.inputmask.escapeRegex.call(this,t)}(l),"g"));f&&f.length>0&&(r.splice(0,f.length*l.length),s=M(s)),e.each(r,(function(a,n){var r=e.Event("keypress");r.which=n.charCodeAt(0),o+=n;var l=p(),c=u().validPositions[l],f=m(l+1,c?c.locator.slice():void 0,l);if(!function(){var e=!1,t=g().slice(s,M(s)).join("").indexOf(o);if(-1!=t&&!C(s)){e=!0;for(var a=g().slice(s,s+t),i=0;i<a.length;i++)if(" "!=a[i]){e=!1;break}}return e}()||i){var d=i?a:null==f.match.fn&&f.match.optionality&&l+1<u().p?l+1:u().p;L.call(t,r,!0,!1,i,d),s=d+1,o=""}else L.call(t,r,!0,!1,!0,l+1)})),a&&S(t,y(),e(t).is(":focus")?M(p(0)):void 0,e.Event("checkval"))}function T(t){if(t.data("_inputmask")&&!t.hasClass("hasDatepicker")){var a=[],i=u().validPositions;for(var r in i)i[r].match&&null!=i[r].match.fn&&a.push(i[r].input);var o=(Z?a.reverse():a).join(""),s=(Z?y().slice().reverse():y()).join("");return e.isFunction(n.onUnMask)&&(o=n.onUnMask.call(t,s,o,n)||o),o}return t[0]._valueGet()}function D(e){!Z||"number"!=typeof e||n.greedy&&""==n.placeholder||(e=y().length-e);return e}function G(t,a,i){var r,o=t.jquery&&t.length>0?t[0]:t;if("number"!=typeof a)return o.setSelectionRange?(a=o.selectionStart,i=o.selectionEnd):document.selection&&document.selection.createRange&&(i=(a=0-(r=document.selection.createRange()).duplicate().moveStart("character",-1e5))+r.text.length),{begin:D(a),end:D(i)};if(a=D(a),i="number"==typeof(i=D(i))?i:a,e(o).is(":visible")){var s=e(o).css("font-size").replace("px","")*i;o.scrollLeft=s>o.scrollWidth?s:0,0==n.insertMode&&a==i&&i++,o.setSelectionRange?(o.selectionStart=a,o.selectionEnd=i):o.createTextRange&&((r=o.createTextRange()).collapse(!0),r.moveEnd("character",i),r.moveStart("character",a),r.select())}}function F(t){var a,i,n=y(),r=n.length,o=p(),s={},l=u().validPositions[o],c=null!=l?l.locator.slice():void 0;for(a=o+1;a<n.length;a++)c=(i=m(a,c,a-1)).locator.slice(),s[a]=e.extend(!0,{},i);var f=l&&null!=l.alternation?l.locator[l.alternation].split(","):[];for(a=r-1;a>o&&(((i=s[a].match).optionality||i.optionalQuantifier||l&&null!=l.alternation&&null!=s[a].locator[l.alternation]&&-1!=e.inArray(s[a].locator[l.alternation].toString(),f))&&n[a]==O(a,i));a--)r--;return t?{l:r,def:s[r]?s[r].match:void 0}:r}function B(e){for(var t=F(),a=e.length-1;a>t&&!C(a);a--);e.splice(t,a+1-t)}function I(t){if(e.isFunction(n.isComplete))return n.isComplete.call(z,t,n);if("*"!=n.repeat){var a=!1,i=F(!0),r=w(i.l);if(p(),null==i.def||i.def.newBlockMarker||i.def.optionalQuantifier){a=!0;for(var o=0;r>=o;o++){var s=C(o),l=v(o);if(s&&null==u().validPositions[o]&&!0!==l.optionality&&!0!==l.optionalQuantifier||!s&&t[o]!=O(o)){a=!1;break}}}return a}}function K(t,a,i,r){if((n.numericInput||Z)&&(a==e.inputmask.keyCode.BACKSPACE?a=e.inputmask.keyCode.DELETE:a==e.inputmask.keyCode.DELETE&&(a=e.inputmask.keyCode.BACKSPACE),Z)){var o=i.end;i.end=i.begin,i.begin=o}if(a==e.inputmask.keyCode.BACKSPACE&&(i.end-i.begin<1||0==n.insertMode)?i.begin=w(i.begin):a==e.inputmask.keyCode.DELETE&&i.begin==i.end&&(i.end=C(i.end)?i.end+1:M(i.end)+1),d(i.begin,i.end,!1,r),!0!==r){!function(){if(n.keepStatic){c(!0);var a,i=[];for(a=p();a>=0;a--)if(u().validPositions[a]){if(null!=u().validPositions[a].alternation)break;i.push(u().validPositions[a].input),delete u().validPositions[a]}if(a>0)for(;i.length>0;){u().p=M(p());var r=e.Event("keypress");r.which=i.pop().charCodeAt(0),L.call(t,r,!0,!1,!1,u().p)}}}();var s=p(i.begin);s<i.begin?(-1==s&&c(),u().p=M(s)):u().p=i.begin}}function R(a){var i=this,r=e(i),s=a.keyCode,l=G(i);s==e.inputmask.keyCode.BACKSPACE||s==e.inputmask.keyCode.DELETE||o&&127==s||a.ctrlKey&&88==s&&!t("cut")?(a.preventDefault(),88==s&&(Q=y().join("")),K(i,s,l),S(i,y(),u().p,a,Q!=y().join("")),i._valueGet()==g().join("")?r.trigger("cleared"):!0===I(y())&&r.trigger("complete"),n.showTooltip&&r.prop("title",u().mask)):s==e.inputmask.keyCode.END||s==e.inputmask.keyCode.PAGE_DOWN?setTimeout((function(){var e=M(p());n.insertMode||e!=x()||a.shiftKey||e--,G(i,a.shiftKey?l.begin:e,e)}),0):s==e.inputmask.keyCode.HOME&&!a.shiftKey||s==e.inputmask.keyCode.PAGE_UP?G(i,0,a.shiftKey?l.begin:0):(n.undoOnEscape&&s==e.inputmask.keyCode.ESCAPE||90==s&&a.ctrlKey)&&!0!==a.altKey?(j(i,!0,!1,Q.split("")),r.click()):s!=e.inputmask.keyCode.INSERT||a.shiftKey||a.ctrlKey?0!=n.insertMode||a.shiftKey||(s==e.inputmask.keyCode.RIGHT?setTimeout((function(){var e=G(i);G(i,e.begin)}),0):s==e.inputmask.keyCode.LEFT&&setTimeout((function(){var e=G(i);G(i,Z?e.begin+1:e.begin-1)}),0)):(n.insertMode=!n.insertMode,G(i,n.insertMode||l.begin!=x()?l.begin:l.begin-1)),n.onKeyDown.call(this,a,y(),G(i).begin,n),ee=-1!=e.inArray(s,n.ignorables)}function L(t,a,i,r,o){var s=this,l=e(s),p=t.which||t.charCode||t.keyCode;if(!(!0===a||t.ctrlKey&&t.altKey)&&(t.ctrlKey||t.metaKey||ee))return!0;if(p){46==p&&0==t.shiftKey&&","==n.radixPoint&&(p=44);var d,m=a?{begin:o,end:o}:G(s),v=String.fromCharCode(p),h=function(e,t){return Z?e-t>1||e-t==1&&n.insertMode:t-e>1||t-e==1&&n.insertMode}(m.begin,m.end);h&&(u().undoPositions=e.extend(!0,{},u().validPositions),K(s,e.inputmask.keyCode.DELETE,m,!0),m.begin=u().p,n.insertMode||(n.insertMode=!n.insertMode,f(m.begin,r),n.insertMode=!n.insertMode),h=!n.multi),u().writeOutBuffer=!0;var g=Z&&!h?m.end:m.begin,_=E(g,v,r);if(!1!==_){if(!0!==_&&(g=null!=_.pos?_.pos:g,v=null!=_.c?_.c:v),c(!0),null!=_.caret)d=_.caret;else{var P=u().validPositions;d=!n.keepStatic&&(null!=P[g+1]&&k(g+1,P[g].locator.slice(),g).length>1||null!=P[g].alternation)?g+1:M(g)}u().p=d}if(!1!==i){var C=this;if(setTimeout((function(){n.onKeyValidation.call(C,_,n)}),0),u().writeOutBuffer&&!1!==_){var x=y();S(s,x,a?void 0:n.numericInput?w(d):d,t,!0!==a),!0!==a&&setTimeout((function(){!0===I(x)&&l.trigger("complete")}),0)}else h&&(u().buffer=void 0,u().validPositions=u().undoPositions)}else h&&(u().buffer=void 0,u().validPositions=u().undoPositions);if(n.showTooltip&&l.prop("title",u().mask),a&&e.isFunction(n.onBeforeWrite)){var A=n.onBeforeWrite.call(this,t,y(),d,n);if(A&&A.refreshFromBuffer){var O=A.refreshFromBuffer;b(!0===O?O:O.start,O.end,A.buffer),c(!0),A.caret&&(u().p=A.caret)}}t.preventDefault()}}function N(t){var a=this,i=e(a),r=a._valueGet(!0),o=G(a);if("propertychange"==t.type&&a._valueGet().length<=x())return!0;if("paste"==t.type){var s=r.substr(0,o.begin),l=r.substr(o.end,r.length);s==g().slice(0,o.begin).join("")&&(s=""),l==g().slice(o.end).join("")&&(l=""),window.clipboardData&&window.clipboardData.getData?r=s+window.clipboardData.getData("Text")+l:t.originalEvent&&t.originalEvent.clipboardData&&t.originalEvent.clipboardData.getData&&(r=s+t.originalEvent.clipboardData.getData("text/plain")+l)}var u=r;if(e.isFunction(n.onBeforePaste)){if(!1===(u=n.onBeforePaste.call(a,r,n)))return t.preventDefault(),!1;u||(u=r)}return j(a,!0,!1,Z?u.split("").reverse():u.split("")),i.click(),!0===I(y())&&i.trigger("complete"),!1}function H(t){j(this,!0,!1),!0===I(y())&&e(this).trigger("complete"),t.preventDefault()}function U(e){Q=y().join(""),(""==$||0!=e.originalEvent.data.indexOf($))&&(V=G(this))}function W(t){var a=this,i=V||G(a);0==t.originalEvent.data.indexOf($)&&(c(),i={begin:0,end:0});var r=t.originalEvent.data;G(a,i.begin,i.end);for(var o=0;o<r.length;o++){var s=e.Event("keypress");s.which=r.charCodeAt(o),Y=!1,ee=!1,L.call(a,s)}setTimeout((function(){var e=u().p;S(a,y(),n.numericInput?w(e):e)}),0),$=t.originalEvent.data}function q(){}var Q,V,$,z,J,Z=!1,Y=!1,X=!1,ee=!1,te=!0;if(null!=a)switch(a.action){case"isComplete":return z=e(a.el),i=z.data("_inputmask").maskset,n=z.data("_inputmask").opts,I(a.buffer);case"unmaskedvalue":return z=a.$input,i=z.data("_inputmask").maskset,n=z.data("_inputmask").opts,Z=a.$input.data("_inputmask").isRTL,T(a.$input);case"mask":Q=y().join(""),function(t){if((z=e(t)).is(":input")&&function(e){var t="text"==e||"tel"==e;if(!t){var a=document.createElement("input");a.setAttribute("type",e),t="text"===a.type,a=null}return t}(z.attr("type"))){if(z.data("_inputmask",{maskset:i,opts:n,isRTL:!1}),n.showTooltip&&z.prop("title",u().mask),("rtl"==t.dir||n.rightAlign)&&z.css("text-align","right"),"rtl"==t.dir||n.numericInput){t.dir="ltr",z.removeAttr("dir");var a=z.data("_inputmask");a.isRTL=!0,z.data("_inputmask",a),Z=!0}z.unbind(".inputmask"),z.closest("form").bind("submit",(function(){Q!=y().join("")&&z.change(),z[0]._valueGet&&z[0]._valueGet()==g().join("")&&z[0]._valueSet(""),n.removeMaskOnSubmit&&z.inputmask("remove")})).bind("reset",(function(){setTimeout((function(){z.triggerHandler("setvalue.inputmask")}),0)})),z.bind("mouseenter.inputmask",(function(){!e(this).is(":focus")&&n.showMaskOnHover&&this._valueGet()!=y().join("")&&S(this,y())})).bind("blur.inputmask",(function(t){var a=e(this);if(a.data("_inputmask")){var i=this._valueGet(),r=y().slice();te=!0,Q!=r.join("")&&setTimeout((function(){a.change(),Q=r.join("")}),0),""!=i&&(n.clearMaskOnLostFocus&&(i==g().join("")?r=[]:B(r)),!1===I(r)&&(a.trigger("incomplete"),n.clearIncomplete&&(c(),r=n.clearMaskOnLostFocus?[]:g().slice())),S(this,r,void 0,t))}})).bind("focus.inputmask",(function(){var t=(e(this),this),a=t._valueGet();n.showMaskOnFocus&&(!n.showMaskOnHover||n.showMaskOnHover&&""==a)&&t._valueGet()!=y().join("")&&S(t,y(),M(p())),Q=y().join("")})).bind("mouseleave.inputmask",(function(){var t=e(this);if(n.clearMaskOnLostFocus){var a=y().slice(),i=this._valueGet();t.is(":focus")||i==t.attr("placeholder")||""==i||(i==g().join("")?a=[]:B(a),S(this,a))}})).bind("click.inputmask",(function(){var t=this;if(e(this).is(":focus")){var a=G(t);if(a.begin==a.end)if(n.radixFocus&&""!=n.radixPoint&&-1!=e.inArray(n.radixPoint,y())&&(te||y().join("")==g().join("")))G(t,e.inArray(n.radixPoint,y())),te=!1;else{var i=Z?D(a.begin):a.begin,r=M(p(i));G(t,r>i?C(i)?i:M(i):r)}}})).bind("dblclick.inputmask",(function(){var e=this;setTimeout((function(){G(e,0,M(p()))}),0)})).bind(l+".inputmask dragdrop.inputmask drop.inputmask",N).bind("setvalue.inputmask",(function(){var e=this;j(e,!0,!1),Q=y().join(""),(n.clearMaskOnLostFocus||n.clearIncomplete)&&e._valueGet()==g().join("")&&e._valueSet("")})).bind("cut.inputmask",(function(t){X=!0;var a=this,i=e(a),r=G(a);K(a,e.inputmask.keyCode.DELETE,r),S(a,y(),u().p,t,Q!=y().join("")),a._valueGet()==g().join("")&&i.trigger("cleared"),n.showTooltip&&i.prop("title",u().mask)})).bind("complete.inputmask",n.oncomplete).bind("incomplete.inputmask",n.onincomplete).bind("cleared.inputmask",n.oncleared),z.bind("keydown.inputmask",R).bind("keypress.inputmask",L),s||z.bind("compositionstart.inputmask",U).bind("compositionupdate.inputmask",W).bind("compositionend.inputmask",q),"paste"===l&&z.bind("input.inputmask",H),function(t){var a,i;t._valueGet||(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(t,"value"),document.__lookupGetter__&&t.__lookupGetter__("value")?(a=t.__lookupGetter__("value"),i=t.__lookupSetter__("value"),t.__defineGetter__("value",(function(){var t=e(this),i=e(this).data("_inputmask");return i?i.opts.autoUnmask?t.inputmask("unmaskedvalue"):a.call(this)!=g().join("")?a.call(this):"":a.call(this)})),t.__defineSetter__("value",(function(t){var a=e(this).data("_inputmask");a?(i.call(this,e.isFunction(a.opts.onBeforeMask)&&a.opts.onBeforeMask.call(se,t,a.opts)||t),e(this).triggerHandler("setvalue.inputmask")):i.call(this,t)}))):(a=function(){return t.value},i=function(e){t.value=e},function(t){if(null==e.valHooks[t]||1!=e.valHooks[t].inputmaskpatch){var a=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},i=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(t){var i=e(t);if(i.data("_inputmask")){if(i.data("_inputmask").opts.autoUnmask)return i.inputmask("unmaskedvalue");var n=a(t),r=i.data("_inputmask").maskset._buffer;return n!=(r=r?r.join(""):"")?n:""}return a(t)},set:function(t,a){var n,r=e(t),o=r.data("_inputmask");return o?(n=i(t,e.isFunction(o.opts.onBeforeMask)&&o.opts.onBeforeMask.call(se,a,o.opts)||a),r.triggerHandler("setvalue.inputmask")):n=i(t,a),n},inputmaskpatch:!0}}}(t.type),function(t){e(t).bind("mouseenter.inputmask",(function(){var t=e(this),a=this._valueGet();""!=a&&a!=y().join("")&&(this._valueSet(e.isFunction(n.onBeforeMask)&&n.onBeforeMask.call(se,a,n)||a),t.triggerHandler("setvalue.inputmask"))}));//!! the bound handlers are executed in the order they where bound
var a=e._data(t).events.mouseover;if(a){for(var i=a[a.length-1],r=a.length-1;r>0;r--)a[r]=a[r-1];a[0]=i}}(t)),t._valueGet=function(e){return Z&&!0!==e?a.call(this).split("").reverse().join(""):a.call(this)},t._valueSet=function(e){i.call(this,Z?e.split("").reverse().join(""):e)})}(t);var r=e.isFunction(n.onBeforeMask)&&n.onBeforeMask.call(t,t._valueGet(),n)||t._valueGet();j(t,!0,!1,r.split(""));var o,f=y().slice();Q=f.join("");try{o=document.activeElement}catch(e){}!1===I(f)&&n.clearIncomplete&&c(),n.clearMaskOnLostFocus&&(f.join("")==g().join("")?f=[]:B(f)),S(t,f),o===t&&G(t,M(p())),function(t){var a=e._data(t).events;e.each(a,(function(t,a){e.each(a,(function(e,t){if("inputmask"==t.namespace&&"setvalue"!=t.type){var a=t.handler;t.handler=function(e){if(!this.disabled&&(!this.readOnly||"keydown"==e.type&&e.ctrlKey&&67==e.keyCode)){switch(e.type){case"input":if(!0===X)return X=!1,e.preventDefault();break;case"keydown":Y=!1;break;case"keypress":if(!0===Y)return e.preventDefault();Y=!0;break;case"compositionstart":break;case"compositionupdate":X=!0}return a.apply(this,arguments)}e.preventDefault()}}}))}))}(t)}}(a.el);break;case"format":(z=e({})).data("_inputmask",{maskset:i,opts:n,isRTL:n.numericInput}),n.numericInput&&(Z=!0);var ae=(e.isFunction(n.onBeforeMask)&&n.onBeforeMask.call(z,a.value,n)||a.value).split("");return j(z,!1,!1,Z?ae.reverse():ae),e.isFunction(n.onBeforeWrite)&&n.onBeforeWrite.call(this,void 0,y(),0,n),a.metadata?{value:Z?y().slice().reverse().join(""):y().join(""),metadata:z.inputmask("getmetadata")}:Z?y().slice().reverse().join(""):y().join("");case"isValid":(z=e({})).data("_inputmask",{maskset:i,opts:n,isRTL:n.numericInput}),n.numericInput&&(Z=!0);ae=a.value.split("");j(z,!1,!0,Z?ae.reverse():ae);for(var ie=y(),ne=F(),re=ie.length-1;re>ne&&!C(re);re--);return ie.splice(ne,re+1-ne),I(ie)&&a.value==ie.join("");case"getemptymask":return z=e(a.el),i=z.data("_inputmask").maskset,n=z.data("_inputmask").opts,g();case"remove":var oe,se=a.el;z=e(se),i=z.data("_inputmask").maskset,n=z.data("_inputmask").opts,se._valueSet(T(z)),z.unbind(".inputmask"),z.removeData("_inputmask"),Object.getOwnPropertyDescriptor&&(oe=Object.getOwnPropertyDescriptor(se,"value")),oe&&oe.get?se._valueGet&&Object.defineProperty(se,"value",{get:se._valueGet,set:se._valueSet}):document.__lookupGetter__&&se.__lookupGetter__("value")&&se._valueGet&&(se.__defineGetter__("value",se._valueGet),se.__defineSetter__("value",se._valueSet));try{delete se._valueGet,delete se._valueSet}catch(e){se._valueGet=void 0,se._valueSet=void 0}break;case"getmetadata":if(z=e(a.el),i=z.data("_inputmask").maskset,n=z.data("_inputmask").opts,e.isArray(i.metadata)){for(var le,ue=p(),ce=ue;ce>=0;ce--)if(u().validPositions[ce]&&null!=u().validPositions[ce].alternation){le=u().validPositions[ce].alternation;break}return null!=le?i.metadata[u().validPositions[ue].locator[le]]:i.metadata[0]}return i.metadata}}if(void 0===e.fn.inputmask){var r=navigator.userAgent,o=null!==r.match(new RegExp("iphone","i")),s=(r.match(new RegExp("android.*safari.*","i")),r.match(new RegExp("android.*chrome.*","i")),null!==r.match(new RegExp("android.*firefox.*","i"))),l=(/Kindle/i.test(r)||/Silk/i.test(r)||/KFTT/i.test(r)||/KFOT/i.test(r)||/KFJWA/i.test(r)||/KFJWI/i.test(r)||/KFSOWI/i.test(r)||/KFTHWA/i.test(r)||/KFTHWI/i.test(r)||/KFAPWA/i.test(r)||/KFAPWI/i.test(r),t("paste")?"paste":t("input")?"input":"propertychange");e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:e.noop,onBeforeMask:void 0,onBeforePaste:void 0,onBeforeWrite:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixFocus:!1,nojumps:!1,nojumpsThreshold:0,keepStatic:void 0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,canClearPosition:e.noop,postValidation:void 0},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},masksCache:{},escapeRegex:function(e){return e.replace(new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim"),"\\$1")},format:function(t,r,o){var s=e.extend(!0,{},e.inputmask.defaults,r);return a(s.alias,r,s),n({action:"format",value:t,metadata:o},i(s),s)},isValid:function(t,r){var o=e.extend(!0,{},e.inputmask.defaults,r);return a(o.alias,r,o),n({action:"isValid",value:t},i(o),o)}},e.fn.inputmask=function(t,r){function o(t,i,n){var r=e(t);for(var o in r.data("inputmask-alias")&&a(r.data("inputmask-alias"),{},i),i){var s=r.data("inputmask-"+o.toLowerCase());null!=s&&("mask"==o&&0==s.indexOf("[")?(i[o]=s.replace(/[\s[\]]/g,"").split("','"),i[o][0]=i[o][0].replace("'",""),i[o][i[o].length-1]=i[o][i[o].length-1].replace("'","")):i[o]="boolean"==typeof s?s:s.toString(),n&&(n[o]=i[o]))}return i}var s,l=e.extend(!0,{},e.inputmask.defaults,r);if("string"==typeof t)switch(t){case"mask":return a(l.alias,r,l),null==(s=i(l))?this:this.each((function(){n({action:"mask",el:this},e.extend(!0,{},s),o(this,l))}));case"unmaskedvalue":var u=e(this);return u.data("_inputmask")?n({action:"unmaskedvalue",$input:u}):u.val();case"remove":return this.each((function(){e(this).data("_inputmask")&&n({action:"remove",el:this})}));case"getemptymask":return this.data("_inputmask")?n({action:"getemptymask",el:this}):"";case"hasMaskedValue":return!!this.data("_inputmask")&&!this.data("_inputmask").opts.autoUnmask;case"isComplete":return!this.data("_inputmask")||n({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this});case"getmetadata":return this.data("_inputmask")?n({action:"getmetadata",el:this}):void 0;default:return a(l.alias,r,l),a(t,r,l)||(l.mask=t),null==(s=i(l))?this:this.each((function(){n({action:"mask",el:this},e.extend(!0,{},s),o(this,l))}))}else{if("object"==typeof t)return a((l=e.extend(!0,{},e.inputmask.defaults,t)).alias,t,l),null==(s=i(l))?this:this.each((function(){n({action:"mask",el:this},e.extend(!0,{},s),o(this,l))}));if(null==t)return this.each((function(){var t=e(this).attr("data-inputmask");if(t&&""!=t)try{t=t.replace(new RegExp("'","g"),'"');var i=e.parseJSON("{"+t+"}");e.extend(!0,i,r),a((l=o(this,l=e.extend(!0,{},e.inputmask.defaults,i))).alias,i,l),l.alias=void 0,e(this).inputmask("mask",l)}catch(e){}if(e(this).attr("data-inputmask-mask")||e(this).attr("data-inputmask-alias")){var n={};a((l=o(this,l=e.extend(!0,{},e.inputmask.defaults,{}),n)).alias,n,l),l.alias=void 0,e(this).inputmask("mask",l)}}))}}}return e.fn.inputmask})),$(document).ready((function(){window.location.href.indexOf("/ua/"),$('input[name="phone"]').inputmask("+375999999999",{clearIncomplete:!0}).attr("type","tel")}));