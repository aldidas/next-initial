import Head from 'next/head'

const WebHead = ({ title = 'The Epic Title' }) => {
  return (
    <Head>
      <title>{ title }</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
  )
}

export default WebHead
