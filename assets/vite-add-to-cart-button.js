import{j as a,a as e}from"./vite-index.js";function d({variantId:o,productTitle:r}){return console.log({variantId:o}),a.jsxs("button",{children:["Add ",r," to cart"]})}const t=document.getElementById("add-to-cart-button");if(t){const o=t.dataset.variantId,r=t.dataset.productTitle;ReactDOM.createRoot(t).render(a.jsx(e.StrictMode,{children:a.jsx(d,{variantId:Number.parseInt(o),productTitle:r})}))}
