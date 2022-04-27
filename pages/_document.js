import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.png" />
          <meta name="theme-color" content="#003b59" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat:wght@300&display=swap"
            rel="stylesheet"
          />
          <meta property="og:title" content="Emmanuel Garcia" />
          <meta property="og:type" content="portfolio" />
          <meta
            property="og:description"
            content="Hi my name is Emmanuel Garcia, I am a web developer."
          />
          <meta
            property="og:image"
            content="https://www.emmanuelgarcia.dev/arturo-39.jpg"
          />
          <meta property="og:url" content="https://www.emmanuelgarcia.dev/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="og:description"
            content="Hi my name is Emmanuel Garcia, I am a web developer and this is my portfolio"
          />
          <meta property="og:site_name" content="Emmanuel Garcia" />
          <meta name="twitter:image:alt" content="A picture of Emmanuel" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="myPortal"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
