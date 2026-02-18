export default function ContactsMini() {
    return(
        <div className="contacts-mini flex flex-col justify-center items-center text-(--color-theme) lg:px-10 xl:py-5">
            <h2 className="app-title text-2xl sm:text-4xl font-bold w-auto lg:text-5xl xl:text-6xl">ООО "АЛЬФА КВАЛИТЕТ"</h2>
            <span className="contacts-mini-txt text-sm sm:text-xl">
                220084, г. Минск, ул. Франциска Скорины, д. 51, пом. 301А
            </span>
            <span className="contacts-mini-txt text-sm sm:text-xl">
                тел./факс: +375 (17) 232-13-13, e-mail: alfaquality@ya.ru
            </span>
        </div>
    )
}