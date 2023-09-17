import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { FiMenu } from 'react-icons/fi'
import Modal from 'react-modal'
import styles from './navbar.module.scss'


const Navbar = () => {
  const router = useRouter()

  const [ isOpen, setOpen ] = useState<boolean>(false)

  return (
    <>
      <div className={styles.navbar}>
        <div className="relative mx-auto max-w-5xl">
          <div className="relative mx-4 flex justify-between md:hidden">
            <div className="flex gap-2">
              <a href="https://instagram.com/sennydmusic" target="_blank" rel="noreferrer" className="h-6">
                <Image src='/icons/instagram.svg' alt="instagram" color="#fff" width={24} height={24} />
              </a>
              <a href="https://soundcloud.com/sennyd_music" target="_blank" rel="noreferrer" className="h-6">
                <Image src='/icons/soundcloud.svg' alt="soundcloud" color="#fff" width={24} height={24} />
              </a>
              <a href="http://twitter.com/SennyD_music" target="_blank" rel="noreferrer" className="h-6">
                <Image src='/icons/x-twitter.svg' alt="x-twitter" color="#fff" width={24} height={24} />
              </a>
              <a href="https://m.facebook.com/sennydd" target="_blank" rel="noreferrer" className="h-6">
                <Image src='/icons/facebook.svg' alt="facebook" color="#fff" width={24} height={24} />
              </a>
            </div>
            <button onClick={() => setOpen(!isOpen)}>
              <FiMenu size={40} />
            </button>
          </div>
          <div className="mr-16 hidden justify-end gap-2 md:flex">
            <a href="https://instagram.com/sennydmusic" target="_blank" rel="noreferrer" className="h-6">
              <Image src='/icons/instagram.svg' alt="instagram" color="#fff" width={24} height={24} />
            </a>
            <a href="https://soundcloud.com/sennyd_music" target="_blank" rel="noreferrer" className="h-6">
              <Image src='/icons/soundcloud.svg' alt="soundcloud" color="#fff" width={24} height={24} />
            </a>
            <a href="http://twitter.com/SennyD_music" target="_blank" rel="noreferrer" className="h-6">
              <Image src='/icons/x-twitter.svg' alt="x-twitter" color="#fff" width={24} height={24} />
            </a>
            <a href="https://m.facebook.com/sennydd" target="_blank" rel="noreferrer" className="h-6">
              <Image src='/icons/facebook.svg' alt="facebook" color="#fff" width={24} height={24} />
            </a>
          </div>
          <div className="py-2 text-center md:pb-6">
            <h1 className="text-5xl text-primary md:text-6xl">SENNY D</h1>
          </div>
          <nav className="hidden px-8 md:flex">
            <Link href='/' className={`${styles.navlink} ${router.pathname == '/' ? styles.active : ''}`}>
            HOME
            </Link>
            <Link href='/about' className={`${styles.navlink} ${router.pathname == '/about' ? styles.active : ''}`}>
            ABOUT
            </Link>
            <Link href='/events' className={`${styles.navlink} ${router.pathname == '/events' ? styles.active : ''}`}>
            EVENTS
            </Link>
            <Link href='/contact' className={`${styles.navlink} ${router.pathname == '/contact' ? styles.active : ''}`}>
            CONTACT
            </Link>
          </nav>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: 'transparent',
            zIndex: 10,
          },
          content: {
            position: 'relative',
            padding: 0,
            marginRight: 56,
            marginTop: 40,
            marginLeft: 'auto',
            background: '#000',
            width: '66%',
            fontSize: 22,
          },
        }}
        onRequestClose={() => setOpen(false)}
      >
        <nav className={styles.mobileNav}>
          <Link href='/' className={styles.navlink} onClick={() => setOpen(false)}>
             HOME
          </Link>
          <Link href='/about' className={styles.navlink} onClick={() => setOpen(false)}>
             ABOUT
          </Link>
          <Link href='/events' className={styles.navlink} onClick={() => setOpen(false)}>
             EVENTS
          </Link>
          <Link href='/contact' className={styles.navlink} onClick={() => setOpen(false)}>
             CONTACT
          </Link>
        </nav>
      </Modal>
    </>
  )
}

export default Navbar