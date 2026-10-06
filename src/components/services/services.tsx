'use client'

import { Cuts } from "@/api/api";
import { CutsItem } from "./cuts-item";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import { Container } from "../container";

export const Services = () => {
    const [slide, setSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const sliderRef = useRef<HTMLDivElement>(null);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        }

        checkScreen();

        window.addEventListener('resize', checkScreen);

        return () => {
            window.removeEventListener('resize', checkScreen);
        }
    }, []);

    const moveSlider = (newSlide: number) => {
        if (!sliderRef.current || !itemRef.current) return;

        const itemWidth = itemRef.current.offsetWidth;
        const gap = isMobile ? 16 : 40;

        sliderRef.current.style.transform =
            `translateX(-${(itemWidth + gap) * newSlide}px)`;

        setSlide(newSlide);
    };

    const goNext = () => {
        const amount = isMobile ? 1 : 2;
        const maxSlide = isMobile
            ? Cuts.length - 1
            : Cuts.length - 3;

        const nextSlide = Math.min(slide + amount, maxSlide);

        moveSlider(nextSlide);
    };

    const goPrev = () => {
        const amount = isMobile ? 1 : 2;

        const prevSlide = Math.max(slide - amount, 0);

        moveSlider(prevSlide);
    };

    return (
        <section id="services" className="bg-(--gray) py-10">
            <Container>
                <div className="w-full h-full overflow-hidden">
                    <h2 className="font-title text-4xl md:text-7xl font-bold text-(--title-color)">Serviços</h2>
                    <p className="text-(--light-gray) mt-2 mb-7 md:mb-16 text-xs md:text-sm max-w-lg">Na <span className="text-(--yellow-light) font-bold">Dom Corte</span>, o cuidado com o seu visual é levado a sério. <span className="hidden md:inline">Combinamos a tradição da barbearia clássica com as melhores técnicas modernas para entregar cortes precisos, barbas alinhadas e um atendimento de excelência.</span></p>
                    <div className="w-full md:w-250 overflow-hidden mx-auto">
                        <div
                            ref={sliderRef}
                            className="flex gap-4 md:gap-10 transition-transform duration-500 "
                        >
                            {Cuts.map((cut, index) => (
                                <div
                                    key={cut.id}
                                    ref={index === 0 ? itemRef : undefined}
                                    className="shrink-0 w-full md:w-75"
                                >
                                    <CutsItem cut={cut} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-4 mt-4">
                        <button
                            onClick={goPrev}
                            disabled={slide === 0}
                            className="bg-black/70 rounded-full p-1 cursor-pointer hover:text-(--yellow-light) disabled:hover:text-white disabled:opacity-30"
                        >
                            <ArrowLeftRounded />
                        </button>
                        <button
                            onClick={goNext}
                            disabled={
                                slide >= Cuts.length - (isMobile ? 1 : 3)
                            }
                            className="bg-black/70 rounded-full p-1 cursor-pointer hover:text-(--yellow-light) disabled:hover:text-white disabled:opacity-30"
                        >
                            <ArrowRightRounded />
                        </button>
                    </div>
                    <p className="block md:hidden text-xs text-[#bbb] mt-7">Combinamos a tradição da barbearia clássica com as melhores técnicas modernas para entregar cortes precisos, barbas alinhadas e um atendimento de excelência.</p>
                </div>
            </Container>
        </section>
    );
};