import Head from 'next/head'

function IndexPage({children, ...props}) {
  return (
    <div>
      <Head>
        <title>{children}</title>
      </Head>
    </div>
  )
}

export default IndexPage