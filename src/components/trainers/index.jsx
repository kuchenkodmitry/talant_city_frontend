import style from './style.module.css'
import star from "./images/icon_star.png"
// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux'
import React, {useState} from 'react';
import Slider from 'react-slick';
import TrainerCard from "../cards/coaches/index"
import './SliderComponent.css';
import ButtonNext from './images/arrowNext.png'
import ButtonPrev from './images/arrowBack.png'

function Trainers() {
    const { trainers } = useSelector(state => state.trainers)
    const isLoaded = trainers.status == 'loaded'

    const sliderRef = React.useRef(null);
    const [slideClicked, setSlideClicked] = useState(false);
    const goToNextSlide = () => {
        if (!slideClicked) {
            sliderRef.current.slickNext();
            setSlideClicked(true);
        }
    };

    const goToPrevSlide = () => {
        if (!slideClicked) {
            sliderRef.current.slickPrev();
            setSlideClicked(true);
        }
    };

    const handleCardClick = (index) => {
        if (!slideClicked) {
            sliderRef.current.slickGoTo(index);
            setSlideClicked(true);
        }
    };

    const handleSlideBeforeChange = () => {
        setSlideClicked(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: handleSlideBeforeChange,
        responsive: [
            {
              breakpoint: 1320,
              settings: {
                slidesToShow: 2, // 2 слайда на разрешении 1024px
              },
            },
            {
              breakpoint: 631,
              settings: {
                slidesToShow: 1, // 1 слайд на мобильных устройствах
              },
            },
          ],
    };

    return (
        <div className={style.trainersSection}>
            <div className={style.visitCard}>
                <div className={style.productFree}>
                    <p>Бесплатно</p>
                    <img src={star} alt="" />
                </div>
                <h3 className={style.title}>Бесплатное развитие памяти, внимания и воображения.</h3>
                
                <a className={style.linkToCourse} href="https://t.me/memory_hologram" target='_blank'>
                    Перейти в телеграмм
                </a>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center'
            }}>
            <p style={{
            fontFamily: "InterBold",
            fontSize: 32,
          }}>
            Тренеры
          </p>
                    <div className="slider-container">
                        
                        <Slider ref={sliderRef} {...settings}>
                            {trainers.items.map((review, index) => (
                                <TrainerCard key={index} data={review} />
                            ))}
                        </Slider>

                        
                    </div>
            </div>

        </div>
    )
}

export default Trainers;