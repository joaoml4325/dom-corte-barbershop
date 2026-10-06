## Configuração

Antes de executar o projeto, é necessário configurar a variável de ambiente responsável pelo número de WhatsApp utilizado para receber os agendamentos.

1. Crie um arquivo `.env.local` na raiz do projeto.
2. Adicione a variável:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=SEU_NUMERO_AQUI
```

3. Substitua `SEU_NUMERO_AQUI` pelo número de WhatsApp que deverá receber as mensagens.

> Utilize o número no formato internacional, apenas com números, sem espaços, `+`, parênteses ou hífens.

Exemplo:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

Depois disso, execute o projeto normalmente:

```bash
npm install
npm run dev
```
