import classNames from "classnames";
import 'animate.css';
import style from './style.module.css'
import imageBanner from './images/headerBanner.png'
import Button from '../../button/index'
import Vkico from './images/vk_ico.png'
import TelegramIco from "./images/telegram_ico.png"
import WhatsAppIco from './images/social-whatsapp-circle-512.png'
import PhoneIco from "./images/Vector.png"
import MailIco from './images/mail.png'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../redux/slices/modal'
import { generatСomment } from '../../../redux/slices/generatedcomment'
import { Link } from "react-router-dom";

function Banner() {
    const dispatch = useDispatch()
    return (
        <div className={classNames(style.Banner)}>
            <div className={classNames(style.leftColumn, "animate__animated animate__backInLeft")}>
                <p className={style.description}>Помогаем улучшать память уже более 20 лет</p>
                <p className={style.title}>Начни развивать память уже сейчас!</p>
                <div className={style.info}>
                    <div onClick={() => {
                        dispatch(openModal());
                        dispatch(generatСomment({
                            courseName: "Заявка создана с помощью кнопки из шапки сайта 'Хочу на Курс'",
                            headerBtn: true,
                            defaultCourse: null
                        }))
                    }}>
                        <Button IsActive={'true'} details={'Хочу на курс'} />
                    </div>
                    <div className={style.socialBtn}>
                        <Link sx={{
                            margin: 0
                        }} target='_blank' to="https://t.me/memory_hologram">
                            <img src={TelegramIco} alt="" />
                        </Link>
                        <Link sx={{
                            margin: 0
                        }} target='_blank' to="https://vk.com/talentcity1">
                            <img src={Vkico} alt="" />
                        </Link>
                        <Link sx={{
                            margin: 0
                        }} target='_blank' to="https://wa.me/79169927945?text=">
                            <img height={40} src={WhatsAppIco} alt="" />
                        </Link>
                    </div>
                    <div className={style.contacts}>
                        <img height={24} src={MailIco} alt="" />
                        <p style={{ textDecoration: "underline" }}>
                            101talant@mail.ru
                        </p>
                    </div>
                    <div className={style.contacts}>
                        <img height={24} src={PhoneIco} alt="" />
                        <p>
                        +7-916-992-79-45
                        </p>
                    </div>
                </div>
            </div>
            <div className={classNames(style.postionImg, style.rightColumn, "animate__animated animate__backInLeft")}>
                <img style={{
                    pointerEvents: "none"
                }} src={imageBanner} alt="" className={style.imgBanner} />
            </div>
            <div className={style.infoMobile}>
                <div className='ziga' onClick={() => {
                    dispatch(generatСomment({
                        courseName: "Заявка создана с помощью кнопки из шапки сайта 'Хочу на Курс'",
                        headerBtn: true,
                        defaultCourse: null
                    }))
                    dispatch(openModal())
                }}><Button IsActive={'true'} details={'Хочу на курс'} /></div>
                <div className={style.socialBtn}>
                    <Link target='_blank' to="https://t.me/memory_hologram">
                        <img src={TelegramIco} alt="" />
                    </Link>
                    <Link target='_blank' to="https://vk.com/talentcity1">
                        <img src={Vkico} alt="" />
                    </Link>
                </div>
                <div className={style.contacts}>
                    <img height={24} src={MailIco} alt="" />
                    <p style={{ textDecoration: "underline" }}>
                        101talant@mail.ru
                    </p>
                </div>
                <div className={style.contacts}>
                    <img height={24} src={PhoneIco} alt="" />
                    <p>
                        +7-908-310-79-15
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner 