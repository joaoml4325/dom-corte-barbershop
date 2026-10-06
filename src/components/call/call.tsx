import { WhatsApp } from "@mui/icons-material";
import { Container } from "../container";
import { Button } from "../button";

type Props = {
    onOrderClick: () => void;
}

export const Call = ({ onOrderClick }: Props) => {
    return (
        <div className="bg-(--gray) py-16">
            <Container>
                <div className="text-center">
                    <p className="uppercase text-xs text-(--yellow-light)">Pronto para uma transformação?</p>
                    <h2 className="font-title text-4xl md:text-7xl font-bold text-(--title-color) my-4">Agende seu horário agora</h2>
                    <p className="text-(--light-gray) text-xs md:text-[16px]">Escolha o profissinal, o serviço e o horário ideal. Resposta rápida, atendimento VIP.</p>

                    <div className="w-30/100 h-px bg-(--yellow-light) my-12 mx-auto" />

                    <Button
                        onClick={onOrderClick}
                        text="Agendar agora"
                        className="bg-(--yellow-light) text-(--gray) uppercase font-bold py-4 px-8 rounded-xs cursor-pointer transition-all duration-300 hover:shadow-[2px_0px_5px_1px] shadow-yellow-300/30 hover:scale-103"
                    />
                    <div className="flex justify-center items-center gap-2 mt-4">
                        <WhatsApp className="text-green-500" fontSize="small" />
                        <p className="text-(--light-gray) text-sm">(00) 1234-5678</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}