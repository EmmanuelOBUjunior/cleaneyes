import Head from 'next/head'
import React from 'react'

const Meta = () => {
  return (
    <Head>
        <meta name='viewport'/>
    </Head>
  )
}

Meta.defualtProps ={
    title: "Clean Eyes",
    description: "Clean you eyes mahn, you deserve it ",
    keywords: 'movie app, popular movies, movies'
}

export default Meta