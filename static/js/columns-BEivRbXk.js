import{a as ee}from"./data-DpBRpdfN.js";import{b as ne,d as te,aW as ae,r as p,A as R,M as j,O as ie,n as H,g as O,o as s,c as m,x as h,F as z,k as D,P as I,ac as q,aX as K,a as M,j as w,B as C,z as L,p as V,t as W,I as P,aY as _e,aV as oe}from"./index-PqeBK8Si.js";import{m as ue}from"./message-Bg6YbALP.js";const J=function(e){let r=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let _ in e)e.hasOwnProperty(_)&&(e[_]&&typeof e[_]=="object"?r[_]=J(e[_]):r[_]=e[_]);return r};var y=te({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,longPressPreventDefault:[Function,Boolean],injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},emits:["open","close"],expose:["show","close","showMenu"],setup(e,{emit:r}){const _=p(0),l=p(0),o=p(!1),g=p(0),t=p(0),v=p(!1),a=p(null),f=p([]),F=R(()=>e.menuList.some(i=>i.children&&i.children.length>0)),x=p(10),S=p();j(v,async i=>{var u,d;if(i){await H();let c=S.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(b=>{c.style.setProperty(`--menu-${b}`,e.menuWrapperCss&&e.menuWrapperCss[b])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(b=>{c.style.setProperty(`--menu-item-${b}`,e.menuItemCss&&e.menuItemCss[b])});let n=(d=(u=e.menuItemCss)==null?void 0:u.arrowSize)==null?void 0:d.match(/\d+/);n?x.value=~~n[0]||10:x.value=10,c.style.setProperty("--menu-item-arrowRealSize",x.value/2+"px"),r("open",e.params,a.value,e.el)}else r("close",e.params,a.value,e.el)});const U=(i,u)=>{i.disabled||i.fn&&typeof i.fn=="function"&&i.fn(e.params,a.value,e.el,u)===!1||(v.value=!1)},X=(i,u)=>{if(!i.disabled){if(i.fn&&typeof i.fn=="function"&&!i.disabled){if(i.fn(e.params,a.value,e.el,u)===!1)return;o.value=!1}v.value=!1}},Y=async(i,u)=>{if(u.children&&!u.disabled){o.value=!0,await H();const d=i.currentTarget;if(!d)return;const{offsetWidth:c}=d,n=d.querySelector(".__menu__sub__wrapper");if(!n)return;const{offsetWidth:b,offsetHeight:k}=n,{innerWidth:Z,innerHeight:E}=window,{top:N,left:$}=d.getBoundingClientRect();$+c+b>Z-5?_.value=$-b+5:_.value=$+c,N+k>E-5?l.value=E-k:l.value=N+5}},A=(i,u,d,c)=>i.map(n=>(n.children&&(n.children=A(n.children,u,d,c)),n.label&&typeof n.label=="function"&&(n.label=n.label(c,u,d)),n.tips&&typeof n.tips=="function"&&(n.tips=n.tips(c,u,d)),n.icon&&typeof n.icon=="function"&&(n.icon=n.icon(c,u,d)),n.hidden&&typeof n.hidden=="function"&&(n.hidden=n.hidden(c,u,d)),n.disabled&&typeof n.disabled=="function"&&(n.disabled=n.disabled(c,u,d)),n)),G=async(i=0,u=0)=>{if(a.value=document.elementFromPoint(i-1,u-1),e.menuHiddenFn?v.value=!e.menuHiddenFn(e.params,a.value,e.el):v.value=!0,!v.value)return;f.value=J(e.menuList),f.value=A(f.value,a.value,e.el,e.params),await H();const{innerWidth:d,innerHeight:c}=window,b=S.value.offsetHeight,k=e.menuWidth||200;t.value=i+k+1>d?d-k-5:i+1,g.value=u+b+1>c?c-b-5:u+1},Q=()=>{v.value=!1},T=R(()=>e.useLongPressInMobile&&"ontouchstart"in window?"touchstart":"mousedown"),B=i=>{S.value&&!S.value.contains(i.currentTarget)&&(v.value=!1,document.oncontextmenu=null)};return j(()=>e.injectCloseListener,i=>{i?document.addEventListener(T.value,B):document.removeEventListener(T.value,B)},{immediate:!0}),ie(()=>{document.removeEventListener(T.value,B)}),{subLeft:_,subTop:l,hoverFlag:o,menuTop:g,menuLeft:t,showMenu:v,clickDomEl:a,calcMenuList:f,arrowSize:x,hasSubMenu:F,MenuWrapper:S,handleMenuItemClick:U,handleSubMenuItemClick:X,handleMenuMouseEnter:Y,show:G,close:Q,clickEventKey:T}}});const se=["onMouseenter"],re={key:0,class:"__menu__item-icon"},de=["innerHTML"],le={class:"__menu__item-label"},me={class:"__menu__item-tips"},ce={class:"__menu__item-arrow-after"},ve={key:0,class:"__menu__item-icon"},be=["innerHTML"],he={class:"__menu__sub__item-label"},pe={class:"__menu__sub__item-tips"};function fe(e,r,_,l,o,g){return s(),O(_e,{to:"body",disabled:!e.appendToBody},[e.showMenu?(s(),m("div",{key:0,ref:"MenuWrapper",class:L(["__menu__wrapper",e.customClass]),style:P({width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`})},[(s(!0),m(z,null,D(e.calcMenuList,(t,v)=>(s(),m(z,null,[!t.hidden&&!t.line?(s(),m("div",I({key:v,class:["__menu__item",t.disabled&&"disabled",t.customClass]},{[K(e.clickEventKey)]:q(a=>e.handleMenuItemClick(t,a),["stop"])},{onMouseenter:a=>e.handleMenuMouseEnter(a,t)}),[e.hasIcon?(s(),m("div",re,[e.iconType==="font-icon"?w((s(),m("i",{key:0,class:L(t.icon)},null,2)),[[C,t.icon]]):e.iconType==="svg-icon"?w((s(),m("div",{key:1,class:"__menu__item-icon-svg",innerHTML:t.icon},null,8,de)),[[C,t.icon]]):e.iconType==="vnode-icon"?(s(),O(V(t.icon),{key:2})):h("v-if",!0)])):h("v-if",!0),M("span",le,W(t.label),1),M("span",me,W(t.tips||""),1),e.hasSubMenu?(s(),m("span",{key:1,class:L(["__menu__item-arrow",{show:e.hasSubMenu&&t.children}]),style:P({width:e.arrowSize+"px",height:e.arrowSize+"px"})},[w(M("span",ce,null,512),[[C,e.hasSubMenu&&t.children]])],6)):h("v-if",!0),t.children&&t.children.length>0&&!t.disabled?w((s(),m("div",{key:2,class:"__menu__sub__wrapper",style:P({width:`${e.menuWidth}px`,top:`${e.subTop}px`,left:`${e.subLeft}px`})},[(s(!0),m(z,null,D(t.children,(a,f)=>(s(),m(z,null,[!a.hidden&&!a.line?(s(),m("div",I({key:f,class:["__menu__sub__item",a.disabled&&"disabled",a.customClass]},{[K(e.clickEventKey)]:q(F=>e.handleSubMenuItemClick(a,F),["stop"])}),[e.hasIcon?(s(),m("div",ve,[e.iconType==="font-icon"?w((s(),m("i",{key:0,class:L(a.icon)},null,2)),[[C,a.icon]]):e.iconType==="svg-icon"?w((s(),m("div",{key:1,class:"__menu__item-icon-svg",innerHTML:a.icon},null,8,be)),[[C,a.icon]]):e.iconType==="vnode-icon"?(s(),O(V(a.icon),{key:2})):h("v-if",!0)])):h("v-if",!0),M("span",he,W(a.label),1),M("span",pe,W(a.tips||""),1)],16)):h("v-if",!0),a.line?(s(),m("div",{key:f,class:"__menu__line"})):h("v-if",!0)],64))),256))],4)),[[C,e.hoverFlag]]):h("v-if",!0)],16,se)):h("v-if",!0),!t.hidden&&t.line?(s(),m("div",{key:v,class:"__menu__line"})):h("v-if",!0)],64))),256))],6)):h("v-if",!0)],8,["disabled"])}function ye(e,r){r===void 0&&(r={});var _=r.insertAt;if(!(typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",_==="top"&&l.firstChild?l.insertBefore(o,l.firstChild):l.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var ge=`.__menu__mask[data-v-3d21bc0a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.__menu__wrapper[data-v-3d21bc0a] {
  --menu-background: #c8f2f0;
  --menu-boxShadow: 0 1px 5px #888;
  --menu-padding: 5px 0;
  --menu-borderRadius: 0;
  --menu-item-height: 30px;
  --menu-item-padding: 0 10px;
  --menu-item-iconSize: 20px;
  --menu-item-iconFontSize: 14px;
  --menu-item-iconColor: #484852;
  --menu-item-labelColor: #484852;
  --menu-item-labelFontSize: 14px;
  --menu-item-tipsColor: #889;
  --menu-item-tipsFontSize: 12px;
  --menu-item-arrowColor: #484852;
  --menu-item-disabledColor: #bcc;
  --menu-item-hoverBackground: rgba(255, 255, 255, 0.8);
  --menu-item-hoverIconColor: inherit;
  --menu-item-hoverLabelColor: inherit;
  --menu-item-hoverTipsColor: inherit;
  --menu-item-hoverArrowColor: inherit;
  --menu-lineColor: #ccc;
  --menu-lineMargin: 5px 0;
}
.__menu__wrapper[data-v-3d21bc0a] {
  position: fixed;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
  z-index: 99999;
}
.__menu__line[data-v-3d21bc0a],
.__menu__sub__line[data-v-3d21bc0a] {
  border-top: 1px solid var(--menu-lineColor);
  margin: var(--menu-lineMargin);
}
.__menu__item[data-v-3d21bc0a],
.__menu__sub__item[data-v-3d21bc0a] {
  display: flex;
  height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: var(--menu-item-padding);
}
.__menu__item .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--menu-item-iconColor);
  width: var(--menu-item-iconSize);
  height: var(--menu-item-iconSize);
}
.__menu__item .__menu__item-icon i[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {
  font-size: var(--menu-item-iconFontSize);
}
.__menu__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.__menu__item .__menu__item-label[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-label[data-v-3d21bc0a] {
  width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: var(--menu-item-labelFontSize);
  color: var(--menu-item-labelColor);
  margin-right: 5px;
  overflow: hidden;
}
.__menu__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-tips[data-v-3d21bc0a] {
  font-size: var(--menu-item-tipsFontSize);
  color: var(--menu-item-tipsColor);
}
.__menu__item .__menu__item-arrow[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-arrow[data-v-3d21bc0a] {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  position: relative;
}
.__menu__item.disabled[data-v-3d21bc0a],
.__menu__sub__item.disabled[data-v-3d21bc0a] {
  cursor: not-allowed;
}
.__menu__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-disabledColor);
}
.__menu__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a] {
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-disabledColor);
}
.__menu__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__item:not(.disabled):hover .__menu__item-icon[data-v-3d21bc0a] {
  color: var(--menu-item-hoverIconColor);
}
.__menu__item:not(.disabled):hover .__menu__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__item:not(.disabled):hover .__menu__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item:not(.disabled):hover .__menu__item-arrow[data-v-3d21bc0a] {
  color: var(--menu-item-hoverArrowColor);
}
.__menu__sub__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item-icon[data-v-3d21bc0a] {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-arrow.show .__menu__item-arrow-after[data-v-3d21bc0a] {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);
  border-top: var(--menu-item-arrowRealSize) solid transparent;
  border-bottom: var(--menu-item-arrowRealSize) solid transparent;
}
.__menu__sub__wrapper[data-v-3d21bc0a] {
  position: fixed;
  visibility: hidden;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
}
.__menu__item:hover .__menu__sub__wrapper[data-v-3d21bc0a] {
  visibility: visible;
}`;ye(ge);y.render=fe;y.__scopeId="data-v-3d21bc0a";y.__file="packages/mouse-menu/mouse-menu.vue";function we(e,r,_){let l=document.createElement(e);return l.setAttribute("class",r),l}y.install=e=>{e.component(y.name,y)};function Ce(e){var o;const r="__mouse__menu__container";let _;document.querySelector(`.${r}`)?_=document.querySelector(`.${r}`):_=we("div",r);const l=ne(y,e);return ae(l,_),document.body.appendChild(_),(o=l.component)==null?void 0:o.proxy}function xe(){const e=p(oe(ee,!0)),r=[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}],_={menuList:[{label:({id:o})=>`ID为：${o}`,disabled:!0},{label:"编辑",tips:"Edit",fn:o=>ue(`您编辑了第 ${e.value.findIndex(g=>g.id===o.id)+1} 行，数据为：${JSON.stringify(o)}`,{type:"success"})}]};function l(o,g,t){t.preventDefault();const{x:v,y:a}=t;Ce({el:t.currentTarget,params:o,menuWrapperCss:{background:"var(--el-bg-color)"},menuItemCss:{labelColor:"var(--el-text-color)",hoverLabelColor:"var(--el-color-primary)",hoverTipsColor:"var(--el-color-primary)"},..._}).show(v,a)}return{columns:r,dataList:e,showMouseMenu:l}}export{xe as useColumns};
