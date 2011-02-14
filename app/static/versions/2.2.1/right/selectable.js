/**
 * Selectable unit for RightJS
 * http://rightjs.org/ui/selectable
 *
 * Copyright (C) 2009-2010 Nikolay Nemshilov
 */
var Selectable=RightJS.Selectable=function(i,d){var g=d.$,q=d.$$,r=d.$w,j=d.$E,n=d.$A,o=d.Object,s=d.isHash,l=d.isArray,m=d.isString,t=d.isNumber,u=d.defined,v=d.Input,p=d.Element,k=new (function(a,b){if(!b){b=a;a="DIV"}var e=new d.Class(d.Element.Wrappers[a]||d.Element,{initialize:function(c,f){this.key=c;var h=[{"class":"rui-"+c}];this instanceof d.Input||this instanceof d.Form||h.unshift(a);this.$super.apply(this,h);if(d.isString(f))f=d.$(f);if(f instanceof d.Element){this._=f._;if("$listeners"in
f)f.$listeners=f.$listeners;f={}}this.setOptions(f,this);return d.Wrapper.Cache[d.$uid(this._)]=this},setOptions:function(c,f){if(f)c=d.Object.merge(c,(new Function("return "+(f.get("data-"+this.key)||"{}")))());c&&d.Options.setOptions.call(this,o.merge(this.options,c));return this}});e=new d.Class(e,b);d.Observer.createShortcuts(e.prototype,e.EVENTS||[]);return e})("UL",{include:{assignTo:function(a){var b=d(function(c,f){if(c=g(c))c[c.setValue?"setValue":"update"](f.target.getValue())}).curry(a),
e=d(function(c,f){(c=g(c))&&c.onChange&&c.onChange(d(function(){this.setValue(c.value())}).bind(f))}).curry(a);if(g(a)){b({target:this});e(this)}else g(i).onReady(d(function(){b({target:this});e(this)}.bind(this)));return this.onChange(b)}},extend:{version:"2.2.2",EVENTS:r("change select unselect disable enable hover leave show hide"),Options:{options:null,selected:null,disabled:null,multiple:true,fxName:"slide",fxDuration:"short",update:null,parseIds:false,limit:null,hCont:"&bull;"},rescan:function(a){g(a||
i).find(".rui-selectable").each(function(b){b instanceof k||new k(b)})}},initialize:function(){var a=n(arguments).compact(),b=a.pop();a=a.pop();var e;if(!s(b)||b instanceof p){a=g(a||b);b=null}if(a&&(a=g(a))instanceof v){this.selectbox=e=a;b=o.merge(this.harvestOptions(a),b);a=null}this.$super("selectable",a).setOptions(b).on({mousedown:this._mousedown,mouseover:this._mouseover,mouseout:this._mouseout,mouseup:this._mouseup,click:this._click,select:this._change,unselect:this._change});this.empty()&&
this.build();b=this.options;if(!b.multiple||this.hasClass("rui-selectable-single")){this.isSingle=true;this.addClass("rui-selectable-single");this.buildSingle();b.selected===null&&this.select(this.items()[0])}b.disabled&&this.disable(b.disabled);b.selected&&this.select(b.selected);b.update&&this.assignTo(b.update);if(e){this.assignTo(e).insertTo(e,"before");e.wrap(j("div",{style:"position:absolute;z-index:-1;visibility:hidden;width:0;height:0;overflow:hidden"}))}},setValue:function(a){if(m(a))a=a.split(",").map("trim").filter(function(b){return!b.blank()});
this.items().each("removeClass","rui-selectable-selected");return this.select(a)},getValue:function(){if(this.isSingle){var a=this.items().first("hasClass","rui-selectable-selected");return a?this.itemValue(a):null}else return this.items().filter("hasClass","rui-selectable-selected").map(function(b){return this.itemValue(b)},this)},disable:function(a){this.mapOrAll(a).each(function(b){this.fire("disable",b.addClass("rui-selectable-disabled"))},this);return this},enable:function(a){this.mapOrAll(a).each(function(b){this.fire("enable",
b.removeClass("rui-selectable-disabled"))},this);return this},disabled:function(a){return this.mapOrAll(a).every("hasClass","rui-selectable-disabled")},select:function(a){a=this.mapEnabled(a);if(this.isSingle&&a){this.items().each("removeClass","rui-selectable-selected");a=d([a[0]])}if(!this.isSingle&&this.options.limit){for(var b=this.items().filter("hasClass","rui-selectable-selected"),e=[];a.length&&b.length+e.length<this.options.limit;){var c=a.shift();b.include(c)||e.push(c)}a=e}a.compact().each(function(f){this.fire("select",
f.addClass("rui-selectable-selected"))},this);return this},unselect:function(a){this.getValue();this.mapEnabled(a).each(function(b){this.fire("unselect",b.removeClass("rui-selectable-selected"))},this);return this},selected:function(a){return this.mapEnabled(a).every("hasClass","rui-selectable-selected")},insertTo:function(a,b){this.$super.call(this.isSingle?this.container:this,a,b);return this},remove:function(){this.$super.call(this.isSingle?this.container:this);return this},fire:function(a,b){b&&
b instanceof p?this.$super(a,{item:b,index:this.items().indexOf(b)}):this.$super.apply(this,arguments);return this},itemValue:function(a){var b=d([a._value,a.get("id")||a.get("val")]).compact()[0];return b!==undefined?this.options.parseIds?b.match(/\d+/):b:this.items().indexOf(a)},items:function(){return this.find("li")},mapOrAll:function(a){var b=this.items();if(u(a)){l(a)||(a=[a]);b=d(a).map(function(e){var c=m(e)&&/^\d+$/.test(e)?parseInt(e,10):e,f=e;if(t(c))f=b[c];else if(m(e))f=b.first(function(h){return h.id==
e||h.val==e});return f},this).compact()}return b},mapEnabled:function(a){return this.mapOrAll(a).filter(function(b){return!b.hasClass("rui-selectable-disabled")},this)},_mousedown:function(a){a.stop();var b=a.target,e=this.items();if(e.include(b)&&!this.disabled(b)){if(this.isSingle)this.select(b);else if(this.selected(b)){this.unselect(b);this._massRemove=true}else{this.select(b);this._massSelect=true}if((a.shiftKey||a.metaKey)&&this._prevItem){var c=e.indexOf(this._prevItem);a=e.indexOf(b);if(c!=
a){if(c>a)a=c=a;for(c=c;c<a;c++)this[this._prevItem.hasClass("rui-selectable-selected")?"select":"unselect"](e[c])}}this._prevItem=b}},_mouseup:function(a){a.stop();this._massRemove=this._massSelect=false},_mouseover:function(a){a=a.target;this.fire("hover",a);if(!this.isSingle)if(this._massSelect)this.select(a);else this._massRemove&&this.unselect(a)},_mouseout:function(a){this.fire("leave",a.target)},_click:function(a){a.stop()},_change:function(){if(""+this.value!=""+this.getValue()){this.value=
this.getValue();this.fire("change")}},build:function(){var a=this.options.options,b=d([]);if(l(a))a.each(function(c){b.push(l(c)?c:[c,c])});else for(var e in a)b.push([a[e],e]);b.each(function(c){var f=j("li",{val:c[1],html:c[0]});f._value=c[1];this.insert(f)},this);return this},buildSingle:function(){this.container=j("div",{"class":"rui-selectable-container"}).insert([this.trigger=j("div",{html:this.options.hCont,"class":"rui-selectable-handle"}),this.display=j("ul",{"class":"rui-selectable-display"})]).onClick(d(this.toggleList).bind(this));
this.parent()&&this.container.insertTo(this,"instead");this.container.insert(this);g(i).onClick(d(this.hideList).bind(this));return this.onSelect("showItem").onSelect("hideList").addClass("rui-dd-menu")},toggleList:function(a){a.stop();return this.visible()?this.hideList():this.showList(a)},showList:function(a){a.stop();q(".rui-selectable-single").without(this).each("hide");a=this.container.dimensions();var b=this.container.position();this.setStyle({top:a.top+a.height-b.y-1+"px",left:a.left-b.x+"px",
width:a.width+"px"}).show(this.options.fxName,{duration:this.options.fxDuration,onFinish:this.fire.bind(this,"show",this)});this.options.fxName||this.fire("show",this)},hideList:function(){if(this.isSingle&&this.visible()){this.hide(this.options.fxName,{duration:this.options.fxDuration,onFinish:this.fire.bind(this,"hide")});this.options.fxName||this.fire("hide")}},showItem:function(){var a=this.items().first("hasClass","rui-selectable-selected")||this.items().first();this.display.html("<li>"+(a?a.html():
"&nbsp;")+"</li>")},harvestOptions:function(a){var b=(new Function("return "+a.get("data-selectable")))()||{};b.multiple=a._.type=="select-multiple";b.options=d([]);b.selected=d([]);b.disabled=d([]);n(a._.getElementsByTagName("OPTION")).each(function(e,c){var f=e.innerHTML,h=e.getAttribute("value");b.options.push([f,h===null?f:h]);e.selected&&!a._.disabled&&b.selected.push(c);if(e.disabled||a._.disabled)b.disabled.push(c)});if(b.selected.empty())b.selected=0;return b}});g(i).onReady(function(){k.rescan()});
(function(){var a=i.createElement("style"),b=i.createTextNode(" *.rui-dd-menu, *.rui-dd-menu li{margin:0;padding:0;border:none;background:none;list-style:none;font-weight:normal;float:none} *.rui-dd-menu{display:none;position:absolute;z-index:9999;background:white;border:1px solid #BBB;border-radius:.2em;-moz-border-radius:.2em;-webkit-border-radius:.2em;box-shadow:#DDD .2em .2em .4em;-moz-box-shadow:#DDD .2em .2em .4em;-webkit-box-shadow:#DDD .2em .2em .4em} *.rui-dd-menu li{padding:.2em .4em;border-top:none;border-bottom:none;cursor:pointer} *.rui-dd-menu li.current{background:#DDD} *.rui-dd-menu li:hover{background:#EEE}dl.rui-dd-menu dt{padding:.3em .5em;cursor:default;font-weight:bold;font-style:italic;color:#444;background:#EEE}dl.rui-dd-menu dd li{padding-left:1.5em} *.rui-selectable, *.rui-selectable li, *.rui-selectable dt, *.rui-selectable dd, *.rui-selectable ul,div.rui-selectable-container ul.rui-selectable-display,div.rui-selectable-container ul.rui-selectable-display li{margin:0;padding:0;border:none;background:none;list-style:none} *.rui-selectable{border:1px solid #CCC;border-bottom:none;display:inline-block; *display:inline; *zoom:1;min-width:10em;border-radius:.2em;-moz-border-radius:.2em;-webkit-border-radius:.2em;user-select:none;-moz-user-select:none;-webkit-user-select:none} *.rui-selectable li{padding:.3em 1em;cursor:pointer;border-bottom:1px solid #CCC} *.rui-selectable li:hover{background:#EEE} *.rui-selectable li.rui-selectable-selected{font-weight:bold;background:#DDD} *.rui-selectable li.rui-selectable-disabled, *.rui-selectable li.rui-selectable-disabled:hover{background:#CCC;color:#777;cursor:default}dl.rui-selectable dt{padding:.3em .5em;cursor:default;font-weight:bold;font-style:italic;color:#444;background:#EEE;border-bottom:1px solid #CCC}dl.rui-selectable dd li{padding-left:1.5em} *.rui-selectable-single{background:#FFF;display:none} *.rui-selectable-single li{overflow:hidden}div.rui-selectable-container{border:1px solid #CCC;border-radius:.2em;-moz-border-radius:.2em;-webkit-border-radius:.2em;display:inline-block; *display:inline; *zoom:1; *width:10em;vertical-align:middle;min-width:10em;cursor:pointer;height:1.6em;position:relative}div.rui-selectable-container div.rui-selectable-handle{font-family:Arial;position:absolute;right:0;width:0.8em;background:#DDD;text-align:center;height:100%;line-height:0.8em;font-size:200%;color:#888;border-left:1px solid #CCC}div.rui-selectable-container:hover div.rui-selectable-handle{color:#666}div.rui-selectable-container ul.rui-selectable-display{display:block;width:auto;overflow:hidden;margin-right:2em}div.rui-selectable-container ul.rui-selectable-display li{line-height:1.6em;padding:0 .5em;overflow:hidden;width:100%;white-space:nowrap}select.rui-selectable{visibility:hidden}");
a.type="text/css";i.getElementsByTagName("head")[0].appendChild(a);if(a.styleSheet)a.styleSheet.cssText=b.nodeValue;else a.appendChild(b)})();return k}(document,RightJS);
