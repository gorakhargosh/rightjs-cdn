/**
 * RightJS UI Slider unit
 * http://rightjs.org/ui/slider
 *
 * Copyright (C) 2009-2010 Nikolay Nemshilov
 */
var Slider=RightJS.Slider=function(i,k,d){var h=d.$,m=d.$$,n=d.$w,l=d.$E,o=d.$A,p=d.isHash,q=d.Element,g=new (function(a,b){if(!b){b=a;a="DIV"}var f=new d.Class(d.Element.Wrappers[a]||d.Element,{initialize:function(c,e){this.key=c;var j=[{"class":"rui-"+c}];this instanceof d.Input||this instanceof d.Form||j.unshift(a);this.$super.apply(this,j);if(d.isString(e))e=d.$(e);if(e instanceof d.Element){this._=e._;if("$listeners"in e)e.$listeners=e.$listeners;e={}}this.setOptions(e,this);return d.Wrapper.Cache[d.$uid(this._)]=
this},setOptions:function(c,e){if(e)c=d.Object.merge(c,(new Function("return "+(e.get("data-"+this.key)||"{}")))());c&&d.Options.setOptions.call(this,Object.merge(this.options,c));return this}});f=new d.Class(f,b);d.Observer.createShortcuts(f.prototype,f.EVENTS||[]);return f})({include:{assignTo:function(a){var b=d(function(c,e){if(c=h(c))c[c.setValue?"setValue":"update"](e.target.getValue())}).curry(a),f=d(function(c,e){(c=h(c))&&c.onChange&&c.onChange(d(function(){this.setValue(c.value())}).bind(e))}).curry(a);
if(h(a)){b({target:this});f(this)}else h(i).onReady(d(function(){b({target:this});f(this)}.bind(this)));return this.onChange(b)}},extend:{version:"2.2.1",EVENTS:n("change"),Options:{min:0,max:100,snap:0,value:null,direction:"x",update:null,round:0},current:false},initialize:function(){var a=o(arguments).compact(),b=a.pop();a=a.pop();if(!p(b)||b instanceof q){a=h(a||b);b={}}this.$super("slider",a).setOptions(b).on("selectstart","stopEvent");this.level=this.first(".level")||l("div",{"class":"level"}).insertTo(this);
this.handle=this.first(".handle")||l("div",{"class":"handle"}).insertTo(this);b=this.options;this.value=b.value===null?b.min:b.value;b.update&&this.assignTo(b.update);if(b.direction==="y")this.addClass("rui-slider-vertical");else if(this.hasClass("rui-slider-vertical"))b.direction="y";this.setValue(this.value)},setValue:function(a){return this.precalc().shiftTo(a)},getValue:function(){return this.value},insertTo:function(a,b){return this.$super(a,b).setValue(this.value)},precalc:function(){var a=
this.options.direction==="x",b=this.handle.setStyle(a?{left:0}:{bottom:0}).dimensions(),f=this.hSize=a?b.width:b.height,c=this.dims=this.dimensions();this.offset=a?b.left-c.left:c.top+c.height-b.top-f;this.space=(a?c.width-f-this.offset*2:c.height-f)-this.offset*2;return this},start:function(a){return this.precalc().e2val(a)},move:function(a){return this.e2val(a)},shiftTo:function(a){var b=this.options,f=k.pow(10,b.round),c=b.direction==="x";a=k.round(a*f)/f;if(a<b.min)a=b.min;if(a>b.max)a=b.max;
if(b.snap){f=b.snap;var e=a%f;a=e<f/2?a-e:a-e+f}b=this.space/(b.max-b.min)*(a-b.min);this.handle._.style[c?"left":"bottom"]=b+"px";this.level._.style[c?"width":"height"]=(b>0?b:0)+2+"px";if(a!==this.value){this.value=a;this.fire("change",{value:a})}return this},e2val:function(a){var b=this.options,f=b.direction==="x",c=this.dims,e=this.offset,j=this.space;a=a.position()[f?"x":"y"]-e-this.hSize/2;c=(b.max-b.min)/j*(a-(f?c.left+e:c.top+e));return this.shiftTo(f?b.min+c:b.max-c)}});h(i).on({ready:function(){m(".rui-slider").each(function(a){a instanceof
g||new g(a)})},mousedown:function(a){var b=a.find(".rui-slider");if(b){a.stop();b instanceof g||(b=new g(b));g.current=b.start(a)}},mousemove:function(a){g.current&&g.current.move(a)},mouseup:function(){if(g.current)g.current=false}});h(window).onBlur(function(){if(g.current)g.current=false});(function(){var a=i.createElement("style"),b=i.createTextNode("div.rui-slider,div.rui-slider .handle div.rui-slider .level{margin:0;padding:0;border:none;background:none}div.rui-slider{height:0.4em;width:20em;border:1px solid #bbb;background:#F8F8F8;border-radius:.2em;-moz-border-radius:.2em;-webkit-border-radius:.2em;position:relative;margin:.6em 0;display:inline-block; *display:inline; *zoom:1;vertical-align:middle;user-select:none;-moz-user-select:none;-webkit-user-select:none;cursor:pointer}div.rui-slider .handle{font-size:25%;position:absolute;left:0;top:0;width:4pt;height:10pt;margin-top:-4pt;margin-left:0.4em;background:#BBB;border:1px solid #999;border-radius:.8em;-moz-border-radius:.8em;-webkit-border-radius:.8em;z-index:20}div.rui-slider .level{font-size:25%;position:absolute;top:0;left:0;width:0;height:100%;background:#ddd;z-index:1}div.rui-slider-vertical{height:10em;width:0.4em;margin:0 .3em}div.rui-slider-vertical .handle{top:auto;bottom:0;margin:0;margin-left:-4pt;margin-bottom:0.4em;height:5pt;width:10pt}div.rui-slider-vertical .level{height:0;width:100%;top:auto;bottom:0}");
a.type="text/css";i.getElementsByTagName("head")[0].appendChild(a);if(a.styleSheet)a.styleSheet.cssText=b.nodeValue;else a.appendChild(b)})();return g}(document,Math,RightJS);
