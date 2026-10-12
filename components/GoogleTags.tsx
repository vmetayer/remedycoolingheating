"use client";

/*
 * Google Tag Manager + GA4.
 *
 * Kept in a client component on purpose: Next.js serializes *server* component
 * output into an inline RSC payload (self.__next_f), which made the GTM
 * snippets appear twice in the page source. Client component output is only
 * rendered once into the HTML, so the snippets show up exactly once.
 */

const GTM_ID = "GTM-TZZWKFDZ";
const GA4_ID = "G-LG8RXV6DDZ";

const GTM_HEAD = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

/** Google Tag Manager — goes in <head> */
export function GTMHead() {
  return <script dangerouslySetInnerHTML={{ __html: GTM_HEAD }} />;
}

/** Google Tag Manager (noscript) — goes right after <body> opens */
export function GTMBody() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

/** GA4 (gtag.js) — plain tags exactly as Google provides (no next/script preload) */
export function GA4() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');`,
        }}
      />
    </>
  );
}
