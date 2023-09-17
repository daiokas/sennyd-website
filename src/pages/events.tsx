import Head from 'next/head'
import Events from '@/views/events'

const EventsPage = () => {
  return (
    <>
      <Head>
        <title>EVENTS</title>
      </Head>
      <Events />
    </>
  )
}

export default EventsPage