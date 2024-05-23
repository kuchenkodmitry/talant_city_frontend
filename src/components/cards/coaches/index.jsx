import StarsIco from './images/stars.png'
import PhotoImg from './images/photo.png'
import style from './style.module.css'
import arrowIcon from './images/arrow-right.png'

function Coaches({data}) {
    const { name, surname , photo } = data
    return(
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent:'center'
        }}>
            <div className={style.CoachesCard}>
            <div style={{
                backgroundImage: `url(${photo})`,
                width : 150,
                height: 150,
                borderRadius: 15,
                backgroundSize: "cover",
                backgroundPosition: 'center'
            }} />
            <p style={{
                fontFamily: 'InterSamiBold', fontSize: "18px"
            }}> {name + " " + surname} </p>
            <div style={{
                display: "flex", gap: "25px", alignItems: "center"
            }}>
            {/* <img src={StarsIco} alt="" />
            <img src={arrowIcon} alt="" style={{
                cursor: 'pointer'
            }} /> */}
            </div>
        </div>
        </div>
    )
}

export default Coaches