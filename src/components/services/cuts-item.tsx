import { Cut } from "@/types/cut";

type Props = {
    cut: Cut;
}

export const CutsItem = ({ cut }: Props) => {
    return (
        <div
            className="w-full h-75 md:w-75 rounded-xs"
            style={{
                    backgroundImage: `url(${cut.img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
        >
            <div className="size-full bg-linear-to-t from-black/80 to-white/0 rounded-xs flex flex-col justify-end pb-2 px-4">
                <h3 className="text-2xl text-(--yellow-light) font-title">
                    {cut.name === 'Corte + sombrancelha'
                        ? <span>Corte + <br /> Sombrancelha</span>
                        : cut.name
                    }
                </h3>
                <p className="mt-1 text-sm">{cut.description}</p>
            </div>
        </div>
    );
}