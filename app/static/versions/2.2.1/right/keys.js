/**
 * Pretty keyboard events handler for RightJS
 * http://rightjs.org/plugins/keys
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */
(function(a){a.Event.Keys={BACKSPACE:8,TAB:9,ENTER:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46};[a.Document,a.Element,a.Window].each("include",{on:function(){var e=a.$A(arguments),c=e[0];if(typeof c==="string"){var b=c.split(/[\+\-\_ ]+/);b=(b[b.length-1]||"").toUpperCase();if(b in a.Event.Keys||/^[A-Z0-9]$/.test(b)){var i=/(^|\+|\-| )(meta|alt)(\+|\-| )/i.test(c),j=/(^|\+|\-| )(ctl|ctrl)(\+|\-| )/i.test(c),k=/(^|\+|\-| )(shift)(\+|\-| )/i.test(c),
l=a.Event.Keys[b]||b.charCodeAt(0),g=e.slice(1),f=g.shift();if(typeof f==="string")f=this[f]||function(){};e=["keydown",function(h){var d=h._;if(d.keyCode===l&&(!i||d.metaKey||d.altKey)&&(!j||d.ctrlKey)&&(!k||d.shiftKey))return f.call(this,[h].concat(g))}]}}return this.$super.apply(this,e)}})})(RightJS);
