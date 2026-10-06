import { AccessTime, LocationPin } from "@mui/icons-material";
import { Container } from "../container";

export const Location = () => {
    return (
        <div className="bg-(--blue) py-10">
            <Container>
                <h2 className="font-title text-5xl md:text-7xl font-bold text-(--title-color) mb-4">Onde nos encontrar?</h2>
                <p className="text-[#bbb] mb-20 text-sm md:text-[16px]">Um espaço planejado para o seu conforto, localizado no ponto mais conveniente da região.</p>
                <div className="flex gap-10">
                    <div className="flex w-full max-h-full flex-col-reverse md:flex-row-reverse justify-between mx-auto gap-10">

                        <div className="w-full max-w-105">
                            <div className="flex items-center -ml-1">
                                <LocationPin className="text-red-400 mr-2" />
                                <h3 className="text-[#eee] font-bold">Endereço</h3>
                            </div>
                            <div className="pl-2">
                                <ul className="font-bold flex flex-col gap-1 mt-4 mb-6">
                                    <li>Rua das Flores, 123</li>
                                    <li>Curitiba - PR</li>
                                </ul>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14412.722203891954!2d-49.281125679133595!3d-25.432226612584067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46c446c6b1b%3A0xd0de5b0dd07147b!2sCentro%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1789750753104!5m2!1spt-BR!2sbr"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    className="w-full max-h-full border-0"
                                />
                            </div>
                        </div>

                        <div className="w-full max-w-105">
                            <div className="flex items-center -ml-1">
                                <AccessTime className="text-blue- mr-2" />
                                <h3 className="text-[#eee] font-bold">Horários</h3>
                            </div>
                            <ol className="w-full flex flex-col justify-between gap-1 pl-2 mt-2 [&>li]:flex [&>li]:justify-between [&>li]:font-bold [&>li]:py-3 [&>li]:border-t [&>li]:border-(--gold) [&>li:first-child]:border-0">
                                <li>Segunda a sexta <span className="text-(--yellow-light)">09:00 - 19:00</span></li>
                                <li>Sábado <span className="text-(--yellow-light)">09:00 - 17:00</span></li>
                                <li>Domingo <span className="font-semibold text-gray-700">Fechado</span></li>
                            </ol>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
}