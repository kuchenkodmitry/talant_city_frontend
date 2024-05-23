import style from './style.module.css'
import './style.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { closePost } from '../../redux/slices/post';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../button';
import Image from './asdasdasd.png'
import { Height, Padding } from '@mui/icons-material';
import { useEffect, useState, createElement } from 'react';
import { useRef } from 'react';
// import convert from 'html-to-jsx'
import video from '../../content/superpuperMemory.MP4'
import ReactPlayer from 'react-player'
import polozhenie from '../../content/polozhenie.pdf'
import { generatСomment } from '../../redux/slices/generatedcomment';
import { openModal } from '../../redux/slices/modal';
import 'animate.css';
import classNames from 'classnames';


function Post(params) {
    const dispatch = useDispatch()
    const { isOpen, courseId } = useSelector(state => state.post.post)
    const { items, status } = useSelector(state => state.courses.curses)
    const isLoaded = status == 'loaded'
    const refModalOut = useRef(null)
    const data = (isLoaded && courseId !== "superMemory") ? items.find(e => { return e.id == courseId }) : {
        photo: Image,
        description: `<div>
        <p>
        С 2003/2004 учебного года НП «Город талантов» проводит в школах и клубах по месту жительства развивающий конкурс «Суперпамять».
        </p>
        <p>
        В процессе прохождения трёх туров конкурса дети осваивают и применяют навыки запоминания несвязной информации, ассоциативного мышления, простые приёмы запоминания учебной информации.
        </p>
        <p>
        Конкурс проводится в разных городах: как силами партнёров и волонтёров НП «Город талантов», так и силами учителей и родителей, которым высылаются подробные инструкции по проведению трёх туров конкурса, а также раздаточный материал: карточки тренажёров и игровые поля.
        </p>
        <p>
        Призы, сертификаты, фото и видеоотчёты, праздничная атмосфера, полезные навыки, освоенные в игровой форме – это то, что мы с вами можем подарить детям в любом городе, в любой школе нашей страны.
        </p>
        <p>
        Созванивайтесь, пишите, подавайте заявки – это важно, нужно и интересно!
        </p>
        <a href='mailto:101talant@mail.ru'>101talant@mail.ru </a>
    </div>`,
        title: "Конкурс Суперпамять"
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style = 'overflow: hidden'
        } else {
            document.body.style = 'overflow: visible'
        }

    }, [isOpen])

    const handleClose = () => {
        refModalOut.current.classList.add(style.modalAnimate)
        console.log(refModalOut.current.classList);
        // refAimation.current.style
        // refAimation.current.style.color = '#ffff'
        // refAimation.current.classList.add("animate__backOutRight")
        // console.log(refAimation.current.style);
        setTimeout(() => {
            refModalOut.current.classList.remove(style.modalAnimate)
            dispatch(closePost())
        }, 900)
    }
// console.log(data);

    if (data) {
        return (
            <div style={{        overflow: "hidden"

                // backgroundColor:" rgba(123, 123, 123, 0.105)",
                // width: "100%", 
                // position: 'absolute',
                // zIndex: 10040
            }}>
                <div ref={refModalOut}
                    style={{
                        display: isOpen ? 'flex' : 'none',
                        // overflow: 'hidden'
                    }}
                    className={style.modalContent}>
                    <div className={style.modalHeader}>
                        <span className={style.closebutton} onClick={handleClose}>&times;</span>
                        <h4 className={style.title}>{isLoaded ? data.title.toUpperCase() : 'Пост не найден'}</h4>
                    </div>
                    <div className={style.contentBox}>
                        <img className={style.logo} src={data.photo} alt="" />
                        <div className={style.text}>
                            {data.photo != null ? <img className={classNames(style.mobileFlex)} src={data.photo} alt="" /> : ''}
                            <p className={style.paragraph} style={{
                                alignSelf: "center", justifySelf: "center"
                            }} dangerouslySetInnerHTML={{ __html: data.description }} />
                            <div>

                                {isLoaded ? [data].map((e, i) => {
                                    return (
                                        courseId !== "superMemory" ?
                                            e.link_name.map((e, i) => {
                                                return(
                                                    <div>
                                                <ReactPlayer className={style.mobileFlex} width='340px' height='200px' url={e} key={i} />
                                                <ReactPlayer className={style.videoSize} url={e} key={i} />
                                            </div>
                                                )
                                            })
                                             : 
                                            ""
                                                //  <video className={style.videoSizesuperMemory} controls >
                                                //     <source src={video} type="video/mp4" />
                                                // </video>
                                    )
                                }) : ''}
                                {/* */}
                            </div>
                        </div>
                    </div>
                    <div onClick={() => {
                        refModalOut.current.classList.add(style.modalAnimate)
                        setTimeout(() => {
                            refModalOut.current.classList.remove(style.modalAnimate)
                            dispatch(closePost())
                            dispatch(openModal())
                        }, 900)

                    }} className={style.modalFooter}>
                        <Button IsActive={"true"} details={'Записаться'} />
                    </div>
                </div>
                {/* //  */}
                {/* */}
            </div>
        )
    }

}

export default Post