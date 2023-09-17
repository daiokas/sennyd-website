import Image from 'next/image'

const About = () => {
  return (
    <div className='content-container mx-auto max-w-3xl'>
      <div className="my-5 flex justify-center md:mt-10">
        <Image src="/images/sennyd-prof.png" alt="prof" width={133} height={240} />
      </div>
      <p className="mb-8 px-8 md:p-0">
        Immersed in the sounds of 80s Western music from an early age,
        thanks to the musical influence of her parents, she ventured into
        the world of dance music during her formative years. It was the
        vibrant EDM/House scene of New York, London, and Amsterdam that
        truly ignited her passion. In 2021, she stepped onto the DJ stage for the first time.
        <br /><br />
        While her journey began with house beats, it was the magnetic pull of the
        techno scene in Berlin and Tokyo that captivated her. She graced the stages
        alongside renowned DJs at iconic Tokyo venues like VISION, WOMB, and ageHa.
        Her presence was also felt at the esteemed techno soirées "SHAPE" at VENT, and
        "INTENTION" at WOMB, hosted by the illustrious DRUNKEN KONG.
        <br /><br />
        Currently making waves in Europe, she's cast her spell on Berlin's renowned
        Kitkat Club and is rapidly emerging as a luminary in the realm of music production.
        The future holds great promise for this rising star.
      </p>
    </div>
  )
}

export default About