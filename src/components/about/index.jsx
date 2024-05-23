import style from "./style.module.css"
import PhotoDirector from './images/director.png'
import video from '../../content/superpuperMemory.MP4'

function About() {
    let today = new Date()
    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: "center", gap: "30px"
        }}>
            <h3 className={style.aboutTitle} id="about">О компании</h3>
            <div className={style.aboutSection}>
                <div className={style.leftColumn}>
                    <div>
                        <h4 className={style.h4title}>
                            НП «Город талантов»
                        </h4>
                        <p className={style.paragraphStyle}>
                            Некоммерческое партнёрство содействия развитию системы образования "Город талантов" продолжает свою деятельность в {today.getFullYear()} году!
                        </p>
                        <p className={style.paragraphStyle}>
                            Студенты, преподаватели, психологи, молодые специалисты и люди, уже  повидавшие достаточно много – интересующиеся новыми направлениями  саморазвития и более быстрого достижения результатов по жизни – в 2000  году объединились в НП «Город талантов». Параллельно с прохождением  тренингов Станислава Мюллера по развитию памяти и повышению личной  эффективности постоянно проводились экспериментальные занятия, мозговые  штурмы, знакомство с опытом лучших тренеров и психологических школ. В  результате уже через два года такой увлекательной деятельности было  создано и запатентовано два прорывных метода столь высокой  эффективности, что в рекламных проспектах того времени указывалась  меньшая часть возможностей, которые люди могли получить на наших курсах.
                        </p>
                        <p className={style.paragraphStyle}>
                            Сегодня, по прошествии нескольких лет в кардинально  переработанном виде эти технологии легли в основу базовых курсов  повышения личной эффективности: «Активный разум – технологии успеха»,  «Парадоксальные возможности голографической памяти» и более десяти  программ и курсов продвинутого уровня.
                        </p>
                    </div>
                    <div>
                        <h4 className={style.h4title}>
                            Главная особенность базовых курсов
                        </h4>
                        <p className={style.paragraphStyle}>
                            Главной особенностью базовых курсов является  комплексный подход к работе мышления, памяти, и разума в целом. В  результате чего люди не только получают многочисленные умения, навыки,  которые с первого же занятия начинают применять в жизни, но и  систематизация всего жизненного опыта и знаний, полученных из других  курсов и книг. Словно многочисленные пазлы, эти фрагментарные  представления складывается в одну простую и стройную картину.
                        </p>
                    </div>
                    <div>
                        <h4 className={style.h4title}>
                            Мы твердо знаем
                        </h4>
                        <p className={style.paragraphStyle}>
                            Что именно сейчас, именно в том месте, где вы сейчас находитесь, читая  эти строки, может открыться очень и очень многое, независимо от вашего  пола, возраста, местоположения, благосостояния, здоровья и настроения.  Мы убедились и продолжаем убеждаться снова и снова, на каждом курсе в  правоте слов Александра Грина: «Чудеса нужно делать своими руками!»
                        </p>
                    </div>
                </div>
                <div className={style.RightColumn}>
                    <div>
                        <h4 className={style.h4title}>
                            «Город талантов» cегодня
                        </h4>
                        <p className={style.paragraphStyle}>
                            Это сотни энтузиастов личностного роста и повышения личной  эффективности, живущие в разных городах и странах, периодически  принимающие участие в исследовательских программах, общественных  мероприятиях (таких, как всероссийский конкурс «Суперпамять»),  обсуждениях, слетах, конференциях. Это книги, журналы, тренажеры и  деловые игры, фонды и гранты.
                        </p>
                        <p className={style.paragraphStyle}>
                            Мы по-прежнему продолжаем создавать новые  пси-технологии, разрабатываем курсы, обучаем тренеров, оказываем  поддержку молодым талантам и прогрессивным начинаниям, но уже на более  высоком уровне. И приглашаем к сотрудничеству тренеров, организаторов,  волонтеров, поскольку осознаем ту пропасть, которая все еще отделяет  существующее положение в сфере психологической грамотности населения от  тех грандиозных возможностей, которые даны людям от природы, но в силу  ряда причин для подавляющего большинства россиян все еще недоступны.
                        </p>
                    </div>
                    <div>
                        <img className={style.logoGoorodTalantov} src={PhotoDirector} alt="logo" />

                    </div>
                    <p>
                        Некоммерческое партнерство содействия развитию системы образования «Город талантов»
                        ОГРН 115500000637
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About