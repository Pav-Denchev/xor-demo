(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(t,e,r){t.exports=r(265)},152:function(t,e,r){},265:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(122),i=r.n(o),l=(r(152),r(95),r(11)),c=r(27),s=r(28),h=r(39),u=r(37),d=r(40),p=r(50),f=function(t){function e(t){var r;return Object(c.a)(this,e),(r=Object(h.a)(this,Object(u.a)(e).call(this,t))).state={},r}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{style:{width:"41.66666666666667px",height:"54.16666666666667px",display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement("div",{style:{color:this.props.color,opacity:this.props.opacity,fontSize:"40px"}},this.props.col))}}]),e}(a.a.Component),g=function(t){function e(t){var r;return Object(c.a)(this,e),(r=Object(h.a)(this,Object(u.a)(e).call(this,t))).state={},r}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{width:"1000px",height:"54.16666666666667px",display:"flex",flexDirection:"row"}},this.props.row&&this.props.row.map(function(e,r){return a.a.createElement(f,{color:t.props.color,col:e,key:r,opacity:t.props.opacity})}))}}]),e}(a.a.Component),m=function(t){function e(t){var r;return Object(c.a)(this,e),(r=Object(h.a)(this,Object(u.a)(e).call(this,t))).state={},r}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",width:"100%",height:"100%"},className:"TextContainer"},this.props.letters&&this.props.letters.map(function(e,r){return a.a.createElement(g,{color:t.props.color,row:e,key:r,opacity:t.props.opacity})}))}}]),e}(a.a.Component),y=r(123),v=r.n(y),b=r(66),w=r(303),x=r(300),E=r(301),O=r(91);function L(){L=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,r){return t[e]=r}}function s(t,e,r,a){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),l=new I(a||[]);return n(i,"_invoke",{value:x(t,r,l)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var u={};function d(){}function p(){}function f(){}var g={};c(g,o,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(k([])));y&&y!==e&&r.call(y,o)&&(g=y);var v=f.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e(function(a,i){!function n(a,o,i,l){var c=h(t[a],t,o);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then(function(t){n("next",t,i,l)},function(t){n("throw",t,i,l)}):e.resolve(u).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,l)})}l(c.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return C()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=E(i,r);if(l){if(l===u)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),u;var a=h(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,u;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=f,n(v,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:p,configurable:!0}),p.displayName=c(f,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,l,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(v),c(v,l,"Generator"),c(v,o,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}var j=function(t){function e(t){var r;return Object(c.a)(this,e),(r=Object(h.a)(this,Object(u.a)(e).call(this,t))).handleOpacityChange=function(t){var e=t.rgb.a;r.setState({opacity:e})},r.handleOpacityInputChange=function(t){var e=parseInt(t.target.value);e<1||e>100||isNaN(e)||r.handleOpacityChange({rgb:{r:0,g:0,b:0,a:e/100}})},r.selectInputValue=function(t){t.target.select()},r.getRandomLetters=function(){for(var t=[],e=0;e<24;e++){for(var n=[],a=0;a<24;a++)n.push(r.getRandomLetter());t.push(n)}return t},r.rgbToGrayscale=function(t,e,r){return.2126*t+.7152*e+.0722*r},r.calcAbsolutePixel=function(t,e,r){return{r:Math.abs(Math.abs(t.r-e.r)-r.r),g:Math.abs(Math.abs(t.g-e.g)-r.g),b:Math.abs(Math.abs(t.b-e.b)-r.b)}},r.blockCellsBelowThreshhold=Object(l.a)(L().mark(function t(){return L().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(l.a)(L().mark(function t(e,n){var a,o,i,l,c,s,h;return L().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=document.querySelector(".image"),o=document.querySelector(".image1"),i=document.querySelector(".image2"),t.next=5,b.a(a,{quality:1});case 5:return l=t.sent,t.next=8,b.a(o,{quality:1});case 8:return c=t.sent,t.next=11,b.a(i,{quality:1});case 11:s=t.sent,h=[l,c,s],Promise.all(h.map(function(t){return new Promise(function(e,r){var n=new Image;n.onload=function(){return e(n)},n.onerror=r,n.src=t})})).then(function(t){for(var n,a=t[0],o=t[1],i=t[2],l=new Array(24),c=0;c<l.length;c++)l[c]=new Array(24);n=r.state.minPixelsBelowThreshhold?r.state.minPixelsBelowThreshhold:5;var s=document.createElement("canvas"),h=document.createElement("canvas"),u=document.createElement("canvas");s.width=1e3,s.height=1300,h.width=1e3,h.height=1300,u.width=1e3,u.height=1300;var d=s.getContext("2d"),p=h.getContext("2d"),f=u.getContext("2d");d.drawImage(a,0,0,1e3,1300),p.drawImage(o,0,0,1e3,1300),f.drawImage(i,0,0,1e3,1300);for(var g=d.getImageData(0,0,s.width,s.height),m=p.getImageData(0,0,h.width,h.height),y=f.getImageData(0,0,u.width,u.height),v=0,b=0,w=0;w<24;w++){for(var x=0;x<24;x++){for(var E=!1,O=0,L={row:w,col:x,x:v,y:b,grayscale:255},j=0;j<Math.round(1e3/24);j++){for(var I=0;I<Math.round(1300/24);I++){var k=r.getPx(y,Math.round(v+j),Math.round(b+I));if(0===k.r||0===k.g||0===k.b||255===k.r||255===k.g||255===k.b){var C=r.getPx(g,Math.round(v+j),Math.round(b+I)),P=r.getPx(m,Math.round(v+j),Math.round(b+I)),S=r.calcAbsolutePixel(C,P,k),T=r.rgbToGrayscale(S.r,S.g,S.b);if(T<L.grayscale&&(L={row:w,col:x,x:v+j,y:b+I,grayscale:T}),parseInt(T)<=parseInt(r.state.threshhold)&&O++,O>=n){E=!0,l[w][x]="~";break}l[w][x]=r.state.letters[w][x]}}if(E)break}console.log(L),v+=1e3/24}v=0,b+=1300/24}e(l)}).catch(function(){n()});case 14:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}},t)})),r.getPx=function(t,e,r){var n,a=new Uint32Array(t.data.buffer)[r*t.width+e],o=0,i=0,l=0,c=0;return a>0&&(n=a.toString(16),o=parseInt(n.substr(0,2),16),i=parseInt(n.substr(2,2),16),l=parseInt(n.substr(4,2),16),c=parseInt(n.substr(6,2),16)),{r:c,g:l,b:i,a:o}},r.getRandomLetter=function(){return String.fromCharCode(Math.floor(26*Math.random())+65)},r.fileChangedHandler=r.fileChangedHandler.bind(Object(p.a)(Object(p.a)(r))),r.state={threshhold:0,letters:[],backgroundImage:null,loading:!1,imageLoaded:!1,opacity:1,opacityInputValue:100,color:{hex:"#000000",rgb:{r:0,g:0,b:0}},minPixelsBelowThreshhold:5},r}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=Math.round(100*this.state.opacity);this.setState({opacityInputValue:t})}},{key:"componentDidUpdate",value:function(t,e){e.opacity!==this.state.opacity&&this.setState({opacityInputValue:Math.round(100*this.state.opacity)})}},{key:"fileChangedHandler",value:function(t){var e=this,r=!1;if(t.target.files[0]&&(r=!0),r)try{v.a.imageFileResizer(t.target.files[0],556,696,"JPEG",100,0,function(t){var r=e.getRandomLetters();e.setState({backgroundImage:t,letters:r})},"base64",556,696),this.setState({imageLoaded:!0})}catch(n){console.log(n)}}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"auto",flexDirection:"column",paddingTop:"10px",paddingBottom:"10px"},className:"App"},this.state.loading&&a.a.createElement("div",{style:{position:"absolute",backgroundColor:"white",zIndex:999,width:"100%",height:"100%"}},a.a.createElement("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},a.a.createElement(w.a,null))),a.a.createElement("div",{style:{marginBottom:"10px"}},a.a.createElement("input",{type:"file",id:"imageUpload",name:"imageUpload",onChange:this.fileChangedHandler})),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",{className:"image",style:{width:"1000px",height:"1300px",position:"relative"}},a.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},a.a.createElement("img",{alt:"",style:{width:"1000px",height:"1300px"},src:this.state.backgroundImage})),a.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},a.a.createElement("div",{style:{width:"100%",height:"100%"}},a.a.createElement(m,{letters:this.state.letters,color:this.state.color.hex,opacity:this.state.opacity})))),a.a.createElement("div",{className:"image1",style:{width:"1000px",height:"1300px",position:"relative",display:"".concat(this.state.loading?"block":"none")}},a.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},a.a.createElement("img",{alt:"",style:{width:"1000px",height:"1300px"},src:this.state.backgroundImage})),a.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},a.a.createElement("div",{style:{width:"100%",height:"100%"}},a.a.createElement(m,{letters:this.state.letters})))),a.a.createElement("div",{className:"image2",style:{width:"1000px",height:"1300px",position:"relative",backgroundColor:"white",display:"".concat(this.state.loading?"block":"none")}},a.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},a.a.createElement("div",{style:{width:"100%",height:"100%"}},a.a.createElement(m,{letters:this.state.letters}))))),a.a.createElement("div",{style:{display:"flex",alignItems:"center",width:"25%",marginTop:"10px"}},a.a.createElement("div",{style:{position:"relative",width:"316px",height:"16px"}},a.a.createElement(O.a,{color:{h:250,s:0,l:.2,a:this.state.opacity},onChange:function(e){t.handleOpacityChange(e)}})),a.a.createElement("div",{style:{display:"flex",alignItems:"center",marginLeft:20}},a.a.createElement(x.a,{style:{width:"75px"},type:"number",value:this.state.opacityInputValue,inputProps:{min:"1",max:"100",step:"1"},onChange:this.handleOpacityInputChange,onFocus:this.selectInputValue,onClick:this.selectInputValue}),a.a.createElement("span",{style:{marginLeft:10}},"%"))),a.a.createElement("div",{style:{display:"flex",alignItems:"center",marginTop:"10px",marginBottom:"10px"}},a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},a.a.createElement(x.a,{margin:"normal",type:"number",id:"outlined-basic",label:"Threshhold",variant:"outlined",value:this.state.threshhold,onChange:function(e){e.target.value>=0&&e.target.value<=255&&t.setState({threshhold:e.target.value})}}),a.a.createElement(x.a,{margin:"normal",type:"number",id:"outlined-basic",label:"Pixels below threshhold",variant:"outlined",value:this.state.minPixelsBelowThreshhold,onChange:function(e){(e.target.value>0&&e.target.value<=200||""===e.target.value)&&t.setState({minPixelsBelowThreshhold:e.target.value})},onBlur:function(){""===t.state.minPixelsBelowThreshhold&&t.setState({minPixelsBelowThreshhold:5})}})),a.a.createElement("div",{style:{marginLeft:"40px"}},a.a.createElement(O.b,{width:"200px",height:"200px",disableAlpha:!0,color:this.state.color,onChangeComplete:function(e){t.setState({color:e})}}))),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(E.a,{style:{marginRight:5},onClick:Object(l.a)(L().mark(function e(){var r;return L().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.next=3,t.blockCellsBelowThreshhold();case 3:r=e.sent,t.setState({loading:!1,letters:r});case 5:case"end":return e.stop()}},e)})),variant:"outlined",disabled:!this.state.imageLoaded},"Block cells"),a.a.createElement(E.a,{style:{marginLeft:5},onClick:function(){var e=t.getRandomLetters();t.setState({letters:e})},variant:"outlined"},"Reset")))}}]),e}(a.a.Component);var I=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(j,null))},k=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,304)).then(function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;r(t),n(t),a(t),o(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(I,null))),k()},95:function(t,e,r){}},[[145,1,2]]]);
//# sourceMappingURL=main.f4c5d47e.chunk.js.map