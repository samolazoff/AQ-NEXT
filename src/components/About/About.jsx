import Slider from "../Slider/Slider";

export default function About () {
    return(
        <div className="about w-auto md:w-3/5 flex flex-col justify-start items-start gap-5 px-2 md:border-r-2 text-(--color-theme)">
            <h2 className="block-title text-2xl md:text-4xl text-(--color-theme) font-bold border-b-2">О нас</h2>
            <p className="text-md md:text-xl text-(--color-theme) md:indent-15 ">
                Общество с ограниченной ответственностью «Альфа Квалитет» зарегистрировано в Минском горисполкоме в 2015 г.
                Наша специализация – деятельность в области промышленной безопасности.
            </p>
            <Slider/>
            <p className="text-md md:text-xl text-(--color-theme) md:indent-15 ">
                Мы используем новейшие методики и передовые технологии, обеспечиваем высокое качество работ по адекватным ценам.
            </p>
        </div>
    )
}