import Image from "next/image";

import adgezImg from '../../../public/services/adgez.png';
import aeImg from '../../../public/services/ae.jpg';
import ammTDImg from '../../../public/services/ammTD.jpg';
import eztImg from '../../../public/services/ezt.jpg';
import gazTDImg from '../../../public/services/gazTD.jpg';
import germImg from '../../../public/services/germ.jpg';
import hbImg from '../../../public/services/hb.jpg';
import himTDImg from '../../../public/services/himTD.jpg';
import iskrImg from '../../../public/services/iskr.jpg';
import meImg from '../../../public/services/me.jpg';
import mmpmImg from '../../../public/services/mmpm.png';
import mtImg from '../../../public/services/mt.jpg';
import mtTDImg from '../../../public/services/mtTD.jpg';
import ptImg from '../../../public/services/pt.jpg';
import raschImg from '../../../public/services/rasch.jpg';
import rtImg from '../../../public/services/rt.jpg';
import scanerImg from '../../../public/services/scaner.png';
import sosudTDImg from '../../../public/services/sosudTD.jpg';
import uzdImg from '../../../public/services/uzd.jpg';
import vibrImg from '../../../public/services/vibr.jpg';
import vizImg from '../../../public/services/viz.jpg';
import vtImg from '../../../public/services/vt.jpg';

const dataTD = [
    {
        img: ammTDImg,
        title: "Аммиачные холодильные установки"
    },
    {
        img: gazTDImg,
        title: "Объекты газопотребления (в т.ч. газогорелочные устройства)"
    },
    {
        img: himTDImg,
        title: "Объекты химических, нефтехимических, нефтеперерабатывающих производств"
    },
        {
        img: mtTDImg,
        title: "Объекты магистральных газопроводов"
    },
    {
        img: sosudTDImg,
        title: "Сосуды, работающие под давлением"
    }
];
const dataNDT = [
    {
        img: scanerImg,
        title: "Метод рассеяния магнитного потока"
    },
    {
        img: adgezImg,
        title: "Контроль адгезии"
    },
    {
        img: aeImg,
        title: "Акустико-эмиссионный  контроль"
    },
    {
        img: eztImg,
        title: "Ультразвуковая толщинометрия"
    },
    {
        img: germImg,
        title: "Контроль герметичности"
    },
    {
        img: hbImg,
        title: "Измерение твердости"
    },
    {
        img: iskrImg,
        title: "Электроискровой метод контроля"
    },
    {
        img: meImg,
        title: "Металлографические исследования"
    },
    {
        img: mmpmImg,
        title: "Метод магнитной памяти металла"
    },
    {
        img: mtImg,
        title: "Магнитопорошковый контроль"
    },
    {
        img: ptImg,
        title: "Контроль проникающими веществами"
    },
    {
        img: raschImg,
        title: "Расчеты на прочность"
    },
    {
        img: rtImg,
        title: "Радиографическая дефектоскопия"
    },
    
    {
        img: uzdImg,
        title: "Ультразвуковая дефектоскопия"
    },
    {
        img: vibrImg, 
        title: "Вибродиагностический метод"},
    {
        img: vizImg,
        title: "Оптический контроль"},
    {
        img: vtImg, 
        title: "Вихретоковый контроль"}
];

function ItemForListNDT (props) {
    const {img, title} = props;
    return (
        <li className="services-ndt-item flex flex-col justify-end items-center gap-10 w-60">
            <div className="services-ndt-item-img-wrap flex flex-col justify-center h-50">
                <Image src={img} alt={title} className="services-ndt-item__img w-full object-cover"/>
            </div>
            <h3 className="services-ndt-item__title text-lg font-bold text-center h-10">{title}</h3>
        </li>
    );
}

function ItemForListTD (props) {
    const {img, title} = props;
    return (
        <li className="services-td-item flex flex-col justify-end items-center gap-5 w-60">
            <div className="services-td-item-img-wrap flex flex-col justify-start w-full object-cover">
                <Image src={img} alt={title} className="services-td-item__img h-60 object-cover"/>
            </div>
            <h3 className="services-td-item__title text-lg font-bold text-center h-20">{title}</h3>
        </li>
    );
}

export default function Services() {
    return (
        <section className="services mt-10">
            <div className="services-ndt container mx-auto flex flex-col justify-start items-start border-t-2 text-(--color-theme) p-2 md:p-10">
                <h2 className="block-title text-2xl md:text-4xl text-(--color-theme) font-bold border-b-2">Неразрушающий контроль</h2>
                <p className="services-disc text-lg md:text-2xl py-10">
                    Мы применяем широкий спектр методов неразрушающего контроля в т.ч. новейшие технологии, обеспечивая получение полной и достоверной информации о техническом состоянии контролируемых объектов
                </p>
                <ul className="services-ndt-list flex flex-row flex-wrap justify-center items-start gap-10 mt-10">
                    {
                        dataNDT.map((item, index) => 
                            <ItemForListNDT key={index} {...item}/>
                        )
                    }
                </ul>
            </div>
            <div className="services-td container mx-auto flex flex-col justify-start items-start border-t-2 text-(--color-theme) p-2 md:p-10">
                <h2 className="block-title text-2xl md:text-4xl text-(--color-theme) font-bold border-b-2">Техническое диагностирование</h2>
                <p className="services-disc text-lg md:text-2xl py-10">
                    Мы оказываем услуги по техническому диагностированию с продлением срока службы различных технических устройств, в том числе применяемых на опасных производственных объектах
                </p>
                <ul className="services-td-list w-full h-auto flex flex-row flex-wrap justify-center items-start gap-10 my-10 grow shrink basis-auto">
                    {
                        dataTD.map((item, index) => 
                            <ItemForListTD key={index} {...item}/>
                        )
                    }
                </ul>
            </div>
        </section>
    );
}