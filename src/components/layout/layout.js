import cn from "classnames";
import s from "./layout.module.css"

const Layout = ({title, urlBg, colorBg, children}) => {

    const bgImg = urlBg ? {backgroundImage : `url(${urlBg})`} : null;
    const bgColor = colorBg ? {backgroundColor : colorBg} :  null;
    return (
        <section className={s.root} style={{...bgImg, ...bgColor}}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={cn(s.desc, s.full)}>
                        {children && children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;