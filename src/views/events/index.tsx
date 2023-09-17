import { IFlyers, flyers } from '@/constants/flyers'
import EventComponent from './event'

const Events = () => {
  return (
    <div className='content-container mx-auto max-w-5xl py-10'>
      {
        flyers.map((item: IFlyers, index) => (
          <div key={index}>
            <EventComponent event={item} />
          </div>
        ))
      }
    </div>
  )
}

export default Events