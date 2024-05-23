import classNames from 'classnames';
import React from 'react';
import style from "./style.module.css"
import phoneIcon from './images/phoneIcon.png'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import 'animate.css';
import BurgerBtnIco from './images/burger_menu.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeTabId } from '../../../redux/slices/tab_id';

function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className={classNames(style.navBar, "animate__animated animate__backInDown")}>
                <a href="" className={classNames(style.nonDecoration, style.logo)}>
                    ГОРОД<span style={{
                        color: "#00B9B6"
                    }}>ТАЛАНТОВ</span>
                </a>
                <div onClick={() => {
                    const schedule = document.getElementById('schedule')
                    schedule.scrollIntoView({ behavior: "smooth" })
                    dispatch(changeTabId(1))
                }} className={classNames(style.nonDecoration, style.headerLinks)}>
                    расписание
                </div>
                <div onClick={() => {
                    const reviews = document.getElementById('reviews')
                    reviews.scrollIntoView({ behavior: "smooth" })
                }} className={classNames(style.nonDecoration, style.headerLinks)}>
                    отзывы
                </div>
                <div
                    onClick={() => {
                        const about = document.getElementById('about')
                        about.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={classNames(style.nonDecoration, style.headerLinks)}>
                    о компании
                </div>
                <a href="https://memory-good.ru/" target='_blank' className={classNames(style.nonDecoration, style.headerLinks)}>
                    наша продукция
                </a>
                <div className={classNames(style.nonDecoration, style.mobilePosition)}>
                    <div className={style.phoneNumber}>
                        <p style={{
                            margin: "0"
                        }}>+7-916-992-79-45</p>
                        <img className={style.phoneIco} style={{ cursor: 'pointer' }} onClick={() => {
                            window.location.href = 'tel:+79169927945'
                        }} src={phoneIcon} alt="" />
                    </div>
                    <div className={style.mobileNav}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <img src={BurgerBtnIco} alt="" />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => {
                                handleClose()
                                const schedule = document.getElementById('schedule')
                                schedule.scrollIntoView({ behavior: "smooth" })
                                dispatch(changeTabId(1))
                            }}>Расписание</MenuItem>
                            <MenuItem onClick={() => {
                                const reviews = document.getElementById('reviews')
                                reviews.scrollIntoView({ behavior: "smooth" })
                                handleClose()
                            }}>Отзывы</MenuItem>
                            <MenuItem onClick={() => {
                                handleClose()
                                const about = document.getElementById('about')
                                about.scrollIntoView({ behavior: "smooth" })
                            }}>О компании</MenuItem>
                            <MenuItem onClick={() => {
                                handleClose()
                            }}>  <a style={{
                                textDecoration: 'none',
                                color: "black",
                                fontFamily: 'InterRegular',
                                fontSize: '15px'

                            }} href="https://memory-good.ru/" target='_blank' > Наша продукция</a></MenuItem>
                        </Menu>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar