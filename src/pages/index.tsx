import { NextPage } from 'next'
import Head from 'next/head'
import Home from '@/views/home'

const HomePage: NextPage = () => {

  return (
    <>
      <Head>
        <title>SENNY D</title>
      </Head>
      <Home />
    </>

  )
}

export default HomePage
