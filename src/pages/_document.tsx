// src/pages/_document.tsx

import { Head, Html, Main, NextScript } from "next/document";
import { CSideScript } from "@c-side/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <CSideScript />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Developer, dev, developer ui, ui, ux, html, js, css, react, twitter, instagram, frontend webdeveloper, frontend webdeveloper windsor, windsor, whs, web, webdeveloper, designs, "
        />

        {/* Before anyone flames me for install jquery, this is just a test for c/side */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          type="text/javascript"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
