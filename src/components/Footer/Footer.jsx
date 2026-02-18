import Link from "next/link";

export default function Footer(){
    const date = new Date();

    return(
        <footer className="app-footer bg-(--color-theme) h-25 flex flex-col justify-center">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <Link href='#' className="app-footer-txt text-2xl text-(--color-main) text-center">Минск, {date.getFullYear()}</Link>
            </div>
        </footer>
    )
}