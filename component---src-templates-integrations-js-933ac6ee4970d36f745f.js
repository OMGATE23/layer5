(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[1327],{2445:function(t,e,n){var r=n(15301).w_;t.exports.Z=function(t){return r({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(t)}},35141:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(67294),a=n(64956);e.default=function(t){var e=t.children,n=t.className,i=t.style,o=void 0===i?{}:i,c=r.useContext(a.HoneycombContext).gap;return r.createElement("div",{className:n,style:Object.assign(Object.assign({},o),{position:"absolute",top:c/2,left:c/2,right:c/2,bottom:c/2,clipPath:"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",pointerEvents:"auto"})},e)}},46985:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(67294),a=n(64956),i=n(12458),o=r.forwardRef((function(t,e){var n=t.items,o=t.renderItem,c=t.size,l=t.columns,s=t.className,m=t.gap,d=void 0===m?4:m,u=a.getRowSize(c),f=a.getColumnSize(c);return r.createElement(a.HoneycombContext.Provider,{value:{gap:d}},r.createElement("ul",{ref:e,className:s,style:{display:"grid",gridTemplateColumns:"repeat(".concat(4*l,", ").concat(f,"px)"),justifyContent:"center",gridAutoRows:"".concat(u,"px"),padding:"0 ".concat(f,"px"),listStyle:"none"}},n.map((function(t,e){var n=1+3*Math.floor(e/l),a=1+e%l*4,c=o(t,e);return r.createElement(i.default,{key:e,row:n,column:a},c)}))))}));e.default=o},12458:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(67294);e.default=function(t){var e=t.children,n=t.row,a=t.column,i=n%2?"translateX(25%)":"translateX(-25%)";return r.createElement("li",{style:{gridRow:"".concat(n," / span 4"),gridColumn:"".concat(a," / span 4"),pointerEvents:"none",transform:i}},e)}},94526:function(t,e,n){"use strict";var r=n(27424);function a(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var o=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var c=n(67294),l=n(65334),s=n(46985),m=n(64956);e.default=function(t){t.children;var e=t.size,n=t.defaultWidth,i=o(t,["children","size","defaultWidth"]),d=c.useRef(null),u=c.useState(m.getGridColumnsCount(e,n)),f=r(u,2),p=f[0],g=f[1];return c.useEffect((function(){var t,r,i=new l.default((function(t){var n,r=a(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;g(m.getGridColumnsCount(e,i.contentRect.width))}}catch(o){r.e(o)}finally{r.f()}}));if(g(m.getGridColumnsCount(e,null!==(r=null===(t=d.current)||void 0===t?void 0:t.clientWidth)&&void 0!==r?r:n)),null!=d.current){var o=d.current;return i.observe(o),function(){return i.unobserve(o)}}}),[e]),c.createElement(s.default,Object.assign({ref:d,size:e},i,{columns:p}))}},64956:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getColumnSize=e.getRowSize=e.getGridColumnsCount=e.HoneycombContext=void 0;var r=n(67294);e.HoneycombContext=r.createContext({gap:0}),e.getGridColumnsCount=function(t,e){var n=Math.sqrt(3)*t;return Math.floor(e/n)},e.getRowSize=function(t){return t/2},e.getColumnSize=function(t){return Math.sqrt(3)*t/4}},61591:function(t,e,n){"use strict";e.hl=e.NJ=void 0;var r=n(35141);Object.defineProperty(e,"NJ",{enumerable:!0,get:function(){return r.default}});var a=n(46985);var i=n(94526);Object.defineProperty(e,"hl",{enumerable:!0,get:function(){return i.default}})},92102:function(t,e,n){var r=n(92632);t.exports={MDXRenderer:r}},92632:function(t,e,n){var r=n(3515),a=n(861),i=n(38416),o=n(7071),c=["scope","children"];function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=n(67294),d=n(64983).mdx,u=n(76948).useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,i=o(t,c),l=u(e),f=m.useMemo((function(){if(!n)return null;var t=s({React:m,mdx:d},l),e=Object.keys(t),i=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(a(e),[""+n])).apply(void 0,[{}].concat(a(i)))}),[n,e]);return m.createElement(f,s({},i))}},25679:function(t,e,n){"use strict";var r=n(63366),a=n(67294),i=n(37059),o=["childImageSharp","extension","publicURL","alt"];e.Z=function(t){var e=t.childImageSharp,n=t.extension,c=t.publicURL,l=t.alt,s=(0,r.Z)(t,o);return e||"svg"!==n?a.createElement(i.G,Object.assign({image:e.gatsbyImageData},s,{alt:l})):a.createElement("div",{className:"old-gatsby-image-wrapper"},a.createElement("img",{src:c,alt:l}))}},17596:function(t,e,n){"use strict";n.d(e,{gv:function(){return a},nH:function(){return i},$o:function(){return o}});var r=n(43587),a=r.default.div.withConfig({displayName:"Integrationstyle__HoneycombGrid",componentId:"sc-ju97f9-0"})(['\n  \n  .container-active{\n    display: flex;\n    height: 95%;\n    background: white;\n    justify-content: center;\n    align-items: center;\n\n    :hover {\n      transition: all 0.25s ease-in;\n      transform: scale(1.03);    \n      background: #00d3a9;\n        ::after{\n          content: "";\n          background: white;\n          margin: 0px 0px 0 4px;\n          clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);\n          height: 95%;\n          width: 95%;\n          position: absolute;\n          left: 0;\n          z-index: -1;\n      }\n    }    \n  }\n\n  .container-inactive{\n    display: flex;\n    height: 95%;\n    background: white;\n    justify-content: center;\n    align-items: center;\n  }\n  \n\n\n\n  ul li{\n    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));\n  }\n \n  .category {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 2.5625rem 0;\n    gap: 0.625rem;\n    justify-content: center;\n  }\n\n  .items {\n    background-color: #f0f0f0;\n    padding: 0.625rem 1.5625rem;\n    border-radius: 0.625rem;\n    text-transform: uppercase;\n    color: #1e2117;\n    font-size: 0.875rem;\n    cursor: pointer;\n  }\n\n  .selected {\n    background-color: ',";\n    color: ",";\n  }\n\n"],(function(t){return t.theme.darkJungleGreenColor}),(function(t){return t.theme.white})),i=r.default.div.withConfig({displayName:"Integrationstyle__IntegrationsWrapper",componentId:"sc-ju97f9-1"})(["\n  max-width: 75rem;\n  margin: 5.1875rem auto;\n\n  .heading {\n    text-align: center;\n\n    h1 {\n      line-height: 3.75rem;\n    }\n\n    h2 {\n      font-weight: normal;\n    }\n  }\n\n"]),o=r.default.div.withConfig({displayName:"Integrationstyle__IntegrationCard",componentId:"sc-ju97f9-2"})(["\n  display:flex;\n  margin: 5rem 1rem;\n  gap: 5rem;\n  align-items: stretch;\n  flex-wrap: wrap;\n  justify-content: center;\n  .container{\n    padding: 3.125rem;\n    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);\n    border-radius: 0 3.125rem 3.125rem 3.125rem;\n    display: flex;\n    justify-content: center;\n    gap:0.5rem;\n    flex-direction: column;\n    align-items: center;\n    flex: 0 1 auto;\n    max-width: 30rem;\n    border-width: 0px 1px 1px 0px;\n    border-style: solid;\n    border-color: #00D3A9; \n       \n    p, h2{\n      text-align: center;\n    }\n    \n  }\n\n .open-modal-btn{\n  background-color: #00b39f;\n  color: white;\n  :hover{\n    color:black;\n  }\n }\n"])},94880:function(t,e,n){"use strict";var r=n(67294),a=n(1597),i=n(17596),o=n(61591);e.Z=function(t){var e=t.category,n=(0,a.useStaticQuery)("1370829440"),c=(0,r.useState)(n.allMdx.nodes),l=c[0],s=c[1],m=(0,r.useState)([{id:1,name:"All",isSelected:!1},{id:2,name:"Platforms",isSelected:!1},{id:3,name:"Service Mesh",isSelected:!1},{id:4,name:"Operating System",isSelected:!1},{id:5,name:"Collaboration",isSelected:!1}]),d=m[0],u=m[1];(0,r.useEffect)((function(){return f()}),[]);var f=function(){void 0!==e?d.forEach((function(t){t.name===e&&(t.isSelected=!0)})):d[0].isSelected=!0,u(d),g()},p=function(t){var e=0,n=t.target.innerHTML;"All"==n&&d.forEach((function(t){t.isSelected&"All"!=t.name&&(t.isSelected=!1)})),d.forEach((function(t){t.name==n&&(t.isSelected=!t.isSelected),t.isSelected&&"All"!=t.name&&e++})),d[0].isSelected=0===e,u(d),g()},g=function(){if(d[0].isSelected)s(n.allMdx.nodes);else{var t=[];d.forEach((function(e){e.isSelected&&n.allMdx.nodes.forEach((function(n){n.frontmatter.category==e.name&&(t=[...t,n])}))})),s(t)}};return r.createElement(i.gv,null,r.createElement("section",{className:"category"},d.map((function(t){return r.createElement("p",{key:t.id,className:t.isSelected?"items selected":"items",onClick:p},t.name)}))),r.createElement(o.hl,{size:90,items:l,renderItem:function(t){return"InProgress"===t.frontmatter.status?r.createElement(o.NJ,{className:"container-inactive",style:{background:"#A0AAAA"}},r.createElement("img",{src:t.frontmatter.integrationIcon.publicURL,alt:t.frontmatter.title,style:{filter:"brightness(0) invert(1)"},height:60})):r.createElement(a.Link,{to:"/service-mesh-management/meshery"+t.fields.slug},r.createElement(o.NJ,{className:"container-active"},r.createElement("img",{src:t.frontmatter.integrationIcon.publicURL,alt:t.frontmatter.title,height:60})))}}))}},81542:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return A}});var r=n(67294),a=n(43587),i=n(26052),o=n(9357),c=n(63941),l=n(2445),s=n(63689),m=n(92102),d=n(37059),u=n(1597),f=n(37242),p=a.default.section.withConfig({displayName:"cta-book__CTAWrapper",componentId:"sc-1pq89g-0"})(["\n  .book_cover {\n    display: flex;\n    margin: auto;\n    background: #00b39f;\n    .book_col {\n      max-height: 40rem;\n    }\n    .text {\n      padding: 5rem 5rem 5rem 13rem;\n      @media screen and (max-width: 1200px) {\n        padding: 5rem 5rem 5rem 10rem;\n      }\n      @media screen and (max-width: 950px) {\n        padding: 5rem;\n      }\n      @media screen and (max-width: 750px) {\n        padding: 2rem;\n      }\n      .cover {\n        border: 2px solid white;\n        width: 240px;\n        padding: 10px;\n        text-align: center;\n      }\n      h1,\n      p {\n        color: white;\n      }\n    }\n  }\n  .book_img {\n    text-align: center;\n    align-self: center;\n    .bookLink {\n    }\n    img {\n      max-height: 38rem;\n      vertical-align: middle;\n      @media screen and (max-width: 576px) {\n        max-height: 28rem;\n        margin: 1rem auto;\n      }\n    }\n  }\n\n\n"]),g=function(){return r.createElement(p,null,r.createElement(f.X2,{className:"book_cover"},r.createElement(f.JX,{xs:12,sm:6,className:"book_col text"},r.createElement("p",{className:"cover"},"Services-first Network"),r.createElement("h1",null,"What is a ",r.createElement("br",null)," Service Mesh?"),r.createElement("p",null,"Service meshes provide intent-based networking for microservices describing desired behavior of the network in the face of constantly changing conditions and network topology."),r.createElement(s.Z,{primary:!0,className:"learn",title:"Learn More",url:"/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"})),r.createElement(f.JX,{xs:12,sm:6,className:"book_col book_img"},r.createElement(u.Link,{to:"/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition",className:"bookLink"},r.createElement(d.S,{src:"../../../../assets/images/learn/book-cover.png",alt:"Book Image",layout:"constrained",__imageData:n(50141)})))))},h=n(25679),x=n(48538),b=(n.p,a.default.section.withConfig({displayName:"howItWork__HowIntegrationWorksWrapper",componentId:"sc-1rrncqv-0"})(["\n\n  background-color: ",";\n\tpadding-bottom: 2rem;\n\n\t.section-data {\n\t\tpadding: 1rem 2rem 0;\n\t\ttext-align: center;\n\t}\n\n\t.section-header {\n\t\tmargin-top: 2rem;\n\t\th4 {\n\t\t\ttextTransform: uppercase;\n\t\t}\n\t\tp {\n\t\t\tfont-size: 1.25rem;\n\t\t\tline-height: 1.25rem;\n\t\t\tmargin: 1rem 0 0;\n\n\t\t\tspan {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t}\n\t}\n\t.integration-section {\n\t\tmargin: 3rem auto;\n\t\tmax-width: 85%;\n\n\t\t.integration-section-row {\n\t\t\tmargin: 4rem 0;\n\t\t\talign-items: center;\n\t\t}\n\t\th2, h4 {\n\t\t\t\tcolor: black;\n\t\t\t}\n\t\t.integration-section-data {\n\t\t\th1, h3, p {\n\t\t\t\ttext-align: start; color: ",";\n\t\t\t}\n\t\t}\n\n\t\t.integration-section-caraousel {\n\t\t\t.slick-slider {\n\t\t\t\t.slick-list {\n\t\t\t\t\tmax-width: 50rem;\n\n\t\t\t\t\t.slick-slide {\n\t\t\t\t\t\timg {\n\t\t\t\t\t\t\tmax-height: 20rem;\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.slick-arrow{\n\t\t\t\t\tdisplay: none !important;\n\t\t\t\t}\n\n\t\t\t\t.slick-dots {\n\t\t\t\t\tbottom: 0;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 52rem;\n\t\t\t\t\twidth: 8rem;\n\n\t\t\t\t\tli {\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: auto;\n\t\t\t\t\t\tmargin: 1rem auto;\n\t\t\t\t\t\topacity: 0.6;\n\n\t\t\t\t\t\ta {\n\t\t\t\t\t\t\tdisplay: block;\n\n\t\t\t\t\t\t\timg {\n\t\t\t\t\t\t\t\theight: 5rem;\n\t\t\t\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.slick-dots \n\t\t\t\t\tli.slick-active {\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 1600px) {\n\t\t.integration-section .integration-section-caraousel .slick-slider {\n\t\t\t.slick-list {\n\t\t\t\tmax-width: 38rem;\n\t\t\t}\n\n\t\t\t.slick-dots {\n\t\t\t\tleft: 40rem;\n\t\t\t\twidth: 6rem;\n\n\t\t\t\tli a img {\n\t\t\t\t\theight: 4rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 1200px) {\n\t\tpadding-bottom: 2rem;\n\t\t.integration-section {\n\t\t\t.integration-section-row {\n\t\t\t\tmargin: 2.5rem 0;\n\t\t\t}\n\n\t\t\t.integration-section-data {\n\t\t\t\th3, p {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.integration-section-caraousel .slick-slider {\n\t\t\t\t.slick-list {\n\t\t\t\t\tmax-width: 80%;\n\t\t\t\t\tmargin: 2rem auto;\n\t\t\t\t}\n\n\t\t\t\t.slick-dots {\n\t\t\t\t\tleft: 92%;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 960px) {\n\t\t.integration-section .integration-section-caraousel .slick-slider .slick-list {\n\t\t\t.slick-slide {\n\t\t\t\timg {\n\t\t\t\t\tmax-height: 16rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 700px) {\n\t\t.integration-section {\n\t\t\tmax-width: 95%;\n\n\t\t\t.integration-section-caraousel .slick-slider {\n\t\t\t\t.slick-list {\n\t\t\t\t\tmax-width: 85%;\n\t\t\t\t\tmargin: 2rem 0;\n\t\t\t\t}\n\t\t\t\t.slick-dots {\n\t\t\t\t\tleft: 90%;\n\t\t\t\t\twidth: 4rem;\n\n\t\t\t\t\tli a img {\n\t\t\t\t\t\theight: 2.5rem;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 500px) {\n\t\t.integration-section {\n\t\t\tmax-width: 95%;\n\n\t\t\t.integration-section-caraousel .slick-slider {\n\t\t\t\t.slick-list {\n\t\t\t\t\tmax-width: 80%;\n\t\t\t\t\t.slick-slide {\n\t\t\t\t\t\timg {\n\t\t\t\t\t\t\tmax-height: 10rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.slick-dots {\n\t\t\t\t\tleft: 85%;\n\t\t\t\t\ttop: -1rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"],(function(t){return t.theme.DarkTheme?"#101010":"#F7F7F7"}),(function(t){return t.theme.secondaryColor}),(function(t){return t.theme.primaryColor}))),v=function(t){var e=t.name,n=t.slides,a={customPaging:function(t){return r.createElement("a",null,r.createElement("img",{src:n[t].publicURL,alt:"Slide "+t}))},infinite:!1,speed:400,slidesToShow:1,slidesToScroll:1,dots:!0,vertical:!0,verticalSwiping:!0};return r.createElement(b,null,r.createElement("div",{className:"section-data"},r.createElement("div",{className:"section-header"},r.createElement("h4",null,"How it Works"),r.createElement("h1",null,"See It in Action "),r.createElement("p",null,"Better together - ",e," with ",r.createElement("span",null,"Meshery"))),r.createElement("div",{className:"integration-section"},r.createElement(f.X2,{className:"integration-section-row"},r.createElement(f.JX,{xs:12,xl:4,className:"integration-section-data"},r.createElement("h3",null,"The Performance Yardstick"),r.createElement("p",null,"Assess the value of your service mesh in context of its cost. Benchmark and manage the performance of your application across different service meshes. Compare and manage service mesh overhead.")),r.createElement(f.JX,{xs:12,xl:8,className:"integration-section-caraousel"},r.createElement(x.Z,a,n.map((function(t,e){return r.createElement("div",{key:e},r.createElement("img",{src:t.publicURL,alt:"Slide "+(e+1)}))}))))))))},y=a.default.section.withConfig({displayName:"individual-integrationsstyle__IntegrationPageWrapper",componentId:"sc-1stceni-0"})(["\n\n\t.old-gatsby-image-wrapper img{\n\t\theight: 90px;\n\t}\n\t.herosection{\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tmargin: 0 auto;\n\t\tpadding: 1rem 2rem;\n\t\th2 {\n\t\t\tfont-size: 2.5rem;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.hero-header {\n\t\t\tcolor: #00B39F;\n\t\t}\n\t\timg {\n\t\t\tmargin-bottom: 0.5rem;\n\t\t}\n\t\tp {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t.overview{\n\t\tdisplay: flex;\n\t\tmargin: 2rem;\n\t\tgap: 5rem;\n\t\tjustify-content: center;\n\t\t@media (max-width: 700px) {\n\t\t\tflex-direction: column-reverse;\n\t\t};\n\t}\n\n\t.feature{\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\th3 {\n\t\t\tpadding-bottom: 1rem;\n\t\t}\n\t\tul {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\tli {\n\t\t\t\tlist-style-type: none;\n        margin: 2rem 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n        :before {\n\t\t\t\t\tcontent: url(",");\n\t\t\t\t\tmargin-right: 1rem;\n\t\t\t\t\theight: 2rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.content{\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 0.5rem;\n\n\t\tp {\n\t\t\tline-height: 2rem;\n\t\t\ttext-align: justify;\n\t\t}\n\n\t\t.external-btns {\n\t\t\tdisplay: flex;\n\t\t\tgap: 2rem;\n\t\t\tflex-wrap: wrap;\n\n\t\t\t.get-started {\n\t\t\t}\n\n\t\t\t.doc-link {\n\t\t\t\tdisplay: flex;\n\t\t\t\tgap: 0.5rem;\n\t\t\t\talign-items: center;\n\t\t\t\ta {\n\t\t\t\t\tcolor: ",";\n\t\t\t\t\ttransition: padding 0.5s ease;\t\n                                }\n\t\t\t\ta:hover{\n\t\t\t\t\tpadding-right: 5px;\n\t\t\t\t}\n\t\t\t\tsvg {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tmargin: auto;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t@media (min-width: 700px) {\n\t\t\twidth: 35rem;\n\t\t};\n\t}\n\n\t.integration-collection{\n\t\tmargin: 2rem auto;\n\t\tmax-width: 1200px;\n\t\t\n\t\th2{\n\t\t\ttext-align: center;\n\t\t}\n\t}\n"],"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMiAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMC41IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI1IiBmaWxsPSIjQzlGQ0Y2Ii8+CjxwYXRoIGQ9Ik0yMS4xMTk5IDEyLjY1OTdMMTQuMDc5OSAxOS42OTk3TDEwLjg3OTkgMTYuNDk5NyIgc3Ryb2tlPSIjMDBCMzlGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",(function(t){return t.theme.text})),w=n(94880),E=function(t){var e=t.data.mdx,n=e.frontmatter,a=e.body;return console.log(n.category),r.createElement(y,null,r.createElement("section",{className:"herosection"},r.createElement(h.Z,Object.assign({},n.integrationIcon,{alt:n.title})),r.createElement("h2",null,n.title," with "," ",r.createElement("span",{className:"hero-header"},"Meshery")),r.createElement("p",null,n.subtitle)),r.createElement("section",{className:"overview"},r.createElement("div",{className:"feature"},r.createElement("h2",null,"Features"),r.createElement("ul",null,n.featureList.map((function(t,e){return r.createElement("li",{key:e},t)})))),r.createElement("div",{className:"content"},r.createElement("h2",null,"Overview"),r.createElement(m.MDXRenderer,null,a),r.createElement("section",{className:"external-btns"},r.createElement(s.Z,{primary:!0,className:"get-started",title:"Get Started",url:"../../getting-started"}),r.createElement("span",{className:"doc-link"},r.createElement("a",{href:n.docURL},"See Documentation"),r.createElement(l.Z,null))))),r.createElement(v,{name:n.title,slides:n.workingSlides}),r.createElement("section",{className:"integration-collection"},r.createElement("h2",null,"Related Integrations"),r.createElement(w.Z,{category:n.category})),r.createElement(g,null))},k=n(42308),S=n(35085),I=n(38001),A=function(t){var e=t.data,n=(0,r.useState)(),l=n[0],s=n[1];return r.createElement(a.ThemeProvider,{theme:"dark"===l?I.k:I.Z},r.createElement(i.Z,null,r.createElement(S.Z,null),r.createElement(o.Z,{title:e.mdx.frontmatter.title,image:e.mdx.frontmatter.integrationIcon.publicURL}),r.createElement(c.Z,{theme:l,themeSetter:function(t){s(t)}}),r.createElement(E,{data:e}),r.createElement(k.Z,null)))}},63405:function(t,e,n){var r=n(73897);t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.__esModule=!0,t.exports.default=t.exports},3515:function(t,e,n){var r=n(6015),a=n(69617);function i(e,n,o){return a()?(t.exports=i=Reflect.construct.bind(),t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=i=function(t,e,n){var a=[null];a.push.apply(a,e);var i=new(Function.bind.apply(t,a));return n&&r(i,n.prototype),i},t.exports.__esModule=!0,t.exports.default=t.exports),i.apply(null,arguments)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},38416:function(t){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},69617:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},79498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},42281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},7071:function(t){t.exports=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,n){var r=n(63405),a=n(79498),i=n(86116),o=n(42281);t.exports=function(t){return r(t)||a(t)||i(t)||o()},t.exports.__esModule=!0,t.exports.default=t.exports},50141:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,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"},"images":{"fallback":{"src":"/static/9a2c56c6c1b2a81bd7db678626f15607/b207f/book-cover.png","srcSet":"/static/9a2c56c6c1b2a81bd7db678626f15607/d5c95/book-cover.png 224w,\\n/static/9a2c56c6c1b2a81bd7db678626f15607/514df/book-cover.png 449w,\\n/static/9a2c56c6c1b2a81bd7db678626f15607/b207f/book-cover.png 897w","sizes":"(min-width: 897px) 897px, 100vw"},"sources":[{"srcSet":"/static/9a2c56c6c1b2a81bd7db678626f15607/c4a45/book-cover.webp 224w,\\n/static/9a2c56c6c1b2a81bd7db678626f15607/9a58b/book-cover.webp 449w,\\n/static/9a2c56c6c1b2a81bd7db678626f15607/bda54/book-cover.webp 897w","type":"image/webp","sizes":"(min-width: 897px) 897px, 100vw"}]},"width":897,"height":1273}')}}]);
//# sourceMappingURL=component---src-templates-integrations-js-933ac6ee4970d36f745f.js.map