import About from "@/components/About/About";
import Clients from "@/components/Clients/Clients";
import NewsMini from "@/components/News/NewsMini";

export default function Home() {
    return (
        <section className="app-home mt-10">
            <div className="container mx-auto flex flex-col md:flex-row gap-10 w-full border-t-2 text-(--color-theme) p-2 md:p-10">
                <About/>
                <NewsMini/>
            </div>
            <Clients/>
        </section>
    
    );
}