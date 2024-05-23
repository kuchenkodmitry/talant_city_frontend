import CursesImg from "./images/coursesmind.png"
import style from "./style.module.css"
import Arow from './images/arrow-right.png'
import { useDispatch } from "react-redux";
import { openPost } from "../../../redux/slices/post";
import { addCuorseId } from "../../../redux/slices/post";
import { generatСomment } from '../../../redux/slices/generatedcomment'


function CardCourses({data}) {
 

    const dispatch = useDispatch()
    const {title, description_comment, photo, id} = data;
    return(
        <div  onClick={() => {
            dispatch(addCuorseId(id))
            dispatch(openPost())
        }} className={style.cardCourses}>
        <div className={style.cardLogo} style={{backgroundImage: `url(${photo})`}} alt=""> </div>
        <div>
            <p className={style.title}>{title}</p>
            <p className={style.text}>
                {description_comment}
            </p>
        </div>
        <img className={style.arow} src={Arow} alt=""/>
        </div>
    )
}

export default CardCourses