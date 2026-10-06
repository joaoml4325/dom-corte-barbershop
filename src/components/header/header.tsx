'use client'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Logo } from '../logo';
import { LiHeaderMd, LiHeaderSm } from './li-header';

type Props = {
    onOrderClick: () => void;
}

export const Header = ({ onOrderClick }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-black/90 flex justify-between items-center px-4 md:px-12 xl:px-24 py-2 md:py-4">
            <Logo />
            <div>
                <ul className='hidden md:flex gap-10'>
                    <LiHeaderMd text="Sobre" />
                    <LiHeaderMd text="Trabalhos" />
                    <LiHeaderMd onClick={onOrderClick} text="Agendar" />
                </ul>
            </div>

            <div onClick={() => setOpen(true)} className={`block md:hidden cursor-pointer ${open ? 'hidden' : ''}`}>
                <MenuIcon />
            </div>

            <div className="absolute">
                <div className={`md:hidden bg-black/90 w-70/100 h-full px-8 py-4 z-20 fixed top-0 transition-all duration-300 ${open ? 'right-0' : '-right-140'}`}>
                    <div className='text-right mt-4'>
                        <CloseIcon onClick={() => setOpen(false)} className='cursor-pointer' />
                    </div>
                    <div>
                        <ul className="flex flex-col gap-10 text-2xl mt-10">
                            <LiHeaderSm text="Sobre" />
                            <LiHeaderSm text="Trabalhos" />
                            <LiHeaderSm onClick={onOrderClick} text="Agendar" />
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}