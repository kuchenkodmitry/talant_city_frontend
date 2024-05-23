// import React, { useState } from 'react';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './SliderComponent.css';

// const reviews = [
//   {
//     id: 1,
//     name: 'Иван Иванов',
//     comment: 'Отличный сервис! Быстро и качественно.',
//   },
//   {
//     id: 2,
//     name: 'Анна Петрова',
//     comment: 'Очень довольна работой персонала. Рекомендую!',
//   },
//   {
//     id: 3,
//     name: 'Петр Сидоров',
//     comment: 'Надежная компания. Всегда решают проблемы быстро.',
//   },
//   {
//     id: 4,
//     name: 'Мария Смирнова',
//     comment: 'Профессиональный подход к работе. Спасибо!',
//   },
// ];

// const SliderComponent = () => {
//   const sliderRef = React.useRef(null);
//   const [slideClicked, setSlideClicked] = useState(false);

//   const { reviews } = useSelector(state => state.reviews)
//   const isLoaded = reviews.status == 'loaded'

//   const goToNextSlide = () => {
//     
//       sliderRef.current.slickNext();
//       setSlideClicked(true);
//     }
//   };

//   const goToPrevSlide = () => {
//     
//       sliderRef.current.slickPrev();
//       setSlideClicked(true);
//     }
//   };

//   const handleCardClick = (index) => {
//     
//       sliderRef.current.slickGoTo(index);
//       setSlideClicked(true);
//     }
//   };

//   const handleSlideBeforeChange = () => {
//     setSlideClicked(false);
//   };

//   const playRotationAnimation = (event) => {
//     if (event && event.currentTarget) {
//       const button = event.currentTarget;
//       button.classList.add('rotate-animation');
//       setTimeout(() => {
//         button.classList.remove('rotate-animation');
//       }, 2000);
//     }
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     beforeChange: handleSlideBeforeChange,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className='flexCenter'>
//       <div className="slider-container">
//       <Slider ref={sliderRef} {...settings}>
//         {reviews.items.map((review, index) => (
//           <ReviewsCard key={index} data={review}/>
//         ))}
//       </Slider>

//       <div className="slider-controls">
//         <button className="slider-button prev" onClick={(e) => { goToPrevSlide(); playRotationAnimation(e); }}>
//           Назад
//         </button>
//         <button className="slider-button next" onClick={(e) => { goToNextSlide(); playRotationAnimation(e); }}>
//           Вперед
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default SliderComponent;



// // SliderComponent.jsx
import ReviewsCard from '../../cards/reviews/index'
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './SliderComponent.module.css';
import ButtonNext from './arrowNext.png'
import ButtonPrev from './arrowBack.png'

const SliderComponent = () => {
  const sliderRef = React.useRef(null);
  const [slideClicked, setSlideClicked] = useState(false);

  const { reviews } = useSelector(state => state.reviews)
    const isLoaded = reviews.status == 'loaded'

  const goToNextSlide = () => {
    

      setSlideClicked(true);

  };

  const goToPrevSlide = () => {
    

      setSlideClicked(true);

  };

  const handleCardClick = (index) => {
    
      
      setSlideClicked(true);

  };

  const handleSlideBeforeChange = () => {
    setSlideClicked(false);
  };
// console.log(reviews.items[0]);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 2, // По умолчанию 3 слайда на десктопе
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1321,
        settings: {
          slidesToShow: 1, // 2 слайда на разрешении 1024px
        },
      },
    ],
  };

  return (
    <div id="reviews" style={{
      display: 'relative',
      flexDirection: 'column',
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <p style={{
            fontFamily: "InterBold",
            fontSize: 32,
          }}>
            Отзывы
          </p>
      <div className={styles.sliderContainer}>
      {reviews.items.length > 1? <Slider ref={sliderRef} {...settings}>
        {reviews.items.map((review, index) => (
          <ReviewsCard key={index} data={review}/>
        ))}
      </Slider> : <div style={{
        display: ' flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
     {isLoaded?  <ReviewsCard key={1} data={reviews.items[0]}/> : ''}
        </div>}
    </div>
    </div>
  );
};

export default SliderComponent;
