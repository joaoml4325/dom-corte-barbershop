
import Link from "next/link";
import { Container } from "../container"
import { Button } from "../button";

type Props = {
    onOrderClick: () => void;
}

export const Hero = ({ onOrderClick }: Props) => {
    return (
        <section className="w-full h-full bg-black/65">
            <Container>
                <div className="pt-10 md:pt-50 flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col justify-center items-center md:items-start">
                        <h1 className="font-title text-5xl md:text-8xl font-bold text-center md:text-left mb-3 md:mb-6">Seu <span className="text-(--yellow-light)">estilo</span> <br /> começa aqui</h1>

                        <p className="text-[#bbb] text-xs md:text-lg text-center md:text-left w-40 md:w-auto">O estilo que você merece, a atitude que você carrega. <br /><span className="hidden md:block">Venha viver essa experiência e agende seu horário!</span></p>

                        <img src="/images/barber-shop.jpg" className="block md:hidden w-40 h-60 my-10 rounded-sm shadow-black/30 shadow-lg" />

                        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-8 md:mt-10">
                            <a
                                href="#services"
                                className="border border-white-500 text-center text-sm md:text-[16px] font-bold md:font-normal py-2 px-4 md:py-3 md:px-5 rounded-sm cursor-pointer transition-colors duration-300 hover:border-(--yellow-light) hover:text-(--yellow-light)"
                            >
                                Ver serviços
                            </a>
                            <Button
                                onClick={onOrderClick}
                                className="bg-(--yellow-light) text-sm md:text-[16px] font-bold md:font-normal text-black py-2 px-4 md:py-3 md:px-5 rounded-sm cursor-pointer transition-all duration-300 hover:scale-102" text="Agendar horário"
                            />
                        </div>
                    </div>
                    <img src="/images/barber-shop.jpg" className="hidden md:block h-140 rounded-sm shadow-black/30 shadow-lg" />
                </div>
            </Container>
        </section>
    );
}