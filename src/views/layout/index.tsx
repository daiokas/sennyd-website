import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {

  return (
    <div className='layout max-w-full overflow-x-hidden'>
      <Navbar />
      <div className='mx-auto max-w-5xl'>
        
        {children}

      </div>
      <Footer />
    </div>
  )
}

export default Layout