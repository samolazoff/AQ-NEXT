import Image from "next/image";
import Link from "next/link";

import imgBrest from '../../../public/clients/brest.png';
import imgBvm from '../../../public/clients/bvm.gif';
import imgEco from '../../../public/clients/ecj-logo.png';
import imgGazprom from '../../../public/clients/gazprom.png';
import imgMnpz from '../../../public/clients/mnpz.png';
import imgSofi from '../../../public/clients/sofi.jpg';

const dataClients = [
    {
        image: imgMnpz,
        title: '«Мозырский Нефтеперерабатывающий Завод»',
        link: 'https://mnpz.by/'
    },
    {
        image: imgEco,
        title: 'Экогаз',
        link: 'https://mnpz.by/'
    },
    {
        image: imgGazprom,
        title: 'Газпром трансгаз Беларусь',
        link: 'https://belarus-tr.gazprom.ru/'
    },
    {
        image: imgBvm,
        title: 'Белвторчермет',
        link: 'https://bvm.by/'
    },
    {
        image: imgSofi,
        title: 'Полоцкий молочный комбинат',
        link: 'https://www.safijka.by/'
    },
    {
        image: imgBrest,
        title: 'Брестский мясокомбинат',
        link: 'https://brestmeat.by/'
    }
];

function ClientItem (props) {
    const {image, title, link} = props;
    return (
        <li className="client-item w-60">
            <Link href={link} className="flex flex-col justify-end items-center">
                <Image src={image.src} alt={title} width={200} height={200}/>
            </Link>
        </li>
    )
}

export default function Clients () {
    return(
        <div className="clients container mx-auto flex flex-col justify-start items-center gap-10 px-2 border-t-2 text-(--color-theme) my-10 pt-10">
            <h2 className="block-title text-2xl md:text-4xl text-(--color-theme) font-bold border-b-2">Наши клиенты</h2>
            <ul className="clients-list w-auto flex flex-row flex-wrap justify-center items-center gap-5">
                {
                    dataClients.map((itm, idx) => {
                        const {image, title, link} = itm;
                        return(
                            <ClientItem key={idx} {...itm}/>
                        )
                    })
                }
            </ul>
            
        </div>
    )
}