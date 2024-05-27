// import style from './style.module.css'
// import React, { Component } from "react";
// import Slider from "react-slick";
// import ReviewsCard from '../cards/reviews'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import nextArrow from '../trainers/images/arrowNext.png'
// import backArrow from '../trainers/images/arrowBack.png'
// import classNames from 'classnames';
// import { useSelector } from 'react-redux';

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <img src={nextArrow}
//       className={className}
//         onClick={onClick}
//         style={{
//           position: 'absolute',
//             width: "40px",
//             height: "40px",
//             marginRight: "5px",
//             zIndex: 1,
//             // marginTop: window.innerWidth <= 500? 120 : 0
//         }}
//       />
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <img src={backArrow}
//         className={className}
//         style={{
//             width: "40px",
//             height: "40px",
//             marginLeft: "5px",
//             zIndex: 1,
//             marginTop: window.innerWidth <= 500? 120 : 0
//         }}
//         onClick={onClick}
//       />
//     );
//   }

// function Reviews() {
//   // const refSlider = React.useRef(null)
//   // refSlider.current.style = 'width: 300px'
//   // console.log(refSlider.current.width);
//     const settings = {
//         className: "center",
//         centerMode: true,
//         infinite: true,
//         centerPadding: "0px",
//         slidesToShow: window.innerWidth <= 1346?  1 : 2,
//         speed: 500,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         dots: true,
        
//       };

//       const { reviews } = useSelector(state => state.reviews)
//       const isLoaded = reviews.status == 'loaded'
//     return(
//         <div id="reviews" className={classNames("slider-container", style.sliderSize)}>
//           <p style={{
//             fontFamily: "InterBold",
//             fontSize: 32,
//           }}>
//             Отзывы
//           </p>
//            { isLoaded && reviews.items.length <= 1? 
//            <div>
//             {reviews.items.map((e,i) => {
//                      return(
//                          <ReviewsCard key={i} data={e}/>
//                      )
//                  })}
//            </div> :
//              <Slider  {...settings}>
//              {
//                  isLoaded? reviews.items.map((e,i) => {
//                      return(
//                          <ReviewsCard key={i} data={e}/>
//                      )
//                  }) : ''
//              }
//                  </Slider>
//            }
//         </div>
//     )
// }

import React, { useRef, useState } from 'react';
// import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ReviewsCard from '../cards/reviews'
import classNames from 'classnames';
import { useSelector } from 'react-redux';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination } from 'swiper/modules';
// import './styles.css';

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);

  const { reviews } = useSelector(state => state.reviews)
  const isLoaded = reviews.status == 'loaded'

  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };
console.log('asdasd') ;
  return (
    <div id="reviews">
      {reviews.items.length > 1? <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {reviews.items.map((e, i) => (
           <SwiperSlide>
            <ReviewsCard key={i} data={e}/>
           </SwiperSlide>
        ))}
      </Swiper> : 
      <div>
        <ReviewsCard key={1} data={reviews.items[0]}/>
        </div>}
    </div>
  );
}


// export default Reviews