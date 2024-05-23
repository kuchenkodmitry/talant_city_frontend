import style from './style.module.css'
import AvatarImg from './images/img.png'
import Stars from './images/stars.png'
import classNames from 'classnames'


function ReviewsCard({ data }) {
    const { title, description, curse_name, photo } = data
    return (
        <div className={style.card}>
            <div style={{
                backgroundImage: `url(${photo})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: 100,
                height: 100,
                borderRadius: "15px"
            }} className={style.avatar} />
            <img src={Stars} alt="" className={style.stars} />
            <div style={{
                width: 420
            }}>
                <div>
                    <p className={classNames(style.notMargin, style.reviewerName)}>{title}</p>
                    <p className={classNames(style.notMargin, style.courseName)}>Курс: {curse_name}</p>
                </div>
                <p className={style.text}>
                    {description}
                </p>
            </div>
            <p className={style.moileText}>
                {description}
            </p>
        </div>
    )
}

export default ReviewsCard