'use client';

import Link from "next/link";
import { usePathname} from 'next/navigation';
import { useState } from "react";

import Burger from "../Burger/Burger";

const dataNav = [
    {
        title: "главная",
        href: "/"
    },
    {
        title: "услуги",
        href: "/services"
    },
    {
        title: "разрешения",
        href: "/license"
    },
    {
        title: "отзывы",
        href: "/reviews"
    },
    {
        title: "новости",
        href: "/news"
    },
    {
        title: "контакты",
        href: "/contacts"
    },
];

function NavItem(props) {
    const {title, href} = props;
    const pathNeme = usePathname();

    let style = 'nav-item text-(--color-main) capitalize hover:text-(--color-primery)';

    if (pathNeme===href){
        style='nav-item text-(--color-primery) capitalize hover:text-(--color-primery)';
    }
    return(
        <li className={style}>
            <Link href={href}>{title}</Link>
        </li>
    )
};

export default function Nav() {

    const [open, setOpen] = useState(false);

    let viewNav = 'hidden md:flex flex-row';

    if(open){
        viewNav = 'flex flex-col absolute w-[100vw] h-[100vh] top-0 justify-center z-9';      
    }

    return(
        <nav className="app-nav w-full md:p-5 h-20 flex flex-row gap-10 justify-end items-center relative md:gap-5 lg:p-0">
            <ul className={`nav-items ${viewNav} gap-10 md:justify-end items-center text-xl bg-(--color-theme) md:bg-inherit md:text-base lg:text-xl`}>
                {
                    dataNav.map((itm,idx) => {
                        const {href, title} = itm;
                        return(
                            <NavItem key={idx} href={href} title={title} onClick={() => setOpen(!open)}/>
                        )
                    })
                }
            </ul>
            <Burger open={open} setOpen={setOpen}/>
        </nav>
    )
}