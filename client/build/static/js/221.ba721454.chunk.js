"use strict";(self.webpackChunkecommerce_site=self.webpackChunkecommerce_site||[]).push([[221],{9221:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var i,r,a,s,o,c,d=t(2791),l=t(168),m=t(7691),p=m.ZP.div(i||(i=(0,l.Z)(["\n  width: 100%;\n  min-height: 100vh;\n  padding: 0 15px;\n  margin-top: 115px;\n\n  @media screen and (max-width: 600px) {\n    margin-top: 145px;\n    padding: 0 10px;\n  }\n"]))),h=m.ZP.div(r||(r=(0,l.Z)(["\n  text-align: center;\n  font-size: clamp(1.4rem, 2.5vw, 1.8rem);\n  font-weight: 600;\n  margin-bottom: 60px;\n"]))),x=t(7857),u=m.ZP.div(a||(a=(0,l.Z)(["\n  width: 100%;\n  height: 80vh;\n  background-image: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.95),\n      rgba(0, 0, 0, 0.15)\n    ),\n    url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 20px;\n\n  .home__banner-details {\n    width: 75%;\n    height: 100%;\n    color: white;\n    padding-left: 50px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n\n    h1 {\n      font-size: clamp(2.2rem, 5vw, 4rem);\n      margin-bottom: 10px;\n      font-weight: 700;\n    }\n\n    .home__banner-sub-title {\n      font-size: clamp(1rem, 2vw, 1.3rem);\n      font-weight: 500;\n      margin-bottom: 40px;\n      div {\n        margin-bottom: 5px;\n      }\n      span {\n        font-size: clamp(1.1rem, 3vw, 1.6rem);\n        font-weight: bold;\n      }\n    }\n    @media screen and (max-width: 600px) {\n      padding-left: 25px;\n\n      .home__banner-sub-title {\n        div {\n          margin-bottom: 0px;\n          line-height: 1.5rem;\n        }\n      }\n    }\n  }\n\n  @media screen and (max-width: 950px) {\n    height: 60vh;\n  }\n"])),x.Z.banner),g=t(6728),f=t(6871),v=t(184),w=function(){var n=(0,f.s0)();return(0,v.jsx)(u,{children:(0,v.jsxs)("div",{className:"home__banner-details",children:[(0,v.jsx)("h1",{children:"Wear the Best."}),(0,v.jsxs)("div",{className:"home__banner-sub-title",children:[(0,v.jsx)("div",{children:"Super Value Deals"}),(0,v.jsxs)("div",{children:["Upto ",(0,v.jsx)("span",{children:"70% OFF"})," on various prducts"]})]}),(0,v.jsx)(g.v8,{onClick:function(){return n("/explore")},children:"Shop Now"})]})})},b=t(4261),j=m.ZP.div(s||(s=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n  padding: 50px 20px;\n  margin-top: 100px;\n\n  .categories__items {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    .categories__item {\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      width: min(43%, 240px);\n      height: 100%;\n      margin-bottom: 30px;\n      position: relative;\n      cursor: pointer;\n      transition: 300ms transform ease-in-out;\n      img {\n        width: 100%;\n        border-radius: 12px;\n      }\n\n      div {\n        opacity: 0;\n        position: absolute;\n        color: white;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.6);\n        border-radius: 12px;\n        transition: 250ms opacity ease-in;\n        font-weight: 500;\n        letter-spacing: 0.5px;\n        font-size: clamp(12px, 1.5vw, 1rem);\n\n        &:hover {\n          opacity: 1;\n        }\n      }\n\n      &:hover {\n        transform: scale(1.04);\n      }\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    padding: 0px;\n  }\n"]))),Z=t(4104),_=function(){var n=(0,f.s0)(),e=(0,Z.mN)().dispatch,t=[{name:"Men's Cloths",imgUrl:x.Z.men,id:(0,b.Z)()},{name:"Women's Cloths",imgUrl:x.Z.women,id:(0,b.Z)()},{name:"Jewelry",imgUrl:x.Z.jewelry,id:(0,b.Z)()},{name:"Electronics",imgUrl:x.Z.electronics,id:(0,b.Z)()}];return(0,v.jsxs)(j,{children:[(0,v.jsx)(h,{children:"Featured Categories"}),(0,v.jsx)("div",{className:"categories__items",children:t.map((function(t){var i=t.name,r=t.imgUrl,a=t.id;return(0,v.jsxs)("div",{className:"categories__item",onClick:function(){return function(t){var i;i="Men's Cloths"===t?"mensCloths":"Women's Cloths"===t?"womensCloths":t.split(" ").join("").toLowerCase(),e({type:Z.KW.SET_CATEGORIES_FILTER,value:{name:i,checked:!0}}),n("/explore")}(i)},children:[(0,v.jsx)("img",{src:r,alt:i}),(0,v.jsx)("div",{children:i})]},a)}))})]})},y=t(4165),k=t(1413),C=t(5861),E=t(885),P=t(1044),z=m.ZP.div(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 115px 100px;\n\n  @media screen and (min-width: 601px) and (max-width: 1050px) {\n    padding: 115px 70px;\n  }\n\n  @media screen and (max-width: 600px) {\n    padding: 115px 0px;\n  }\n"]))),N=m.ZP.div(c||(c=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),S=t(3077),U=function(){var n=(0,d.useState)([]),e=(0,E.Z)(n,2),t=e[0],i=e[1];(0,d.useEffect)((function(){r()}),[]);var r=function(){var n=(0,C.Z)((0,y.Z)().mark((function n(){var e,t,r;return(0,y.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P.Z.get("https://fakestoreapi.com/products");case 3:e=n.sent,t=e.data,r=t.filter((function(n){return n.rating.rate>2.5&&("men's clothing"===n.category||"women's clothing"===n.category)})).slice(0,8),i(r.map((function(n){return(0,k.Z)((0,k.Z)({},n),{},{count:1})}))),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();return(0,v.jsxs)(z,{children:[(0,v.jsx)(h,{children:"Best Sell Products"}),(0,v.jsx)(N,{children:t.map((function(n){return(0,v.jsx)(S.xs,{item:n},n.id)}))})]})},F=function(){return(0,d.useEffect)((function(){window.scroll(0,0)}),[]),(0,v.jsxs)(p,{children:[(0,v.jsx)(w,{}),(0,v.jsx)(_,{}),(0,v.jsx)(U,{})]})}}}]);
//# sourceMappingURL=221.ba721454.chunk.js.map