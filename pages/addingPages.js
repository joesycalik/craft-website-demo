import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Digital Garden!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <iframe src="https://www.craft.do/s/tYn9Pp9dbXhWSk"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            width="100%"
            height="100%"
            scrolling="auto">
        </iframe>
      </body>
    </div>
  )
}
