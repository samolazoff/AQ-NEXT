'use client';

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import atomIcon from '../../../public/license/atom-icon.png';
import atomImg from '../../../public/license/atomImg.jpg';

import bgcaIcon from '../../../public/license/bgca-icon.png';
import bgcaImg from '../../../public/license/bgcaImg.jpg';

import gpnIcon from '../../../public/license/gpn-icon.png';
import gpnImg from '../../../public/license/gpnImg.png';

import stbIcon from '../../../public/license/stb-icon.gif';
import stbImg from '../../../public/license/stbImg.jpg';

import iconDown from '../../../public/btn/arrowDown.png';
import iconUp from '../../../public/btn/arrowUp.png';

const dataLicense = [
    {
        link: 'https://www.bsca.by/ru/registry/view?id=6138',
        imgIcon: bgcaIcon,
        img: bgcaImg,
        title: "Лаборатория неразрушающего контроля и технического диагностирования аккредитована на соответсвие СТБ ИСО/МЭК 17025. С полным содержанием области аккредитации можно ознакомиться на официальном сайте Белорусского государственного центра аккредитации"
    },
    {
        link: 'https://xn--e1aebclo5dzd.xn--90ais/onelicense/169253https://xn--e1aebclo5dzd.xn--90ais/onelicense/169253',
        imgIcon: gpnIcon,
        img: gpnImg,
        title: "Специальное разрешение (лицензию) на право осуществления деятельности в области промышленной безопасности. С полным содержанием области деятельности можно ознакомиться в Едином реестре лицензий. Номер лицензии в ЕРЛ: 16200000000827"
    },
    {
        link: false,
        imgIcon: stbIcon,
        img: stbImg,
        title: "Система менеджмента качества ООО «Альфа Квалитет» соответствует требованиям СТБ ISO 9001"
    },
        {
        link: false,
        imgIcon: atomIcon,
        img: atomImg,
        title: "Специальное разрешение (лицензию) на право осуществления деятельности в области использования атомной энергии и источников ионизирующего облучения (использование переносных рентгеновских аппаратов промышленного назначения)"
    },
];

function ItemForListLicense(props) {

    const {link, imgIcon, img, title} = props;

    const [isOpen, setIsOpen] = useState(false);

    if (link){
        return (
            <li className="license-item flex flex-col justify-start items-center gap-10 w-full">
                <div className="license-item-wrap-title flex flex-row justify-between items-center gap-10 w-full border rounded-2xl p-5 border-(--color-theme)">
                    <Image src={imgIcon} alt={title} className="license-item__icon h-24 w-auto object-contain"/>
                    <p className="license-item__title text-sm md:text-xl w-full text-start">{title}</p>
                    <Image src={isOpen ? iconUp : iconDown} alt={isOpen ? 'Down' : 'Up'} className="license-item__btn-icon w-12 object-contain cursor-pointer hover:opacity-60" onClick={() => setIsOpen(!isOpen)}/>
                </div>
                <Link href={link} target="_blank" className={isOpen ? "license-item__link block" : "license-item__link hidden"}>
                    <Image src={img} alt={title} className="license-item__icon h-auto w-auto object-contain"/>
                </Link>
                
            </li>
        )
    }
    else{
        return (
            <li className="license-item flex flex-col justify-start items-center gap-5 w-full">
                <div className="license-item-wrap-title flex flex-row justify-between items-center gap-5 w-full border rounded-2xl p-5 border-(--color-theme)">
                   <Image src={imgIcon} alt={title} className="license-item__icon h-24 w-auto object-contain"/>
                   <p className="license-item__title text-sm md:text-xl w-full text-start">{title}</p>
                   <Image src={isOpen ? iconUp : iconDown} alt={isOpen ? 'Down' : 'Up'} className="license-item__btn-icon w-12 object-contain cursor-pointer hover:opacity-60" onClick={() => setIsOpen(!isOpen)}/>
                </div>
                <Image src={img} alt={title} className={isOpen ? "license-item__icon block h-auto w-auto object-contain" : "license-item__icon hidden h-auto w-auto object-contain"}/>
            </li>
        )
    }
}


export default function License() {


    return (
        <section className="license mt-10">
            <div className="container mx-auto flex flex-col justify-start items-start border-t-2 text-(--color-theme) p-2 md:p-10">
                <h2 className="block-title text-2xl md:text-4xl text-(--color-theme) font-bold border-b-2">Разрешения</h2>
                <p className="license-disc text-lg md:text-2xl py-10">
                    Наша компания имеет все необходимые разрешительные документы для осуществления деятельности в области неразрушающего контроля и технического диагностирования, включая лицензии, сертификаты и аккредитации, подтверждающие нашу компетентность и соответствие требованиям отрасли
                </p>
                <ul className="license-list flex flex-col justify-start items-center gap-10 mt-10 w-full">
                    {
                        dataLicense.map((item, index) => 
                            <ItemForListLicense key={index} {...item}/>
                        )
                    }
                </ul>
            </div>
        </section>
    );
}