import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link rel="shortcut icon" href="favicon.png" type="image/png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Lato:wght@400;700;900&family=Nunito+Sans:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
