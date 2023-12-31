import Head from 'next/head'


const Meta = ({keywords, description, title}) => {
  return (
    <Head>
        <meta name='viewport' content='width-device-width, initial-scale=1'/>
        <meta name='keywords' content={keywords}/>
        <meta name='description' content={description}/>
        <meta charSet='utf-8'/>
        <title>{title}</title>
    </Head>
  )
}


export default Meta

Meta.defaultProps ={
    title: "Clean Eyes",
    description: "Clean you eyes mahn, you deserve it ",
    keywords: 'movie app, popular movies, movies'
}