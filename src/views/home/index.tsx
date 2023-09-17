import Image from 'next/image'

const Home = () => {
  return (
    <div className='content-container text-center'>
      <h2 className="tracking-wider">PRODUCER / DJ</h2>
      <div className="grid-cols-2 md:grid">
        <div className="flex justify-center py-4">
          <Image src="/images/sennyd-4.png" alt='home-1' width={360} height={540} />
        </div>
        <div className="flex justify-center py-4">
          <Image src="/images/sennyd-6.png" alt='home-2' width={360} height={480} />
        </div>
        <div className="flex justify-center py-4">
          <Image src="/images/sennyd-1.png" alt='home-3' width={360} height={540} />
        </div>
        <div className="flex justify-center py-4">
          <Image src="/images/sennyd-19.png" alt='home-4' width={360} height={540} />
        </div>
      </div>
    </div>
  )
}

export default Home
