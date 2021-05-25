(()=>{"use strict";var e,t,n;!function(e){window.DotNet=e;const t=[];class n{constructor(e){this._jsObject=e,this._cachedFunctions=new Map}findFunction(e){const t=this._cachedFunctions.get(e);if(t)return t;let n,r=this._jsObject;if(e.split(".").forEach((t=>{if(!(t in r))throw new Error(`Could not find '${e}' ('${t}' was undefined).`);n=r,r=r[t]})),r instanceof Function)return r=r.bind(n),this._cachedFunctions.set(e,r),r;throw new Error(`The value '${e}' is not a function.`)}getWrappedObject(){return this._jsObject}}const r="__jsObjectId",o={},a={0:new n(window)};a[0]._cachedFunctions.set("import",(e=>("string"==typeof e&&e.startsWith("./")&&(e=document.baseURI+e.substr(2)),import(e))));let i,s=1,c=1,l=null;function u(e){t.push(e)}function d(e){if(e&&"object"==typeof e){a[c]=new n(e);const t={[r]:c};return c++,t}throw new Error(`Cannot create a JSObjectReference from the value '${e}'.`)}function h(e){return e?JSON.parse(e,((e,n)=>t.reduce(((t,n)=>n(e,t)),n))):null}function f(e,t,n,r){const o=p();if(o.invokeDotNetFromJS){const a=JSON.stringify(r,I),i=o.invokeDotNetFromJS(e,t,n,a);return i?h(i):null}throw new Error("The current dispatcher does not support synchronous calls from JS to .NET. Use invokeMethodAsync instead.")}function m(e,t,n,r){if(e&&n)throw new Error(`For instance method calls, assemblyName should be null. Received '${e}'.`);const a=s++,i=new Promise(((e,t)=>{o[a]={resolve:e,reject:t}}));try{const o=JSON.stringify(r,I);p().beginInvokeDotNetFromJS(a,e,t,n,o)}catch(e){v(a,!1,e)}return i}function p(){if(null!==l)return l;throw new Error("No .NET call dispatcher has been set.")}function v(e,t,n){if(!o.hasOwnProperty(e))throw new Error(`There is no pending async call with ID ${e}.`);const r=o[e];delete o[e],t?r.resolve(n):r.reject(n)}function g(e){return e instanceof Error?`${e.message}\n${e.stack}`:e?e.toString():"null"}function b(e,t){let n=a[t];if(n)return n.findFunction(e);throw new Error(`JS object instance with ID ${t} does not exist (has it been disposed?).`)}function y(e){delete a[e]}e.attachDispatcher=function(e){l=e},e.attachReviver=u,e.invokeMethod=function(e,t,...n){return f(e,t,null,n)},e.invokeMethodAsync=function(e,t,...n){return m(e,t,null,n)},e.createJSObjectReference=d,e.disposeJSObjectReference=function(e){const t=e&&e.__jsObjectId;"number"==typeof t&&y(t)},function(e){e[e.Default=0]="Default",e[e.JSObjectReference=1]="JSObjectReference"}(i=e.JSCallResultType||(e.JSCallResultType={})),e.jsCallDispatcher={findJSFunction:b,disposeJSObjectReferenceById:y,invokeJSFromDotNet:(e,t,n,r)=>{const o=w(b(e,r).apply(null,h(t)),n);return null==o?null:JSON.stringify(o,I)},beginInvokeJSFromDotNet:(e,t,n,r,o)=>{const a=new Promise((e=>{e(b(t,o).apply(null,h(n)))}));e&&a.then((t=>p().endInvokeJSFromDotNet(e,!0,JSON.stringify([e,!0,w(t,r)],I))),(t=>p().endInvokeJSFromDotNet(e,!1,JSON.stringify([e,!1,g(t)]))))},endInvokeDotNetFromJS:(e,t,n)=>{const r=t?h(n):new Error(n);v(parseInt(e),t,r)}};class E{constructor(e){this._id=e}invokeMethod(e,...t){return f(null,e,this._id,t)}invokeMethodAsync(e,...t){return m(null,e,this._id,t)}dispose(){m(null,"__Dispose",this._id,null).catch((e=>console.error(e)))}serializeAsArg(){return{__dotNetObject:this._id}}}function w(e,t){switch(t){case i.Default:return e;case i.JSObjectReference:return d(e);default:throw new Error(`Invalid JS call result type '${t}'.`)}}function I(e,t){return t instanceof E?t.serializeAsArg():t}e.DotNetObject=E,u((function(e,t){return t&&"object"==typeof t&&t.hasOwnProperty("__dotNetObject")?new E(t.__dotNetObject):t})),u((function(e,t){if(t&&"object"==typeof t&&t.hasOwnProperty(r)){const e=t.__jsObjectId,n=a[e];if(n)return n.getWrappedObject();throw new Error(`JS object instance with ID ${e} does not exist (has it been disposed?).`)}return t}))}(e||(e={})),function(e){e[e.prependFrame=1]="prependFrame",e[e.removeFrame=2]="removeFrame",e[e.setAttribute=3]="setAttribute",e[e.removeAttribute=4]="removeAttribute",e[e.updateText=5]="updateText",e[e.stepIn=6]="stepIn",e[e.stepOut=7]="stepOut",e[e.updateMarkup=8]="updateMarkup",e[e.permutationListEntry=9]="permutationListEntry",e[e.permutationListEnd=10]="permutationListEnd"}(t||(t={})),function(e){e[e.element=1]="element",e[e.text=2]="text",e[e.attribute=3]="attribute",e[e.component=4]="component",e[e.region=5]="region",e[e.elementReferenceCapture=6]="elementReferenceCapture",e[e.markup=8]="markup"}(n||(n={}));class r{constructor(e,t){this.componentId=e,this.fieldValue=t}static fromEvent(e,t){const n=t.target;if(n instanceof Element){const t=function(e){return e instanceof HTMLInputElement?e.type&&"checkbox"===e.type.toLowerCase()?{value:e.checked}:{value:e.value}:e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement?{value:e.value}:null}(n);if(t)return new r(e,t.value)}return null}}let o;function a(e,t){if(!o)throw new Error("eventDispatcher not initialized. Call 'setEventDispatcher' to configure it.");o(e,t)}const i=new Map,s=new Map,c={createEventArgs:()=>({})},l=[];function u(e){return i.get(e)}function d(e){const t=i.get(e);return(null==t?void 0:t.browserEventName)||e}function h(e,t){e.forEach((e=>i.set(e,t)))}function f(e){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t.push({identifier:r.identifier,clientX:r.clientX,clientY:r.clientY,screenX:r.screenX,screenY:r.screenY,pageX:r.pageX,pageY:r.pageY})}return t}function m(e){return{detail:e.detail,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY,offsetX:e.offsetX,offsetY:e.offsetY,button:e.button,buttons:e.buttons,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey}}h(["input","change"],{createEventArgs:function(e){const t=e.target;return function(e){return-1!==p.indexOf(e.getAttribute("type"))}(t)?{value:function(e){const t=e.value,n=e.type;switch(n){case"date":case"datetime-local":case"month":return t;case"time":return 5===t.length?t+":00":t;case"week":return t}throw new Error(`Invalid element type '${n}'.`)}(t)}:{value:function(e){return!!e&&"INPUT"===e.tagName&&"checkbox"===e.getAttribute("type")}(t)?!!t.checked:t.value}}}),h(["copy","cut","paste"],c),h(["drag","dragend","dragenter","dragleave","dragover","dragstart","drop"],{createEventArgs:e=>{return{...m(t=e),dataTransfer:t.dataTransfer?{dropEffect:t.dataTransfer.dropEffect,effectAllowed:t.dataTransfer.effectAllowed,files:Array.from(t.dataTransfer.files).map((e=>e.name)),items:Array.from(t.dataTransfer.items).map((e=>({kind:e.kind,type:e.type}))),types:t.dataTransfer.types}:null};var t}}),h(["focus","blur","focusin","focusout"],c),h(["keydown","keyup","keypress"],{createEventArgs:e=>{return{key:(t=e).key,code:t.code,location:t.location,repeat:t.repeat,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey};var t}}),h(["contextmenu","click","mouseover","mouseout","mousemove","mousedown","mouseup","dblclick"],{createEventArgs:e=>m(e)}),h(["error"],{createEventArgs:e=>{return{message:(t=e).message,filename:t.filename,lineno:t.lineno,colno:t.colno};var t}}),h(["loadstart","timeout","abort","load","loadend","progress"],{createEventArgs:e=>{return{lengthComputable:(t=e).lengthComputable,loaded:t.loaded,total:t.total};var t}}),h(["touchcancel","touchend","touchmove","touchenter","touchleave","touchstart"],{createEventArgs:e=>{return{detail:(t=e).detail,touches:f(t.touches),targetTouches:f(t.targetTouches),changedTouches:f(t.changedTouches),ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey};var t}}),h(["gotpointercapture","lostpointercapture","pointercancel","pointerdown","pointerenter","pointerleave","pointermove","pointerout","pointerover","pointerup"],{createEventArgs:e=>{return{...m(t=e),pointerId:t.pointerId,width:t.width,height:t.height,pressure:t.pressure,tiltX:t.tiltX,tiltY:t.tiltY,pointerType:t.pointerType,isPrimary:t.isPrimary};var t}}),h(["wheel","mousewheel"],{createEventArgs:e=>{return{...m(t=e),deltaX:t.deltaX,deltaY:t.deltaY,deltaZ:t.deltaZ,deltaMode:t.deltaMode};var t}}),h(["toggle"],c);const p=["date","datetime-local","month","time","week"],v=I(["abort","blur","change","error","focus","load","loadend","loadstart","mouseenter","mouseleave","progress","reset","scroll","submit","unload","toggle","DOMNodeInsertedIntoDocument","DOMNodeRemovedFromDocument"]),g={submit:!0},b=I(["click","dblclick","mousedown","mousemove","mouseup"]);class y{constructor(e){this.browserRendererId=e,this.afterClickCallbacks=[];const t=++y.nextEventDelegatorId;this.eventsCollectionKey=`_blazorEvents_${t}`,this.eventInfoStore=new E(this.onGlobalEvent.bind(this))}setListener(e,t,n,r){const o=this.getEventHandlerInfosForElement(e,!0),a=o.getHandler(t);if(a)this.eventInfoStore.update(a.eventHandlerId,n);else{const a={element:e,eventName:t,eventHandlerId:n,renderingComponentId:r};this.eventInfoStore.add(a),o.setHandler(t,a)}}getHandler(e){return this.eventInfoStore.get(e)}removeListener(e){const t=this.eventInfoStore.remove(e);if(t){const e=t.element,n=this.getEventHandlerInfosForElement(e,!1);n&&n.removeHandler(t.eventName)}}notifyAfterClick(e){this.afterClickCallbacks.push(e),this.eventInfoStore.addGlobalListener("click")}setStopPropagation(e,t,n){this.getEventHandlerInfosForElement(e,!0).stopPropagation(t,n)}setPreventDefault(e,t,n){this.getEventHandlerInfosForElement(e,!0).preventDefault(t,n)}onGlobalEvent(e){if(!(e.target instanceof Element))return;this.dispatchGlobalEventToAllElements(e.type,e);const t=(n=e.type,s.get(n));var n;t&&t.forEach((t=>this.dispatchGlobalEventToAllElements(t,e))),"click"===e.type&&this.afterClickCallbacks.forEach((t=>t(e)))}dispatchGlobalEventToAllElements(e,t){let n=t.target,o=null,i=!1;const s=v.hasOwnProperty(e);let c=!1;for(;n;){const h=this.getEventHandlerInfosForElement(n,!1);if(h){const s=h.getHandler(e);if(s&&(l=n,d=t.type,!((l instanceof HTMLButtonElement||l instanceof HTMLInputElement||l instanceof HTMLTextAreaElement||l instanceof HTMLSelectElement)&&b.hasOwnProperty(d)&&l.disabled))){if(!i){const n=u(e);o=(null==n?void 0:n.createEventArgs)?n.createEventArgs(t):{},i=!0}g.hasOwnProperty(t.type)&&t.preventDefault(),a({browserRendererId:this.browserRendererId,eventHandlerId:s.eventHandlerId,eventName:e,eventFieldInfo:r.fromEvent(s.renderingComponentId,t)},o)}h.stopPropagation(e)&&(c=!0),h.preventDefault(e)&&t.preventDefault()}n=s||c?null:n.parentElement}var l,d}getEventHandlerInfosForElement(e,t){return e.hasOwnProperty(this.eventsCollectionKey)?e[this.eventsCollectionKey]:t?e[this.eventsCollectionKey]=new w:null}}y.nextEventDelegatorId=0;class E{constructor(e){this.globalListener=e,this.infosByEventHandlerId={},this.countByEventName={},l.push(this.handleEventNameAliasAdded.bind(this))}add(e){if(this.infosByEventHandlerId[e.eventHandlerId])throw new Error(`Event ${e.eventHandlerId} is already tracked`);this.infosByEventHandlerId[e.eventHandlerId]=e,this.addGlobalListener(e.eventName)}get(e){return this.infosByEventHandlerId[e]}addGlobalListener(e){if(e=d(e),this.countByEventName.hasOwnProperty(e))this.countByEventName[e]++;else{this.countByEventName[e]=1;const t=v.hasOwnProperty(e);document.addEventListener(e,this.globalListener,t)}}update(e,t){if(this.infosByEventHandlerId.hasOwnProperty(t))throw new Error(`Event ${t} is already tracked`);const n=this.infosByEventHandlerId[e];delete this.infosByEventHandlerId[e],n.eventHandlerId=t,this.infosByEventHandlerId[t]=n}remove(e){const t=this.infosByEventHandlerId[e];if(t){delete this.infosByEventHandlerId[e];const n=d(t.eventName);0==--this.countByEventName[n]&&(delete this.countByEventName[n],document.removeEventListener(n,this.globalListener))}return t}handleEventNameAliasAdded(e,t){if(this.countByEventName.hasOwnProperty(e)){const n=this.countByEventName[e];delete this.countByEventName[e],document.removeEventListener(e,this.globalListener),this.addGlobalListener(t),this.countByEventName[t]+=n-1}}}class w{constructor(){this.handlers={},this.preventDefaultFlags=null,this.stopPropagationFlags=null}getHandler(e){return this.handlers.hasOwnProperty(e)?this.handlers[e]:null}setHandler(e,t){this.handlers[e]=t}removeHandler(e){delete this.handlers[e]}preventDefault(e,t){return void 0!==t&&(this.preventDefaultFlags=this.preventDefaultFlags||{},this.preventDefaultFlags[e]=t),!!this.preventDefaultFlags&&this.preventDefaultFlags[e]}stopPropagation(e,t){return void 0!==t&&(this.stopPropagationFlags=this.stopPropagationFlags||{},this.stopPropagationFlags[e]=t),!!this.stopPropagationFlags&&this.stopPropagationFlags[e]}}function I(e){const t={};return e.forEach((e=>{t[e]=!0})),t}const S=B("_blazorLogicalChildren"),C=B("_blazorLogicalParent"),D=B("_blazorLogicalEnd");function N(e,t){if(e.childNodes.length>0&&!t)throw new Error("New logical elements must start empty, or allowExistingContents must be true");return S in e||(e[S]=[]),e}function T(e,t){const n=document.createComment("!");return A(n,e,t),n}function A(e,t,n){const r=e;if(e instanceof Comment&&_(r)&&_(r).length>0)throw new Error("Not implemented: inserting non-empty logical container");if(F(r))throw new Error("Not implemented: moving existing logical children");const o=_(t);if(n<o.length){const t=o[n];t.parentNode.insertBefore(e,t),o.splice(n,0,r)}else H(e,t),o.push(r);r[C]=t,S in r||(r[S]=[])}function k(e,t){const n=_(e).splice(t,1)[0];if(n instanceof Comment){const e=_(n);if(e)for(;e.length>0;)k(n,0)}const r=n;r.parentNode.removeChild(r)}function F(e){return e[C]||null}function R(e,t){return _(e)[t]}function O(e){var t=P(e);return"http://www.w3.org/2000/svg"===t.namespaceURI&&"foreignObject"!==t.tagName}function _(e){return e[S]}function x(e,t){const n=_(e);t.forEach((e=>{e.moveRangeStart=n[e.fromSiblingIndex],e.moveRangeEnd=M(e.moveRangeStart)})),t.forEach((t=>{const r=t.moveToBeforeMarker=document.createComment("marker"),o=n[t.toSiblingIndex+1];o?o.parentNode.insertBefore(r,o):H(r,e)})),t.forEach((e=>{const t=e.moveToBeforeMarker,n=t.parentNode,r=e.moveRangeStart,o=e.moveRangeEnd;let a=r;for(;a;){const e=a.nextSibling;if(n.insertBefore(a,t),a===o)break;a=e}n.removeChild(t)})),t.forEach((e=>{n[e.toSiblingIndex]=e.moveRangeStart}))}function P(e){if(e instanceof Element)return e;if(e instanceof Comment)return e.parentNode;throw new Error("Not a valid logical element")}function L(e){const t=_(F(e));return t[Array.prototype.indexOf.call(t,e)+1]||null}function H(e,t){if(t instanceof Element)t.appendChild(e);else{if(!(t instanceof Comment))throw new Error(`Cannot append node because the parent is not a valid logical element. Parent: ${t}`);{const n=L(t);n?n.parentNode.insertBefore(e,n):H(e,F(t))}}}function M(e){if(e instanceof Element)return e;const t=L(e);if(t)return t.previousSibling;{const t=F(e);return t instanceof Element?t.lastChild:M(t)}}function B(e){return"function"==typeof Symbol?Symbol():e}function U(e){return`_bl_${e}`}e.attachReviver(((e,t)=>t&&"object"==typeof t&&t.hasOwnProperty("__internalId")&&"string"==typeof t.__internalId?function(e){const t=`[${U(e)}]`;return document.querySelector(t)}(t.__internalId):t));const j="_blazorSelectValue",J=document.createElement("template"),K=document.createElementNS("http://www.w3.org/2000/svg","g"),$={},z="__internal_",V="preventDefault_",X="stopPropagation_";class Y{constructor(e){this.childComponentLocations={},this.eventDelegator=new y(e),this.eventDelegator.notifyAfterClick((e=>{if(!ee)return;if(0!==e.button||function(e){return e.ctrlKey||e.shiftKey||e.altKey||e.metaKey}(e))return;if(e.defaultPrevented)return;const t=function(e){const t=!window._blazorDisableComposedPath&&e.composedPath&&e.composedPath();if(t){for(let e=0;e<t.length;e++){const n=t[e];if(n instanceof Element&&"A"===n.tagName)return n}return null}return le(e.target,"A")}(e);if(t&&function(e){const t=e.getAttribute("target");return(!t||"_self"===t)&&e.hasAttribute("href")&&!e.hasAttribute("download")}(t)){const n=ce(t.getAttribute("href"));ue(n)&&(e.preventDefault(),ae(n,!0))}}))}attachRootComponentToLogicalElement(e,t){this.attachComponentToElement(e,t),$[e]=t}detachRootComponentFromLogicalElement(e){this.detachComponentFromElement(e)}updateComponent(e,t,n,r){var o;const a=this.childComponentLocations[t];if(!a)throw new Error(`No element is currently associated with component ${t}`);const i=$[t];if(i){const e=function(e){return e[D]||null}(i);delete $[t],e?function(e,t){const n=F(e);if(!n)throw new Error("Can't clear between nodes. The start node does not have a logical parent.");const r=_(n),o=r.indexOf(e)+1,a=r.indexOf(t);for(let e=o;e<=a;e++)k(n,o);e.textContent="!"}(i,e):function(e){let t;for(;t=e.firstChild;)e.removeChild(t)}(i)}const s=null===(o=P(a))||void 0===o?void 0:o.ownerDocument,c=s&&s.activeElement;this.applyEdits(e,t,a,0,n,r),c instanceof HTMLElement&&s&&s.activeElement!==c&&c.focus()}disposeComponent(e){delete this.childComponentLocations[e]}disposeEventHandler(e){this.eventDelegator.removeListener(e)}attachComponentToElement(e,t){this.childComponentLocations[e]=t}detachComponentFromElement(e){delete this.childComponentLocations[e]}applyEdits(e,n,r,o,a,i){let s,c=0,l=o;const u=e.arrayBuilderSegmentReader,d=e.editReader,h=e.frameReader,f=u.values(a),m=u.offset(a),p=m+u.count(a);for(let a=m;a<p;a++){const u=e.diffReader.editsEntry(f,a),m=d.editType(u);switch(m){case t.prependFrame:{const t=d.newTreeIndex(u),o=e.referenceFramesEntry(i,t),a=d.siblingIndex(u);this.insertFrame(e,n,r,l+a,i,o,t);break}case t.removeFrame:k(r,l+d.siblingIndex(u));break;case t.setAttribute:{const t=d.newTreeIndex(u),o=e.referenceFramesEntry(i,t),a=R(r,l+d.siblingIndex(u));if(!(a instanceof Element))throw new Error("Cannot set attribute on non-element child");this.applyAttribute(e,n,a,o);break}case t.removeAttribute:{const t=R(r,l+d.siblingIndex(u));if(!(t instanceof HTMLElement))throw new Error("Cannot remove attribute from non-element child");{const n=d.removedAttributeName(u);this.tryApplySpecialProperty(e,t,n,null)||t.removeAttribute(n)}break}case t.updateText:{const t=d.newTreeIndex(u),n=e.referenceFramesEntry(i,t),o=R(r,l+d.siblingIndex(u));if(!(o instanceof Text))throw new Error("Cannot set text content on non-text child");o.textContent=h.textContent(n);break}case t.updateMarkup:{const t=d.newTreeIndex(u),n=e.referenceFramesEntry(i,t),o=d.siblingIndex(u);k(r,l+o),this.insertMarkup(e,r,l+o,n);break}case t.stepIn:r=R(r,l+d.siblingIndex(u)),c++,l=0;break;case t.stepOut:r=F(r),c--,l=0===c?o:0;break;case t.permutationListEntry:s=s||[],s.push({fromSiblingIndex:l+d.siblingIndex(u),toSiblingIndex:l+d.moveToSiblingIndex(u)});break;case t.permutationListEnd:x(r,s),s=void 0;break;default:throw new Error(`Unknown edit type: ${m}`)}}}insertFrame(e,t,r,o,a,i,s){const c=e.frameReader,l=c.frameType(i);switch(l){case n.element:return this.insertElement(e,t,r,o,a,i,s),1;case n.text:return this.insertText(e,r,o,i),1;case n.attribute:throw new Error("Attribute frames should only be present as leading children of element frames.");case n.component:return this.insertComponent(e,r,o,i),1;case n.region:return this.insertFrameRange(e,t,r,o,a,s+1,s+c.subtreeLength(i));case n.elementReferenceCapture:if(r instanceof Element)return u=r,d=c.elementReferenceCaptureId(i),u.setAttribute(U(d),""),0;throw new Error("Reference capture frames can only be children of element frames.");case n.markup:return this.insertMarkup(e,r,o,i),1;default:throw new Error(`Unknown frame type: ${l}`)}var u,d}insertElement(e,t,r,o,a,i,s){const c=e.frameReader,l=c.elementName(i),u="svg"===l||O(r)?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l),d=N(u);let h=!1;const f=s+c.subtreeLength(i);for(let i=s+1;i<f;i++){const s=e.referenceFramesEntry(a,i);if(c.frameType(s)!==n.attribute){A(u,r,o),h=!0,this.insertFrameRange(e,t,d,0,a,i,f);break}this.applyAttribute(e,t,u,s)}h||A(u,r,o),u instanceof HTMLOptionElement?this.trySetSelectValueFromOptionElement(u):u instanceof HTMLSelectElement&&j in u&&q(u,u._blazorSelectValue)}trySetSelectValueFromOptionElement(e){const t=this.findClosestAncestorSelectElement(e);return!(!t||!(j in t)||t._blazorSelectValue!==e.value||(q(t,e.value),delete t._blazorSelectValue,0))}insertComponent(e,t,n,r){const o=T(t,n),a=e.frameReader.componentId(r);this.attachComponentToElement(a,o)}insertText(e,t,n,r){const o=e.frameReader.textContent(r);A(document.createTextNode(o),t,n)}insertMarkup(e,t,n,r){const o=T(t,n),a=(i=e.frameReader.markupContent(r),O(t)?(K.innerHTML=i||" ",K):(J.innerHTML=i||" ",J.content));var i;let s=0;for(;a.firstChild;)A(a.firstChild,o,s++)}applyAttribute(e,t,n,r){const o=e.frameReader,a=o.attributeName(r),i=o.attributeEventHandlerId(r);if(i){const e=W(a);this.eventDelegator.setListener(n,e,i,t)}else this.tryApplySpecialProperty(e,n,a,r)||n.setAttribute(a,o.attributeValue(r))}tryApplySpecialProperty(e,t,n,r){switch(n){case"value":return this.tryApplyValueProperty(e,t,r);case"checked":return this.tryApplyCheckedProperty(e,t,r);default:return!!n.startsWith(z)&&(this.applyInternalAttribute(e,t,n.substring(z.length),r),!0)}}applyInternalAttribute(e,t,n,r){const o=r?e.frameReader.attributeValue(r):null;if(n.startsWith(X)){const e=W(n.substring(X.length));this.eventDelegator.setStopPropagation(t,e,null!==o)}else{if(!n.startsWith(V))throw new Error(`Unsupported internal attribute '${n}'`);{const e=W(n.substring(V.length));this.eventDelegator.setPreventDefault(t,e,null!==o)}}}tryApplyValueProperty(e,t,n){const r=e.frameReader;if("INPUT"===t.tagName&&"time"===t.getAttribute("type")&&!t.getAttribute("step")){const e=n?r.attributeValue(n):null;if(e)return t.value=e.substring(0,5),!0}switch(t.tagName){case"INPUT":case"SELECT":case"TEXTAREA":{const e=n?r.attributeValue(n):null;return t instanceof HTMLSelectElement?(q(t,e),t._blazorSelectValue=e):t.value=e,!0}case"OPTION":{const e=n?r.attributeValue(n):null;return e||""===e?t.setAttribute("value",e):t.removeAttribute("value"),this.trySetSelectValueFromOptionElement(t),!0}default:return!1}}tryApplyCheckedProperty(e,t,n){if("INPUT"===t.tagName){const r=n?e.frameReader.attributeValue(n):null;return t.checked=null!==r,!0}return!1}findClosestAncestorSelectElement(e){for(;e;){if(e instanceof HTMLSelectElement)return e;e=e.parentElement}return null}insertFrameRange(e,t,n,r,o,a,i){const s=r;for(let s=a;s<i;s++){const a=e.referenceFramesEntry(o,s);r+=this.insertFrame(e,t,n,r,o,a,s),s+=G(e,a)}return r-s}}function G(e,t){const r=e.frameReader;switch(r.frameType(t)){case n.component:case n.element:case n.region:return r.subtreeLength(t)-1;default:return 0}}function W(e){if(e.startsWith("on"))return e.substring(2);throw new Error(`Attribute should be an event name, but doesn't start with 'on'. Value: '${e}'`)}function q(e,t){e.value=t||""}const Z={};let Q=!1,ee=!1,te=!1,ne=null;const re={listenForNavigationEvents:function(e){ne=e,te||(te=!0,window.addEventListener("popstate",(()=>ie(!1))))},enableNavigationInterception:function(){ee=!0},navigateTo:oe,getBaseURI:()=>document.baseURI,getLocationHref:()=>location.href};function oe(e,t,n=!1){const r=ce(e);if(!t&&ue(r))ae(r,!1,n);else if(t&&location.href===e){const t=e+"?";history.replaceState(null,"",t),location.replace(e)}else n?history.replaceState(null,"",r):location.href=e}function ae(e,t,n=!1){Q=!0,n?history.replaceState(null,"",e):history.pushState(null,"",e),ie(t)}async function ie(e){ne&&await ne(location.href,e)}let se;function ce(e){return se=se||document.createElement("a"),se.href=e,se.href}function le(e,t){return e?e.tagName===t?e:le(e.parentElement,t):null}function ue(e){const t=(n=document.baseURI).substr(0,n.lastIndexOf("/")+1);var n;return e.startsWith(t)}const de={init:function(e,t,n,r=50){const o=fe(t);(o||document.documentElement).style.overflowAnchor="none";const a=new IntersectionObserver((function(r){r.forEach((r=>{var o;if(!r.isIntersecting)return;const a=t.getBoundingClientRect(),i=n.getBoundingClientRect().top-a.bottom,s=null===(o=r.rootBounds)||void 0===o?void 0:o.height;r.target===t?e.invokeMethodAsync("OnSpacerBeforeVisible",r.intersectionRect.top-r.boundingClientRect.top,i,s):r.target===n&&n.offsetHeight>0&&e.invokeMethodAsync("OnSpacerAfterVisible",r.boundingClientRect.bottom-r.intersectionRect.bottom,i,s)}))}),{root:o,rootMargin:`${r}px`});a.observe(t),a.observe(n);const i=c(t),s=c(n);function c(e){const t=new MutationObserver((()=>{a.unobserve(e),a.observe(e)}));return t.observe(e,{attributes:!0}),t}he[e._id]={intersectionObserver:a,mutationObserverBefore:i,mutationObserverAfter:s}},dispose:function(e){const t=he[e._id];t&&(t.intersectionObserver.disconnect(),t.mutationObserverBefore.disconnect(),t.mutationObserverAfter.disconnect(),e.dispose(),delete he[e._id])}},he={};function fe(e){return e?"visible"!==getComputedStyle(e).overflowY?e:fe(e.parentElement):null}const me={navigateTo:oe,registerCustomEventType:function(e,t){if(!t)throw new Error("The options parameter is required.");if(i.has(e))throw new Error(`The event '${e}' is already registered.`);if(t.browserEventName){const n=s.get(t.browserEventName);n?n.push(e):s.set(t.browserEventName,[e]),l.forEach((n=>n(e,t.browserEventName)))}i.set(e,t)},_internal:{navigationManager:re,domWrapper:{focus:function(e,t){if(!(e instanceof HTMLElement))throw new Error("Unable to focus an invalid element.");e.focus({preventScroll:t})}},Virtualize:de}};window.Blazor=me;let pe=!1;const ve="function"==typeof TextDecoder?new TextDecoder("utf-8"):null,ge=ve?ve.decode.bind(ve):function(e){let t=0;const n=e.length,r=[],o=[];for(;t<n;){const n=e[t++];if(0===n)break;if(0==(128&n))r.push(n);else if(192==(224&n)){const o=63&e[t++];r.push((31&n)<<6|o)}else if(224==(240&n)){const o=63&e[t++],a=63&e[t++];r.push((31&n)<<12|o<<6|a)}else if(240==(248&n)){let o=(7&n)<<18|(63&e[t++])<<12|(63&e[t++])<<6|63&e[t++];o>65535&&(o-=65536,r.push(o>>>10&1023|55296),o=56320|1023&o),r.push(o)}r.length>1024&&(o.push(String.fromCharCode.apply(null,r)),r.length=0)}return o.push(String.fromCharCode.apply(null,r)),o.join("")},be=Math.pow(2,32),ye=Math.pow(2,21)-1;function Ee(e,t){return e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24}function we(e,t){return e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24>>>0)}function Ie(e,t){const n=we(e,t+4);if(n>ye)throw new Error(`Cannot read uint64 with high order part ${n}, because the result would exceed Number.MAX_SAFE_INTEGER.`);return n*be+we(e,t)}class Se{constructor(e){this.batchData=e;const t=new Te(e);this.arrayRangeReader=new Ae(e),this.arrayBuilderSegmentReader=new ke(e),this.diffReader=new Ce(e),this.editReader=new De(e,t),this.frameReader=new Ne(e,t)}updatedComponents(){return Ee(this.batchData,this.batchData.length-20)}referenceFrames(){return Ee(this.batchData,this.batchData.length-16)}disposedComponentIds(){return Ee(this.batchData,this.batchData.length-12)}disposedEventHandlerIds(){return Ee(this.batchData,this.batchData.length-8)}updatedComponentsEntry(e,t){const n=e+4*t;return Ee(this.batchData,n)}referenceFramesEntry(e,t){return e+20*t}disposedComponentIdsEntry(e,t){const n=e+4*t;return Ee(this.batchData,n)}disposedEventHandlerIdsEntry(e,t){const n=e+8*t;return Ie(this.batchData,n)}}class Ce{constructor(e){this.batchDataUint8=e}componentId(e){return Ee(this.batchDataUint8,e)}edits(e){return e+4}editsEntry(e,t){return e+16*t}}class De{constructor(e,t){this.batchDataUint8=e,this.stringReader=t}editType(e){return Ee(this.batchDataUint8,e)}siblingIndex(e){return Ee(this.batchDataUint8,e+4)}newTreeIndex(e){return Ee(this.batchDataUint8,e+8)}moveToSiblingIndex(e){return Ee(this.batchDataUint8,e+8)}removedAttributeName(e){const t=Ee(this.batchDataUint8,e+12);return this.stringReader.readString(t)}}class Ne{constructor(e,t){this.batchDataUint8=e,this.stringReader=t}frameType(e){return Ee(this.batchDataUint8,e)}subtreeLength(e){return Ee(this.batchDataUint8,e+4)}elementReferenceCaptureId(e){const t=Ee(this.batchDataUint8,e+4);return this.stringReader.readString(t)}componentId(e){return Ee(this.batchDataUint8,e+8)}elementName(e){const t=Ee(this.batchDataUint8,e+8);return this.stringReader.readString(t)}textContent(e){const t=Ee(this.batchDataUint8,e+4);return this.stringReader.readString(t)}markupContent(e){const t=Ee(this.batchDataUint8,e+4);return this.stringReader.readString(t)}attributeName(e){const t=Ee(this.batchDataUint8,e+4);return this.stringReader.readString(t)}attributeValue(e){const t=Ee(this.batchDataUint8,e+8);return this.stringReader.readString(t)}attributeEventHandlerId(e){return Ie(this.batchDataUint8,e+12)}}class Te{constructor(e){this.batchDataUint8=e,this.stringTableStartIndex=Ee(e,e.length-4)}readString(e){if(-1===e)return null;{const n=Ee(this.batchDataUint8,this.stringTableStartIndex+4*e),r=function(e,t){let n=0,r=0;for(let o=0;o<4;o++){const a=e[t+o];if(n|=(127&a)<<r,a<128)break;r+=7}return n}(this.batchDataUint8,n),o=n+((t=r)<128?1:t<16384?2:t<2097152?3:4),a=new Uint8Array(this.batchDataUint8.buffer,this.batchDataUint8.byteOffset+o,r);return ge(a)}var t}}class Ae{constructor(e){this.batchDataUint8=e}count(e){return Ee(this.batchDataUint8,e)}values(e){return e+4}}class ke{constructor(e){this.batchDataUint8=e}offset(e){return 0}count(e){return Ee(this.batchDataUint8,e)}values(e){return e+4}}const Fe="__bwv:";let Re=!1;function Oe(e,t){Le("OnRenderCompleted",e,t)}function _e(e,t,n,r,o){Le("BeginInvokeDotNet",e?e.toString():null,t,n,r||0,o)}function xe(e,t,n){Le("EndInvokeJS",e,t,n)}function Pe(e,t){return Le("OnLocationChanged",e,t),Promise.resolve()}function Le(e,...t){const n=function(e,t){return Re?null:`__bwv:${JSON.stringify([e,...t])}`}(e,t);n&&window.external.sendMessage(n)}const He={init:function(e,t){t._blazorInputFileNextFileId=0,t.addEventListener("click",(function(){t.value=""})),t.addEventListener("change",(function(){t._blazorFilesById={};const n=Array.prototype.map.call(t.files,(function(e){const n={id:++t._blazorInputFileNextFileId,lastModified:new Date(e.lastModified).toISOString(),name:e.name,size:e.size,contentType:e.type,readPromise:void 0,arrayBuffer:void 0};return t._blazorFilesById[n.id]=n,Object.defineProperty(n,"blob",{value:e}),n}));e.invokeMethodAsync("NotifyChange",n)}))},toImageFile:async function(e,t,n,r,o){const a=Me(e,t),i=await new Promise((function(e){const t=new Image;t.onload=function(){e(t)},t.src=URL.createObjectURL(a.blob)})),s=await new Promise((function(e){var t;const a=Math.min(1,r/i.width),s=Math.min(1,o/i.height),c=Math.min(a,s),l=document.createElement("canvas");l.width=Math.round(i.width*c),l.height=Math.round(i.height*c),null===(t=l.getContext("2d"))||void 0===t||t.drawImage(i,0,0,l.width,l.height),l.toBlob(e,n)})),c={id:++e._blazorInputFileNextFileId,lastModified:a.lastModified,name:a.name,size:(null==s?void 0:s.size)||0,contentType:n,readPromise:void 0,arrayBuffer:void 0};return e._blazorFilesById[c.id]=c,Object.defineProperty(c,"blob",{value:s}),c},ensureArrayBufferReadyForSharedMemoryInterop:async function(e,t){const n=await Be(e,t);Me(e,t).arrayBuffer=n},readFileData:async function(e,t,n,r){const o=await Be(e,t);return btoa(String.fromCharCode.apply(null,new Uint8Array(o,n,r)))}};function Me(e,t){const n=e._blazorFilesById[t];if(!n)throw new Error(`There is no file with ID ${t}. The file list may have changed.`);return n}function Be(e,t){const n=Me(e,t);return n.readPromise||(n.readPromise=new Promise((function(e,t){const r=new FileReader;r.onload=function(){e(r.result)},r.onerror=function(e){t(e)},r.readAsArrayBuffer(n.blob)}))),n.readPromise}let Ue=!1;async function je(){if(Ue)throw new Error("Blazor has already started.");Ue=!0,function(){const t={AttachToDocument:(e,t)=>{!function(e,t,n){const r=document.querySelector(e);if(!r)throw new Error(`Could not find any element matching selector '${e}'.`);!function(e,t,n){let r=Z[0];r||(r=Z[0]=new Y(0)),r.attachRootComponentToLogicalElement(n,t)}(0,N(r,!0),t)}(t,e)},RenderBatch:(e,t)=>{try{const n=function(e){const t=atob(e),n=t.length,r=new Uint8Array(n);for(let e=0;e<n;e++)r[e]=t.charCodeAt(e);return r}(t);(function(e,t){const n=Z[0];if(!n)throw new Error("There is no browser renderer with ID 0.");const r=t.arrayRangeReader,o=t.updatedComponents(),a=r.values(o),i=r.count(o),s=t.referenceFrames(),c=r.values(s),l=t.diffReader;for(let e=0;e<i;e++){const r=t.updatedComponentsEntry(a,e),o=l.componentId(r),i=l.edits(r);n.updateComponent(t,o,i,c)}const u=t.disposedComponentIds(),d=r.values(u),h=r.count(u);for(let e=0;e<h;e++){const r=t.disposedComponentIdsEntry(d,e);n.disposeComponent(r)}const f=t.disposedEventHandlerIds(),m=r.values(f),p=r.count(f);for(let e=0;e<p;e++){const r=t.disposedEventHandlerIdsEntry(m,e);n.disposeEventHandler(r)}Q&&(Q=!1,window.scrollTo&&window.scrollTo(0,0))})(0,new Se(n)),Oe(e,null)}catch(t){Oe(e,t.toString())}},NotifyUnhandledException:(e,t)=>{Re=!0,console.error(`${e}\n${t}`),async function(){let e=document.querySelector("#blazor-error-ui");e&&(e.style.display="block"),pe||(pe=!0,document.querySelectorAll("#blazor-error-ui .reload").forEach((e=>{e.onclick=function(e){location.reload(),e.preventDefault()}})),document.querySelectorAll("#blazor-error-ui .dismiss").forEach((e=>{e.onclick=function(e){const t=document.querySelector("#blazor-error-ui");t&&(t.style.display="none"),e.preventDefault()}})))}()},BeginInvokeJS:e.jsCallDispatcher.beginInvokeJSFromDotNet,EndInvokeDotNet:e.jsCallDispatcher.endInvokeDotNetFromJS,Navigate:re.navigateTo};window.external.receiveMessage((e=>{const n=function(e){if(Re||!e||!e.startsWith(Fe))return null;const t=e.substring(Fe.length),[n,...r]=JSON.parse(t);return{messageType:n,args:r}}(e);if(n){if(!t.hasOwnProperty(n.messageType))throw new Error(`Unsupported IPC message type '${n.messageType}'`);t[n.messageType].apply(null,n.args)}}))}(),e.attachDispatcher({beginInvokeDotNetFromJS:_e,endInvokeJSFromDotNet:xe}),me._internal.InputFile=He,re.enableNavigationInterception(),re.listenForNavigationEvents(Pe),Le("AttachPage",re.getBaseURI(),re.getLocationHref())}o=function(e,t){Le("DispatchBrowserEvent",e,t)},me.start=je,document&&document.currentScript&&"false"!==document.currentScript.getAttribute("autostart")&&je()})();