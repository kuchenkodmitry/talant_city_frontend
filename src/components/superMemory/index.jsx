import style from './style.module.css'
import SuperMemoryIco from './images/superMemory.jpeg'
import Arrow from './images/arrow-right.png'
import Button from '../button/index'
import { useSelector, useDispatch } from 'react-redux';
import { generatСomment } from '../../redux/slices/generatedcomment.js';
import { openModal } from '../../redux/slices/modal';
import { openPost, addCuorseId } from '../../redux/slices/post'

function SuperMemory() {
    const { superMemory } = useSelector(state => state.superMemory)
    const isLoaded = superMemory.status == 'loaded'
    const dispatch = useDispatch()

    return (
        <div className={style.cardForm}>
            <div onClick={() => {
                        dispatch(addCuorseId('superMemory'))
                        dispatch(openPost())
                    }} className={style.positionContent}>
                <div className={style.cardLogo} style={{ backgroundImage: `url(${SuperMemoryIco})` }} alt=""> </div>
                <div>
                    <p className={style.title}>Конкурс Супер Память</p>
                    <p className={style.text}>
                        С 2003/2004 учебного года НП «Город талантов» проводит в школах и клубах по месту жительства развивающий конкурс «Суперпамять».
                        В процессе прохождения трёх туров конкурса дети осваивают и применяют навыки запоминания несвязной информации, ассоциативного мышления, простые приёмы запоминания учебной информации.
                        Конкурс проводится в разных городах: как силами партнёров и волонтёров НП «Город талантов», так и силами учителей и родителей, которым высылаются подробные инструкции по проведению трёх туров конкурса, а также раздаточный материал: карточки тренажёров и игровые поля.
                        Призы, сертификаты, фото и видеоотчёты, праздничная атмосфера, полезные навыки, освоенные в игровой форме – это то, что мы с вами можем подарить детям в любом городе, в любой школе нашей страны.
                        Созванивайтесь, пишите, подавайте заявки – это важно, нужно и интересно!
                        101talant@mail.ru

                    </p>
                </div>
                <div className={style.moreDetailsButton}>
                    <p onClick={() => {
                        dispatch(addCuorseId('superMemory'))
                        dispatch(openPost())

                    }} className={style.btnTitle}>Подробнее</p>
                    <img src={Arrow} alt="" />
                </div>
            </div>
            {isLoaded ? superMemory.items.map((e, i) => {
                const event = new Date(e.date);
                return (
                    <div key={i}>
                        <div className={style.line}></div>
                        <div className={style.scheduleLpositionContent}>
                            <div className={style.scheduleTextPosition}>
                                <p className={style.scheduleLabel}>Город проведения: <span className={style.scheduleText}>{e.location_name}</span></p>
                                <p className={style.scheduleLabel}>Дата: <span className={style.scheduleText}>{event.toLocaleDateString()}</span></p>
                                <p className={style.scheduleLabel}>Время: <span className={style.scheduleText}>{event.toTimeString().split('G')[0]}</span></p>
                            </div>
                            <div className={style.btnModal} onClick={() => {
                                dispatch(generatСomment({
                                    data: event.toLocaleDateString(),
                                    time: event.toTimeString().split('G')[0],
                                    city: e.location_name,
                                    courseName: 'Конкурс Супер Память',
                                    headerBtn: false,
                                    defaultCourse: null
                                }))
                                dispatch(openModal());
                            }}>
                                <Button details={'Записаться'} IsActive={'true'} />
                            </div>
                        </div>
                    </div>
                )
            }) : [...Array(1)].map((e, i) => {
                return (
                    <div>
                        Расписание отсутствует
                    </div>
                )
            })}
        </div>
    )
}

export default SuperMemory