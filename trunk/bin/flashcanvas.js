/*
 * FlashCanvas
 *
 * Copyright (c) 2009      Tim Cameron Ryan
 * Copyright (c) 2009-2010 FlashCanvas Project
 * Released under the MIT/X License
 */
window.ActiveXObject&&!window.CanvasRenderingContext2D&&!(document.documentMode>=9)&&function(){function r(a){var b=a.b;arguments.callee[b]||(arguments.callee[b]=0);return arguments.callee[b]++}function s(){if(document.readyState==="complete"){document.detachEvent(t,s);for(var a=document.getElementsByTagName("canvas"),b=0,c=a.length;b<c;++b){var d=a[b];d.getContext||p.initElement(d)}}}function u(){var a=window.event,b=a.propertyName;if(b==="width"||b==="height"){a=a.srcElement;var c=a.getContext("2d"),
d=parseInt(a[b]);if(isNaN(d)||d<0)d=b==="width"?300:150;else if(d===0)d=1;a.style[b]=d+"px";c.H(a.clientWidth,a.clientHeight)}}function v(){var a=window.event.srcElement,b=a.parentNode;a.blur();b.focus()}function w(){window.detachEvent(x,w);for(var a=document.getElementsByTagName("canvas"),b=0,c=a.length;b<c;++b){var d=a[b],f=d.firstChild,g;for(g in f)if(typeof f[g]==="function")f[g]=null;for(g in d)if(typeof d[g]==="function")d[g]=null;d.detachEvent(y,u);f.detachEvent(z,v)}window[A]=null;window[B]=
null;window[C]=null;window[D]=null;window[E]=null}function F(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;")}var A="CanvasRenderingContext2D",B="CanvasGradient",C="CanvasPattern",D="FlashCanvas",E="G_vmlCanvasManager",z="onfocus",y="onpropertychange",t="onreadystatechange",x="onunload",j=function(){var a=document.getElementsByTagName("script");a=a[a.length-1];return document.documentMode>=8?a.src:a.getAttribute("src",4)}().replace(/[^\/]+$/,"flashcanvas.swf"),e=new function(a){for(var b=
0,c=a.length;b<c;b++)this[a[b]]=b}(["toDataURL","save","restore","scale","rotate","translate","transform","setTransform","globalAlpha","globalCompositeOperation","strokeStyle","fillStyle","createLinearGradient","createRadialGradient","createPattern","lineWidth","lineCap","lineJoin","miterLimit","shadowOffsetX","shadowOffsetY","shadowBlur","shadowColor","clearRect","fillRect","strokeRect","beginPath","closePath","moveTo","lineTo","quadraticCurveTo","bezierCurveTo","arcTo","rect","arc","fill","stroke",
"clip","isPointInPath","font","textAlign","textBaseline","fillText","strokeText","measureText","drawImage","createImageData","getImageData","putImageData","addColorStop"]),k={},h={},l={};function m(a,b){this.canvas=a;this.F=b;this.b=a.uniqueID;this.C();var c=this;window.setInterval(function(){h[c.b]===0&&c.f()},30)}m.prototype={save:function(){this.u.push({globalAlpha:this.globalAlpha,globalCompositeOperation:this.globalCompositeOperation,strokeStyle:this.strokeStyle,fillStyle:this.fillStyle,lineWidth:this.lineWidth,
lineCap:this.lineCap,lineJoin:this.lineJoin,miterLimit:this.miterLimit,shadowOffsetX:this.shadowOffsetX,shadowOffsetY:this.shadowOffsetY,shadowBlur:this.shadowBlur,shadowColor:this.shadowColor,font:this.font,textAlign:this.textAlign,textBaseline:this.textBaseline});this.c();this.d();this.h();this.g();this.p();this.o();this.a.push(e.save)},restore:function(){if(this.u.length>0){var a=this.u.pop();this.globalAlpha=a.globalAlpha;this.globalCompositeOperation=a.globalCompositeOperation;this.strokeStyle=
a.strokeStyle;this.fillStyle=a.fillStyle;this.lineWidth=a.lineWidth;this.lineCap=a.lineCap;this.lineJoin=a.lineJoin;this.miterLimit=a.miterLimit;this.shadowOffsetX=a.shadowOffsetX;this.shadowOffsetY=a.shadowOffsetY;this.shadowBlur=a.shadowBlur;this.shadowColor=a.shadowColor;this.font=a.font;this.textAlign=a.textAlign;this.textBaseline=a.textBaseline}this.a.push(e.restore)},scale:function(a,b){this.a.push(e.scale,a,b)},rotate:function(a){this.a.push(e.rotate,a)},translate:function(a,b){this.a.push(e.translate,
a,b)},transform:function(a,b,c,d,f,g){this.a.push(e.transform,a,b,c,d,f,g)},setTransform:function(a,b,c,d,f,g){this.a.push(e.setTransform,a,b,c,d,f,g)},c:function(){var a=this.a;if(this.i!==this.globalAlpha){this.i=this.globalAlpha;a.push(e.globalAlpha,this.i)}if(this.j!==this.globalCompositeOperation){this.j=this.globalCompositeOperation;a.push(e.globalCompositeOperation,this.j)}},h:function(){if(this.D!==this.strokeStyle){var a=this.D=this.strokeStyle;this.a.push(e.strokeStyle,typeof a==="object"?
a.id:a)}},g:function(){if(this.A!==this.fillStyle){var a=this.A=this.fillStyle;this.a.push(e.fillStyle,typeof a==="object"?a.id:a)}},createLinearGradient:function(a,b,c,d){this.a.push(e.createLinearGradient,a,b,c,d);this.e.push(e.createLinearGradient,a,b,c,d);return new n(this)},createRadialGradient:function(a,b,c,d,f,g){this.a.push(e.createRadialGradient,a,b,c,d,f,g);this.e.push(e.createRadialGradient,a,b,c,d,f,g);return new n(this)},createPattern:function(a,b){if(a.tagName.toUpperCase()==="IMG"){this.a.push(e.createPattern,
a.src,b);if(k[this.b]){this.f();++h[this.b]}return new G(this)}},p:function(){var a=this.a;if(this.m!==this.lineWidth){this.m=this.lineWidth;a.push(e.lineWidth,this.m)}if(this.k!==this.lineCap){this.k=this.lineCap;a.push(e.lineCap,this.k)}if(this.l!==this.lineJoin){this.l=this.lineJoin;a.push(e.lineJoin,this.l)}if(this.n!==this.miterLimit){this.n=this.miterLimit;a.push(e.miterLimit,this.n)}},d:function(){var a=this.a;if(this.s!==this.shadowOffsetX){this.s=this.shadowOffsetX;a.push(e.shadowOffsetX,
this.s)}if(this.t!==this.shadowOffsetY){this.t=this.shadowOffsetY;a.push(e.shadowOffsetY,this.t)}if(this.q!==this.shadowBlur){this.q=this.shadowBlur;a.push(e.shadowBlur,this.q)}if(this.r!==this.shadowColor){this.r=this.shadowColor;a.push(e.shadowColor,this.r)}},clearRect:function(a,b,c,d){this.a.push(e.clearRect,a,b,c,d)},fillRect:function(a,b,c,d){this.c();this.d();this.g();this.a.push(e.fillRect,a,b,c,d)},strokeRect:function(a,b,c,d){this.c();this.d();this.h();this.p();this.a.push(e.strokeRect,
a,b,c,d)},beginPath:function(){this.a.push(e.beginPath)},closePath:function(){this.a.push(e.closePath)},moveTo:function(a,b){this.a.push(e.moveTo,a,b)},lineTo:function(a,b){this.a.push(e.lineTo,a,b)},quadraticCurveTo:function(a,b,c,d){this.a.push(e.quadraticCurveTo,a,b,c,d)},bezierCurveTo:function(a,b,c,d,f,g){this.a.push(e.bezierCurveTo,a,b,c,d,f,g)},arcTo:function(a,b,c,d,f){this.a.push(e.arcTo,a,b,c,d,f)},rect:function(a,b,c,d){this.a.push(e.rect,a,b,c,d)},arc:function(a,b,c,d,f,g){this.a.push(e.arc,
a,b,c,d,f,g?1:0)},fill:function(){this.c();this.d();this.g();this.a.push(e.fill)},stroke:function(){this.c();this.d();this.h();this.p();this.a.push(e.stroke)},clip:function(){this.a.push(e.clip)},o:function(){var a=this.a;if(this.B!==this.font)try{var b=l[this.b];b.style.font=this.B=this.font;var c=b.currentStyle;a.push(e.font,[c.fontStyle,c.fontWeight,b.offsetHeight,c.fontFamily].join(" "))}catch(d){}if(this.v!==this.textAlign){this.v=this.textAlign;a.push(e.textAlign,this.v)}if(this.w!==this.textBaseline){this.w=
this.textBaseline;a.push(e.textBaseline,this.w)}},fillText:function(a,b,c,d){this.c();this.g();this.d();this.o();this.a.push(e.fillText,F(a),b,c,d||0)},strokeText:function(a,b,c,d){this.c();this.h();this.d();this.o();this.a.push(e.strokeText,F(a),b,c,d||0)},measureText:function(a){var b=l[this.b];try{b.style.font=this.font}catch(c){}b.innerText=a.replace(/[ \n\f\r]/g,"\t");return new I(b.offsetWidth)},drawImage:function(){var a=arguments,b=a.length;if(a[0].tagName.toUpperCase()==="IMG"){this.c();
this.d();if(b===3)this.a.push(e.drawImage,b,a[0].src,a[1],a[2]);else if(b===5)this.a.push(e.drawImage,b,a[0].src,a[1],a[2],a[3],a[4]);else if(b===9)this.a.push(e.drawImage,b,a[0].src,a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);else return;if(k[this.b]){this.f();++h[this.b]}}},C:function(){this.globalAlpha=this.i=1;this.globalCompositeOperation=this.j="source-over";this.fillStyle=this.A=this.strokeStyle=this.D="#000000";this.lineWidth=this.m=1;this.lineCap=this.k="butt";this.lineJoin=this.l="miter";this.miterLimit=
this.n=10;this.shadowBlur=this.q=this.shadowOffsetY=this.t=this.shadowOffsetX=this.s=0;this.shadowColor=this.r="rgba(0,0,0,0)";this.font=this.B="10px sans-serif";this.textAlign=this.v="start";this.textBaseline=this.w="alphabetic";this.a=[];this.e=[];this.u=[]},G:function(){var a=this.a;this.a=[];this.e=[];return a},f:function(){var a=this.G();if(a.length>0)return eval(this.F.CallFunction('<invoke name="postCommands" returntype="javascript"><arguments><string>'+a.join("&#0;")+"</string></arguments></invoke>"))},
H:function(a,b){this.F.resize(a,b);if(this.e.length){this.a=this.e;this.f()}this.C()}};function n(a){this.z=a;this.id=r(a)}n.prototype={addColorStop:function(a,b){this.z.a.push(e.addColorStop,this.id,a,b);this.z.e.push(e.addColorStop,this.id,a,b)}};function G(a){this.id=r(a)}function I(a){this.width=a}var p={initElement:function(a){var b=parseInt(a.getAttribute("width")),c=parseInt(a.getAttribute("height"));if(isNaN(b)||b<0)b=300;if(isNaN(c)||c<0)c=150;a.style.width=b+"px";a.style.height=c+"px";b=
a.uniqueID;c="external"+b;k[b]=false;h[b]=1;a.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="'+c+'"><param name="allowScriptAccess" value="always"><param name="flashvars" value="id='+c+'"><param name="wmode" value="transparent"></object><span style="margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap"></span>';
var d=a.firstChild;l[b]=a.lastChild;var f=document.body.contains;if(f(a))d.movie=j;else var g=window.setInterval(function(){if(f(a)){window.clearInterval(g);d.movie=j}},0);if(document.compatMode==="BackCompat"||!window.XMLHttpRequest)l[b].style.overflow="hidden";var o=new m(a,d);a.getContext=function(i){return i==="2d"?o:null};a.toDataURL=function(){var i=arguments,q=i[0]?i[0].toLowerCase():"image/png";q==="image/jpeg"?o.a.push(e.toDataURL,q,i[1]||0.5):o.a.push(e.toDataURL,q);return o.f()};d.attachEvent(z,
v);return a},unlock:function(a,b){h[a]&&--h[a];if(b){var c=document.getElementById("external"+a);c.parentNode.attachEvent(y,u);c.resize(c.clientWidth,c.clientHeight);k[a]=true}},trigger:function(a,b){document.getElementById("external"+a).parentNode.fireEvent("on"+b)}};document.createElement("canvas");document.createStyleSheet().cssText="canvas{display:inline-block;overflow:hidden;width:300px;height:150px}";document.attachEvent(t,s);window.attachEvent(x,w);if(j.indexOf(location.protocol+"//"+location.host+
"/")===0){var H=new ActiveXObject("Microsoft.XMLHTTP");H.open("GET",j,false);H.send(null)}window[A]=m;window[B]=n;window[C]=G;window[D]=p;window[E]={init:function(){},init_:function(){},initElement:p.initElement};keep=m.measureText}();
