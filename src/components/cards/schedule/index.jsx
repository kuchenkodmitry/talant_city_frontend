import style from './style.module.css'
import exampleImg from './exampleImage.png'
import classNames from 'classnames'
import Button from '../../button/index'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../../redux/slices/modal'
import { openPost, addCuorseId } from "../../../redux/slices/post"
import { generatСomment } from '../../../redux/slices/generatedcomment';
import noPhoto from '../../../content/no-photo.jpg'


function Schedule({ data }) {
    const { title, description_comment, id } = data.curse;
    const { address, name } = data.location;
    const { first_lesson, introductory_lecture } = data;
    const dispatch = useDispatch();
    const {curses} = useSelector(state => state.courses)
    const firstDate = new Date(first_lesson)
    const secondDate = new Date(introductory_lecture)

   const courseLogo = curses.status == 'loaded'? curses.items.find(e => e.id == id) : ''

    console.log('ssss', address)
    return (
        <div className={style.ScheduleCard}>
            <div className={style.courseContent}>
                <div className={style.cardImage} style={{
                    backgroundImage: `url(${courseLogo.photo == null ? noPhoto : courseLogo.photo})`
                }} />
                <div>
                    <p className={classNames(style.width, style.fontBold)}>{title}</p>
                    <p className={classNames(style.width, style.fontBold)}>
                        Адрес проведения: <span className={style.fontRegular}>{(name + (address ? ", " + address : ''))}</span>
                    </p>
                    <p className={classNames(style.width, style.fontRegular)}>
                        {description_comment}
                    </p>
                </div>
            </div>
            <div className={style.dataSections}>
                {/* <div className={style.verticalLine} /> */}
                <div className={style.verticalLine} />
                <div>
                    <p style={{
                        margin: 0
                    }} className={style.fontBold}>Вводная лекция</p>
                    <p className={style.fontBold}>Дата: <span className={style.fontRegular}>{firstDate.toLocaleDateString()}</span></p>
                    <p className={style.fontBold}>Время: <span className={style.fontRegular}>{firstDate.toTimeString().split('G')[0]}</span></p>
                </div>
                <div className={style.verticalLine} />
                <div>
                    <p style={{
                        margin: 0
                    }} className={style.fontBold}>Первое занятие</p>
                    <p className={style.fontBold}>Дата: <span className={style.fontRegular}>{secondDate.toLocaleDateString()}</span></p>
                    <p className={style.fontBold}>Время: <span className={style.fontRegular}>{secondDate.toTimeString().split('G')[0]}</span></p>
                </div>
                <div className={style.verticalLine} />
            </div>
            <div className={style.Buttons}>
                <div onClick={() => {
                    dispatch(addCuorseId(id))
                    dispatch(openPost())
                }}>
                    <Button IsActive={"false"} details={"Подробнее"} />
                </div>
                <div onClick={() => {
                    dispatch(generatСomment({
                        data: firstDate.toLocaleDateString(),
                        time: firstDate.toTimeString().split('G')[0],
                        city: name,
                        courseName: title,
                        headerBtn: false,
                        defaultCourse: id
                    }))
                    dispatch(openModal())
                }}>
                    <Button IsActive={"true"} details={"Записаться"} />
                </div>
            </div>
        </div>
    )
}

export default Schedule