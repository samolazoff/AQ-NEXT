import ContactsMini from "../Contacts/ContactsMini";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

import './Header.css';

export default function Header() {
    return (
        <header className="app-header relative">
            <div className="bgc-header-block w-full h-20 absolute top-0"></div>
            <div className="container mx-auto flex flex-row justify-end items-center relative">
               <Logo/>
                <div className="title-block w-full flex flex-col justify-start items-center gap-5 lg:items-end">
                    <Nav/>
                    <ContactsMini/>
                </div>
            </div>
        </header>
    );
}