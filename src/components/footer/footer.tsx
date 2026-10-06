import { CallOutlined, EmailOutlined, Facebook, Instagram, YouTube } from "@mui/icons-material";
import { FaTiktok } from "react-icons/fa";

import { Container } from "../container";
import { Logo } from "../logo";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="">
            <Container>
                <div className="h-full md:h-50 flex items-center justify-between flex-col md:flex-row">
                    <div className="h-full flex flex-col justify-between py-10">
                        <Logo />
                        <p className="hidden md:block text-(--light-gray) text-sm font-light">©2026 Todos direitos reservados</p>
                        <p
                            className="hidden md:block text-sm text-(--light-gray) font-light"
                        >
                            Desenvolvido por
                            <Link
                                href="https:/github.com/joaoml4325"
                                className="ml-1 text-(--yellow-light) font-medium hover:underline"
                            >
                                João Matheus
                            </Link>
                        </p>
                    </div>

                    <div className="w-screen md:w-px h-px md:h-full bg-(--gold)" />

                    <div className="h-full flex flex-col items-center md:items-start justify-between py-10">
                        <h3 className="uppercase text-xl font-bold mb-6 md:mb-0">Contato</h3>
                        <div className="flex flex-col gap-4 items-center md:items-start">
                            <div className="flex gap-4">
                                <CallOutlined className="text-(--yellow-light)" />
                                <p className="text-(--light-gray)">(00) 1234-5678</p>
                            </div>
                            <div className="flex gap-4">
                                <EmailOutlined className="text-(--yellow-light)" />
                                <p className="text-(--light-gray)">domcorte@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-screen md:w-px h-px md:h-full bg-(--gold)" />

                    <div className="h-full flex flex-col items-center md:items-start justify-between py-10">
                        <h3 className="uppercase text-xl font-bold mb-6 md:mb-0">Redes socias</h3>
                        <div className="flex items-center gap-4">
                            <Link
                                href="https://www.instagram.com"
                                className="hover:text-pink-500 transition-colors duration-200"
                            >
                                <Instagram />
                            </Link>
                            <Link
                                href="https://www.tiktok.com"
                                className="hover:text-gray-700 transition-colors duration-200"
                            >
                                <FaTiktok className="text-xl" />
                            </Link>
                            <Link
                                href="https://www.facebook.com"
                                className="hover:text-blue-600 transition-colors duration-200"
                            >
                                <Facebook />
                            </Link>
                            <Link
                                href="https://www.youtube.com"
                                className="hover:text-red-500 transition-colors duration-200"
                            >
                                <YouTube />
                            </Link>
                        </div>
                    </div>

                    <div className="block md:hidden w-screen md:w-px h-px md:h-full bg-yellow-500" />

                    <div className="flex md:hidden flex-col items-center gap-1 py-10">
                        <p className="block md:hidden text-[#bbb] text-sm font-light">©2026 Todos direitos reservados</p>
                        <p
                            className="block md:hidden text-sm text-[#bbb] font-light"
                        >
                            Desenvolvido por
                            <Link
                                href="https:/github.com/joaoml4325"
                                className="ml-1 text-yellow-500 font-medium hover:underline"
                            >
                                João Matheus
                            </Link>
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}