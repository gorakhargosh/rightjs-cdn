/**
 * The JSON encode/decode feature for RightJS
 * See http://rightjs.org/plugins/json
 *
 * Copyright (C) 2009-2010 Nikolay V. Nemshilov
 */
var JSON=function(c,g){function h(a){return a.replace(i,function(d){return j[d]||"\\u"+("0000"+d.charCodeAt(0).toString(16)).slice(-4)})}function e(a){return(a<10?"0":"")+a}var b=g.JSON||{},k=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,j={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
if(!("stringify"in b))b.stringify=function(a){if(a===null)return"null";else if(a.toJSON)return a.toJSON();else switch(typeof a){case "boolean":return String(a);case "number":return String(a+0);case "string":return'"'+h(a)+'"';case "object":if(a instanceof Array)return"["+a.map(b.stringify).join(",")+"]";else if(a instanceof Date)return'"'+a.getUTCFullYear()+"-"+e(a.getUTCMonth()+1)+"-"+e(a.getUTCDate())+"T"+e(a.getUTCHours())+":"+e(a.getUTCMinutes())+":"+e(a.getUTCSeconds())+"."+e(a.getMilliseconds())+
'Z"';else{var d=[];for(var f in a)d.push(b.encode(f)+":"+b.encode(a[f]));return"{"+d.join(",")+"}"}}};if(!("parse"in b))b.parse=function(a){if(isString(a)&&a){a=a.replace(k,function(d){return"\\u"+("0000"+d.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return eval("("+a+")")}throw"JSON parse error: "+a;};c.$alias(b,
{encode:"stringify",decode:"parse"});if(c.Cookie){var l=c.Cookie.prototype.set,m=c.Cookie.prototype.get;c.Cookie.include({set:function(a){return l.call(this,b.stringify(a))},get:function(){return b.parse(m.call(this)||"null")}})}if(c.Xhr)c.Xhr.prototype.sanitizedJSON=function(){try{return b.decode(this.text)}catch(a){if(this.secureJSON)throw a;return null}};return b}(RightJS,window);
