import Image from "next/image";
import Link from "next/link";

import imgLogo from '../../../public/app/logo.png';

export default function Logo() {
    return(
        <h1 className="app-logo absolute top-0 left-0 w-25 p-2.5 lg:w-75 xl:w-auto">
            <Link href='/' >
                <Image src={imgLogo} alt="logo AQ"/>
            </Link>
        </h1>
    )
}