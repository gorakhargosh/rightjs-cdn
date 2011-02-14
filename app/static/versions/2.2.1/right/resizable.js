/**
 * Resizable unit for RightJS
 * http://rightjs.org/ui/resizable
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */
var Resizable=RightJS.Resizable=function(k,c){var l=c.$,m=c.$w,n=c.$E,s=c.Element,h=new (function(a,b){if(!b){b=a;a="DIV"}var g=new c.Class(c.Element.Wrappers[a]||c.Element,{initialize:function(e,d){this.key=e;var f=[{"class":"rui-"+e}];this instanceof c.Input||this instanceof c.Form||f.unshift(a);this.$super.apply(this,f);if(c.isString(d))d=c.$(d);if(d instanceof c.Element){this._=d._;if("$listeners"in d)d.$listeners=d.$listeners;d={}}this.setOptions(d,this);return c.Wrapper.Cache[c.$uid(this._)]=
this},setOptions:function(e,d){if(d)e=c.Object.merge(e,(new Function("return "+(d.get("data-"+this.key)||"{}")))());e&&c.Options.setOptions.call(this,Object.merge(this.options,e));return this}});g=new c.Class(g,b);c.Observer.createShortcuts(g.prototype,g.EVENTS||[]);return g})({extend:{version:"2.2.2",EVENTS:m("resize start release"),Options:{direction:null,minWidth:null,maxWidth:null,minHeight:null,maxHeight:null}},initialize:function(a,b){this.$super("resizable",this.old_inst=l(a)).setOptions(b);
this.options.direction?this.addClass("rui-resizable-"+this.options.direction):this.addClass("rui-resizable");this.content=this.first(".rui-resizable-content")||n("div",{"class":"rui-resizable-content"}).insert(this.children()).insertTo(this);this.handle=this.first(".rui-resizable-handle")||n("div",{"class":"rui-resizable-handle"}).insertTo(this);this.content.setWidth(this.size().x-parseInt(this.getStyle("borderLeftWidth"),10)-parseInt(this.getStyle("borderRightWidth"),10));this.options.direction!==
"left"&&this.options.direction!=="right"&&this.content.setHeight(this.size().y-parseInt(this.getStyle("borderTopWidth"),10)-parseInt(this.getStyle("borderBottomWidth"),10))},destroy:function(){this.removeClass("rui-resizable").removeClass("rui-resizable-top").removeClass("rui-resizable-left").removeClass("rui-resizable-right").removeClass("rui-resizable-bottom").insert(this.content._.childNodes);this.content.remove();this.handle.remove();if(this.old_inst)Wrapper.Cache[$uid(this._)]=this.old_inst;
return this},setOptions:function(a,b){a=a||{};m("top left right bottom").each(function(g){if(this.hasClass("rui-resizable-"+g))a.direction=g},this);return this.$super(a,b)},start:function(a){this.prevSizes=this.size();this.prevEvPos=a.position();this.contXDiff=this.size().x-this.content.size().x;this.contYDiff=this.size().y-this.content.size().y;m("minWidth maxWidth minHeight maxHeight").each(function(b){this[b]=this.findDim(b)},this);return this.fire("start",{original:a})},track:function(a){var b=
a.position(),g=this.prevEvPos,e=this.handle.dimensions(),d=this.prevSizes,f=d.x,i=d.y,t=g.y-b.y,o=this.minWidth,p=this.maxWidth,q=this.minHeight,r=this.maxHeight,j=this.options.direction;f+=(j==="left"?1:-1)*(g.x-b.x);i+=(j==="top"?1:-1)*t;if(f<o)f=o;if(f>p)f=p;if(i<q)i=q;if(i>r)i=r;d.x!==f&&j!=="top"&&j!=="bottom"&&this.setWidth(f);d.y!==i&&j!=="left"&&j!=="right"&&this.setHeight(i);if(f==o||f==p)b.x=e.left+e.width/2;if(i==q||i==r)b.y=e.top+e.height/2;this.prevEvPos=b;this.prevSizes=this.size();
this.fire("resize",{original:a})},setWidth:function(a){this.content.setWidth(a-this.contXDiff);return this.$super(a)},setHeight:function(a){this.content.setHeight(a-this.contYDiff);return this.$super(a)},release:function(a){return this.fire("release",{original:a})},findDim:function(a){var b=this.options[a]||this.getStyle(a);if(b&&/\d+/.test(b)&&parseFloat(b)>0){a=c(a).include("Width")?"width":"height";b=(this._dummy||(this._dummy=n("div",{style:"visibility:hidden;z-index:-1"}))).setStyle(a,b).insertTo(this,
"before");a=b._["offset"+c(a).capitalize()];b.remove();return a}}});l(k).on({mousedown:function(a){var b=a.find(".rui-resizable-handle");if(b){b=b.parent();b instanceof h||(b=new h(b));h.current=b.start(a.stop())}},mousemove:function(a){var b=h.current;b&&b.track(a)},mouseup:function(a){var b=h.current;if(b){b.release(a);h.current=null}}});l(window).onBlur(function(a){var b=h.current;if(b){b.release(a);h.current=null}});s.include({makeResizable:function(a){return new h(this,a)},undoResizable:function(){this instanceof
h&&this.destroy();return this}});(function(){var a=k.createElement("style"),b=k.createTextNode(".rui-resizable,.rui-resizable-top,.rui-resizable-left,.rui-resizable-right,.rui-resizable-bottom,.rui-resizable-content .rui-resizable-handle{margin:0;padding:0;overflow:none;border:none;background:none;width:auto;height:auto;min-width:none;max-width:none;min-height:none;max-height:none}.rui-resizable,.rui-resizable-top,.rui-resizable-left,.rui-resizable-right,.rui-resizable-bottom{position:relative;min-width:8em;min-height:8em;border:1px solid #DDD}.rui-resizable-content{overflow:auto;padding:.5em;position:relative}.rui-resizable-handle{position:absolute;background-image:url(/images/rightjs-ui/resizable.png);background-repeat:no-repeat;background-color:#DDD;cursor:move}.rui-resizable .rui-resizable-handle{right:0;bottom:0;background-position:-2px -2px;background-color:transparent;width:16px;height:16px}.rui-resizable-top .rui-resizable-handle,.rui-resizable-bottom .rui-resizable-handle{height:8px;width:100%;background-position:center -26px;cursor:row-resize}.rui-resizable-left .rui-resizable-handle,.rui-resizable-right .rui-resizable-handle{top:0px;width:8px;height:100%;background-position:-26px center;cursor:col-resize}.rui-resizable-top .rui-resizable-content{padding-top:1em}.rui-resizable-top .rui-resizable-handle{top:0}.rui-resizable-bottom .rui-resizable-content{padding-bottom:1em}.rui-resizable-bottom .rui-resizable-handle{bottom:0}.rui-resizable-left .rui-resizable-content{padding-left:1em}.rui-resizable-left .rui-resizable-handle{left:0}.rui-resizable-right .rui-resizable-content{padding-right:1em}.rui-resizable-right .rui-resizable-handle{right:0}");
a.type="text/css";k.getElementsByTagName("head")[0].appendChild(a);if(a.styleSheet)a.styleSheet.cssText=b.nodeValue;else a.appendChild(b)})();return h}(document,RightJS);
