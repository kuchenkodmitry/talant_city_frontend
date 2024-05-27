import style from './style.module.css'
import Arrow from './images/arrow-right.png'
import ImageLogo from './images/superMemory.jpeg'
import classNames from 'classnames'
import Button from '../../components/button/index'

function Adaptiontext(params) {
    return (
        <div className={style.positionContent}>
            <div className={style.superMemoryBlock}>
                <div className={style.courseContent}>
                    <div style={{ backgroundImage: `url(${ImageLogo})` }} className={style.courseLogo}></div>
                    <div className={style.descritionBlock}>
                        <h3 className={style.title} >Конкурс Супер Память</h3>
                        <p className={style.description}> С 2003/2004 учебного года НП «Город талантов» проводит в школах и клубах по месту жительства развивающий конкурс «Суперпамять».
                            В процессе прохождения трёх туров конкурса дети осваивают и применяют навыки запоминания несвязной информации, ассоциативного мышления, простые приёмы запоминания учебной информации.
                            Конкурс проводится в разных городах: как силами партнёров и волонтёров НП «Город талантов», так и силами учителей и родителей, которым высылаются подробные инструкции по проведению трёх туров конкурса, а также раздаточный материал: карточки тренажёров и игровые поля.
                            Призы, сертификаты, фото и видеоотчёты, праздничная атмосфера, полезные навыки, освоенные в игровой форме – это то, что мы с вами можем подарить детям в любом городе, в любой школе нашей страны.
                            Созванивайтесь, пишите, подавайте заявки – это важно, нужно и интересно!
                            101talant@mail.ru</p>
                        <p className={classNames(style.buttonMore, style.desctopNone)}>Подробнее <img className={style.imageArrow} src={Arrow} alt="" /></p>
                    </div>
                    <p className={classNames(style.buttonMore, style.mobileNone)}>Подробнее <img className={style.imageArrow} src={Arrow} alt="" /></p>
                </div>
                <div className={style.line}></div>
                {/* <div className={style.line}></div> */}
                <div className={style.schudlePositon}>
                    <div className={style.scheduleTextPosition}>
                        <p className={style.scheduleLabel}>Город проведения: <span className={style.scheduleText}>Москва</span></p>
                        <p className={style.scheduleLabel}>Дата: <span className={style.scheduleText}>03.06.2024</span></p>
                        <p className={style.scheduleLabel}>Время: <span className={style.scheduleText}>10:00:00</span></p>
                    </div>
                    <div className={style.positionButton}>
                        <Button details={'Записаться'} IsActive={'true'} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Adaptiontext