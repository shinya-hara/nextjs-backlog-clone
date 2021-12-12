import { Html, Head, Main, NextScript } from 'next/document';

const document = () => (
  <Html>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>
    <body style={{ background: '#f0f0f0' }}>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default document;
