(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(t,e,r){t.exports=r(265)},152:function(t,e,r){},265:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(122),i=r.n(o),s=(r(152),r(95),r(20)),l=r(11),h=r(27),c=r(28),u=r(40),g=r(37),f=r(39),d=r(50),p=function(t){function e(t){var r;return Object(h.a)(this,e),(r=Object(u.a)(this,Object(g.a)(e).call(this,t))).getRandomLetter=function(){return String.fromCharCode(Math.floor(26*Math.random())+65)},r.getOpacity=function(){if(r.props.useKr){var t=r.props.brightness,e=(r.props.targetBrightness-t)/(r.getBrightness()-t);return e<0?0:e>1?1:e||0}return 1},r.getBrightness=function(){return r.props.brightness<r.props.targetBrightness?r.props.lightColor.rgb?.3*r.props.lightColor.rgb.r+.587*r.props.lightColor.rgb.g+.113*r.props.lightColor.rgb.b:255:r.props.darkColor.rgb?.3*r.props.darkColor.rgb.r+.587*r.props.darkColor.rgb.g+.113*r.props.darkColor.rgb.b:0},r.getColor=function(){return r.props.useKr?r.props.brightness<r.props.targetBrightness?r.props.lightColor.hex:r.props.darkColor.hex:"#000000"},r.state={},r}return Object(f.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{style:{width:"20px",height:"26px",display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement("div",{style:{opacity:this.getOpacity(),color:this.getColor()}},this.props.col))}}]),e}(a.a.Component),m=function(t){function e(t){var r;return Object(h.a)(this,e),(r=Object(u.a)(this,Object(g.a)(e).call(this,t))).state={},r}return Object(f.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{width:"20px",height:"624px",display:"flex",flexDirection:"column"}},this.props.brightnessColumn&&this.props.brightnessColumn.map(function(e,r){return a.a.createElement(p,{useKr:t.props.useKr,col:t.props.row[r],key:r,brightness:e,targetBrightness:t.props.targetBrightness,lightColor:t.props.fontLightColor,darkColor:t.props.fontDarkColor})}))}}]),e}(a.a.Component),v=function(t){function e(t){var r;return Object(h.a)(this,e),(r=Object(u.a)(this,Object(g.a)(e).call(this,t))).state={},r}return Object(f.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},className:"TextContainer"},this.props.letters&&this.props.brightnessMatrix&&this.props.brightnessMatrix.map(function(e,r){return a.a.createElement(m,{useKr:t.props.useKr,row:t.props.letters[r],key:r,brightnessColumn:e,targetBrightness:t.props.targetBrightness,fontLightColor:t.props.fontLightColor,fontDarkColor:t.props.fontDarkColor})}))}}]),e}(a.a.Component),y=r(124),b=r.n(y),w=r(91),C=r(66),x=r(303),E=r(300),k=r(301);function L(){L=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(D){l=function(t,e,r){return t[e]=r}}function h(t,e,r,a){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),s=new j(a||[]);return n(i,"_invoke",{value:C(t,r,s)}),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=h;var u={};function g(){}function f(){}function d(){}var p={};l(p,o,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(O([])));v&&v!==e&&r.call(v,o)&&(p=v);var y=d.prototype=g.prototype=Object.create(p);function b(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e(function(a,i){!function n(a,o,i,s){var l=c(t[a],t,o);if("throw"!==l.type){var h=l.arg,u=h.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then(function(t){n("next",t,i,s)},function(t){n("throw",t,i,s)}):e.resolve(u).then(function(t){h.value=t,i(h)},function(t){return n("throw",t,i,s)})}s(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function C(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return M()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),u;var a=c(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,u;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:M}}function M(){return{value:void 0,done:!0}}return f.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:f,configurable:!0}),f.displayName=l(d,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(h(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(y),l(y,s,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}var j=function(t){function e(t){var r;return Object(h.a)(this,e),(r=Object(u.a)(this,Object(g.a)(e).call(this,t))).getRandomLetters=function(){for(var t=[],e=0;e<24;e++){for(var n=[],a=0;a<24;a++)n.push(r.getRandomLetter());t.push(n)}return t},r.rgbToGrayscale=function(t,e,r){return.2126*t+.7152*e+.0722*r},r.calcGrayscalePixel=function(t,e,n){var a=Math.abs(Math.abs(t.r-e.r)-n.r),o=Math.abs(Math.abs(t.g-e.g)-n.g),i=Math.abs(Math.abs(t.b-e.b)-n.b);return r.rgbToGrayscale(a,o,i)},r.blockCellsBelowThreshhold=Object(l.a)(L().mark(function t(){return L().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(l.a)(L().mark(function t(e,n){var a,o,i,l,h,c,u;return L().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=document.querySelector(".image"),o=document.querySelector(".image1"),i=document.querySelector(".image2"),t.next=5,C.a(a,{quality:1});case 5:return l=t.sent,t.next=8,C.a(o,{quality:1});case 8:return h=t.sent,t.next=11,C.a(i,{quality:1});case 11:c=t.sent,u=[l,h,c],Promise.all(u.map(function(t){return new Promise(function(e,r){var n=new Image;n.onload=function(){return e(n)},n.onerror=r,n.src=t})})).then(function(t){var n=t[0],a=t[1],o=t[2],i=Object(s.a)(r.state.letters),l=document.createElement("canvas"),h=document.createElement("canvas"),c=document.createElement("canvas");l.width=480,l.height=624,h.width=480,h.height=624,c.width=480,c.height=624;var u=l.getContext("2d"),g=h.getContext("2d"),f=c.getContext("2d");u.drawImage(n,0,0,480,624),g.drawImage(a,0,0,480,624),f.drawImage(o,0,0,480,624);for(var d=u.getImageData(0,0,l.width,l.height),p=g.getImageData(0,0,h.width,h.height),m=f.getImageData(0,0,c.width,c.height),v=0,y=0,b=0;b<24;b++){for(var w=0;w<24;w++){for(var C=!1,x=0;x<Math.round(20);x++){for(var E=0;E<Math.round(26);E++){var k=r.getPx(d,Math.round(v+x),Math.round(y+E)),L=r.getPx(p,Math.round(v+x),Math.round(y+E)),j=r.getPx(m,Math.round(v+x),Math.round(y+E));if(r.calcGrayscalePixel(k,L,j)<=r.state.threshhold){C=!0,i[b][w]="`";break}}if(C)break}v+=20}v=0,y+=26}e(i)}).catch(function(){n()});case 14:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}},t)})),r.processImage=function(t){for(var e=new Array(24),n=0;n<e.length;n++)e[n]=new Array(24);var a=new Image;a.src=t,a.onload=function(){var t=document.createElement("canvas");t.width=a.width,t.height=a.height;var n=t.getContext("2d");n.drawImage(a,0,0,556,696);for(var o=[],i=n.getImageData(38,34,t.width-76,t.height-72),s=0;s<480;s+=20)for(var l=0;l<624;l+=26){for(var h=[],c=0;c<20;c++)for(var u=0;u<26;u++)h.push(r.getPx(i,s+c,l+u));var g=h.reduce(function(t,e){return t+r.rgb2grayscale(e.r,e.g,e.b)},0)/h.length;e[Math.floor(s/20)][Math.floor(l/26)]=g,o.push(r.contrastCalc(r.state.targetBrightness,g))}r.setState({brightnessMatrix:e,cellsContrast:o})}},r.median=function(t){if(0!==t.length){t.sort(function(t,e){return t-e});var e=Math.floor(t.length/2);return t.length%2===1?t[e]:(t[e-1]+t[e])/2}},r.getPx=function(t,e,r){var n,a=new Uint32Array(t.data.buffer)[r*t.width+e],o=0,i=0,s=0,l=0;return a>0&&(n=a.toString(16),o=parseInt(n.substr(0,2),16),i=parseInt(n.substr(2,2),16),s=parseInt(n.substr(4,2),16),l=parseInt(n.substr(6,2),16)),{r:l,g:s,b:i,a:o}},r.rgb2grayscale=function(t,e,r){return.3*t+.587*e+.113*r},r.handleChangeFontDarkColor=function(t){r.setState({fontDarkColor:t})},r.handleChangeFontLightColor=function(t){r.setState({fontLightColor:t})},r.onTargetBrightnessChange=function(t){var e=t.target.value,n=[],a=r.state.brightnessMatrix;a&&a.forEach(function(t){t.forEach(function(t){n.push(r.contrastCalc(e,t))})}),r.setState({cellsContrast:n,targetBrightness:e})},r.contrastCalc=function(t,e){return t>e?(t/255+.05)/(e/255+.05):(e/255+.05)/(t/255+.05)},r.getAverageContrast=function(){var t=r.state.cellsContrast;return t&&Math.round(t.reduce(function(t,e){return t+e},0)/t.length*1e3)/1e3},r.getRandomLetter=function(){return String.fromCharCode(Math.floor(26*Math.random())+65)},r.fileChangedHandler=r.fileChangedHandler.bind(Object(d.a)(Object(d.a)(r))),r.state={threshhold:0,letters:[],selectedItem:0,backgroundImage:null,fontDarkColor:{hex:"#000000",rgb:{r:0,g:0,b:0}},fontLightColor:{hex:"#ffffff",rgb:{r:255,g:255,b:255}},showDarkColorPicker:!1,showLightColorPicker:!1,targetBrightness:127,loading:!1,imageLoaded:!1},r}return Object(f.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this.getRandomLetters();this.setState({fontDarkColor:{hex:"#000000",rgb:{r:0,g:0,b:0}},letters:t})}},{key:"fileChangedHandler",value:function(t){var e=this,r=!1;if(t.target.files[0]&&(r=!0),r)try{b.a.imageFileResizer(t.target.files[0],556,696,"JPEG",100,0,function(t){e.setState({backgroundImage:t}),e.processImage(t)},"base64",556,696),this.setState({imageLoaded:!0})}catch(n){console.log(n)}}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",flexDirection:"column"},className:"App"},a.a.createElement("div",{style:{marginBottom:"10px"}},a.a.createElement("input",{type:"file",id:"imageUpload",name:"imageUpload",onChange:this.fileChangedHandler})),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",{className:"image",style:{width:"480px",height:"624px",position:"relative"}},a.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},a.a.createElement("img",{alt:"",style:{width:"480px",height:"624px"},src:this.state.backgroundImage})),a.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},a.a.createElement("div",{style:{width:"100%",height:"100%",fontFamily:"Motiva"}},a.a.createElement(v,{useKr:!0,letters:this.state.letters,brightnessMatrix:this.state.brightnessMatrix,targetBrightness:this.state.targetBrightness,fontLightColor:this.state.fontLightColor,fontDarkColor:this.state.fontDarkColor})))),a.a.createElement("div",{className:"image1",style:{width:"480px",height:"624px",position:"relative",display:"".concat(this.state.loading?"block":"none")}},a.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},a.a.createElement("img",{alt:"",style:{width:"480px",height:"624px"},src:this.state.backgroundImage})),a.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},a.a.createElement("div",{style:{width:"100%",height:"100%",fontFamily:"Motiva"}},a.a.createElement(v,{letters:this.state.letters,brightnessMatrix:this.state.brightnessMatrix,targetBrightness:this.state.targetBrightness,fontLightColor:this.state.fontLightColor,fontDarkColor:this.state.fontDarkColor})))),a.a.createElement("div",{className:"image2",style:{width:"480px",height:"624px",position:"relative",backgroundColor:"white",display:"".concat(this.state.loading?"block":"none")}},a.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},a.a.createElement("div",{style:{width:"100%",height:"100%",fontFamily:"Motiva"}},a.a.createElement(v,{letters:this.state.letters,brightnessMatrix:this.state.brightnessMatrix,targetBrightness:this.state.targetBrightness,fontLightColor:this.state.fontLightColor,fontDarkColor:this.state.fontDarkColor}))))),a.a.createElement("div",{style:{width:"100%",display:"flex",alignItems:"center",flexDirection:"column",marginTop:"20px"}},a.a.createElement("div",{style:{width:"100%",display:"flex",alignItems:"center",flexDirection:"row-reverse",justifyContent:"center"}},a.a.createElement("div",{style:{width:"20px",height:"20px",border:"1px solid",backgroundColor:this.state.fontLightColor.hex},onClick:function(){t.setState({showLightColorPicker:!t.state.showLightColorPicker,showDarkColorPicker:!1})}}),a.a.createElement("div",{style:{position:"fixed",bottom:"10px",right:"10px"}},this.state.showLightColorPicker?a.a.createElement(w.a,{width:"200px",height:"200px",disableAlpha:!0,color:this.state.fontLightColor,onChangeComplete:this.handleChangeFontLightColor}):null),a.a.createElement("div",null,a.a.createElement("input",{style:{width:"500px"},type:"range",onChange:this.onTargetBrightnessChange,min:0,max:255,step:1,value:this.state.targetBrightness,className:"custom-slider"})),a.a.createElement("div",{style:{width:"20px",height:"20px",border:"1px solid",backgroundColor:this.state.fontDarkColor.hex},onClick:function(){t.setState({showDarkColorPicker:!t.state.showDarkColorPicker,showLightColorPicker:!1})}}),a.a.createElement("div",{style:{position:"fixed",bottom:"10px",right:"10px"}},this.state.showDarkColorPicker?a.a.createElement(w.a,{width:"200px",height:"200px",disableAlpha:!0,color:this.state.fontDarkColor,onChangeComplete:this.handleChangeFontDarkColor}):null)),a.a.createElement("div",null,this.state.targetBrightness," ",a.a.createElement("b",null,"Kr")),a.a.createElement("div",null,this.getAverageContrast()?"Average Contrast: "+this.getAverageContrast():"")),this.state.loading&&a.a.createElement("div",{style:{backgroundColor:"white",zIndex:999,position:"absolute",width:"100%",height:"100%"}},a.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},a.a.createElement(x.a,null))),a.a.createElement(E.a,{margin:"normal",type:"number",id:"outlined-basic",label:"Threshhold",variant:"outlined",value:this.state.threshhold,onChange:function(e){e.target.value>=0&&e.target.value<=255&&t.setState({threshhold:e.target.value})}}),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(k.a,{style:{marginRight:5},onClick:Object(l.a)(L().mark(function e(){var r;return L().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.next=3,t.blockCellsBelowThreshhold();case 3:r=e.sent,t.setState({loading:!1,letters:r});case 5:case"end":return e.stop()}},e)})),variant:"outlined",disabled:!this.state.imageLoaded},"Block cells"),a.a.createElement(k.a,{style:{marginLeft:5},onClick:function(){var e=t.getRandomLetters();t.setState({letters:e})},variant:"outlined"},"Reset")))}}]),e}(a.a.Component);var O=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(j,null))},M=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,304)).then(function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;r(t),n(t),a(t),o(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null))),M()},95:function(t,e,r){}},[[145,1,2]]]);
//# sourceMappingURL=main.ce74aaeb.chunk.js.map