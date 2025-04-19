"use strict";(self.webpackChunkcastizo_restauraciones=self.webpackChunkcastizo_restauraciones||[]).push([[691],{1858:function(e,a,t){var r=t(7294),s=t(4400);a.Z=e=>{let{children:a}=e;const{0:t,1:l}=(0,r.useState)(!1);return r.createElement("div",{className:"min-h-screen flex flex-col"},r.createElement("header",{className:"bg-gradient-to-r from-amber-900 to-amber-800 text-white py-8"},r.createElement("div",{className:"container mx-auto px-4"},r.createElement("h1",{className:"text-4xl font-bold text-center"},"Dorados y Restauraciones El Madrileño"),r.createElement("p",{className:"text-xl text-center mt-2"},"Artesanía y Tradición en Restauración de Muebles"),r.createElement("a",{href:"#contacto",className:"block mt-6 text-center"},r.createElement("button",{className:"bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"},"Contáctanos Ahora")))),r.createElement("nav",{className:"bg-amber-800 sticky top-0 z-50"},r.createElement("div",{className:"container mx-auto px-4"},r.createElement("div",{className:"flex justify-between items-center h-16"},r.createElement("div",{className:"flex-shrink-0"},r.createElement(s.Link,{to:"/",className:"text-white font-bold"},"El Madrileño")),r.createElement("button",{onClick:()=>l(!t),className:"md:hidden text-white hover:text-amber-200"},r.createElement("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:t?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"}))),r.createElement("div",{className:"hidden md:flex space-x-8"},r.createElement(s.Link,{to:"/servicios",className:"text-white hover:text-amber-200"},"Servicios"),r.createElement(s.Link,{to:"/casos-de-exito",className:"text-white hover:text-amber-200"},"Trabajos Realizados"),r.createElement(s.Link,{to:"/sobre-nosotros",className:"text-white hover:text-amber-200"},"Sobre Nosotros"),r.createElement(s.Link,{to:"/contacto",className:"text-white hover:text-amber-200"},"Contacto"))),r.createElement("div",{className:"md:hidden "+(t?"block":"hidden")},r.createElement("div",{className:"px-2 pt-2 pb-3 space-y-1"},r.createElement(s.Link,{to:"/servicios",className:"block text-white hover:text-amber-200 py-2"},"Servicios"),r.createElement(s.Link,{to:"/casos-de-exito",className:"block text-white hover:text-amber-200 py-2"},"Trabajos Realizados"),r.createElement(s.Link,{to:"/sobre-nosotros",className:"block text-white hover:text-amber-200 py-2"},"Sobre Nosotros"),r.createElement(s.Link,{to:"/contacto",className:"block text-white hover:text-amber-200 py-2"},"Contacto"))))),r.createElement("main",{className:"flex-grow"},a),r.createElement("footer",{className:"bg-amber-900 text-white py-8"},r.createElement("div",{className:"container mx-auto px-4"},r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8"},r.createElement("div",null,r.createElement("h3",{className:"text-xl font-bold mb-4"},"Contacto"),r.createElement("p",null,"WhatsApp/Phone: 698 12 62 36"),r.createElement("p",null,"Email: castizorestauraciones@gmail.com")),r.createElement("div",null,r.createElement("h3",{className:"text-xl font-bold mb-4"},"Enlaces Rápidos"),r.createElement("ul",{className:"space-y-2"},r.createElement("li",null,r.createElement(s.Link,{to:"/servicios",className:"hover:text-amber-200"},"Servicios")),r.createElement("li",null,r.createElement(s.Link,{to:"/casos-de-exito",className:"hover:text-amber-200"},"Trabajos Realizados")),r.createElement("li",null,r.createElement(s.Link,{to:"/contacto",className:"hover:text-amber-200"},"Contacto")))),r.createElement("div",null,r.createElement("h3",{className:"text-xl font-bold mb-4"},"Horario"),r.createElement("p",null,"Lunes a Viernes: 9:00 - 18:00"),r.createElement("p",null,"Sábados: 10:00 - 14:00"))),r.createElement("div",{className:"mt-8 text-center"},r.createElement("div",{className:"text-xs text-gray-300 space-y-2 mb-6 max-w-4xl mx-auto"},r.createElement("p",null,"Los precios pueden variar según la complejidad del trabajo, el estado de la pieza y los materiales necesarios. Todos los presupuestos son personalizados."),r.createElement("p",null,"Las imágenes mostradas son ejemplos de trabajos anteriores y no garantizan resultados idénticos. Cada pieza es única y el resultado final puede variar."),r.createElement("p",null,"El tiempo de entrega es estimado y puede variar según la carga de trabajo y la complejidad del proyecto."),r.createElement("p",null,"No nos hacemos responsables de daños preexistentes o deterioros naturales de las piezas. Se recomienda informar de cualquier condición especial de la pieza antes de iniciar el trabajo.")),r.createElement("p",null,"© ",(new Date).getFullYear()," Dorados y Restauraciones El Madrileño. Todos los derechos reservados.")))))}},9542:function(e,a,t){var r=t(7294),s=t(4400);a.Z=e=>{let{title:a,steps:t,isModal:l=!1}=e;const{0:o,1:i}=(0,r.useState)(0),n=l?"h-64":"h-96";return r.createElement("div",{className:l?"":"mt-8"},r.createElement("div",{className:"relative"},r.createElement("img",{src:(0,s.withPrefix)(t[o].imageUrl),alt:t[o].title,className:"w-full "+n+" object-cover rounded-lg"}),r.createElement("div",{className:"absolute inset-0 flex items-center justify-between p-4"},r.createElement("button",{onClick:()=>{i((e=>(e-1+t.length)%t.length))},className:"bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"},r.createElement("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"}))),r.createElement("button",{onClick:()=>{i((e=>(e+1)%t.length))},className:"bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"},r.createElement("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"}))))),r.createElement("div",{className:"mt-4"},r.createElement("h3",{className:"text-xl font-bold mb-2"},t[o].title),r.createElement("p",{className:"text-gray-600"},t[o].description)),r.createElement("div",{className:"flex justify-center space-x-2 mt-4"},t.map(((e,a)=>r.createElement("button",{key:a,onClick:()=>i(a),className:"h-2 w-2 rounded-full "+(o===a?"bg-amber-600":"bg-gray-300")})))),r.createElement("p",{className:"text-xs text-gray-500 italic text-center mt-6 border-t border-gray-200 pt-4"},"Nota: Los pasos descritos son orientativos y pueden variar según las necesidades específicas de cada pieza y proyecto."))}},3217:function(e,a,t){t.d(a,{Z:function(){return l}});var r=t(7294);var s=e=>{let{width:a=400,height:t=300,text:s="Placeholder Image",bgColor:l="#D4A76A",textColor:o="#ffffff"}=e;return r.createElement("div",{style:{width:a+"px",height:t+"px",backgroundColor:l,display:"flex",alignItems:"center",justifyContent:"center",color:o,fontFamily:"sans-serif",fontSize:"1rem",textAlign:"center",borderRadius:"0.5rem"}},s)};var l=e=>{let{title:a,initialState:t,clientNeeds:l,techniques:o,materials:i,results:n,beforeImage:c,afterImage:d}=e;const{0:m,1:u}=(0,r.useState)(!1),{0:p,1:b}=(0,r.useState)(50),{0:g,1:E}=(0,r.useState)(!1),x=(0,r.useRef)(null),v=(e,a)=>{const t=a.getBoundingClientRect(),r=(e-t.left)/t.width*100;b(Math.min(Math.max(r,0),100))};(0,r.useEffect)((()=>{const e=e=>{g&&x.current&&v(e.clientX,x.current)},a=e=>{g&&x.current&&e.touches[0]&&(e.preventDefault(),v(e.touches[0].clientX,x.current))},t=()=>{E(!1)},r=()=>{E(!1)};return g&&(document.addEventListener("mousemove",e),document.addEventListener("mouseup",t),document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",r),document.addEventListener("touchcancel",r)),()=>{document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",r),document.removeEventListener("touchcancel",r)}}),[g]);const h=e=>{e.preventDefault(),E(!0)},f=e=>c&&d?r.createElement("div",{className:"relative w-full h-full",ref:x},r.createElement("div",{className:"absolute inset-0"},r.createElement("img",{src:d,alt:"Después",className:"w-full h-full object-cover rounded-lg"}),r.createElement("div",{className:"absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded"},"Después")),r.createElement("div",{className:"absolute inset-0",style:{clipPath:"inset(0 "+(100-p)+"% 0 0)"}},r.createElement("img",{src:c,alt:"Antes",className:"w-full h-full object-cover rounded-lg"}),r.createElement("div",{className:"absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded"},"Antes")),r.createElement("div",{className:"absolute inset-y-0 cursor-ew-resize",style:{left:p+"%"},onMouseDown:h,onTouchStart:h,onClick:e=>e.stopPropagation()},r.createElement("div",{className:"absolute inset-y-0 -ml-1 w-2 bg-white"}),r.createElement("div",{className:"absolute top-1/2 -ml-4 -mt-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"},r.createElement("span",{className:"text-xs font-bold"},"⇄")))):r.createElement(s,{height:e,text:a});return r.createElement(r.Fragment,null,r.createElement("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden"},r.createElement("div",{className:"relative h-64 cursor-pointer",onClick:()=>u(!0)},f(256)),r.createElement("div",{className:"p-6"},r.createElement("h3",{className:"text-xl font-bold mb-2"},a),r.createElement("button",{onClick:()=>u(!0),className:"bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded transition duration-300"},"Ver Detalles"))),m&&r.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"},r.createElement("div",{className:"bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"},r.createElement("div",{className:"p-6"},r.createElement("div",{className:"flex justify-between items-center mb-4"},r.createElement("h2",{className:"text-2xl font-bold"},a),r.createElement("button",{onClick:()=>u(!1),className:"text-gray-500 hover:text-gray-700"},r.createElement("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})))),r.createElement("div",{className:"relative h-96 mb-8"},f(384)),r.createElement("div",{className:"bg-amber-50 p-6 rounded-lg mb-8"},r.createElement("h3",{className:"text-xl font-bold mb-4 text-amber-800"},"Descripción del Proyecto"),r.createElement("div",{className:"space-y-4"},r.createElement("div",null,r.createElement("h4",{className:"font-bold text-amber-700"},"Estado Inicial"),r.createElement("p",{className:"mt-1"},t)),r.createElement("div",null,r.createElement("h4",{className:"font-bold text-amber-700"},"Necesidades del Cliente"),r.createElement("p",{className:"mt-1"},l)))),r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"},r.createElement("div",{className:"bg-gray-50 p-6 rounded-lg"},r.createElement("h3",{className:"text-lg font-bold mb-3 border-b pb-2"},"Técnicas Utilizadas"),r.createElement("ul",{className:"space-y-2"},o.map(((e,a)=>r.createElement("li",{key:a,className:"flex items-start"},r.createElement("span",{className:"text-amber-600 mr-2"},"•"),r.createElement("span",null,e)))))),r.createElement("div",{className:"bg-gray-50 p-6 rounded-lg"},r.createElement("h3",{className:"text-lg font-bold mb-3 border-b pb-2"},"Materiales Empleados"),r.createElement("ul",{className:"space-y-2"},i.map(((e,a)=>r.createElement("li",{key:a,className:"flex items-start"},r.createElement("span",{className:"text-amber-600 mr-2"},"•"),r.createElement("span",null,e))))))),r.createElement("div",{className:"bg-green-50 p-6 rounded-lg mb-4"},r.createElement("h3",{className:"text-lg font-bold mb-3 text-green-800"},"Resultados"),r.createElement("p",{className:"text-green-900"},n))))))}},9172:function(e,a,t){t.d(a,{u:function(){return r}});const r=[{icon:"🛠️",title:"Restauración de Muebles Antiguos",description:"Restauramos y preservamos muebles con técnicas tradicionales.",steps:[{title:"Evaluación inicial",description:"Analizamos el estado actual del mueble para determinar el mejor proceso de restauración. Evaluamos daños estructurales, estado de la madera, y problemas específicos que requieran atención.",imageUrl:"/images/servicios/restauracion-muebles/1.jpg"},{title:"Limpieza y tratamiento",description:"Eliminación de barnices antiguos y tratamiento contra agentes dañinos. Aplicamos productos específicos para cada tipo de madera y acabado.",imageUrl:"/images/servicios/restauracion-muebles/2.jpg"},{title:"Reparación estructural",description:"Refuerzo de estructuras y reparación de elementos dañados. Utilizamos técnicas tradicionales de carpintería para garantizar la durabilidad.",imageUrl:"/images/servicios/restauracion-muebles/3.jpg"},{title:"Acabados",description:"Aplicación de acabados tradicionales respetando la época del mueble. Utilizamos productos naturales como goma laca y ceras.",imageUrl:"/images/servicios/restauracion-muebles/4.jpg"}]},{icon:"✨",title:"Dorados con Pan de Oro",description:"Aplicación artesanal de pan de oro con técnicas tradicionales.",steps:[{title:"Preparación de la superficie",description:"Limpieza y preparación del soporte para asegurar una adherencia óptima. Incluye la aplicación de varias capas de yeso mate y fino.",imageUrl:"/images/preparacion-dorado.jpg"},{title:"Aplicación del bol",description:"Aplicación de capas de bol rojo o negro según la técnica tradicional. El bol proporciona la base perfecta para el dorado.",imageUrl:"/images/aplicacion-bol.jpg"},{title:"Colocación del pan de oro",description:"Aplicación hoja por hoja del pan de oro con máxima precisión. Utilizamos oro de diferentes quilates según las necesidades.",imageUrl:"/images/pan-oro.jpg"},{title:"Bruñido",description:"Pulido con piedra de ágata para lograr el brillo característico del oro. Este proceso requiere gran habilidad y experiencia.",imageUrl:"/images/brunido.jpg"}]},{icon:"💡",title:"Restauración de Lámparas",description:"Restauración completa de lámparas antiguas.",steps:[{title:"Evaluación del sistema eléctrico",description:"Inspección y diagnóstico del sistema eléctrico. Identificamos componentes a reemplazar y actualizaciones necesarias.",imageUrl:"/images/evaluacion-electrica.jpg"},{title:"Limpieza de cristales",description:"Limpieza especializada de elementos decorativos y cristales. Utilizamos productos específicos para cada material.",imageUrl:"/images/limpieza-cristales.jpg"},{title:"Restauración de estructura",description:"Reparación y refuerzo de la estructura metálica. Incluye soldaduras y tratamientos contra la oxidación.",imageUrl:"/images/estructura-lampara.jpg"},{title:"Actualización eléctrica",description:"Modernización del sistema eléctrico manteniendo la estética original. Cumplimos con todas las normativas de seguridad.",imageUrl:"/images/actualizacion-electrica.jpg"}]}]},1678:function(e,a,t){t.d(a,{y:function(){return r}});const r=[{title:"Restauración de Consola Tallada",initialState:"Estructura debilitada con ensambles sueltos, pérdida de elementos decorativos y acabado deteriorado",clientNeeds:"Recuperar la estabilidad estructural y restaurar la belleza original de los elementos tallados",beforeImage:"/castizo-restauraciones-gatsby/images/trabajos-realizados/mesa/antes.jpg",afterImage:"/castizo-restauraciones-gatsby/images/trabajos-realizados/mesa/despues.jpg",techniques:["Consolidación de ensambles","Restauración de tallas","Acabado tradicional con goma laca","Pulido a muñequilla"],materials:["Madera de nogal para reintegración","Cola orgánica tradicional","Goma laca de alta calidad","Tintes naturales"],results:"Recuperación completa de la estructura y la decoración tallada, devolviendo a la consola su belleza original con un acabado brillante que resalta las tallas."},{title:"Lámpara de Cristal Colgante",initialState:"Lámpara completamente oxidada, con pérdida de baño dorado, cristales sucios y faltantes, y cableado eléctrico obsoleto",clientNeeds:"Restauración del dorado original, limpieza y reposición de cristales, y actualización del sistema eléctrico",beforeImage:"/castizo-restauraciones-gatsby/images/trabajos-realizados/lampara/antes.jpg",afterImage:"/castizo-restauraciones-gatsby/images/trabajos-realizados/lampara/despues.jpg",techniques:["Desmontaje completo de componentes","Limpieza y restauración de cristales","Redorado de elementos metálicos","Renovación del sistema eléctrico"],materials:["Pan de oro para detalles decorativos","Cristales facetados de reposición","Sistema eléctrico certificado","Productos específicos para limpieza de cristal"],results:"Transformación completa de la lámpara recuperando el brillo dorado de la estructura metálica y la transparencia de los cristales, combinando la estética original con un sistema eléctrico moderno y seguro."},{title:"Restauración de Espejo Dorado",initialState:"Marco con estructura comprometida, roturas en las esquinas y pérdida extensa del dorado original",clientNeeds:"Reconstrucción estructural del marco y recuperación del dorado manteniendo la riqueza decorativa original",beforeImage:"/castizo-restauraciones-gatsby/images/trabajos-realizados/espejo-meiras/antes.jpg",afterImage:"/castizo-restauraciones-gatsby/images/trabajos-realizados/espejo-meiras/despues.jpg",techniques:["Reconstrucción del bastidor interno","Restauración de tallas decorativas","Dorado al agua con bruñido","Instalación de espejo nuevo"],materials:["Madera de pino para bastidor","Pan de oro de 23.75 quilates","Bol rojo tradicional","Cristal biselado nuevo"],results:"Restauración completa del espejo recuperando toda la ornamentación dorada y proporcionando una estructura sólida que garantiza su conservación a largo plazo."},{title:"Querubines Barrocos",initialState:"Pareja de esculturas de querubines con pérdida severa del dorado original, policromía deteriorada y suciedad acumulada",clientNeeds:"Recuperación de la ornamentación dorada y conservación de la policromía original de los rostros",beforeImage:"/castizo-restauraciones-gatsby/images/trabajos-realizados/angeles/antes.jpg",afterImage:"/castizo-restauraciones-gatsby/images/trabajos-realizados/angeles/despues.jpg",techniques:["Limpieza de superficies policromadas","Consolidación de la base de madera","Aplicación de dorado al agua","Conservación de policromía original de los rostros"],materials:["Pan de oro de alta calidad","Bol rojo tradicional","Base de preparación tradicional","Productos específicos para limpieza de policromía"],results:"Espectacular transformación recuperando el brillo dorado de las tallas decorativas mientras se preserva la expresividad y carácter original de los rostros policromados."},{title:"Reloj de Pie Inglés",initialState:"Caja severamente dañada con estructura interna comprometida, pérdida de elementos decorativos y acabado degradado",clientNeeds:"Reconstrucción estructural completa de la caja y restauración del acabado original respetando su estilo",beforeImage:"/castizo-restauraciones-gatsby/images/trabajos-realizados/reloj/antes.jpg",afterImage:"/castizo-restauraciones-gatsby/images/trabajos-realizados/reloj/despues.jpg",techniques:["Reconstrucción de estructura interna","Restauración de la caja de madera","Reproducción de elementos faltantes","Acabado tradicional con tinte y barniz"],materials:["Maderas nobles seleccionadas","Cola orgánica para ensambles","Tintes tradicionales","Barniz de acabado satinado"],results:"Completa recuperación estructural y estética del reloj, devolviendo su dignidad y elegancia original con un acabado cálido que realza la belleza de la madera."}]},2715:function(e,a,t){t.r(a),t.d(a,{Head:function(){return u},default:function(){return m}});var r=t(7294),s=t(4400),l=t(1858),o=t(9542);var i=e=>{let{icon:a,title:t,description:s,steps:l}=e;const{0:i,1:n}=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("div",{className:"bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 flex flex-col h-full"},r.createElement("div",null,r.createElement("div",{className:"text-4xl mb-4"},a),r.createElement("h3",{className:"text-xl font-bold mb-2"},t),r.createElement("p",{className:"text-gray-600 mb-4"},s)),r.createElement("div",{className:"mt-auto"},r.createElement("button",{onClick:()=>n(!0),className:"bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded transition duration-300"},"Ver Más"))),i&&r.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"},r.createElement("div",{className:"bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"},r.createElement("div",{className:"p-6"},r.createElement("div",{className:"flex justify-between items-center mb-4"},r.createElement("h2",{className:"text-2xl font-bold"},t),r.createElement("button",{onClick:()=>n(!1),className:"text-gray-500 hover:text-gray-700"},r.createElement("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})))),r.createElement(o.Z,{title:t,steps:l,isModal:!0})))))},n=t(3217),c=t(1678),d=t(9172);var m=()=>r.createElement(l.Z,null,r.createElement("section",{id:"servicios",className:"py-16 bg-amber-50"},r.createElement("div",{className:"container mx-auto px-4"},r.createElement("h2",{className:"text-3xl font-bold text-center mb-12"},"Nuestros Servicios"),r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},d.u.map(((e,a)=>r.createElement(i,Object.assign({key:a},e))))))),r.createElement("section",{id:"casos-de-exito",className:"py-16"},r.createElement("div",{className:"container mx-auto px-4"},r.createElement("h2",{className:"text-3xl font-bold text-center mb-2"},"Trabajos Realizados"),r.createElement("p",{className:"text-center text-gray-600 mb-8"},"Desliza para ver antes y después"),r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},c.y.map(((e,a)=>r.createElement(n.Z,Object.assign({key:a},e))))))),r.createElement("section",{id:"contacto",className:"py-16 bg-amber-50"},r.createElement("div",{className:"container mx-auto px-4"},r.createElement("h2",{className:"text-3xl font-bold text-center mb-12"},"Contacto"),r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8"},r.createElement("div",{className:"bg-white rounded-lg shadow-lg p-6"},r.createElement("div",{className:"text-4xl mb-4 text-center"},"📱"),r.createElement("h3",{className:"text-xl font-bold mb-4 text-center"},"1. Contacto Inicial"),r.createElement("p",{className:"text-gray-600 mb-4 text-center"},"Envíenos fotos de su mueble para una evaluación inicial."),r.createElement("div",{className:"text-center"},r.createElement("a",{href:"https://wa.me/34698126236",target:"_blank",rel:"noopener noreferrer",className:"inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"},"WhatsApp"))),r.createElement("div",{className:"bg-white rounded-lg shadow-lg p-6"},r.createElement("div",{className:"text-4xl mb-4 text-center"},"📋"),r.createElement("h3",{className:"text-xl font-bold mb-4 text-center"},"2. Presupuesto"),r.createElement("p",{className:"text-gray-600 text-center"},"Evaluamos su pieza y le proporcionamos un presupuesto detallado sin compromiso.")),r.createElement("div",{className:"bg-white rounded-lg shadow-lg p-6"},r.createElement("div",{className:"text-4xl mb-4 text-center"},"🚚"),r.createElement("h3",{className:"text-xl font-bold mb-4 text-center"},"3. Recogida"),r.createElement("p",{className:"text-gray-600 text-center"},"Organizamos la recogida y entrega a domicilio de su pieza."))),r.createElement("div",{className:"mt-8 text-center"},r.createElement(s.Link,{to:"/contacto",className:"inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"},"Más Información")))));const u=()=>r.createElement(r.Fragment,null,r.createElement("title",null,"Dorados y Restauraciones El Madrileño - Restauración de Muebles"),r.createElement("meta",{name:"description",content:"Expertos en restauración de muebles antiguos, dorados con pan de oro y reproducción de muebles históricos en Madrid."}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e4414ede37490caa3880.js.map