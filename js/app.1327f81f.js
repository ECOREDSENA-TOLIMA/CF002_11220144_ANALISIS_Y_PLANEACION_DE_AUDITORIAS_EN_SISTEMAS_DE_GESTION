(function(e){function a(a){for(var i,o,t=a[0],s=a[1],d=a[2],l=0,u=[];l<t.length;l++)o=t[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,a=0;a<c.length;a++){for(var n=c[a],i=!0,o=1;o<n.length;o++){var t=n[o];0!==r[t]&&(i=!1)}i&&(c.splice(a--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},r={app:0},c=[];function t(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"4db9c8bd","chunk-0206bfa0":"fbcb801b","chunk-0c047e41":"c93e636b","chunk-13a6037e":"47d7da63","chunk-18f95272":"8cc31be1","chunk-25b302c8":"e4a9087b","chunk-26fc7596":"eba76383","chunk-2c06842c":"ee78365c","chunk-2d0c5615":"d7c7fea3","chunk-2d0e96ec":"6332f6f8","chunk-2d208d90":"440b5e7e","chunk-2d21d0e2":"d061f3e9","chunk-2d22c123":"4eaafe36","chunk-2d2747e2":"92eb3dc5","chunk-2e80bb9a":"f5f91733","chunk-319206de":"3faa5257","chunk-32334cb6":"e4cb5e8f","chunk-36769079":"00cac6ab","chunk-3c57cd7b":"25993372","chunk-4cdd78c0":"be97f210","chunk-4f2d402a":"8e19b5a7","chunk-515a8379":"1a9ac9f5","chunk-53ccb27e":"a4d1166c","chunk-55d286b8":"5f60a1a0","chunk-59974754":"c8c954a2","chunk-60cbc06b":"e2d94f73","chunk-659152b8":"d4cd6718","chunk-6e1e538a":"d5b7f1d6","chunk-766a929b":"3e7bd3ca","chunk-c796899c":"702a4d0c","chunk-e8a7823a":"78e05249","chunk-f2df7d2c":"213e5ca0","chunk-fde47172":"1e5f4771",comple:"1fa5a013",creditos:"903a22f5",glosario:"80db1a32",intro:"0890a20e",referencias:"d8277f6e",sintesis:"c3dc29c8",tema1:"7d5a38a5",tema2:"d222a828",tema3:"eaeaedea"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"f113e225","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"1c8dfd2d","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"8d53237c","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"e1c8d939",creditos:"0add9a59",glosario:"852881ef",intro:"31d6cfe0",referencias:"6562c22b",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+i,c=document.getElementsByTagName("link"),t=0;t<c.length;t++){var d=c[t],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===i||l===r))return a()}var u=document.getElementsByTagName("style");for(t=0;t<u.length;t++){d=u[t],l=d.getAttribute("data-href");if(l===i||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=i,delete o[e],m.parentNode.removeChild(m),n(c)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var i=r[e];if(0!==i)if(i)a.push(i[2]);else{var c=new Promise((function(a,n){i=r[e]=[a,n]}));a.push(i[2]=c);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=t(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(n,i,function(a){return e[a]}.bind(null,i));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],c={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},t=c,s=n("2877"),d=Object(s["a"])(t,o,r,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Técnicas de comunicación, evaluación, seguridad y confidencialidad",descripcionCurso:"Este componente se centra en identificar las técnicas de comunicación, evaluación de la seguridad y confidencialidad de la información según la norma ISO 27000, requisitos y aplicación. Así mismo como implementar la verificación del sistema de auditoría.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Técnicas de comunicación",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Revisión del proceso",hash:"t_1_1"},{numero:"1.2",titulo:"Verificación del sistema",hash:"t_1_2"}]},{nombreRuta:"tema2",numero:"2",titulo:"Seguridad y confidencialidad de la información",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"ISO 27000",hash:"t_2_1"},{numero:"2.2",titulo:"Requisitos aplicables según la norma",hash:"t_2_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar PDF",download:"downloads/CFA_02_11220144.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Técnicas de comunicación",referencia:"Herrera, P. (2021). Técnicas de comunicación Asertiva ¡Así logras llegar a un acuerdo! [Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=wUVWHRYJkNo"},{tema:"Revisión de proceso a técnicas de aplicación",referencia:"El administrador 3.0. (2021). Técnicas de auditoría administrativa / aprender técnicas de auditoría administrativa 2021. [Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=KQHFFKfqmAY"},{tema:"Verificación del sistema",referencia:"Mesa, A. (2020). Listas de Verificación en auditorías. [Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=G7o_yIC2dL4"},{tema:"Seguridad y confidencialidad de la información",referencia:"nqa.com. (2013). ISO 27001 Guía de implantación para la seguridad de la información. ",tipo:"Norma",link:"https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-27001-Guia-de-implantacion.pdf"},{tema:"ISO 27000",referencia:"Procem Consultores. (2018). ISO 27001- Seguridad de la Información. [Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=BNdPQU32p2Y"}],glosario:[{termino:"Amenazas",significado:"son aquellas cosas que pueden suceder que dañan los activos de la información, tales como desastres naturales, incendios o ataques de virus, espionaje, etc."},{termino:"Confidencialidad",significado:"la cualidad de la información para no ser divulgada a personas o sistemas no autorizados."},{termino:"Diálogo",significado:"es la comunicación en la que ocurre un intercambio de información entre dos o más personas."},{termino:"Emisor",significado:"la persona (o personas) que emite un mensaje."},{termino:"Receptor",significado:"la persona (o personas) que recibe el mensaje."},{termino:"Redacción",significado:"es el proceso por medio del cual se compone un discurso escrito siendo la redacción un arte, pero sin embargo además siendo una técnica."},{termino:"SGSI",significado:"<span>Sistema de Gestión de la Seguridad de la Información.</span>"}],referencias:[{referencia:"Arenas Ramírez, A. (2016). Información difusa. ",link:"https://www.gestiopolis.com/informacion-difusa/"},{referencia:"Coelho, F. (2017). Comunicación oral. ",link:"https://www.significados.com/comunicacion-oral/"},{referencia:"EALDE, (2020). Elaborar la lista de verificación en auditorías internas ISO 9001:2015. ",link:"https://www.ealde.es/lista-verificacion-auditoria-iso-9001/"},{referencia:"Firma-e (2014). Pilares de la Seguridad de la Información: confidencialidad, integridad y disponibilidad. ",link:"https://www.firma-e.com/blog/pilares-de-la-seguridad-de-la-informacion-confidencialidad-integridad-y-disponibilidad/"},{referencia:"Fonseca, (2011). Existen varios tipos de ruido. "},{referencia:"Huerta Zamora, A. (2016). El arte del manejo de la información y la información difusa. ",link:"https://www.gestiopolis.com/arte-del-manejo-la-informacion-la-informacion-difusa/"},{referencia:"Intedya, (2015). ISO 27000 y el conjunto de estándares de Seguridad de la Información. ",link:"https://www.intedya.com/internacional/757/noticia-iso-27000-y-el-conjuntode-estandares-de-seguridad-de-la-informacion.html"},{referencia:"Isotools, (s.f.). ISO 27000. Sistemas de Gestión la Seguridad de la Información. ",link:"https://www.isotools.us/normas/riesgos-y-seguridad/iso-27001/"},{referencia:"Morales, A. (2019). Qué es la comunicación. ",link:"https://www.todamateria.com/que-es-la-comunicacion/"},{referencia:"Normas ISO. (s.f). ISO 27001 Seguridad de la información. ",link:"https://www.normas-iso.com/iso-27001/"},{referencia:"Oracle. (2011). Gestión de registros de auditoría. ",link:"https://docs.oracle.com/cd/E24842_01/html/E23286/audittask-91.html"},{referencia:"Oracle. (s.f.). Guía de administración del sistema: servicios de seguridad. ",link:"https://docs.oracle.com/cd/E24842_01/html/E23286/auditref-20.html#:~:text=Un%20registro%20de%20auditor%C3%ADa%20es,token%20opcional%20trailer%2C%20lo%20concluye."},{referencia:"Rosas, Sánchez, L. (2012). El uso de información difusa en la toma de decisiones empresariales. ",link:"https://www.gestiopolis.com/el-uso-de-informacion-difusa-en-la-toma-de-decisiones-empresariales/"},{referencia:"Vaca López, Andrea, (2017). Auditar la comunicación, un paso adelante en la evaluación de intangibles. ",link:"https://www.ugc.edu.co/sede/armenia/files/editorial/auditar_la_comunicacion_un_paso_adelante_en_la_evaluacion_de_intangibles.pdf"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Norma Constanza Morales Cruz",cargo:"Responsable de línea de producción",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"May Stefanny González",cargo:"Experta temática",centro:"Regional Norte de Santander - Centro de Industria empresa y servicios regionales"},{nombre:"Gloria Lida Álzate Suarez",cargo:"Diseñadora Instruccional",centro:"Regional Distrito Capital - Centro de Gestión Industrial"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Asesor Metodológico",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Rafael Neftalí Lizcano Reyes ",cargo:"Responsable Equipo Desarrollo Curricular",centro:"Regional Santander - Centro Industrial de Diseño y la Manufactura"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Corrector de Estilo",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Sergio Augusto Ardila Ortiz",cargo:"Diseñador Instruccional",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Viviana Esperanza Herrera Quiñonez",cargo:"Asesora Metodológica",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Aruzidna Sánchez Alonso",cargo:"Diseñadora Web",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Oscar Daniel Espitia Marín",cargo:"Desarrollador Fullstack",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Storyboarde Ilustración",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Nelson Iván Vera Briceño",cargo:"Producción Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Oleg Litvin",cargo:"Animador",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Oscar Daniel Espitia Marín",cargo:"Actividad Didáctica",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Jorge Bustos Gómez",cargo:"Validación y vinculación en plataforma LMS",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Naranjo Farfán",cargo:"Validación de contenidos accesibles",centro:"Regional Tolima - Centro de Comercio y Servicios"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});i["a"].prototype.$config=v;var k=n("9224");i["a"].prototype.$package=k,new i["a"]({router:b,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.8e0c878e.svg"},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.eb1b0a26.png"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.3535bc5f.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.39e60d49.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.e77d0115.png"}});
//# sourceMappingURL=app.1327f81f.js.map