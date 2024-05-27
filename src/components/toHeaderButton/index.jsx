import { useState } from 'react'
import pageUpImg from './up-arrow.png'
import style from './style.module.css'

function ToHeaderButton() {
    let [setQwe, qwe] = useState()
      const lexx =  window.addEventListener('scroll', function () {
        if( window.scrollY > 700){
            qwe(true)
        } else{
            qwe(false)
        }
        })    

    return(
        <div style={{
            display: setQwe? 'flex' : 'none',
            position: 'fixed', zIndex: '2',
        }}>
             <img className={style.imgSize} onClick={() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
        }} style={{
            
            position: 'fixed', zIndex: '2',  right: "10%", bottom: "10%", cursor: "pointer", '@media (max-width: 524px)': {
                
            }
        }} src={pageUpImg} alt="" /> 
        </div>
    )
}

export default ToHeaderButton