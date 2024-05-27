import classNames from 'classnames'
import MailIco from './images/mailIco.png'
import PhoneIco from './images/phoneIco.png'
import telegramIco from './images/telegramIco.png'
import vkIco from './images/vkIco.png'
import style from './style.module.css'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeTabId } from '../../redux/slices/tab_id'

function Footer() {

    const dispatch = useDispatch()

    const handleMoveToHeader = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    }

    return (
        <div className={style.footerSection}>
            <div>
                <Link to="/" onClick={handleMoveToHeader} className={classNames(style.nonDecoration, style.logo)}>
                    ГОРОД<span style={{
                        color: "#00B9B6"
                    }}>ТАЛАНТОВ</span>
                </Link>
                <div className={style.socialBtn}>
                    <div style={{
                        cursor: 'pointer'
                    }} onClick={() => {
                            window.location.href = 'https://vk.com/talentcity1'
                        }} className={style.flexContact}>
                        <img  width={28} src={vkIco} alt="" />
                        <p style={{margin: 0}}>
                        Мы в вконтакте
                        </p>
                    </div>
                    <div className={style.flexContact}>
                        <img  width={28} src={MailIco} alt="" />
                        <p style={{margin: 0}}>
                        101talant@mail.ru
                        </p>
                    </div>
                    <div style={{
                        cursor: 'pointer'
                    }} onClick={() => {
                            window.location.href = 'https://t.me/memory_hologram'
                        }}  className={style.flexContact}>
                        <img  width={28} src={telegramIco} alt="" />
                        <p style={{margin: 0}}>
                        Мы в Telegram
                        </p>
                    </div>
                    <div  className={style.flexContact}>
                        <img width={24}  src={PhoneIco} alt="" />
                        <p>
                        +7-916-992-79-45
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.footerLinks}>
                    <p onClick={handleMoveToHeader} className={classNames(style.nonDecoration, style.footerLink)}>Главная</p>
                    <p onClick={() => {
                        const schedule = document.getElementById('schedule')
                        schedule.scrollIntoView({ behavior: "smooth" })
                        dispatch(changeTabId(0))
                    }} className={classNames(style.nonDecoration, style.footerLink)}>Курсы</p>
                    <p onClick={() => {
                         const reviews = document.getElementById('reviews')
                         reviews.scrollIntoView({ behavior: "smooth" })
                    }} className={classNames(style.nonDecoration, style.footerLink)}>Отзывы</p>
                    <p onClick={() => {
                        const schedule = document.getElementById('schedule')
                        schedule.scrollIntoView({ behavior: "smooth" })
                        dispatch(changeTabId(1))
                    }} className={classNames(style.nonDecoration, style.footerLink)}>Расписание</p>
                    <p onClick={() => {
                        const schedule = document.getElementById('schedule')
                        schedule.scrollIntoView({ behavior: "smooth" })
                        dispatch(changeTabId(2))
                    }} className={classNames(style.nonDecoration, style.footerLink)}>Книги</p>
                    <p onClick={() => {
                        const schedule = document.getElementById('schedule')
                        schedule.scrollIntoView({ behavior: "smooth" })
                        dispatch(changeTabId(3))
                    }} className={classNames(style.nonDecoration, style.footerLink)}>Видео</p>
            </div>
        </div>
    )
}

export default Footer