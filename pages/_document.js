import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Emmanuel's portolio 2.0."/>
        <link rel="icon" href="/emmanuel.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
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