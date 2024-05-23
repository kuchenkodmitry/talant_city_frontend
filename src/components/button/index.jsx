import style from './style.module.css'
import classNames from 'classnames'

function Button({details, IsActive, func}){
    return(
    <div onClick={func} className={classNames(style.buttonStyles, IsActive == "true"? style.active : false)}>
        {details}
    </div>
    )
}

export default Button