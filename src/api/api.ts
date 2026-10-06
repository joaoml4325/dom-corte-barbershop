import { Cut } from "@/types/cut";
import { Members } from "@/types/members";
import { Review } from "@/types/reviews";

export const Cuts: Cut[] = [
    {
        id: 0,
        name: 'Corte tradicional',
        value: 'Corte Tradicional',
        description: 'Corte clássico na tesoura',
        price: 40,
        duration: 30,
        img: '/images/classic-cut.jpg'
    },
    {
        id: 1,
        name: 'Corte + barba',
        value: 'Cabelo e Barba',
        description: 'Corte clássico e barba',
        price: 65,
        duration: 45,
        img: '/images/classic-beard.jpg'
    },
    {
        id: 2,
        name: 'Barba',
        value: 'Barba',
        description: 'Apenas barba',
        price: 30,
        duration: 15,
        img: '/images/beard.jpg'
    },
    {
        id: 3,
        name: 'Degradê',
        value: 'Degradê',
        description: 'Corte moderno',
        price: 45,
        duration: 40,
        img: '/images/degrade.jpg'
    },
    {
        id: 4,
        name: 'Corte + sombrancelha',
        value: 'Cabelo e Sombrancelha',
        description: 'Corte clássico e sombrancelha',
        price: 50,
        duration: 35,
        img: '/images/eyebrow.jpg'
    },
];

export const TeamMembers: Members[] = [
    {
        id: 1,
        name: 'Carlos',
        value: 'Carlos',
        specialty: 'Especialista em cortes tradicionais e degradê.',
        img: '/images/carlos.jpg'
    },
    {
        id: 2,
        name: 'Rafael',
        value: 'Rafael',
        specialty: 'Especialista em barba e acabemento.',
        img: '/images/rafael.jpg'
    },
    {
        id: 3,
        name: 'Lucas',
        value: 'Lucas',
        specialty: 'Especialista em cortes modernos.',
        img: '/images/lucas.jpg'
    }
];

export const ReviewsApi: Review[] = [
    {
        name: 'Fulano',
        review: 'Ótimo ambiente com bons profissionais.',
        stars: 5,
        avatar: ''
    },
    {
        name: 'Ciclano',
        review: 'Melhor corte que já fiz. Atendimento excelente!',
        stars: 5,
        avatar: ''
    },
    {
        name: 'Beltrano',
        review: 'Ambiente muito bom e os barbeiros são muito profissionais.',
        stars: 5,
        avatar: ''
    },
    {
        name: 'Zulano',
        review: 'Gostei do corte.',
        stars: 4,
        avatar: ''
    },
    {
        name: 'Irano',
        review: 'Já virei cliente há mais de um ano.',
        stars: 5,
        avatar: ''
    },
    {
        name: 'Leltrano',
        review: 'Fui muito bem recebido.',
        stars: 4.5,
        avatar: ''
    }
];