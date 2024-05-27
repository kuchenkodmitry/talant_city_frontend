import style from './style.module.css'
// import bookImage from './cover.webp'
import React from 'react'
import Button from '../../button/index'
import noPhoto from '../../../content/no-photo.jpg'



function BooksCard({data}) {
    const {title, author, publishing_house, the_year_of_publishing, ISBN, count_of_pages, format, link, photo} = data
    const inputFileRef = React.useRef(null)
    return (
        <div className={style.booksCard}>
            <div  style={{
                backgroundImage: `url(${photo == null ? noPhoto : photo})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',}}
                 className={style.bookImage} src={photo} alt="" />
            <div className={style.textContent}>
                <p>Название книги: <span className={style.fontRegular}>{title}</span></p>
                <p>Автор: <span className={style.fontRegular}>{author}</span></p>
                <p>Издательство: <span className={style.fontRegular}>{publishing_house}</span></p>
                <p>ISBN: <span className={style.fontRegular}>{ISBN}</span></p>
                <p>Год издания: <span className={style.fontRegular}>{the_year_of_publishing}</span></p>
                <p>Количество страниц: <span className={style.fontRegular}>{count_of_pages}</span></p>
                <p>Формат: <span className={style.fontRegular}>{format}</span></p>
            </div>
            <div onClick={() => {inputFileRef.current.click()}} className={style.download}>
            <Button details={"Скачать"} IsActive={'true'}/>
            <a ref={inputFileRef} href={link} style={{display: "none"}}></a>
            </div>
        </div>
    )
}

export default BooksCard