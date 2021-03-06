import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import Requests from '../utils/Requests'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Nav/>
      <Results results={results}/>

    </div>
  )
}
// this is the server-side rendering part..this will execute first and return home component props which it will use to render the movie
export async function getServerSideProps(context){
  const genre=context.query.genre;

  const request=await fetch(`https://api.themoviedb.org/3${Requests[genre]?.url || Requests.fetchTrending.url}`).then(res=>res.json());

  return {
    props:{
      results: request.results,
    }
  }
}
