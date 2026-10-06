'use client'

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Cuts, TeamMembers } from "@/api/api";
import { SelectOrder } from "./select-order";

import { Clear } from "@mui/icons-material";

import {
    orderSchema,
    type OrderFormData
} from "@/schemas/order-schema";
import { generateMessage } from "@/lib/generate-message";

type Props = {
    isOpen: boolean;
    setIsOpen: () => void;
    hasOpened: boolean;
}

export const OrderForm = ({ isOpen, setIsOpen, hasOpened }: Props) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<OrderFormData>({
        resolver: zodResolver(orderSchema),
        defaultValues: {
            service: '',
            barber: ''
        }
    });
    
    const onSubmit = (data: OrderFormData) => {
        const message = generateMessage(data.service, data.barber);

        const url = `https://wa.me/${process.env.NODE_PUBLIC_ZAP}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    }

    return (
        <div
            className={`w-full h-screen fixed top-0 left-0 backdrop-blur-sm flex justify-center items-center
                ${
                    !hasOpened
                        ? 'opacity-0 pointer-events-none'
                        : isOpen
                            ? 'animate-orderOpen'
                            : 'animate-orderClose pointer-events-none'
                }
            `}
        >
            <div className="bg-[#0D0C0B] rounded shadow-xl shadow-black/30 w-full max-w-200 h-full max-h-150">
                <div className="flex justify-end pr-6 pt-6">
                    <div
                        onClick={setIsOpen}
                        className="w-min p-1 rounded-full bg-black/0  hover:bg-[#222] transition-colors duration-200"
                    >
                        <Clear
                            className="text-end text-(--yellow) cursor-pointer"
                        />
                    </div>
                </div>
                <div className=" flex flex-col justify-between items-center gap-10">
                    <h1 className="text-7xl font-title text-(--yellow)">Agendar</h1>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col items-center gap-10"
                    >
                        <div>
                            <Controller
                                name="service"
                                control={control}
                                render={({ field }) => (
                                    <SelectOrder
                                        options={Cuts.map(item => ({
                                            value: item.value,
                                            label: item.name
                                        }))}
                                        placeholder="Escolha seu serviço"
                                        title="Serviço"
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                            {errors.service && (
                                <p className="animate-warning w-fit bg-red-900 text-red-300 border border-red-500 text-sm rounded-md py-1 px-2 mt-2">{errors.service.message}</p>
                            )}
                        </div>

                        <div>
                            <Controller
                                name="barber"
                                control={control}
                                render={({ field }) => (
                                    <SelectOrder
                                        options={TeamMembers.map(item => ({
                                            value: item.value,
                                            label: item.name
                                        }))}
                                        placeholder="Escolha o profissional"
                                        title="Barbeiro"
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                            {errors.barber && (
                                <p className="animate-warning w-fit bg-red-900 text-red-300 border border-red-500 text-sm rounded-md py-1 px-2 mt-2">{errors.barber.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="bg-(--yellow) text-black text-center py-3 px-4 rounded cursor-pointer transition-colors duration-300 hover:bg-(--yellow-light)"
                        >
                            Agendar pelo Whatsapp
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}