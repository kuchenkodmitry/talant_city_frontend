import style from "./style.module.css"
import React from 'react'
import { useState } from "react";
import "../../../../node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import Button from '../../button/index';
import { isAction } from "redux";

function VideoCard({ data }) {

    const [showComponent, setShowComponent] = useState(false);

    const { title, description, link_name } = data
    return (
        <div className={style.videoCard}>
            <p style={{
                // alignSelf: 'flex-start',
                fontFamily: "InterBold",
                fontSize: 22
            }}>{title} </p>
            <p style={{
                // alignSelf: 'flex-start',
                fontFamily: "InterRegular",
                fontSize: 18
            }}>{description}</p>
            {
                link_name.length <= 1 ?
                    <div>
                        <ReactPlayer width='300px' height='200px' className={style.videoMobile} url={link_name[0]} />
                        <ReactPlayer className={style.video} url={link_name[0]} />
                    </div>
                    :
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        alignItems: 'center',
                        
                    }}>
                        <ReactPlayer className={style.video} url={link_name[0]} />
                        <ReactPlayer width='300px' height='200px' className={style.videoMobile} url={link_name[0]} />
                        {showComponent == false ? <div onClick={() => { setShowComponent(true) }}>
                            <Button details={'Показать больше'} IsActive={"true"} /> </div>
                            :
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "15px",
                                alignItems: 'center',
                                }} >
                                {
                                    link_name.map((e, i) => {
                                        if(i != 0){
                                            return (
                                               <div>
                                                 <ReactPlayer className={style.video} url={e} key={i} />
                                                <ReactPlayer width='300px' height='200px' className={style.videoMobile} url={e} />
                                               </div>

                                            )
                                        }
                                    })
                                }
                                <div onClick={() => { setShowComponent(false) }}>
                                    <Button details={'Показать меньше'} IsActive={"true"} /> </div>
                            </div>
                        }
                    </div>
                //  : link_name.map((e, i) => {
                //     return(<ReactPlayer url={e} key={i}/>)
                // })
            }
            {/* <Button details={'Показать больше' } IsActive={"true"}/> */}
        </div>
    )
}

export default VideoCard