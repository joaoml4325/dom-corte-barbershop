'use client'

import { ReviewsApi } from "@/api/api";
import { Container } from "../container";
import { ReviewItem } from "./review-item";
import { useEffect, useRef, useState } from "react";

export const Reviews = () => {

    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const visibleItems = isMobile ? 1 : 3;
    const gap = isMobile ? 12 : 32;

    const [slide, setSlide] = useState(visibleItems);

    const itemRef = useRef<HTMLDivElement>(null);

    const reviews = [
        ...ReviewsApi.slice(-visibleItems),
        ...ReviewsApi,
        ...ReviewsApi.slice(0, visibleItems)
    ];

    const [itemWidth, setItemWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);

            if (itemRef.current) {
                setItemWidth(itemRef.current.offsetWidth);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(prev => prev + 1);
        }, isMobile ? 4000 : 2500);

        return () => clearInterval(interval);
    }, [isMobile]);

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

    useEffect(() => {
        setIsTransitioning(false);
        setSlide(visibleItems);

        requestAnimationFrame(() => {
            setIsTransitioning(true);
        });
    }, [visibleItems]);

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
                    <h2 className="font-title text-4xl md:text-7xl font-bold text-(--title-color)">Avaliações</h2>
                    <p className="text-(--light-gray) mt-2 mb-16 text-sm md:text-[16px]">A palavra de quem confia no nosso trabalho todos os dias.</p>
                    <div className="w-full md:w-241 overflow-hidden mx-auto">
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