import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: 'Lauren Smith',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse corporis aliquid cumque explicabo provident officiis harum tempore. Sed, ab! Hic iste officia dolor quibusdam ratione quia reprehenderit recusandae dolorem sit, cumque harum totam corrupti tempore laudantium doloribus autem ullam rem at est nihil modi ipsa. Aut nulla ullam amet.'
    },
    {
      avatar: AVTR2,
      name: 'James Gareth',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse corporis aliquid cumque explicabo provident officiis harum tempore. Sed, ab! Hic iste officia dolor quibusdam ratione quia reprehenderit recusandae dolorem sit, cumque harum totam corrupti tempore laudantium doloribus autem ullam rem at est nihil modi ipsa. Aut nulla ullam amet.'
    },
    {
      avatar: AVTR3,
      name: 'Jayden Miles',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse corporis aliquid cumque explicabo provident officiis harum tempore. Sed, ab! Hic iste officia dolor quibusdam ratione quia reprehenderit recusandae dolorem sit, cumque harum totam corrupti tempore laudantium doloribus autem ullam rem at est nihil modi ipsa. Aut nulla ullam amet.'
    },
    {
      avatar: AVTR4,
      name: 'Aisha Mohammed',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse corporis aliquid cumque explicabo provident officiis harum tempore. Sed, ab! Hic iste officia dolor quibusdam ratione quia reprehenderit recusandae dolorem sit, cumque harum totam corrupti tempore laudantium doloribus autem ullam rem at est nihil modi ipsa. Aut nulla ullam amet.'
    }
  ]
  return (
    <div className='testimonials'>
      <h4>Review from clients</h4>
      <h1>Testimonials</h1>
      <div className="testimonials__center">
        <Swiper className='testimonials__center--top'>
          {data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide className='testimonial__one testimonial' key={index}>
                <div>
                  <img src={avatar} />
                </div>
                <h5>{name}</h5>
                <p>{review}</p>
            </SwiperSlide>
            )
          })}  
        </Swiper>
        <div className="testimonials__center--bottom">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
