import z from 'zod';

export const orderSchema = z.object({
    service: z.string().min(1, 'Selecione um serviço'),
    barber: z.string().min(1, 'Selecione um barbeiro')
});

export type OrderFormData = z.infer<typeof orderSchema>