import React from 'react';
import axios from 'axios';

export default {
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
