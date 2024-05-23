import classNames from 'classnames'
import MailIco from './images/mailIco.png'
import PhoneIco from './images/phoneIco.png'
import telegramIco from './images/telegramIco.png'
import vkIco from './images/vkIco.png'
import style from './style.module.css'


function Footer() {
    return (
        <div className={style.footerSection}>
            <div>
                <a href="" className={classNames(style.nonDecoration, style.logo)}>
                    ГОРОД<span style={{
                        color: "#00B9B6"
                    }}>ТАЛАНТОВ</span>
                </a>
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
                        <img width={28}  src={PhoneIco} alt="" />
                        <p>
                        +7-916-992-79-45
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.footerLinks}>
                    <a href="" className={classNames(style.nonDecoration, style.footerLink)}>Главная</a>
                    <a href="" className={classNames(style.nonDecoration, style.footerLink)}>Курсы</a>
                    <a href="" className={classNames(style.nonDecoration, style.footerLink)}>Отзывы</a>
                    <a href="" className={classNames(style.nonDecoration, style.footerLink)}>Расписание</a>
                    <a href="" className={classNames(style.nonDecoration, style.footerLink)}>Книги</a>
                    <a href="" className={classNames(style.nonDecoration, style.footerLink)}>Видео</a>
            </div>
        </div>
    )
}

export default Footer