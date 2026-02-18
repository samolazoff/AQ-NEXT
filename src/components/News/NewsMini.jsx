import { dataNews } from "./data";

import Link from "next/link";
import Image from "next/image";

function NewsMiniItem (props) {
    const {date, title, content} = props;
    return(
        <li className="news-mini-item text-md md:text-xl border-b-2 text-(--color-theme) pb-5">
            <Link href='/news' className="flex flex-col gap-2">
                <data value={date} className="mini-news-data">{date}</data>
                <h3 className="title-mini-news">{title}</h3>
                {
                    content.map((itm,idx)=>{
                        const {type, content}=itm;

                        if(type==='txt'){
                            return (
                                <span className="news-mini__txt" key={idx}>{content}</span>
                            )
                        }

                        if(type==='txtBold'){
                            return (
                                <span className="news-mini__txt font-bold"  key={idx}>{content}</span>
                            )
                        }
                        if(type==='img'){
                            return (
                                <Image className="news-mini__img" src={content}  key={idx} alt='news-mini__img'/>
                            )
                        }
                    })
                }
            </Link>
        </li>
    )
}

export default function NewsMini () {
    return(
        <aside className="news-mini flex flex-col justify-start md:items-center md:w-2/5 w-auto">
            <h2 className="block-title text-2xl md:text-4xl text-(--color-theme) font-bold border-b-2">Новости</h2>
            <ul className="news-mini-list mt-5 flex flex-col gap-5">
                {
                    dataNews.map((itm, idx) => {
                        const {date, title, content} = itm;
                        return(
                            <NewsMiniItem key={idx} date={date} title={title} content={content}/>
                        )
                    })
                }
            </ul>
        </aside>
    )
}