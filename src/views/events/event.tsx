import Image from 'next/image'
import { IFlyers } from '@/constants/flyers'

type Props = {
  event: IFlyers
}

const EventComponent = ({ event }: Props) => {
  return (
    <div className="mx-6 mt-12 gap-12 md:mt-20 md:flex">
      <div className='flex-0 mb-4 md:mb-0'>
        {
          event.image ? (
            <Image src={event.image} alt={event.image} width={400} height={event.height ?? 400} />
          ) : (
            <video width={400} height={400} controls playsInline>
              <source src={event.video} type="video/mp4" />
            </video>
          )
        }
      </div>
      <div className="flex-1">
        {
          event.desc && (
            <p className="mb-4 whitespace-pre-line">
            RA Description:<br />{event.desc}
            </p>
          )
        }

        {
          event.link && (
            <>
              <span>RA Link:</span><br />
              <a href={event.link} target="_blank" rel="noreferrer">{event.link}</a>
            </>
          )
        }
        {
          event.audio && (
            <>
              <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={event.audio.url} className="mt-4" />
              <div className="soundcloud">
                <a href="https://soundcloud.com/sennyd_music" title="Senny D" target="_blank" rel="noreferrer">Senny D</a>
                <span> · </span>
                <a href={event.audio.link} title={event.audio.title} target="_blank" rel="noreferrer">{event.audio.title}</a>
              </div>
            </>
          )
        }
 
      </div>
    </div>
  )
}

export default EventComponent