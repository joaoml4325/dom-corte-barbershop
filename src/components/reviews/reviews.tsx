'use client'

import { ReviewsApi } from "@/api/api";
import { Container } from "../container";
import { ReviewItem } from "./review-item";
import { useEffect, useRef, useState } from "react";

export const Reviews = () => {

    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    const visibleItems = isMobile ? 1 : isTablet ? 2 : 3;
    const gap = isMobile ? 12 : isTablet ? 24 : 32;

    const [slide, setSlide] = useState(visibleItems);

    const itemRef = useRef<HTMLDivElement>(null);

    const reviews = [
        ...ReviewsApi.slice(-visibleItems),
        ...ReviewsApi,
        ...ReviewsApi.slice(0, visibleItems)
    ];

    const [itemWidth, setItemWidth] = useState(0);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        const handleResize = () => {
            const width = window.innerWidth;

            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 1024);

            clearTimeout(timeout);

            timeout = setTimeout(() => {
                const mobile = width < 768;
                const tablet = width >= 768 && width < 1020;
                const items = mobile ? 1 : tablet ? 2 : 3;

                // Desativa a animação durante o reinício
                setIsTransitioning(false);

                // Volta à primeira avaliação original
                setSlide(items);

                // Mede novamente a largura depois do redimensionamento
                if (itemRef.current) {
                    setItemWidth(itemRef.current.offsetWidth);
                }

                // Reativa a animação depois de atualizar a posição
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setIsTransitioning(true);
                    });
                });
            }, 150);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    useEffect(() => {
        if (!itemRef.current) return;

        setItemWidth(itemRef.current.offsetWidth);
    }, [isMobile, isTablet]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(prev => prev + 1);
        }, isMobile ? 4000 : isTablet ? 3500 : 2500);

        return () => clearInterval(interval);
    }, [isMobile, isTablet]);

    useEffect(() => {
        if (slide !== ReviewsApi.length + visibleItems) return;

        const timeout = setTimeout(() => {
            setIsTransitioning(false);
            setSlide(visibleItems);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                });
            });
        }, 700);

        return () => clearTimeout(timeout);
    }, [slide]);

    // useEffect(() => {
    //     setIsTransitioning(false);
    //     setSlide(visibleItems);

    //     requestAnimationFrame(() => {
    //         setIsTransitioning(true);
    //     });
    // }, [visibleItems]);

    return (
        <div
            className="w-full border-y border-(--gold)"
            style={{
                backgroundImage: ('url(/images/background-barber-tesouras.jpg)'),
                backgroundPosition: 'center',
            }}
        >
            <div className="size-full bg-black/70 py-8 md:py-18 flex items-center">
                <Container>
                    <h2 className="font-title text-4xl md:text-5xl lg:text-7xl font-bold text-(--title-color)">Avaliações</h2>
                    <p className="text-(--light-gray) mt-2 mb-16 text-sm md:text-[16px]">A palavra de quem confia no nosso trabalho todos os dias.</p>
                    <div className="w-full md:w-156  lg:w-241 overflow-hidden mx-auto">
                        <div
                            className='flex'
                            style={{
                                gap: `${gap}px`,
                                transform: `translateX(-${(itemWidth + gap) * slide}px)`,
                                transition: isTransitioning
                                    ? "transform 700ms ease"
                                    : "none"
                            }}
                        >
                            {reviews.map((review, key) => (
                                <div
                                    key={key}
                                    ref={key === visibleItems ? itemRef : undefined}
                                    className="flex justify-center md:justify-start shrink-0 w-full md:w-75"
                                >
                                    <ReviewItem
                                        key={key}
                                        review={review}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}