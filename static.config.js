import React from 'react';

export default {
  siteRoot: "https://jkimau.github.io/motor-junction",
  beforeRenderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    
    return html;
  },
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Motor Junction</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}
