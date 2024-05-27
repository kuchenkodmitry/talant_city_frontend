import Navbar from "./navbar";
import Banner from "./banner";
import style from './header.module.css';
import 'animate.css';
import classNames from "classnames";


function Header() {
    return (
        <div style={{position: 'relative'}}>
            <div className={style.colorOne}>
            </div>
            <div className={style.colorTwo}></div>
            <div className={(style.header)}>
                <Navbar />
                <Banner />
            </div>
        </div>
    )
}

export default Header